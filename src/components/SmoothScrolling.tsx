"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true, touchMultiplier: 0, infinite: false }}>
            {children}
        </ReactLenis>
    );
}
