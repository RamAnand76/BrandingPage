
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const termsSections = [
  { id: "agreement-to-terms", title: "1. Agreement to Terms" },
  { id: "changes-to-terms", title: "2. Changes to Terms" },
  { id: "intellectual-property", title: "3. Intellectual Property" },
  { id: "user-representations", title: "4. User Representations" },
  { id: "prohibited-activities", title: "5. Prohibited Activities" },
  { id: "third-party-links", title: "6. Third-Party Links" },
  { id: "termination", title: "7. Termination" },
  { id: "disclaimers", title: "8. Disclaimers" },
  { id: "limitation-of-liability", title: "9. Limitation of Liability" },
  { id: "governing-law", title: "10. Governing Law" },
  { id: "contact-information", title: "11. Contact Information" },
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
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3275F8] to-white"
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
                          ? "bg-[#3275F8]/10 text-[#3275F8] font-medium"
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
                  By using our services, website, and products (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to be bound by these Terms, do not use the Services.
                </p>
              </section>

              <section id="changes-to-terms" className="pt-8">
                <h2 className="text-white">2. Changes to Terms or Services</h2>
                <p>
                  We may update the Terms at any time, in our sole discretion. If we do so, we will let you know by posting the updated Terms on the Site. It’s important that you review the Terms whenever we update them.
                </p>
              </section>

              <section id="intellectual-property" className="pt-8">
                <h2 className="text-white">3. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site and our Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
              </section>
              
              <section id="user-representations" className="pt-8">
                <h2 className="text-white">4. User Representations</h2>
                <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not under the age of 13; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</p>
              </section>

              <section id="prohibited-activities" className="pt-8">
                <h2 className="text-white">5. Prohibited Activities</h2>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activity includes, but is not limited to: systematic retrieval of data, unauthorized framing or linking, and interfering with the proper working of the Site.</p>
              </section>

              <section id="third-party-links" className="pt-8">
                <h2 className="text-white">6. Third-Party Links &amp; Content</h2>
                <p>The Site may contain links to other websites (&quot;Third-Party Websites&quot;) as well as articles, photographs, text, graphics, or other content belonging to or originating from third parties (&quot;Third-Party Content&quot;). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us.</p>
              </section>

              <section id="termination" className="pt-8">
                <h2 className="text-white">7. Termination</h2>
                <p>We may suspend or terminate your rights to use the Services at any time for any reason at our sole discretion, including for any use of the Services in violation of these Terms. Upon termination, your right to use the Services will immediately cease.</p>
              </section>

              <section id="disclaimers" className="pt-8">
                <h2 className="text-white">8. Disclaimers</h2>
                <p>THE SERVICES ARE PROVIDED ON AN &quot;AS-IS&quot; AND &quot;AS-AVAILABLE&quot; BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.</p>
              </section>

              <section id="limitation-of-liability" className="pt-8">
                <h2 className="text-white">9. Limitation of Liability</h2>
                <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.</p>
              </section>

              <section id="governing-law" className="pt-8">
                <h2 className="text-white">10. Governing Law</h2>
                <p>These Terms and your use of the Services are governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law principles.</p>
              </section>
              
              <section id="contact-information" className="pt-8">
                <h2 className="text-white">11. Contact Information</h2>
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
