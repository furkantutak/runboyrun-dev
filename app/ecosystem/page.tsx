"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useTranslation } from "next-i18next";
import AgentCard from "@/components/ecosystem/AgentCard";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const MEMBER_IDS = ["furkan", "kosmos", "lena", "claude"] as const;

export default function EcosystemPage() {
  const { t } = useTranslation("ecosystem");

  const ecosystemMembers = MEMBER_IDS.map(id => ({
    name: t(`members.${id}.name`),
    role: t(`members.${id}.role`),
    description: t(`members.${id}.description`),
    avatar: `/images/${id}.jpg`,
    type: id === "furkan" ? ("human" as const) : ("ai" as const),
    skills: t(`members.${id}.skills`, { returnObjects: true }) as string[],
    links: Object.entries(t(`members.${id}.links`, { returnObjects: true })).map(([key, title]) => ({
      title: title as string,
      url: key === "github" ? "https://github.com/furkanpala" :
           key === "linkedin" ? "https://linkedin.com/in/furkanpala" :
           `/${key.toLowerCase()}`
    })),
    isNew: id === "kosmos" || id === "lena"
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
            <Users className="w-4 h-4" />
            {t("badge")}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {ecosystemMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <AgentCard {...member} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t("comingSoon")}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 