const Footer = () => {
  return (
    <footer className="py-8 bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">ЕМС.3</div>
            <p className="text-sm text-muted-foreground">
              © 2009-2025 Все права защищены
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>Энергоэффективность и инновации</p>
            <p className="mt-1">Профессиональная энергосервисная компания</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
