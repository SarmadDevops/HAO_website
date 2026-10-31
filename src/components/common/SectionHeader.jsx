/**
 * Eyebrow + heading + optional intro used at the top of most sections.
 * Pass `as="h1"` on pages where the section heading is the page title.
 */
export default function SectionHeader({
  eyebrow,
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
      {eyebrow && <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>}
      <Heading id={id} className={`heading-lg ${light ? "text-white" : ""}`}>
        {title}
      </Heading>
      {intro && <p className={`lead mt-4 ${light ? "!text-white/80" : ""}`}>{intro}</p>}
    </div>
  );
}
