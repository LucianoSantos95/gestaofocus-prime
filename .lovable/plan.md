## Objetivo

Trocar as imagens dos dois blocos ("Hub Empresarial" e "Agente de Diagnóstico") por vídeos que rodam em **loop automático, sem som e sem controles**, nas páginas:

- **Página inicial** (`src/pages/Index.tsx`) — seção de cases com os dois cards lado a lado (linhas ~443–546).
- **Soluções sob medida** (`src/pages/SolucoesSobMedida.tsx`) — cards de projetos renderizados no `projects.map` (linha ~386).

## Passos

1. **Upload dos vídeos como assets de CDN** (via `lovable-assets`), gerando dois pointers:
   - `src/assets/case-hub-empresarial.mp4.asset.json` ← `Gravando_2026-07-28_131843.mp4`
   - `src/assets/case-agente-diagnostico.mp4.asset.json` ← `Gravando_2026-07-28_132029.mp4`

2. **`src/pages/Index.tsx`** — nos dois cards da seção de cases, substituir a `<img src="/case-hub.png">` e `<img src="/case-indica.png">` por:
   ```tsx
   <video
     src={hubVideo.url}
     autoPlay muted loop playsInline preload="metadata"
     poster="/case-hub.png"
     style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
   />
   ```
   Mesmo tratamento para o card do Agente de Diagnóstico (usando `/case-indica.png` como poster de fallback).

3. **`src/pages/SolucoesSobMedida.tsx`** — estender o tipo `Project` com `video?: string` opcional; no `projects.map` (~linha 427), renderizar `<video>` quando `p.video` existir, caindo para `<img>` no restante. Preencher `video` nos dois projetos existentes com as URLs dos assets.

4. **Atributos do vídeo** em ambos os arquivos: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"` — garante autoplay em desktop e mobile (iOS exige `muted` + `playsInline`) e reinício automático.

## Fora do escopo

- Não altero layout, aspect ratio (16/9), copy dos cards, CTAs ou métricas.
- Não mexo em outras páginas ou blocos.
