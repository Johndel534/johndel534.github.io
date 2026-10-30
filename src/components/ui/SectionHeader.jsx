import Eyebrow from "./Eyebrow";

export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
