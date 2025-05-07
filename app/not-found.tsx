"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Cog, Wrench, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute opacity-5 dark:opacity-10"
      >
        <Cog size={400} className="text-foreground" />
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute opacity-5 dark:opacity-10 -right-20 top-20"
      >
        <Cog size={300} className="text-foreground" />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -45, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          >
            <Wrench size={48} className="text-primary mr-2" />
          </motion.div>
          <h1 className="text-6xl font-black font-headings text-foreground">
            404
          </h1>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Looks like this component needs maintenance
        </h2>

        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Our engineering team has detected a malfunction. The page you&apos;re
          looking for might have been decommissioned or relocated to a different
          assembly line.
        </p>

        <Link href="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft size={16} />
            Back to Main Control Panel
          </Button>
        </Link>
      </div>
    </div>
  );
}
