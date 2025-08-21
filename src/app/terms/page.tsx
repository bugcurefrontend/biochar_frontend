import { Metadata } from "next";
import TermsPage from "../../components/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Use - Heartyculture Biochar",
  description: "Terms and conditions for using Heartyculture's biochar carbon credit platform. Legal information for buyers and partners.",
  keywords: [
    "terms of use",
    "terms and conditions",
    "legal",
    "carbon credits terms",
    "biochar terms",
    "heartyculture legal"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use - Heartyculture Biochar",
    description: "Terms and conditions for using Heartyculture's biochar carbon credit platform.",
    url: "https://yourdomain.com/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/terms",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Terms() {
  return <TermsPage />;
}