"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingCard = ({
  plan,
  price,
  period,
  features,
  isPopular,
}: {
  plan: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={`relative rounded-2xl p-8 ${
      isPopular
        ? "bg-primary text-primary-foreground shadow-xl dark:shadow-primary/20 border-2 border-primary"
        : "bg-card border border-border hover:border-primary/20 hover:shadow-lg dark:hover:shadow-primary/5"
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-2">{plan}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black">{price}</span>
        <span
          className={`text-lg ${
            isPopular ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          /{period}
        </span>
      </div>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <div
            className={`p-1 rounded-full ${
              isPopular ? "bg-primary-foreground/20" : "bg-primary/10"
            }`}
          >
            <Check className="h-4 w-4" />
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      className={`w-full cursor-pointer ${
        isPopular
          ? "bg-primary-foreground hover:text-green-800 text-primary hover:bg-primary-foreground dark:hover:bg-primary-foreground"
          : ""
      }`}
      variant={isPopular ? "ghost" : "default"}
    >
      Start Free Trial
    </Button>
  </motion.div>
);

const PricingSection = () => {
  const features = [
    "Unlimited lines",
    "Unlimited machines",
    "Unlimited users",
    "No training required",
    "No setup fees",
    "No contracts",
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black font-headings mb-6 text-foreground">
            One flat price. No limits.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlike old-school CMMS tools that charge per user or machine, we
            believe in one simple plan:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PricingCard
              plan="Monthly"
              price="$100"
              period="month"
              features={features}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PricingCard
              plan="Annual"
              price="$999"
              period="year"
              features={features}
              isPopular
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-center text-primary font-semibold mt-16"
        >
          That&apos;s it.
          <span className="block mt-2 text-foreground">
            Start your free trial today.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
