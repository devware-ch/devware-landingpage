"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Trophy } from "lucide-react";

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

export function AboutSection() {
  return (
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
  );
} 