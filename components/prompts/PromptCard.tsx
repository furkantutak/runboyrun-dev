"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

type PromptCardProps = {
  category: string;
  title: string;
  description: string;
  example: string;
};

export default function PromptCard({
  category,
  title,
  description,
  example,
}: PromptCardProps) {
  const { t } = useTranslation("prompt");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-xl border p-6 transition-all duration-300 hover:shadow-lg bg-white dark:bg-zinc-900"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {category}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="relative">
          <pre className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-3 text-xs text-foreground font-mono overflow-auto">
            {example}
          </pre>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-zinc-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="default"
            className="w-full transition-all duration-300 hover:scale-[1.02]"
          >
            {t("pack.tryIt")}
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 