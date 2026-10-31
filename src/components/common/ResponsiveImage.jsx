/**
 * Renders an entry from src/data/images.js with srcset, intrinsic size
 * (prevents layout shift) and lazy loading unless `priority` is set.
 */
export default function ResponsiveImage({
  image,
  sizes = "100vw",
  priority = false,
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
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      fetchPriority={priority ? "high" : undefined}
      className={className}
      style={style}
    />
  );
}
