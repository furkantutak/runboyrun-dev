import { motion } from "framer-motion";

export function Title({ children }: { children: string }) {
  return (
    <motion.h1 
      className="text-4xl font-extrabold tracking-tight mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.h1>
  );
} 