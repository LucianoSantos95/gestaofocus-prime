-- Fix analytics RPC functions: add admin role check inside functions

-- Recreate calculate_bounce_rate with admin check
CREATE OR REPLACE FUNCTION public.calculate_bounce_rate(hours_ago INTEGER DEFAULT 24)
RETURNS TABLE(bounce_rate NUMERIC, total_sessions BIGINT, bounced_sessions BIGINT)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Verify admin role before executing
  IF NOT has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Access denied: admin role required';
  END IF;

  RETURN QUERY
  WITH session_events AS (
    SELECT 
      ae.session_id,
      COUNT(*) as event_count,
      MAX(ae.created_at) - MIN(ae.created_at) as session_duration
    FROM public.analytics_events ae
    WHERE ae.created_at >= NOW() - (hours_ago || ' hours')::INTERVAL
    GROUP BY ae.session_id
  )
  SELECT 
    ROUND((COUNT(*) FILTER (WHERE event_count = 1 AND session_duration < INTERVAL '10 seconds')::NUMERIC / 
           NULLIF(COUNT(*)::NUMERIC, 0)) * 100, 2) as bounce_rate,
    COUNT(*) as total_sessions,
    COUNT(*) FILTER (WHERE event_count = 1 AND session_duration < INTERVAL '10 seconds') as bounced_sessions
  FROM session_events;
END;
$$;

-- Recreate get_analytics_dashboard with admin check
CREATE OR REPLACE FUNCTION public.get_analytics_dashboard(days_ago INTEGER DEFAULT 7)
RETURNS TABLE(time_bucket TIMESTAMP WITH TIME ZONE, event_name TEXT, event_category TEXT, event_count BIGINT, unique_sessions BIGINT)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  -- This function now validates admin access via RLS on analytics_events
  -- and the caller must have admin role to see any data
  SELECT 
    DATE_TRUNC('hour', ae.created_at) as time_bucket,
    ae.event_name,
    ae.event_category,
    COUNT(*) as event_count,
    COUNT(DISTINCT ae.session_id) as unique_sessions
  FROM public.analytics_events ae
  WHERE ae.created_at >= NOW() - (days_ago || ' days')::INTERVAL
    AND has_role(auth.uid(), 'admin'::app_role)
  GROUP BY DATE_TRUNC('hour', ae.created_at), ae.event_name, ae.event_category
  ORDER BY time_bucket DESC;
$$;