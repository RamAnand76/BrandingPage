import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import PageTransition from "@/components/ui/PageTransition";
import { ContactModalProvider } from "@/context/ContactModalContext";



export const metadata: Metadata = {
  metadataBase: new URL('https://rhevez.lovable.dev'),
  title: {
    template: "%s | Rhevez",
    default: "Rhevez: Expert Services, Delivered",
  },
  description: "Rhevez: From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
  keywords: ["Rhevez", "Software Development Services", "Web Development", "Mobile Apps", "AI Development", "UI/UX Design", "Digital Agency"],
  authors: [{ name: "Rhevez" }],
  verification: {
    google: "ia9izdQwctLX-20p5INS7Mr0rAoO-0CIQTtXvDmw70w",
  },
  icons: {
    icon: "/lovable-uploads/logo.png",
    shortcut: "/lovable-uploads/logo.png",
    apple: "/lovable-uploads/logo.png",
  },
  openGraph: {
    title: "Rhevez: Premium Software Development Services",
    description: "Expert software development services, AI agents, and mobile apps. We transform your complex ideas into scalable digital reality.",
    url: "https://rhevez.lovable.dev",
    siteName: "Rhevez",
    images: [
      {
        url: "https://picsum.photos/seed/og-rhevez/1200/630",
        width: 1200,
        height: 630,
        alt: "Rhevez - Expert Software Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhevez: Expert Software Development Services",
    description: "From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
    images: ["https://picsum.photos/seed/og-rhevez/1200/630"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Rhevez Digital Solutions",
  "description": "Premium software development services including Web, Mobile, and AI solutions.",
  "url": "https://rhevez.lovable.dev",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Rhevez",
    "url": "https://rhevez.lovable.dev"
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
      <body className="antialiased">
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
