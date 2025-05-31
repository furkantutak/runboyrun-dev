"use client";

import { ExternalLink } from "lucide-react";

interface TechDetailModalProps {
  title: string;
  description: string;
  features?: string[];
  whyWeChose?: string;
  docsUrl?: string;
}

export default function TechDetailModal({
  title,
  description,
  features = [],
  whyWeChose,
  docsUrl,
}: TechDetailModalProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {features.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold">Özellikler</h4>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {whyWeChose && (
        <div className="space-y-2">
          <h4 className="font-semibold">Neden {title}?</h4>
          <p className="text-muted-foreground leading-relaxed">
            {whyWeChose}
          </p>
        </div>
      )}

      {docsUrl && (
        <a
          href={docsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors"
        >
          Dokümantasyona Git
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
} 