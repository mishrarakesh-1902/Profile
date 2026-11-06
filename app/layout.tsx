import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { MouseFollower } from "@/components/animations/MouseFollower";
import { PageReveal } from "@/components/animations/PageTransition";
import { AssetPreloader } from "@/components/animations/AssetPreloader";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-2-l4qp.onrender.com"),
  title: "Rakesh Kumar — AI-Native Full-Stack Developer | Software Engineer",
  description:
    "Portfolio of Rakesh Kumar — AI-Native Full-Stack Developer & Software Engineer building intelligent, production-ready applications with real-time systems and practical AI.",
  keywords: [
    "Rakesh Kumar",
    "AI-Native Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "LLMs",
    "RAG",
    "WebRTC",
  ],
  openGraph: {
    title: "Rakesh Kumar — AI-Native Full-Stack Developer",
    description: "Building intelligent, production-ready applications by combining full-stack engineering, real-time systems, and practical AI.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="bg-[#080808] text-[#f0ece4] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <div className="noise-overlay" aria-hidden="true" />
        <PageReveal />
        <AssetPreloader />
        <SmoothScrollProvider>
          <MouseFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
