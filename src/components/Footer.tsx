import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#05050A" }} className="border-t border-white/[0.06]">
      <div className="container-focus py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/lovable-uploads/focus-logo.png" alt="Focus Gestão Inteligente — sistemas sob medida para agências e consultorias" width="120" height="32" className="h-7 mb-4" loading="lazy" />
            <p className="text-white/45 text-[13px] leading-relaxed">
              Gestão inteligente para agências, consultorias e prestadores de serviço. Sistemas sob medida ou plataforma pronta para usar.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white/80 text-[13px] mb-4 tracking-wide uppercase">Links</p>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Blog de Gestão", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Termos de Uso", href: "/termos-uso" },
                { label: "Política de Privacidade", href: "/privacidade" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/45 hover:text-white/80 text-[13px] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white/80 text-[13px] mb-4 tracking-wide uppercase">Contato</p>
            <ul className="space-y-2 text-[13px] text-white/45">
              <li>Atendimento Online — Brasil</li>
              <li><a href="mailto:contato@focusinteligente.com.br" className="hover:text-white/80 transition-colors">contato@focusinteligente.com.br</a></li>
              <li><a href="https://wa.me/5511916742443" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">+55 11 91674-2443</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8">
          <p className="text-white/25 text-[13px] text-center">© {currentYear} Focus Gestão Inteligente. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
