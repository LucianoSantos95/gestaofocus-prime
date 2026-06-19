import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string;
  noindex?: boolean;
  faqItems?: { question: string; answer: string }[];
  breadcrumbItems?: { name: string; url: string }[];
  speakable?: string[];
}

const DOMAIN = 'https://focusinteligente.com.br';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Focus Gestão Inteligente',
  alternateName: 'Focus',
  url: DOMAIN,
  logo: `${DOMAIN}/lovable-uploads/focus-logo.png`,
  description: 'Consultoria de operações com IA para PMEs brasileiras. Mapeamento de processos, implementação do Notion como hub operacional e integração de agentes de IA para agências, consultorias e prestadores de serviço.',
  foundingDate: '2018',
  email: 'contato@focusinteligente.com.br',
  telephone: '+55-11-91674-2443',
  sameAs: [
    'https://www.instagram.com/focus.notionsystems/',
  ],
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: [
    'Consultoria de operações para PMEs',
    'Mapeamento e documentação de processos',
    'Notion como hub operacional',
    'Agentes de IA para automação',
    'Plataforma SaaS de gestão',
    'Onboarding de equipes',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contato@focusinteligente.com.br',
    telephone: '+55-11-91674-2443',
    contactType: 'customer service',
    availableLanguage: ['Portuguese', 'pt-BR'],
    areaServed: 'BR',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluções Focus',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Sob Medida (Focus Custom)',
          description: 'Sistemas exclusivos desenvolvidos do zero. Protótipo em 24h, entrega em até 30 dias.',
          url: `${DOMAIN}/solucoes-sob-medida`,
        },
        priceSpecification: { '@type': 'PriceSpecification', price: '3000', priceCurrency: 'BRL', minPrice: '3000' },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hub Empresarial',
          description: 'Plataforma SaaS de gestão completa: CRM, financeiro, projetos, dashboards.',
          url: `${DOMAIN}/hub-empresarial`,
        },
        priceSpecification: { '@type': 'PriceSpecification', price: '119', priceCurrency: 'BRL', minPrice: '119' },
      },
    ],
  },
};

const lucianoPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luciano Santos',
  jobTitle: 'Fundador e Consultor de Operações',
  url: `${DOMAIN}/sobre`,
  worksFor: { '@type': 'Organization', name: 'Focus Gestão Inteligente', url: DOMAIN },
  knowsAbout: [
    'Consultoria de operações para PMEs',
    'Mapeamento e documentação de processos',
    'Notion como hub operacional',
    'Agentes de IA para automação',
    'Gestão de agências e consultorias',
  ],
  sameAs: [
    'https://www.instagram.com/focus.notionsystems/',
  ],
};

const SEOHead = ({
  title,
  description,
  canonical,
  image = `${DOMAIN}/lovable-uploads/focus-logo.png`,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Focus Gestão Inteligente',
  keywords,
  noindex = false,
  faqItems,
  breadcrumbItems,
  speakable,
}: SEOHeadProps) => {
  const fullCanonical = canonical.startsWith('http') 
    ? canonical 
    : `${DOMAIN}${canonical}`;

  const pageSchema = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: { '@type': 'Person', name: 'Luciano Santos', url: `${DOMAIN}/sobre` },
    publisher: {
      '@type': 'Organization',
      name: 'Focus Gestão Inteligente',
      logo: { '@type': 'ImageObject', url: `${DOMAIN}/lovable-uploads/focus-logo.png` },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: { '@type': 'WebPage', '@id': fullCanonical },
  } : type === 'product' ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    image,
    provider: { '@type': 'Organization', name: 'Focus Gestão Inteligente' },
    areaServed: { '@type': 'Country', name: 'BR' },
  } : {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Focus Gestão Inteligente',
    url: DOMAIN,
    description,
  };

  const faqSchema = faqItems && faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null;

  const breadcrumbSchema = breadcrumbItems && breadcrumbItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: DOMAIN },
      ...breadcrumbItems.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${DOMAIN}${item.url}`,
      })),
    ],
  } : null;

  const speakableSchema = speakable && speakable.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakable,
    },
    url: fullCanonical,
  } : null;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <link rel="alternate" hrefLang="pt-BR" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Focus Gestão Inteligente" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(lucianoPersonSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {speakableSchema && (
        <script type="application/ld+json">
          {JSON.stringify(speakableSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
