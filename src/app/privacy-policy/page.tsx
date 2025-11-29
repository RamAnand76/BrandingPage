
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const policySections = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "use-of-your-information", title: "Use of Your Information" },
  { id: "security-of-your-information", title: "Security of Your Information" },
  { id: "contact-us", title: "Contact Us" },
];

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    policySections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      policySections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <header className="pt-32 pb-16 text-center">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
        >
            Privacy Policy
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-lg"
        >
            Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-1/4 md:sticky top-32 self-start">
            <nav>
              <ul>
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={cn(
                        "block py-2 px-3 rounded-md transition-colors",
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-neutral-900"
                      )}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-3/4"
          >
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
              <section id="introduction">
                <h2 className="text-white">Introduction</h2>
                <p>
                  Welcome to RE:INVENT. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section id="information-we-collect" className="pt-8">
                <h2 className="text-white">Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <h3>Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
                </p>
                <h3>Derivative Data</h3>
                <p>
                  Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                </p>
              </section>

              <section id="use-of-your-information" className="pt-8">
                <h2 className="text-white">Use of Your Information</h2>
                <p>
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul>
                  <li>Create and manage your account.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Enable user-to-user communications.</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                  <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                </ul>
              </section>

              <section id="security-of-your-information" className="pt-8">
                <h2 className="text-white">Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>
              
              <section id="contact-us" className="pt-8">
                <h2 className="text-white">Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
