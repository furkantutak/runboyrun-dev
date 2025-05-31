"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <motion.section
      className="py-20 px-4 text-center max-w-4xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold">
        Hazırsan, harekete geçme zamanı.
      </h2>
      <p className="text-muted-foreground">
        Bu bir portfolyo değil, bu bir hareket.  
        Aşağıdaki bağlantılarla RunBoyRun dünyasına sen de dahil olabilirsin.
      </p>

      <div className="flex justify-center flex-wrap gap-4">
        <Link
          href="/prompt-pack"
          className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow hover:opacity-90 transition"
        >
          🎁 Prompt Pack'i İncele
        </Link>
        <Link
          href="/terminal"
          className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow hover:opacity-90 transition"
        >
          👨‍💻 Builder Terminal
        </Link>
        <Link
          href="/qr"
          className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
        >
          📎 Etkinlik QR'ı
        </Link>
      </div>
    </motion.section>
  );
} 