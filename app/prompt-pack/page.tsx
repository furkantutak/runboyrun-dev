"use client";

import React from 'react';
import Link from 'next/link';
import PromptHero from "@/components/PromptHero";
import Footer from "@/components/Footer";
import { prompts } from "@/data/prompts";

// Group prompts by category
const promptsByCategory = prompts.reduce((acc, prompt) => {
  if (!acc[prompt.category]) {
    acc[prompt.category] = [];
  }
  acc[prompt.category].push(prompt);
  return acc;
}, {} as Record<string, typeof prompts>);

export default function PromptPackPage() {
  return (
    <main className="py-12">
      <PromptHero />
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">🚀 RunBoyRun Prompt Pack</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Etkinlik sonrası üretkenliğinizi artırmak, sizi bir adım öne taşımak için özel olarak hazırlanmıştır.
        </p>

        {Object.entries(promptsByCategory).map(([category, categoryPrompts]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {categoryPrompts.map((prompt) => (
                <Link
                  key={prompt.id}
                  href={`/prompt-pack/${prompt.slug}`}
                  className="block p-6 rounded-xl border shadow hover:shadow-lg transition-all bg-white dark:bg-zinc-900 hover:scale-[1.02]"
                >
                  <h3 className="font-medium text-lg mb-2">{prompt.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{prompt.description}</p>
                  <span className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-800">
                    Detayları gör →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
        
        <section className="mt-16 text-center px-4">
          <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            👀 QR'ı tarayıp buraya geldiğin için teşekkürler.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 mt-2">
            Birlikte üretmenin ne kadar güçlü olabileceğini burada yeniden hatırlıyoruz.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}