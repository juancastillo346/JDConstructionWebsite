"use client";

import { useEffect } from "react";

/**
 * Fixes mobile scroll issues:
 * 1. Ensures body overflow is reset on load (in case lightbox left it hidden)
 * 2. When loading with #hash, scroll to top first then to element - fixes iOS Safari stuck scroll
 */
export default function ScrollFix() {
  useEffect(() => {
    // Reset body overflow on mount (safeguard against lightbox leaving it hidden)
    document.body.style.overflow = "";
    document.body.style.position = "";

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash) {
      // iOS Safari can get stuck when scrolling to hash on load.
      // Scroll to top first, then after layout scroll to the element.
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "auto", block: "start" });
          }
        }, 100);
      });
    }
  }, []);

  return null;
}
