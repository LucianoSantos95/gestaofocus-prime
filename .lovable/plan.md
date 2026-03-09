

## Plano: Chat Widget com Webhook Make.com

### O que será feito

Recriar o chat flutuante em todas as páginas (exceto dashboard) com:

1. **Auto-abertura com saudação** — Após 3s, o chat abre automaticamente com mensagem proativa mencionando o Notion
2. **Integração com Make.com** — POST para `https://hook.us2.make.com/t15918bjr3xwf4rwdvnsq3c453eguil2` enviando `{ mensagem: "..." }`
3. **Botões contextuais na resposta** — Se a resposta mencionar "Soluções Sob Medida", exibir botão para abrir o `ConsultationFormModal`; se mencionar "Hub", exibir link para `/hub-empresarial`

### Alterações

| Arquivo | Ação |
|---------|------|
| `src/components/ChatWidget.tsx` | **Criar** — Novo componente widget completo (botão flutuante, painel de chat, lógica de auto-open, integração webhook, detecção de keywords nas respostas) |
| `src/hooks/useMakeChat.ts` | **Criar** — Hook para enviar mensagem ao webhook Make.com e retornar resposta (substitui `useStreamChat` neste contexto) |
| `src/components/WhatsAppButton.tsx` | **Remover uso** — Substituído pelo ChatWidget nas páginas públicas |
| `src/App.tsx` | **Editar** — Substituir `<WhatsAppButton />` por `<ChatWidget />` nas rotas públicas |

### Detalhes técnicos

- O hook `useMakeChat` fará `fetch POST` simples (não streaming) para o webhook, enviando `{ mensagem }` e exibindo o texto da resposta
- A saudação proativa será uma mensagem de assistant pré-inserida: *"Olá! 👋 Sou o assistente da Focus — viemos do Notion para te ajudar a organizar sua empresa. Como posso te ajudar hoje?"*
- Após cada resposta do assistant, o componente verifica se o texto contém "Soluções Sob Medida" ou "Hub" e renderiza botões de ação abaixo da mensagem
- O botão "Soluções Sob Medida" abre o `ConsultationFormModal`; o botão "Hub" navega para `/hub-empresarial`
- Timer de 3s usa `setTimeout` com cleanup no `useEffect`, salva flag em `sessionStorage` para não reabrir ao navegar entre páginas

