"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProjectsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "🛍️",
      description:
        "Full-featured e-commerce platform with payment integration and inventory management",
      fullDescription:
        "A comprehensive e-commerce solution built with Next.js and React. Features include real-time inventory management, secure payment processing, user authentication, and advanced analytics dashboard.",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      results: ["40% increase in sales", "50K+ active users", "99.9% uptime"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "📱",
      description:
        "Secure mobile banking application with real-time transactions and analytics",
      fullDescription:
        "A secure mobile banking application supporting iOS and Android. Includes biometric authentication, real-time transaction updates, bill payments, and comprehensive financial analytics.",
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "MongoDB",
        "Stripe",
      ],
      results: ["100K+ downloads", "4.8★ rating", "Secure transactions"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "AI Analytics Dashboard",
      category: "web",
      image: "📊",
      description:
        "Advanced analytics platform powered by machine learning algorithms",
      fullDescription:
        "An intelligent analytics platform that uses machine learning to provide predictive insights. Features real-time data visualization, custom report generation, and AI-powered recommendations.",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      results: [
        "30% faster insights",
        "ML accuracy 95%",
        "Real-time processing",
      ],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Cloud Management System",
      category: "web",
      image: "☁️",
      description:
        "Enterprise cloud infrastructure management and monitoring platform",
      fullDescription:
        "A comprehensive cloud management system for monitoring and managing multi-cloud infrastructure. Includes automated scaling, cost optimization, and security compliance features.",
      technologies: ["Kubernetes", "Docker", "Go", "React", "AWS"],
      results: ["60% cost reduction", "99.99% uptime", "Auto-scaling"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "web",
      image: "👥",
      description:
        "Modern social networking platform with real-time messaging and content sharing",
      fullDescription:
        "A feature-rich social media platform with real-time messaging, content sharing, user profiles, and community features. Built with scalability and performance in mind.",
      technologies: ["Next.js", "WebSocket", "Redis", "MongoDB", "AWS"],
      results: ["500K+ users", "Real-time messaging", "Viral content support"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "IoT Smart Home Hub",
      category: "mobile",
      image: "🏠",
      description:
        "Intelligent home automation system with voice control and AI learning",
      fullDescription:
        "A smart home hub that integrates with various IoT devices. Features voice control, automated routines, energy monitoring, and machine learning for predictive automation.",
      technologies: ["IoT", "Python", "React Native", "MQTT", "TensorFlow"],
      results: ["1000+ devices supported", "Voice control", "Energy savings"],
      link: "#",
      github: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
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
              Our <span className="text-primary">Projects & Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Showcase of successful projects and innovative solutions we have
              delivered to clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={selectedCategory} // <-- ✅ PERBAIKAN DI SINI
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/50 border-primary/10 flex flex-col">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-7xl">
                    {project.image}
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-4">
                      {project.category.toUpperCase()}
                    </p>
                    <p className="text-foreground/70 mb-6 leading-relaxed flex-grow">
                      {project.fullDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground/60 mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-sm font-semibold text-foreground/60 mb-3">
                        Key Results
                      </p>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li
                            key={index}
                            className="text-sm text-foreground/70 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-6 border-t border-border">
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1"
                      >
                        <Button className="w-full gap-2">
                          <ExternalLink size={16} />
                          View Project
                        </Button>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full gap-2 bg-transparent"
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
