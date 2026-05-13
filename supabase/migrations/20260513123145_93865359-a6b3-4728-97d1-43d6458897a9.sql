-- Create mvp_consulting_leads table
CREATE TABLE public.mvp_consulting_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  simulation_id UUID,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  profile TEXT,
  score INTEGER,
  business_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mvp_consulting_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consulting lead"
ON public.mvp_consulting_leads
FOR INSERT
TO public
WITH CHECK (
  length(email) <= 255
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(full_name) BETWEEN 1 AND 100
);

CREATE POLICY "Only admins can view consulting leads"
ON public.mvp_consulting_leads
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Validation trigger
CREATE OR REPLACE FUNCTION public.validate_mvp_consulting_lead()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  IF length(NEW.full_name) > 100 THEN RAISE EXCEPTION 'Full name must be 100 chars or less'; END IF;
  IF length(NEW.email) > 255 THEN RAISE EXCEPTION 'Email must be 255 chars or less'; END IF;
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN RAISE EXCEPTION 'Invalid email'; END IF;
  IF NEW.phone IS NOT NULL AND length(NEW.phone) > 20 THEN RAISE EXCEPTION 'Phone must be 20 chars or less'; END IF;
  IF NEW.business_description IS NOT NULL AND length(NEW.business_description) > 2000 THEN RAISE EXCEPTION 'Description too long'; END IF;
  IF NEW.score IS NOT NULL AND (NEW.score < 0 OR NEW.score > 15) THEN RAISE EXCEPTION 'Invalid score'; END IF;
  RETURN NEW;
END;
$function$;

REVOKE EXECUTE ON FUNCTION public.validate_mvp_consulting_lead() FROM PUBLIC, anon, authenticated;

CREATE TRIGGER validate_mvp_consulting_lead_trigger
BEFORE INSERT OR UPDATE ON public.mvp_consulting_leads
FOR EACH ROW EXECUTE FUNCTION public.validate_mvp_consulting_lead();