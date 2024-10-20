import type { Metadata } from "next/types";

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: "Al Gabriel",
    template: "%s",
  },
  description: "Software Developer",
  keywords: ["Software", "Development", "Engineering","Davao","Developer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Al Gabriel",
    description: "Software Developer",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
    siteName: "Al Gabriel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Gabriel",
    description: "Software Developer",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}api/og`],
  },
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
};
