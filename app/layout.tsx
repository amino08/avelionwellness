import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import {
  createMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const rootMetadata = createMetadata({
  title: "Avelion Care & Wellness",
  description:
    "Avelion Care — physician-guided wellness with elevated standards. Avelion Wellness — premium research peptides and research-use products. Powered by AgeWell.",
  path: "",
  keywords: [
    "Avelion",
    "Avelion Wellness",
    "Avelion Care",
    "research peptides",
    "laboratory research",
    "AgeWell",
    "premium biotechnology",
  ],
});

export const metadata: Metadata = {
  ...rootMetadata,
  title: {
    default: "Avelion — Care & Wellness",
    template: "%s | Avelion Wellness",
  },
  applicationName: "Avelion Wellness",
  authors: [{ name: "Avelion Wellness" }],
  creator: "Avelion Wellness",
  publisher: "Avelion Wellness",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
