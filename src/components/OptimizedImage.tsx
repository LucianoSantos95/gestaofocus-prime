import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: "lazy" | "eager";
  webpSrc?: string;
}

/**
 * OptimizedImage component that provides WebP support with fallback
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/image.jpg" 
 *   webpSrc="/image.webp"
 *   alt="Description" 
 *   width={800} 
 *   height={600}
 *   loading="lazy"
 * />
 */
export const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  width, 
  height,
  className = "",
  loading = "lazy",
  ...props 
}: OptimizedImageProps) => {
  // If WebP version is provided, use picture element for progressive enhancement
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img 
          src={src} 
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={loading}
          {...props}
        />
      </picture>
    );
  }

  // Otherwise, just use regular img with optimizations
  return (
    <img 
      src={src} 
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      {...props}
    />
  );
};
