"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";
import RunBoyRunPlaylist from "@/components/music/RunBoyRunPlaylist";
import ParallaxBackground from "@/components/ui/ParallaxBackground";

export default function SoundtrackPage() {
  // This is a placeholder - you'll need to replace this with your actual playlist ID
  const playlistId = "YOUR_PLAYLIST_ID";

  return (
    <div className="relative min-h-screen w-full py-24">
      <ParallaxBackground className="opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-full px-4 py-2 mb-8">
            <Music className="w-4 h-4" />
            Soundtrack
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            RunBoyRun Soundtrack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her büyük hareketin bir ritmi vardır. İşte bizimki.
          </p>
        </motion.div>

        <RunBoyRunPlaylist playlistId={playlistId} />
      </div>
    </div>
  );
} 