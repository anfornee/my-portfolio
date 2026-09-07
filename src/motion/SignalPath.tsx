import { useEffect, useRef, useSyncExternalStore } from 'react';
import { useReducedMotion } from './useReducedMotion';
import './SignalPath.css';

const horizontalPath =
	'M 8 56 C 112 56, 124 24, 224 24 S 354 74, 458 54 S 614 30, 756 54 S 908 74, 1032 46';

const verticalPath =
	'M 82 12 C 82 42, 58 58, 72 86 S 118 126, 104 166 S 66 218, 105 254 S 128 316, 94 346 S 58 390, 76 414 S 104 448, 90 468';

type Point = {
	x: number;
	y: number;
};

type Orientation = 'horizontal' | 'vertical';

const stages = [
	{
		id: 'craft',
		label: 'Craft',
		horizontal: { x: 224, y: 24 },
		vertical: { x: 72, y: 86 },
	},
	{
		id: 'systems',
		label: 'Systems',
		horizontal: { x: 458, y: 54 },
		vertical: { x: 105, y: 254 },
	},
	{
		id: 'software',
		label: 'Software',
		horizontal: { x: 756, y: 54 },
		vertical: { x: 76, y: 414 },
	},
];

const layouts = {
	horizontal: {
		path: horizontalPath,
		width: 1040,
		height: 116,
		points: stages.map((stage) => stage.horizontal),
	},
	vertical: {
		path: verticalPath,
		width: 280,
		height: 480,
		points: stages.map((stage) => stage.vertical),
	},
} satisfies Record<
	Orientation,
	{ path: string; width: number; height: number; points: Point[] }
>;

const BLOOM_LEAD_WINDOW = 0.03;
const BLOOM_FADE_WINDOW = 0.05;
const PATH_SAMPLES = 600;
const MOBILE_QUERY = '(max-width: 36rem)';

function smoothstep(value: number) {
	return value * value * (3 - 2 * value);
}

function findProgressAtPoint(
	track: SVGPathElement,
	length: number,
	target: Point,
) {
	let nearestProgress = 0;
	let nearestDistance = Number.POSITIVE_INFINITY;

	for (let sample = 0; sample <= PATH_SAMPLES; sample += 1) {
		const progress = sample / PATH_SAMPLES;
		const point = track.getPointAtLength(progress * length);
		const distance = Math.hypot(point.x - target.x, point.y - target.y);

		if (distance < nearestDistance) {
			nearestDistance = distance;
			nearestProgress = progress;
		}
	}

	return nearestProgress;
}

function subscribeToMobileQuery(onChange: () => void) {
	const mediaQuery = window.matchMedia(MOBILE_QUERY);
	mediaQuery.addEventListener('change', onChange);

	return () => mediaQuery.removeEventListener('change', onChange);
}

