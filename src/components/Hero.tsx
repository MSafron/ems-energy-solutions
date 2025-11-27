import { Button } from "@/components/ui/button";
import logo from "@/assets/emc3-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
        <div className="absolute inset-0 hero-animation"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(65,124,252,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block mb-4">
            <img src={logo} alt="ЕМС.3" className="h-32 md:h-40 lg:h-48 w-auto mx-auto" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Профессиональная
            <br />
            <span className="text-primary">Энергосервисная Компания</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Специализируемся на комплексных проектах энергосбережения и энергоэффективности с собственными инвестициями
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-2">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
