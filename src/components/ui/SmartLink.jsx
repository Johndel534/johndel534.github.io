import { Link } from "react-router-dom";

/**
 * One link component for everything:
 *  - `to`        → client-side route
 *  - `href`      → plain anchor (mailto:, tel:, PDFs, external sites)
 *  - `external`  → opens in a new tab safely
 */
export default function SmartLink({ to, href, external, children, ...rest }) {
  if (to) return <Link to={to} {...rest}>{children}</Link>;
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return <a href={href} {...extra} {...rest}>{children}</a>;
}
