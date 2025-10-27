import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO METADATA ---
export const metadata: Metadata = {
  // metadataBase diperlukan agar Next.js tahu URL lengkap untuk OG image
  metadataBase: new URL("https://compro-demo.vercel.app/"),

  // Title akan dinamis.
  // Halaman utama akan pakai 'default'.
  // Halaman lain akan pakai 'template' (misal: "Our Services | TechVision")
  title: {
    default: "TechVision - Modern Company Profile Demo",
    template: "%s | TechVision",
  },

  description:
    "Discover TechVision, a stunning company profile demo for a modern tech agency, showcasing services, projects, and team. Built with Next.js, Tailwind CSS, and Framer Motion.",

  // Keywords untuk membantu SEO (meski pengaruhnya kecil sekarang)
  keywords: [
    "Company Profile",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Tech Agency Demo",
    "Website Template",
    "TechVision",
    "Compro Demo",
  ],

  // Info pembuat
  authors: [{ name: "TechVision", url: "https://compro-demo.vercel.app/" }],
  creator: "TechVision",

  // --- Open Graph (OG) Tags ---
  // Ini SANGAT PENTING untuk tampilan saat di-share ke media sosial (FB, WA, LinkedIn, dll)
  openGraph: {
    title: "TechVision - Modern Company Profile Demo",
    description:
      "A stunning company profile demo for a modern tech agency, built with Next.js, Tailwind CSS, and Framer Motion.",
    url: "https://compro-demo.vercel.app/",
    siteName: "TechVision",
    images: [
      {
        // Ganti '/og-image.png' dengan path gambar kamu
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechVision Company Profile Demo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // --- Twitter Card Tags ---
  // Penting untuk tampilan saat di-share ke Twitter
  twitter: {
    card: "summary_large_image",
    title: "TechVision - Modern Company Profile Demo",
    description:
      "A stunning company profile demo for a modern tech agency, built with Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/og-image.png"], // Ganti dengan path gambar kamu
    // creator: "@username_twitter_kamu", // Opsional: tambahkan username Twitter kamu
  },

  // --- Lain-lain ---
  // Memberi tahu Google cara meng-crawl
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

  // Icon (favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
// --- END OF SEO ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
