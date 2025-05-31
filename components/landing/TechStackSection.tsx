"use client";

import { motion } from "framer-motion";
import TechCard from "@/components/ui/TechCard";

const TECH_STACK = [
  {
    title: "Next.js",
    description: "Modern web'in omurgası. SSR, API, performans.",
    icon: "⚡",
    features: [
      "Server-Side Rendering (SSR)",
      "API Routes",
      "File-based Routing",
      "Built-in Image Optimization",
    ],
    whyWeChose: "Next.js, modern web geliştirme için ihtiyacımız olan tüm özellikleri tek bir çatı altında sunuyor. SSR desteği, API route'ları ve file-based routing sistemi ile geliştirme sürecimizi hızlandırıyor.",
    docsUrl: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS",
    description: "Tasarım sistemini kodla inşa et.",
    icon: "🎨",
    features: [
      "Utility-First Yaklaşım",
      "JIT Compiler",
      "Responsive Design",
      "Dark Mode Desteği",
    ],
    whyWeChose: "Tailwind CSS, hızlı prototipleme ve tutarlı tasarım sistemi oluşturma konusunda mükemmel bir araç. Utility-first yaklaşımı ile tekrar kullanılabilir komponentler oluşturmamızı sağlıyor.",
    docsUrl: "https://tailwindcss.com/docs",
  },
  {
    title: "GPT-4o & Claude 3.5",
    description: "Prompt'la yarat, AI'la keşfet.",
    icon: "🤖",
    features: [
      "Gerçek Zamanlı AI Asistan",
      "Kod Analizi ve Öneriler",
      "Prompt Optimizasyonu",
      "Çift Motor Desteği",
    ],
    whyWeChose: "GPT-4o ve Claude 3.5, farklı güçlü yanlarıyla birbirini tamamlıyor. Bu iki motoru birlikte kullanarak, kullanıcılarımıza daha zengin ve doğru çıktılar sunabiliyoruz.",
  },
  {
    title: "Cursor + Monaco",
    description: "Kod editörü değil, yaratıcı zihin sahnesi.",
    icon: "✨",
    features: [
      "AI Destekli Kod Tamamlama",
      "Syntax Highlighting",
      "IntelliSense",
      "Git Entegrasyonu",
    ],
    whyWeChose: "Cursor'ın AI destekli özellikleri ve Monaco'nun güçlü editör altyapısı, kullanıcılarımıza profesyonel bir geliştirme ortamı sunmamızı sağlıyor.",
    docsUrl: "https://cursor.sh",
  },
  {
    title: "Supabase",
    description: "Anlık veri + kimlik yönetimi.",
    icon: "⚡",
    features: [
      "Gerçek Zamanlı Veritabanı",
      "Auth & Authorization",
      "Edge Functions",
      "Storage",
    ],
    whyWeChose: "Supabase, PostgreSQL tabanlı güçlü altyapısı ve gerçek zamanlı özelliklerle, uygulamamızın backend ihtiyaçlarını karşılıyor.",
    docsUrl: "https://supabase.com/docs",
  },
  {
    title: "CleanShot",
    description: "Screenshot'lar sadece belge değil, belgeden fazlası.",
    icon: "📸",
    features: [
      "Hızlı Ekran Görüntüsü",
      "Video Kayıt",
      "OCR Desteği",
      "Bulut Entegrasyonu",
    ],
    whyWeChose: "CleanShot, içerik üretimi ve dokümantasyon süreçlerimizi hızlandıran güçlü bir araç. Özellikle prompt örnekleri ve kullanım senaryolarını görselleştirmede büyük kolaylık sağlıyor.",
    docsUrl: "https://cleanshot.com",
  },
  {
    title: "Jest / Vitest",
    description: "Her satır kod, güvenle yaşasın.",
    icon: "🧪",
    features: [
      "Unit Testing",
      "Integration Testing",
      "Snapshot Testing",
      "Code Coverage",
    ],
    whyWeChose: "Test altyapımızı Jest ve Vitest ile kurarak, kodumuzun güvenilirliğini ve sürdürülebilirliğini garanti altına alıyoruz.",
    docsUrl: "https://jestjs.io/docs",
  },
];

export default function TechStackSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Zemin Sağlamsa, Her Şey Mümkün.
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Modern teknolojilerle güçlendirilmiş bir platform.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((tech, index) => (
            <TechCard
              key={tech.title}
              {...tech}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 