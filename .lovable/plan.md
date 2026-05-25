## Ajustes solicitados

### 1. Cor azul brilhante nas palavras grifadas (`<em>` / `<i>`)
Em `src/index.css` o estilo atual de `em, i` está cinza translúcido (`rgba(235,235,235,0.55)`). Trocar por um azul brilhante (proposta: **#3B82F6** — o "blue-500" do tom Focus, mais vibrante que o `#1E40AF` do accent). Aplica-se globalmente, então todas as páginas (Home, Soluções, Hub, Sobre, etc.) recebem automaticamente.

```css
em, i { color: #3B82F6; font-style: italic; font-weight: 400; }
```

### 2. "+50 empresas" no Hub
- `src/pages/Index.tsx`: métrica `43+ → 50+` e texto `43+ empresas → 50+ empresas`.
- `src/pages/HubEmpresarial.tsx`: badge `43 empresas → 50+ empresas` e métrica `43 → 50+`.

### 3. Animação de scroll global
Criar hook utilitário simples baseado em `IntersectionObserver` + classe CSS `.reveal` que aplica fade + translateY quando a seção entra na viewport.

- Adicionar em `src/index.css`:
  ```css
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.in-view { opacity: 1; transform: translateY(0); }
  ```
- Criar `src/hooks/useScrollReveal.tsx` — instala um único `IntersectionObserver` que observa todos `[data-reveal]` ou `.reveal` no DOM e adiciona `.in-view` quando 15% visíveis (uma vez).
- Inicializar o hook em `App.tsx` (dentro de `AppLayout`) para rodar em todo o site.
- Aplicar `className="reveal"` nos principais blocos (`<section>`, cards de bento, cards de método, métricas) das páginas: `Index.tsx`, `SolucoesSobMedida.tsx`, `HubEmpresarial.tsx`, `AboutFocus.tsx`, `Contato.tsx`, `Blog.tsx`. Respeitar `prefers-reduced-motion`.

### 4. Footer duplicado no Blog
`AppLayout` já injeta `<Footer />` globalmente, e `Blog.tsx` também renderiza `<Footer />` na linha 808. **Remover** a importação e o render do Footer em `Blog.tsx`.

### 5. Logo na página Sobre (substituir o "L")
- Copiar `user-uploads://image-89.png` para `src/assets/focus-logo-circle.png`.
- Em `src/pages/AboutFocus.tsx` substituir o div circular com "L" por um `<img>` importado, mantendo o tamanho 120x120, borda e os anéis (`.sv-ring`).

### 6. Chat não abrir automaticamente
Em `src/components/ChatWidget.tsx` remover o `useEffect` (linhas ~80-87) que faz `setIsOpen(true)` após 3s. O usuário só abre clicando no botão flutuante.

### 7. Remover popup automático ("popup que aparece ao entrar")
Trata-se do `ActionPlanPopup` montado em `App.tsx` (linhas 19, 237-243). Remover o import lazy e o render do `<ActionPlanPopup />` em `AppLayout`.

### Fora de escopo
Nenhuma alteração em rotas, conteúdo de texto além do número de empresas, Supabase, edge functions, analytics ou formulários.

### Arquivos a alterar
- `src/index.css` (cor `em`, classes `.reveal`)
- `src/hooks/useScrollReveal.tsx` (novo)
- `src/App.tsx` (usar hook, remover ActionPlanPopup)
- `src/components/ChatWidget.tsx` (remover auto-open)
- `src/pages/Index.tsx` (50+ empresas, classes reveal)
- `src/pages/HubEmpresarial.tsx` (50+ empresas, classes reveal)
- `src/pages/SolucoesSobMedida.tsx` (classes reveal)
- `src/pages/AboutFocus.tsx` (logo + classes reveal)
- `src/pages/Blog.tsx` (remover Footer duplicado, classes reveal)
- `src/assets/focus-logo-circle.png` (novo asset copiado do upload)
