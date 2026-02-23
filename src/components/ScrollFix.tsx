"use client";

import { useEffect } from "react";

/**
 * Fixes mobile scroll issues:
 * 1. Ensures body overflow is reset on load (in case lightbox left it hidden)
 * 2. Always start at top on load - prevents landing on #portfolio and getting stuck when scrolling up
 */
export default function ScrollFix() {
  useEffect(() => {
    // Reset body overflow on mount (safeguard against lightbox leaving it hidden)
    document.body.style.overflow = "";
    document.body.style.position = "";

    // Always scroll to top on load - prevents landing on portfolio and getting stuck on mobile
    window.scrollTo(0, 0);
    // Also run after a brief delay in case layout shifts
    const id = setTimeout(() => window.scrollTo(0, 0), 50);
    return () => clearTimeout(id);
  }, []);

  return null;
}
