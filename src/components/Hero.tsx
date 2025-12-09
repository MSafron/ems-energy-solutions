import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingDown } from "lucide-react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(240,29%,8%)]/90 via-[hsl(223,76%,15%)]/70 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,98%)] leading-tight">
            Инвестируем в{" "}
            <span className="gradient-text">энергоэффективность</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(220,9%,70%)] leading-relaxed">
            Энергосервисная компания нового поколения. Берём на себя финансирование 
            проектов модернизации энергосистем.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base px-8 py-6"
              onClick={scrollToContact}
            >
              Получить консультацию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base px-8 py-6 border-2 bg-transparent text-[hsl(0,0%,98%)] border-[hsl(0,0%,98%)]/30 hover:bg-[hsl(0,0%,98%)]/10"
              onClick={() => window.open('https://shop.emc3.ru', '_blank')}
            >
              Портал решений →
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 max-w-xl">
            <div className="bg-[hsl(0,0%,98%)]/5 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(0,0%,98%)]/10">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,98%)]">с 2009 года</span>
              </div>
              <p className="text-[hsl(220,9%,60%)] text-sm">
                Команда с 15+ годами опыта в энергосбережении
              </p>
            </div>
            <div className="bg-[hsl(0,0%,98%)]/5 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(0,0%,98%)]/10">
              <div className="flex items-center gap-3 mb-2">
                <TrendingDown className="w-6 h-6 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,98%)]">30-92%</span>
              </div>
              <p className="text-[hsl(220,9%,60%)] text-sm">
                Снижение затрат на энергию
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
