"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isLegalPage = ["/impressum", "/datenschutz"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isLegalPage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 px-4 md:px-0">
      <header
        className={cn(
          "relative w-full md:w-[800px] h-12 flex items-center justify-between px-8 rounded-2xl",
          "bg-white/60 backdrop-blur-md border border-white/20",
          scrolled
            ? "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] ring-[0.5px] ring-black/5"
            : "shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)]"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 text-lg font-bold tracking-tight text-gray-800 hover:text-gray-600 transition-colors"
        >
          devware.
        </Link>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center">
          <div className="flex gap-8 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Kontakt
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
