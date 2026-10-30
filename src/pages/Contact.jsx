import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import ContactMethod from "../components/contact/ContactMethod";
import ContactForm from "../components/contact/ContactForm";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { contactMethods } from "../data/site";

export default function Contact() {
  useDocumentTitle("Contact", "Get in touch with Johndel L. Sialongo.");

  return (
    <Section>
      <SectionHeader eyebrow="Contact" title="Let's talk.">
        Reach out directly, or send a message using the form.
      </SectionHeader>
      <div className="contact-grid">
        <div className="contact-methods">
          {contactMethods.map((m) => <ContactMethod key={m.label} {...m} />)}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
