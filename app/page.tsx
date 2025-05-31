"use client";

import { Container } from "@/components/Container";
import { Title } from "@/components/Title";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>RunBoyRun.dev</Title>
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Kod senin dilin. Bu platform senin sahnen. 🚀
        </motion.p>
      </motion.div>
    </Container>
  );
}
