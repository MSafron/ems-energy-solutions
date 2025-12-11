import { TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Visual */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Кто мы
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <strong className="text-foreground">EMC.3</strong> — энергосервисная инвестиционная компания. 
                  Мы финансируем проекты по энергоэффективности и возвращаем инвестиции 
                  из достигнутой экономии.
                </p>
                <p>
                  Наша команда работает в сфере энергосбережения с 2009 года. 
                  Мы объединили экспертизу и инвестиционные возможности, чтобы сделать 
                  энергоэффективность доступной для каждого предприятия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;