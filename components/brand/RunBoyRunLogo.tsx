"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";

export default function RunBoyRunLogo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="inline-flex flex-col items-start relative cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="text-5xl font-bold text-white tracking-tight relative z-10">
          <span className="bg-gradient-to-br from-blue-600 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
            RunBoyRun
          </span>
          <span className="text-teal-300">.dev</span>
        </div>
        <div className="text-[10px] text-yellow-300 mt-1 pl-1 italic tracking-wider">
          born to run • built with soul
        </div>
        <motion.div
          className="absolute -top-3 -left-4 w-6 h-6 rounded-full bg-yellow-400 opacity-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="RunBoyRun.dev Hikayesi"
      >
        <div className="space-y-4 text-sm">
          <p>
            RunBoyRun.dev, Furkan'ın doğum günü olan 21 Mayıs'ta, Claude ve GPT-4o'nun iş birliğiyle yalnızca 6 saatte yaratıldı. 🎁
          </p>
          <p>
            Bu platform, modern web teknolojileri ve yapay zeka araçlarının gücünü birleştirerek, yaratıcı geliştiriciler için bir deneyim alanı oluşturmayı hedefliyor.
          </p>
          <div className="border-l-2 border-primary/20 pl-4 mt-6 space-y-2">
            <p className="text-muted-foreground italic">
              "Kod senin dilin. Platform senin sahnen."
            </p>
            <p className="text-xs text-muted-foreground">
              — RunBoyRun Manifestosu
            </p>
          </div>
          <div className="pt-4">
            <div className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">
                🤖 Built with AI
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </span>
              </span>
              <span>•</span>
              <span>21.05.2024</span>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
} 