function getMobileSnapshot() {
	return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerMobileSnapshot() {
	return false;
}

export function SignalPath() {
	const isMobile = useSyncExternalStore(
		subscribeToMobileQuery,
		getMobileSnapshot,
		getServerMobileSnapshot,
	);
	const orientation: Orientation = isMobile ? 'vertical' : 'horizontal';
	const layout = layouts[orientation];
	const stagePoints = layout.points;
	const svgRef = useRef<SVGSVGElement>(null);
	const reducedMotion = useReducedMotion();

	useEffect(() => {
		const svg = svgRef.current;

		if (!svg || reducedMotion) {
			return;
		}

		const track = svg.querySelector<SVGPathElement>('.signal-path__base');
		const traveler = svg.querySelector<SVGGElement>(
			'.signal-path__traveler',
		);
		const blooms = svg.querySelectorAll<SVGCircleElement>(
			'.signal-path__bloom',
		);
		const nodeFills = svg.querySelectorAll<SVGCircleElement>(
			'.signal-path__node-fill',
		);

		if (!track || !traveler) {
			return;
		}

		const duration =
			parseFloat(
				getComputedStyle(svg).getPropertyValue('--duration-signal'),
			) * 1000;
		const length = track.getTotalLength();
		const nodeProgress = stagePoints.map((node) =>
			findProgressAtPoint(track, length, node),
		);
		let elapsed = 0;
		let previous = 0;
		let frame = 0;

		const draw = (time: number) => {
			if (previous) {
				elapsed += Math.min(time - previous, 64);
			}

			previous = time;
			const progress = (elapsed % duration) / duration;
			const point = track.getPointAtLength(progress * length);

			traveler.setAttribute('transform', `translate(${point.x} ${point.y})`);
			traveler.style.opacity = String(
				Math.min(1, progress / 0.04, (1 - progress) / 0.04),
			);

			blooms.forEach((bloom, index) => {
				const offset = progress - nodeProgress[index];
				const distance = Math.abs(offset);
				const bloomWindow =
					offset < 0 ? BLOOM_LEAD_WINDOW : BLOOM_FADE_WINDOW;

				if (distance >= bloomWindow) {
					bloom.style.opacity = '0';
					nodeFills[index].style.opacity = '0';
					return;
				}

				const proximity = smoothstep(1 - distance / bloomWindow);
				const departure = Math.max(0, offset / BLOOM_FADE_WINDOW);

				bloom.setAttribute(
					'r',
					String(18 + proximity * 12 + departure * 15),
				);
				bloom.style.opacity = String(proximity * 0.4);
				nodeFills[index].style.opacity = String(proximity * 0.82);
			});

			frame = requestAnimationFrame(draw);
		};

		const handleVisibility = () => {
			cancelAnimationFrame(frame);
			previous = 0;

			if (!document.hidden) {
				frame = requestAnimationFrame(draw);
			}
		};

		handleVisibility();
		document.addEventListener('visibilitychange', handleVisibility);

		return () => {
			cancelAnimationFrame(frame);
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	}, [reducedMotion, stagePoints]);
	return (
		<div
			className={`signal-path signal-path--${orientation}`}
			aria-hidden="true"
		>
			<svg
				ref={svgRef}
				viewBox={`0 0 ${layout.width} ${layout.height}`}
				preserveAspectRatio="none"
				focusable="false"
			>
				<defs>
					<linearGradient
						id="signal-gradient"
						x1="0"
						y1="0"
						x2={orientation === 'horizontal' ? '1' : '0'}
						y2={orientation === 'horizontal' ? '0' : '1'}
					>
						<stop offset="0%" stopColor="var(--color-text-secondary)" stopOpacity="0.08" />
						<stop offset="46%" stopColor="var(--color-accent)" stopOpacity="0.66" />
						<stop offset="74%" stopColor="var(--color-atmosphere-blue)" stopOpacity="0.34" />
						<stop offset="100%" stopColor="var(--color-text-secondary)" stopOpacity="0.08" />
					</linearGradient>

					<radialGradient id="signal-bloom">
						<stop
							offset="0%"
							stopColor="var(--color-accent)"
							stopOpacity="0.8"
						/>
						<stop
							offset="38%"
							stopColor="var(--color-accent)"
							stopOpacity="0.34"
						/>
						<stop
							offset="100%"
							stopColor="var(--color-accent)"
							stopOpacity="0"
						/>
					</radialGradient>

					<radialGradient id="node-bloom">
						<stop
							offset="0%"
							stopColor="var(--color-particle-warm)"
							stopOpacity="0.72"
						/>
						<stop
							offset="35%"
							stopColor="var(--color-particle-warm)"
							stopOpacity="0.26"
						/>
						<stop
							offset="100%"
							stopColor="var(--color-particle-warm)"
							stopOpacity="0"
						/>
					</radialGradient>

					<filter
						id="signal-diffusion"
						x="-50%"
						y="-50%"
						width="200%"
						height="200%"
					>
						<feGaussianBlur stdDeviation="2.5" />
					</filter>
				</defs>

				<path className="signal-path__base" d={layout.path} />
				<path className="signal-path__energy" d={layout.path} />

				{stages.map((stage, index) => {
					const node = stagePoints[index];

					return (
						<g key={stage.id}>
							<circle
								className="signal-path__bloom"
								cx={node.x}
								cy={node.y}
								r="18"
								filter="url(#signal-diffusion)"
							/>
							<circle
								className="signal-path__node"
								cx={node.x}
								cy={node.y}
								r="3.5"
							/>
							<circle
								className="signal-path__node-fill"
								cx={node.x}
								cy={node.y}
								r="2.9"
							/>
						</g>
					);
				})}

				<g className="signal-path__traveler">
					<circle
						className="signal-path__diffuse-light"
						r="15"
						filter="url(#signal-diffusion)"
					/>
					<circle className="signal-path__pulse" r="2" />
				</g>
			</svg>

			<div className="signal-path__labels">
				{stages.map((stage, index) => {
					const node = stagePoints[index];
					const x =
						orientation === 'horizontal' ? node.x : node.x + 34;
					const y = orientation === 'horizontal' ? 106 : node.y;

					return (
						<span
							key={stage.id}
							style={{
								left: `${(x / layout.width) * 100}%`,
								top: `${(y / layout.height) * 100}%`,
							}}
						>
							{stage.label}
						</span>
					);
				})}
			</div>
		</div>
	);
}
