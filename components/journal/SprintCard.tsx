"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Code2, Users } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";
import type { SprintEntry } from "@/lib/content/sprints";

export default function SprintCard({ sprint }: { sprint: SprintEntry }) {
  const { t } = useTranslation("journal");

  return (
    <motion.article
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-border">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{sprint.emoji}</div>
            <div>
              <h3 className="text-xl font-semibold">Sprint {sprint.title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <Calendar className="w-4 h-4" />
                {new Date(sprint.date).toLocaleDateString(undefined, { 
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-muted-foreground mb-6">
          {sprint.summary}
        </p>

        {/* Highlights */}
        <div className="space-y-4 mb-6">
          <h4 className="font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {t("sections.highlights")}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {sprint.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Contributors */}
        <div className="space-y-4 mb-6">
          <h4 className="font-medium flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            {t("sections.contributors")}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sprint.contributors.map((contributor, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{contributor.name}</span>
                <p className="text-muted-foreground">{contributor.contribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        {sprint.techStack && (
          <div className="space-y-4">
            <h4 className="font-medium flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              {t("sections.techStack")}
            </h4>
            <div className="flex flex-wrap gap-2">
              {sprint.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
} 