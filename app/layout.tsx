import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientProviders from "@/components/shared/ClientProviders";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.antonioandreozzidigital.com"),
  title: {
    default: "Antonio Andreozzi Digital | Agenzia Marketing Caserta",
    template: "%s | Antonio Andreozzi Digital",
  },
  description:
    "Costruiamo brand, sistemi e identità per imprenditori italiani che hanno scelto di non assomigliare a nessuno. Agenzia marketing a Caserta.",
  keywords: [
    "agenzia marketing caserta",
    "brand identity",
    "marketing digitale",
    "Antonio Andreozzi",
    "consulenza marketing",
    "brand building",
    "intelligenza artificiale marketing",
  ],
  authors: [{ name: "Antonio Andreozzi" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.antonioandreozzidigital.com",
    siteName: "Antonio Andreozzi Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antonio Andreozzi Digital — Agenzia Marketing Caserta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@DigitalSEO__",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.antonioandreozzidigital.com" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Andreozzi",
  url: "https://www.antonioandreozzidigital.com",
  sameAs: [
    "https://www.instagram.com/antonioandreozzidigital",
    "https://www.youtube.com/@antonioandreozzi.digital",
    "https://x.com/DigitalSEO__",
  ],
  jobTitle: "Marketing Strategist e Brand Builder",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via G. Corrado, 15",
    addressLocality: "Parete",
    addressRegion: "CE",
    postalCode: "81030",
    addressCountry: "IT",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Antonio Andreozzi Digital",
  url: "https://www.antonioandreozzidigital.com",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via G. Corrado, 15",
    addressLocality: "Parete",
    addressRegion: "CE",
    postalCode: "81030",
    addressCountry: "IT",
  },
  areaServed: "Italia",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen scene-3d">
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
        <ClientProviders />

        {/* iubenda — config prima degli script */}
        <Script id="iubenda-config" strategy="beforeInteractive">{`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId": 4004204,
            "cookiePolicyId": 35973540,
            "storage": {"useSiteId": true},
            "banner": {
              "backgroundColor": "#ffffff",
              "textColor": "#1a1a1a",
              "btnColorBg": "#C8913A",
              "btnColorText": "#ffffff",
              "btnCaptionColor": "#ffffff",
              "btnBgColor": "#C8913A",
              "brandTextColor": "#C8913A",
              "acceptButtonColor": "#C8913A",
              "acceptButtonCaptionColor": "#ffffff",
              "customizeButtonColor": "#f5f0e8",
              "customizeButtonCaptionColor": "#1a1a1a"
            }
          };
          _iub.csLangConfiguration = {"it":{"cookiePolicyId":35973540}};
        `}</Script>
        <Script src="https://cs.iubenda.com/autoblocking/4004204.js" strategy="beforeInteractive" />
        <Script src="https://cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
        <Script src="https://cdn.iubenda.com/iubenda.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
