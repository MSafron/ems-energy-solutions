import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-light py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto scroll-animate">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Контакты
            </h2>
            <p className="text-lg text-slate-600">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <form className="space-y-6 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900">Имя</label>
              <Input 
                placeholder="Введите ваше имя" 
                className="bg-slate-50 border-slate-200 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900">Email</label>
              <Input 
                type="email" 
                placeholder="example@company.com" 
                className="bg-slate-50 border-slate-200 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900">Телефон</label>
              <Input 
                type="tel" 
                placeholder="+7 (___) ___-__-__" 
                className="bg-slate-50 border-slate-200 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900">Сообщение</label>
              <Textarea 
                placeholder="Расскажите о вашем проекте..."
                rows={5}
                className="bg-slate-50 border-slate-200 focus:border-primary resize-none"
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
