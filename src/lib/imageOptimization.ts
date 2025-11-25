/**
 * Image optimization utilities for converting and serving WebP images
 * 
 * Note: For production, you would typically use a CDN or image optimization service
 * that automatically converts images to WebP. This provides a development guide.
 */

/**
 * Generate WebP source path from original image path
 * In production, this would point to your CDN or optimized image service
 * 
 * @param originalPath - Original image path (e.g., "/images/hero.jpg")
 * @returns WebP version path
 */
export const getWebPPath = (originalPath: string): string => {
  // In development, return the same path (would be handled by CDN in production)
  // For production with CDN: return originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  return originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};

/**
 * Check if browser supports WebP
 * This is useful for client-side optimization decisions
 */
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Responsive image sizes for different breakpoints
 */
export const imageSizes = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 400, height: 300 },
  medium: { width: 800, height: 600 },
  large: { width: 1200, height: 900 },
  hero: { width: 1920, height: 1080 },
} as const;

/**
 * Generate srcset for responsive images
 * 
 * @param basePath - Base path without extension
 * @param sizes - Array of widths for srcset
 * @returns srcset string
 */
export const generateSrcSet = (basePath: string, sizes: number[]): string => {
  return sizes
    .map(size => `${basePath}-${size}w.webp ${size}w`)
    .join(', ');
};
