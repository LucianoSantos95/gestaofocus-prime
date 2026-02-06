

# Atualizar Hero da Homepage para refletir a Plataforma de Gestão

## Resumo

Atualizar o texto e CTAs do `HeroSection.tsx` para posicionar o Focus como uma **plataforma de gestão empresarial** (app), não mais focada exclusivamente em Notion.

## Mudanças

### Arquivo: `src/components/HeroSection.tsx`

**Textos atualizados:**

| Elemento | Antes | Depois |
|----------|-------|--------|
| Badge | "Apenas 5 vagas para consultoria este mês" | "Novo: Hub Focus Beta Gratuito" |
| H1 | "Gestão empresarial com eficiência e resultados" | "Gestão empresarial inteligente — simples, visual e completa" |
| Subtítulo | "Sistemas personalizados, processos claros..." | "Organize finanças, projetos, clientes e equipe em um só lugar. Uma plataforma feita para pequenas empresas que querem crescer com clareza." |
| CTA primário | "Agendar Consultoria Gratuita" (WhatsApp) | "Comece Grátis" (link para appfocus.lovable.app) |
| CTA secundário | "Ver Sistemas Gratuitos" | "Conheça os Módulos" (link para /focus-pro#modulos) |

**Métricas atualizadas:**

| Antes | Depois |
|-------|--------|
| "+12.000 Downloads de sistemas" | "+5.000 Downloads na versão Notion" |
| "+20 Empresas atendidas" | "8 Módulos integrados" |

### Detalhes técnicos

- O CTA primário usará `<a href="https://appfocus.lovable.app/" target="_blank">` em vez de `window.open` para WhatsApp
- O CTA secundário usará navegação interna para `/focus-pro#modulos`
- Badge perde o `animate-pulse` de urgência (não é mais escassez, é novidade)
- Mantém todas as animações e efeitos visuais existentes (orbs, gradientes, scroll indicator)
- Nenhum outro arquivo precisa ser alterado
