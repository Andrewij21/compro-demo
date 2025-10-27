"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const visionMissionData = [
    {
      title: "Our Vision",
      icon: "🎯",
      content:
        "To be the leading technology partner transforming businesses through innovative digital solutions that create lasting impact and drive sustainable growth in the digital economy.",
    },
    {
      title: "Our Mission",
      icon: "🚀",
      content:
        "Empower organizations with cutting-edge technology, strategic expertise, and dedicated support to achieve their digital transformation goals and unlock new opportunities for success.",
    },
    {
      title: "Our Motto",
      icon: "💡",
      content:
        "Innovation Today, Success Tomorrow - Delivering excellence through technology and partnership.",
    },
  ];

  const companyValues = [
    {
      title: "Innovation",
      description:
        "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards of quality in everything we do, from code to customer service.",
    },
    {
      title: "Partnership",
      description:
        "We work closely with our clients as true partners, invested in their long-term success.",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency and honesty, building trust through consistent ethical practices.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">TechVision</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-4 leading-relaxed">
              We are a forward-thinking technology company dedicated to
              delivering innovative solutions that transform businesses and
              empower organizations to thrive in the digital age. Founded in
              2009, TechVision has grown from a small startup to a trusted
              partner for enterprises worldwide.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With over 15 years of experience, our team of experts combines
              cutting-edge technology with strategic thinking to create
              solutions that drive real business value. We have successfully
              completed over 1,000 projects for clients across diverse
              industries including finance, healthcare, retail, and technology.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Industry-leading expertise and innovation",
                "Customer-centric approach to every project",
                "Proven track record of success",
                "Dedicated support and partnership",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-foreground/60 font-semibold">
                  Innovation in Action
                </p>
                <p className="text-sm text-foreground/50 mt-2">
                  Transforming ideas into reality
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision, Mission, Motto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
          {visionMissionData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all duration-300 border-primary/20">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our <span className="text-primary">Core Values</span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-secondary/5 to-accent/5 hover:shadow-lg transition-all duration-300 border-secondary/20">
                  <h4 className="text-xl font-bold mb-3 text-secondary">
                    {value.title}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
