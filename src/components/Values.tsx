import { ShieldCheck, Tag, BarChart3, Award } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Проверенные решения",
    description: "Всё оборудование проверено нашими собственными инвестициями"
  },
  {
    icon: Tag,
    title: "Эксклюзивные цены",
    description: "Глубокие скидки от производителей передаём клиентам"
  },
  {
    icon: BarChart3,
    title: "Контроль и верификация",
    description: "Каждый проект подключаем к платформе мониторинга"
  },
  {
    icon: Award,
    title: "Экспертиза с 2009 года",
    description: "Команда с 15+ годами опыта в энергосбережении"
  }
];

const Values = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши принципы
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border card-hover"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;