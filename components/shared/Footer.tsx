"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode =
    mounted &&
    (theme === "dark" || (theme === "system" && systemTheme === "dark"));
  const logoSrc = isDarkMode ? "/track-zero-white.png" : "/track-zero.png";

  const navigation = {
    product: [
      { name: "Features", href: "/#about" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Contact", href: "/#contact" },
    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Why Us", href: "/#why-us" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc}
                alt="TrackZero"
                width={120}
                height={120}
                className="h-32 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="col-span-3 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrackZero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
