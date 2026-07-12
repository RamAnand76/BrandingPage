
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
  { id: "disclosure-of-information", title: "Disclosure of Information" },
  { id: "cookies-and-tracking", title: "Cookies & Tracking" },
  { id: "data-security", title: "Data Security" },
  { id: "your-data-rights", title: "Your Data Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "policy-changes", title: "Policy Changes" },
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
      <main className="container mx-auto px-4 pb-20">
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
                  Welcome to Rhevez (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>

              <section id="information-we-collect" className="pt-8">
                <h2 className="text-white">Information We Collect</h2>
                <p>
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                <h3>Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you contact us or register with the Site.
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
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                  <li>Improve our website and offerings.</li>
                  <li>Respond to customer service requests.</li>
                </ul>
              </section>

              <section id="disclosure-of-information" className="pt-8">
                <h2 className="text-white">Disclosure of Information</h2>
                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                <ul>
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                </ul>
              </section>

              <section id="cookies-and-tracking" className="pt-8">
                <h2 className="text-white">Cookies and Tracking Technologies</h2>
                <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. You are free to decline our cookies if your browser permits, but some parts of our Site may not work properly for you.</p>
              </section>

              <section id="data-security" className="pt-8">
                <h2 className="text-white">Data Security</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section id="your-data-rights" className="pt-8">
                <h2 className="text-white">Your Data Rights</h2>
                <p>Depending on your location, you may have the right to access, correct, or delete your personal information. If you would like to exercise these rights, please contact us using the contact information provided below.</p>
              </section>

              <section id="childrens-privacy" className="pt-8">
                <h2 className="text-white">Children&apos;s Privacy</h2>
                <p>We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.</p>
              </section>

              <section id="policy-changes" className="pt-8">
                <h2 className="text-white">Changes to This Privacy Policy</h2>
                <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the &quot;Last updated&quot; date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.</p>
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
