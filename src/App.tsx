import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { CareerPath } from './sections/CareerPath';
import { Hero } from './sections/Hero';
import { HowIThink } from './sections/HowIThink';
import { HowIWork } from './sections/HowIWork';
import { Range } from './sections/Range';
import { SelectedWork } from './sections/SelectedWork';
import { Technology } from './sections/Technology';
import { Values } from './sections/Values';

export default function App() {
	return (
		<div className="page-shell">
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>

			<SiteHeader />

			<main id="main-content">
				<Hero />
				<HowIThink />
				<SelectedWork />
				<HowIWork />
				<Range />
				<CareerPath />
				<Values />
				<Technology />
			</main>

			<SiteFooter />
		</div>
	);
}
