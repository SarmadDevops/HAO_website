import { team } from "../../data/team";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import TeamMemberCard from "../common/TeamMemberCard";

export default function TeamSection() {
  return (
    <section aria-labelledby="team-title" className="section bg-light">
      <div className="container-site">
        <SectionHeader
          id="team-title"
          align="center"
          eyebrow="Core team"
          title="Meet the people leading HAO"
          intro="HAO is run by volunteers. Our core team coordinates the chapters, the projects and the volunteers who give their time."
        />
        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 justify-items-center gap-10 xs:grid-cols-2 lg:max-w-none lg:grid-cols-[repeat(auto-fit,minmax(220px,280px))] lg:justify-center">
          {team.map((member, index) => (
            <Reveal as="li" key={member.id} delay={index * 80} className="w-full max-w-[280px]">
              <TeamMemberCard member={member} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
