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

const SITE_URL = "https://kadin-self.vercel.app";
const TITLE = "Osmanlı Basınında Kadına Yönelik Şiddetin Analizi (1869–1923) | TÜBİTAK 3005";
const DESCRIPTION =
  "Kilis 7 Aralık Üniversitesi yürütücülüğünde, TÜBİTAK 3005 programı kapsamında desteklenen; Osmanlı dönemi süreli yayınlarında kadına yönelik şiddet temsillerini dört katmanlı bir tipolojiyle inceleyen disiplinlerarası araştırma projesi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Osmanlı Basınında Kadına Yönelik Şiddetin Analizi",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchProject",
  name: "Osmanlı Basınında Kadına Yönelik Şiddetin Analizi (1869–1923)",
  description: DESCRIPTION,
  url: SITE_URL,
  inLanguage: "tr",
  funder: {
    "@type": "Organization",
    name: "TÜBİTAK",
  },
  sponsor: {
    "@type": "CollegeOrUniversity",
    name: "Kilis 7 Aralık Üniversitesi",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-parchment text-ink antialiased">{children}</body>
    </html>
  );
}
