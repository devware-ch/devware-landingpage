"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  const isLegalPage = ["/impressum", "/datenschutz"].includes(pathname);

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
    <footer className="relative z-10">
      <div className="bg-white/90 dark:bg-[#0F1322]/90 backdrop-blur-sm border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-12">
            {/* Logo und Kontakt */}
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                devware.
              </Link>
              <div className="text-neutral-600 dark:text-neutral-400 text-center">
                <p className="font-medium">Kontakt:</p>
                <a
                  href="mailto:info@devware.ch"
                  className="hover:text-[#3B82F6] transition-colors"
                >
                  info@devware.ch
                </a>
              </div>
            </div>

            {/* Navigation und rechtliche Links */}
            <nav className="flex flex-col items-center gap-8">
              {/* Hauptnavigation */}
              <div className="flex gap-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("about")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors uppercase text-sm font-medium"
                >
                  Über uns
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors uppercase text-sm font-medium"
                >
                  Kontakt
                </motion.button>
              </div>

              {/* Rechtliche Links */}
              <div className="flex gap-8">
                <Link
                  href="/impressum"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors text-sm underline underline-offset-4"
                >
                  Impressum
                </Link>
                <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
                <Link
                  href="/datenschutz"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-[#3B82F6] dark:hover:text-[#3B82F6] transition-colors text-sm underline underline-offset-4"
                >
                  Datenschutz
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
