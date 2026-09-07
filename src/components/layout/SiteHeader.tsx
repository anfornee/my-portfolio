import { Container } from './Container';
import { site } from '../../data/site';
import './SiteHeader.css';

export function SiteHeader() {
	return (
		<header className="site-header">
			<Container className="site-header__inner">
				<a className="site-header__brand" href="#top">
					{site.name}
				</a>

				<nav aria-label="Primary navigation">
					<ul className="site-header__nav">
						{site.navigation.map((item) => (
							<li key={item.href}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
}
