import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  result: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Eliminamos 15h/semana só parando de procurar informações perdidas. O ROI foi imediato.",
    author: "Carlos Mendes",
    role: "CEO",
    company: "TechFlow Consultoria",
    result: "+40% produtividade",
    rating: 5
  },
  {
    quote: "Antes usávamos 7 ferramentas diferentes. Agora tudo está em um só lugar. Economia de R$ 500/mês.",
    author: "Mariana Silva",
    role: "Gestora de Projetos",
    company: "InnovaTech Solutions",
    result: "R$ 6.000/ano economizados",
    rating: 5
  },
  {
    quote: "O melhor investimento que fizemos. Em 2 semanas já vimos resultado na organização da equipe.",
    author: "Ricardo Oliveira",
    role: "Diretor de Operações",
    company: "Alpha Enterprises",
    result: "Setup em 2h",
    rating: 5
  }
];

const HeroTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div 
        className={`
          transition-all duration-300 ease-in-out
          ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}
        `}
      >
        <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border">
          {/* Quote Icon */}
          <div className="absolute -top-3 left-6 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30">
            <Quote className="w-5 h-5 text-primary" />
          </div>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-3 pt-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-foreground text-center mb-4 text-base md:text-lg font-medium leading-relaxed">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="text-center border-t border-card-border pt-4">
            <div className="font-semibold text-foreground">{testimonial.author}</div>
            <div className="text-sm text-foreground-muted">
              {testimonial.role} • {testimonial.company}
            </div>
          </div>

          {/* Result Badge */}
          <div className="mt-4 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-medium text-primary">
                ✨ {testimonial.result}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
              }, 300);
            }}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-card-border hover:bg-primary/50'
              }
            `}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroTestimonial;
