"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    title: "Etkinlik Sunumları",
    description: "RunBoyRun ile bir etkinlikte sunum yaparken dikkatleri üzerine topla. Konteks asla kaybolmaz.",
  },
  {
    title: "Startup Tanıtımı",
    description: "Yatırımcılara veya topluluğa startup'ını anlatırken güçlü ve sade bir altyapı sun.",
  },
  {
    title: "Teknik Demo Ortamı",
    description: "Kod tabanını, yapay zekâ yeteneklerini veya altyapı çözümlerini canlı bir sahnede göster.",
  },
  {
    title: "Kişisel Marka Sitesi",
    description: "CV değil, bir hareket. Seni anlatan sistemli bir dijital kimlik sun.",
  },
];

export default function UseCaseCards() {
  return (
    <motion.section
      className="py-20 px-4 max-w-6xl mx-auto space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-center sm:text-4xl">
        Nerelerde Kullanılır?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {useCases.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition duration-300 bg-background"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 