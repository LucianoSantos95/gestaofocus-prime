

## Plano: Substituir Chat Widget por ElevenLabs Voice Agent

### O que muda

Substituir o chat de texto atual (Make.com webhook) por um agente de voz conversacional da ElevenLabs usando o widget embarcável, que é a abordagem mais simples e rápida.

### Abordagem: Widget Embarcável

Usar o `elevenlabs-convai` widget via CDN — não requer instalação de pacote, é um web component que renderiza um botão flutuante com interface de voz completa.

### Alterações

| Arquivo | Ação |
|---------|------|
| `index.html` | Adicionar script CDN do ElevenLabs widget |
| `src/components/ChatWidget.tsx` | **Reescrever** — Renderizar o web component `<elevenlabs-convai>` com o agent-id fornecido |
| `src/hooks/useMakeChat.ts` | **Remover** — Não será mais necessário |

### Detalhes

- **Agent ID**: `agent_9501kk9r0zfheky84nztakprz3n2`
- O widget da ElevenLabs já inclui: botão flutuante, interface de conversa, controle de microfone, e visual completo
- Como é um agent público (sem autenticação), não precisa de edge function nem API key
- O `ChatWidget.tsx` passará a ser apenas um wrapper que renderiza o `<elevenlabs-convai>` element
- O `ConsultationFormModal` e navegação para Hub que existiam no chat anterior serão removidos (o agente de voz da ElevenLabs gerencia a conversa internamente)

### Nota

O componente `DashboardChatButton` permanece inalterado (é usado apenas no dashboard).

