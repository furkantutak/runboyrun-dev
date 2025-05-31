"use client";

import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import TechCard from "@/components/ui/TechCard";

const TECH_KEYS = ["nextjs", "tailwind", "ai"] as const;

export default function TechStackSection() {
  const { t } = useTranslation("tech");

  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("title")}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_KEYS.map((key, index) => (
            <TechCard
              key={key}
              title={t(`stack.${key}.title`)}
              description={t(`stack.${key}.description`)}
              icon={t(`stack.${key}.icon`)}
              features={t(`stack.${key}.features`, { returnObjects: true }) as string[]}
              whyWeChose={t(`stack.${key}.whyWeChose`)}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 