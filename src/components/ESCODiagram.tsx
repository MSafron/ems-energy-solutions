import { useState } from "react";
import { TrendingDown, Wallet, ArrowRight, CheckCircle, Building2, Wrench } from "lucide-react";

const ESCODiagram = () => {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const phases = [
    {
      id: 1,
      title: "До контракта",
      subtitle: "Текущее состояние",
      color: "bg-destructive/20 border-destructive/40",
      textColor: "text-destructive",
      bars: [
        { label: "Затраты на энергию", height: "h-48", color: "bg-destructive/70" },
      ],
      description: "Высокие затраты на электроэнергию, устаревшее оборудование, неэффективное потребление"
    },
    {
      id: 2,
      title: "Во время контракта",
      subtitle: "3-10 лет",
      color: "bg-primary/20 border-primary/40",
      textColor: "text-primary",
      bars: [
        { label: "Экономия", height: "h-24", color: "bg-accent" },
        { label: "Оплата инвестору", height: "h-16", color: "bg-primary" },
        { label: "Базовые затраты", height: "h-20", color: "bg-muted" },
      ],
      description: "Достигнутая экономия делится между клиентом и инвестором. Оплата — только из реальной экономии!"
    },
    {
      id: 3,
      title: "После контракта",
      subtitle: "Навсегда",
      color: "bg-accent/20 border-accent/40",
      textColor: "text-accent",
      bars: [
        { label: "Вся экономия — ваша", height: "h-28", color: "bg-accent" },
        { label: "Базовые затраты", height: "h-20", color: "bg-muted" },
      ],
      description: "Оборудование переходит вам, вся достигнутая экономия остаётся у вас навсегда"
    }
  ];

  const investorBenefits = [
    "Инвестиции в оборудование",
    "Проектирование и монтаж",
    "Пусконаладочные работы",
    "Гарантийное обслуживание",
    "Мониторинг и верификация"
  ];

  const clientBenefits = [
    "Нулевые капитальные затраты",
    "Доступ к объекту",
    "Согласование решений",
    "Оплата из экономии"
  ];

  return (
    <section id="esco-model" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как работает энергосервисный контракт
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы инвестируем — вы экономите. Оплата только из достигнутой экономии.
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={`relative bg-background rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer scroll-animate ${
                activePhase === phase.id 
                  ? phase.color + " scale-105 shadow-lg" 
                  : "border-border hover:border-primary/30"
              }`}
              onMouseEnter={() => setActivePhase(phase.id)}
              onMouseLeave={() => setActivePhase(null)}
            >
              {/* Phase number */}
              <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                activePhase === phase.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {phase.id}
              </div>

              {/* Arrow between phases */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}

              <div className="pt-4">
                <h3 className={`text-xl font-bold mb-1 ${activePhase === phase.id ? phase.textColor : "text-foreground"}`}>
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{phase.subtitle}</p>

                {/* Bar Chart */}
                <div className="flex items-end justify-center gap-3 h-52 mb-4">
                  {phase.bars.map((bar, barIndex) => (
                    <div key={barIndex} className="flex flex-col items-center">
                      <div 
                        className={`w-16 ${bar.height} ${bar.color} rounded-t-lg transition-all duration-500 flex items-end justify-center pb-2`}
                      >
                        <span className="text-[10px] text-center text-foreground font-medium px-1 leading-tight">
                          {bar.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed transition-opacity duration-300 ${
                  activePhase === phase.id ? "opacity-100" : "opacity-70"
                } text-muted-foreground`}>
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Investor responsibilities */}
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 scroll-animate">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">За счёт инвестора</h4>
                <p className="text-sm text-muted-foreground">EMC.3</p>
              </div>
            </div>
            <ul className="space-y-2">
              {investorBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Client responsibilities */}
          <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 scroll-animate">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">Усилия заказчика</h4>
                <p className="text-sm text-muted-foreground">Ваш вклад</p>
              </div>
            </div>
            <ul className="space-y-2">
              {clientBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key message */}
        <div className="bg-primary rounded-2xl p-8 text-center scroll-animate">
          <p className="text-primary-foreground text-lg md:text-xl font-medium max-w-3xl mx-auto">
            После окончания контракта оборудование переходит вам, 
            и вся экономия остаётся у вас навсегда
          </p>
        </div>
      </div>
    </section>
  );
};

export default ESCODiagram;
