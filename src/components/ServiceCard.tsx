import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: React.ReactNode;
  gradient?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  href, 
  icon,
  gradient = "from-card to-accent"
}: ServiceCardProps) => {
  return (
    <div className="service-card group">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Icon */}
      <div className="relative mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-foreground-muted leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-foreground-muted">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <Link to={href}>
          <Button 
            variant="ghost" 
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 justify-between w-full"
          >
            Saiba mais
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;