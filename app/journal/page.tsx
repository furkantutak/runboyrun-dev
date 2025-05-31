"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import SprintCard from "@/components/journal/SprintCard";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { sprintEntries } from "@/lib/content/sprints";

export default function JournalPage() {
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
            Gelişim Günlüğü
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Sprint Günlükleri
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            RunBoyRun'un sıfırdan doğuşu ve gelişimi. Her sprint, yeni bir adım.
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
              Yeni sprintler yolda...
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 