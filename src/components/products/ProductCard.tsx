import { LucideIcon, CheckCircle, Users } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  targetAudience?: string[];
  savings?: string;
}

const ProductCard = ({ icon: Icon, title, description, benefits, targetAudience, savings }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{title}</h3>
          {savings && (
            <span className="inline-block px-2 py-0.5 bg-accent/20 text-accent text-xs font-medium rounded-full">
              Экономия {savings}
            </span>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Эффекты:</h4>
          <ul className="space-y-1.5">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        
        {targetAudience && targetAudience.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              Кому подходит:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {targetAudience.map((audience, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
