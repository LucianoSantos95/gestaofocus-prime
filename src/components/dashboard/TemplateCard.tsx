interface TemplateCardProps {
  title: string;
  image: string;
  href: string;
}

export default function TemplateCard({ title, image, href }: TemplateCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl overflow-hidden border border-card-border bg-background-elevated transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:shadow-lg"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
        <h3 className="text-white font-semibold text-sm lg:text-base leading-tight">
          {title}
        </h3>
      </div>
    </a>
  );
}
