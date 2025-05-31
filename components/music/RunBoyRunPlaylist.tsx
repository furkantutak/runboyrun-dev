"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";

interface RunBoyRunPlaylistProps {
  playlistId: string;
}

export default function RunBoyRunPlaylist({ playlistId }: RunBoyRunPlaylistProps) {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        {/* Blur Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl blur-xl" />
        
        {/* Content Container */}
        <div className="relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-border">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Music2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">RunBoyRun Soundtrack</h2>
              <p className="text-sm text-muted-foreground">Kod Yazarken Koş</p>
            </div>
          </div>

          {/* Spotify Embed */}
          <div className="relative aspect-[3/1] w-full">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${playlistId}`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </div>

          {/* Footer Note */}
          <p className="mt-4 text-sm text-muted-foreground italic text-center">
            "Bu playlist, bu siteyi kodlarken gerçekten çaldı."
          </p>
        </div>
      </div>
    </motion.div>
  );
} 