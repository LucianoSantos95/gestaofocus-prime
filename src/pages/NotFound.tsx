import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-focus">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold text-primary/20 mb-4">404</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Página não encontrada
            </h2>
            <p className="text-xl text-foreground-muted mb-8">
              Ops! A página que você está procurando não existe ou foi movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button className="btn-hero group">
                <Home className="w-5 h-5 mr-2" />
                Voltar ao início
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              className="btn-secondary group" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Página anterior
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
