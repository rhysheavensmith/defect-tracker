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
import { usePathname } from "next/navigation";

// Custom hook to track section visibility
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // If we're on a non-hash route, set it as active
    if (pathname && pathname !== "/") {
      setActiveSection(pathname);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId ? `/#${sectionId}` : "");
          }
        });
      },
      {
        rootMargin: "-65% 0px -35% 0px", // Only trigger when well into the section
        threshold: 0,
      }
    );

    // Observe all sections
    const sections = ["about", "why-us", "pricing", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [pathname]);

  return {
    activeSection,
    setActiveSection,
  };
};

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
    { label: "Contact", href: "/#contact" },
    { label: "Blog", href: "/blog" },
    { label: "How It Works", href: "#", onClick: onHowItWorks, isModal: true },
  ];

  const { activeSection, setActiveSection } = useActiveSection();

  const handleClick = (href: string) => {
    setActiveSection(href);
  };

  return (
    <div className={`flex items-center ${className}`}>
      {items.map((item) => {
        const isActive =
          !item.isModal &&
          (item.href === activeSection ||
            (item.href.startsWith("/#") &&
              activeSection === item.href.substring(1)));

        const itemClasses = `block px-3 py-2 transition-colors cursor-pointer ${
          isActive
            ? "text-primary font-medium"
            : "text-muted-foreground hover:text-primary"
        }`;

        return (
          <div key={item.label}>
            {item.onClick ? (
              <button onClick={item.onClick} className={itemClasses}>
                {item.label}
              </button>
            ) : (
              <Link
                href={item.href}
                className={itemClasses}
                onClick={() => handleClick(item.href)}
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
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
          <div className="flex-shrink-0">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <NavItems
              className="space-x-8"
              onHowItWorks={() => setShowVideo(true)}
            />
          </div>

          {/* Right Side Elements */}
          <div className="hidden md:flex items-center space-x-4">
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
                <SheetHeader className="border-b p-3">
                  <SheetTitle className="flex items-center">
                    <Image
                      src={logoSrc}
                      alt="TrackZero"
                      width={100}
                      height={100}
                      className="h-16 w-auto"
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
