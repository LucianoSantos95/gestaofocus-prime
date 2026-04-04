## Plano: Melhorias Completas de SEO, UX, UI, Performance e Trust

Este é um projeto grande. Para manter qualidade, vou dividir em **3 fases** executáveis em sequência.

---

### FASE 1 — SEO e Schema Markup (Prioridade Alta)

**1.1 Schema JSON-LD global (Organization + LocalBusiness)**

- Adicionar no `SEOHead.tsx` um schema `Organization` para todas as páginas
- Adicionar schema `Service` nas páginas de produto (Soluções Sob Medida, Hub Empresarial)
- Adicionar schema `FAQPage` na Central de Ajuda e na nova página FAQ

**1.2 Meta descriptions ausentes**

- `CentralAjuda.tsx` — não tem SEOHead, adicionar
- `Documentacao.tsx`, `StatusPlataforma.tsx` — verificar e corrigir

**1.3 Hierarquia de headings**

- Auditar todas as páginas para garantir H1 único + hierarquia correta (H2 > H3)
- Footer: trocar `<h4>` por `<p className="font-semibold">`

**1.4 Sitemap atualizado**

- Adicionar `/contato` e qualquer rota faltante ao sitemap.xml
- Atualizar `lastmod` para data atual

---

### FASE 2 — UX: FAQ, Breadcrumbs, Formulário e Navegação

**2.1 Página FAQ dedicada (`/faq`)**

- Criar `src/pages/FAQ.tsx` com perguntas organizadas por categoria
- Schema `FAQPage` integrado
- Categorias: Soluções Sob Medida, Hub Empresarial, Preços, Suporte

**2.2 Breadcrumbs nas páginas internas**

- Criar componente `PageBreadcrumb.tsx` reutilizável (já existe `BlogBreadcrumb`)
- Adicionar em: Soluções, Hub, Sobre, Contato, FAQ, Sistemas Gratuitos

**2.3 Simplificar navegação**

- Menu atual tem 4 itens + CTA — já está bom, mas adicionar "Contato" como 5o item
- Mobile: manter igual

**2.4 Formulário de contato**

- Já existe em `/contato` com 3 campos — adicionar campo "Telefone" e integrar com a tabela `diagnosis_leads` ou criar tabela `contact_messages`
- Enviar dados para o banco ao invés de simular

**2.5 Seção "Números" na homepage**

- Adicionar entre Prova Social e Blog: contadores animados (43+ empresas, 150+ sistemas, 98% satisfação, 30 dias entrega)

---

### FASE 3 — UI, Performance e Trust

**3.1 Melhorias de tipografia e espaçamento**

- Garantir `text-base` (16px) como mínimo no corpo
- Aumentar padding entre seções: `py-20 md:py-28` (padrão atual) → `py-24 md:py-32`

**3.2 CTAs mais visíveis**

- Criar variante `btn-cta` com cor emerald/verde para CTAs secundários
- Garantir contraste WCAG AA em todos os botões

**3.3 Seção "Logos de Clientes" na homepage**

- Adicionar faixa de logos entre Hero e Problema (estilo "Trusted by")
- Usar ícones representativos de setores (já tem TrustedBySection/TrustedByMini)

**3.4 Performance**

- Lazy loading já está implementado para imagens e páginas
- Adicionar `loading="lazy"` em imagens do Footer e seções abaixo do fold
- Cache headers já configurados em `_headers`

**3.5 Schema Organization no index.html**

- Adicionar schema `Organization` estático no `<head>` do index.html para crawlers

---

### Arquivos envolvidos


| Arquivo                             | Ação                                          |
| ----------------------------------- | --------------------------------------------- |
| `src/components/SEOHead.tsx`        | Adicionar schema Organization global          |
| `src/pages/FAQ.tsx`                 | Nova página FAQ com schema FAQPage            |
| `src/components/PageBreadcrumb.tsx` | Novo componente breadcrumb reutilizável       |
| `src/pages/Index.tsx`               | Seção números, logos de clientes, espaçamento |
| `src/pages/CentralAjuda.tsx`        | Adicionar SEOHead                             |
| `src/components/Navigation.tsx`     | Adicionar "Contato" ao menu                   |
| `src/components/Footer.tsx`         | Semântica de headings                         |
| `src/App.tsx`                       | Rota `/faq`                                   |
| `src/index.css`                     | Ajustes de tipografia e espaçamento           |
| `src/pages/Contato.tsx`             | Campo telefone + salvar no banco              |
| `public/sitemap.xml`                | Adicionar `/faq`, atualizar datas             |
| `index.html`                        | Schema Organization estático                  |
| `supabase/migrations/`              | Tabela `contact_messages`                     |


### O que NÃO muda

- Paleta de cores (já coerente com 3 cores: navy/dark, azul primary, emerald)
- Imagens de produto (já são mockups profissionais)
- Lazy loading e code splitting (já implementados)
- Cache headers (já configurados)  
  
Quando finalizar uma fase indique um apalavra chave para seguirmos para a próxima, podeos usar "Próxima Fase''