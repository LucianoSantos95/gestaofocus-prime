
-- Strengthen analytics_events insert policy with field-level checks (defense in depth on top of trigger)
DROP POLICY IF EXISTS "Anyone can insert analytics events" ON public.analytics_events;
CREATE POLICY "Anyone can insert analytics events"
ON public.analytics_events
FOR INSERT
TO public
WITH CHECK (
  length(event_name) <= 100
  AND (event_category IS NULL OR length(event_category) <= 50)
  AND (event_label IS NULL OR length(event_label) <= 200)
  AND (page_path IS NULL OR length(page_path) <= 500)
  AND (session_id IS NULL OR length(session_id) <= 100)
  AND (user_agent IS NULL OR length(user_agent) <= 500)
  AND (referrer IS NULL OR length(referrer) <= 1000)
  AND lower(event_name) = ANY(ARRAY[
    'page_view','page_exit','click','scroll','form_submit','button_click','link_click',
    'video_play','video_pause','download','signup','login','logout','purchase',
    'add_to_cart','remove_from_cart','search','filter','share','comment','like',
    'subscribe','unsubscribe','error','navigation','session_start','session_end',
    'cta_click','modal_open','modal_close','tab_change','accordion_toggle',
    'carousel_slide','tooltip_show','copy_text','print','bookmark','rating',
    'feedback','scroll_depth','time_on_page','engagement'
  ])
);

-- Restrict EXECUTE on admin-only SECURITY DEFINER analytics RPCs (they self-check has_role,
-- but revoking EXECUTE prevents probing/timing from anon and signed-in non-admins).
REVOKE EXECUTE ON FUNCTION public.get_analytics_dashboard(integer) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.calculate_bounce_rate(integer) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.get_engagement_metrics(integer) FROM anon, authenticated, public;

-- Lock down validation trigger functions (they should only be called by triggers, never directly)
REVOKE EXECUTE ON FUNCTION public.validate_analytics_event() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_waitlist_entry() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_contact_message() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_diagnosis_lead() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_consultation_lead() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_mvp_consulting_lead() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_mvp_simulation() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_mind_map_node() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.validate_mind_map_ticket() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
