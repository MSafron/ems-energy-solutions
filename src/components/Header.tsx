import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/emc3-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="EMC.3" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground/80 hover:text-foreground transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-foreground transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection("advantages")} className="text-foreground/80 hover:text-foreground transition-colors">
              Преимущества
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
              Контакты
            </button>
          </nav>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Портал проверенных решений
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
