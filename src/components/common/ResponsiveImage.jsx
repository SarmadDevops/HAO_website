/**
 * Renders an entry from src/data/images.js with srcset, intrinsic size
 * (prevents layout shift) and lazy loading. `priority` is for the main (LCP)
 * image; `eager` skips lazy loading without raising its fetch priority.
 */
export default function ResponsiveImage({
  image,
  sizes = "100vw",
  priority = false,
  eager = false,
  alt,
  className = "",
  style,
}) {
  if (!image) return null;
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.srcSet ? sizes : undefined}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority || eager ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={style}
    />
  );
}
