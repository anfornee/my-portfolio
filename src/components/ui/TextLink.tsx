import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import './TextLink.css';

type TextLinkProps = PropsWithChildren<
	AnchorHTMLAttributes<HTMLAnchorElement>
>;

export function TextLink({
	children,
	className,
	...props
}: TextLinkProps) {
	const classes = ['text-link', className].filter(Boolean).join(' ');

	return (
		<a className={classes} {...props}>
			<span>{children}</span>
			<span className="text-link__arrow" aria-hidden="true">
				→
			</span>
		</a>
	);
}
