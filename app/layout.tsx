import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mollalign | Full-Stack Developer",
  description:
    "Full-stack developer crafting exceptional digital experiences. Specializing in React, Next.js, Flutter, and modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Flutter Developer",
    "Web Developer",
    "Portfolio",
    "Ethiopia",
  ],
  authors: [{ name: "Mollalign" }],
  creator: "Mollalign",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mollalign.dev",
    title: "Mollalign | Full-Stack Developer",
    description:
      "Full-stack developer crafting exceptional digital experiences.",
    siteName: "Mollalign Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mollalign | Full-Stack Developer",
    description:
      "Full-stack developer crafting exceptional digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script src="https://agents.dante-ai.com/embed.js" data-agent-id="e2df718a-2628-49e1-912b-bb8d3af51f06" data-widget-key="wk_1P1UU8i4HOWQTCJjxuBbob-i9u-nc55D" crossorigin="anonymous" async></script>
        {children}
      </body>
    </html>
  );
}
