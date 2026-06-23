import { useState, useEffect } from "react";
import { X, FileText } from "lucide-react";

const WA_LINK =
  "https://wa.me/5511916742443?text=Ol%C3%A1+Luciano%2C+j%C3%A1+baixei+o+template+e+quero+saber+o+pr%C3%B3ximo+passo";

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
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Fale com a Focus pelo WhatsApp →
            </a>
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
