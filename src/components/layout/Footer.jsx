import { Link } from "react-router-dom";
import { profile } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <Link to="/contact">Get in touch →</Link>
      </div>
    </footer>
  );
}
