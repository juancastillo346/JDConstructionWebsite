"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Tile = {
  id: string;
  image: string;
  hasPlay: boolean;
};

type FooterFeatureProps = {
  tiles: Tile[];
};

export default function FooterFeature({ tiles }: FooterFeatureProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`w-full bg-emerald-900 py-12 sm:py-16 transition-all duration-1000 md:py-24 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="w-full flex items-center justify-center">
          <div className="text-center">
            <span className="text-xl sm:text-2xl md:text-4xl font-bold flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span className="text-red-600 underline">Free Estimates!</span>
              <span>Call</span>
              <span className="font-bold">832-933-1631</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
