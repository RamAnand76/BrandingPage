'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ImageItem {
	src: string;
	alt?: string;
}

interface ZoomLayerProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageItem[];
	/** 0 to 1 scroll progress that drives the zoom */
	progress: MotionValue<number>;
	/** Progress value at which the zoom finishes. Defaults to 1. */
	zoomEnd?: number;
}

/** The zoom tiles on their own, driven by any progress value, so a parent can pin and sequence them. */
export function ZoomLayer({ images, progress, zoomEnd = 1 }: ZoomLayerProps) {
	const scale4 = useTransform(progress, [0, zoomEnd], [1, 4]);
	const scale5 = useTransform(progress, [0, zoomEnd], [1, 5]);
	const scale6 = useTransform(progress, [0, zoomEnd], [1, 6]);
	const scale8 = useTransform(progress, [0, zoomEnd], [1, 8]);
	const scale9 = useTransform(progress, [0, zoomEnd], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<>
			{images.map(({ src, alt }, index) => {
				const scale = scales[index % scales.length];

				return (
					<motion.div
						key={index}
						style={{ scale }}
						className={`absolute top-0 flex h-full w-full items-center justify-center will-change-transform ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
					>
						<div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-2xl border border-white/15 bg-[#050505] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
							<Image
								src={src || '/placeholder.svg'}
								alt={alt || `Parallax image ${index + 1}`}
								fill
								sizes="35vw"
								className="object-cover"
							/>
						</div>
					</motion.div>
				);
			})}
		</>
	);
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageItem[];
}

/** Standalone version: its own 300vh scroll area with a pinned stage. */
export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				<ZoomLayer images={images} progress={scrollYProgress} />
			</div>
		</div>
	);
}
