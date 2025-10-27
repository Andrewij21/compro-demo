"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "web-development",
      icon: Code2,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices.",
      fullDescription:
        "From responsive websites to complex web applications, we build scalable solutions that drive business growth.",
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions for iOS and Android.",
      fullDescription:
        "Create engaging mobile experiences that keep users coming back with our expert development team.",
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights for better decision making.",
      fullDescription:
        "Unlock the power of your data with advanced analytics and machine learning solutions.",
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets.",
      fullDescription:
        "Protect your business with enterprise-grade security and compliance solutions.",
    },
    {
      id: "cloud-solutions",
      icon: Zap,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      fullDescription:
        "Migrate to the cloud and scale your infrastructure with confidence and support.",
    },
    {
      id: "consulting",
      icon: Users,
      title: "Consulting",
      description:
        "Strategic guidance to optimize your digital transformation journey.",
      fullDescription:
        "Get expert advice on technology strategy and digital transformation initiatives.",
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
    <section id="services" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs
            and drive growth. Each service is designed with your success in
            mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href="/services">
                  <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 cursor-pointer group border-primary/10 bg-gradient-to-br from-card to-muted/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-foreground/60 text-xs mb-4 line-clamp-2">
                      {service.fullDescription}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight size={16} />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
