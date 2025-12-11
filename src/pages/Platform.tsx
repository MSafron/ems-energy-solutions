import PageLayout from "@/components/layout/PageLayout";
import UseCaseCard from "@/components/products/UseCaseCard";
import SEO from "@/components/SEO";
import { 
  Activity, 
  Database, 
  BarChart3, 
  Map, 
  Settings, 
  Brain,
  Server,
  Cloud,
  Building2,
  Thermometer,
  Droplets,
  Gauge,
  ArrowRight,
  CheckCircle,
  Layers,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: Database,
    title: "Сбор данных",
    description: "Подключение 200+ типов устройств: счётчики, датчики, контроллеры, УСПД",
    features: ["Автоматический опрос", "Любые протоколы", "Резервные каналы"]
  },
  {
    icon: Server,
    title: "Хранение",
    description: "Архивирование данных, паспортизация объектов, история изменений",
    features: ["Неограниченный архив", "Паспорта объектов", "Версионирование"]
  },
  {
    icon: BarChart3,
    title: "Анализ",
    description: "Балансы энергоресурсов, анализ потерь, отчёты по формам",
    features: ["Балансы и потери", "Типовые отчёты", "Excel-экспорт"]
  },
  {
    icon: Map,
    title: "Визуализация",
    description: "Мнемосхемы, графики, ГИС-интеграция (включая Zulu ГИС)",
    features: ["Мнемосхемы SCADA", "Интерактивные ГИС", "Дашборды"]
  },
  {
    icon: Settings,
    title: "Телеуправление",
    description: "Удалённое управление оборудованием, сценарии автоматизации",
    features: ["Команды и уставки", "Сценарии", "Расписания"]
  },
  {
    icon: Brain,
    title: "Прогностика",
    description: "AI-алгоритмы для предиктивного обслуживания и оптимизации",
    features: ["Предсказание отказов", "Оптимизация режимов", "Рекомендации"]
  }
];

const useCases = [
  {
    icon: Thermometer,
    title: "Диспетчеризация котельных",
    description: "Контроль температур, давлений, расходов в реальном времени",
    result: "Снижение аварийности на 80%"
  },
  {
    icon: Droplets,
    title: "Мониторинг ЦТП и насосных",
    description: "Учёт теплоносителя, управление насосами, балансировка",
    result: "Экономия на теплоносителе 15-25%"
  },
  {
    icon: Building2,
    title: "BMS для зданий",
    description: "Управление инженерными системами здания из единого центра",
    result: "Комплексная автоматизация"
  },
  {
    icon: Globe,
    title: "Региональная диспетчеризация",
    description: "Мониторинг сотен объектов РСО на единой карте",
    result: "Масштаб от 1 до 10 000+ точек"
  }
];

const deploymentOptions = [
  {
    title: "Публичное облако",
    price: "от 400 ₽",
    unit: "устройство/мес",
    features: [
      "Быстрый старт за 1 день",
      "Нет затрат на серверы",
      "Автоматические обновления",
      "Техподдержка 24/7"
    ],
    recommended: true
  },
  {
    title: "Self-hosted",
    price: "По проекту",
    unit: "",
    features: [
      "Размещение на ваших серверах",
      "Полный контроль данных",
      "Интеграция с внутренними системами",
      "Кастомизация под задачи"
    ],
    recommended: false
  }
];

const Platform = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      <SEO 
        title="Платформа управления энергоданными | ЕМС.3"
        description="Цифровая платформа для мониторинга и диспетчеризации энергетических объектов. От одного устройства до целого региона. Сбор данных, анализ, визуализация, телеуправление."
        keywords="диспетчеризация котельных, мониторинг ЦТП, SCADA, управление энергоданными, BMS, автоматизация зданий"
        url="https://emc3.ru/platform"
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ArrowRight className="w-4 h-4 rotate-180" />
              На главную
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Управление энергоданными
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Цифровая платформа для комплексного мониторинга и управления энергетическими объектами. 
              От одного устройства до целого региона.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Запросить демо
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://shop.emc3.ru', '_blank')}>
                Портал решений
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main purpose */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Основное применение — верификация экономии в ЭСК
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Платформа изначально создана для точного измерения и подтверждения экономии 
            в наших энергосервисных контрактах. Это гарантирует прозрачность расчётов.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Функциональные модули
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл работы с энергоданными — от сбора до прогностики
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <module.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-muted-foreground mb-4">{module.description}</p>
                <ul className="space-y-1.5">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Масштабируемость
            </h2>
            <p className="text-muted-foreground text-lg">
              Растём вместе с вашими задачами
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 bg-background rounded-xl px-6 py-4 border border-border">
              <Gauge className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">1 устройство</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-2 bg-background rounded-xl px-6 py-4 border border-border">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">Здание (BMS)</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-2 bg-background rounded-xl px-6 py-4 border border-border">
              <Layers className="w-6 h-6 text-primary" />
              <span className="font-medium text-foreground">Предприятие</span>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
            <div className="flex items-center gap-2 bg-primary rounded-xl px-6 py-4">
              <Globe className="w-6 h-6 text-primary-foreground" />
              <span className="font-medium text-primary-foreground">Регион</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Кейсы применения
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Типовые сценарии использования платформы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* Deployment options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Варианты подключения
            </h2>
            <p className="text-muted-foreground text-lg">
              Выберите оптимальный вариант для ваших задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 border-2 ${
                  option.recommended 
                    ? "bg-primary/5 border-primary" 
                    : "bg-card border-border"
                }`}
              >
                {option.recommended && (
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-4">
                    Рекомендуем
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  {option.title === "Публичное облако" ? (
                    <Cloud className="w-8 h-8 text-primary" />
                  ) : (
                    <Server className="w-8 h-8 text-primary" />
                  )}
                  <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{option.price}</span>
                  {option.unit && (
                    <span className="text-muted-foreground ml-1">/{option.unit}</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${option.recommended ? "text-primary" : "text-accent"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Platform;
