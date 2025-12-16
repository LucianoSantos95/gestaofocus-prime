import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export const usePageTracking = () => {
  const location = useLocation();
  const scrollTracked = useRef<Set<number>>(new Set());
  const timeTracked = useRef<Set<number>>(new Set());
  const entryTime = useRef<number>(Date.now());

  useEffect(() => {
    // Reset tracking on route change
    scrollTracked.current = new Set();
    timeTracked.current = new Set();
    entryTime.current = Date.now();

    // Scroll tracking with requestAnimationFrame to avoid forced reflow
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = window.innerHeight;
          const scrollY = window.scrollY;
          
          if (scrollHeight > clientHeight) {
            const scrollPercentage = Math.round(
              (scrollY / (scrollHeight - clientHeight)) * 100
            );

            const milestones = [25, 50, 75, 100];
            milestones.forEach((milestone) => {
              if (scrollPercentage >= milestone && !scrollTracked.current.has(milestone)) {
                scrollTracked.current.add(milestone);
                trackEvent('scroll_depth', {
                  event_category: 'engagement',
                  event_label: `${milestone}%`,
                  value: milestone,
                  page_path: location.pathname,
                });
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Time on page tracking
    const timeIntervals = [5000, 15000, 30000, 60000]; // 5s, 15s, 30s, 60s
    const timers = timeIntervals.map((interval, index) => {
      return setTimeout(() => {
        const seconds = interval / 1000;
        if (!timeTracked.current.has(seconds)) {
          timeTracked.current.add(seconds);
          trackEvent('time_on_page', {
            event_category: 'engagement',
            event_label: `${seconds}s`,
            value: seconds,
            page_path: location.pathname,
          });
        }
      }, interval);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timers.forEach(clearTimeout);
    };
  }, [location]);
};
