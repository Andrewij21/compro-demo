"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Code2, Smartphone, BarChart3, Shield, Zap, Users } from "lucide-react";
import type { FC, ElementType } from "react"; // Import tipe dari React

// --- DEFINISI TIPE (untuk Type Safety) ---

interface CaseStudy {
  title: string;
  result: string;
  description: string;
}

interface Service {
  id: string;
  icon: ElementType; // Tipe untuk komponen React (seperti Code2, Smartphone, dll.)
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudies: CaseStudy[];
  price: string;
}

// Props untuk komponen ServiceCard yang baru
interface ServiceCardProps {
  service: Service;
  index: number;
}

// --- KOMPONEN BARU (Perbaikan Bug Animasi) ---
// Komponen ini mengelola state animasinya sendiri
const ServiceCard: FC<ServiceCardProps> = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Kartu akan muncul saat 10% terlihat
  });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref} // Ref unik untuk setiap kartu
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // State inView unik
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-primary/10 bg-gradient-to-br from-card to-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon className="text-primary" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-primary font-semibold text-sm mt-1">
                  {service.price}
                </p>
              </div>
            </div>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/#contact">
              <Button className="gap-2 w-full sm:w-auto">
                Get Started
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="border-t border-border p-8 md:p-12 bg-muted/30">
          <h3 className="text-2xl font-bold mb-6">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.caseStudies.map((study, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all"
              >
                <p className="text-primary font-bold text-lg mb-2">
                  {study.result}
                </p>
                <h4 className="text-lg font-bold mb-3">{study.title}</h4>
                <p className="text-foreground/70">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

// --- KOMPONEN UTAMA (ServicesPage) ---
export default function ServicesPage() {
  // ❌ Hook useInView dihapus dari sini untuk memperbaiki bug
  // const { ref, inView } = useInView({ ... });

  // ✅ Menambahkan tipe Service[] untuk type safety
  const services: Service[] = [
    {
      id: "web-development",
      icon: Code2,
      title: "Web Development",
      shortDescription:
        "Custom web applications built with modern technologies",
      fullDescription:
        "We create powerful, scalable web applications tailored to your business needs. Our team specializes in building responsive, user-friendly websites and web applications using the latest technologies and best practices.",
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development",
        "Performance Optimization",
      ],
      benefits: [
        "Increased online visibility",
        "Better user engagement",
        "Higher conversion rates",
        "Scalable architecture",
        "Improved SEO rankings",
        "Mobile-first approach",
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
      ],
      caseStudies: [
        {
          title: "E-Commerce Platform Redesign",
          result: "40% increase in sales",
          description:
            "Redesigned and rebuilt an e-commerce platform resulting in improved user experience and higher conversion rates.",
        },
        {
          title: "SaaS Application Development",
          result: "50K+ active users",
          description:
            "Built a comprehensive SaaS platform with real-time collaboration features and advanced analytics.",
        },
      ],
      price: "Starting from $5,000",
    },
    {
      id: "mobile-apps",
      icon: Smartphone,
      title: "Mobile Apps",
      shortDescription: "Native and cross-platform mobile solutions",
      fullDescription:
        "Develop high-performance mobile applications for iOS and Android. We create engaging, intuitive mobile experiences that keep users coming back.",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "Push Notifications",
        "Offline Functionality",
        "App Store Optimization",
      ],
      benefits: [
        "Reach millions of users",
        "Offline access capability",
        "Native performance",
        "Seamless user experience",
        "Real-time synchronization",
        "Secure data handling",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      caseStudies: [
        {
          title: "Mobile Banking App",
          result: "100K+ downloads",
          description:
            "Developed a secure banking app with biometric authentication and real-time transactions.",
        },
        {
          title: "Fitness Tracking App",
          result: "4.8★ rating",
          description:
            "Created a feature-rich fitness app with social features and AI-powered recommendations.",
        },
      ],
      price: "Starting from $8,000",
    },
    {
      id: "data-analytics",
      icon: BarChart3,
      title: "Data Analytics",
      shortDescription: "Transform data into actionable insights",
      fullDescription:
        "Unlock the power of your data with our advanced analytics solutions. We help you understand customer behavior, optimize operations, and make data-driven decisions.",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Business Intelligence",
        "Real-time Dashboards",
        "Custom Reports",
        "Machine Learning Models",
      ],
      benefits: [
        "Better decision making",
        "Identify trends early",
        "Optimize operations",
        "Increase revenue",
        "Reduce costs",
        "Competitive advantage",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "D3.js",
        "PostgreSQL",
        "Apache Spark",
      ],
      caseStudies: [
        {
          title: "Retail Analytics Platform",
          result: "30% increase in efficiency",
          description:
            "Built an analytics platform that helped retailers optimize inventory and pricing strategies.",
        },
        {
          title: "Customer Behavior Analysis",
          result: "25% revenue growth",
          description:
            "Implemented ML models to predict customer churn and identify upsell opportunities.",
        },
      ],
      price: "Starting from $6,000",
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      shortDescription: "Comprehensive security solutions",
      fullDescription:
        "Protect your digital assets with our comprehensive cybersecurity solutions. We implement industry-leading security practices to safeguard your business.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Compliance Management",
        "Incident Response",
        "Security Training",
      ],
      benefits: [
        "Protect sensitive data",
        "Comply with regulations",
        "Prevent data breaches",
        "Reduce security risks",
        "Peace of mind",
        "Business continuity",
      ],
      technologies: ["Kubernetes", "Docker", "AWS Security", "Vault", "Snyk"],
      caseStudies: [
        {
          title: "Enterprise Security Overhaul",
          result: "Zero breaches in 2 years",
          description:
            "Implemented comprehensive security framework for a Fortune 500 company.",
        },
        {
          title: "Compliance Certification",
          result: "ISO 27001 Certified",
          description:
            "Guided organization through security compliance and certification process.",
        },
      ],
      price: "Starting from $4,000",
    },
    {
      id: "cloud-solutions",
      icon: Zap,
      title: "Cloud Solutions",
      shortDescription: "Scalable cloud infrastructure",
      fullDescription:
        "Migrate to the cloud and scale your infrastructure effortlessly. We provide end-to-end cloud solutions with expert guidance and support.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster Recovery",
        "Cost Optimization",
        "Multi-cloud Strategy",
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability",
        "High availability",
        "Automatic backups",
        "Global reach",
        "Reduced maintenance",
      ],
      technologies: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Terraform"],
      caseStudies: [
        {
          title: "Cloud Migration Project",
          result: "60% cost reduction",
          description:
            "Successfully migrated legacy systems to cloud with zero downtime.",
        },
        {
          title: "Multi-cloud Strategy",
          result: "99.99% uptime",
          description:
            "Implemented multi-cloud architecture for improved reliability and performance.",
        },
      ],
      price: "Starting from $7,000",
    },
    {
      id: "consulting",
      icon: Users,
      title: "Consulting",
      shortDescription: "Strategic guidance for digital transformation",
      fullDescription:
        "Get expert guidance on your digital transformation journey. Our consultants help you navigate technology decisions and optimize your digital strategy.",
      features: [
        "Digital Strategy",
        "Technology Assessment",
        "Process Optimization",
        "Team Training",
        "Change Management",
        "Roadmap Planning",
      ],
      benefits: [
        "Clear technology roadmap",
        "Optimized processes",
        "Reduced risks",
        "Faster time to market",
        "Better ROI",
        "Competitive advantage",
      ],
      technologies: ["Agile", "DevOps", "Lean", "Design Thinking"],
      caseStudies: [
        {
          title: "Digital Transformation",
          result: "50% faster delivery",
          description:
            "Guided organization through complete digital transformation initiative.",
        },
        {
          title: "Process Optimization",
          result: "40% cost savings",
          description:
            "Optimized business processes resulting in significant cost reduction.",
        },
      ],
      price: "Custom pricing",
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      <Navigation />

      {/* Hero Section (Tidak diubah) */}
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Comprehensive solutions tailored to meet your unique business
              needs and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* ✅ Menggunakan komponen ServiceCard untuk perbaikan bug */}
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
