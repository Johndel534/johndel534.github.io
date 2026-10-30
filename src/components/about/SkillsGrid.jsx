import SkillCard from "./SkillCard";

export default function SkillsGrid({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((s, i) => (
        <SkillCard key={s.name} index={i} {...s} />
      ))}
    </div>
  );
}
