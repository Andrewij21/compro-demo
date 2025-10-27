"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "TechStart Inc",
      role: "CEO",
      image: "👨‍💼",
      text: "TechVision transformed our entire digital infrastructure. Their team was professional, innovative, and delivered beyond expectations. We saw a 40% increase in efficiency within the first quarter.",
      rating: 5,
      result: "40% efficiency increase",
    },
    {
      name: "Lisa Wang",
      company: "Global Solutions Ltd",
      role: "CTO",
      image: "👩‍💼",
      text: "Working with TechVision was a game-changer for our business. They understood our needs and delivered solutions that truly made a difference. Their support team is exceptional.",
      rating: 5,
      result: "50% cost reduction",
    },
    {
      name: "James Miller",
      company: "Innovation Hub",
      role: "Product Manager",
      image: "👨‍💻",
      text: "Exceptional service and outstanding results. The team at TechVision is truly dedicated to their craft and customer success. They went above and beyond our expectations.",
      rating: 5,
      result: "3x faster deployment",
    },
    {
      name: "Maria Garcia",
      company: "Digital Ventures",
      role: "Founder",
      image: "👩‍💼",
      text: "The expertise and professionalism of TechVision's team is unmatched. They helped us scale our platform to handle 10x more users without any issues.",
      rating: 5,
      result: "10x scalability",
    },
    {
      name: "Robert Chen",
      company: "Enterprise Systems",
      role: "VP Engineering",
      image: "👨‍💼",
      text: "Outstanding technical expertise combined with excellent communication. TechVision delivered our project on time and within budget, which is rare in this industry.",
      rating: 5,
      result: "On-time delivery",
    },
    {
      name: "Sarah Johnson",
      company: "Creative Agency",
      role: "Managing Director",
      image: "👩‍💼",
      text: "TechVision's innovative approach and attention to detail transformed our vision into reality. Their team is responsive, professional, and truly cares about client success.",
      rating: 5,
      result: "Award-winning solution",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="testimonials"
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
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from real clients who have experienced our services
            and achieved remarkable results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-muted/50 border-primary/10 flex flex-col">
                {/* Quote Icon */}
                <Quote className="text-primary/20 mb-3" size={24} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 mb-6 leading-relaxed flex-grow">
                  {testimonial.text}
                </p>

                {/* Result Badge */}
                <div className="mb-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-xs font-semibold text-primary">
                    {testimonial.result}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
