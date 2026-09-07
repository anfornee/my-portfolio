import { Section } from '../components/layout/Section';
import './ContentSections.css';

const platformDecisions = [
	{
		title: 'One platform, many properties',
		body: 'Composition and a focused override layer let each property define its own modules, themes, routes, and behavior without becoming an independent fork. Platform improvements and fixes continue to flow through a shared core that a small team can support.',
	},
	{
		title: 'Complexity stays behind the interface',
		body: 'Editors choose content, modules, languages, and media. The platform resolves content, caching, media pipelines, shared playback state, routing, and infrastructure without asking editors to understand those systems.',
	},
	{
		title: 'Built for the next change',
		body: 'The architecture accounts for future properties, future developers, reproducible environments, documented contracts, automated checks, and a maintenance burden the team can realistically carry.',
	},
] as const;

export function SelectedWork() {
	return (
		<Section
			id="work"
			className="content-section"
			eyebrow="Selected work"
			title="Complex systems, made easier to use."
		>
			<article className="work-feature" aria-labelledby="baymax-title">
				<header className="work-feature__header">
					<div>
						<p className="work-feature__label">Flagship platform</p>
						<h3 id="baymax-title">Baymax</h3>
					</div>
					<p className="work-feature__positioning">
						A publishing platform designed so the complexity stays behind
						the interface.
					</p>
				</header>

				<div className="work-feature__summary">
					<p>
						Baymax is a headless CMS and Next.js frontend platform used
						across multiple Disney web properties. Each property can define
						its own experience while sharing a common platform core.
					</p>
					<p>
						As the primary engineer, I own the architecture across the CMS,
						frontend, customization model, caching, media, delivery,
						routing, and authentication. The technical scope is broad, but
						the product goal is simple: editors should be able to publish
						without learning the machinery underneath.
					</p>
				</div>

				<ol className="decision-list" aria-label="Key architectural decisions">
					{platformDecisions.map((decision, index) => (
						<li key={decision.title}>
							<p className="decision-list__index">
								{String(index + 1).padStart(2, '0')}
							</p>
							<div>
								<h4>{decision.title}</h4>
								<p>{decision.body}</p>
							</div>
						</li>
					))}
				</ol>
			</article>
		</Section>
	);
}
