import { useEffect, useState } from 'react';
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { trackEvent } from '@/lib/analytics';

export default function OnboardingTour() {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    // Check if user has seen the tour
    const tourCompleted = localStorage.getItem('onboardingTourCompleted');
    
    if (!tourCompleted) {
      // Start tour after a short delay
      const timer = setTimeout(() => {
        setRunTour(true);
        trackEvent('onboarding_tour_started', {
          event_category: 'engagement',
          event_label: 'first_visit',
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const steps: Step[] = [
    {
      target: 'body',
      content: '👋 Bem-vindo à Focus! Vamos fazer um tour rápido para você conhecer tudo.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.hero-title',
      content: '🎯 Aqui está nossa missão: transformar a gestão da sua empresa com sistemas eficientes.',
      placement: 'bottom',
    },
    {
      target: '.btn-hero',
      content: '📞 Este é o melhor caminho: agende uma consultoria gratuita de 30 minutos para entender suas necessidades.',
      placement: 'bottom',
    },
    {
      target: 'nav',
      content: '🧭 Use este menu para explorar nossos serviços, blog e sistemas gratuitos.',
      placement: 'bottom',
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, action, index, type } = data;

    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRunTour(false);
      localStorage.setItem('onboardingTourCompleted', 'true');
      
      trackEvent('onboarding_tour_completed', {
        event_category: 'engagement',
        event_label: status === STATUS.FINISHED ? 'completed' : 'skipped',
        tour_step: index,
      });
    }

    // Track individual steps
    if (type === 'step:after') {
      trackEvent('onboarding_tour_step', {
        event_category: 'engagement',
        event_label: `step_${index}`,
        action: action,
      });
    }
  };

  return (
    <Joyride
      steps={steps}
      run={runTour}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: 'hsl(var(--primary))',
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: '12px',
          fontSize: '14px',
        },
        buttonNext: {
          backgroundColor: 'hsl(var(--primary))',
          fontSize: '14px',
          padding: '8px 16px',
          borderRadius: '8px',
        },
        buttonBack: {
          color: 'hsl(var(--foreground-muted))',
          fontSize: '14px',
        },
        buttonSkip: {
          color: 'hsl(var(--foreground-muted))',
          fontSize: '14px',
        },
      }}
      locale={{
        back: 'Voltar',
        close: 'Fechar',
        last: 'Finalizar',
        next: 'Próximo',
        skip: 'Pular tour',
      }}
    />
  );
}
