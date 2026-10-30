import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Eyebrow from "../components/ui/Eyebrow";
import Tag from "../components/ui/Tag";
import InfoCard from "../components/about/InfoCard";
import SkillsGrid from "../components/about/SkillsGrid";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { aboutInfo, careerGoal, interests, skills } from "../data/site";

export default function About() {
  useDocumentTitle("About", "About Johndel L. Sialongo — BSCS-3 student, programmer, and trader.");

  return (
    <>
      <Section>
        <SectionHeader eyebrow="About" title="A bit about who I am." />

        <div className="about-grid">
          <div>
            <InfoCard rows={aboutInfo} />
            <div className="goal-block">
              <h3>Career goal</h3>
              <p>{careerGoal}</p>
            </div>
          </div>

          <div className="about-desc">
            <p>
              Hi, I'm Johndel L. Sialongo, a 20-year-old BSCS-3 student passionate about
              technology, programming, and financial markets. I enjoy building software
              projects, learning new technologies, and studying trading strategies and
              market behavior.
            </p>
            <p>{careerGoal.replace("To continuously", "My goal is to continuously")}</p>

            <Eyebrow className="spaced">Interests</Eyebrow>
            <div className="interest-tags">
              {interests.map((i) => <Tag key={i}>{i}</Tag>)}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Skills" title="What I'm working with.">
          A realistic snapshot of where I currently stand — still learning, still improving.
        </SectionHeader>
        <SkillsGrid skills={skills} />
      </Section>
    </>
  );
}
