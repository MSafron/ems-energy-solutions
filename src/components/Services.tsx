import { Zap, Database, Monitor, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Энергетические решения",
      description: "Профессиональная энергосервисная компания, специализирующаяся на проектах энергосбережения и энергоэффективности",
      features: [
        "Реализация энергосервисных контрактов",
        "Строительство энергоцентров",
        "Поставка энергоресурсов клиентам",
        "Энергоэффективное оборудование, проверенное нашими инвестициями",
        "Электротехническое оборудование для выполнения монтажных работ"
      ],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Database,
      title: "Управление энергоданными",
      description: "Цифровая платформа для комплексного мониторинга и управления энергетическими объектами",
      features: [
        "Онлайн веб-SCADA система учета и диспетчеризации",
        "Создание цифровых двойников энергообъектов",
        "Интеграция с ГИС системами (включая Zulu ГИС)",
        "Масштабируемость от одного устройства до целого региона",
        "Building Management System (BMS) для крупных объектов"
      ],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Monitor,
      title: "Управление потоками контента",
      description: "Digital Signage решения для визуализации и управления контентом на цифровых экранах",
      features: [
        "Централизованное управление устройствами визуализации",
        "Контроллеры для управления контентом",
        "Единая платформа для всех устройств",
        "SaaS модель с инвестициями в оборудование и монтаж",
        "Снижение инвестиционной нагрузки для клиента"
      ],
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(65,124,252,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(17,70,184,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Три направления деятельности
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Комплексный подход к энергоэффективности и цифровизации энергетической инфраструктуры
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group scroll-animate"
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Интеллектуальный подбор оборудования
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Используйте нашего AI-эксперта для подбора энергоэффективного оборудования, адаптированного под ваши задачи
            </p>
            <Button size="lg" className="gap-2">
              Открыть AI-помощника
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
