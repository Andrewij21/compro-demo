"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "Visionary leader with 15+ years in tech innovation",
      fullBio:
        "Sarah founded TechVision with a mission to revolutionize digital transformation. Her strategic vision has guided the company through rapid growth and industry recognition.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      bio: "Expert in cloud architecture and scalable systems",
      fullBio:
        "Michael leads technical strategy and architecture decisions, ensuring solutions are scalable, secure, and future-proof.",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Creative designer focused on user experience",
      fullBio:
        "Emma leads the design team with a focus on creating intuitive and beautiful user experiences that solve real problems.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "👨‍💼",
      bio: "Full-stack developer with passion for clean code",
      fullBio:
        "David oversees development and maintains commitment to code quality, mentoring junior developers to grow their skills.",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Talented professionals dedicated to delivering excellence and
            driving innovation in every project we undertake.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow group cursor-pointer bg-gradient-to-br from-card to-muted/50 border-primary/10 h-full flex flex-col">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-foreground/70 mb-2">{member.bio}</p>
                <p className="text-xs text-foreground/60 mb-4 flex-grow leading-relaxed">
                  {member.fullBio}
                </p>
                <div className="flex justify-center gap-3 pt-4 border-t border-border">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} className="text-primary" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                    title="Twitter"
                  >
                    <Twitter size={18} className="text-accent" />
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Team Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            View Full Team & Expertise
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
