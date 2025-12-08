import { Button } from "@/components/ui/button";
import logo from "@/assets/emc3-logo.png";
import { Calendar, TrendingDown } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,29%,8%)] via-[hsl(223,76%,15%)] to-background" />
      
      {/* Animated wave SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-64 opacity-20"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="hsl(var(--primary))" 
            fillOpacity="0.3"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate 
              attributeName="d" 
              dur="10s" 
              repeatCount="indefinite"
              values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
        <svg 
          className="absolute bottom-0 w-full h-48 opacity-10"
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="hsl(var(--accent))" 
            fillOpacity="0.5"
            d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,213.3C672,203,768,149,864,154.7C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate 
              attributeName="d" 
              dur="8s" 
              repeatCount="indefinite"
              values="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,213.3C672,203,768,149,864,154.7C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,229.3C672,256,768,288,864,272C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,213.3C672,203,768,149,864,154.7C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block mb-4">
            <img src={logo} alt="EMC³" className="h-24 md:h-32 lg:h-40 w-auto mx-auto" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,98%)] leading-tight">
            Инвестируем в{" "}
            <span className="gradient-text">энергоэффективность</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(220,9%,70%)] max-w-3xl mx-auto leading-relaxed">
            Энергосервисная компания нового поколения. Берём на себя финансирование 
            проектов модернизации энергосистем.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="bg-[hsl(0,0%,98%)]/5 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(0,0%,98%)]/10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-[hsl(0,0%,98%)]">с 2009 года</span>
              </div>
              <p className="text-[hsl(220,9%,60%)] text-sm">
                Команда с 15+ годами опыта в энергосбережении
              </p>
            </div>
            <div className="bg-[hsl(0,0%,98%)]/5 backdrop-blur-sm rounded-2xl p-6 border border-[hsl(0,0%,98%)]/10">
              <div className="flex items-center justify-center gap-3 mb-2">
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
