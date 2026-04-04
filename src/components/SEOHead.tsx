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
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Focus Gestão Inteligente',
  url: 'https://focusinteligente.com.br',
  logo: 'https://focusinteligente.com.br/lovable-uploads/focus-logo.png',
  description: 'Sistemas sob medida e plataforma de gestão para agências, consultorias e prestadores de serviço.',
  email: 'contato@focusinteligente.com.br',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contato@focusinteligente.com.br',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
};

const SEOHead = ({
  title,
  description,
  canonical,
  image = 'https://focusinteligente.com.br/lovable-uploads/focus-logo.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Focus Gestão Inteligente',
  keywords,
  noindex = false,
  faqItems,
}: SEOHeadProps) => {
  const fullCanonical = canonical.startsWith('http') 
    ? canonical 
    : `https://focusinteligente.com.br${canonical}`;

  const pageSchema = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: { '@type': 'Organization', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Focus Gestão Inteligente',
      logo: { '@type': 'ImageObject', url: 'https://focusinteligente.com.br/lovable-uploads/focus-logo.png' },
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
    url: 'https://focusinteligente.com.br',
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

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      
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
        {JSON.stringify(pageSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
