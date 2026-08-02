import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider";
import SmoothScrolling from "@/components/SmoothScrolling";
import PageTransition from "@/components/ui/PageTransition";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { CookieConsent } from "@/components/privacy/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL('https://rhevez.com'),
  title: {
    template: "%s | Rhevez",
    default: "Rhevez: Premium Product Engineering & AI Solutions",
  },
  description: "Rhevez delivers design-first Product Engineering, custom AI systems, and premium Brand Identity services for scaling companies.",
  keywords: ["Rhevez", "Software Engineering Services", "AI Engineers", "Web Development", "Mobile Applications", "AI Agents", "UI/UX Design", "Brand Identity"],
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
    title: "Rhevez: Premium Product Engineering & AI Solutions",
    description: "Design-first product development, custom autonomous agents, and strategic brand identity for high-growth enterprises.",
    url: "https://rhevez.com",
    siteName: "Rhevez",
    images: [
      {
        url: "https://rhevez.com/careers-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Rhevez - Premium Product Engineering & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhevez: Premium Product Engineering & AI Solutions",
    description: "Design-first product development, custom autonomous agents, and strategic brand identity for high-growth enterprises.",
    images: ["https://rhevez.com/careers-hero-bg.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rhevez",
    "url": "https://rhevez.com",
    "logo": "https://rhevez.com/lovable-uploads/logo.png",
    "description": "Premium product engineering, autonomous AI agent systems, and luxury brand design.",
    "founder": [
      { "@type": "Person", "name": "Ram Anand", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "Jithu Francis", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "Thejas Somarajan", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "Kesavadas", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "Kiran Rajeev", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "B. VishnuNarayanan", "jobTitle": "Co-Founder" },
      { "@type": "Person", "name": "Arjun Kumar VS", "jobTitle": "Co-Founder" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rhevez Core Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Engineering",
            "description": "Premium software development services including Next.js web applications, mobile apps, and robust API architectures."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Autonomous Agents",
            "description": "Custom agentic intelligence pipelines, LLM fine-tuning, and automated operational orchestration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design",
            "description": "Visionary visual direction, guidelines, typography packages, and custom logo systems for scaling startups."
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Rhevez offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rhevez specializes in high-fidelity Product Engineering, autonomous AI & Machine Learning workflow designs, and modern Brand Identity systems."
        }
      },
      {
        "@type": "Question",
        "name": "How does Rhevez collaborate with startups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate in a 5-step collaboration timeline including Discovery, Strategy & blueprinting, Bespoke Production, rigid Security Hardening, and Launch & Scaling."
        }
      }
    ]
  }
];

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
      <body className="antialiased overflow-x-hidden">
        <QueryProvider>
          <TooltipProvider>
            <ContactModalProvider>
              <SmoothScrolling>
                <div className="min-h-screen bg-background w-full overflow-x-hidden">
                  <Toaster />
                  <Sonner />
                  <CookieConsent />
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
