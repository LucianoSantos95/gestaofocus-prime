import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Termos de Uso — Focus Gestão Inteligente"
        description="Termos e condições de uso dos serviços e plataformas da Focus Gestão Inteligente."
        canonical="/termos"
        noindex
      />
      {/* Header */}
      <div className="bg-background-elevated border-b border-card-border">
        <div className="container-focus py-12">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Termos de Uso</h1>
          </div>
          <p className="text-foreground-muted">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-focus py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-foreground-muted leading-relaxed">
              Ao acessar e usar o site da Focus Inteligente, você concorda em cumprir e estar vinculado aos 
              seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, 
              por favor, não use nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso do Site</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              O conteúdo das páginas deste site é para sua informação geral e uso. Está sujeito a alterações 
              sem aviso prévio. Você concorda em usar o site apenas para fins lícitos e de maneira que não 
              infrinja os direitos de terceiros.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
              <li>Não usar o site de maneira que possa danificar, desabilitar ou prejudicar o site</li>
              <li>Não tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Não usar o site para transmitir material ilegal, ofensivo ou inapropriado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Propriedade Intelectual</h2>
            <p className="text-foreground-muted leading-relaxed">
              Este site contém material que é propriedade ou licenciado para nós. Este material inclui, 
              mas não está limitado a, design, layout, aparência e gráficos. A reprodução é proibida, 
              exceto de acordo com o aviso de direitos autorais, que faz parte destes termos e condições.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Serviços Oferecidos</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              A Focus oferece serviços de consultoria, sistemas personalizados e treinamentos. Ao contratar 
              nossos serviços:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
              <li>Você concorda em fornecer informações precisas e completas</li>
              <li>Você é responsável por manter a confidencialidade de suas credenciais de acesso</li>
              <li>Você concorda em pagar todas as taxas aplicáveis conforme acordado</li>
              <li>Os termos específicos de cada serviço serão detalhados em contrato separado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-foreground-muted leading-relaxed">
              O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco, 
              para o qual não seremos responsáveis. Será sua própria responsabilidade garantir que quaisquer 
              produtos, serviços ou informações disponíveis através deste site atendam aos seus requisitos 
              específicos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Links Externos</h2>
            <p className="text-foreground-muted leading-relaxed">
              Este site pode incluir links para outros sites. Esses links são fornecidos para sua conveniência 
              para fornecer mais informações. Eles não significam que endossamos o(s) site(s). Não temos 
              responsabilidade pelo conteúdo do(s) site(s) vinculado(s).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modificações dos Termos</h2>
            <p className="text-foreground-muted leading-relaxed">
              Reservamos o direito de modificar estes termos de uso a qualquer momento. As alterações entrarão 
              em vigor imediatamente após a publicação no site. É sua responsabilidade revisar estes termos 
              periodicamente. O uso continuado do site após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Lei Aplicável</h2>
            <p className="text-foreground-muted leading-relaxed">
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil. Você 
              concorda irrevogavelmente que os tribunais do Brasil terão jurisdição exclusiva para resolver 
              qualquer disputa que possa surgir em conexão com estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contato</h2>
            <p className="text-foreground-muted leading-relaxed">
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do 
              e-mail: <a href="mailto:comercial@focusinteligente.com.br" className="text-primary hover:underline">
                comercial@focusinteligente.com.br
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-card-border">
            <p className="text-sm text-foreground-muted text-center">
              Ao usar nosso site, você reconhece que leu, entendeu e concordou em estar vinculado a estes 
              Termos de Uso, juntamente com nossa <Link to="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link> e <Link to="/cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosUso;
