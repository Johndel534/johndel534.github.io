import SmartLink from "./SmartLink";

export default function ProjectLink({ label, ...linkProps }) {
  return <SmartLink className="project-link" {...linkProps}>{label}</SmartLink>;
}
