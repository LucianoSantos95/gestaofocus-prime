import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, FileText } from "lucide-react";

const NotionReferrerBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ref = document.referrer.toLowerCase();
    if (ref.includes("notion.so") || ref.includes("notion.site")) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="relative bg-primary/10 border-b border-primary/20">
      <div className="container-focus py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm">
          <FileText className="w-4 h-4 text-primary shrink-0" />
          <span className="text-foreground">
            Já baixou nosso template?{" "}
            <Link to="/proximo-passo" className="text-primary font-semibold hover:underline">
              Veja o próximo passo natural (Hub Free) →
            </Link>
          </span>
        </div>
        <button onClick={() => setShow(false)} className="text-foreground-muted hover:text-foreground shrink-0" aria-label="Fechar">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotionReferrerBanner;
