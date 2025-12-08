import PageLayout from "@/components/layout/PageLayout";
import PricingTable from "@/components/products/PricingTable";
import UseCaseCard from "@/components/products/UseCaseCard";
import { 
  Monitor, 
  Tv, 
  Settings, 
  Cloud,
  Factory,
  ShoppingCart,
  GraduationCap,
  Building2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  CreditCard,
  Wrench,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: CreditCard,
    title: "Нет CAPEX",
    description: "Платите ежемесячно из OPEX, не нагружая инвестбюджет"
  },
  {
    icon: Wrench,
    title: "Всё включено",
    description: "Оборудование, монтаж, платформа, поддержка — в одном платеже"
  },
  {
    icon: Cloud,
    title: "Российское ПО",
    description: "SmartPlayer — в реестре Минцифры, соответствует требованиям"
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Техподдержка и управление контентом по вашему запросу"
  }
];

const pricingTiers = [
  {
    name: "Эконом",
    specs: "43\" экран",
    price: "7 200 ₽",
    features: [
      "Экран 43 дюйма",
      "Медиаплеер",
      "Монтаж и настройка",
      "Лицензия SmartPlayer",
      "Техподдержка"
    ]
  },
  {
    name: "Стандарт",
    specs: "55\" экран",
    price: "11 400 ₽",
    highlight: true,
    features: [
      "Экран 55 дюймов",
      "Медиаплеер Pro",
      "Монтаж и настройка",
      "Лицензия SmartPlayer",
      "Техподдержка 24/7"
    ]
  },
  {
    name: "Премиум",
    specs: "65\"+ экран",
    price: "18 000 ₽",
    features: [
      "Экран от 65 дюймов",
      "Премиум медиаплеер",
      "Монтаж и настройка",
      "Лицензия SmartPlayer",
      "Приоритетная поддержка"
    ]
  },
  {
    name: "Управление",
    specs: "Только софт",
    price: "4 800 ₽",
    features: [
      "Лицензия SmartPlayer",
      "8 часов управления/мес",
      "Создание контента",
      "Публикация расписания",
      "Аналитика показов"
    ]
  }
];

const useCases = [
  {
    icon: Factory,
    title: "Производства",
    description: "KPI-экраны, визуализация показателей безопасности, инструктажи",
    result: "Снижение травматизма, повышение вовлечённости"
  },
  {
    icon: ShoppingCart,
    title: "Ритейл",
    description: "Внутренняя реклама, акции, информирование покупателей",
    result: "Рост среднего чека +12-15%"
  },
  {
    icon: GraduationCap,
    title: "Образование и медицина",
    description: "Расписания, объявления, навигация, информирование",
    result: "Улучшение коммуникации с посетителями"
  },
  {
    icon: Building2,
    title: "Офисы и БЦ",
    description: "Корпоративные коммуникации, новости, события",
    result: "Единое информационное пространство"
  }
];

const realCases = [
  {
    company: "ОКЕЙ",
    description: "Сеть гипермаркетов",
    stats: "150+ экранов",
    result: "Экономия 500 000 ₽/год на печатной продукции"
  },
  {
    company: "Т-Банк",
    description: "Филиальная сеть банка",
    stats: "700+ экранов в 50 городах",
    result: "Централизованное управление контентом"
  },
  {
    company: "Dodo Brands",
    description: "Сеть пиццерий",
    stats: "Меню-борды и инфо-экраны",
    result: "Рост среднего чека +12-15%"
  }
];

const Content = () => {
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
              Управление контентом
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Digital Signage решения для визуализации и управления контентом на цифровых экранах. 
              SaaS модель — оборудование и монтаж берём на себя.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Рассчитать проект
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://shop.emc3.ru', '_blank')}>
                Портал решений
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key message */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Оборудование и монтаж берём на себя — вы платите ежемесячно
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Снижаем инвестиционную нагрузку: вместо больших капитальных затрат — 
            понятный ежемесячный платёж, включающий всё необходимое.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <adv.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <PricingTable 
            title="Тарифы и комплекты"
            description="Выберите подходящий вариант — всё включено в ежемесячный платёж"
            tiers={pricingTiers}
          />
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Кому подходит
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Решения для разных отраслей с измеримым эффектом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Real cases */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Реальные кейсы
            </h2>
            <p className="text-muted-foreground text-lg">
              Примеры внедрения SmartPlayer у крупных клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realCases.map((caseItem, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-1">{caseItem.company}</h3>
                <p className="text-sm text-muted-foreground mb-4">{caseItem.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Tv className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{caseItem.stats}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{caseItem.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Рассчитаем проект под ваши задачи
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Подберём оптимальную конфигурацию экранов и покажем расчёт ежемесячного платежа
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
          >
            Получить расчёт
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Content;
