// Analytics utility functions for tracking user interactions
import { supabase } from '@/integrations/supabase/client';

declare global {
  interface Window {
    gtag: (command: string, targetId: string | Date, config?: Record<string, any>) => void;
  }
}

// Get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Save event to Supabase
const saveEventToSupabase = async (eventName: string, parameters?: Record<string, any>) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    await supabase.from('analytics_events').insert({
      event_name: eventName,
      event_category: parameters?.event_category || 'engagement',
      event_label: parameters?.event_label || parameters?.label || '',
      event_value: parameters?.value || 0,
      user_id: user?.id || null,
      session_id: getSessionId(),
      page_path: window.location.pathname,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch (error) {
    console.error('Error saving analytics event:', error);
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Track in Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }
  
  // Also save to Supabase for our dashboard
  saveEventToSupabase(eventName, parameters);
};

// Track page views (for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
  
  // Also save to Supabase as a page_view event
  saveEventToSupabase('page_view', {
    event_category: 'navigation',
    event_label: pageTitle || pagePath,
    page_title: pageTitle,
  });
};

// Specific tracking functions for common actions
export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: location,
    custom_parameter_1: 'whatsapp_contact',
  });
};

export const trackNotionClick = (templateType: string, location: string) => {
  trackEvent('notion_template_click', {
    event_category: 'conversion',
    event_label: `${templateType}_${location}`,
    custom_parameter_1: templateType,
    custom_parameter_2: location,
  });
};

export const trackStripeClick = (location: string) => {
  trackEvent('stripe_purchase_click', {
    event_category: 'conversion',
    event_label: location,
    custom_parameter_1: 'purchase_intent',
  });
};

export const trackNavigationClick = (pageName: string) => {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: pageName,
  });
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: `${ctaText}_${location}`,
    custom_parameter_1: ctaText,
    custom_parameter_2: location,
  });
};