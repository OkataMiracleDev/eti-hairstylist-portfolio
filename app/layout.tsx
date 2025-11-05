import type { Metadata } from "next";
import "./globals.css";
import { bric } from "./font";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://style-by-eti.vercel.app/"),
  title: {
    default: "Style by Eti — Hairstylist Portfolio",
    template: "%s | Style by Eti",
  },
  description:
    "Hairstylist portfolio by Eti showcasing braiding, plaiting, coloring, and grooming with artistic, expressive hair designs.",
  keywords: [
    "Eti",
    "Style by Eti",
    "hairstylist",
    "hair styling",
    "braiding",
    "plaiting",
    "coloring",
    "grooming",
    "portfolio",
  ],
  authors: [{ name: "Eti" }],
  creator: "Eti",
  publisher: "Style by Eti",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://style-by-eti.vercel.app/",
    title: "Style by Eti — Hairstylist Portfolio",
    description:
      "Expressive hair artistry: braiding, plaiting, coloring, and grooming by Eti.",
    siteName: "Style by Eti",
    images: [
      {
        url: "/ig-page.jpg",
        width: 1200,
        height: 630,
        alt: "Style by Eti portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Style by Eti — Hairstylist Portfolio",
    description:
      "Expressive hair artistry: braiding, plaiting, coloring, and grooming by Eti.",
    images: ["/ig-page.jpg"],
    creator: "@style_by.eti",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Style by Eti",
    url: "https://style-by-eti.vercel.app/",
    description:
      "Hairstylist portfolio by Eti showcasing braiding, plaiting, coloring, and grooming with artistic, expressive hair designs.",
    sameAs: [
      "https://www.instagram.com/style_by.eti/"
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://style-by-eti.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html className="scroll-smooth transition-all duration-500" lang="en">
      <body
        className={`${bric.className} circuit-wrapper antialiased relative `}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Full-page background */}
        <div className="circuit-background -z-10"></div>

        {/* Foreground content */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
