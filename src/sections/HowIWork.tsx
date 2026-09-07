import { Section } from "../components/layout/Section";
import { site } from "../data/site";
import "./ContentSections.css";

export function HowIWork() {
  return (
    <Section
      className="content-section"
      eyebrow="How I work"
      title="I try to leave systems easier to understand than I found them."
    >
      <ul className="principle-list">
        {site.howIWork.map((principle, index) => (
          <li key={principle.title}>
            <article className="principle">
              <p className="principle__index">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3>{principle.title}</h3>
                {principle.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <section className="workflow-callout" aria-labelledby="ai-workflow-title">
        <div className="workflow-callout__body">
          <h3 id="ai-workflow-title">AI inside the workflow</h3>
          <p>
            I’m most interested in AI when it becomes part of how a team
            actually works.
          </p>
          <p>
            I’ve been building shared tooling for developers, PMs, designers,
            and producers that makes it easier to ask questions, find the right
            context, and work from the same source of truth. That includes
            assistants that can scope a shared knowledge base to the person
            using it, along with a more structured developer playbook built
            around agents, shared context, and Claude plugins.
          </p>
          <p>
            I care a lot about making these tools useful without making them
            feel mysterious or disconnected from the rest of the workflow. They
            should help people move faster, understand more, and still fit
            naturally into the way the team plans, builds, reviews, and ships.
          </p>
          <p>
            The goal is not to put AI everywhere. It is to make the parts that
            are genuinely useful feel obvious.
          </p>
        </div>
      </section>
    </Section>
  );
}
