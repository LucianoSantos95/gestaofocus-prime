-- Create analytics events table
CREATE TABLE IF NOT EXISTS public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL,
  event_category TEXT,
  event_label TEXT,
  event_value INTEGER,
  user_id UUID,
  session_id TEXT,
  page_path TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_name ON public.analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON public.analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_session ON public.analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_category ON public.analytics_events(event_category);

-- Enable RLS
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert events (for tracking)
CREATE POLICY "Anyone can insert analytics events"
  ON public.analytics_events
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view analytics
CREATE POLICY "Admins can view analytics"
  ON public.analytics_events
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- Create view for dashboard metrics
CREATE OR REPLACE VIEW public.analytics_dashboard AS
SELECT 
  DATE_TRUNC('hour', created_at) as time_bucket,
  event_name,
  event_category,
  COUNT(*) as event_count,
  COUNT(DISTINCT session_id) as unique_sessions
FROM public.analytics_events
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY DATE_TRUNC('hour', created_at), event_name, event_category
ORDER BY time_bucket DESC;

-- Create function to calculate bounce rate
CREATE OR REPLACE FUNCTION public.calculate_bounce_rate(hours_ago INTEGER DEFAULT 24)
RETURNS TABLE (
  bounce_rate NUMERIC,
  total_sessions BIGINT,
  bounced_sessions BIGINT
) AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER;