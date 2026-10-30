import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectList from "../components/ui/ProjectList";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { projects } from "../data/site";

export default function Projects() {
  useDocumentTitle("Projects", "Projects by Johndel L. Sialongo.");

  return (
    <Section>
      <SectionHeader eyebrow="Projects" title="Selected work.">
        Here are the main project examples that align with the service areas I offer.
      </SectionHeader>
      <ProjectList items={projects} />
    </Section>
  );
}
