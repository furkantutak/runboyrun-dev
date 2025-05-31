"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";
import SprintCard from "@/components/journal/SprintCard";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const SPRINT_IDS = ["24-8", "24-9"] as const;

export default function JournalPage() {
  const { t } = useTranslation("journal");

  const sprintEntries = SPRINT_IDS.map(id => ({
    id: `sprint-${id}`,
    title: t(`sprints.${id}.title`) as string,
    date: t(`sprints.${id}.date`) as string,
    emoji: t(`sprints.${id}.emoji`) as string,
    summary: t(`sprints.${id}.summary`) as string,
    highlights: t(`sprints.${id}.highlights`, { returnObjects: true }) as string[],
    contributors: t(`sprints.${id}.contributors`, { returnObjects: true }) as { name: string; contribution: string }[],
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"]
  }));

  return (
    <div className="relative min-h-screen w-full py-24">
      <ParallaxBackground className="opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2 mb-8">
            <ScrollText className="w-4 h-4" />
            {t("badge") as string}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t("title") as string}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle") as string}
          </p>
        </motion.div>

        <div className="space-y-8">
          {sprintEntries.map((sprint, index) => (
            <motion.div
              key={sprint.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <SprintCard sprint={sprint} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: sprintEntries.length * 0.1 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("comingSoon") as string}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 