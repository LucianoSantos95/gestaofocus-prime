-- Create validation trigger for analytics_events to prevent abuse
CREATE OR REPLACE FUNCTION public.validate_analytics_event()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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
    'copy_text', 'print', 'bookmark', 'rating', 'feedback'
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
$$;

-- Create the trigger
DROP TRIGGER IF EXISTS validate_analytics_event_trigger ON public.analytics_events;
CREATE TRIGGER validate_analytics_event_trigger
BEFORE INSERT ON public.analytics_events
FOR EACH ROW
EXECUTE FUNCTION public.validate_analytics_event();