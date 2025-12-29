-- Add explicit deny policies for subscriptions table to prevent user modifications
-- This makes security intentions clear even though default deny is already in effect

-- Explicitly deny user INSERT on subscriptions (only service role should insert)
CREATE POLICY "Users cannot insert subscriptions"
  ON public.subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (false);

-- Explicitly deny user UPDATE on subscriptions (only service role should update)
CREATE POLICY "Users cannot update subscriptions"
  ON public.subscriptions FOR UPDATE
  TO authenticated
  USING (false);

-- Explicitly deny user DELETE on subscriptions (only service role should delete)  
CREATE POLICY "Users cannot delete subscriptions"
  ON public.subscriptions FOR DELETE
  TO authenticated
  USING (false);

-- Add rate limiting table for edge functions
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  request_count integer DEFAULT 1,
  window_start timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(ip_address, endpoint)
);

-- Enable RLS on rate_limits
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only service role can access rate_limits (edge functions use service role)
-- No authenticated user policies needed

-- Create function to check and increment rate limit
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_ip_address text,
  p_endpoint text,
  p_max_requests integer DEFAULT 10,
  p_window_minutes integer DEFAULT 60
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  v_count integer;
  v_window_start timestamp with time zone;
BEGIN
  -- Get current rate limit record
  SELECT request_count, window_start INTO v_count, v_window_start
  FROM public.rate_limits
  WHERE ip_address = p_ip_address AND endpoint = p_endpoint;
  
  -- If no record exists, create one and allow
  IF v_count IS NULL THEN
    INSERT INTO public.rate_limits (ip_address, endpoint, request_count, window_start)
    VALUES (p_ip_address, p_endpoint, 1, now())
    ON CONFLICT (ip_address, endpoint) 
    DO UPDATE SET request_count = rate_limits.request_count + 1;
    RETURN true;
  END IF;
  
  -- If window has expired, reset counter
  IF v_window_start < now() - (p_window_minutes || ' minutes')::interval THEN
    UPDATE public.rate_limits 
    SET request_count = 1, window_start = now()
    WHERE ip_address = p_ip_address AND endpoint = p_endpoint;
    RETURN true;
  END IF;
  
  -- If under limit, increment and allow
  IF v_count < p_max_requests THEN
    UPDATE public.rate_limits 
    SET request_count = request_count + 1
    WHERE ip_address = p_ip_address AND endpoint = p_endpoint;
    RETURN true;
  END IF;
  
  -- Over limit, deny
  RETURN false;
END;
$$;

-- Create cleanup function for old rate limit records
CREATE OR REPLACE FUNCTION public.cleanup_rate_limits()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  DELETE FROM public.rate_limits
  WHERE window_start < now() - interval '24 hours';
END;
$$;