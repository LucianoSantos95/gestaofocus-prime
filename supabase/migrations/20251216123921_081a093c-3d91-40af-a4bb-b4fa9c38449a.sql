-- Add validation constraints to consultation_leads table
-- Using a trigger for validation instead of CHECK constraints for better error handling

CREATE OR REPLACE FUNCTION public.validate_consultation_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate full_name length
  IF length(NEW.full_name) > 100 THEN
    RAISE EXCEPTION 'Full name must be 100 characters or less';
  END IF;
  
  -- Validate email format and length
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email must be 255 characters or less';
  END IF;
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  -- Validate phone format and length
  IF length(NEW.phone) > 20 THEN
    RAISE EXCEPTION 'Phone must be 20 characters or less';
  END IF;
  IF NEW.phone !~* '^[0-9()\s\-+]+$' THEN
    RAISE EXCEPTION 'Phone must contain only numbers and valid characters';
  END IF;
  
  -- Validate other field lengths
  IF length(NEW.business_type) > 100 THEN
    RAISE EXCEPTION 'Business type must be 100 characters or less';
  END IF;
  
  IF length(NEW.uses_notion) > 100 THEN
    RAISE EXCEPTION 'Uses notion field must be 100 characters or less';
  END IF;
  
  IF length(NEW.main_objective) > 200 THEN
    RAISE EXCEPTION 'Main objective must be 200 characters or less';
  END IF;
  
  IF length(NEW.looking_for) > 200 THEN
    RAISE EXCEPTION 'Looking for field must be 200 characters or less';
  END IF;
  
  IF length(NEW.investment_range) > 50 THEN
    RAISE EXCEPTION 'Investment range must be 50 characters or less';
  END IF;
  
  IF length(NEW.start_timeline) > 50 THEN
    RAISE EXCEPTION 'Start timeline must be 50 characters or less';
  END IF;
  
  IF NEW.additional_details IS NOT NULL AND length(NEW.additional_details) > 2000 THEN
    RAISE EXCEPTION 'Additional details must be 2000 characters or less';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger for validation on insert
DROP TRIGGER IF EXISTS validate_consultation_lead_trigger ON public.consultation_leads;
CREATE TRIGGER validate_consultation_lead_trigger
  BEFORE INSERT ON public.consultation_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.validate_consultation_lead();