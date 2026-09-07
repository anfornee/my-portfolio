import { Section } from '../components/layout/Section';
import './PreviewSections.css';

export function StoryPreview() {
	return (
		<Section
			id="story"
			eyebrow="The path here"
			title="Craft became signal. Signal became systems."
		>
			<div className="story-intro">
				<p>
					Before software, there was coffee: customers, leadership,
					ownership, and the discipline of caring about details people
					might never consciously notice.
				</p>

				<p>
					Audio engineering turned that instinct into systems thinking.
					Signal moves through components, every stage has a responsibility,
					and the technical work is best when it serves the experience.
				</p>

				<p className="story-intro__closing">
					Software felt familiar.
				</p>
			</div>
		</Section>
	);
}
