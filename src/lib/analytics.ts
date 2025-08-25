// Analytics utility functions for tracking user interactions

declare global {
  interface Window {
    gtag: (command: string, targetId: string | Date, config?: Record<string, any>) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }
};

// Track page views (for SPA navigation)
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
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