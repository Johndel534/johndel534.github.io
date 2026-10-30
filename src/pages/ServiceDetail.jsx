import { Navigate, useParams } from "react-router-dom";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectList from "../components/ui/ProjectList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { serviceDetails } from "../data/site";

/** One template for the Web / Mobile / Trading service pages, driven by the :slug param. */
export default function ServiceDetail() {
  const { slug } = useParams();
  const detail = serviceDetails[slug];

  useDocumentTitle(detail?.pageTitle, detail?.description);
  if (!detail) return <Navigate to="/services" replace />;

  return (
    <Section>
      <SectionHeader eyebrow={detail.eyebrow} title={detail.heading}>
        {detail.intro}
      </SectionHeader>
      <ProjectList items={[detail.card]} />
    </Section>
  );
}
