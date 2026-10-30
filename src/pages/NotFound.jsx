import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <Section>
      <SectionHeader eyebrow="404" title="Page not found.">
        The page you're looking for doesn't exist.
      </SectionHeader>
      <Button to="/">Back to Home</Button>
    </Section>
  );
}
