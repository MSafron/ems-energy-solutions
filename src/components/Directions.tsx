import { Zap, Activity, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const directions = [
  {
    icon: Zap,
    title: "Энергетические решения",
    description: "Профессиональная энергосервисная компания, специализирующаяся на проектах энергосбережения и энергоэффективности",
    features: [
      "Реализация энергосервисных контрактов",
      "Строительство энергоцентров",
      "Поставка энергоресурсов клиентам",
      "Энергоэффективное оборудование, проверенное нашими инвестициями",
      "Электротехническое оборудование для монтажных работ"
    ],
    link: "/energy"
  },
  {
    icon: Activity,
    title: "Управление энергоданными",
    description: "Цифровая платформа для комплексного мониторинга и управления энергетическими объектами",
    features: [
      "Онлайн веб-SCADA система учёта и диспетчеризации",
      "Создание цифровых двойников энергообъектов",
      "Интеграция с ГИС системами (включая Zulu ГИС)",
      "Масштабируемость от одного устройства до целого региона",
      "Building Management System (BMS) для крупных объектов"
    ],
    link: "/platform"
  },
  {
    icon: Monitor,
    title: "Управление контентом",
    description: "Digital Signage решения для визуализации и управления контентом на цифровых экранах",
    features: [
      "Централизованное управление устройствами визуализации",
      "Контроллеры для управления контентом",
      "Единая платформа для всех устройств",
      "SaaS модель с инвестициями в оборудование и монтаж",
      "Снижение инвестиционной нагрузки для клиента"
    ],
    link: "/content"
  }
];

const Directions = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Три направления деятельности
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Комплексный подход к энергоэффективности и цифровизации
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {directions.map((direction, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover scroll-animate flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              <div className="p-8 flex flex-col flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <direction.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {direction.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {direction.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {direction.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={direction.link}>
                  <Button variant="outline" className="w-full group/btn">
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;
