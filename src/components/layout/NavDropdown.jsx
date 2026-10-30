import { useRef } from "react";
import { NavLink } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";

/** Click-to-toggle dropdown. Controlled by the Navbar so only one is open at a time. */
export default function NavDropdown({ id, label, items, isOpen, onToggle, onClose, onNavigate }) {
  const ref = useRef(null);
  useClickOutside(ref, onClose, isOpen);

  return (
    <li className="dropdown" ref={ref}>
      <button
        type="button"
        className={`dropdown-btn${isOpen ? " open" : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`${id}-menu`}
        onClick={() => onToggle(id)}
      >
        {label} <span className="arrow">&#9662;</span>
      </button>
      <ul id={`${id}-menu`} className={`dropdown-menu${isOpen ? " show" : ""}`}>
        {items.map((item) => (
          <li key={item.label}>
            <NavLink to={item.to} onClick={onNavigate}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}
