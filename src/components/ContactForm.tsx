
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SuccessAnimation } from "./SuccessAnimation";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          access_key: "f87b9d51-a7d7-4517-ad85-10aa3e61da99",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSubmitted(true);
      
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
        // Reset form and submitted state after modal closes
        setTimeout(() => {
          form.reset();
          setIsSubmitted(false);
        }, 500);
      }, 1800); // Wait for animation to mostly complete

    } catch (error: any) {
      console.error('Failed to send email:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message || "Could not send your message. Please try again later.",
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  if (isSubmitted) {
    return <SuccessAnimation />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm uppercase tracking-wider text-white/70">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-[#3275F8]/50 focus:ring-[#3275F8]/50 rounded-md py-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm uppercase tracking-wider text-white/70">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    {...field}
                    className="bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-[#3275F8]/50 focus:ring-[#3275F8]/50 rounded-md py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm uppercase tracking-wider text-white/70">Contact Number (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    {...field}
                    className="bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-[#3275F8]/50 focus:ring-[#3275F8]/50 rounded-md py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-sm uppercase tracking-wider text-white/70">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    {...field}
                    className="bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-[#3275F8]/50 focus:ring-[#3275F8]/50 rounded-md min-h-[140px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
          <Button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-md bg-[#3275F8] text-white font-semibold uppercase tracking-[0.12em] text-sm md:text-base hover:bg-[#3275F8]/85 hover:shadow-[0_0_15px_rgba(50,117,248,0.3)] transition-all">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
