"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ArrowLeft,
  Clock,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type React from "react";

export default function ContactPage() {
  // ✅ PERBAIKAN: Buat hook terpisah untuk tiap section
  // Hook untuk section kartu
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hook untuk section form
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@techvision.com",
      description: "Send us an email and we'll respond within 24 hours",
      href: "mailto:hello@techvision.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us Monday to Friday, 9 AM to 6 PM EST",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "123 Tech Street, San Francisco, CA 94105",
      href: "#",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.techvision.com",
      description: "Visit our website for more information",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10 mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 mb-6 bg-transparent"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Have a project in mind? We would love to hear from you. Send us a
              message and we will respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            // ✅ PERBAIKAN: Gunakan ref dan inView untuk section kartu
            ref={cardsRef}
            variants={containerVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-muted/50 border-primary/10">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">
                      {info.value}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {info.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            // ✅ PERBAIKAN: Gunakan ref dan inView untuk section form
            ref={formRef}
            variants={containerVariants}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gradient-to-br from-card to-muted/50 border-primary/10">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 mb-6"
                  >
                    <CheckCircle className="text-green-600" size={20} />
                    <div>
                      <p className="font-semibold text-green-900">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-700">
                        We will get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Info Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Why Choose TechVision?
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  We are not just a technology company we are your strategic
                  partner in digital transformation. Our team is dedicated to
                  understanding your unique challenges and delivering solutions
                  that drive real business value.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Clock,
                    title: "Quick Response",
                    description: "We respond to inquiries within 24 hours",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    description: "Serving clients across multiple continents",
                  },
                  {
                    icon: CheckCircle,
                    title: "Proven Track Record",
                    description: "1000+ successful projects delivered",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-foreground/60">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-bold text-primary">
                    Ready to get started?
                  </span>{" "}
                  Contact us today and let us discuss how we can help transform
                  your business through innovative technology solutions.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
