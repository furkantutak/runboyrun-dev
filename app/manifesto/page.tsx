"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { useTranslation } from "@/app/i18n/client";

const manifestoSections = [
  {
    id: "vision",
    emoji: "🔥",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "mission",
    emoji: "🎯",
    color: "from-blue-400 to-teal-500",
  },
  {
    id: "values",
    emoji: "🧑‍🚀",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "principles",
    emoji: "⚡️",
    color: "from-green-400 to-teal-500",
  },
];

export default function ManifestoPage() {
  const { t } = useTranslation("manifesto");

  return (
    <div className="relative min-h-screen w-full py-24">
      <ParallaxBackground className="opacity-30" />
      
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t("title") as string}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("subtitle") as string}
          </p>
        </motion.div>

        <div className="space-y-12 mt-16">
          {manifestoSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -left-8 top-0 text-4xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {section.emoji}
              </motion.div>
              <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className={`bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {t(`sections.${section.id}.title`) as string}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t(`sections.${section.id}.description`) as string}
                </p>
                <ul className="space-y-2">
                  {(t(`sections.${section.id}.items`, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t("cta.join") as string}
          </div>
          <div className="flex justify-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("cta.explore") as string}
            </button>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("cta.contribute") as string}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 