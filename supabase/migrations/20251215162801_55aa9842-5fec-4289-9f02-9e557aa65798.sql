-- Block anonymous access to profiles table
CREATE POLICY "Require authentication for profiles"
ON public.profiles
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Block anonymous access to consultation_leads table  
CREATE POLICY "Block anonymous access to consultation_leads"
ON public.consultation_leads
FOR SELECT
USING (auth.uid() IS NOT NULL AND has_role(auth.uid(), 'admin'::app_role));