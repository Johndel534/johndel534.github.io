import SmartLink from "../ui/SmartLink";
import icons from "./icons";

export default function ContactMethod({ icon, label, value, href, external }) {
  return (
    <SmartLink href={href} external={external} className="contact-method">
      <span className="icon">{icons[icon]}</span>
      <span>
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </span>
    </SmartLink>
  );
}
