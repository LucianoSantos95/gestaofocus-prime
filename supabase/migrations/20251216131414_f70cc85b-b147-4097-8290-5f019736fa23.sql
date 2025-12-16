-- Fix waitlist_source_check constraint to allow 'focus-pro' and other values
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_source_check;

-- Add updated constraint with more source options
ALTER TABLE public.waitlist ADD CONSTRAINT waitlist_source_check 
CHECK (source = ANY (ARRAY['landing', 'blog', 'popup', 'focus-pro', 'homepage', 'navigation', 'footer']));