import { Container } from './Container';
import { site } from '../../data/site';
import './SiteFooter.css';

export function SiteFooter() {
	return (
		<footer id="contact" className="site-footer">
			<Container className="site-footer__inner">
				<div>
					<p className="eyebrow">Let&apos;s talk</p>
					<p className="site-footer__statement">
						Thoughtful software. Interesting problems. Good people.
					</p>
				</div>

				<p className="site-footer__meta">
					{site.name} · {site.location}
				</p>
			</Container>
		</footer>
	);
}
