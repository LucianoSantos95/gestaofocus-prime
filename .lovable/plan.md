

# Limpeza do Banco de Dados: Remover Tabelas Nao Utilizadas

## Analise

Foram identificadas **10 tabelas** que nao sao referenciadas em nenhum arquivo do codigo (apenas no `types.ts` auto-gerado) e possuem **0 registros** (ou dados irrelevantes):

### Tabelas a remover

| Tabela | Registros | Motivo da remocao |
|--------|-----------|-------------------|
| `courses` | 0 | Planejada para Fase 4, nunca implementada |
| `lessons` | 0 | Depende de courses, nunca implementada |
| `user_progress` | 0 | Depende de lessons, nunca implementada |
| `community_posts` | 0 | Comunidade nunca implementada |
| `community_comments` | 0 | Depende de community_posts |
| `community_likes` | 0 | Depende de community_posts |
| `systems` | 0 | Catalogo de templates, nunca populado |
| `playbooks` | 0 | Biblioteca de PDFs, nunca populada |
| `subscriptions` | 0 | Integracao Stripe nunca implementada |
| `rate_limits` | 2 | Funcao de rate limit nao e chamada no codigo da app, dados residuais |

### Tabelas que permanecem (em uso)

| Tabela | Registros | Uso |
|--------|-----------|-----|
| `analytics_events` | 31.869 | Tracking ativo de eventos |
| `waitlist` | 4 | Formulario de lista de espera |
| `consultation_leads` | 1 | Formulario de consultoria |
| `profiles` | 0 | Login/Dashboard (auth flow) |
| `user_roles` | 0 | Controle de acesso FREE/PRO/ADMIN |

### Funcoes de banco que serao removidas junto

Funcoes que dependem exclusivamente das tabelas removidas:
- `check_rate_limit()` - depende de `rate_limits`
- `cleanup_rate_limits()` - depende de `rate_limits`

Funcoes que **permanecem** (usam tabelas ativas):
- `handle_new_user()` - usa profiles e user_roles
- `has_role()` - usa user_roles
- `validate_waitlist_entry()` - usa waitlist
- `validate_consultation_lead()` - usa consultation_leads
- `validate_analytics_event()` - usa analytics_events
- `get_analytics_dashboard()` - usa analytics_events
- `calculate_bounce_rate()` - usa analytics_events
- `get_engagement_metrics()` - usa analytics_events
- `update_updated_at_column()` - trigger generico

## Detalhes tecnicos

Uma unica migracao SQL sera executada para:
1. Dropar as 10 tabelas (com CASCADE para remover foreign keys, policies e triggers)
2. Dropar as 2 funcoes de rate limit
3. O arquivo `types.ts` sera regenerado automaticamente pelo sistema

Nenhum arquivo de codigo precisa ser alterado, pois nenhum deles referencia essas tabelas.

