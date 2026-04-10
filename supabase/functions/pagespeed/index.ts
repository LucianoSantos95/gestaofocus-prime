const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Auth check - admin only
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    )

    const token = authHeader.replace('Bearer ', '')
    const { data: claims, error: claimsError } = await supabase.auth.getClaims(token)
    if (claimsError || !claims?.claims) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const userId = claims.claims.sub as string

    // Check admin role
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single()

    if (!roleData) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const { url, strategy = 'mobile' } = await req.json()

    if (!url || typeof url !== 'string') {
      return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    // Validate URL
    try {
      new URL(url)
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid URL format' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    if (!['mobile', 'desktop'].includes(strategy)) {
      return new Response(JSON.stringify({ error: 'Strategy must be mobile or desktop' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const apiKey = Deno.env.get('GOOGLE_PAGESPEED_API_KEY')
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'PageSpeed API key not configured' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const categories = ['performance', 'seo', 'accessibility', 'best-practices']
    const categoryParams = categories.map(c => `category=${c}`).join('&')
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}&${categoryParams}&key=${apiKey}`

    const response = await fetch(apiUrl)
    const data = await response.json()

    if (!response.ok) {
      return new Response(JSON.stringify({ error: data.error?.message || 'PageSpeed API error' }), { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    // Extract scores
    const lighthouse = data.lighthouseResult
    const scores = {
      performance: Math.round((lighthouse?.categories?.performance?.score || 0) * 100),
      seo: Math.round((lighthouse?.categories?.seo?.score || 0) * 100),
      accessibility: Math.round((lighthouse?.categories?.accessibility?.score || 0) * 100),
      bestPractices: Math.round((lighthouse?.categories?.['best-practices']?.score || 0) * 100),
    }

    // Extract Core Web Vitals
    const audits = lighthouse?.audits || {}
    const coreWebVitals = {
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
      fid: audits['max-potential-fid']?.displayValue || 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      tbt: audits['total-blocking-time']?.displayValue || 'N/A',
      si: audits['speed-index']?.displayValue || 'N/A',
    }

    // Extract top opportunities
    const opportunities = Object.values(audits)
      .filter((a: any) => a.details?.type === 'opportunity' && a.score !== null && a.score < 1)
      .sort((a: any, b: any) => (a.score || 0) - (b.score || 0))
      .slice(0, 5)
      .map((a: any) => ({
        title: a.title,
        description: a.description,
        savings: a.details?.overallSavingsMs ? `${Math.round(a.details.overallSavingsMs)}ms` : null,
      }))

    return new Response(JSON.stringify({
      scores,
      coreWebVitals,
      opportunities,
      strategy,
      analyzedUrl: data.id,
      timestamp: new Date().toISOString(),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
