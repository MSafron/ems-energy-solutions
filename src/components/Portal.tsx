import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portal = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center scroll-animate">
          <div className="bg-background rounded-2xl p-10 md:p-14 border border-border shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Портал проверенных энергоэффективных решений
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Оборудование, которое мы используем в своих проектах. 
              Проверено нашими инвестициями.
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => window.open('https://shop.emc3.ru', '_blank')}
            >
              Перейти на shop.emc3.ru
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portal;