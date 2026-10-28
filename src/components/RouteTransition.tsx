"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import PageTransition from "@/components/ui/page-transition";

// double-stairs enter: 0.8s + (5 columns - 1) x 0.05s stagger, so the screen is fully covered at 1s.
const COVER_MS = 1000;

/** Plays the stairs transition when a click on a link would move to another page of this site. */
export default function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [covering, setCovering] = useState(false);
  const pending = useRef(false);

  useEffect(() => {
    // Capture phase, so we can cancel the click before Next's <Link> navigates on its own.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (including hash jumps and query changes) keeps the normal behaviour.
      if (url.pathname === window.location.pathname) return;

      e.preventDefault();
      if (pending.current) return;
      pending.current = true;
      setCovering(true);
      window.setTimeout(() => router.push(url.pathname + url.search + url.hash), COVER_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // The new route has rendered behind the cover: reveal it.
  useEffect(() => {
    if (!pending.current) return;
    const t = window.setTimeout(() => {
      pending.current = false;
      setCovering(false);
    }, 150);
    return () => window.clearTimeout(t);
  }, [pathname]);

  // Failsafe so a failed navigation can never leave the site covered.
  useEffect(() => {
    if (!covering) return;
    const t = window.setTimeout(() => {
      pending.current = false;
      setCovering(false);
    }, 8000);
    return () => window.clearTimeout(t);
  }, [covering]);

  return <PageTransition type="double-stairs" isVisible={covering} />;
}
