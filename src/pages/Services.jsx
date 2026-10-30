import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectList from "../components/ui/ProjectList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { services } from "../data/site";

export default function Services() {
  useDocumentTitle("Services", "Selected projects by Johndel L. Sialongo.");

  return (
    <Section>
      <SectionHeader eyebrow="Services" title="What I offer.">
        I provide three focused service areas: web development, mobile app development,
        and trading analysis &amp; research.
      </SectionHeader>
      <ProjectList items={services} />
    </Section>
  );
}
