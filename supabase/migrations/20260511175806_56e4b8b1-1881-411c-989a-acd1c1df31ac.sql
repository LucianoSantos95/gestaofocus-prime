
-- Tabela de simulações
CREATE TABLE public.mvp_simulations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NULL,
  anon_session_id TEXT NOT NULL,
  business_name TEXT,
  business_description TEXT NOT NULL,
  niche TEXT NOT NULL,
  time_in_market TEXT NOT NULL,
  revenue_range TEXT NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  score INTEGER NOT NULL DEFAULT 0,
  profile TEXT NOT NULL CHECK (profile IN ('concierge','estruturado','escalavel')),
  ai_result JSONB,
  utm_source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_mvp_simulations_user ON public.mvp_simulations(user_id);
CREATE INDEX idx_mvp_simulations_anon ON public.mvp_simulations(anon_session_id);

ALTER TABLE public.mvp_simulations ENABLE ROW LEVEL SECURITY;

-- INSERT público (anônimo + autenticado)
CREATE POLICY "Anyone can create simulation"
ON public.mvp_simulations
FOR INSERT
TO public
WITH CHECK (
  anon_session_id IS NOT NULL
  AND length(anon_session_id) BETWEEN 8 AND 100
);

-- SELECT: dono autenticado
CREATE POLICY "Users can view own simulations"
ON public.mvp_simulations
FOR SELECT
TO authenticated
USING (auth.uid() IS NOT NULL AND user_id = auth.uid());

-- Validação de tamanhos
CREATE OR REPLACE FUNCTION public.validate_mvp_simulation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.business_name IS NOT NULL AND length(NEW.business_name) > 120 THEN
    RAISE EXCEPTION 'Business name must be 120 chars or less';
  END IF;
  IF length(NEW.business_description) > 2000 THEN
    RAISE EXCEPTION 'Business description must be 2000 chars or less';
  END IF;
  IF length(NEW.niche) > 60 THEN
    RAISE EXCEPTION 'Niche must be 60 chars or less';
  END IF;
  IF length(NEW.time_in_market) > 30 THEN
    RAISE EXCEPTION 'Time in market must be 30 chars or less';
  END IF;
  IF length(NEW.revenue_range) > 30 THEN
    RAISE EXCEPTION 'Revenue range must be 30 chars or less';
  END IF;
  IF NEW.utm_source IS NOT NULL AND length(NEW.utm_source) > 100 THEN
    RAISE EXCEPTION 'utm_source must be 100 chars or less';
  END IF;
  IF NEW.score < 0 OR NEW.score > 15 THEN
    RAISE EXCEPTION 'Score must be between 0 and 15';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_validate_mvp_simulation
BEFORE INSERT OR UPDATE ON public.mvp_simulations
FOR EACH ROW EXECUTE FUNCTION public.validate_mvp_simulation();

CREATE TRIGGER trg_mvp_simulations_updated_at
BEFORE UPDATE ON public.mvp_simulations
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
