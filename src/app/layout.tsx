import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Goudy_Bookletter_1911 } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const goudy = Goudy_Bookletter_1911({
  subsets: ["latin"], // or [] for full
  weight: "400", // only 400 is offered
  display: "swap", // Prevents invisible text during font load
  variable: "--font-goudy",
  preload: true, // Preload font for faster loading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
  description: "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil. 75% persistent carbon removal with measurable community impact across India.",
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
    "carbon marketplace"
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
    description: "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil. 75% persistent carbon removal with measurable community impact across India.",
    siteName: "Heartyculture Biochar",
    images: [
      {
        url: "/Logos/logo.png",
        width: 300,
        height: 100,
        alt: "Heartyculture Biochar - Carbon Credits for Climate Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heartyculture Biochar - Carbon Credits for Climate Action & Rural Prosperity",
    description: "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil.",
  },
  category: "Environment",
  classification: "Carbon Credits, Climate Action, Sustainable Agriculture",
  alternates: {
    canonical: "https://yourdomain.com",
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
        "@id": "https://yourdomain.com/#organization",
        "name": "Heartyculture",
        "url": "https://yourdomain.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://yourdomain.com/Logos/logo.png",
          "width": 300,
          "height": 100
        },
        "description": "Leading biochar carbon credit provider focusing on permanent carbon removal and rural community empowerment",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-99788-22525",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://yourdomain.com/#website",
        "url": "https://yourdomain.com",
        "name": "Heartyculture Biochar",
        "description": "Buy verified carbon credits from biochar projects that permanently remove CO2 while empowering farmers and restoring soil",
        "publisher": {
          "@id": "https://yourdomain.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://yourdomain.com/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://yourdomain.com/#service",
        "name": "Carbon Credit Sales",
        "description": "Verified biochar carbon credits with permanent CO2 removal and community impact",
        "provider": {
          "@id": "https://yourdomain.com/#organization"
        },
        "serviceType": "Carbon Offset",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Biochar Carbon Credits",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Verified Carbon Credits",
                "description": "75% persistent carbon removal through biochar production"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://yourdomain.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yourdomain.com"
          }
        ]
      }
    ]
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
