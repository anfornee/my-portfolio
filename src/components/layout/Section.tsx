import type { PropsWithChildren } from 'react';
import { Container } from './Container';
import './Section.css';

type SectionProps = PropsWithChildren<{
	id?: string;
	eyebrow?: string;
	title?: string;
	className?: string;
}>;

export function Section({
	id,
	eyebrow,
	title,
	className,
	children,
}: SectionProps) {
	const classes = ['section', className].filter(Boolean).join(' ');

	return (
		<section id={id} className={classes}>
			<Container>
				{eyebrow || title ? (
					<header className="section__header">
						{eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
						{title ? <h2 className="section__title">{title}</h2> : null}
					</header>
				) : null}

				{children}
			</Container>
		</section>
	);
}
