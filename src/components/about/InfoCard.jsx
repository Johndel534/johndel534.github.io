export default function InfoCard({ rows }) {
  return (
    <div className="info-card">
      {rows.map(({ k, v }) => (
        <div className="info-row" key={k}>
          <span className="k">{k}</span>
          <span className="v">{v}</span>
        </div>
      ))}
    </div>
  );
}
