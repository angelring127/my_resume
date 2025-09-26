import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANG HO YOUN - Full Stack Developer",
  description:
    "Full Stack Developer with 6+ years experience in React, Next.js, Laravel, Python. Based in Vancouver, Canada.",
  keywords:
    "Full Stack Developer, React, Next.js, Laravel, Python, Vancouver, Remote Work",
  authors: [{ name: "SANG HO YOUN" }],
  creator: "SANG HO YOUN",
  publisher: "SANG HO YOUN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://my-resume-three-psi.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ko-KR": "/ko",
      "ja-JP": "/ja",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-resume-three-psi.vercel.app",
    title: "SANG HO YOUN - Full Stack Developer",
    description:
      "Full Stack Developer with 6+ years experience in React, Next.js, Laravel, Python. Based in Vancouver, Canada.",
    siteName: "SANG HO YOUN Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SANG HO YOUN - Full Stack Developer",
    description:
      "Full Stack Developer with 6+ years experience in React, Next.js, Laravel, Python. Based in Vancouver, Canada.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&family=Noto+Sans+KR:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
