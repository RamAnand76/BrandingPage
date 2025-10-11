
"use client";

import dynamic from 'next/dynamic';

const CarouselComponent = dynamic(() => import('./Carousel'), { ssr: false });

export default CarouselComponent;

    