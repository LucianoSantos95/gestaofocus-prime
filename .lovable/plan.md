# Adicionar nova tag Google Analytics

O `index.html` já carrega o GA4 via `gtag.js` (deferido após interação/idle), mas usa o ID antigo `G-LS53J0LYDX`. Vou trocar pelo novo ID informado.

## Alteração

**Arquivo:** `index.html`

Substituir as duas ocorrências de `G-LS53J0LYDX` por `G-TQQZJ25R4X`:
- URL do script: `https://www.googletagmanager.com/gtag/js?id=G-TQQZJ25R4X`
- Chamada `gtag('config', 'G-TQQZJ25R4X')`

O carregamento continua deferido (após primeira interação ou idle) para preservar performance/LCP, mantendo o padrão atual do projeto. Nenhum outro arquivo precisa mudar — `src/lib/analytics.ts` usa `window.gtag` dinamicamente e continuará funcionando com o novo ID.

## Observação

Se preferir carregar a tag exatamente como o Google fornece (sem defer), me avise — mas isso pioraria as métricas de performance do site.
