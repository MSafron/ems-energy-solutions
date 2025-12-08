import { LucideIcon, ArrowRight } from "lucide-react";

interface UseCaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  result?: string;
}

const UseCaseCard = ({ icon: Icon, title, description, result }: UseCaseCardProps) => {
  return (
    <div className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="text-base font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          {result && (
            <div className="flex items-center gap-1.5 text-sm text-accent font-medium">
              <ArrowRight className="w-4 h-4" />
              {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
