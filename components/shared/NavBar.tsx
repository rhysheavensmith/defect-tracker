"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import VideoModal from "@/components/shared/VideoModal";
import ThemeToggle from "@/components/shared/ThemeToggle";

const NavItems = ({
  className = "",
  onHowItWorks,
}: {
  className?: string;
  onHowItWorks?: () => void;
}) => {
  const items = [
    { label: "About", href: "/#about" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Pricing", href: "/#pricing" },
    { label: "How It Works", href: "#", onClick: onHowItWorks },
  ];

  return (
    <div className={`flex ${className}`}>
      {items.map((item) =>
        item.onClick ? (
          <button
            key={item.label}
            onClick={item.onClick}
            className="text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
          >
            {item.label}
          </button>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
};

const NavBar = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode =
    mounted &&
    (theme === "dark" || (theme === "system" && systemTheme === "dark"));
  const logoSrc = isDarkMode ? "/track-zero-white.png" : "/track-zero.png";

  return (
    <nav className="w-full border-b border-border bg-background/75 backdrop-blur-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logoSrc}
              alt="TrackZero"
              width={160}
              height={160}
              className="h-42 w-auto max-sm:h-24 max-sm:w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems
              className="space-x-8"
              onHowItWorks={() => setShowVideo(true)}
            />
            <ThemeToggle />
            <Button className="cursor-pointer">Sign In</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent cursor-pointer"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="border-b">
                  <SheetTitle className="flex items-center">
                    <Image
                      src={logoSrc}
                      alt="TrackZero"
                      width={120}
                      height={120}
                      className="h-24 w-auto"
                      priority
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col px-6 py-8">
                  <div className="flex flex-col space-y-4">
                    <NavItems
                      className="flex-col space-y-4 text-lg"
                      onHowItWorks={() => setShowVideo(true)}
                    />
                  </div>
                  <div className="mt-8 pt-8 border-t border-border space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Theme</span>
                      <ThemeToggle />
                    </div>
                    <Button className="w-full cursor-pointer" size="lg">
                      Sign In
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        title="How It Works"
      />
    </nav>
  );
};

export default NavBar;
