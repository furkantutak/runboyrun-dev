"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";
import { Locale } from "@/app/i18n-settings";

interface CallToActionProps {
  lng: Locale;
}

export default function CallToAction({ lng }: CallToActionProps) {
  const { t } = useTranslation('cta', lng);

  return (
    <motion.section
      className="py-20 px-4 text-center max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold">
        {t("title")}
      </h2>
      <p className="text-muted-foreground">
        {t("description")}
      </p>

      <div className="flex justify-center flex-wrap gap-4">
        <Link
          href="/prompt-pack"
          className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:opacity-90 transition"
        >
          {t("buttons.promptPack")}
        </Link>
        <Link
          href="/terminal"
          className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:opacity-90 transition"
        >
          {t("buttons.terminal")}
        </Link>
        <Link
          href="/qr"
          className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
        >
          {t("buttons.qr")}
        </Link>
      </div>
    </motion.section>
  );
} 