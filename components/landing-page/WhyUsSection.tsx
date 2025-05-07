"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Wrench, Brain, CheckCircle2 } from "lucide-react";

const FeatureList = ({ items }: { items: string[] }) => (
  <div className="space-y-3">
    {items.map((item, index) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="flex items-center gap-2 text-muted-foreground"
      >
        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
        <span>{item}</span>
      </motion.div>
    ))}
  </div>
);

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engineer Built Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/grinding.jpg"
                alt="Engineer grinding steel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-primary">
              <Wrench className="h-5 w-5" />
              <span className="font-semibold tracking-wide">
                ENGINEER-BUILT FOR ENGINEERS
              </span>
            </div>
            <h2 className="text-4xl font-black font-headings">
              Built by people who&apos;ve walked the floor.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We spent years in manufacturing plants, managing breakdowns, and
                swearing at bloated, outdated software.
              </p>
              <p>
                This isn&apos;t just another SaaS product. It&apos;s a
                battle-tested tool forged from real-world pain. That&apos;s why
                it&apos;s fast. That&apos;s why it&apos;s simple. That&apos;s
                why it works.
              </p>
            </div>
          </motion.div>
        </div>

        {/* AI Powered Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="space-y-6 lg:order-2"
          >
            <div className="flex items-center gap-2 text-primary">
              <Brain className="h-5 w-5" />
              <span className="font-semibold tracking-wide">
                AI-POWERED DIAGNOSTICS
              </span>
            </div>
            <h2 className="text-4xl font-black font-headings">
              Let AI tell you what breaks — and how to fix it.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Every time you log a defect, our AI gets smarter — learning your
                machines, common faults, and what&apos;s worked in the past. We
                surface real-time suggestions, root cause patterns, and
                preventative maintenance actions before breakdowns happen.
              </p>
            </div>
            <FeatureList
              items={[
                "Real-time AI recommendations",
                "Machine learning on your history",
                "No complex setup — just switch it on",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:order-1 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
          >
            <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
              <Image
                src="/engineer-laptop.jpg"
                alt="Engineer working on laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
