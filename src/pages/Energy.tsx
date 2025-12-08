import PageLayout from "@/components/layout/PageLayout";
import ProductCard from "@/components/products/ProductCard";
import { 
  Lightbulb, 
  Thermometer, 
  Gauge, 
  Factory, 
  Flame, 
  Zap,
  CreditCard,
  Package,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Lightbulb,
    title: "Светодиодное освещение",
    description: "Замена уличного, наружного и внутрицехового освещения на современные светодиодные системы с гарантированной экономией.",
    savings: "50-92%",
    benefits: [
      "Снижение энергопотребления в 2-10 раз",
      "Улучшение условий труда и освещённости",
      "Снижение аварийности на производстве",
      "Освещённость по нормам СанПиН",
      "Срок службы 50 000+ часов"
    ],
    targetAudience: ["Производства", "Склады", "ТЦ", "Бюджетные учреждения", "Улицы и дворы"]
  },
  {
    icon: Thermometer,
    title: "САРТ — Автоматизация отопления",
    description: "Система автоматического регулирования тепла с погодозависимым управлением. Исключает перетопы и недотопы.",
    savings: "12-30%",
    benefits: [
      "Комфортная температура ±1°C",
      "Отсутствие перетопов и недотопов",
      "Автоматический контроль 24/7",
      "Снижение аварийности систем отопления",
      "Продление срока службы оборудования"
    ],
    targetAudience: ["УК/ТСЖ", "Бюджетные учреждения", "Офисные здания", "ТЦ"]
  },
  {
    icon: Gauge,
    title: "Частотно-регулируемые привода",
    description: "Замена старых насосов и двигателей на оборудование с частотным регулированием для точного управления.",
    savings: "до 40%",
    benefits: [
      "Точное регулирование производительности",
      "Снижение пусковых токов",
      "Плавный пуск и остановка",
      "Снижение износа оборудования",
      "Автоматическая адаптация к нагрузке"
    ],
    targetAudience: ["Водоканалы", "Теплосети", "Производства", "Насосные станции"]
  },
  {
    icon: Factory,
    title: "Компрессорное оборудование",
    description: "Модернизация компрессорных систем с децентрализацией и оптимизацией производства сжатого воздуха.",
    savings: "20-35%",
    benefits: [
      "Децентрализация производства воздуха",
      "Снижение потерь в сетях",
      "Оптимизация давления",
      "Рекуперация тепла",
      "Снижение простоев"
    ],
    targetAudience: ["Производства", "Машиностроение", "Пищевая промышленность"]
  },
  {
    icon: Flame,
    title: "Блочно-модульные котельные",
    description: "Замена старых неэффективных котельных (уголь, мазут) на современные газовые блочно-модульные решения.",
    savings: "25-40%",
    benefits: [
      "Полное исключение аварийности",
      "Отсутствие риска размораживания систем",
      "Автоматический контроль с диспетчеризацией",
      "Минимальное присутствие персонала",
      "Экологичность и чистота"
    ],
    targetAudience: ["Объекты на угле/мазуте", "Изношенные котельные", "Удалённые объекты"]
  },
  {
    icon: Zap,
    title: "Газопоршневые энергоцентры",
    description: "Собственная генерация электроэнергии и тепла для энергоёмких предприятий с высоким тарифом.",
    savings: "30-40%",
    benefits: [
      "Независимость от сетей и тарифов",
      "Продажа излишков электроэнергии",
      "Когенерация: электричество + тепло",
      "Резервирование питания",
      "Стабильное энергоснабжение"
    ],
    targetAudience: ["Потребление от 500 кВт", "Высокий тариф", "Ограничения сети", "Ночное потребление"]
  },
  {
    icon: CreditCard,
    title: "Лизинг оборудования",
    description: "Финансирование энергоэффективных проектов через лизинговые сделки для снижения нагрузки на инвестбюджет.",
    benefits: [
      "OPEX вместо CAPEX",
      "Сохранение кредитных лимитов",
      "Налоговая оптимизация",
      "Гибкие условия платежей"
    ],
    targetAudience: ["Все предприятия"]
  },
  {
    icon: Package,
    title: "Продажа оборудования",
    description: "Прямые поставки энергоэффективного оборудования по эксклюзивным ценам от производителей.",
    benefits: [
      "Эксклюзивные цены от производителей",
      "Проверенное оборудование",
      "Гарантия и сервис",
      "Техническая поддержка"
    ],
    targetAudience: ["Снабженцы", "Монтажные организации", "Подрядчики"]
  }
];

const advantages = [
  { icon: TrendingUp, title: "Экономия 30-92%", description: "Гарантированное снижение затрат" },
  { icon: Shield, title: "Контракты до 10 лет", description: "Долгосрочные отношения" },
  { icon: Users, title: "0 инвестиций", description: "Мы финансируем проекты" },
  { icon: Clock, title: "Оплата из экономии", description: "Никаких рисков для вас" }
];

const Energy = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowRight className="w-4 h-4 rotate-180" />
              На главную
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Энергетические решения
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональная энергосервисная компания, специализирующаяся на проектах 
              энергосбережения и энергоэффективности. Мы инвестируем — вы экономите.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://shop.emc3.ru', '_blank')}>
                Портал решений
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <adv.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Типовые проекты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Решения, которые мы реализуем и финансируем чаще всего
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom project CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Или предложите свой проект
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            У вас есть идея энергоэффективного проекта? Мы изучим её и сами проинвестируем, 
            если проект окажется экономически эффективным.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
          >
            Предложить проект
          </Button>
        </div>
      </section>

      {/* Complex effects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Комплексные эффекты
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Помимо экономии на энергии, наши решения дают дополнительные преимущества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Улучшение условий труда</h3>
              <p className="text-sm text-muted-foreground">
                Качественное освещение и комфортная температура повышают производительность
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Снижение аварийности</h3>
              <p className="text-sm text-muted-foreground">
                Современное оборудование с мониторингом исключает внезапные отказы
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Полный контроль</h3>
              <p className="text-sm text-muted-foreground">
                Диспетчеризация и мониторинг дают прозрачность и управляемость
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Минимум персонала</h3>
              <p className="text-sm text-muted-foreground">
                Автоматизация снижает потребность в постоянном присутствии людей
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Energy;
