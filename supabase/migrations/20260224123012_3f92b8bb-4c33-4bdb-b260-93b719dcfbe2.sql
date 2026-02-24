
-- Create client_projects table for the client portal
CREATE TABLE public.client_projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  project_name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'em_andamento',
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  delivery_date DATE,
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.client_projects ENABLE ROW LEVEL SECURITY;

-- Users can view only their own projects
CREATE POLICY "Users can view own projects"
  ON public.client_projects
  FOR SELECT
  USING (auth.uid() = user_id);

-- Only admins can insert projects
CREATE POLICY "Admins can insert projects"
  ON public.client_projects
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update projects
CREATE POLICY "Admins can update projects"
  ON public.client_projects
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete projects
CREATE POLICY "Admins can delete projects"
  ON public.client_projects
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_client_projects_updated_at
  BEFORE UPDATE ON public.client_projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
