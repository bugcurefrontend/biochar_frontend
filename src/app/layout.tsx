import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Goudy_Bookletter_1911 } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-goudy",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("http://biochar.heartyculture.com"),
  title:
    "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
  description:
    "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil. 75% persistent carbon removal with measurable community impact across India.",
  keywords: [
    "carbon credits",
    "biochar",
    "carbon removal",
    "climate action",
    "soil health",
    "carbon sequestration",
    "sustainable agriculture",
    "rural development",
    "carbon offset",
    "verified carbon standard",
    "heartyculture",
    "permanent carbon removal",
    "farmer prosperity",
    "regenerative agriculture",
    "carbon marketplace",
  ],
  authors: [{ name: "Heartyculture" }],
  creator: "Heartyculture",
  publisher: "Heartyculture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://biochar.heartyculture.com",
    title:
      "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
    description:
      "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil. 75% persistent carbon removal with measurable community impact across India.",
    siteName: "Heartyculture Biochar",
    images: [
      {
        url: "http://biochar.heartyculture.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Heartyculture Biochar - Carbon Credits for Climate Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
    description:
      "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil.",
    images: ["http://biochar.heartyculture.com/og-image.webp"],
  },
  category: "Environment",
  classification: "Carbon Credits, Climate Action, Sustainable Agriculture",
  alternates: {
    canonical: "http://biochar.heartyculture.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "http://biochar.heartyculture.com/#organization",
        name: "Heartyculture",
        url: "http://biochar.heartyculture.com",
        logo: {
          "@type": "ImageObject",
          url: "http://biochar.heartyculture.com/og-image.webp",
          width: 1200,
          height: 630,
        },
        description:
          "Leading biochar carbon credit provider focusing on permanent carbon removal and rural community empowerment",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "India",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-99788-22525",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "http://biochar.heartyculture.com/#website",
        url: "http://biochar.heartyculture.com",
        name: "Heartyculture Biochar",
        description:
          "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil",
        publisher: {
          "@id": "http://biochar.heartyculture.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "http://biochar.heartyculture.com/?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Service",
        "@id": "http://biochar.heartyculture.com/#service",
        name: "Carbon Credit Sales",
        description:
          "Verified biochar carbon credits with permanent CO2 removal and community impact",
        provider: {
          "@id": "http://biochar.heartyculture.com/#organization",
        },
        serviceType: "Carbon Offset",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Biochar Carbon Credits",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Verified Carbon Credits",
                description:
                  "75% persistent carbon removal through biochar production",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "http://biochar.heartyculture.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "http://biochar.heartyculture.com",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${goudy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
