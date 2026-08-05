import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Osmanlı Basınında Kadına Yönelik Şiddetin Analizi (1869–1923) | TÜBİTAK 3005",
  description:
    "Kilis 7 Aralık Üniversitesi yürütücülüğünde, TÜBİTAK 3005 programı kapsamında desteklenen; Osmanlı dönemi süreli yayınlarında kadına yönelik şiddet temsillerini dört katmanlı bir tipolojiyle inceleyen disiplinlerarası araştırma projesi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full bg-parchment text-ink antialiased">{children}</body>
    </html>
  );
}
