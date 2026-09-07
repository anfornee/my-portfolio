import { Section } from '../components/layout/Section';
import { site } from '../data/site';
import './ContentSections.css';

export function Technology() {
	return (
		<Section
			className="content-section technology-section"
			eyebrow="Technology"
			title="Tools I use to make the work real."
		>
			<div className="technology-groups">
				{site.technologyGroups.map((group) => (
					<section key={group.label} aria-labelledby={`technology-${group.label.replaceAll(' ', '-').toLowerCase()}`}>
						<h3 id={`technology-${group.label.replaceAll(' ', '-').toLowerCase()}`}>
							{group.label}
						</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</Section>
	);
}
