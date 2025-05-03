"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isLegalPage = ["/impressum", "/datenschutz"].includes(pathname);

  useEffect(() => {
    const SCROLL_THRESHOLD = 750; // px, ab wann das Verhalten aktiv wird
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < SCROLL_THRESHOLD) {
        setHidden(false); // Immer sichtbar im oberen Bereich
      } else {
        // Überprüfe die Scroll-Richtung
        if (currentScrollY > lastScrollY) {
          setHidden(true); // Nach unten scrollen → ausblenden
        } else {
          setHidden(false); // Nach oben scrollen → einblenden
        }
      }

      // Setze den Schatten-Effekt
      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <div
      className={cn(
        "fixed top-6 left-0 right-0 flex justify-center z-50 px-4 md:px-0",
        "transition-transform duration-700 ease-in-out",
        hidden && "-translate-y-24"
      )}
    >
      <header
        className={cn(
          "relative w-full md:w-[800px] h-12 flex items-center justify-between px-8 rounded-2xl",
          "bg-white/60 backdrop-blur-md border border-white/20",
          "transition-all duration-700 ease-in-out",
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
