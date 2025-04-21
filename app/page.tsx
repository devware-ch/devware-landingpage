"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Code, Palette, Rocket, Gauge, Sparkles, Target, Trophy, Fingerprint, Laptop, Zap, Bot } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technologien",
    description: "Moderne und skalierbare Webanwendungen mit Next.js, React und TypeScript."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Benutzerfreundliche und ästhetische Designs, die Ihre Marke perfekt repräsentieren."
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance",
    description: "Optimierte Ladezeiten und beste Performance für Ihre Webseite."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Suchmaschinenoptimierung und digitale Strategien für mehr Reichweite."
  }
];

export default function Home() {
  return (
    <main className="relative">
      <AuroraBackground className="min-h-screen">
        <div className="relative pt-40 md:pt-48 px-4 pb-24 max-w-[1400px] mx-auto">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 md:mb-16"
          >
            <h1 className="font-syne text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block text-black dark:text-white mb-1 sm:mb-2">IHR DESIGN &</span>
              <div className="flex items-baseline gap-2 md:gap-4">
                <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">SOFTWARE</span>
                <span className="text-black dark:text-white">PARTNER</span>
              </div>
            </h1>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* First Card - Large White */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-1 lg:col-span-8 order-1 lg:order-1"
            >
              <div className="bg-white/90 dark:bg-[#0F1322]/90 backdrop-blur-sm rounded-[32px] p-8 h-full min-h-[240px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
                  <div className="order-2 lg:order-1 lg:max-w-[70%]">
                    <p className="text-xl md:text-2xl font-normal text-neutral-900 dark:text-white leading-relaxed">
                      Wir kreieren digitale Erlebnisse und visuelle Identitäten, die Ihre Marke zum Leben erwecken.
                    </p>
                  </div>
                  <div className="flex-shrink-0 mb-6 lg:mb-0 order-1 lg:order-2">
                    <div className="bg-[#F4F4F5] dark:bg-[#1F2937] rounded-[24px] p-6 flex justify-center lg:justify-start">
                      <img
                        src="/images/hero1.png"
                        alt="Hero Illustration"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Card - Design Dark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-1 lg:col-span-4 order-2 lg:order-2"
            >
              <div className="bg-[#0F1322]/90 dark:bg-[#0F1322]/90 backdrop-blur-sm rounded-[32px] p-8 h-full min-h-[240px]">
                <h3 className="text-2xl font-semibold mb-8 text-white">Design</h3>
                <ul className="space-y-4 text-lg text-white/90">
                  <li className="flex items-center gap-3">
                    <Fingerprint className="w-5 h-5 text-[#3B82F6]" />
                    100% einzigartig
                  </li>
                  <li className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-[#3B82F6]" />
                    Zielorientiert
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                    Sieht ääähhmmm... gut aus!
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Third Card - Large White */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-1 lg:col-span-8 order-3 lg:order-4"
            >
              <div className="bg-white/90 dark:bg-[#0F1322]/90 backdrop-blur-sm rounded-[32px] p-8 h-full min-h-[240px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
                  <div className="order-2 lg:order-1 lg:max-w-[70%]">
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">Über uns</h3>
                    <p className="text-xl text-neutral-900 dark:text-white leading-relaxed">
                      Wir entwickeln Design, Web und App Lösungen sowie individuelle Software. 🚀
                    </p>
                  </div>
                  <div className="flex-shrink-0 mb-6 lg:mb-0 order-1 lg:order-2">
                    <div className="bg-[#F4F4F5] dark:bg-[#1F2937] rounded-[24px] p-6 flex justify-center lg:justify-start">
                      <img
                        src="/images/hero2.png"
                        alt="Hero Illustration"
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fourth Card - Development Dark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-1 lg:col-span-4 order-4 lg:order-3"
            >
              <div className="bg-[#0F1322]/90 dark:bg-[#0F1322]/90 backdrop-blur-sm rounded-[32px] p-8 h-full min-h-[240px]">
                <h3 className="text-2xl font-semibold mb-8 text-white">Entwicklung von</h3>
                <ul className="space-y-4 text-lg text-white/90">
                  <li className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-[#3B82F6]" />
                    Webseiten
                  </li>
                  <li className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-[#3B82F6]" />
                    Apps
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#3B82F6]" />
                    Automatisierungen
                  </li>
                  <li className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-[#3B82F6]" />
                    Spezieller Software
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center mt-32"
          >
            <button className="px-8 py-3 bg-[#0F1322] dark:bg-white text-white dark:text-[#0F1322] rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Jetzt Kontaktieren
            </button>
          </motion.div>
        </div>
      </AuroraBackground>


      {/* Webentwicklungs Dienstleistungen Section */}
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
              Unsere Webentwicklungsdienstleistungen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
                >
                  <div className="mb-4 text-neutral-900 dark:text-neutral-50">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
