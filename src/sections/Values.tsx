import { Section } from '../components/layout/Section';
import { site } from '../data/site';
import './ContentSections.css';

export function Values() {
	return (
		<Section
			className="content-section values-section"
			eyebrow="What I care about"
			title="The qualities I want the work to carry."
		>
			<ul className="values-list">
				{site.values.map((value) => (
					<li key={value.title}>
						<h3>{value.title}</h3>
						<p>{value.body}</p>
					</li>
				))}
			</ul>
		</Section>
	);
}
