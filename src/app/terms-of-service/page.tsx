
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">Terms of Service</h1>
          <div className="prose prose-invert prose-lg mx-auto text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-white">1. Agreement to Terms</h2>
            <p>
              By using our services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the services.
            </p>

            <h2 className="text-white">2. Changes to Terms or Services</h2>
            <p>
              We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications. It’s important that you review the Terms whenever we update them or you use the Services.
            </p>

            <h2 className="text-white">3. Who May Use the Services</h2>
            <p>
              You may use the Services only if you are 13 years or older and are not barred from using the Services under applicable law.
            </p>
            
            <h2 className="text-white">4. Content Ownership</h2>
            <p>
              We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content.
            </p>
            
            <h2 className="text-white">5. General Prohibitions</h2>
            <p>You agree not to do any of the following:</p>
            <ul>
              <li>Post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability.</li>
              <li>Use, display, mirror or frame the Services or any individual element within the Services, RE:INVENT’s name, any RE:INVENT trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without RE:INVENT’s express written consent.</li>
            </ul>

            <h2 className="text-white">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              RE:INVENT<br />
               <a href="mailto:ramanandr7666@gmail.com" className="text-primary hover:underline">ramanandr7666@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
