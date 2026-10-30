import { tickerPoints } from "../../data/site";

/** Animated "market watch" sparkline shown under the avatar. */
export default function TickerChart() {
  return (
    <div className="ticker">
      <svg viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true">
        <polyline className="ticker-path" points={tickerPoints} />
      </svg>
      <div className="ticker-labels">
        <span>market watch</span>
        <span>learning, daily</span>
      </div>
    </div>
  );
}
