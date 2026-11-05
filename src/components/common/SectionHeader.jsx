/**
 * Eyebrow + heading + optional intro used at the top of most sections.
 * Pass `as="h1"` on pages where the section heading is the page title,
 * and `icon` (a react-icons component) to lead the eyebrow with an icon.
 */
export default function SectionHeader({
  eyebrow,
  icon: Icon,
  title,
  intro,
  align = "left",
  tone = "default",
  as: Heading = "h2",
  id,
  className = "",
}) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${Icon ? "eyebrow-icon" : ""} ${light ? "eyebrow-light" : ""}`}>
          {Icon && (
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-dark">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
          {eyebrow}
        </p>
      )}
      <Heading id={id} className={`heading-lg ${light ? "text-white" : ""}`}>
        {title}
      </Heading>
      {intro && <p className={`lead mt-4 ${centered ? "mx-auto" : ""} ${light ? "!text-white/80" : ""}`}>{intro}</p>}
    </div>
  );
}
