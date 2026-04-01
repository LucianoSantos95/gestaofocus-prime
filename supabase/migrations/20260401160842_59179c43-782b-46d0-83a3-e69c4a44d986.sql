
CREATE TABLE public.diagnosis_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  segment TEXT NOT NULL,
  team_size TEXT NOT NULL,
  challenges TEXT[] NOT NULL DEFAULT '{}',
  diagnosis_result JSONB,
  recommended_product TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.diagnosis_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit diagnosis form"
ON public.diagnosis_leads
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Only admins can view diagnosis leads"
ON public.diagnosis_leads
FOR SELECT
TO public
USING (auth.uid() IS NOT NULL AND has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE FUNCTION public.validate_diagnosis_lead()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be 255 characters or less';
  END IF;
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  IF length(NEW.segment) > 100 THEN
    RAISE EXCEPTION 'Segment must be 100 characters or less';
  END IF;
  IF length(NEW.team_size) > 50 THEN
    RAISE EXCEPTION 'Team size must be 50 characters or less';
  END IF;
  IF array_length(NEW.challenges, 1) > 10 THEN
    RAISE EXCEPTION 'Maximum 10 challenges allowed';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_diagnosis_lead_trigger
BEFORE INSERT ON public.diagnosis_leads
FOR EACH ROW
EXECUTE FUNCTION public.validate_diagnosis_lead();
