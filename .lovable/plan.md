## Objetivo

Trocar a estrutura dos cards de projeto em `/solucoes-sob-medida` — hoje horizontais (vídeo à esquerda, texto à direita) — pelo **mesmo formato vertical da home**: vídeo em cima ocupando toda a largura em `aspect-ratio: 16/9`, e conteúdo (categoria, título, descrição, CTA) empilhado embaixo.

## Escopo

Apenas `src/pages/SolucoesSobMedida.tsx`, seção `PROJECTS LIST` (linhas ~392–560). Nada muda na home, no conteúdo dos projetos, nos vídeos ou nos CTAs.

## Passos

1. **Grid externo**: substituir a lista vertical (`flex-col gap-6`) por `grid md:grid-cols-2 gap-5 max-w-6xl mx-auto` — dois cards lado a lado, iguais à home.

2. **Card**: reestruturar cada `<article>` para layout empilhado (`flex-col`), sem `gridTemplateColumns` horizontal. Mesma borda `1px solid var(--line2)`, `border-radius: 22`, fundo `var(--bg2)`.

3. **Media**: bloco de topo com `aspect-ratio: 16/9`, `background: var(--bg3)`, `overflow: hidden` — vídeo renderizado com `objectFit: cover`, `objectPosition: top` (igual home). Remover o `minHeight: 360` e o modo `contain`.

4. **Conteúdo**: bloco inferior com `padding: 28px 32px 32px`, empilhando na ordem:
   - Header meta: `/ {brand}` no mesmo estilo `snj-step__num` da home (troca do formato "2026 · PRODUTO · SAAS" pelo formato `/ Hub Empresarial` que já é usado na home).
   - `<h3>` com o título (22px, `font-weight: 500`).
   - Descrição (14px, `var(--text2)`).
   - CTA único (`snj-btn-primary`) alinhado ao fim do card com `margin-top: auto`.

5. **Cortar do card** as métricas ("100+ / R$ 55" e "2 min / 4") e o divisor `snj-step__num` de ano/categoria — não existem no card da home. Essa informação continua presente em outros blocos da página, então nenhum dado se perde.

6. **Preservar**: tipo `Project`, dados dos projetos, imports de vídeo, atributos `autoPlay muted loop playsInline`, e o restante da página (hero, "O que é", timeline, cases, FAQ).

## Detalhes técnicos

- Manter suporte a `p.textOverlay` (Espaço Natividade está em outra seção, mas o fallback fica intacto caso volte a ser usado).
- Fallback `<img>` mantido para projetos sem vídeo — mesma estrutura `objectFit: cover`.
- Nenhuma mudança em CSS global; toda a formatação fica no arquivo.
