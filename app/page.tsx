"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Code, Palette, Rocket, Gauge, Sparkles, Target, Trophy } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Moderne und skalierbare Webanwendungen mit Next.js, React und TypeScript"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Benutzerfreundliche und ästhetische Designs, die Ihre Marke perfekt repräsentieren"
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance",
    description: "Optimierte Ladezeiten und beste Performance für Ihre Webseite"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SEO & Marketing",
    description: "Suchmaschinenoptimierung und digitale Strategien für mehr Reichweite"
  }
];

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "100% Einzigartigkeit",
    description: "Jedes Projekt wird individuell und maßgeschneidert entwickelt"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Ziel-Orientiert",
    description: "Fokus auf messbaren Erfolg und Ihre Geschäftsziele"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Das Beste vom Besten",
    description: "Modernste Technologien und beste Entwicklungspraktiken"
  }
];

export default function Home() {
  return (
    <main className="relative">
      <AuroraBackground className="min-h-screen">
        <div className="relative px-4 py-12 max-w-[1400px] mx-auto">
          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-syne text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-20"
          >
            <span className="block text-black dark:text-white">IHR DESIGN &</span>
            <div className="flex items-baseline gap-4">
              <span className="text-[#3B82F6]">SOFTWARE</span>
              <span className="text-black dark:text-white">PARTNER</span>
            </div>
          </motion.h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* First Card - Large White */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="bg-white rounded-[32px] p-8 h-full min-h-[240px]">
                <div className="flex items-center justify-between h-full">
                  <p className="text-2xl font-normal text-neutral-900 max-w-[70%] leading-relaxed">
                    Wir kreieren digitale Erlebnisse und visuelle Identitäten, die Ihre Marke zum Leben erwecken.
                  </p>
                  <div className="flex-shrink-0">
                    <div className="bg-[#F4F4F5] rounded-[24px] p-6">
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
              className="col-span-12 lg:col-span-4"
            >
              <div className="bg-[#0F1322] rounded-[32px] p-8 h-full min-h-[240px]">
                <h3 className="text-2xl font-semibold mb-8 text-white">Design</h3>
                <ul className="space-y-4 text-lg text-white/90">
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    100% einzigartig
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Zielorientiert
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Sieht ääähhmmm... gut aus!
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Third Card - Development Dark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="bg-[#0F1322] rounded-[32px] p-8 h-full min-h-[240px]">
                <h3 className="text-2xl font-semibold mb-8 text-white">Entwicklung von</h3>
                <ul className="space-y-4 text-lg text-white/90">
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Webseiten
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Apps
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Automatisierungen
                  </li>
                  <li className="flex items-center">
                    <span className="text-white mr-2">✓</span>
                    Spezieller Software
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Fourth Card - Large White */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="bg-white rounded-[32px] p-8 h-full min-h-[240px]">
                <div className="flex items-center justify-between h-full">
                  <div className="max-w-[70%]">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Über uns</h3>
                    <p className="text-xl text-neutral-900 leading-relaxed">
                      Wir entwickeln Design, Web und App Lösungen sowie individuelle Software. 🚀
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-[#F4F4F5] rounded-[24px] p-6">
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
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center mt-12"
          >
            <button className="px-8 py-3 bg-[#0F1322] text-white rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Jetzt Kontaktieren
            </button>
          </motion.div>
        </div>
      </AuroraBackground>
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <section className="py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
              Unsere Webentwicklungs-Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}                    viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800/50"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4 text-neutral-900 dark:text-neutral-50 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
                  Moin, wir sind DevWare!
                </h2>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  Wir entwickeln nicht nur Webseiten – wir erschaffen digitale Erlebnisse, 
                  die Ihre Marke zum Leben erwecken. Mit modernsten Technologien und 
                  einem Auge fürs Detail machen wir Ihre Vision zur Realität.
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  Unser Ziel ist es, Sie voranzubringen – und das beginnt schon mit 
                  einem Design, das nicht nur attraktiv, sondern auch benutzerfreundlich ist.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg border border-neutral-200/50 dark:border-neutral-800/50"
                  >
                    <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-50">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                          {feature.description}
                      </p>
                  </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
