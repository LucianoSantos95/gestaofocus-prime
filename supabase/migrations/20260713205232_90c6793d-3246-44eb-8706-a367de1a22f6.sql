CREATE TABLE public.linkedin_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_slug text NOT NULL,
  blog_title text NOT NULL,
  linkedin_urn text,
  posted_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  posted_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'published',
  error_message text
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.linkedin_posts TO authenticated;
GRANT ALL ON public.linkedin_posts TO service_role;

ALTER TABLE public.linkedin_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view linkedin_posts"
  ON public.linkedin_posts FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert linkedin_posts"
  ON public.linkedin_posts FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX idx_linkedin_posts_slug ON public.linkedin_posts(blog_slug);
CREATE INDEX idx_linkedin_posts_posted_at ON public.linkedin_posts(posted_at DESC);