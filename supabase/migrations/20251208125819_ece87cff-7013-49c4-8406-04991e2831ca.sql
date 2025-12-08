-- Fix: Waitlist table SELECT policy incorrectly allows all authenticated users to view records
-- The policy should only allow admins to view waitlist entries (contains PII: emails, names, challenges)

DROP POLICY IF EXISTS "Admins can view waitlist" ON public.waitlist;

CREATE POLICY "Admins can view waitlist" ON public.waitlist
FOR SELECT USING (has_role(auth.uid(), 'admin'::app_role));