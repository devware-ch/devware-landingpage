"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <main className="relative">
      <AuroraBackground className="min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative flex flex-col gap-8 items-center justify-center min-h-[80vh] px-4 max-w-4xl mx-auto text-center"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light text-neutral-700 dark:text-neutral-300"
            >
              Willkommen bei
            </motion.p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
              DevWare
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light text-neutral-700 dark:text-neutral-300 max-w-2xl"
          >
            Entwickeln Sie Ihre Ideen mit modernster Technologie und erstklassiger Entwicklererfahrung.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <button className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-transform">
              Jetzt kontaktieren
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-medium hover:scale-105 transition-transform">
              Mehr erfahren
            </button>
          </motion.div>
        </motion.div>
      </AuroraBackground>
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <ServicesSection />
        <AboutSection />
      </div>
    </main>
  );
}
