import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "J&D's Construction",
  description: "Fashion editorial inspired landing page.",
  icons: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Prevent scroll restoration and hash scroll from causing mobile to land in wrong place */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if('scrollRestoration' in history)history.scrollRestoration='manual';})();`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Scroll to top on load - overrides browser hash scroll, fixes mobile landing on #portfolio */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=function(){window.scrollTo(0,0);};s();document.addEventListener('DOMContentLoaded',s);window.addEventListener('load',s);})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
