"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Locale } from "@/app/i18n-settings";

interface AboutRunBoyRunProps {
  lng: Locale;
}

export default function AboutRunBoyRun({ lng }: AboutRunBoyRunProps) {
  const { t } = useTranslation('about', lng);

  return (
    <motion.section
      className="py-16 px-4 max-w-4xl mx-auto text-center space-y-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold sm:text-4xl">{t("title")}</h2>
      <p className="text-muted-foreground text-lg">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold mb-2">{t("features.ai.title")}</h3>
          <p className="text-muted-foreground">{t("features.ai.description")}</p>
        </div>
        <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
          <h3 className="text-xl font-semibold mb-2">{t("features.ecosystem.title")}</h3>
          <p className="text-muted-foreground">{t("features.ecosystem.description")}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Link href="/ecosystem">
          <Button variant="outline">{t("buttons.ecosystem")}</Button>
        </Link>
        <Link href="/manifesto">
          <Button variant="outline">{t("buttons.manifesto")}</Button>
        </Link>
      </div>
    </motion.section>
  );
} 