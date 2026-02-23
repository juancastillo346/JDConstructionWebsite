"use client";

export default function FixedLogo() {
  return (
    <div className="hidden md:block absolute top-3 left-4 sm:top-4 sm:left-8 md:left-14 z-50 pointer-events-auto safe-area-logo">
      <img
        src="/media/logo.png"
        alt="Site logo"
        className="h-20 w-auto sm:h-24 md:h-32 block"
      />
    </div>
  );
}

