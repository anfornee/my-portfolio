import { Section } from '../components/layout/Section';
import './ContentSections.css';

export function CareerPath() {
	return (
		<Section
			id="story"
			className="content-section story-section"
			eyebrow="The path here"
			title="Craft became signal. Signal became systems."
		>
			<ol className="story-path">
				<li>
					<article>
						<p className="story-path__stage">01 · Coffee</p>
						<h3>Craft is the accumulation of small decisions.</h3>
						<p>
							Years in coffee, leading teams, working directly with
							customers, and eventually starting a roasting company taught
							me how much an experience is shaped by details people may never
							consciously notice.
						</p>
						<p>
							The roast profile, the workflow behind the bar, consistency
							from one cup to the next, and the way someone is greeted all
							contribute to the result. It also taught me ownership and
							accountability in direct, practical terms.
						</p>
					</article>
				</li>
				<li>
					<article>
						<p className="story-path__stage">02 · Audio engineering</p>
						<h3>Trace the signal.</h3>
						<p>
							Audio taught me to think in systems. A source moves through a
							chain of components, and every stage has a responsibility. When
							something breaks, you trace the signal.
						</p>
						<p>
							When everything works, the listener does not need to think
							about routing, gain staging, processing, or the technical
							decisions behind the mix. They experience the result.
						</p>
					</article>
				</li>
				<li>
					<article>
						<p className="story-path__stage">03 · Software</p>
						<h3>Software felt familiar.</h3>
						<p>
							The care for detail from coffee, the responsibility of running
							a business, the customer awareness that comes from working
							face-to-face with people, and the systems thinking of audio all
							found a new medium in software.
						</p>
						<p className="story-path__closing">
							The architecture can be complicated. The experience
							shouldn&apos;t have to be.
						</p>
					</article>
				</li>
			</ol>
		</Section>
	);
}
