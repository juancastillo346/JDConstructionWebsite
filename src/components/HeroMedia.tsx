// no images used for hero background
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
  const sub = subtitle ?? "";
  const emphasis = subtitleEmphasis ?? "";
  const emphasisIndex = emphasis ? sub.indexOf(emphasis) : -1;
  const beforeEmphasis =
    emphasisIndex >= 0 ? sub.slice(0, emphasisIndex) : sub;
  const afterEmphasis =
    emphasisIndex >= 0 ? sub.slice(emphasisIndex + emphasis.length) : "";

  return (
    <section
      className="relative min-h-screen w-full md:min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <FixedLogo />
      {/* background moved to the section element so it doesn't visually overflow later sections */}
      {/* centered hero text (optional) - vertically centered, text left-aligned */}
      {centerText ? (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
            <div
              className="w-full px-4 md:px-6 text-center transform translate-y-6 md:translate-y-20"
              style={{ userSelect: "text", WebkitUserSelect: "text" }}>
            <h1
            className="font-extrabold text-black tracking-tight whitespace-nowrap"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(1.6rem, 5.2vw, 4.2rem)",
                lineHeight: 0.95,
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
                    <span className="relative inline-block" style={{ userSelect: "text", WebkitUserSelect: "text" }}>
                      {match}
                      <span
                        className="absolute left-0"
                        style={{
                          bottom: "-0.6rem",
                          height: "6px",
                          width: "100%",
                          backgroundColor: "var(--foreground)",
                          display: "block",
                          pointerEvents: "none",
                        }}
                      />
                    </span>
                    {end}
                  </>
                );
              })()}
            </h1>
            {/* removed the full-width yellow bar under the heading to avoid underlining whole text */}
            <p
              className="mt-4 text-lg text-black/90 text-center whitespace-nowrap overflow-x-auto font-semibold px-2"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                userSelect: "text",
                WebkitUserSelect: "text",
              }}
            >
              Wood fences · Chain link fences · Ranch style fences · Wrought iron
              fences · Wrought iron gates · Wood Staining · Regular and Stamped
              concrete
            </p>
            <div className="mt-16 md:mt-30">
              <a
                href="#portfolio"
                aria-label="View Our Portfolio"
                className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 rounded-full border-2 border-white bg-white text-black text-sm md:text-base font-semibold uppercase tracking-wide hover:opacity-90 transition"
              >
                View Our Portfolio!
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
              className="relative z-30 text-[clamp(1rem,4vw,2.5rem)] font-bold leading-[0.95] tracking-tight text-black md:whitespace-nowrap"
              style={{ userSelect: "text", WebkitUserSelect: "text", color: "var(--foreground)" }}
            >
              {titleTop}
            </h1>
          ) : (
            <h1
              className="relative z-30 text-[clamp(1.1rem,4.2vw,2.6rem)] font-bold leading-[0.95] tracking-tight text-black"
              style={{ userSelect: "text", WebkitUserSelect: "text", color: "var(--foreground)" }}
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2"
              style={{
                right: "-10rem",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 800,
                color: "var(--foreground)",
                userSelect: "text",
                WebkitUserSelect: "text",
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              }}
            >
              <div style={{ color: "var(--foreground)", display: "inline-flex", alignItems: "center", gap: 10 }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  style={{ display: "block", flexShrink: 0, color: "var(--foreground)" }}
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.73 2.72a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.86.36 1.78.61 2.72.73A2 2 0 0 1 22 16.92z"
                    fill="currentColor"
                  />
                </svg>
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
