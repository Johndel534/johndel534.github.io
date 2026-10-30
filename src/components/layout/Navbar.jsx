import { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavDropdown from "./NavDropdown";
import { navItems, profile } from "../../data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);     // mobile hamburger
  const [openDropdown, setOpenDropdown] = useState(null); // id of the open dropdown
  const { pathname } = useLocation();

  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);
  const closeDropdown = useCallback(() => setOpenDropdown(null), []);
  const toggleDropdown = useCallback(
    (id) => setOpenDropdown((cur) => (cur === id ? null : id)),
    []
  );

  // Close everything whenever the route changes.
  useEffect(closeAll, [pathname, closeAll]);

  // Escape closes menus.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <span className="dot" />
          {profile.logo}
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navItems.map((item) =>
            item.type === "dropdown" ? (
              <NavDropdown
                key={item.id}
                {...item}
                isOpen={openDropdown === item.id}
                onToggle={toggleDropdown}
                onClose={closeDropdown}
                onNavigate={closeAll}
              />
            ) : (
              <li key={item.label}>
                <NavLink to={item.to} end={item.end} onClick={closeAll}>
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
