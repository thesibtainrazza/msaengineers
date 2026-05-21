import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://msaengineers.com'),
  title: {
    default: "MSA Engineers & Contractors | Industrial Infrastructure Solutions",
    template: "%s | MSA Engineers & Contractors"
  },
  description: "MSA Engineers & Contractors delivers dependable industrial engineering and contracting solutions across India. Specializing in structural, fabrication, and execution excellence.",
  keywords: ["Industrial Engineering", "Fabrication", "Structural Steel", "Cement Plants", "Contractors", "India"],
  openGraph: {
    title: "MSA Engineers & Contractors",
    description: "Delivering dependable industrial engineering and contracting solutions.",
    url: "https://msaengineers.com",
    siteName: "MSA Engineers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSA Engineers & Contractors",
    description: "Industrial Infrastructure Solutions that endure for generations.",
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicons/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/favicons/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white" suppressHydrationWarning>
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}