import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

type SendContactEmailResponse = { ok: true } | { error: string };

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || (!form.phone.trim() && !form.email.trim())) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите имя и хотя бы телефон или email.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    const { data, error } = await supabase.functions.invoke<SendContactEmailResponse>(
      "send-contact-email",
      {
        body: {
          name: form.name.trim(),
          phone: form.phone.trim() || undefined,
          email: form.email.trim() || undefined,
          message: form.message.trim() || undefined,
        },
      },
    );

    setSubmitting(false);

    const serverError = data && "error" in data ? data.error : null;

    if (error || serverError) {
      console.error("Contact form error:", error, serverError);
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время!",
    });

    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Info */}
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Обсудим ваш проект?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Расскажите о вашей задаче — мы подготовим предварительный расчёт
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:info@emc3.ru"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      info@emc3.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a
                      href="tel:+74951234567"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="text-foreground font-medium">Москва</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div className="scroll-animate">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Имя
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Телефон
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Опишите вашу задачу
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;