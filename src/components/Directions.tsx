import { Zap, Activity, Monitor } from "lucide-react";

const directions = [
  {
    icon: Zap,
    title: "Энергетические решения",
    description: "Энергосервисные контракты, светодиодное освещение, автоматизация отопления, газопоршневые энергоцентры, блочно-модульные котельные",
    tags: ["Энергосервис", "Освещение", "САРТ", "Генерация", "Котельные"]
  },
  {
    icon: Activity,
    title: "Управление энергоданными",
    description: "Цифровая платформа для мониторинга и управления энергетическими объектами",
    tags: ["SCADA", "Мониторинг", "BMS", "Диспетчеризация"]
  },
  {
    icon: Monitor,
    title: "Управление контентом",
    description: "Digital Signage решения для визуализации и управления контентом на цифровых экранах",
    tags: ["Digital Signage", "CMS", "SaaS"]
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
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover scroll-animate"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
              
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <direction.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {direction.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {direction.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {direction.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;