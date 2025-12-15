-- Add authentication requirement for user_roles SELECT
CREATE POLICY "Require authentication for user_roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() IS NOT NULL AND user_id = auth.uid());