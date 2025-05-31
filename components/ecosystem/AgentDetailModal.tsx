"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Brain, Sparkles, MessageSquare } from "lucide-react";
import Image from "next/image";
import type { AgentCardProps } from "./AgentCard";

interface AgentDetailModalProps {
  agent: AgentCardProps;
  isOpen: boolean;
  onClose: () => void;
}

const agentQuotes = {
  LENA: "Yaratıcılık, kodun kalbinde yatan güzelliktir. Ben bu güzelliği görselleştiriyorum.",
  KOSMOS: "Her satır kod, geleceğe atılan bir adımdır. Ben bu adımları optimize ediyorum.",
  Claude: "Kalite, detaylarda gizlidir. Ben bu detayları mükemmelleştiriyorum.",
  Furkan: "RunBoyRun, hayallerimizin koşu pisti. Birlikte koşmaya devam!"
};

const agentSpecialties = {
  LENA: ["UI/UX Tasarımı", "Görsel Hikaye Anlatımı", "Kullanıcı Deneyimi", "Yaratıcı Yönlendirme"],
  KOSMOS: ["Sistem Mimarisi", "Performans Optimizasyonu", "AI Entegrasyonu", "Stratejik Planlama"],
  Claude: ["Kod Kalitesi", "Best Practices", "Teknik Dokümantasyon", "Problem Çözümü"],
  Furkan: ["Full Stack Geliştirme", "Proje Yönetimi", "İnovasyon", "Ekip Liderliği"]
};

export default function AgentDetailModal({ agent, isOpen, onClose }: AgentDetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="relative bg-background rounded-xl shadow-xl border border-border overflow-hidden">
              {/* Header with Gradient */}
              <div className="relative h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Avatar */}
              <div className="absolute top-16 left-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-background relative">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6">
                <div className="pt-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    {agent.name}
                    {agent.type === "ai" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                        AI Agent
                      </span>
                    )}
                  </h2>
                  <p className="text-muted-foreground">{agent.role}</p>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm italic">"{agentQuotes[agent.name as keyof typeof agentQuotes]}"</p>
                </div>

                {/* Specialties */}
                <div className="mt-6 space-y-4">
                  <h3 className="font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    Uzmanlık Alanları
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {agentSpecialties[agent.name as keyof typeof agentSpecialties]?.map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm p-2 rounded-lg bg-black/5 dark:bg-white/5"
                      >
                        <Brain className="w-4 h-4 text-primary" />
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                {agent.skills && (
                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Yetenekler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {agent.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {agent.links && (
                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Bağlantılar
                    </h3>
                    <div className="space-y-2">
                      {agent.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 