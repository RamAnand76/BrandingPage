import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import PageTransition from "@/components/ui/PageTransition";
import { ContactModalProvider } from "@/context/ContactModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://reinvent.lovable.dev'),
  title: {
    template: "%s | Re-Invent",
    default: "Re-Invent: Expert Services, Delivered",
  },
  description: "Re-Invent: From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
  keywords: ["Re-Invent", "Software Development Services", "Web Development", "Mobile Apps", "AI Development", "UI/UX Design", "Digital Agency"],
  authors: [{ name: "Re-Invent" }],
  verification: {
    google: "ia9izdQwctLX-20p5INS7Mr0rAoO-0CIQTtXvDmw70w",
  },
  openGraph: {
    title: "Re-Invent: Premium Software Development Services",
    description: "Expert software development services, AI agents, and mobile apps. We transform your complex ideas into scalable digital reality.",
    url: "https://reinvent.lovable.dev",
    siteName: "Re-Invent",
    images: [
      {
        url: "https://picsum.photos/seed/og-reinvent/1200/630",
        width: 1200,
        height: 630,
        alt: "Re-Invent - Expert Software Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Re-Invent: Expert Software Development Services",
    description: "From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
    images: ["https://picsum.photos/seed/og-reinvent/1200/630"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Re-Invent Digital Solutions",
  "description": "Premium software development services including Web, Mobile, and AI solutions.",
  "url": "https://reinvent.lovable.dev",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Re-Invent",
    "url": "https://reinvent.lovable.dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            <ContactModalProvider>
              <SmoothScrolling>
                <div className="min-h-screen bg-background w-full">
                  <Toaster />
                  <Sonner />
                  <PageTransition>{children}</PageTransition>
                </div>
              </SmoothScrolling>
            </ContactModalProvider>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
