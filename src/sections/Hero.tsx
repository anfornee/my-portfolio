import { Container } from '../components/layout/Container';
import { TextLink } from '../components/ui/TextLink';
import { site } from '../data/site';
import { AmbientParticles } from '../motion/AmbientParticles';
import { SignalPath } from '../motion/SignalPath';
import './Hero.css';
import '../motion/HeroGlow.css';

export function Hero() {
	return (
		<section id="top" className="hero" aria-labelledby="hero-title">
			<AmbientParticles />

			<Container className="hero__inner">
				<div className="hero__content">
					<p className="eyebrow">{site.hero.eyebrow}</p>

					<h1 id="hero-title" className="hero__title">
						{site.hero.title}
					</h1>

					<p className="hero__description">
						{site.hero.description}
					</p>

					<div className="hero__actions" aria-label="Portfolio shortcuts">
						<TextLink href="#work">View my work</TextLink>
						<TextLink href="#story">My story</TextLink>
					</div>
				</div>

				<SignalPath />
			</Container>
		</section>
	);
}
