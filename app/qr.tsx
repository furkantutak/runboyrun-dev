"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QRPage() {
  return (
    <motion.section
      className="py-20 px-4 max-w-4xl mx-auto space-y-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold">
        QR Kodunu Tara ve Keşfet
      </h1>
      <p className="text-muted-foreground">
        Etkinlikte bu QR kodunu tarayarak Prompt Pack'in kilidini açabilirsin. 
        Bu, sana özel içeriklere ve deneyimlere erişim sağlar.
      </p>
      <Image
        src="/images/qr-code-example.png"
        alt="QR Code Example"
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-muted-foreground">
        QR kodunu etkinlikte tarayarak, anında özel içeriklere ulaş ve 
        RunBoyRun dünyasına adım at.
      </p>
    </motion.section>
  );
} 