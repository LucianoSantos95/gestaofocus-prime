import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface Article {
  title: string;
  excerpt: string;
  slug: string;
  readTime: string;
  category: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
  allArticles: Article[];
}

export default function RelatedArticles({ currentSlug, category, allArticles }: RelatedArticlesProps) {
  // Get related articles from same category
  const relatedArticles = allArticles
    .filter(article => 
      article.slug !== currentSlug && 
      article.category === category
    )
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  const handleArticleClick = (articleSlug: string) => {
    trackEvent('related_article_click', {
      event_category: 'engagement',
      event_label: articleSlug,
      from_article: currentSlug,
    });
  };

  return (
    <div className="mt-12 pt-12 border-t border-border">
      <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            onClick={() => handleArticleClick(article.slug)}
            className="group"
          >
            <Card className="p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <div className="flex items-center gap-2 text-sm text-foreground-muted mb-3">
                <span className="text-primary font-medium">{article.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h4>
              
              <p className="text-sm text-foreground-muted mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Ler artigo
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
