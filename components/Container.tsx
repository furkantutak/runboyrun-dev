import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Container({ children }: { children: ReactNode }) {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="w-full max-w-4xl px-6 py-12"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 