import type { Metadata } from "next";
import { Source_Code_Pro, Open_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

import "./globals.css";

const sourceSans = Source_Code_Pro({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trackzero.app"),
  title: {
    default: "TrackZero - Smart Maintenance & Breakdown Management Software",
    template: "%s | TrackZero",
  },
  description:
    "AI-powered maintenance and breakdown tracking software built by engineers. Streamline defect management, reduce downtime, and improve efficiency.",
  keywords: [
    "maintenance software",
    "breakdown management",
    "CMMS",
    "defect tracking",
    "maintenance management",
    "equipment maintenance",
    "preventive maintenance",
    "maintenance planning",
    "asset management",
    "factory maintenance",
  ],
  authors: [{ name: "TrackZero" }],
  creator: "TrackZero",
  publisher: "TrackZero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trackzero.app",
    siteName: "TrackZero",
    title: "TrackZero - Smart Maintenance & Breakdown Management Software",
    description:
      "AI-powered maintenance and breakdown tracking software built by engineers. Streamline defect management, reduce downtime, and improve efficiency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TrackZero - Smart Maintenance Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackZero - Smart Maintenance & Breakdown Management Software",
    description:
      "AI-powered maintenance and breakdown tracking software built by engineers. Streamline defect management, reduce downtime, and improve efficiency.",
    images: ["/og-image.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen relative">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
