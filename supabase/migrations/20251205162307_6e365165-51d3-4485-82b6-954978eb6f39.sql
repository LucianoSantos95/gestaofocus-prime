-- Create table for consultation leads
CREATE TABLE public.consultation_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  uses_notion TEXT NOT NULL,
  main_objective TEXT NOT NULL,
  looking_for TEXT NOT NULL,
  investment_range TEXT NOT NULL,
  start_timeline TEXT NOT NULL,
  additional_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.consultation_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit consultation form"
ON public.consultation_leads
FOR INSERT
WITH CHECK (true);

-- Only admins can view leads
CREATE POLICY "Admins can view consultation leads"
ON public.consultation_leads
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));