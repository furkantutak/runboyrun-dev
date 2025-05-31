"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiOpenai,
  SiSupabase,
} from "react-icons/si";
import { useTranslation } from "@/app/i18n/client";
import { Locale } from "@/app/i18n-settings";

const stacks = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "GitHub", icon: SiGithub },
  { name: "OpenAI", icon: SiOpenai },
  { name: "Supabase", icon: SiSupabase },
];

interface TechStackShowcaseProps {
  lng: Locale;
}

export default function TechStackShowcase({ lng }: TechStackShowcaseProps) {
  const { t } = useTranslation('tech', lng);

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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center items-center">
        {stacks.map(({ name, icon: Icon }) => (
          <div key={name} className="flex flex-col items-center space-y-2">
            <Icon className="w-10 h-10 text-primary" />
            <span className="text-sm text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 