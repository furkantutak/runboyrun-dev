"use client";

import { motion } from "framer-motion";

export default function AboutRunBoyRun() {
  return (
    <motion.section
      className="max-w-3xl mx-auto py-16 px-4 space-y-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Neden RunBoyRun?
      </h2>
      <p className="text-muted-foreground text-lg">
        Kod yazmayı bilmeden, sadece bir fikirle başlayan bu yolculuk; bugün
        binlerce kişinin ilham alabileceği bir dönüşümün adı oldu.  
      </p>
      <p className="text-muted-foreground">
        RunBoyRun.dev, kodla düşünmeyi, yapay zekayla üretmeyi ve
        sınırları zorlamayı temsil eder. Bu platform, kendi sistemini kurmak
        isteyen herkes için bir örnek, bir hareket, bir vizyondur.
      </p>
    </motion.section>
  );
} 