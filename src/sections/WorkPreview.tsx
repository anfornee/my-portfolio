import { Section } from '../components/layout/Section';
import './PreviewSections.css';

export function WorkPreview() {
	return (
		<Section
			id="work"
			eyebrow="Selected work"
			title="Complex systems, made easier to use."
		>
			<div className="preview-grid">
				<article className="preview-card">
					<p className="preview-card__index">01</p>
					<div>
						<h3>Enterprise product development</h3>
						<p>
							Production software built inside a large organization,
							where maintainability, stakeholders, and real-world
							constraints matter as much as the interface.
						</p>
					</div>
				</article>

				<article className="preview-card">
					<p className="preview-card__index">02</p>
					<div>
						<h3>Personal product systems</h3>
						<p>
							Tools designed from idea through implementation, with a
							focus on useful data, quiet automation, and cohesive
							everyday experiences.
						</p>
					</div>
				</article>
			</div>
		</Section>
	);
}
