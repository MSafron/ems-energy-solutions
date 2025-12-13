declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
  serve(handler: (req: Request) => Response | Promise<Response>): void;
};

import { handleOptions, jsonResponse } from "../_shared/cors.ts";
// @ts-expect-error - Deno runtime supports remote imports; TS server in SPA project may not resolve https:// modules
import { SmtpClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

const clean = (v: unknown, max = 2000): string => {
  if (typeof v !== "string") return "";
  const s = v.trim().replace(/\r/g, "");
  return s.length > max ? s.slice(0, max) : s;
};

const requiredEnv = (key: string): string => {
  const val = Deno.env.get(key);
  if (!val) throw new Error(`Missing env: ${key}`);
  return val;
};

const formatBody = (p: { name: string; phone?: string; email?: string; message?: string }) => {
  const lines = [
    "Новая заявка с сайта emc3.ru",
    "",
    `Имя: ${p.name}`,
    `Телефон: ${p.phone || "-"}`,
    `Email: ${p.email || "-"}`,
    "",
    "Сообщение:",
    p.message || "-",
  ];
  return lines.join("\n");
};

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") return handleOptions(req);
    if (req.method !== "POST") return jsonResponse(req, { error: "Method not allowed" }, 405);

    const allowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
      .split(",")
      .map((s: string) => s.trim())
      .filter(Boolean);

    if (allowedOrigins.length > 0) {
      const origin = req.headers.get("Origin") ?? "";
      if (!allowedOrigins.includes(origin)) {
        return jsonResponse(req, { error: "Forbidden" }, 403);
      }
    }

    const payload = (await req.json()) as Payload;

    const name = clean(payload.name, 200);
    const phone = clean(payload.phone, 100);
    const email = clean(payload.email, 200);
    const message = clean(payload.message, 5000);

    if (!name || (!phone && !email)) {
      return jsonResponse(
        req,
        { error: "name and (phone or email) are required" },
        400,
      );
    }

    const smtpHost = Deno.env.get("SMTP_HOST") ?? "mail.hosting.reg.ru";
    const smtpPort = Number(Deno.env.get("SMTP_PORT") ?? "465");
    const smtpUser = requiredEnv("SMTP_USERNAME");
    const smtpPass = requiredEnv("SMTP_PASSWORD");

    const mailFrom = Deno.env.get("MAIL_FROM") ?? smtpUser;
    const mailTo = requiredEnv("MAIL_TO");

    const subject = Deno.env.get("MAIL_SUBJECT") ?? "Заявка с emc3.ru";
    const content = formatBody({ name, phone, email, message });

    const client = new SmtpClient();

    await client.connectTLS({
      hostname: smtpHost,
      port: smtpPort,
      username: smtpUser,
      password: smtpPass,
    });

    await client.send({
      from: mailFrom,
      to: mailTo,
      subject,
      content,
      replyTo: email || undefined,
    });

    await client.close();

    return jsonResponse(req, { ok: true }, 200);
  } catch (err) {
    console.error("send-contact-email error:", err);
    return jsonResponse(req, { error: "Internal error" }, 500);
  }
});