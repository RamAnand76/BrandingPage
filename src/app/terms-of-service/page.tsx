
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const termsSections = [
  { id: "agreement-to-terms", title: "1. Agreement to Terms" },
  { id: "changes-to-terms", title: "2. Changes to Terms" },
  { id: "who-may-use", title: "3. Who May Use the Services" },
  { id: "content-ownership", title: "4. Content Ownership" },
  { id: "general-prohibitions", title: "5. General Prohibitions" },
  { id: "contact-information", title: "6. Contact Information" },
];

const TermsOfServicePage = () => {
  const [activeSection, setActiveSection] = useState("agreement-to-terms");

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

    termsSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      termsSections.forEach((section) => {
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
            Terms of Service
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
                {termsSections.map((section) => (
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
              <section id="agreement-to-terms">
                <h2 className="text-white">1. Agreement to Terms</h2>
                <p>
                  By using our services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the services.
                </p>
              </section>

              <section id="changes-to-terms" className="pt-8">
                <h2 className="text-white">2. Changes to Terms or Services</h2>
                <p>
                  We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications. It’s important that you review the Terms whenever we update them or you use the Services.
                </p>
              </section>

              <section id="who-may-use" className="pt-8">
                <h2 className="text-white">3. Who May Use the Services</h2>
                <p>
                  You may use the Services only if you are 13 years or older and are not barred from using the Services under applicable law.
                </p>
              </section>
              
              <section id="content-ownership" className="pt-8">
                <h2 className="text-white">4. Content Ownership</h2>
                <p>
                  We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content.
                </p>
              </section>
              
              <section id="general-prohibitions" className="pt-8">
                <h2 className="text-white">5. General Prohibitions</h2>
                <p>You agree not to do any of the following:</p>
                <ul>
                  <li>Post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability.</li>
                  <li>Use, display, mirror or frame the Services or any individual element within the Services, RE:INVENT’s name, any RE:INVENT trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without RE:INVENT’s express written consent.</li>
                </ul>
              </section>

              <section id="contact-information" className="pt-8">
                <h2 className="text-white">6. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us.
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

export default TermsOfServicePage;
