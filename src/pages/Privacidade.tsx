const Privacidade = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container-focus max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="hero-title mb-6 text-center">
              Política de Privacidade
            </h1>
            <p className="text-center text-foreground-muted mb-12">
              Última atualização: 29 de setembro de 2025
            </p>

            <div className="space-y-8 text-foreground/90">
              {/* Introdução */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
                <p className="leading-relaxed mb-4">
                  A Focus Gestão Empresarial ("Focus", "nós" ou "nosso") está comprometida em proteger a privacidade 
                  e os dados pessoais de nossos clientes, visitantes do site e usuários de nossos serviços. Esta 
                  Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                  pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="leading-relaxed">
                  Ao utilizar nossos serviços ou acessar nosso site, você concorda com as práticas descritas nesta política.
                </p>
              </section>

              {/* Informações Coletadas */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
                <p className="leading-relaxed mb-4">Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:</p>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.1 Informações Fornecidas por Você</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nome completo e informações de contato (e-mail, telefone)</li>
                  <li>Dados da empresa (nome, CNPJ, cargo)</li>
                  <li>Informações fornecidas em formulários de contato</li>
                  <li>Comunicações por e-mail, telefone ou WhatsApp</li>
                  <li>Informações de pagamento (processadas por terceiros seguros)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Informações Coletadas Automaticamente</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Endereço IP e dados de localização</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de navegação</li>
                  <li>Cookies e tecnologias similares</li>
                  <li>Dados de uso dos sistemas e plataformas</li>
                </ul>
              </section>

              {/* Uso das Informações */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Como Usamos suas Informações</h2>
                <p className="leading-relaxed mb-4">Utilizamos suas informações pessoais para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer, operar e manter nossos serviços</li>
                  <li>Processar transações e enviar informações relacionadas</li>
                  <li>Comunicar sobre atualizações, ofertas e novos serviços</li>
                  <li>Responder solicitações, dúvidas e fornecer suporte ao cliente</li>
                  <li>Personalizar e melhorar sua experiência</li>
                  <li>Analisar o uso de nossos serviços e desenvolver novos recursos</li>
                  <li>Prevenir fraudes e garantir a segurança</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              {/* Compartilhamento de Dados */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartilhamento de Informações</h2>
                <p className="leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. 
                  Podemos compartilhar seus dados apenas nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Prestadores de Serviços:</strong> Compartilhamos com empresas que nos ajudam a operar nossos serviços (hospedagem, pagamentos, análise de dados)</li>
                  <li><strong>Parceiros de Negócios:</strong> Quando você utiliza sistemas Notion ou outras integrações</li>
                  <li><strong>Requisitos Legais:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
                  <li><strong>Com seu Consentimento:</strong> Em outras situações mediante sua autorização explícita</li>
                </ul>
              </section>

              {/* Armazenamento e Segurança */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Armazenamento e Segurança</h2>
                <p className="leading-relaxed mb-4">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra 
                  acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares</li>
                  <li>Treinamento de equipe em proteção de dados</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Seus dados são armazenados em servidores seguros e mantidos pelo tempo necessário para cumprir as 
                  finalidades descritas nesta política ou conforme exigido por lei.
                </p>
              </section>

              {/* Seus Direitos */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos (LGPD)</h2>
                <p className="leading-relaxed mb-4">De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados</li>
                  <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados</li>
                  <li><strong>Anonimização ou Eliminação:</strong> Solicitar a anonimização ou eliminação de dados desnecessários</li>
                  <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro fornecedor</li>
                  <li><strong>Revogação do Consentimento:</strong> Retirar seu consentimento a qualquer momento</li>
                  <li><strong>Informação sobre Compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
                  <li><strong>Oposição:</strong> Se opor ao tratamento de dados</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Para exercer qualquer desses direitos, entre em contato conosco através do e-mail: 
                  <a href="mailto:comercial@focusinteligente.com.br" className="text-primary hover:underline ml-1">
                    comercial@focusinteligente.com.br
                  </a>
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="leading-relaxed mb-4">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e 
                  personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                </p>
                <p className="leading-relaxed">
                  Para mais informações, consulte nossa <a href="/cookies" className="text-primary hover:underline">Política de Cookies</a>.
                </p>
              </section>

              {/* Menores de Idade */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Menores de Idade</h2>
                <p className="leading-relaxed">
                  Nossos serviços são destinados a empresas e profissionais. Não coletamos intencionalmente informações 
                  de menores de 18 anos sem o consentimento dos pais ou responsáveis legais.
                </p>
              </section>

              {/* Alterações */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações nesta Política</h2>
                <p className="leading-relaxed">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças 
                  significativas publicando a nova política em nosso site e atualizando a data de "Última atualização" 
                  no topo desta página.
                </p>
              </section>

              {/* Contato */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contato</h2>
                <p className="leading-relaxed mb-4">
                  Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou 
                  ao tratamento de seus dados pessoais, entre em contato conosco:
                </p>
                <div className="bg-card/50 p-6 rounded-lg border border-card-border">
                  <p className="font-semibold text-foreground mb-2">Focus Gestão Empresarial</p>
                  <p className="text-foreground-muted">
                    E-mail: <a href="mailto:comercial@focusinteligente.com.br" className="text-primary hover:underline">
                      comercial@focusinteligente.com.br
                    </a>
                  </p>
                  <p className="text-foreground-muted mt-2">
                    WhatsApp: <a href="https://wa.me/5511916742443" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      +55 11 91674-2443
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacidade;