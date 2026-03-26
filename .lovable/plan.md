

# Plano: Reposicionamento para PMEs de Serviço + SEO Técnico

## Resumo

Reescrever o copy de 5 arquivos principais (Home, Hub Empresarial, Soluções Sob Medida, Sobre, Footer/Navigation) para falar diretamente com **agências, consultorias e prestadores de serviço**. Simultaneamente, migrar de `react-helmet` para `react-helmet-async`, garantir SEO técnico completo e atualizar sitemap/robots.

---

## Mudanças por Página

### 1. Home (`src/pages/Index.tsx`)

**Hero (H1):**
- De: "Transforme suas planilhas em um software próprio"
- Para: "Sua agência ou consultoria ainda gerencia tudo no WhatsApp e planilhas?"

**Subtítulo:** "Criamos sistemas sob medida para agências, consultorias e prestadores de serviço — ou acesse o Hub Empresarial, pronto para usar."

**Seção Problema:** Reescrever os 4 cards com dores específicas do nicho:
- "Projetos atrasados porque ninguém sabe o status real"
- "Financeiro no Excel — você descobre o prejuízo tarde demais"
- "Cada colaborador usa um método diferente"
- "Clientes cobrando atualização por WhatsApp"

**Depoimentos:** Padronizar todos para agências/consultorias (remover "Tech Startup")

**SEO:** Keywords focadas em "gestão para agências", "sistema para consultoria", "software para prestadores de serviço"

### 2. Hub Empresarial (`src/pages/HubEmpresarial.tsx`)

**Hero (H1):**
- De: "Pare de Gerenciar no Caos. Comece a Crescer."
- Para: "O sistema de gestão feito para agências e consultorias que querem escalar"

**Subtítulo:** Manter "Substitua 7 ferramentas" mas contextualizar: "Tudo que sua agência precisa — Financeiro, CRM, Projetos, RH, Marketing, Tarefas e Processos — em um único sistema com IA."

**Features:** Adicionar contexto do nicho nas descrições (ex: "Pipeline de vendas para consultorias", "Gestão de projetos com entregas para clientes")

**Testimonials:** Ajustar roles para focar em agências/consultorias/prestadores

**SEO:** Keywords: "plataforma gestão agências", "sistema para consultoria", "software gestão PME serviços"

### 3. Soluções Sob Medida (`src/pages/SolucoesSobMedida.tsx`)

**Hero (H1):**
- De: "Do Caos na Gestão ao Seu Software Exclusivo em Recorde de Tempo"
- Para: "Software exclusivo para agências e consultorias — do diagnóstico à entrega em 30 dias"

**Seção "Para quem é":** Reescrever com exemplos específicos:
- "Agências que gerenciam 10+ projetos simultâneos no WhatsApp"
- "Consultorias que precisam de portal do cliente profissional"
- "Prestadores de serviço que querem CRM + financeiro integrado"

**Reframing no-code:** Remover menções a "no-code". Substituir por "tecnologia de ponta que entrega em semanas o que levaria meses"

**SEO:** Keywords: "software sob medida agência", "sistema exclusivo consultoria", "desenvolvimento software prestadores serviço"

### 4. Sobre (`src/pages/AboutFocus.tsx`)

- Remover menção a "no-code" (linha 29)
- Reposicionar como especialista em gestão para empresas de serviço
- Adicionar SEOHead (não tem atualmente)

### 5. Componentes Globais

**Navigation:** Sem mudança estrutural (os nomes de menu já funcionam)

**Footer:** Atualizar tagline de "transformar processos manuais em Softwares" para "Gestão inteligente para agências, consultorias e prestadores de serviço"

---

## SEO Técnico

### Migração react-helmet → react-helmet-async
1. Instalar `react-helmet-async`
2. Adicionar `<HelmetProvider>` no `src/main.tsx`
3. Atualizar `SEOHead.tsx`: trocar import de `react-helmet` para `react-helmet-async`
4. Funciona como drop-in replacement — mesma API

### Checklist por página
- H1 único e com keyword do nicho
- Alt text em todas as imagens (auditar imgs existentes)
- Meta title ≤ 60 chars, meta description ≤ 155 chars
- Canonical URL correta
- Structured data (já existe no SEOHead, manter)

### Sitemap (`public/sitemap.xml`)
- Atualizar `lastmod` de todas as páginas principais para data atual
- Manter estrutura existente

### Robots.txt
- Já está correto, sem mudanças necessárias

---

## Arquivos Modificados

| Arquivo | Tipo de mudança |
|---|---|
| `package.json` | Adicionar `react-helmet-async` |
| `src/main.tsx` | Wrap com `HelmetProvider` |
| `src/components/SEOHead.tsx` | Migrar para `react-helmet-async`, atualizar keywords padrão |
| `src/pages/Index.tsx` | Reescrever copy + SEO para nicho |
| `src/pages/HubEmpresarial.tsx` | Reescrever copy + SEO para nicho |
| `src/pages/SolucoesSobMedida.tsx` | Reescrever copy + SEO para nicho |
| `src/pages/AboutFocus.tsx` | Reescrever copy + adicionar SEOHead |
| `src/components/Footer.tsx` | Atualizar tagline |
| `public/sitemap.xml` | Atualizar datas |

---

## O que NÃO muda
- Estrutura visual/layout das páginas (mantém seções, cards, grids)
- Lógica de CTAs (links diretos para auth do AppFocus)
- Componentes de UI (botões, cards, modais)
- Preços do Hub
- Blog (pode ser atualizado depois com conteúdo nichado)

