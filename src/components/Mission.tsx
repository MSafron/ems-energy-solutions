import { CheckCircle2 } from "lucide-react";

const Mission = () => {
  const features = [
    {
      title: "Проверенные решения",
      description: "Все товары и решения в нашем каталоге проверены временем и нашими собственными инвестициями. Они доказали свою эффективность по соотношению цена/качество и достигаемым результатам."
    },
    {
      title: "Эксклюзивные скидки",
      description: "Как энергосервисная компания, мы получаем глубокие скидки от производителей благодаря объёмам и долгосрочному сотрудничеству. Мы передаём эту экономию нашим клиентам."
    },
    {
      title: "Контроль и верификация",
      description: "Чтобы экономить, нужно начать считать. Мы подключаем каждый проект к нашей платформе учёта и диспетчеризации, верифицируя достижение запланированных эффектов."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Наша миссия
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            С 2009 года энергосбережение и энергоэффективность — это не просто слова для нас, это наше кредо. 
            Мы стремимся к максимально рациональному использованию энергетических ресурсов и несём эту идею в массы: 
            каждый должен адекватно платить за ресурсы и получать от них максимальную выгоду.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 scroll-animate"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { label: "Проверенное оборудование", sublabel: "Инвестировано и протестировано нами" },
            { label: "Опыт с 2009 года", sublabel: "15+ лет реальных проектов" },
            { label: "Эксклюзивные цены", sublabel: "Скидки передаём клиентам" },
            { label: "Цифровой контроль", sublabel: "Верификация результатов через платформу" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-primary/5 border border-primary/10">
              <div className="font-semibold text-foreground mb-2">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
