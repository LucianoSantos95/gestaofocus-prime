-- Fix 1: Add database-level validation for waitlist table
CREATE OR REPLACE FUNCTION public.validate_waitlist_entry()
RETURNS TRIGGER AS $$
BEGIN
  -- Validate email length
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be 255 characters or less';
  END IF;
  
  -- Validate email format
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  -- Validate full_name length
  IF NEW.full_name IS NOT NULL AND length(NEW.full_name) > 100 THEN
    RAISE EXCEPTION 'Full name must be 100 characters or less';
  END IF;
  
  -- Validate main_challenge length
  IF NEW.main_challenge IS NOT NULL AND length(NEW.main_challenge) > 500 THEN
    RAISE EXCEPTION 'Main challenge must be 500 characters or less';
  END IF;
  
  -- Validate source length
  IF NEW.source IS NOT NULL AND length(NEW.source) > 100 THEN
    RAISE EXCEPTION 'Source must be 100 characters or less';
  END IF;
  
  -- Validate interest length
  IF NEW.interest IS NOT NULL AND length(NEW.interest) > 200 THEN
    RAISE EXCEPTION 'Interest must be 200 characters or less';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for waitlist validation
DROP TRIGGER IF EXISTS validate_waitlist_trigger ON public.waitlist;
CREATE TRIGGER validate_waitlist_trigger
  BEFORE INSERT OR UPDATE ON public.waitlist
  FOR EACH ROW EXECUTE FUNCTION public.validate_waitlist_entry();

-- Fix 2: Secure rate_limits table - only accessible via SECURITY DEFINER functions
-- Drop any existing policies first
DROP POLICY IF EXISTS "No direct access to rate_limits" ON public.rate_limits;

-- Create policy that blocks all direct access (functions use SECURITY DEFINER)
CREATE POLICY "No direct access to rate_limits" 
ON public.rate_limits 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Note: check_rate_limit and cleanup_rate_limits functions are already SECURITY DEFINER
-- so they bypass RLS and can still manage the table