import { Link } from "react-router-dom";
import { Cookie, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Política de Cookies — Focus Gestão Inteligente"
        description="Como a Focus Gestão Inteligente utiliza cookies e tecnologias similares em seus sites e plataformas."
        canonical="/cookies"
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
            <Cookie className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Política de Cookies</h1>
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
            <h2 className="text-2xl font-semibold text-foreground mb-4">O que são cookies?</h2>
            <p className="text-foreground-muted leading-relaxed">
              Cookies são pequenos arquivos de texto que são colocados no seu computador ou dispositivo móvel 
              quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, 
              ou funcionem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Como usamos cookies?</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Utilizamos cookies para diversos fins, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
              <li>Lembrar suas preferências e configurações</li>
              <li>Entender como você usa nosso site</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Personalizar conteúdo e anúncios</li>
              <li>Analisar o tráfego do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de cookies que usamos</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Cookies Essenciais</h3>
                <p className="text-foreground-muted leading-relaxed">
                  São necessários para o funcionamento básico do site. Sem esses cookies, o site não pode 
                  funcionar corretamente. Eles incluem cookies que permitem lembrar suas preferências de 
                  privacidade e cookies de segurança.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Cookies de Desempenho</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Coletam informações sobre como os visitantes usam nosso site, como quais páginas são mais 
                  visitadas. Esses dados nos ajudam a melhorar o funcionamento do nosso site. Todos os dados 
                  são agregados e anônimos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Cookies de Funcionalidade</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Permitem que o site lembre das escolhas que você faz (como seu nome de usuário, idioma ou 
                  região) e forneça recursos aprimorados e mais pessoais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Cookies de Marketing</h3>
                <p className="text-foreground-muted leading-relaxed">
                  São usados para rastrear visitantes em diferentes sites. A intenção é exibir anúncios que 
                  sejam relevantes e envolventes para o usuário individual e, portanto, mais valiosos para 
                  editores e anunciantes terceiros.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies de terceiros</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Além dos nossos próprios cookies, também podemos usar vários cookies de terceiros para relatar 
              estatísticas de uso do site, entregar anúncios no e através do site, e assim por diante. Os 
              principais serviços de terceiros que utilizamos incluem:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
              <li>Google Analytics - para análise de tráfego e comportamento do usuário</li>
              <li>Google Ads - para publicidade direcionada</li>
              <li>Meta Pixel - para rastreamento de conversões</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Como controlar cookies?</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              Você tem o direito de decidir se aceita ou rejeita cookies. Você pode exercer seus direitos de 
              preferências de cookies através das seguintes opções:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted mb-4">
              <li>Usando o banner de consentimento de cookies que aparece quando você visita nosso site pela primeira vez</li>
              <li>Configurando as preferências do seu navegador para aceitar ou rejeitar cookies</li>
              <li>Excluindo cookies já armazenados no seu dispositivo através das configurações do navegador</li>
            </ul>
            <p className="text-foreground-muted leading-relaxed">
              Por favor, note que se você optar por rejeitar cookies, você ainda poderá usar nosso site, 
              embora seu acesso a algumas funcionalidades e áreas do nosso site possa ser restrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Como excluir cookies?</h2>
            <p className="text-foreground-muted leading-relaxed mb-4">
              A maioria dos navegadores da web permite algum controle da maioria dos cookies através das 
              configurações do navegador. Para saber mais sobre cookies, incluindo como ver quais cookies 
              foram definidos e como gerenciá-los e excluí-los, visite:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground-muted">
              <li>Chrome: chrome://settings/cookies</li>
              <li>Firefox: about:preferences#privacy</li>
              <li>Safari: Preferências &gt; Privacidade</li>
              <li>Edge: edge://settings/privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Alterações nesta política</h2>
            <p className="text-foreground-muted leading-relaxed">
              Podemos atualizar nossa Política de Cookies de tempos em tempos para refletir mudanças em 
              nossas práticas ou por outras razões operacionais, legais ou regulatórias. Recomendamos que 
              você revise esta página periodicamente para se manter informado sobre como usamos cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contato</h2>
            <p className="text-foreground-muted leading-relaxed">
              Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco através 
              do e-mail: <a href="mailto:comercial@focusinteligente.com.br" className="text-primary hover:underline">
                comercial@focusinteligente.com.br
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-card-border">
            <p className="text-sm text-foreground-muted text-center">
              Esta Política de Cookies é parte integrante dos nossos <Link to="/termos" className="text-primary hover:underline">
                Termos de Uso
              </Link> e <Link to="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
