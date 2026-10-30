import TechPill from "./TechPill";
import ProjectLink from "./ProjectLink";

/**
 * The numbered card used on Services, Projects and every service detail page.
 * `links` is an array of { label, to | href, external }.
 */
export default function ProjectCard({ id, number, title, description, tech = [], links = [] }) {
  return (
    <article className="project-card" id={id}>
      <span className="pnum">{number}</span>
      <div>
        <h3>{title}</h3>
        <p className="desc">{description}</p>
        <div className="tech-row">
          {tech.map((t) => <TechPill key={t}>{t}</TechPill>)}
        </div>
        {links.map(({ label, ...linkProps }, i) => (
          <div key={label} style={i > 0 ? { marginTop: 18 } : undefined}>
            <ProjectLink label={label} {...linkProps} />
          </div>
        ))}
      </div>
    </article>
  );
}
