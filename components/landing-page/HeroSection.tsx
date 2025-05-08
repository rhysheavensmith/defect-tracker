"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import VideoModal from "@/components/shared/VideoModal";
import ScrollIndicator from "@/components/ui/scroll-indicator/ScrollIndicator";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative h-[100vh] flex items-center justify-center">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="text-center space-y-8">
          <motion.h1
            variants={item}
            className="font-headings text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Track smarter, fix faster
          </motion.h1>

          <motion.h2
            variants={item}
            className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered defect tracking built by engineers for engineers.
          </motion.h2>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button size="lg" className="min-w-[200px] cursor-pointer">
              <ArrowRight className="mr-2 h-4 w-4" />
              Start Free Trial
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] group cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <PlayCircle className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <ScrollIndicator />

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        title="Product Demo"
      />
    </div>
  );
};

export default HeroSection;
