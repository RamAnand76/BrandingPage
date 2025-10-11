
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://reinvent.lovable.dev'),
  title: {
    template: "%s | RE:INVENT",
    default: "RE:INVENT - Expert Services, Delivered",
  },
  description: "From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
  keywords: ["Web Development", "Mobile Apps", "AI Development", "UI/UX Design", "Digital Solutions", "AI Workflow Automation", "AI Agents", "Developer Tools", "Deep Learning", "CI/CD"],
  openGraph: {
    title: "RE:INVENT - Expert Services, Delivered",
    description: "From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
    url: "https://reinvent.lovable.dev",
    siteName: "RE:INVENT",
    images: [
      {
        url: "https://picsum.photos/seed/og-reinvent/1200/630",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE:INVENT - Expert Services, Delivered",
    description: "From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.",
    images: ["https://picsum.photos/seed/og-reinvent/1200/630"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            <div className="min-h-screen bg-background w-full overflow-x-hidden">
              <Toaster />
              <Sonner />
              {children}
            </div>
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
