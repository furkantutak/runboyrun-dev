export interface SprintEntry {
  id: string;
  title: string;
  date: string;
  emoji: string;
  summary: string;
  highlights: string[];
  contributors: { name: string; contribution: string }[];
  techStack?: string[];
} 