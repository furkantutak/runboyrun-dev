"use client";

import { motion } from "framer-motion";

export default function TimeBadge() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 rounded-full px-4 py-2 text-xs font-medium text-teal-400 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      6 saatte kodlandı! 🚀
    </motion.div>
  );
} 