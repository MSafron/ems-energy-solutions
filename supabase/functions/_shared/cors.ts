declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

export const getCorsHeaders = (req: Request): Record<string, string> => {
  // Optional strict origin allowlist (comma-separated)
  const allowed = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
    .split(",")
    .map((s: string) => s.trim())
    .filter(Boolean);

  const origin = req.headers.get("Origin") ?? "";
  const allowOrigin =
    allowed.length === 0 ? "*" : (allowed.includes(origin) ? origin : allowed[0]);

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
};

export const handleOptions = (req: Request): Response => {
  return new Response(null, { status: 204, headers: getCorsHeaders(req) });
};

export const jsonResponse = (
  req: Request,
  body: unknown,
  status = 200,
): Response => {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
  });
};