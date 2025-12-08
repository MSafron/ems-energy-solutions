import { Search, Wallet, Wrench, PiggyBank, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Анализ",
    description: "Обследуем объект, фиксируем текущее потребление, считаем потенциальную экономию"
  },
  {
    number: "02",
    icon: Wallet,
    title: "Инвестиции",
    description: "EMC.3 инвестирует в оборудование и модернизацию за свой счёт"
  },
  {
    number: "03",
    icon: Wrench,
    title: "Реализация",
    description: "Поставка, монтаж, пусконаладка, подключение к мониторингу"
  },
  {
    number: "04",
    icon: PiggyBank,
    title: "Экономия",
    description: "Вы платите из достигнутой экономии — мы рассчитаем её для вашего объекта"
  }
];

const InvestmentModel = () => {
  return (
    <section id="advantages" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Инвестиционная модель
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Как работает энергосервисный контракт
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative scroll-animate">
              <div className="bg-card rounded-xl p-6 border border-border h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Accent block */}
        <div className="bg-primary rounded-2xl p-8 text-center scroll-animate">
          <p className="text-primary-foreground text-lg md:text-xl font-medium max-w-3xl mx-auto">
            После окончания контракта оборудование переходит вам, 
            и вся экономия остаётся у вас
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentModel;