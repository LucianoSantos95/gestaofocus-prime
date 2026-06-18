
REVOKE EXECUTE ON FUNCTION public.run_keep_alive() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.run_keep_alive() TO service_role, postgres;
