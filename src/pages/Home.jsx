import Hero from "../components/home/Hero";
import StatStrip from "../components/home/StatStrip";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectLink from "../components/ui/ProjectLink";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { stats } from "../data/site";

export default function Home() {
  useDocumentTitle(null, "Portfolio of Johndel L. Sialongo, BSCS-3 student, programmer, and trader.");

  return (
    <>
      <Hero />
      <StatStrip stats={stats} />
      <Section>
        <SectionHeader eyebrow="What I do" title="Building software, reading markets.">
          I'm currently a 3rd-year Computer Science student, spending my time between
          school projects, self-directed programming work, and studying trading strategy
          and market structure on the side.
        </SectionHeader>
        <div className="btn-row">
          <ProjectLink to="/about" label="More about me →" />
        </div>
      </Section>
    </>
  );
}
