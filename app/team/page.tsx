"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Visionary leader with 15+ years in tech innovation",
      fullBio:
        "Sarah founded TechVision with a mission to revolutionize how businesses approach digital transformation. Her strategic vision and leadership have guided the company through rapid growth and industry recognition.",
      expertise: [
        "Strategic Leadership",
        "Digital Transformation",
        "Business Development",
        "Innovation Strategy",
      ],
      email: "sarah@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Expert in cloud architecture and scalable systems",
      fullBio:
        "Michael leads our technical strategy and architecture decisions. With expertise in cloud infrastructure and distributed systems, he ensures our solutions are scalable, secure, and future-proof.",
      expertise: [
        "Cloud Architecture",
        "System Design",
        "DevOps",
        "Security Infrastructure",
      ],
      email: "michael@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Creative designer focused on user experience",
      fullBio:
        "Emma leads our design team with a focus on creating intuitive and beautiful user experiences. Her design philosophy centers on understanding user needs and translating them into elegant solutions.",
      expertise: [
        "UX/UI Design",
        "Design Systems",
        "User Research",
        "Brand Strategy",
      ],
      email: "emma@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      image: "👨‍💼",
      bio: "Full-stack developer with passion for clean code",
      fullBio:
        "David oversees our development team and maintains our commitment to code quality and best practices. His expertise spans full-stack development and he mentors junior developers to grow their skills.",
      expertise: [
        "Full-Stack Development",
        "Code Architecture",
        "Team Leadership",
        "Performance Optimization",
      ],
      email: "david@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager",
      image: "👩‍💼",
      bio: "Strategic product leader with market insights",
      fullBio:
        "Lisa drives our product strategy and ensures we're building solutions that truly solve customer problems. Her data-driven approach and market expertise guide our product roadmap.",
      expertise: [
        "Product Strategy",
        "Market Analysis",
        "Customer Discovery",
        "Roadmap Planning",
      ],
      email: "lisa@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      id: 6,
      name: "James Martinez",
      role: "Head of Sales",
      image: "👨‍💼",
      bio: "Relationship builder with proven sales track record",
      fullBio:
        "James leads our sales and business development efforts. His ability to build strong client relationships and understand business needs has been instrumental in our growth.",
      expertise: [
        "Sales Strategy",
        "Client Relations",
        "Business Development",
        "Account Management",
      ],
      email: "james@techvision.com",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
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
              Meet Our <span className="text-primary">Talented Team</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Dedicated professionals committed to delivering excellence and
              driving innovation in every project we undertake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-muted/50 border-primary/10">
                  <div className="text-7xl mb-6">{member.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {member.fullBio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/60 mb-3">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-6 border-t border-border">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      title="Email"
                    >
                      <Mail size={20} className="text-primary" />
                    </motion.a>
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={20} className="text-primary" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                      title="Twitter"
                    >
                      <Twitter size={20} className="text-accent" />
                    </motion.a>
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
