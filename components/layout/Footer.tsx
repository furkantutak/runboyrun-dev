"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="py-6 border-t">
      <div className="container">
        <motion.p 
          className="text-xs text-muted-foreground text-center space-x-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span>Bu yaratım yalnızca</span>
          <span 
            className="font-semibold relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            6 saatte
            {isHovered && (
              <motion.span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-teal-400 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                Gerçekten mi? 😏
              </motion.span>
            )}
          </span>
          <span>Claude & GPT-4o iş birliğiyle,</span>
          <span>Furkan & RunBoyRun AI Runner tarafından geliştirildi. 🚀</span>
          <br />
          <span className="italic mt-2 block">#BuildFastFeelDeep</span>
        </motion.p>
      </div>
    </footer>
  );
} 