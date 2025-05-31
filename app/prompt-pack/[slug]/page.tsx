"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { getPromptBySlug } from "@/data/prompts";
import Footer from "@/components/Footer";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface PromptDetailPageProps {
  params: {
    slug: string;
  };
}

export default function PromptDetailPage({ params }: PromptDetailPageProps) {
  const [copied, setCopied] = useState(false);
  const prompt = getPromptBySlug(params.slug);

  if (!prompt) {
    notFound();
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/prompt-pack" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          ← Tüm Prompts
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {prompt.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{prompt.title}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {prompt.description}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Kullanım Alanı</h2>
          <p className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            {prompt.usage}
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Prompt</h2>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Kopyalandı!" : "Kopyala"}
            </button>
          </div>
          <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-sm overflow-x-auto whitespace-pre-wrap">
            {prompt.fullPrompt}
          </pre>
        </section>
      </div>
      <Footer />
    </main>
  );
} 