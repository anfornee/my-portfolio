import type { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
	className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
	const classes = ['container', className].filter(Boolean).join(' ');

	return <div className={classes}>{children}</div>;
}
