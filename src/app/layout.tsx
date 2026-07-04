import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { LoadingScreen } from "@/components/layout/LoadingScreen"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { Background } from "@/components/layout/Background"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Víctor Mendoza | Ingeniero de Software",
  description:
    "Desarrollador Full Stack Junior apasionado por el desarrollo web, la arquitectura de software y la creación de soluciones modernas.",
  keywords: [
    "Víctor Mendoza",
    "desarrollador",
    "full stack",
    "react",
    "next.js",
    "typescript",
    "portafolio",
  ],
  authors: [{ name: "Víctor Mendoza" }],
  openGraph: {
    title: "Víctor Mendoza | Ingeniero de Software",
    description:
      "Desarrollador Full Stack Junior apasionado por el desarrollo web y la arquitectura de software.",
    url: "https://vmendoza.dev",
    siteName: "Víctor Mendoza",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Víctor Mendoza | Ingeniero de Software",
    description:
      "Desarrollador Full Stack Junior apasionado por el desarrollo web y la arquitectura de software.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Víctor Mendoza",
              jobTitle: "Ingeniero de Software",
              url: "https://vmendoza.dev",
              sameAs: ["https://github.com/VMendoza2603", "https://www.linkedin.com/in/victor-mendoza-a7ba6914a"],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Desarrollo Web",
                "Arquitectura de Software",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universidad Estatal de Milagro",
              },
            }),
          }}
        />
        <Background />
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fafafa",
              border: "1px solid #27272a",
            },
          }}
        />
      </body>
    </html>
  )
}
