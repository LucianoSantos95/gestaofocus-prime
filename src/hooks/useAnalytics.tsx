import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

// Hook to track page views on route changes
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const pagePath = location.pathname;
    const pageTitle = getPageTitle(pagePath);
    
    trackPageView(pagePath, pageTitle);
  }, [location]);
};

// Helper function to get page titles based on route
const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    '/': 'Início - Focus',
    '/sistemas-notion': 'Sistemas Notion - Focus',
    '/sprint-produtividade': 'Sprint Produtividade - Focus',
    '/hub-empresarial': 'Hub Empresarial - Focus',
    '/focus-club': 'Focus Club - Focus',
  };

  return titles[pathname] || 'Focus - Gestão Empresarial e Produtividade';
};