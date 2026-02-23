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
        {/* removed favicon and font preloads referencing /media */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
