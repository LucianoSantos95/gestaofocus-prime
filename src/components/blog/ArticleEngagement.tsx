import { Calendar, Clock, User } from 'lucide-react';
import AuthorBio from './AuthorBio';
import SocialShareButtons from './SocialShareButtons';

interface ArticleEngagementProps {
  publishDate: string;
  readTime: string;
  articleUrl: string;
  articleTitle: string;
}

const ArticleEngagement = ({ publishDate, readTime, articleUrl, articleTitle }: ArticleEngagementProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border mb-8">
      <div className="flex flex-wrap items-center gap-4">
        <AuthorBio compact />
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>
      </div>
      <SocialShareButtons url={articleUrl} title={articleTitle} />
    </div>
  );
};

export default ArticleEngagement;
