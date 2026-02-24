
-- Add new columns to client_projects
ALTER TABLE public.client_projects
  ADD COLUMN total_sprints INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN current_sprint INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN client_name TEXT;

-- Create project_sprints table
CREATE TABLE public.project_sprints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.client_projects(id) ON DELETE CASCADE,
  sprint_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pendente',
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(project_id, sprint_number)
);

-- Enable RLS
ALTER TABLE public.project_sprints ENABLE ROW LEVEL SECURITY;

-- Users can view sprints of their own projects
CREATE POLICY "Users can view own project sprints"
  ON public.project_sprints FOR SELECT
  TO authenticated
  USING (
    project_id IN (
      SELECT id FROM public.client_projects WHERE user_id = auth.uid()
    )
  );

-- Admins can do everything with sprints
CREATE POLICY "Admins can insert sprints"
  ON public.project_sprints FOR INSERT
  TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update sprints"
  ON public.project_sprints FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete sprints"
  ON public.project_sprints FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));
