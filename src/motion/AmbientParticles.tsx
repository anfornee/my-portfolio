import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';
import './AmbientParticles.css';

type Particle = {
	x: number;
	y: number;
	radius: number;
	vx: number;
	vy: number;
	alpha: number;
	twinkle: number;
	warm: boolean;
};

const PARTICLE_DENSITY = 0.000043;
const MIN_PARTICLES = 22;
const MAX_PARTICLES = 64;
const WARM_PARTICLE_SHARE = 0.08;
const MAX_DPR = 1.75;

function createParticle(width: number, height: number): Particle {
	return {
		warm: Math.random() < WARM_PARTICLE_SHARE,
		x: Math.random() * width,
		y: Math.random() * height,
		radius: 0.45 + Math.random() * 1.1,
		vx: (Math.random() - 0.5) * 0.055,
		vy: -0.012 - Math.random() * 0.04,
		alpha: 0.08 + Math.random() * 0.22,
		twinkle: Math.random() * Math.PI * 2,
	};
}

export function AmbientParticles() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const reducedMotion = useReducedMotion();

	useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) {
			return;
		}

		const context = canvas.getContext('2d', {
			alpha: true,
			desynchronized: true,
		});

		if (!context) {
			return;
		}

		const styles = getComputedStyle(document.documentElement);
		const particleColor = styles.getPropertyValue('--color-text-primary').trim();
		const warmColor = styles.getPropertyValue('--color-particle-warm').trim();

		let width = 0;
		let height = 0;
		let frameId = 0;
		let lastTime = performance.now();
		let particles: Particle[] = [];

		const rebuildParticles = () => {
			const targetCount = Math.round(
				Math.min(
					MAX_PARTICLES,
					Math.max(MIN_PARTICLES, width * height * PARTICLE_DENSITY),
				),
			);

			particles = Array.from({ length: targetCount }, () =>
				createParticle(width, height),
			);
		};

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

			width = rect.width;
			height = rect.height;

			canvas.width = Math.max(1, Math.round(width * dpr));
			canvas.height = Math.max(1, Math.round(height * dpr));

			context.setTransform(dpr, 0, 0, dpr, 0, 0);
			rebuildParticles();
		};

		const draw = (time: number) => {
			const delta = Math.min(32, time - lastTime);
			lastTime = time;

			context.clearRect(0, 0, width, height);

			for (const particle of particles) {
				particle.twinkle += delta * 0.00045;

				if (!reducedMotion) {
					particle.x += particle.vx * delta;
					particle.y += particle.vy * delta;
				}

				if (particle.x < -4) {
					particle.x = width + 4;
				} else if (particle.x > width + 4) {
					particle.x = -4;
				}

				if (particle.y < -4) {
					particle.y = height + 4;
					particle.x = Math.random() * width;
				}

				const pulse =
					0.72 + Math.sin(particle.twinkle) * (reducedMotion ? 0 : 0.28);

				context.beginPath();
				context.arc(
					particle.x,
					particle.y,
					particle.radius * (particle.warm ? 0.75 : 1),
					0,
					Math.PI * 2,
				);
				context.fillStyle = particle.warm ? warmColor : particleColor;
				context.globalAlpha = particle.alpha * pulse;
				context.fill();
			}

			if (!reducedMotion && !document.hidden) {
				frameId = requestAnimationFrame(draw);
			}
		};

		const handleVisibility = () => {
			cancelAnimationFrame(frameId);

			if (!document.hidden && !reducedMotion) {
				lastTime = performance.now();
				frameId = requestAnimationFrame(draw);
			}
		};

		const resizeObserver = new ResizeObserver(() => {
			resize();
			if (reducedMotion) draw(performance.now());
		});
		resizeObserver.observe(canvas);
		document.addEventListener('visibilitychange', handleVisibility);

		resize();

		if (reducedMotion) {
			draw(performance.now());
		} else if (!document.hidden) {
			frameId = requestAnimationFrame(draw);
		}

		return () => {
			cancelAnimationFrame(frameId);
			resizeObserver.disconnect();
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	}, [reducedMotion]);

	return (
		<canvas
			ref={canvasRef}
			className="ambient-particles"
			aria-hidden="true"
		/>
	);
}
