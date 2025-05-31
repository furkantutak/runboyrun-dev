"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ children, title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-background rounded-lg shadow-lg max-w-lg w-full mx-4 overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 