import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/emc3-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
    setDirectionsOpen(false);
  };

  const directions = [
    { label: "Энергетические решения", path: "/energy" },
    { label: "Управление энергоданными", path: "/platform" },
    { label: "Управление контентом", path: "/content" },
  ];

  const navItems = [
    { label: "О компании", id: "about" },
    { label: "Преимущества", id: "advantages" },
    { label: "Контакты", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled 
          ? "shadow-md" 
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="EMC³" className="h-10 w-auto" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              О компании
            </button>
            
            {/* Directions dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDirectionsOpen(!directionsOpen)}
                onBlur={() => setTimeout(() => setDirectionsOpen(false), 150)}
                className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                Направления
                <ChevronDown className={`w-4 h-4 transition-transform ${directionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {directionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-lg overflow-hidden">
                  {directions.map((direction) => (
                    <Link
                      key={direction.path}
                      to={direction.path}
                      className="block px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                      onClick={() => setDirectionsOpen(false)}
                    >
                      {direction.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection("advantages")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Преимущества
            </button>
            
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => window.open('https://shop.emc3.ru', '_blank')}>
              Портал решений
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-left py-2"
            >
              О компании
            </button>
            
            {/* Mobile directions */}
            <div className="py-2">
              <p className="text-sm text-muted-foreground mb-2">Направления:</p>
              {directions.map((direction) => (
                <Link
                  key={direction.path}
                  to={direction.path}
                  className="block py-2 pl-4 text-foreground/70 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {direction.label}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={() => scrollToSection("advantages")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-left py-2"
            >
              Преимущества
            </button>
            
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-left py-2"
            >
              Контакты
            </button>
            
            <Button 
              className="mt-2"
              onClick={() => window.open('https://shop.emc3.ru', '_blank')}
            >
              Портал решений
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
