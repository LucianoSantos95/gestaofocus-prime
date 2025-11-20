-- Systems table
CREATE TABLE public.systems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  thumbnail_url TEXT,
  notion_template_url TEXT NOT NULL,
  category TEXT,
  required_plan app_role DEFAULT 'free',
  release_date DATE DEFAULT CURRENT_DATE,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_systems_slug ON public.systems(slug);
CREATE INDEX idx_systems_published ON public.systems(is_published);

-- Playbooks table
CREATE TABLE public.playbooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  cover_url TEXT,
  pdf_url TEXT,
  page_count INT,
  required_plan app_role DEFAULT 'free',
  release_month DATE,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_playbooks_slug ON public.playbooks(slug);
CREATE INDEX idx_playbooks_published ON public.playbooks(is_published);

-- Community posts table
CREATE TABLE public.community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_posts_user ON public.community_posts(user_id);
CREATE INDEX idx_posts_pinned ON public.community_posts(is_pinned);

CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.community_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Community comments table
CREATE TABLE public.community_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_comments_post ON public.community_comments(post_id);
CREATE INDEX idx_comments_user ON public.community_comments(user_id);

CREATE TRIGGER update_comments_updated_at
  BEFORE UPDATE ON public.community_comments
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Community likes table
CREATE TABLE public.community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id, user_id)
);

CREATE INDEX idx_likes_post ON public.community_likes(post_id);
CREATE INDEX idx_likes_user ON public.community_likes(user_id);

-- RLS Policies for systems
ALTER TABLE public.systems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Systems visible based on plan"
  ON public.systems FOR SELECT
  TO authenticated
  USING (
    is_published = TRUE AND (
      required_plan = 'free' OR
      public.has_role(auth.uid(), required_plan)
    )
  );

-- RLS Policies for playbooks
ALTER TABLE public.playbooks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Playbooks visible based on plan and month"
  ON public.playbooks FOR SELECT
  TO authenticated
  USING (
    is_published = TRUE AND (
      (required_plan = 'free' AND release_month >= DATE_TRUNC('month', CURRENT_DATE)) OR
      public.has_role(auth.uid(), 'pro')
    )
  );

-- RLS Policies for community
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can view posts"
  ON public.community_posts FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "PRO users can create posts"
  ON public.community_posts FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'pro'));

CREATE POLICY "Users can update own posts"
  ON public.community_posts FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own posts"
  ON public.community_posts FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can view comments"
  ON public.community_comments FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "PRO users can create comments"
  ON public.community_comments FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'pro'));

CREATE POLICY "Users can update own comments"
  ON public.community_comments FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete own comments"
  ON public.community_comments FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());

ALTER TABLE public.community_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can view likes"
  ON public.community_likes FOR SELECT
  TO authenticated
  USING (TRUE);

CREATE POLICY "Authenticated users can like posts"
  ON public.community_likes FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can unlike posts"
  ON public.community_likes FOR DELETE
  TO authenticated
  USING (user_id = auth.uid());