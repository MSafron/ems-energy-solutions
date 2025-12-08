import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Building2, Wallet } from "lucide-react";

const ESCODiagram = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const phases = [
    {
      id: 0,
      title: "До контракта",
      subtitle: "Текущее состояние",
      bars: [
        { label: "Затраты на энергию", percent: 100, color: "bg-destructive/70" },
      ],
      description: "Высокие затраты на электроэнергию, устаревшее оборудование"
    },
    {
      id: 1,
      title: "Во время контракта",
      subtitle: "3-10 лет",
      bars: [
        { label: "Потребление", percent: 20, color: "bg-muted-foreground/50" },
        { label: "Ваша экономия", percent: 10, color: "bg-accent" },
        { label: "Погашение инвестиций", percent: 70, color: "bg-primary" },
      ],
      description: "Экономия делится: часть вам, часть на погашение инвестиций"
    },
    {
      id: 2,
      title: "После контракта",
      subtitle: "Навсегда",
      bars: [
        { label: "Потребление", percent: 20, color: "bg-muted-foreground/50" },
        { label: "Вся экономия — ваша", percent: 80, color: "bg-accent" },
      ],
      description: "Оборудование ваше, вся экономия остаётся у вас навсегда"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, phases.length]);

  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
    setIsAutoPlaying(false);
  };

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
    "Часть экономии с первого дня"
  ];

  return (
    <section id="esco-model" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как работает энергосервисный контракт
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы инвестируем — вы экономите. Простая и прозрачная модель.
          </p>
        </div>

        {/* Phase selector */}
        <div className="flex justify-center gap-2 mb-8">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseClick(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePhase === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {phase.title}
            </button>
          ))}
        </div>

        {/* Animated Bar Chart */}
        <div className="bg-background rounded-2xl p-8 border border-border mb-12 scroll-animate">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">{phases[activePhase].title}</h3>
              <p className="text-sm text-muted-foreground">{phases[activePhase].subtitle}</p>
            </div>
            <div className="flex items-center gap-2">
              {phases.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activePhase === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bars container */}
          <div className="flex items-end justify-center gap-4 h-64 mb-6">
            {phases[activePhase].bars.map((bar, barIndex) => (
              <div key={barIndex} className="flex flex-col items-center flex-1 max-w-32">
                <div 
                  className={`w-full ${bar.color} rounded-t-lg transition-all duration-700 ease-out flex items-end justify-center pb-3`}
                  style={{ height: `${bar.percent * 2.4}px` }}
                >
                  <span className="text-xs text-center font-medium px-2 leading-tight text-foreground">
                    {bar.percent}%
                  </span>
                </div>
                <span className="text-xs text-center text-muted-foreground mt-2 leading-tight">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            {phases[activePhase].description}
          </p>

          {/* Timeline arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activePhase === index 
                      ? "bg-primary text-primary-foreground scale-110" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  onClick={() => handlePhaseClick(index)}
                >
                  {index + 1}
                </div>
                {index < phases.length - 1 && (
                  <ArrowRight className={`w-6 h-6 mx-2 transition-colors duration-300 ${
                    activePhase > index ? "text-primary" : "text-muted-foreground/40"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
