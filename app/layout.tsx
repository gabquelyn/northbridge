import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northbridgec.ca"),

  title: {
    default: "Northbridge Collegiate",
    template: "%s | Northbridge Collegiate",
  },

  description:
    "Northbridge Collegiate delivers Canadian-aligned academic bridge programs designed to prepare international students for success in Canadian universities.",

  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Northbridge Collegiate",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Northbridge Collegiate - Canadian Academic Bridge Programs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[.9rem]`}
      >
        {/* Global Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Northbridge Collegiate",
              url: "https://northbridgec.ca",
              logo: "https://northbridgec.ca/logo.png",
              description:
                "Northbridge Collegiate delivers Canadian-aligned academic bridge programs preparing international students for university success.",
              sameAs: [
                // "https://www.linkedin.com/company/northbridge-collegiate",
                // "https://www.instagram.com/northbridgecollegiate",
              ],
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
