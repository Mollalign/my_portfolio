import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
