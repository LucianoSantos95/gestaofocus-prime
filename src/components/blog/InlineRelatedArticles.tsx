import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
  title: string;
  slug: string;
}

interface InlineRelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

const InlineRelatedArticles = ({ articles, title = "Continue Lendo" }: InlineRelatedArticlesProps) => {
  if (articles.length === 0) return null;

  return (
    <div className="bg-muted/30 rounded-xl p-5 my-8 border border-border">
      <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
        <ArrowRight className="w-4 h-4 text-primary" />
        {title}
      </p>
      <div className="space-y-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="block text-sm text-primary hover:underline transition-colors"
          >
            → {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InlineRelatedArticles;
