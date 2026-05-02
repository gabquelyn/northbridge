import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Script from "next/script";
import "react-phone-number-input/style.css";
import ReactQueryProvider from "./providers/ReactqueryProvider";
import CartContextProvider from "./providers/cartContextProvider";
import { Toaster } from "sonner";
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
    title: "Northbridge Collegiate",
    description:
      "Canadian-aligned academic bridge programs preparing international students for success in Canadian universities.",
    images: ["/og/default.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-[.9rem] md:text-[1.2rem]`}
      >
        {/* Google script tag */}
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-34FWL0DNMR"
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-34FWL0DNMR');
        `}
          </Script>
        </>
 
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "bg-primary/5 text-secondary",
          }}
        />
        <CartContextProvider>
          <ReactQueryProvider>
            <Providers>{children}</Providers>
          </ReactQueryProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
