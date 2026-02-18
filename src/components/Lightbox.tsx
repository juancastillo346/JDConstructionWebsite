 "use client";
import { useEffect, useState, useRef } from "react";

export default function Lightbox({ images, startIndex = 0, onClose }: { images: string[]; startIndex?: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const startTouch = useRef<number | null>(null);
  const startDist = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(images.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  useEffect(() => {
    setIndex(startIndex);
    setScale(1);
  }, [startIndex]);

  function next() {
    setIndex((i) => Math.min(images.length - 1, i + 1));
    setScale(1);
  }
  function prev() {
    setIndex((i) => Math.max(0, i - 1));
    setScale(1);
  }

  // touch handlers for swipe and pinch
  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 1) {
      startTouch.current = e.touches[0].clientX;
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      startDist.current = Math.hypot(dx, dy);
    }
  }
  function onTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && startDist.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const ratio = dist / startDist.current;
      setScale(Math.min(3, Math.max(1, ratio)));
    }
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (startDist.current) {
      startDist.current = null;
      return;
    }
    if (startTouch.current != null) {
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const diff = endX - startTouch.current;
      if (Math.abs(diff) > 50) {
        if (diff < 0) next();
        else prev();
      }
    }
    startTouch.current = null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={prev}
          aria-label="Prev"
          className="fixed left-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-50"
        >
          ‹
        </button>
        <div
          className="touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ maxWidth: "90vw", maxHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img
            src={images[index]}
            alt={`Image ${index + 1}`}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 150ms",
              width: "auto",
              height: "70vh",
              maxWidth: "90vw",
              objectFit: "contain",
              transformOrigin: "center center",
            }}
            draggable={false}
          />
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="fixed right-6 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-50"
        >
          ›
        </button>
        <button
          onClick={onClose}
          aria-label="Close"
          className="fixed right-6 top-6 text-white text-2xl md:text-3xl p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full shadow-lg z-50"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

