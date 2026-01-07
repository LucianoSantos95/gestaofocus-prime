import { Share2, Linkedin, Twitter, Facebook, Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  vertical?: boolean;
}

const SocialShareButtons = ({ url, title, vertical = false }: SocialShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-[#0077b5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:text-[#1da1f2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-[#1877f2]'
    }
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copiado!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Erro ao copiar link');
    }
  };

  return (
    <div className={`flex items-center gap-2 ${vertical ? 'flex-col' : 'flex-row'}`}>
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        <Share2 className="w-3 h-3" />
        Compartilhar
      </span>
      <div className={`flex gap-1 ${vertical ? 'flex-col' : 'flex-row'}`}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg bg-muted/50 text-muted-foreground transition-colors ${link.color}`}
            aria-label={`Compartilhar no ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={copyLink}
          className="p-2 rounded-lg bg-muted/50 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Copiar link"
        >
          {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default SocialShareButtons;
