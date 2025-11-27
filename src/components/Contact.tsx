import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto scroll-animate">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <form className="space-y-6 bg-card/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border/50 shadow-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Имя</label>
              <Input 
                placeholder="Введите ваше имя" 
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input 
                type="email" 
                placeholder="example@company.com" 
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Телефон</label>
              <Input 
                type="tel" 
                placeholder="+7 (___) ___-__-__" 
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Сообщение</label>
              <Textarea 
                placeholder="Расскажите о вашем проекте..."
                rows={5}
                className="bg-background/50 resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full gap-2">
              <Mail className="w-4 h-4" />
              Отправить сообщение
            </Button>
          </form>

          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <MessageSquare className="w-5 h-5" />
              Наш канал в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
