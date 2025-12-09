import { useState, useRef, useEffect } from "react";
import { CheckCircle, Building2, Wallet, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const ESCODiagram = () => {
  const [activeTab, setActiveTab] = useState("before");
  const [barsVisible, setBarsVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  
  const phases = [
    {
      id: "before",
      title: "До контракта",
      subtitle: "Текущее состояние",
      bars: [
        { label: "Затраты на энергию", percent: 100, color: "bg-destructive/70" },
      ],
      description: "Высокие затраты на электроэнергию, устаревшее оборудование"
    },
    {
      id: "during",
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
      id: "after",
      title: "После контракта",
      subtitle: "Навсегда",
      bars: [
        { label: "Потребление", percent: 20, color: "bg-muted-foreground/50" },
        { label: "Вся экономия — ваша", percent: 80, color: "bg-accent" },
      ],
      description: "Оборудование ваше, вся экономия остаётся у вас навсегда"
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
    "Часть экономии с первого дня"
  ];

  const phaseOrder = ["before", "during", "after"];

  // Intersection Observer для запуска анимации баров
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (diagramRef.current) {
      observer.observe(diagramRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Перезапуск анимации при смене таба
  const handleTabChange = (value: string) => {
    setBarsVisible(false);
    setActiveTab(value);
    setTimeout(() => setBarsVisible(true), 50);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(diff) > minSwipeDistance) {
      const currentIndex = phaseOrder.indexOf(activeTab);
      if (diff > 0 && currentIndex < phaseOrder.length - 1) {
        handleTabChange(phaseOrder[currentIndex + 1]);
      } else if (diff < 0 && currentIndex > 0) {
        handleTabChange(phaseOrder[currentIndex - 1]);
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const goToPrevious = () => {
    const currentIndex = phaseOrder.indexOf(activeTab);
    if (currentIndex > 0) {
      handleTabChange(phaseOrder[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    const currentIndex = phaseOrder.indexOf(activeTab);
    if (currentIndex < phaseOrder.length - 1) {
      handleTabChange(phaseOrder[currentIndex + 1]);
    }
  };

  return (
    <section id="esco-model" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как работает энергосервисный контракт
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы инвестируем — вы экономите. Простая и прозрачная модель.
          </p>
        </AnimatedSection>

        {/* Shadcn Tabs with mobile swipe support */}
        <AnimatedSection delay={200}>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full mb-12">
            {/* Desktop tabs */}
            <TabsList className="hidden md:grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="before">До контракта</TabsTrigger>
              <TabsTrigger value="during">Во время контракта</TabsTrigger>
              <TabsTrigger value="after">После контракта</TabsTrigger>
            </TabsList>
            
            {/* Mobile compact tabs with arrows */}
            <div className="md:hidden mb-6">
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={goToPrevious}
                  disabled={activeTab === "before"}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    activeTab === "before" 
                      ? "text-muted-foreground/30" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <TabsList className="flex-1 grid grid-cols-3 h-auto p-1">
                  {phases.map((phase) => (
                    <TabsTrigger 
                      key={phase.id} 
                      value={phase.id}
                      className="text-xs px-2 py-2 data-[state=active]:text-primary"
                    >
                      <span className="hidden sm:inline">{phase.title}</span>
                      <span className="sm:hidden">
                        {phase.id === "before" ? "До" : phase.id === "during" ? "Во время" : "После"}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <button
                  onClick={goToNext}
                  disabled={activeTab === "after"}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    activeTab === "after" 
                      ? "text-muted-foreground/30" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Swipe indicator dots */}
              <div className="flex justify-center gap-2 mt-3">
                {phaseOrder.map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setActiveTab(phase)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeTab === phase 
                        ? "bg-primary w-4" 
                        : "bg-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
            </div>
            
            <div
              ref={diagramRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {phases.map((phase) => (
                <TabsContent key={phase.id} value={phase.id}>
                  <Card>
                    <CardHeader className="pb-4 md:pb-6">
                      <CardTitle className="text-lg md:text-xl">{phase.title}</CardTitle>
                      <CardDescription>{phase.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Bars container */}
                      <div className="flex items-end justify-center gap-2 md:gap-4 h-48 md:h-64 mb-6">
                        {phase.bars.map((bar, barIndex) => (
                          <div key={barIndex} className="flex flex-col items-center flex-1 max-w-24 md:max-w-32">
                            <div 
                              className={cn(
                                "w-full rounded-t-lg transition-all duration-1000 ease-out flex items-end justify-center pb-2 md:pb-3",
                                bar.color
                              )}
                              style={{ 
                                height: barsVisible ? `${bar.percent * 1.8}px` : '0px',
                                transitionDelay: `${barIndex * 150}ms`
                              }}
                            >
                              <span 
                                className={cn(
                                  "text-[10px] md:text-xs text-center font-medium px-1 md:px-2 leading-tight text-foreground transition-opacity duration-300",
                                  barsVisible ? "opacity-100" : "opacity-0"
                                )}
                                style={{ transitionDelay: `${barIndex * 150 + 600}ms` }}
                              >
                                {bar.percent}%
                              </span>
                            </div>
                            <span className="text-[10px] md:text-xs text-center text-muted-foreground mt-2 leading-tight">
                              {bar.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="text-center text-sm md:text-base text-muted-foreground">
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </AnimatedSection>

        {/* Benefits blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <AnimatedSection animation="slide-left" delay={100}>
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 h-full">
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
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20 h-full">
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
          </AnimatedSection>
        </div>

        {/* Key message */}
        <AnimatedSection animation="scale-in" delay={300}>
          <div className="bg-primary rounded-2xl p-8 text-center">
            <p className="text-primary-foreground text-lg md:text-xl font-medium max-w-3xl mx-auto">
              После окончания контракта оборудование переходит вам, 
              и вся экономия остаётся у вас навсегда
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ESCODiagram;
