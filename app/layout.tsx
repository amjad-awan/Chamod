import type { Metadata } from "next";
import { Noto_Naskh_Arabic, Inter } from "next/font/google";
import "./globals.css";

const naskh = Noto_Naskh_Arabic({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-naskh" });
const sans = Inter({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "بیاض — مبشر علی زیدی کا حاصل مطالعہ",
  description: "مبشر علی زیدی کا حاصل مطالعہ: کتابوں، تاریخ، سماج اور ٹیکنالوجی پر تحریریں۔",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ur" dir="rtl" className={`${naskh.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
