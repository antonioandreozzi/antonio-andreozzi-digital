import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  metadataBase: new URL("https://antonioandreozzidigital.com"),
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
    url: "https://antonioandreozzidigital.com",
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
  alternates: { canonical: "https://antonioandreozzidigital.com" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Andreozzi",
  url: "https://antonioandreozzidigital.com",
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
  "@type": "ProfessionalService",
  "@id": "https://antonioandreozzidigital.com/#business",
  name: "We Move Markets",
  alternateName: "Antonio Andreozzi Digital",
  description: "Consulenza di brand strategy per PMI e liberi professionisti in Campania e in tutta Italia: posizionamento, identità di marca, tono di voce, integrazione AI, e-commerce e contenuti video.",
  url: "https://antonioandreozzidigital.com/",
  telephone: "+39 333 434 2510",
  email: "antonioandreozzidigital@gmail.com",
  founder: {
    "@type": "Person",
    name: "Antonio Andreozzi",
    jobTitle: "Marketing Strategist",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Parete",
    postalCode: "81030",
    addressRegion: "CE",
    addressCountry: "IT",
  },
  areaServed: [
    { "@type": "City", name: "Caserta" },
    { "@type": "City", name: "Napoli" },
    { "@type": "City", name: "Aversa" },
    { "@type": "City", name: "Giugliano in Campania" },
    { "@type": "City", name: "Parete" },
    { "@type": "City", name: "Marcianise" },
    { "@type": "City", name: "Santa Maria Capua Vetere" },
    { "@type": "City", name: "Pozzuoli" },
    { "@type": "City", name: "Salerno" },
    { "@type": "Country", name: "Italia" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  hasMap: "https://maps.google.com/?cid=13647021294743413792",
  sameAs: [
    "https://maps.google.com/?cid=13647021294743413792",
  ],
  knowsAbout: ["Brand strategy", "Posizionamento", "Brand identity", "Tono di voce", "Copywriting", "Intelligenza artificiale per PMI", "E-commerce"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnosi di brand", description: "3 ore di lavoro 1:1 e report scritto con priorità chiare e prossimi passi." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consulenza strategica di brand 1:1" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Posizionamento e identità di marca" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Copywriting e tono di voce" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrazione AI e automazioni per PMI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chatbot AI su misura" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Realizzazione e-commerce (Shopify e WooCommerce)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sviluppo app mobile e web app" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video brevi: Reels, TikTok e YouTube Shorts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mastermind per imprenditori" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="google-site-verification" content="_TnnRNmnHEDKepLRvbaCN1BeVVZHjTx1uTZvR6kyUZI" />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GT3X8S5MZG"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GT3X8S5MZG');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* iubenda Cookie Solution — script semplici, eseguiti in ordine nell'HTML statico */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || [];
_iub.csConfiguration = {"siteId":4004204,"cookiePolicyId":35973540,"storage":{"useSiteId":true}};
_iub.csLangConfiguration = {"it":{"cookiePolicyId":35973540}};`,
          }}
        />
        <script src="https://cs.iubenda.com/autoblocking/4004204.js"></script>
        <script src="https://cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8"></script>
        <script src="https://cdn.iubenda.com/iubenda.js"></script>
      </head>
      <body className="min-h-screen scene-3d">
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
        <ClientProviders />
      </body>
    </html>
  );
}
