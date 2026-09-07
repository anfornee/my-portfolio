import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { Hero } from './sections/Hero';
import { StoryPreview } from './sections/StoryPreview';
import { WorkPreview } from './sections/WorkPreview';

export default function App() {
	return (
		<div className="page-shell">
			<a className="skip-link" href="#main-content">
				Skip to content
			</a>

			<SiteHeader />

			<main id="main-content">
				<Hero />
				<WorkPreview />
				<StoryPreview />
			</main>

			<SiteFooter />
		</div>
	);
}
