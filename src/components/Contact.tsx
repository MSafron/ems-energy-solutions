import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
                    <a href="mailto:info@emc3.ru" className="text-foreground font-medium hover:text-primary transition-colors">
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
                    <a href="tel:+74951234567" className="text-foreground font-medium hover:text-primary transition-colors">
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
              <form className="bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="example@company.com" 
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Опишите вашу задачу</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
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