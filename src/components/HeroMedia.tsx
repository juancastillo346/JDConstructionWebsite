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
      className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: "url('/media/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
          {/* Mobile only: company name + logo + phone at top */}
          <div className="md:hidden absolute top-0 left-0 right-0 flex flex-col items-center gap-2 text-center text-white pointer-events-auto" style={{ paddingTop: "calc(1.5rem + env(safe-area-inset-top, 0px))" }}>
            <h1
              className="text-[clamp(1.1rem,4.5vw,2rem)] font-bold leading-tight tracking-tight text-white font-[var(--font-serif)]"
            >
              {titleTop}
            </h1>
            <img
              src="/media/logo.png"
              alt="J&D Construction logo"
              className="h-28 w-auto"
            />
            {headerPhone ? (
              <span className="text-white font-bold text-lg select-text" style={{ userSelect: "text", WebkitUserSelect: "text" }}>
                {headerPhone}
              </span>
            ) : null}
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="relative w-full px-4 md:px-6 text-center text-white pointer-events-none"
              style={{ userSelect: "text", WebkitUserSelect: "text", fontFamily: 'Circular Std, var(--font-sans)', color: 'white' }}>
              {/* headline block centered */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[90vw] px-2 pointer-events-auto">
                <h1
                  className="font-extrabold text-white tracking-normal text-center font-[var(--font-sans)]"
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
                  className="mt-4 text-sm sm:text-base md:text-lg text-white text-center font-medium px-2 font-[var(--font-sans)] max-w-[90vw] mx-auto"
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
                  <br />
                  <span className="underline">Call for specific requests!</span>
                </p>
              </div>

              {/* button positioned below headline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-full px-4 pointer-events-auto" style={{ top: "20vh" }}>
                <a
                  href="#portfolio"
                  aria-label="Click or scroll down for recent work"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 md:px-14 md:py-6 rounded-full border-2 border-white bg-white text-black text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wider shadow-lg hover:opacity-95 transition max-w-[min(280px,90vw)] sm:max-w-none sm:min-w-[220px]"
                >
                  Click or scroll down for recent work
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* optional bottom banner inside hero (not fixed) */}
      {bottomText ? (
        <div
          className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-3 sm:py-4 md:py-5 text-center z-30 pointer-events-auto"
          style={{ userSelect: "text", WebkitUserSelect: "text" }}
        >
          <div className="w-full px-3 md:px-6 text-sm sm:text-base md:text-lg font-bold text-center">
            {bottomText}
          </div>
        </div>
      ) : null}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-14 sm:pt-16 md:pt-8">
          <div className="w-full max-w-5xl text-center font-[var(--font-serif)] relative px-4 flex flex-col md:block items-center" style={{ userSelect: "text", WebkitUserSelect: "text" }}>
          {/* Desktop: title only (logo is FixedLogo in corner) */}
          <div className="hidden md:block">
          {titleMiddle == null && titleBottom == null ? (
            <h1
              className="relative z-30 text-[clamp(1rem,4vw,2.5rem)] font-bold leading-[0.95] tracking-tight text-white"
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
                <span className="block">{titleBottom}</span>
              ) : null}
            </h1>
          )}
          </div>
          {headerPhone ? (
            <span
              className="hidden md:inline-flex relative z-30 mt-2 md:mt-0 md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-4 lg:right-[-12rem] gap-2 text-[clamp(1rem,3.5vw,2.5rem)] font-bold leading-[0.95] tracking-tight text-white select-text"
              style={{
                fontFamily: "Circular Std, var(--font-sans)",
                userSelect: "text",
                WebkitUserSelect: "text",
              }}
            >
              {headerPhone}
            </span>
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
