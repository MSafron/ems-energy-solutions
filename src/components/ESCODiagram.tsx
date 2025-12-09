import { useState, useRef, useEffect } from "react";
import { CheckCircle, Building2, Wallet, ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Компонент для 3D-столбца с двумя слоями
interface Bar3DProps {
  naturalHeight: number;
  moneyHeight: number;
  naturalColor: string;
  moneyColor: string;
  label: string;
  naturalLabel?: string;
  moneyLabel?: string;
  growthLabel?: string;
  visible: boolean;
  delay: number;
  maxHeight?: number;
  tooltipData?: {
    consumption: string;
    cost: string;
    growth?: string;
  };
}

const Bar3D = ({ 
  naturalHeight, 
  moneyHeight, 
  naturalColor, 
  moneyColor, 
  label, 
  naturalLabel,
  moneyLabel,
  growthLabel,
  visible, 
  delay,
  maxHeight = 140,
  tooltipData
}: Bar3DProps) => {
  const [hovered, setHovered] = useState(false);
  
  // Масштабируем высоту относительно максимального значения денег (139)
  const scale = maxHeight / 139;
  const naturalPx = naturalHeight * scale;
  const moneyPx = moneyHeight * scale;
  
  const barContent = (
    <div 
      className="flex flex-col items-center flex-1 min-w-14 max-w-16 md:max-w-24 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-40 md:h-48 flex items-end justify-center">
        {/* Задний столбец (деньги) — смещён */}
        <div 
          className={cn(
            "absolute rounded-t-lg border transition-all duration-1000 ease-out",
            moneyColor,
            hovered ? "brightness-125 scale-[1.02]" : ""
          )}
          style={{ 
            height: visible ? `${moneyPx}px` : '0px',
            width: 'calc(100% - 8px)',
            left: '8px',
            bottom: '4px',
            transitionDelay: `${delay + 200}ms`
          }}
        >
          {/* Процент роста на заднем столбце */}
          {growthLabel && (
            <span 
              className={cn(
                "absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] md:text-xs font-bold text-destructive transition-opacity duration-300 whitespace-nowrap",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${delay + 800}ms` }}
            >
              {growthLabel}
            </span>
          )}
          {/* Значение денег */}
          {moneyLabel && (
            <span 
              className={cn(
                "absolute top-2 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] text-destructive-foreground/80 transition-opacity duration-300 whitespace-nowrap",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${delay + 600}ms` }}
            >
              {moneyLabel}
            </span>
          )}
        </div>
        
        {/* Передний столбец (натуральные единицы) */}
        <div 
          className={cn(
            "relative w-full rounded-t-lg transition-all duration-1000 ease-out z-10 flex items-end justify-center pb-2",
            naturalColor,
            hovered ? "brightness-110 scale-[1.03] shadow-lg" : ""
          )}
          style={{ 
            height: visible ? `${naturalPx}px` : '0px',
            transitionDelay: `${delay}ms`
          }}
        >
          {naturalLabel && (
            <span 
              className={cn(
                "text-[9px] md:text-xs text-center font-medium px-1 text-foreground transition-opacity duration-300",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${delay + 600}ms` }}
            >
              {naturalLabel}
            </span>
          )}
        </div>
      </div>
      
      <span className="text-[9px] md:text-xs text-center text-muted-foreground mt-2 leading-tight">
        {label}
      </span>
    </div>
  );
  
  if (tooltipData) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {barContent}
        </TooltipTrigger>
        <TooltipContent className="bg-popover border shadow-lg">
          <div className="text-xs space-y-1">
            <p>Потребление: <span className="font-medium">{tooltipData.consumption}</span></p>
            <p>Стоимость: <span className="font-medium text-destructive">{tooltipData.cost}</span></p>
            {tooltipData.growth && (
              <p>Рост тарифа: <span className="font-medium text-destructive">{tooltipData.growth}</span></p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }
  
  return barContent;
};

// Компонент для стэкового столбца (во время контракта)
interface StackedBar3DProps {
  segments: Array<{
    percent: number;
    color: string;
    label: string;
  }>;
  moneyHeight: number;
  moneyColor: string;
  label: string;
  growthLabel?: string;
  visible: boolean;
  delay: number;
  maxHeight?: number;
  tooltipData?: {
    consumption: string;
    saving: string;
    withoutContract: string;
    growth?: string;
  };
}

const StackedBar3D = ({
  segments,
  moneyHeight,
  moneyColor,
  label,
  growthLabel,
  visible,
  delay,
  maxHeight = 140,
  tooltipData
}: StackedBar3DProps) => {
  const [hovered, setHovered] = useState(false);
  
  const totalPercent = segments.reduce((sum, s) => sum + s.percent, 0);
  // Масштабируем относительно максимального значения денег (139)
  const scale = maxHeight / 139;
  const totalPx = (totalPercent) * scale;
  const moneyPx = moneyHeight * scale;
  
  const barContent = (
    <div 
      className="flex flex-col items-center flex-shrink-0 min-w-14 max-w-16 md:max-w-24 group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-40 md:h-48 flex items-end justify-center">
        {/* Задний столбец (деньги без контракта) */}
        <div 
          className={cn(
            "absolute rounded-t-lg border transition-all duration-1000 ease-out",
            moneyColor,
            hovered ? "brightness-125" : ""
          )}
          style={{ 
            height: visible ? `${moneyPx}px` : '0px',
            width: 'calc(100% - 8px)',
            left: '8px',
            bottom: '4px',
            transitionDelay: `${delay + 200}ms`
          }}
        >
          {growthLabel && (
            <span 
              className={cn(
                "absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] md:text-xs font-bold text-destructive transition-opacity duration-300 whitespace-nowrap",
                visible ? "opacity-100" : "opacity-0"
              )}
              style={{ transitionDelay: `${delay + 800}ms` }}
            >
              {growthLabel}
            </span>
          )}
        </div>
        
        {/* Передний стэк (натуральные единицы) */}
        <div 
          className={cn(
            "relative w-full flex flex-col-reverse rounded-t-lg overflow-hidden transition-all duration-1000 ease-out z-10",
            hovered ? "scale-[1.03] shadow-lg" : ""
          )}
          style={{ 
            height: visible ? `${totalPx}px` : '0px',
            transitionDelay: `${delay}ms`
          }}
        >
          {segments.map((segment, idx) => {
            const segmentPx = (segment.percent / totalPercent) * 100;
            return (
              <div 
                key={idx}
                className={cn(
                  "w-full flex items-center justify-center transition-all duration-200",
                  segment.color,
                  hovered ? "brightness-110" : ""
                )}
                style={{ height: `${segmentPx}%` }}
              >
                <span 
                  className={cn(
                    "text-[8px] md:text-[10px] font-medium text-foreground transition-opacity duration-300 text-center px-0.5 leading-tight",
                    visible ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transitionDelay: `${delay + 600 + idx * 100}ms` }}
                >
                  {segment.percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
      
      <span className="text-[9px] md:text-xs text-center text-muted-foreground mt-2 leading-tight">
        {label}
      </span>
    </div>
  );
  
  if (tooltipData) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {barContent}
        </TooltipTrigger>
        <TooltipContent className="bg-popover border shadow-lg">
          <div className="text-xs space-y-1">
            <p>Потребление: <span className="font-medium">{tooltipData.consumption}</span></p>
            <p>Ваша экономия: <span className="font-medium text-accent">{tooltipData.saving}</span></p>
            <p>Без контракта: <span className="font-medium text-destructive">{tooltipData.withoutContract}</span></p>
            {tooltipData.growth && (
              <p>Рост тарифа: <span className="font-medium text-destructive">{tooltipData.growth}</span></p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    );
  }
  
  return barContent;
};

const ESCODiagram = () => {
  const [activeTab, setActiveTab] = useState("before");
  const [barsVisible, setBarsVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Данные для вкладки "До контракта"
  const beforeData = {
    title: "До контракта",
    subtitle: "Рост затрат при бездействии",
    description: "Потребление стабильно, но платежи растут из-за индексации тарифов",
    years: [
      { label: "Сейчас", natural: 100, money: 100, consumption: "1000 кВт·ч", cost: "100%" },
      { label: "Год 1", natural: 100, money: 104, growth: "+4%", consumption: "1000 кВт·ч", cost: "104%" },
      { label: "Год 2", natural: 100, money: 111, growth: "+7%", consumption: "1000 кВт·ч", cost: "111%" },
      { label: "Год 3", natural: 100, money: 124, growth: "+12%", consumption: "1000 кВт·ч", cost: "124%" },
    ]
  };

  // Данные для вкладки "Во время контракта"
  const duringData = {
    title: "Во время контракта",
    subtitle: "3-10 лет",
    description: "Экономия делится: часть вам, часть на погашение инвестиций",
    segments: [
      { percent: 70, color: "bg-primary", label: "Погашение" },
      { percent: 10, color: "bg-accent", label: "Экономия" },
      { percent: 20, color: "bg-muted-foreground/50", label: "Потребление" },
    ],
    years: [
      { label: "Год 1", money: 104, growth: "+4%", consumption: "200 кВт·ч", saving: "10%", withoutContract: "104%" },
      { label: "Год 2", money: 111, growth: "+7%", consumption: "200 кВт·ч", saving: "10%", withoutContract: "111%" },
      { label: "Год 3", money: 124, growth: "+12%", consumption: "200 кВт·ч", saving: "10%", withoutContract: "124%" },
      { label: "Год 4", money: 139, growth: "+15%", consumption: "200 кВт·ч", saving: "10%", withoutContract: "139%" },
    ]
  };

  // Данные для вкладки "После контракта" - с 3 сегментами
  const afterData = {
    title: "После контракта",
    subtitle: "Навсегда",
    description: "Оборудование ваше, вся экономия остаётся у вас навсегда",
    energySegments: [
      { percent: 20, color: "bg-muted-foreground/50", label: "Потребление" },
      { percent: 80, color: "bg-accent", label: "Экономия" },
    ],
    // Столбец выгоды = высота как "Год 4" (139%)
    // Базовая часть (100%) = 20% потребление + 80% экономия заказчика
    // Дополнительная часть (+39%) = экономия от роста тарифа (139 - 100)
    benefitTotalHeight: 139,
    benefitSegments: [
      { percent: 20, color: "bg-muted-foreground/50", label: "Потребление" },
      { percent: 80, color: "bg-accent", label: "Экономия заказчика" },
      { percent: 39, color: "bg-green-600", label: "От роста тарифа" },
    ]
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

  const phaseOrder = ["before", "during", "after"];
  const phases = [
    { id: "before", title: "До контракта" },
    { id: "during", title: "Во время контракта" },
    { id: "after", title: "После контракта" }
  ];

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

  // Рендер вкладки "До контракта"
  const renderBeforePhase = () => (
    <Card>
      <CardHeader className="pb-4 md:pb-6">
        <CardTitle className="text-lg md:text-xl">{beforeData.title}</CardTitle>
        <CardDescription>{beforeData.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Легенда */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 text-[10px] md:text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-muted-foreground/60 rounded" />
            <span className="text-muted-foreground">Натуральные ед.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive/30 border border-destructive/50 rounded" />
            <span className="text-muted-foreground">Деньги (₽)</span>
          </div>
        </div>
        
        <div className="flex items-end justify-center gap-2 md:gap-4 mb-6 overflow-x-auto pb-2">
          {beforeData.years.map((year, idx) => (
            <Bar3D
              key={idx}
              naturalHeight={year.natural}
              moneyHeight={year.money}
              naturalColor="bg-muted-foreground/60"
              moneyColor="bg-destructive/30 border-destructive/50"
              label={year.label}
              naturalLabel={idx === 0 ? "100%" : ""}
              growthLabel={year.growth}
              visible={barsVisible}
              delay={idx * 150}
              tooltipData={{
                consumption: year.consumption,
                cost: year.cost,
                growth: year.growth
              }}
            />
          ))}
        </div>
        
        <div className="text-center mb-2">
          <span className="text-xs text-destructive font-medium">
            ← Индексация тарифа →
          </span>
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground">
          {beforeData.description}
        </p>
      </CardContent>
    </Card>
  );

  // Рендер вкладки "Во время контракта"
  const renderDuringPhase = () => (
    <Card>
      <CardHeader className="pb-4 md:pb-6">
        <CardTitle className="text-lg md:text-xl">{duringData.title}</CardTitle>
        <CardDescription>{duringData.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Легенда */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 text-[10px] md:text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-primary rounded" />
            <span className="text-muted-foreground">Погашение</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded" />
            <span className="text-muted-foreground">Экономия</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-muted-foreground/50 rounded" />
            <span className="text-muted-foreground">Потребление</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-destructive/30 border border-destructive/50 rounded" />
            <span className="text-muted-foreground">Без контракта</span>
          </div>
        </div>
        
        {/* Горизонтальная прокрутка на мобильных */}
        <div className="flex items-end justify-start md:justify-center gap-2 md:gap-4 mb-6 overflow-x-auto pb-2 px-2 -mx-2">
          {duringData.years.map((year, idx) => (
            <StackedBar3D
              key={idx}
              segments={duringData.segments}
              moneyHeight={year.money}
              moneyColor="bg-destructive/30 border-destructive/50"
              label={year.label}
              growthLabel={year.growth}
              visible={barsVisible}
              delay={idx * 150}
              tooltipData={{
                consumption: year.consumption,
                saving: year.saving,
                withoutContract: year.withoutContract,
                growth: year.growth
              }}
            />
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground">
          {duringData.description}
        </p>
      </CardContent>
    </Card>
  );

  // Рендер вкладки "После контракта"
  const renderAfterPhase = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const maxHeight = 140;
    const scale = maxHeight / 139;
    const totalPercent = afterData.benefitSegments.reduce((s, seg) => s + seg.percent, 0);
    // Столбец "Выгода" = высота как "Год 4" (139%)
    const benefitPx = afterData.benefitTotalHeight * scale;
    // Столбец "Энергия" = базовый уровень (100%)
    const energyPx = 100 * scale;
    
    return (
      <Card>
        <CardHeader className="pb-4 md:pb-6">
          <CardTitle className="text-lg md:text-xl">{afterData.title}</CardTitle>
          <CardDescription>{afterData.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Легенда */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 text-[10px] md:text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-muted-foreground/50 rounded" />
              <span className="text-muted-foreground">Потребление</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent rounded" />
              <span className="text-muted-foreground">Экономия заказчика (80%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-600 rounded" />
              <span className="text-muted-foreground">Доп. экономия от тарифа (+39%)</span>
            </div>
          </div>
          
          <div className="flex items-end justify-center gap-6 md:gap-12 mb-6">
            {/* Энергетический столбец */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHovered('energy')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative w-16 md:w-24 h-40 md:h-48 flex items-end">
                    <div 
                      className={cn(
                        "w-full flex flex-col-reverse rounded-t-lg overflow-hidden transition-all duration-1000 ease-out",
                        hovered === 'energy' ? "scale-[1.03] shadow-lg brightness-110" : ""
                      )}
                      style={{ 
                        height: barsVisible ? `${energyPx}px` : '0px',
                        transitionDelay: '0ms'
                      }}
                    >
                      {afterData.energySegments.map((segment, idx) => (
                        <div 
                          key={idx}
                          className={cn("w-full flex items-center justify-center", segment.color)}
                          style={{ height: `${segment.percent}%` }}
                        >
                          <span 
                            className={cn(
                              "text-[9px] md:text-xs font-medium text-foreground transition-opacity duration-300",
                              barsVisible ? "opacity-100" : "opacity-0"
                            )}
                            style={{ transitionDelay: `${600 + idx * 100}ms` }}
                          >
                            {segment.percent}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
                    Энергия
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-popover border shadow-lg">
                <div className="text-xs space-y-1">
                  <p>Потребление после модернизации: <span className="font-medium">20%</span></p>
                  <p>Достигаемая экономия: <span className="font-medium text-accent">80%</span></p>
                </div>
              </TooltipContent>
            </Tooltip>
            
            {/* Столбец выгоды с 3 сегментами */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className="flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHovered('benefit')}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="relative w-16 md:w-24 h-40 md:h-48 flex items-end">
                    <div 
                      className={cn(
                        "w-full flex flex-col-reverse rounded-t-lg overflow-hidden transition-all duration-1000 ease-out",
                        hovered === 'benefit' ? "scale-[1.03] shadow-lg brightness-110" : ""
                      )}
                      style={{ 
                        height: barsVisible ? `${benefitPx}px` : '0px',
                        transitionDelay: '150ms'
                      }}
                    >
                      {afterData.benefitSegments.map((segment, idx) => {
                        const segmentHeight = (segment.percent / totalPercent) * 100;
                        return (
                          <div 
                            key={idx}
                            className={cn("w-full flex items-center justify-center", segment.color)}
                            style={{ height: `${segmentHeight}%` }}
                          >
                            <span 
                              className={cn(
                                "text-[8px] md:text-[10px] font-medium text-foreground transition-opacity duration-300 text-center leading-tight",
                                barsVisible ? "opacity-100" : "opacity-0"
                              )}
                              style={{ transitionDelay: `${700 + idx * 100}ms` }}
                            >
                              {segment.percent}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <span className="text-[10px] md:text-xs text-muted-foreground mt-2 text-center">
                    Выгода
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-popover border shadow-lg">
                <div className="text-xs space-y-1">
                  <p>Потребление: <span className="font-medium">20%</span></p>
                  <p>Экономия заказчика: <span className="font-medium text-accent">80%</span></p>
                  <p>Доп. экономия от роста тарифа: <span className="font-medium text-green-600">+39%</span></p>
                  <p className="pt-1 border-t border-border mt-1">Итого выгода: <span className="font-bold">139%</span> (как Год 4)</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <p className="text-center text-sm md:text-base text-muted-foreground">
            {afterData.description}
          </p>
        </CardContent>
      </Card>
    );
  };

  return (
    <TooltipProvider>
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
                      onClick={() => handleTabChange(phase)}
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
                <TabsContent value="before">
                  {renderBeforePhase()}
                </TabsContent>
                <TabsContent value="during">
                  {renderDuringPhase()}
                </TabsContent>
                <TabsContent value="after">
                  {renderAfterPhase()}
                </TabsContent>
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
    </TooltipProvider>
  );
};

export default ESCODiagram;
