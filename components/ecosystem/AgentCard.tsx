"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import AgentDetailModal from "./AgentDetailModal";

export interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  avatar: string;
  type: "human" | "ai";
  links?: {
    title: string;
    url: string;
  }[];
  skills?: string[];
  isNew?: boolean;
}

export default function AgentCard({
  name,
  role,
  description,
  avatar,
  type,
  links,
  skills,
  isNew = false,
}: AgentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-border">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-xl overflow-hidden relative">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-background flex items-center justify-center border border-border">
                {type === "human" ? "👤" : "🤖"}
              </div>
              {isNew && (
                <motion.div
                  className="absolute -top-2 -right-2 px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  Yeni 💫
                </motion.div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold truncate">{name}</h3>
                {type === "ai" && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                    AI Agent
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {skills && skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="mt-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3" />
                  {link.title}
                </a>
              ))}
            </div>
          )}

          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: "none" }}
          />
        </div>
      </motion.div>

      <AgentDetailModal
        agent={{
          name,
          role,
          description,
          avatar,
          type,
          links,
          skills,
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 