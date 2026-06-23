DROP TABLE IF EXISTS
  public.consultation_leads,
  public.contact_messages,
  public.diagnosis_leads,
  public.keep_alive_log,
  public.mind_map_edges,
  public.mind_map_nodes,
  public.mind_map_tickets,
  public.mvp_consulting_leads,
  public.mvp_simulations,
  public.project_sprints,
  public.client_projects,
  public.prospect_sequence_jobs,
  public.prospect_messages,
  public.prospect_leads,
  public.prospect_campaigns,
  public.support_tickets
CASCADE;

DROP FUNCTION IF EXISTS public.validate_contact_message() CASCADE;
DROP FUNCTION IF EXISTS public.validate_consultation_lead() CASCADE;
DROP FUNCTION IF EXISTS public.validate_diagnosis_lead() CASCADE;
DROP FUNCTION IF EXISTS public.validate_mind_map_ticket() CASCADE;
DROP FUNCTION IF EXISTS public.validate_mind_map_node() CASCADE;
DROP FUNCTION IF EXISTS public.validate_mvp_consulting_lead() CASCADE;
DROP FUNCTION IF EXISTS public.validate_mvp_simulation() CASCADE;
DROP FUNCTION IF EXISTS public.run_keep_alive() CASCADE;