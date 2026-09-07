import { Section } from '../components/layout/Section';
import { site } from '../data/site';
import './ContentSections.css';

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
								{String(index + 1).padStart(2, '0')}
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
						I designed and built a CMS assistant that understands frontend
						modules, content types, the site manifest, current page state,
						and unsaved editor changes. Authenticated content reads stay in
						the browser, where the user&apos;s session already exists. The
						server handles only work that requires cloud credentials.
					</p>
					<p>
						Another team has referenced the architecture while considering
						wider platform adoption. I have also explored a scoped agent
						workflow that can propose code changes through a reviewed merge
						request instead of committing directly.
					</p>
				</div>
			</section>
		</Section>
	);
}
