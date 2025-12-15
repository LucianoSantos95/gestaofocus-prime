-- Fix community_posts: require authentication for viewing
DROP POLICY IF EXISTS "Anyone authenticated can view posts" ON public.community_posts;
CREATE POLICY "Authenticated users can view posts"
ON public.community_posts
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Fix community_comments: require authentication for viewing
DROP POLICY IF EXISTS "Anyone authenticated can view comments" ON public.community_comments;
CREATE POLICY "Authenticated users can view comments"
ON public.community_comments
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Fix community_likes: require authentication for viewing
DROP POLICY IF EXISTS "Anyone authenticated can view likes" ON public.community_likes;
CREATE POLICY "Authenticated users can view likes"
ON public.community_likes
FOR SELECT
USING (auth.uid() IS NOT NULL);