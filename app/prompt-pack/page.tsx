"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

const prompts = [
  {
    title: "Cursor için Context Booster Prompt",
    content: `You are a context-aware React/TS assistant. Keep all project files and instructions in memory...`,
  },
  {
    title: "Homy Project Management Prompt",
    content: `Manage the Homy Health project with modular components, AI-assisted dashboards, and WCAG-ready themes...`,
  },
  {
    title: "Test Automation Prompt (Vitest + RTL)",
    content: `Write accessibility-first test cases using Vitest, RTL, and jest-axe. Target edge cases and form validation...`,
  },
];

export default function PromptPackPage() {
  const [copied, setCopied] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-10">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎁 RunBoyRun Prompt Pack
        </motion.h1>
        <p className="text-center text-gray-400">
          Sadece Cursor Istanbul V1 katılımcılarına özel – işte sizi ileri taşıyacak seçme promptlar!
        </p>

        {prompts.map((prompt, i) => (
          <motion.div
            key={i}
            className="bg-white text-gray-800 p-4 rounded-xl relative shadow-md"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="font-semibold mb-2 text-sm text-gray-500">
              {prompt.title}
            </h2>
            <pre className="text-sm bg-gray-100 p-3 rounded whitespace-pre-wrap">
              {prompt.content}
            </pre>
            <button
              onClick={() => handleCopy(prompt.content, i)}
              className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
            >
              {copied === i ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied === i ? "Kopyalandı!" : "Kopyala"}</span>
            </button>
          </motion.div>
        ))}

        <p className="text-center text-gray-500 text-sm pt-6">
          Daha fazlası için bizi takip etmeyi unutma. <br />
          <a href="/" className="underline">runboyrun.dev</a>
        </p>
      </div>
    </main>
  );
}