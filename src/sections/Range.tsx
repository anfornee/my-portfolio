import { Section } from '../components/layout/Section';
import { site } from '../data/site';
import './ContentSections.css';

export function Range() {
	return (
		<Section
			className="content-section"
			eyebrow="Range"
			title="My stack changes. The way I approach unfamiliar systems is fairly consistent."
		>
			<ul className="range-list">
				{site.range.map((item) => (
					<li key={item.title}>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
					</li>
				))}
			</ul>
		</Section>
	);
}
