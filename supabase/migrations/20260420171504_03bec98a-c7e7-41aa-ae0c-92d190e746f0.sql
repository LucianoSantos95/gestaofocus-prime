-- ============================================
-- PROSPECT AGENT MVP - Schema
-- ============================================

-- 1) CAMPAIGNS
CREATE TABLE public.prospect_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  icp_description TEXT NOT NULL,
  tone_of_voice TEXT NOT NULL DEFAULT 'consultivo, direto, profissional, brasileiro',
  calendly_url TEXT NOT NULL,
  sender_email TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  -- cadence config
  email_1_delay_hours INTEGER NOT NULL DEFAULT 0,
  email_2_delay_hours INTEGER NOT NULL DEFAULT 72,
  email_3_delay_hours INTEGER NOT NULL DEFAULT 120,
  -- search config
  search_query TEXT,
  daily_send_limit INTEGER NOT NULL DEFAULT 30,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT prospect_campaigns_status_check CHECK (status IN ('draft','active','paused','completed'))
);

ALTER TABLE public.prospect_campaigns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage campaigns"
  ON public.prospect_campaigns
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_prospect_campaigns_updated
  BEFORE UPDATE ON public.prospect_campaigns
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 2) LEADS
CREATE TABLE public.prospect_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID NOT NULL REFERENCES public.prospect_campaigns(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  website TEXT,
  email TEXT,
  contact_name TEXT,
  contact_role TEXT,
  industry TEXT,
  location TEXT,
  enriched_data JSONB DEFAULT '{}'::jsonb,
  score INTEGER DEFAULT 0,
  pain_points TEXT[],
  personalized_hook TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  source TEXT NOT NULL DEFAULT 'search',
  next_action_at TIMESTAMPTZ,
  current_sequence_step INTEGER NOT NULL DEFAULT 0,
  last_contacted_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT prospect_leads_status_check CHECK (status IN ('new','enriched','queued','contacted','replying','booked','lost','discarded','bounced')),
  CONSTRAINT prospect_leads_source_check CHECK (source IN ('search','csv','manual')),
  CONSTRAINT prospect_leads_score_check CHECK (score >= 0 AND score <= 100)
);

CREATE INDEX idx_prospect_leads_campaign ON public.prospect_leads(campaign_id);
CREATE INDEX idx_prospect_leads_status ON public.prospect_leads(status);
CREATE INDEX idx_prospect_leads_next_action ON public.prospect_leads(next_action_at) WHERE next_action_at IS NOT NULL;
CREATE UNIQUE INDEX idx_prospect_leads_campaign_email ON public.prospect_leads(campaign_id, lower(email)) WHERE email IS NOT NULL;

ALTER TABLE public.prospect_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage leads"
  ON public.prospect_leads
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER trg_prospect_leads_updated
  BEFORE UPDATE ON public.prospect_leads
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 3) MESSAGES (email history)
CREATE TABLE public.prospect_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.prospect_leads(id) ON DELETE CASCADE,
  campaign_id UUID NOT NULL REFERENCES public.prospect_campaigns(id) ON DELETE CASCADE,
  direction TEXT NOT NULL,
  sequence_step INTEGER,
  subject TEXT,
  body_html TEXT,
  body_text TEXT,
  from_email TEXT,
  to_email TEXT,
  external_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  ai_classification JSONB,
  sent_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  opened_at TIMESTAMPTZ,
  replied_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT prospect_messages_direction_check CHECK (direction IN ('outbound','inbound')),
  CONSTRAINT prospect_messages_status_check CHECK (status IN ('pending','sent','delivered','opened','replied','bounced','failed','received'))
);

CREATE INDEX idx_prospect_messages_lead ON public.prospect_messages(lead_id);
CREATE INDEX idx_prospect_messages_campaign ON public.prospect_messages(campaign_id);
CREATE INDEX idx_prospect_messages_external ON public.prospect_messages(external_id) WHERE external_id IS NOT NULL;

ALTER TABLE public.prospect_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage messages"
  ON public.prospect_messages
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 4) SEQUENCE JOBS (queue for cron)
CREATE TABLE public.prospect_sequence_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES public.prospect_leads(id) ON DELETE CASCADE,
  campaign_id UUID NOT NULL REFERENCES public.prospect_campaigns(id) ON DELETE CASCADE,
  sequence_step INTEGER NOT NULL,
  scheduled_for TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0,
  last_error TEXT,
  processed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT prospect_sequence_jobs_status_check CHECK (status IN ('pending','processing','completed','failed','skipped'))
);

CREATE INDEX idx_prospect_jobs_pending ON public.prospect_sequence_jobs(scheduled_for, status) WHERE status = 'pending';
CREATE INDEX idx_prospect_jobs_lead ON public.prospect_sequence_jobs(lead_id);

ALTER TABLE public.prospect_sequence_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins manage sequence jobs"
  ON public.prospect_sequence_jobs
  FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));