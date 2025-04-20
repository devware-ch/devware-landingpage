"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
          Willkommen bei DevWare
        </h1>
        <p className="text-lg md:text-xl font-light text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Entwickeln Sie Ihre Ideen mit modernster Technologie und erstklassiger Entwicklererfahrung.
        </p>
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:scale-105 transition-transform">
            Jetzt starten
          </button>
          <button className="px-6 py-3 rounded-full border border-black dark:border-white text-black dark:text-white font-medium hover:scale-105 transition-transform">
            Mehr erfahren
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
