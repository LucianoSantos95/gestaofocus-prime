-- Fix: Add explicit policies to prevent privilege escalation on user_roles table
-- Users should not be able to INSERT, UPDATE, or DELETE their own roles

-- Only admins can insert new roles
CREATE POLICY "Only admins can insert roles" ON public.user_roles
FOR INSERT WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update roles
CREATE POLICY "Only admins can update roles" ON public.user_roles
FOR UPDATE USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete roles
CREATE POLICY "Only admins can delete roles" ON public.user_roles
FOR DELETE USING (has_role(auth.uid(), 'admin'::app_role));