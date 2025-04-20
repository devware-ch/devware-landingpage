"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
      <header
        className={cn(
          "relative w-[800px] h-12 flex items-center justify-between px-8 rounded-2xl",
          "bg-black/75 backdrop-blur-md",
          scrolled ? "shadow-lg shadow-black/20" : "shadow-md shadow-black/10"
        )}
      >
        {/* Logo */}
        <Link 
          href="/"
          className="relative z-10 text-lg font-bold tracking-tight text-white/90 hover:text-white transition-colors"
        >
          Devware.
        </Link>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center">
          <div className="flex gap-8 text-sm font-medium">
            <Link 
              href="/about"
              className="text-white/75 hover:text-white transition-colors"
            >
              Über uns
            </Link>
            <Link 
              href="/contact"
              className="text-white/75 hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
