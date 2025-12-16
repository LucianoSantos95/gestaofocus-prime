-- Fix 1: profiles table - add explicit authentication requirement
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
FOR SELECT USING (auth.uid() IS NOT NULL AND auth.uid() = id);

-- Fix 2: consultation_leads - consolidate policies to prevent any exposure
DROP POLICY IF EXISTS "Block anonymous access to consultation_leads" ON public.consultation_leads;
DROP POLICY IF EXISTS "Admins can view consultation leads" ON public.consultation_leads;
CREATE POLICY "Only admins can view consultation leads" ON public.consultation_leads
FOR SELECT USING (auth.uid() IS NOT NULL AND has_role(auth.uid(), 'admin'::app_role));

-- Fix 3: user_progress - add explicit authentication check
DROP POLICY IF EXISTS "Users manage own progress" ON public.user_progress;
CREATE POLICY "Users can manage own progress" ON public.user_progress
FOR ALL USING (auth.uid() IS NOT NULL AND user_id = auth.uid())
WITH CHECK (auth.uid() IS NOT NULL AND user_id = auth.uid());