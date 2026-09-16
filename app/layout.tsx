import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer/Footer";
import Nav from "@/component/Nav/Nav";
import ScrollbarOnScroll from "@/component/ScrollbarOnScroll";
import BookACallRoot from "@/component/BookACall/BookACallRoot";
import {
  DEFAULT_OG_IMAGE,
  PAGE_SEO,
  SITE_NAME,
  SITE_URL,
  pageMeta,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const homeSeo = PAGE_SEO["/"];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    title: homeSeo.title,
    description: homeSeo.description,
    path: "/",
  }),
  title: {
    default: homeSeo.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: homeSeo.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <BookACallRoot>
          <ScrollbarOnScroll />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookACallRoot>
      </body>
    </html>
  );
}
