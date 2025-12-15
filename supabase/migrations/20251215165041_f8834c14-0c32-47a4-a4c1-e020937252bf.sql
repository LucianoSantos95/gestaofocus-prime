-- Remove the overly permissive policy that allows any authenticated user to view all profiles
DROP POLICY IF EXISTS "Require authentication for profiles" ON public.profiles;

-- The existing "Users can view own profile" policy is sufficient and more secure