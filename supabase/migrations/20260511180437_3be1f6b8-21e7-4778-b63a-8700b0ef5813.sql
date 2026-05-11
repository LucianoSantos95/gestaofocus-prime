-- Mind map tables for interactive idea canvas
CREATE TABLE public.mind_map_tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL DEFAULT '#1E40AF',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.mind_map_nodes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  ticket_id UUID REFERENCES public.mind_map_tickets(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content TEXT,
  position_x DOUBLE PRECISION NOT NULL DEFAULT 0,
  position_y DOUBLE PRECISION NOT NULL DEFAULT 0,
  color TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.mind_map_edges (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  source_node_id UUID NOT NULL REFERENCES public.mind_map_nodes(id) ON DELETE CASCADE,
  target_node_id UUID NOT NULL REFERENCES public.mind_map_nodes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_mind_map_nodes_user ON public.mind_map_nodes(user_id);
CREATE INDEX idx_mind_map_edges_user ON public.mind_map_edges(user_id);
CREATE INDEX idx_mind_map_tickets_user ON public.mind_map_tickets(user_id);

ALTER TABLE public.mind_map_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mind_map_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mind_map_edges ENABLE ROW LEVEL SECURITY;

-- Tickets policies
CREATE POLICY "Users manage own tickets" ON public.mind_map_tickets
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Nodes policies
CREATE POLICY "Users manage own nodes" ON public.mind_map_nodes
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Edges policies
CREATE POLICY "Users manage own edges" ON public.mind_map_edges
  FOR ALL TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Validation
CREATE OR REPLACE FUNCTION public.validate_mind_map_node()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  IF length(NEW.title) > 200 THEN RAISE EXCEPTION 'Title must be 200 chars or less'; END IF;
  IF NEW.content IS NOT NULL AND length(NEW.content) > 5000 THEN RAISE EXCEPTION 'Content must be 5000 chars or less'; END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER trg_validate_mind_map_node
  BEFORE INSERT OR UPDATE ON public.mind_map_nodes
  FOR EACH ROW EXECUTE FUNCTION public.validate_mind_map_node();

CREATE OR REPLACE FUNCTION public.validate_mind_map_ticket()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  IF length(NEW.name) > 60 THEN RAISE EXCEPTION 'Ticket name must be 60 chars or less'; END IF;
  IF NEW.color !~* '^#[0-9A-F]{6}$' THEN RAISE EXCEPTION 'Color must be hex'; END IF;
  RETURN NEW;
END; $$;

CREATE TRIGGER trg_validate_mind_map_ticket
  BEFORE INSERT OR UPDATE ON public.mind_map_tickets
  FOR EACH ROW EXECUTE FUNCTION public.validate_mind_map_ticket();

CREATE TRIGGER trg_mind_map_nodes_updated
  BEFORE UPDATE ON public.mind_map_nodes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER trg_mind_map_tickets_updated
  BEFORE UPDATE ON public.mind_map_tickets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();