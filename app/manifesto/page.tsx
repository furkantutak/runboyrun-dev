"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

const manifestoSections = [
  {
    id: "why",
    emoji: "🔥",
    title: "Neden Koşuyoruz?",
    content: "Çünkü durağanlık bize göre değil. Her gün yeni bir ufka doğru koşuyoruz. Teknoloji ve yaratıcılık bizim pistimiz, inovasyon bizim tempomuzu belirliyor.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "what",
    emoji: "🎯",
    title: "Neye İnanıyoruz?",
    content: "İnanıyoruz ki kod sadece bir araç değil, bir ifade biçimi. Yapay zeka bir rakip değil, bir koşu arkadaşı. Ve her satır kod, daha iyi bir geleceğe atılan bir adım.",
    color: "from-blue-400 to-teal-500",
  },
  {
    id: "who",
    emoji: "🧑‍🚀",
    title: "Bu Hareket Kimleri Kapsar?",
    content: "Teknolojinin sınırlarını zorlayanları. Yaratıcılığını kodla ifade edenleri. AI ile dans edenleri. Ve en önemlisi, durduğu yerde sayamayanları.",
    color: "from-purple-400 to-pink-500",
  },
  {
    id: "how",
    emoji: "⚡️",
    title: "Nasıl Yapıyoruz?",
    content: "Hızlı düşünüyor, cesurca geliştiriyor, tutkuyla kodluyoruz. AI'ı bir araç olarak değil, bir ortak olarak görüyoruz. Ve her projede bir parça ruhumuzu bırakıyoruz.",
    color: "from-green-400 to-teal-500",
  },
];

export default function ManifestoPage() {
  return (
    <div className="relative min-h-screen w-full py-24">
      <ParallaxBackground className="opacity-30" />
      
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            RunBoyRun Manifestosu
          </h1>
          <p className="text-xl text-muted-foreground">
            Bir koşu değil, bir hareket. Bir platform değil, bir vizyon.
          </p>
        </motion.div>

        <div className="space-y-12 mt-16">
          {manifestoSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -left-8 top-0 text-4xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {section.emoji}
              </motion.div>
              <div className="bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group-hover:scale-[1.02]">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className={`bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                    {section.title}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Hareket devam ediyor...
          </div>
        </motion.div>
      </div>
    </div>
  );
} 