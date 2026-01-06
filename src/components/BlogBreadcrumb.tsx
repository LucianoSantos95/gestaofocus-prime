import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogBreadcrumbProps {
  articleTitle: string;
  articleSlug: string;
}

const BlogBreadcrumb = ({ articleTitle, articleSlug }: BlogBreadcrumbProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://focusinteligente.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://focusinteligente.com.br/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `https://focusinteligente.com.br/blog/${articleSlug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
          <li className="flex items-center">
            <Link
              to="/"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link
              to="/blog"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
              {articleTitle}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BlogBreadcrumb;
