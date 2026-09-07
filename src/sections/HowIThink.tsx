import { Section } from "../components/layout/Section";
import "./ContentSections.css";

export function HowIThink() {
  return (
    <Section
      className="content-section content-section--intro"
      eyebrow="Perspective"
      title="How I think about the work"
    >
      <div className="editorial-intro">
        <p className="editorial-intro__lead">
          I’m most interested in the places where technology, product thinking,
          and people overlap.
        </p>
        <p>
          I like getting into unfamiliar systems, figuring out where the real
          friction is, and finding a practical solution that makes things better
          for both the person using the product and the team maintaining it.
        </p>
        <p>
          Sometimes that means building a reusable platform. Sometimes it means
          learning a new API well enough to connect systems that weren't
          initially designed for each other. Other times, the most useful thing I
          can build is the documentation, testing, or tooling that keeps the
          next person from having to solve the same problem again.
        </p>
        <p>
          I try to think beyond the feature in front of me. The code matters,
          but so does the system around it, the people who have to maintain it,
          and the experience on the other side.
        </p>
        <p>That’s usually where I find the best solutions.</p>
      </div>
    </Section>
  );
}
