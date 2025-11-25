-- Fix security issues from previous migration

-- Drop and recreate the function with proper search_path
DROP FUNCTION IF EXISTS public.calculate_bounce_rate(INTEGER);

CREATE OR REPLACE FUNCTION public.calculate_bounce_rate(hours_ago INTEGER DEFAULT 24)
RETURNS TABLE (
  bounce_rate NUMERIC,
  total_sessions BIGINT,
  bounced_sessions BIGINT
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  WITH session_events AS (
    SELECT 
      session_id,
      COUNT(*) as event_count,
      MAX(created_at) - MIN(created_at) as session_duration
    FROM public.analytics_events
    WHERE created_at >= NOW() - (hours_ago || ' hours')::INTERVAL
    GROUP BY session_id
  )
  SELECT 
    ROUND((COUNT(*) FILTER (WHERE event_count = 1 AND session_duration < INTERVAL '10 seconds')::NUMERIC / 
           NULLIF(COUNT(*)::NUMERIC, 0)) * 100, 2) as bounce_rate,
    COUNT(*) as total_sessions,
    COUNT(*) FILTER (WHERE event_count = 1 AND session_duration < INTERVAL '10 seconds') as bounced_sessions
  FROM session_events;
END;
$$;