"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import AgentCard from "@/components/ecosystem/AgentCard";
import ParallaxBackground from "@/components/ui/ParallaxBackground";
import { ecosystemMembers } from "@/lib/ecosystem";

export default function EcosystemPage() {
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
            Ekosistem
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            RunBoyRun Ekibi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            İnsan ve yapay zeka iş birliğiyle geleceği şekillendiren ekip.
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
            Yeni üyeler yakında...
          </div>
        </motion.div>
      </div>
    </div>
  );
} 