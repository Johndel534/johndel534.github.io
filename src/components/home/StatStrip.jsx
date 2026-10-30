export default function StatStrip({ stats }) {
  return (
    <div className="container">
      <div className="stat-strip">
        {stats.map(({ num, label }) => (
          <div className="stat" key={label}>
            <div className="num">{num}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
