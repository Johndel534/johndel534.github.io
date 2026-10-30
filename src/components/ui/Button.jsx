import SmartLink from "./SmartLink";

/** Primary / secondary button. Renders a link when `to`/`href` is given, else a <button>. */
export default function Button({ variant = "primary", to, href, external, children, ...rest }) {
  const className = `btn btn-${variant}`;
  if (to || href) {
    return (
      <SmartLink to={to} href={href} external={external} className={className} {...rest}>
        {children}
      </SmartLink>
    );
  }
  return <button className={className} {...rest}>{children}</button>;
}
