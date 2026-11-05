import ResponsiveImage from "./ResponsiveImage";
import SocialLinks from "./SocialLinks";

export default function TeamMemberCard({ member, headingLevel: Heading = "h3" }) {
  return (
    <article className="group text-center">
      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-lg bg-light">
        <ResponsiveImage
          image={member.photo}
          alt={`Portrait of ${member.name}`}
          sizes="(min-width: 640px) 280px, 80vw"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <Heading className="heading-md mt-4">{member.name}</Heading>
      <p className="mt-0.5 font-semibold text-primary">{member.role}</p>
      {member.bio && <p className="mt-2 text-muted">{member.bio}</p>}
      {member.social?.length > 0 && (
        <SocialLinks
          links={member.social.map((link) => ({ ...link, label: `${member.name} on ${link.id}` }))}
          size="sm"
          className="mt-3 justify-center"
          label={`${member.name}'s social profiles`}
        />
      )}
    </article>
  );
}
