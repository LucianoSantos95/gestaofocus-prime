
-- Remover tabelas não utilizadas (ordem respeitando dependências)
DROP TABLE IF EXISTS public.community_comments CASCADE;
DROP TABLE IF EXISTS public.community_likes CASCADE;
DROP TABLE IF EXISTS public.community_posts CASCADE;
DROP TABLE IF EXISTS public.user_progress CASCADE;
DROP TABLE IF EXISTS public.lessons CASCADE;
DROP TABLE IF EXISTS public.courses CASCADE;
DROP TABLE IF EXISTS public.systems CASCADE;
DROP TABLE IF EXISTS public.playbooks CASCADE;
DROP TABLE IF EXISTS public.subscriptions CASCADE;
DROP TABLE IF EXISTS public.rate_limits CASCADE;

-- Remover funções de rate limit
DROP FUNCTION IF EXISTS public.check_rate_limit(text, text, integer, integer);
DROP FUNCTION IF EXISTS public.cleanup_rate_limits();
