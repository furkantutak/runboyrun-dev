"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";
import RunBoyRunLogo from "@/components/brand/RunBoyRunLogo";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isBadgeHovered, setBadgeHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { t } = useTranslation("footer");

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('tr-TR'));
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('tr-TR'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/furkanpala/runboyrun.dev",
      tooltip: t("social.github"),
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/furkanpala",
      tooltip: t("social.linkedin"),
    },
    {
      icon: Twitter,
      href: "https://twitter.com/furkanpala",
      tooltip: t("social.twitter"),
    },
  ];

  return (
    <footer className="w-full py-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative space-y-6"
        >
          <div className="flex justify-center">
            <RunBoyRunLogo />
          </div>

          <p 
            className="text-xs text-muted-foreground text-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {t("story.createdIn")}{" "}
            <span className="relative inline-block group">
              <span className="font-semibold">{t("story.timeSpan")}</span>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap"
                >
                  {t("story.tooltip")}
                </motion.span>
              )}
            </span>{" "}
            {t("story.collaboration")}
            <br />
            {t("story.passion")}{" "}
            <span className="italic hover:text-primary transition-colors">
              #BuildFastFeelDeep
            </span>
          </p>

          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.tooltip}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">
              {t("builtWith.ai")}
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="w-2 h-2 rounded-full bg-purple-400" />
              </span>
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span>{currentTime}</span>
          </div>
        </motion.div>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: isBadgeHovered ? 1.1 : 1,
              y: isBadgeHovered ? -5 : 0,
              rotate: isBadgeHovered ? 5 : 0
            }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setBadgeHovered(true)}
            onMouseLeave={() => setBadgeHovered(false)}
            className="fixed bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg cursor-pointer"
          >
            {t("badge.text")}
            {isBadgeHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-xs whitespace-nowrap"
              >
                {t("badge.tooltip")}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </footer>
  );
} 