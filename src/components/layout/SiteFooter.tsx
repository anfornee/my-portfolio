import { Container } from './Container';
import { TextLink } from '../ui/TextLink';
import { site } from '../../data/site';
import './SiteFooter.css';

export function SiteFooter() {
	return (
		<footer id="connect" className="site-footer">
			<Container className="site-footer__inner">
				<div className="site-footer__content">
					<p className="eyebrow">Connect</p>
					<h2 className="site-footer__title">Let&apos;s talk.</h2>
					<p className="site-footer__statement">
						I&apos;m interested in thoughtful software, useful systems,
						and teams that care about the people using what they build.
					</p>

					<nav className="site-footer__links" aria-label="Connect links">
						{site.connect.map((item) => (
							<TextLink
								key={item.href}
								href={item.href}
								target={item.opensInNewTab ? '_blank' : undefined}
								rel={item.opensInNewTab ? 'noopener noreferrer' : undefined}
								aria-label={
									item.opensInNewTab
										? `${item.label} (opens in a new tab)`
										: item.label
								}
							>
								{item.label}
							</TextLink>
						))}
					</nav>
				</div>

				<p className="site-footer__meta">
					{site.name} · {site.location}
				</p>
			</Container>
		</footer>
	);
}
