import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import TickerChart from "./TickerChart";
import { profile } from "../../data/site";

export default function Hero() {
  return (
    <section className="section hero container">
      <div className="hero-text">
        <Eyebrow>{profile.eyebrow.join(" · ")}</Eyebrow>
        <h1 className="hero-title">
          Hello, I'm {profile.name}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <p className="hero-subtitle">{profile.tagline}</p>
        <p className="hero-desc">
          I'm a Computer Science student who builds practical software and studies how
          markets move. Half my time goes into writing code, the other half into
          reading price charts — both are just different ways of solving problems
          under uncertainty.
        </p>
        <div className="btn-row">
          <Button to="/services">View My Work</Button>
          <Button to="/contact" variant="secondary">Contact Me</Button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar">
          <img src={profile.photo} alt={profile.name} className="avatar-img" />
        </div>
        <TickerChart />
      </div>
    </section>
  );
}
