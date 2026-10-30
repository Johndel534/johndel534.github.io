/** Standard page section wrapped in the site container. */
export default function Section({ children, className = "" }) {
  return <section className={`section container ${className}`.trim()}>{children}</section>;
}
