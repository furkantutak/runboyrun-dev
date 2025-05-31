"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";
import { Locale } from "@/app/i18n-settings";

interface UseCaseCardsProps {
  lng: Locale;
}

export default function UseCaseCards({ lng }: UseCaseCardsProps) {
  const { t } = useTranslation('useCases', lng);

  const useCases = [
    {
      title: t("cases.events.title"),
      description: t("cases.events.description"),
    },
    {
      title: t("cases.startup.title"),
      description: t("cases.startup.description"),
    },
    {
      title: t("cases.demo.title"),
      description: t("cases.demo.description"),
    },
    {
      title: t("cases.personal.title"),
      description: t("cases.personal.description"),
    },
  ];

  return (
    <motion.section
      className="py-20 px-4 max-w-6xl mx-auto space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        {t("title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {useCases.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition duration-300 bg-background"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 