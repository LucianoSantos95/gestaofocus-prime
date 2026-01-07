import { Linkedin, Twitter } from 'lucide-react';

interface AuthorBioProps {
  compact?: boolean;
}

const AuthorBio = ({ compact = false }: AuthorBioProps) => {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <img
          src="/lovable-uploads/focus-logo.png"
          alt="Equipe Focus"
          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <p className="font-medium text-foreground text-sm">Equipe Focus</p>
          <p className="text-xs text-muted-foreground">Especialistas em Produtividade</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/50 rounded-xl p-6 border border-border mt-12">
      <div className="flex items-start gap-4">
        <img
          src="/lovable-uploads/focus-logo.png"
          alt="Equipe Focus"
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-1">Escrito pela Equipe Focus</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Somos especialistas em produtividade, organização e sistemas no Notion. 
            Nossa missão é ajudar profissionais e empresas a transformarem caos em clareza, 
            com metodologias práticas e templates prontos para usar.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/focus.notionsystems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <span className="text-xs text-muted-foreground">
              +15.000 profissionais usam nossos sistemas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
