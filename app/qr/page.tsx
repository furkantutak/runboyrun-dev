"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function QRPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-white to-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        whileHover={{ scale: 1.03 }}
      >
        🎁 Etkinlik Özel Hediye
      </motion.h1>
      <p className="text-center mb-6 max-w-md text-lg">
        <span className="font-medium">RunBoyRun.dev</span> sahnesinden sana küçük bir teşekkür: <br />
        <strong>Cursor Prompt Pack + VS Code/Cursor Taktikleri</strong> seni bekliyor.
      </p>

      <motion.img
        src="/qr-runboyrun-dev.png"
        alt="RunBoyRun Prompt QR"
        width={200}
        height={200}
        className="mb-8 rounded-lg shadow-xl"
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <Link
        href="/prompt-pack"
        className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition transform hover:scale-105 shadow"
      >
        🎯 İçeriğe Git
      </Link>
    </motion.div>
  );
}