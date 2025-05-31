"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import TechDetailModal from "@/components/techstack/TechDetailModal";

interface TechCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
  features?: string[];
  whyWeChose?: string;
  docsUrl?: string;
}

export default function TechCard({
  title,
  description,
  icon,
  delay = 0,
  features,
  whyWeChose,
  docsUrl,
}: TechCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-black/5 backdrop-blur-sm rounded-xl p-6 hover:bg-black/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ zIndex: -1 }}
      />
      
      <div className="flex flex-col items-center text-center space-y-4">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <Modal
          trigger={
            <Button
              variant="outline"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              + Daha Fazla
            </Button>
          }
          title={title}
        >
          <TechDetailModal
            title={title}
            description={description}
            features={features}
            whyWeChose={whyWeChose}
            docsUrl={docsUrl}
          />
        </Modal>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-b-xl"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
} 