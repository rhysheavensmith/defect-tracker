"use client";

import { motion } from "motion/react";
import { Wrench, Zap, Brain, Factory, LucideIcon } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.01, y: -2 }}
    whileTap={{ scale: 0.99 }}
    transition={{
      scale: { duration: 0 },
      y: { duration: 0.2 },
    }}
    className="relative group bg-card p-8 rounded-xl border border-border hover:border-primary/20 hover:shadow-lg dark:hover:shadow-primary/5 h-[200px] flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex-1">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const AboutSection = () => {
  const features = [
    {
      icon: Factory,
      title: "Built by the Factory Floor",
      description:
        "Created by engineers who&apos;ve lived through the chaos of breakdowns and understand what really matters.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "No more waiting around. Track and resolve issues at the speed of thought.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Smart suggestions and pattern recognition to prevent issues before they occur.",
    },
    {
      icon: Wrench,
      title: "Affordable Solutions",
      description:
        "Unlimited lines, unlimited machines, and unlimited users — all for one low monthly cost.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black font-headings mb-6 text-foreground">
            Say goodbye to clunky CMMS software.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most maintenance software was built by people who&apos;ve never
            picked up a wrench. We&apos;re different. We&apos;ve worked on the
            factory floor, we&apos;ve fought breakdowns under pressure, and we
            know what matters: speed, clarity, and ease of use.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-center text-primary font-semibold mt-16"
        >
          So we built the tool we always wished we had.
          <span className="block mt-2 text-2xl text-foreground">
            One that&apos;s fast, simple, and smart.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
