"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 0,
                infinite: false,
            }}
        >
            {children}
        </ReactLenis>
    );
}

