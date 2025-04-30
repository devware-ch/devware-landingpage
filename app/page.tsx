"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  Code,
  Palette,
  Rocket,
  Gauge,
  Sparkles,
  Target,
  Trophy,
  Fingerprint,
  Laptop,
  Zap,
  Bot,
  Info,
} from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Faq3 } from "@/components/ui/faq3";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technologien",
    description:
      "Moderne und skalierbare Webanwendungen mit Next.js, React und TypeScript.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Benutzerfreundliche und ästhetische Designs, die Ihre Marke perfekt repräsentieren.",
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Performance",
    description:
      "Optimierte Ladezeiten und beste Performance für Ihre Webseite.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "SEO & Marketing",
    description:
      "Suchmaschinenoptimierung und digitale Strategien für mehr Reichweite.",
  },
];

export default function Home() {
  const aboutRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [formError, setFormError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidWebsite = (website: string) => {
    if (!website) return true; // Optional field
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    return urlPattern.test(website);
  };

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: isDesktop
      ? ["start 40%", "start -20%"]
      : ["start 35%", "start -55%"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgb(156 163 175)", "rgb(23 23 23)"]
  );

  // Optimierte Scroll-Animation für Text
  const createScrollAnimation = (index: number, startOffset: number = 0) => {
    const delay = isDesktop ? 0.008 : 0.015;
    const duration = isDesktop ? 0.012 : 0.02;

    return useTransform(
      scrollYProgress,
      [
        Math.max(0, startOffset + index * delay),
        Math.max(0, startOffset + index * delay + duration),
      ],
      [
        "rgb(156 163 175)", // Startfarbe (Grau)
        "rgb(23 23 23)", // Endfarbe (Schwarz)
      ]
    );
  };

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
              <span className="block text-black dark:text-white mb-1 sm:mb-2">
                IHR DESIGN &
              </span>
              <div className="flex items-baseline gap-2 md:gap-4">
                <span className="bg-gradient-to-r from-[#4F46E5] via-[#3B82F6] to-[#06B6D4] text-transparent bg-clip-text">
                  SOFTWARE
                </span>
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
                      Wir kreieren digitale Erlebnisse und visuelle Identitäten,
                      die Ihre Marke zum Leben erwecken.
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
                <h3 className="text-2xl font-semibold mb-8 text-white">
                  Design
                </h3>
                <ul className="space-y-4 text-lg text-white">
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
                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                      Über uns
                    </h3>
                    <p className="text-xl text-neutral-900 dark:text-white leading-relaxed">
                      Wir entwickeln Design, Web und App Lösungen sowie
                      individuelle Software. 🚀
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
                <h3 className="text-2xl font-semibold mb-8 text-white">
                  Entwicklung von
                </h3>
                <ul className="space-y-4 text-lg text-white">
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
              Jetzt kontaktieren
            </button>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Webentwicklungsdienstleistungen Section */}
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-20"
            >
              <span className="text-sm font-medium text-[#3B82F6] mb-2">
                UNSERE EXPERTISE
              </span>
              <h2 className="text-2xl md:text-3xl font-syne font-bold text-neutral-900 dark:text-white text-center">
                Professionelle Webentwicklung
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 via-[#3B82F6]/10 to-[#06B6D4]/10 rounded-[32px] transform opacity-40 group-hover:opacity-100 transition-all duration-300 blur-[1px] group-hover:blur-none" />
                  <div className="relative p-8 rounded-[32px] bg-white/90 dark:bg-[#0F1322]/90 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full transform group-hover:scale-[1.02]">
                    <div className="mb-6 p-4 bg-[#F4F4F5] dark:bg-[#1F2937] rounded-2xl inline-block">
                      <div className="text-[#3B82F6] transform group-hover:scale-110 transition-transform duration-200">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-syne font-semibold mb-3 text-neutral-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Über Uns Section */}
      <div className="relative z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/section_background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px]" />
        <div ref={aboutRef} className="relative">
          <section className="relative py-24 md:py-32 px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center mb-16 md:mb-20"
              >
                <span className="text-sm font-medium text-[#3B82F6] mb-2 tracking-wider">
                  ÜBER UNS
                </span>
                <h2 className="text-2xl md:text-3xl font-syne font-bold text-neutral-900 dark:text-white text-center">
                  Unsere Mission
                </h2>
              </motion.div>

              <div className="space-y-12 relative pb-12 md:pb-16">
                <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3">
                  {[
                    "Unser",
                    "Ziel",
                    "ist",
                    "es,",
                    "Sie",
                    "voranzubringen",
                    "–",
                    "und",
                    "das",
                    "beginnt",
                    "schon",
                    "mit",
                    "kleinen",
                    "Designs,",
                    "die",
                    "attraktiv",
                    "und",
                    "benutzerfreundlich",
                    "sind.",
                  ].map((word, index) => {
                    const wordProgress = createScrollAnimation(index);

                    return (
                      <motion.span
                        key={index}
                        style={{ color: wordProgress }}
                        className="font-spectral text-2xl md:text-4xl font-light leading-relaxed dark:text-neutral-400"
                      >
                        {word}{" "}
                      </motion.span>
                    );
                  })}
                </div>

                <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-3">
                  {[
                    "Egal,",
                    "ob",
                    "Sie",
                    "eine",
                    "komplett",
                    "neue",
                    "Webseite,",
                    "eine",
                    "einfache",
                    "App",
                    "oder",
                    "doch",
                    "die",
                    "vermeintlich",
                    '"komplizierte"',
                    "(alle",
                    "sagen,",
                    "sie",
                    "sei",
                    "komplex)",
                    '"Spezialsoftware"',
                    "Lösung",
                    "brauchen",
                    "–",
                    "bei",
                    "uns",
                    "sind",
                    "Sie",
                    "genau",
                    "richtig!",
                  ].map((word, index) => {
                    const wordProgress = createScrollAnimation(
                      index,
                      isDesktop ? 0.2 : 0.25
                    );

                    return (
                      <motion.span
                        key={index}
                        style={{ color: wordProgress }}
                        className="font-spectral text-2xl md:text-4xl font-light leading-relaxed dark:text-neutral-400"
                      >
                        {word}{" "}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Referenzen Section */}
      <div className="relative z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-20"
            >
              <span className="text-sm font-medium text-[#3B82F6] mb-2 tracking-wider">
                UNSERE ARBEIT
              </span>
              <h2 className="text-2xl md:text-3xl font-syne font-bold text-neutral-900 dark:text-white text-center">
                Referenzen
              </h2>
            </motion.div>

            <div className="min-h-[300px]">
              <div className="max-w-[1200px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative cursor-pointer group"
                >
                  <a
                    href="https://umbau-allrounder.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-[32px]"
                  >
                    <img
                      src="/images/referenz1.png"
                      alt="Umbau Allrounder Website"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Webseite besuchen Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-white/40 hover:scale-110 hover:bg-white/30 transition-all duration-300 flex items-center gap-2 sm:gap-3 
                        sm:opacity-0 sm:scale-95 sm:group-hover:opacity-100 sm:group-hover:scale-100 transform-gpu"
                      >
                        <span className="text-white text-base sm:text-lg font-medium">
                          Webseite besuchen
                        </span>
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Website URL Text */}
                    <div className="absolute bottom-8 left-10 text-white">
                      <p className="text-2xl font-medium">
                        umbau-allrounder.ch
                      </p>
                    </div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/section_background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px]" />
        <section className="relative py-24 md:py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center mb-8"
            >
              <span className="text-sm font-medium text-[#3B82F6] mb-2 tracking-wider">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-syne font-bold text-neutral-900 dark:text-white text-center">
                Häufig gestellte Fragen
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Faq3
                items={[
                  {
                    id: "faq-1",
                    question: "Was kostet eine Softwarelösung?",
                    answer:
                      "Im ersten persönlichen Gespräch geben wir Ihnen eine Preisspanne, damit Sie sicherstellen können, dass es Ihren Vorstellungen entspricht. Wir bieten eine feste Projektgebühr an.\n\nDas bedeutet, Sie wissen von Anfang an genau, welche Kosten auf Sie zukommen, egal wie lange das Projekt dauert. Es gibt keine Überraschungen – Sie zahlen den vereinbarten Betrag, unabhängig von der Projektlaufzeit.\n\nDie Preise werden individuell festgelegt, basierend auf Ihren Zielen, dem Umfang der Arbeit, den geplanten Aktivitäten, den erbrachten Leistungen und dem Zeitplan des Projekts.",
                  },
                  {
                    id: "faq-2",
                    question: "Wie lange dauert die Umsetzung einer Website?",
                    answer:
                      "Die Dauer eines Projekts wird individuell im Erstgespräch festgelegt.\n\nFür Webseiten können Sie in der Regel mit 2 Wochen für einfache Projekte und bis zu 8 Wochen für komplexe Lösungen rechnen.\n\nAndere Software- und Designlösungen können je nach Anforderungen kürzer oder länger dauern.",
                  },
                ]}
                supportHeading="Noch Fragen?"
                supportDescription="Unser Team steht Ihnen für alle weiteren Fragen zur Verfügung."
                supportButtonText="Jetzt kontaktieren"
                supportButtonUrl="#contact"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Kontakt Section */}
      <div
        className="relative"
        style={{
          backgroundImage: 'url("/images/section_background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="relative py-32 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="font-syne text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                Jetzt zur perfekten{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  Webseite
                </span>
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Sie können uns unter{" "}
                <a
                  href="mailto:info@devware.de"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  info@devware.ch
                </a>{" "}
                oder per Kontaktformular erreichen. Wir antworten innerhalb von
                24 Stunden.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 dark:bg-[#0F1322]/80 backdrop-blur-sm rounded-[32px] p-8 md:p-12"
            >
              <form
                action="https://formspree.io/f/myzwknnq"
                method="POST"
                className="space-y-8"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  const message = formData.get("message") as string;
                  const website = formData.get("website") as string;

                  if (!name || !email || !message) {
                    setFormError(
                      "Bitte füllen Sie alle erforderlichen Felder aus."
                    );
                    return;
                  }

                  if (!isValidEmail(email)) {
                    setFormError(
                      "Bitte geben Sie eine gültige E-Mail Adresse ein."
                    );
                    return;
                  }

                  if (!isValidWebsite(website)) {
                    setFormError("Bitte geben Sie eine gültige Webseite ein.");
                    return;
                  }

                  setFormError("");
                  form.submit();
                }}
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Name<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 dark:text-white"
                    placeholder="Ihr Name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    E-Mail<span className="text-red-500"> *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 dark:text-white"
                    placeholder="Ihre E-Mail"
                  />
                </div>

                {/* Website Field */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Link zu Ihrer aktuellen Webseite
                  </label>
                  <input
                    type="url"
                    name="website"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 dark:text-white"
                    placeholder="Ihre Webseite"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {/* Needs Checkboxes */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-4">
                      Was genau brauchen Sie?
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="needs"
                          value="website"
                          className="w-5 h-5 rounded border-neutral-300 text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Webseite
                        </span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="needs"
                          value="app"
                          className="w-5 h-5 rounded border-neutral-300 text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-neutral-700 dark:text-neutral-300">
                          App
                        </span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="needs"
                          value="other"
                          className="w-5 h-5 rounded border-neutral-300 text-blue-500 focus:ring-blue-500"
                        />
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Weiteres
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Wobei dürfen wir Sie unterstützen?
                    <span className="text-red-500"> *</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-900 dark:text-white"
                    placeholder="Erzählen Sie uns etwas über Ihr Projekt"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  {formError && (
                    <div className="flex items-center gap-2 pl-1">
                      <Info className="w-4 h-4 text-red-500" />
                      <p className="text-sm text-red-500">{formError}</p>
                    </div>
                  )}
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#0F1322] dark:bg-white text-white dark:text-[#0F1322] rounded-full text-lg font-medium hover:scale-[1.02] transition-transform"
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
