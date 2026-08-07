import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  /** Dimensões reais da `image`. Só informe se souber — declarar 1200x630 para
   *  uma imagem que não tem esse tamanho faz o crawler esticar e cortar. */
  imageWidth?: number;
  imageHeight?: number;
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
          description: 'Plataforma de gestão completa e gratuita: CRM, financeiro, projetos, RH, marketing e dashboards com IA.',
          url: `${DOMAIN}/hub-empresarial`,
        },
        price: '0',
        priceCurrency: 'BRL',
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

/**
 * Marca as tags criadas por este componente para podermos removê-las
 * numa troca de rota sem tocar em nada que venha do index.html.
 */
const MANAGED = 'data-seo-head';

/** Cria ou atualiza uma <meta>. Reaproveita a tag estática do index.html quando existe. */
const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${CSS.escape(key)}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED, '');
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/** Remove uma <meta> — usada para tags que não se aplicam à rota atual. */
const dropMeta = (attr: 'name' | 'property', key: string) => {
  document.head
    .querySelectorAll(`meta[${attr}="${CSS.escape(key)}"]`)
    .forEach((el) => el.remove());
};

/** Cria ou atualiza um <link>, identificado por rel (+ hreflang quando houver). */
const setLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) el.setAttribute('hreflang', hreflang);
    el.setAttribute(MANAGED, '');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/** Sem imagem própria a página cai no logo, que é 220x59 — uma tira estreita.
 *  Declarar 1200x630 para ele fazia o crawler esticar e cortar a marca. */
const LOGO_FALLBACK = `${DOMAIN}/lovable-uploads/focus-logo.png`;

const SEOHead = ({
  title,
  description,
  canonical,
  image = LOGO_FALLBACK,
  imageWidth,
  imageHeight,
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
  const faqKey = JSON.stringify(faqItems ?? null);
  const breadcrumbKey = JSON.stringify(breadcrumbItems ?? null);
  const speakableKey = JSON.stringify(speakable ?? null);

  useEffect(() => {
    const fullCanonical = canonical.startsWith('http') ? canonical : `${DOMAIN}${canonical}`;

    document.documentElement.lang = 'pt-BR';
    document.title = title;

    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    else dropMeta('name', 'keywords');

    setMeta(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
    );

    setLink('canonical', fullCanonical);
    setLink('alternate', fullCanonical, 'pt-BR');
    setLink('alternate', fullCanonical, 'x-default');

    setMeta('property', 'og:type', type);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullCanonical);
    // Só anuncia 1200x630 quando a página traz imagem própria (a convenção dos
    // assets *-og.jpg do projeto). No fallback, informa o tamanho real do logo.
    const usandoFallback = image === LOGO_FALLBACK;
    const ogW = imageWidth ?? (usandoFallback ? 220 : 1200);
    const ogH = imageHeight ?? (usandoFallback ? 59 : 630);

    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:width', String(ogW));
    setMeta('property', 'og:image:height', String(ogH));
    setMeta('property', 'og:locale', 'pt_BR');
    setMeta('property', 'og:site_name', 'Focus Gestão Inteligente');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // article:* só existe em artigos — precisa sair ao navegar para outra rota
    if (type === 'article') {
      if (publishedTime) setMeta('property', 'article:published_time', publishedTime);
      else dropMeta('property', 'article:published_time');
      if (modifiedTime) setMeta('property', 'article:modified_time', modifiedTime);
      else dropMeta('property', 'article:modified_time');
      setMeta('property', 'article:author', author);
    } else {
      dropMeta('property', 'article:published_time');
      dropMeta('property', 'article:modified_time');
      dropMeta('property', 'article:author');
    }

    const pageSchema =
      type === 'article'
        ? {
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
          }
        : type === 'product'
        ? {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: title,
            description,
            image,
            provider: { '@type': 'Organization', name: 'Focus Gestão Inteligente' },
            areaServed: { '@type': 'Country', name: 'BR' },
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Focus Gestão Inteligente',
            url: DOMAIN,
            description,
          };

    const schemas: Record<string, unknown>[] = [organizationSchema, lucianoPersonSchema, pageSchema];

    if (faqItems && faqItems.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      });
    }

    if (breadcrumbItems && breadcrumbItems.length > 0) {
      schemas.push({
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
      });
    }

    if (speakable && speakable.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        speakable: { '@type': 'SpeakableSpecification', cssSelector: speakable },
        url: fullCanonical,
      });
    }

    // Substitui o JSON-LD da rota anterior pelo desta rota
    document.head
      .querySelectorAll(`script[type="application/ld+json"][${MANAGED}]`)
      .forEach((el) => el.remove());

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(MANAGED, '');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [
    title,
    description,
    canonical,
    image,
    imageWidth,
    imageHeight,
    type,
    publishedTime,
    modifiedTime,
    author,
    keywords,
    noindex,
    faqKey,
    breadcrumbKey,
    speakableKey,
  ]);

  return null;
};

export default SEOHead;
