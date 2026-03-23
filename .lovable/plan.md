## Análise Profunda — Hub Empresarial: Por que visitantes não convertem

### Dados Concretos (últimos 14 dias)

```text
FUNIL DE CONVERSÃO — Hub Empresarial
──────────────────────────────────────────────────
Sessões totais:        977
Ficaram 15s:           542  (55.5%)
Ficaram 30s:           351  (35.9%)
Scrollaram 25%:         76  ( 7.8%)  ← QUEDA BRUTAL
Scrollaram 50%:         45  ( 4.6%)
Scrollaram 100%:        21  ( 2.1%)
Clicaram no CTA:        28  ( 2.9%)  ← PROBLEMA AQUI

CONVERSÃO POR DISPOSITIVO
──────────────────────────────────────────────────
Desktop:  410 sessões → 18 cliques (4.4%)
Mobile:   567 sessões → 10 cliques (1.8%)  ← MOBILE É 58% DO TRÁFEGO

ORIGEM DO TRÁFEGO
──────────────────────────────────────────────────
Notion (notion.so):        402 sessões (41%)  ← PROBLEMA GRAVE
Instagram:                 170 sessões (17%)
Facebook:                   62 sessões (6%)
Google:                      7 sessões (1%)
Direto/outros:             336 sessões (34%)

DISTRIBUIÇÃO DE CLIQUES NO CTA
──────────────────────────────────────────────────
Hero ("Comece Gratuitamente"):     27 cliques (84%)
Pricing ("Comece Grátis"):          3 cliques
CTA Final:                          1 clique
Pricing ("Começar Agora"):          1 clique
```

---

### Diagnóstico — 5 Problemas Raiz

#### 1. TRÁFEGO DESALINHADO (41% vem do Notion)

402 de 977 sessões vêm de `notion.so` ou `gestaofocus.notion.site`. Essas pessoas esperam **templates Notion**, não uma plataforma SaaS. É o maior fator de rejeição — quase metade do tráfego nunca teve intenção de usar o Hub.

#### 2. MOBILE ABANDONADO (58% do tráfego, 1.8% de conversão)

567 sessões são mobile mas a página foi desenhada para desktop. O hero com texto enorme (`text-7xl`), o mockup grande, e os 3 cards de pricing lado a lado não funcionam bem em tela pequena. Não existe CTA sticky no mobile.

#### 3. HERO NÃO RETÉM (92% não scroll 25%)

Apesar de 55% ficarem 15 segundos, 92% não passam do hero. Isso significa que leem o hero, mas **não se sentem motivados a explorar mais**. O hero tem:

- Título genérico ("Gestão Completa para PMEs") — não comunica benefício concreto
- Texto "127+ empresas ativas" pode parecer pouco para um SaaS
- CTA vai direto para auth externa — sem explicar o que acontece depois
- Nenhum vídeo ou demo visual interativa

#### 4. SEM CTA STICKY / SEGUNDO CTA VISÍVEL

27 dos 32 cliques (84%) foram no hero. Os outros CTAs (pricing, CTA final) quase não convertem. Quem passa do hero não encontra motivação suficiente para clicar — falta um CTA flutuante/sticky que acompanhe o scroll.

#### 5. PROVA SOCIAL FRACA

Os testimonials parecem genéricos (nomes como "Carla M.", "Rafael S." sem foto real, empresa sem link). Para um SaaS pago (R$119-249/mês), a prova social precisa ser mais concreta: logos de empresas, métricas reais, estudos de caso.

---

### Plano de Otimização de Conversão

#### Etapa 1 — CTA Sticky Mobile (Impacto Imediato)

Adicionar um botão CTA fixo na parte inferior da tela em dispositivos mobile. Só aparece após o usuário scrollar além do hero. Isso resolve o problema de 567 sessões mobile com apenas 10 cliques.

**Arquivo:** Novo componente `src/components/hub/StickyMobileCTA.tsx` + integrar no `HubEmpresarial.tsx`

#### Etapa 2 — Reescrever o Hero

- **Título** mais orientado a resultado: "Pare de Gerenciar no Caos. Comece a Crescer." em vez do genérico atual
- **Subtítulo** com benefício concreto e tempo: "Em 5 minutos, toda sua empresa organizada: vendas, financeiro, projetos e equipe."
- **CTA com contexto**: Trocar "Comece Gratuitamente" por "Criar Conta Grátis — Sem Cartão" com microcopy abaixo ("Setup em 2 minutos. Cancele quando quiser.")
- **Reduzir tamanho do texto** no mobile (de `text-7xl` para `text-4xl` no breakpoint `lg`)

**Arquivo:** `src/pages/HubEmpresarial.tsx` (seção hero, linhas 228-294)

#### Etapa 3 — Seção "Como Funciona" antes dos Features

Adicionar uma seção de 3 passos simples logo após o mockup:

1. "Crie sua conta grátis"
2. "Escolha os módulos que precisa"
3. "Gerencie tudo em um só lugar"

Isso reduz a incerteza e mostra que é fácil começar — ataca o problema de 92% não scrollando.

**Arquivo:** `src/pages/HubEmpresarial.tsx` (nova seção após o mockup)

#### Etapa 4 — Tracking mais granular

Adicionar eventos de analytics nos pontos de abandono:

- `hero_view` quando o hero é carregado
- `mockup_visible` quando o mockup entra no viewport
- `pricing_visible` quando pricing aparece
- Isso permite medir onde exatamente o usuário desiste

**Arquivo:** `src/pages/HubEmpresarial.tsx` (IntersectionObserver em seções-chave)

**Arquivo:** Novo componente `src/components/hub/NotionReferrerBanner.tsx` + integrar no `HubEmpresarial.tsx`

---

### Resumo de Prioridades

```text
PRIORIDADE   AÇÃO                              IMPACTO ESPERADO
────────────────────────────────────────────────────────────────
CRÍTICA      CTA sticky mobile                 +2-3% conversão mobile
CRÍTICA      Reescrever hero (título + CTA)    +1-2% conversão geral
ALTA         Seção "Como Funciona"             Reduzir abandono pós-hero
ALTA         Banner referrer Notion            Salvar 41% do tráfego
MÉDIA        Tracking por seção                Dados para próximas melhorias
```

### Arquivos a criar/modificar

- `src/components/hub/StickyMobileCTA.tsx` — novo
- `src/components/hub/NotionReferrerBanner.tsx` — novo
- `src/pages/HubEmpresarial.tsx` — hero reescrito, seção "Como Funciona", integração dos novos componentes, tracking por seção