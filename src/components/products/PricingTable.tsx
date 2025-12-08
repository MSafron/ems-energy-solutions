import { CheckCircle } from "lucide-react";

interface PricingTier {
  name: string;
  highlight?: boolean;
  specs: string;
  price: string;
  features: string[];
}

interface PricingTableProps {
  title: string;
  description?: string;
  tiers: PricingTier[];
}

const PricingTable = ({ title, description, tiers }: PricingTableProps) => {
  return (
    <div className="scroll-animate">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((tier, index) => (
          <div 
            key={index}
            className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
              tier.highlight 
                ? "bg-primary/5 border-primary shadow-lg scale-105" 
                : "bg-card border-border hover:border-primary/30"
            }`}
          >
            {tier.highlight && (
              <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
                Популярный выбор
              </div>
            )}
            <h4 className="text-lg font-bold text-foreground mb-1">{tier.name}</h4>
            <p className="text-sm text-muted-foreground mb-4">{tier.specs}</p>
            
            <div className="mb-4">
              <span className="text-2xl font-bold text-foreground">{tier.price}</span>
              <span className="text-sm text-muted-foreground">/мес</span>
            </div>
            
            <ul className="space-y-2">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlight ? "text-primary" : "text-accent"}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
