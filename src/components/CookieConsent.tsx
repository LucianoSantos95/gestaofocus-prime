import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl animate-in slide-in-from-bottom-5">
      <div className="bg-background border border-border rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Utilizamos cookies</h3>
            <p className="text-sm text-muted-foreground">
              Para garantir uma experiência online personalizada, ao navegar aqui você concorda com nossa{" "}
              <Link to="/privacidade" className="text-primary hover:underline font-medium">
                política de privacidade
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto sm:flex-shrink-0">
          <Button
            variant="outline"
            onClick={handleDecline}
            className="flex-1 sm:flex-none"
          >
            Recusar
          </Button>
          <Button
            onClick={handleAccept}
            className="flex-1 sm:flex-none bg-primary hover:bg-primary/90"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
