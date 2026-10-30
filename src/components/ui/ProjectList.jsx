import ProjectCard from "./ProjectCard";

/** Vertical stack of ProjectCards; numbers default to 01, 02, … */
export default function ProjectList({ items }) {
  return (
    <div className="project-list">
      {items.map((item, i) => (
        <ProjectCard
          key={item.id ?? item.title}
          number={item.number ?? String(i + 1).padStart(2, "0")}
          {...item}
        />
      ))}
    </div>
  );
}
