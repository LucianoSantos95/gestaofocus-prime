-- Fix security definer view issue by converting to a function

-- Drop the view
DROP VIEW IF EXISTS public.analytics_dashboard;

-- Create a function instead that returns the same data
CREATE OR REPLACE FUNCTION public.get_analytics_dashboard(days_ago INTEGER DEFAULT 7)
RETURNS TABLE (
  time_bucket TIMESTAMP WITH TIME ZONE,
  event_name TEXT,
  event_category TEXT,
  event_count BIGINT,
  unique_sessions BIGINT
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    DATE_TRUNC('hour', created_at) as time_bucket,
    event_name,
    event_category,
    COUNT(*) as event_count,
    COUNT(DISTINCT session_id) as unique_sessions
  FROM public.analytics_events
  WHERE created_at >= NOW() - (days_ago || ' days')::INTERVAL
  GROUP BY DATE_TRUNC('hour', created_at), event_name, event_category
  ORDER BY time_bucket DESC;
$$;