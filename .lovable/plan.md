

## Auditoria de Segurança — Problemas Encontrados e Soluções

### CRÍTICO — Corrigir Imediatamente

#### 1. Escalação de Privilégios na função `has_role()` 
A função usa `role >= _role` para comparar enums. Dependendo da ordem de declaração do enum `app_role`, qualquer usuário FREE pode passar como admin. Isso expõe: emails da waitlist, consultation_leads (nomes, telefones, dados financeiros), tickets de suporte, analytics, e permite manipulação de roles.

**Correção:** Trocar `role >= _role` por `role = _role`.

#### 2. RLS "Always True" em 3 tabelas (INSERT)
As tabelas `analytics_events`, `waitlist` e `consultation_leads` têm INSERT com `WITH CHECK (true)`. Embora intencional para formulários públicos, um atacante pode fazer spam massivo.

**Correção:** Já mitigado por triggers de validação e rate limiting. Manter, mas documentar.

#### 3. Proteção contra senhas vazadas desabilitada
O sistema de autenticação não verifica se a senha do usuário apareceu em vazamentos conhecidos (HaveIBeenPwned).

**Correção:** Habilitar leaked password protection via configuração de auth.

---

### ALTO — Corrigir em Breve

#### 4. Edge Function `chat` sem autenticação nem rate limiting
O endpoint `/functions/v1/chat` aceita qualquer requisição sem verificar JWT e sem limite de taxa. Um atacante pode fazer milhares de chamadas, consumindo créditos de IA.

**Correção:** Adicionar rate limiting por IP (similar ao `send-waitlist-welcome`) e opcionalmente validar sessão.

#### 5. Edge Function `send-welcome-email` sem autenticação
Configurada com `verify_jwt = false` sem validação alternativa no código.

**Correção:** Revisar se precisa ser pública ou adicionar validação.

#### 6. CORS muito permissivo (`Access-Control-Allow-Origin: *`)
Todas as edge functions aceitam requisições de qualquer origem.

**Correção:** Restringir para `https://focusinteligente.com.br` e domínios de preview.

---

### MÉDIO — Melhorias Recomendadas

#### 7. Chat widget sem sanitização de input do usuário
As mensagens do usuário são passadas diretamente para a API de IA sem validação de tamanho ou conteúdo.

**Correção:** Limitar tamanho das mensagens (ex: 500 chars) e número de mensagens no histórico.

#### 8. Sem Content Security Policy (CSP)
O `index.html` não tem headers CSP, permitindo execução de scripts de terceiros não autorizados.

**Correção:** Adicionar meta tag CSP ou headers no `_headers`.

#### 9. Sem rate limiting no login/signup
Tentativas de brute force no login não são limitadas.

**Correção:** O backend já tem proteção básica, mas adicionar feedback visual de bloqueio após X tentativas.

---

### Plano de Implementação

1. **Corrigir `has_role()`** — Migration SQL: trocar `>=` por `=`
2. **Habilitar leaked password protection** — Configuração de auth
3. **Adicionar rate limiting ao chat** — Rate limit por IP no edge function
4. **Restringir CORS** — Limitar origens nas edge functions
5. **Adicionar CSP headers** — No `_headers` e/ou `index.html`
6. **Limitar input do chat** — Validação client-side e server-side
7. **Adicionar headers de segurança** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` no `_headers`

