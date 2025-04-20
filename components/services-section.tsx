"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Gauge } from "lucide-react";

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

export function ServicesSection() {
  return (
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
  );
} 