
-- Garante extensões necessárias para agendamento interno
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;

-- Tabela leve para registrar pings de atividade (mantém o banco "vivo")
CREATE TABLE IF NOT EXISTS public.keep_alive_log (
  id BIGSERIAL PRIMARY KEY,
  pinged_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bloqueia acesso público — apenas service_role pode tocar
GRANT ALL ON public.keep_alive_log TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.keep_alive_log_id_seq TO service_role;
ALTER TABLE public.keep_alive_log ENABLE ROW LEVEL SECURITY;

-- Função que insere o ping e limpa entradas antigas (>30 dias)
CREATE OR REPLACE FUNCTION public.run_keep_alive()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.keep_alive_log DEFAULT VALUES;
  DELETE FROM public.keep_alive_log WHERE pinged_at < now() - INTERVAL '30 days';
END;
$$;

-- Remove job anterior (se existir) para evitar duplicidade
DO $$
BEGIN
  PERFORM cron.unschedule('keep-alive-ping');
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- Agenda execução a cada 3 dias às 09:00 UTC
SELECT cron.schedule(
  'keep-alive-ping',
  '0 9 */3 * *',
  $$ SELECT public.run_keep_alive(); $$
);
