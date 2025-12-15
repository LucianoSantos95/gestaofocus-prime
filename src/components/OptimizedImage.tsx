import { ImgHTMLAttributes, useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: "lazy" | "eager";
  webpSrc?: string;
  autoWebp?: boolean;
}

/**
 * Generates WebP path from original image path
 */
const getWebpPath = (originalPath: string): string => {
  // Handle both imported assets and public paths
  const pathWithoutExtension = originalPath.replace(/\.(png|jpg|jpeg|gif)$/i, '');
  return `${pathWithoutExtension}.webp`;
};

/**
 * OptimizedImage component that provides WebP support with fallback
 * 
 * Features:
 * - Automatic WebP detection when autoWebp=true
 * - Manual WebP with webpSrc prop
 * - Lazy loading by default
 * - Picture element for progressive enhancement
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/image.jpg" 
 *   alt="Description" 
 *   autoWebp={true}
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
  autoWebp = false,
  ...props 
}: OptimizedImageProps) => {
  const [hasWebp, setHasWebp] = useState(false);
  const [webpPath, setWebpPath] = useState<string | null>(null);

  useEffect(() => {
    // If webpSrc is provided manually, use it
    if (webpSrc) {
      setWebpPath(webpSrc);
      setHasWebp(true);
      return;
    }

    // If autoWebp is enabled, try to detect WebP version
    if (autoWebp && src) {
      const generatedWebpPath = getWebpPath(src);
      
      // Check if WebP file exists by attempting to load it
      const img = new Image();
      img.onload = () => {
        setWebpPath(generatedWebpPath);
        setHasWebp(true);
      };
      img.onerror = () => {
        setHasWebp(false);
      };
      img.src = generatedWebpPath;
    }
  }, [src, webpSrc, autoWebp]);

  // Use picture element for WebP with fallback
  if (hasWebp && webpPath) {
    return (
      <picture>
        <source srcSet={webpPath} type="image/webp" />
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

  // Regular img with optimizations
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