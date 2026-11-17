
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Grow Up | Chamod Senevirathne",
    template: "%s | Grow Up",
  },
  description:
    "Explore thoughtful ideas on personal growth, spirituality, leadership, philosophy, relationships and self-development by Chamod Senevirathne.",
  keywords: [
    "Chamod Senevirathne",
    "Grow Up",
    "Personal Growth",
    "Spirituality",
    "Leadership",
    "Philosophy",
    "Self Development",
    "Relationships",
    "Mindset",
    "Life Reflections",
  ],
  authors: [{ name: "Chamod Senevirathne" }],
  creator: "Chamod Senevirathne",
  openGraph: {
    title: "Grow Up | Chamod Senevirathne",
    description:
      "Ideas for a Better Mind, Life and World. Explore personal growth, philosophy, leadership and meaningful reflections.",
    type: "website",
    siteName: "Grow Up",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Up | Chamod Senevirathne",
    description:
      "Thoughtful perspectives on personal growth, philosophy, leadership and life.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
