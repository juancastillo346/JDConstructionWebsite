// no images used for hero background
"use client";
import Link from "next/link";
import FixedLogo from "@/components/FixedLogo";

type HeroMediaProps = {
  titleTop: string;
  titleMiddle?: string;
  titleBottom?: string;
  subtitle?: string;
  centerText?: string;
  bottomText?: string;
  bottomMission?: string;
  headerPhone?: string;
  subtitleEmphasis?: string;
  videoSrc?: string; // Kept for backward compatibility but not used
};

export default function HeroMedia({
  titleTop,
  titleMiddle,
  titleBottom,
  subtitle,
  subtitleEmphasis,
  centerText,
  bottomText,
  bottomMission,
  headerPhone,
}: HeroMediaProps) {
  // static overlay (no scroll)
  const overlay = 1;
  const sub = subtitle ?? "";
  const emphasis = subtitleEmphasis ?? "";
  const emphasisIndex = emphasis ? sub.indexOf(emphasis) : -1;
  const beforeEmphasis =
    emphasisIndex >= 0 ? sub.slice(0, emphasisIndex) : sub;
  const afterEmphasis =
    emphasisIndex >= 0 ? sub.slice(emphasisIndex + emphasis.length) : "";

  return (
    <section
      className="relative min-h-screen w-full md:min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: "url('/media/background.jpeg')",
        // zoomed-in background
        backgroundSize: "120%",
        // nudge the image down so lower area is more visible
        backgroundPosition: "center 70%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* darkening overlay to make background image appear darker */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/50 z-10 pointer-events-none"
      />
      <FixedLogo />
      {/* background moved to the section element so it doesn't visually overflow later sections */}
      {/* centered hero text (optional) - vertically centered, text left-aligned */}
      {centerText ? (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <div
              className="relative w-full px-4 md:px-6 text-center text-white"
              style={{ userSelect: "text", WebkitUserSelect: "text", fontFamily: 'Circular Std, var(--font-sans)', color: 'white' }}>
              {/* headline block centered independently */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1
                  className="font-extrabold text-white tracking-normal whitespace-nowrap font-[var(--font-sans)]"
                  style={{
                    fontSize: "clamp(1.6rem, 5.2vw, 4.2rem)",
                    lineHeight: 1.06,
                    userSelect: "text",
                    WebkitUserSelect: "text",
                  }}
                >
                  {(() => {
                    const highlightRegex = /(over\s+\d+\s*years?)/i;
                    const m = centerText.match(highlightRegex);
                    if (!m) return centerText;
                    const start = centerText.slice(0, m.index);
                    const match = m[0];
                    const end = centerText.slice((m.index ?? 0) + match.length);
                    return (
                      <>
                        {start}
                        <span
                          className="relative inline-block font-extrabold text-white"
                          style={{ userSelect: "text", WebkitUserSelect: "text" }}
                        >
                          {match}
                        </span>
                        {end}
                      </>
                    );
                  })()}
                </h1>
                <p
                  className="mt-4 text-lg text-white text-center whitespace-nowrap overflow-x-auto font-medium px-2 font-[var(--font-sans)]"
                  style={{
                    userSelect: "text",
                    WebkitUserSelect: "text",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Wood fences · Chain link fences · Ranch style fences · Wrought iron
                  fences · Wrought iron gates · Wood Staining · Regular and Stamped
                  concrete
                </p>
              </div>

              {/* button positioned independently below the headline center.
                  Use a viewport-based top value so it can be placed lower than the middle. */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{ top: "24vh" }}
              >
                <a
                  href="#portfolio"
                  aria-label="See Recent Work"
                  className="inline-flex items-center justify-center px-10 py-4 md:px-14 md:py-6 rounded-full border-2 border-white bg-white text-black text-lg md:text-xl font-bold uppercase tracking-wider shadow-lg hover:opacity-95 transition"
                  style={{ minWidth: 220 }}
                >
                  See Recent Work!
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* optional bottom banner inside hero (not fixed) */}
      {bottomText ? (
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-4 md:py-5 text-center z-30 pointer-events-auto"
          style={{ userSelect: "text", WebkitUserSelect: "text" }}
        >
          <div className="w-full px-3 md:px-6 text-base md:text-lg font-bold text-center whitespace-nowrap">
            {bottomText}
          </div>
        </div>
      ) : null}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-6 md:pt-8">
          <div className="w-full max-w-5xl text-center font-[var(--font-serif)] relative" style={{ userSelect: "text", WebkitUserSelect: "text" }}>
          {/* If only titleTop is provided, render it as a single-line centered headline */}
          {titleMiddle == null && titleBottom == null ? (
            <h1
              className="relative z-30 text-[clamp(1rem,4vw,2.5rem)] font-bold leading-[0.95] tracking-tight text-white md:whitespace-nowrap"
              style={{ userSelect: "text", WebkitUserSelect: "text", color: "white" }}
            >
              {titleTop}
            </h1>
          ) : (
            <h1
              className="relative z-30 text-[clamp(1.1rem,4.2vw,2.6rem)] font-bold leading-[0.95] tracking-tight text-white"
              style={{ userSelect: "text", WebkitUserSelect: "text", color: "white" }}
            >
              <span className="block">{titleTop}</span>
              {titleMiddle ? <span className="block">{titleMiddle}</span> : null}
              {titleBottom ? (
                <span className="block whitespace-nowrap">{titleBottom}</span>
              ) : null}
            </h1>
          )}
          {headerPhone ? (
            <div
              className="absolute top-1/2 transform -translate-y-1/2 z-30 right-4 md:right-[-12rem]"
              style={{
                fontFamily: "Circular Std, var(--font-sans)",
                color: "white",
                userSelect: "text",
                WebkitUserSelect: "text",
              }}
            >
            <div
              className="inline-flex items-center gap-3 text-[clamp(1rem,4vw,2.5rem)] font-bold leading-[0.95] tracking-tight text-white"
              style={{ color: "white" }}
            >
                <span>{headerPhone}</span>
              </div>
            </div>
          ) : null}
        </div>
        {subtitle ? (
          <p
            className="absolute bottom-16 left-4 max-w-[calc(100%-2rem)] text-[10px] font-medium leading-relaxed tracking-wide text-black md:bottom-33 md:left-12 md:max-w-none md:text-sm md:whitespace-nowrap"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {beforeEmphasis}
            {emphasis && emphasisIndex >= 0 ? (
              <span className="font-bold">{emphasis}</span>
            ) : null}
            {afterEmphasis}
          </p>
        ) : null}
      </div>
    </section>
  );
}
