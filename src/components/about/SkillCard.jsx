export default function SkillCard({ index, name, level }) {
  return (
    <div className="skill-card">
      <span className="idx">{String(index + 1).padStart(2, "0")}</span>
      <h4>{name}</h4>
      <div
        className="bar"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
