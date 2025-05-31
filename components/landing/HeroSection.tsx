"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

export default function HeroSection() {
  const { t } = useTranslation("hero");

  return (
    <motion.section
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-24 text-center space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ParallaxBackground />
      
      <motion.div
        className="space-y-6 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("title")}{" "}
          <span className="text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.4)]">
            {t("highlight")}
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t("description")}
        </motion.p>

        <motion.div 
          className="flex justify-center gap-4 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/terminal">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              {t("cta")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 