-- 1. Add missing event names to validation function
CREATE OR REPLACE FUNCTION public.validate_analytics_event()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  recent_count INTEGER;
  allowed_event_names TEXT[] := ARRAY[
    'page_view', 'page_exit', 'click', 'scroll', 'form_submit', 
    'button_click', 'link_click', 'video_play', 'video_pause',
    'download', 'signup', 'login', 'logout', 'purchase',
    'add_to_cart', 'remove_from_cart', 'search', 'filter',
    'share', 'comment', 'like', 'subscribe', 'unsubscribe',
    'error', 'navigation', 'session_start', 'session_end',
    'cta_click', 'modal_open', 'modal_close', 'tab_change',
    'accordion_toggle', 'carousel_slide', 'tooltip_show',
    'copy_text', 'print', 'bookmark', 'rating', 'feedback',
    -- NEW engagement events
    'scroll_depth', 'time_on_page', 'engagement'
  ];
  allowed_categories TEXT[] := ARRAY[
    'engagement', 'navigation', 'conversion', 'ecommerce',
    'user', 'content', 'video', 'form', 'error', 'social',
    'interaction', 'session', 'performance', 'custom'
  ];
BEGIN
  -- Validate field lengths
  IF length(NEW.event_name) > 100 THEN
    RAISE EXCEPTION 'event_name must be 100 characters or less';
  END IF;
  
  IF NEW.event_label IS NOT NULL AND length(NEW.event_label) > 200 THEN
    RAISE EXCEPTION 'event_label must be 200 characters or less';
  END IF;
  
  IF NEW.event_category IS NOT NULL AND length(NEW.event_category) > 50 THEN
    RAISE EXCEPTION 'event_category must be 50 characters or less';
  END IF;
  
  IF NEW.user_agent IS NOT NULL AND length(NEW.user_agent) > 500 THEN
    RAISE EXCEPTION 'user_agent must be 500 characters or less';
  END IF;
  
  IF NEW.page_path IS NOT NULL AND length(NEW.page_path) > 500 THEN
    RAISE EXCEPTION 'page_path must be 500 characters or less';
  END IF;
  
  IF NEW.session_id IS NOT NULL AND length(NEW.session_id) > 100 THEN
    RAISE EXCEPTION 'session_id must be 100 characters or less';
  END IF;
  
  IF NEW.referrer IS NOT NULL AND length(NEW.referrer) > 1000 THEN
    RAISE EXCEPTION 'referrer must be 1000 characters or less';
  END IF;
  
  -- Validate event_name against whitelist (case-insensitive)
  IF NOT (lower(NEW.event_name) = ANY(allowed_event_names)) THEN
    RAISE EXCEPTION 'Invalid event_name: %', NEW.event_name;
  END IF;
  
  -- Validate event_category against whitelist if provided
  IF NEW.event_category IS NOT NULL AND NOT (lower(NEW.event_category) = ANY(allowed_categories)) THEN
    RAISE EXCEPTION 'Invalid event_category: %', NEW.event_category;
  END IF;
  
  -- Rate limiting: max 100 events per session_id in last 5 minutes
  IF NEW.session_id IS NOT NULL THEN
    SELECT COUNT(*) INTO recent_count
    FROM public.analytics_events
    WHERE session_id = NEW.session_id
      AND created_at > NOW() - INTERVAL '5 minutes';
    
    IF recent_count >= 100 THEN
      RAISE EXCEPTION 'Rate limit exceeded: too many events from this session';
    END IF;
  END IF;
  
  RETURN NEW;
END;
$function$;

-- 2. Create improved bounce rate function that considers engagement
CREATE OR REPLACE FUNCTION public.calculate_bounce_rate(hours_ago integer DEFAULT 24)
 RETURNS TABLE(bounce_rate numeric, total_sessions bigint, bounced_sessions bigint)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Verify admin role before executing
  IF NOT has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Access denied: admin role required';
  END IF;

  RETURN QUERY
  WITH session_analysis AS (
    SELECT 
      ae.session_id,
      COUNT(*) FILTER (WHERE ae.event_name = 'page_view') as page_views,
      COUNT(*) FILTER (WHERE ae.event_name IN ('scroll_depth', 'time_on_page', 'cta_click')) as engagement_events,
      COUNT(DISTINCT ae.page_path) as unique_pages,
      MAX(ae.created_at) - MIN(ae.created_at) as session_duration
    FROM public.analytics_events ae
    WHERE ae.created_at >= NOW() - (hours_ago || ' hours')::INTERVAL
      AND ae.session_id IS NOT NULL
    GROUP BY ae.session_id
  )
  SELECT 
    ROUND(
      (COUNT(*) FILTER (WHERE 
        unique_pages = 1 
        AND engagement_events = 0 
        AND session_duration < INTERVAL '30 seconds'
      )::NUMERIC / NULLIF(COUNT(*)::NUMERIC, 0)) * 100, 
      2
    ) as bounce_rate,
    COUNT(*) as total_sessions,
    COUNT(*) FILTER (WHERE 
      unique_pages = 1 
      AND engagement_events = 0 
      AND session_duration < INTERVAL '30 seconds'
    ) as bounced_sessions
  FROM session_analysis;
END;
$function$;

-- 3. Create function to get detailed engagement metrics
CREATE OR REPLACE FUNCTION public.get_engagement_metrics(hours_ago integer DEFAULT 24)
 RETURNS TABLE(
   avg_pages_per_session numeric,
   avg_session_duration_seconds numeric,
   engaged_sessions bigint,
   total_sessions bigint,
   engagement_rate numeric
 )
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Verify admin role before executing
  IF NOT has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Access denied: admin role required';
  END IF;

  RETURN QUERY
  WITH session_analysis AS (
    SELECT 
      ae.session_id,
      COUNT(DISTINCT ae.page_path) as unique_pages,
      COUNT(*) FILTER (WHERE ae.event_name IN ('scroll_depth', 'time_on_page', 'cta_click')) as engagement_events,
      EXTRACT(EPOCH FROM (MAX(ae.created_at) - MIN(ae.created_at))) as duration_seconds
    FROM public.analytics_events ae
    WHERE ae.created_at >= NOW() - (hours_ago || ' hours')::INTERVAL
      AND ae.session_id IS NOT NULL
    GROUP BY ae.session_id
  )
  SELECT 
    ROUND(AVG(unique_pages)::numeric, 2) as avg_pages_per_session,
    ROUND(AVG(duration_seconds)::numeric, 2) as avg_session_duration_seconds,
    COUNT(*) FILTER (WHERE engagement_events > 0 OR duration_seconds > 30) as engaged_sessions,
    COUNT(*) as total_sessions,
    ROUND(
      (COUNT(*) FILTER (WHERE engagement_events > 0 OR duration_seconds > 30)::numeric / 
       NULLIF(COUNT(*)::numeric, 0)) * 100, 
      2
    ) as engagement_rate
  FROM session_analysis;
END;
$function$;