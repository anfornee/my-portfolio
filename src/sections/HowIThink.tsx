import { Section } from '../components/layout/Section';
import './ContentSections.css';

export function HowIThink() {
	return (
		<Section
			className="content-section content-section--intro"
			eyebrow="Perspective"
			title="How I think about the work"
		>
			<div className="editorial-intro">
				<p className="editorial-intro__lead">
					I&apos;m drawn to problems where technology, product thinking,
					and people overlap.
				</p>
				<p>
					I like learning unfamiliar systems quickly, understanding where
					the real friction is, and finding a useful solution that improves
					the experience for both users and the team maintaining it.
				</p>
				<p>
					Sometimes that means building a reusable platform. Sometimes it
					means connecting systems that were never designed to work
					together. Sometimes it means writing the documentation, tests, or
					tooling that keeps the next person from rediscovering the same
					problem.
				</p>
			</div>
		</Section>
	);
}
