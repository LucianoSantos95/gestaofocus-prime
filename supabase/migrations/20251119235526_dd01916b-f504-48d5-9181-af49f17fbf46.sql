-- Create waitlist table
CREATE TABLE public.waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  main_challenge TEXT,
  wants_trial BOOLEAN DEFAULT FALSE,
  source TEXT CHECK (source IN ('landing', 'blog', 'popup')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public signups)
CREATE POLICY "Anyone can insert into waitlist"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view waitlist (for future admin panel)
CREATE POLICY "Admins can view waitlist"
  ON public.waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create index for email lookups
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);