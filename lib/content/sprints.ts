export interface SprintEntry {
  id: string;
  title: string;
  date: string;
  emoji: string;
  summary: string;
  highlights: string[];
  contributors: {
    name: string;
    contribution: string;
  }[];
  screenshots?: {
    url: string;
    caption: string;
  }[];
  techStack?: string[];
}

export const sprintEntries: SprintEntry[] = [
  {
    id: "sprint-24-8",
    title: "Parallax & Manifesto",
    date: "2024-03-24",
    emoji: "🚀",
    summary: "RunBoyRun'un manifestosu şekillenmeye başladı. Parallax efektleri ve animasyonlarla siteye ruh kattık.",
    highlights: [
      "Manifesto sayfası için dört ana bölüm tasarlandı: Why, What, Who, How",
      "ParallaxBackground komponenti geliştirildi",
      "Framer Motion ile sayfa geçiş animasyonları eklendi",
      "Dark/Light mode desteği tamamlandı"
    ],
    contributors: [
      {
        name: "Furkan",
        contribution: "Sayfa yapısı ve animasyon sistemi"
      },
      {
        name: "LENA",
        contribution: "UI/UX tasarımı ve parallax efektleri"
      },
      {
        name: "KOSMOS",
        contribution: "Manifesto içeriği ve teknik danışmanlık"
      }
    ],
    techStack: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript"
    ]
  },
  {
    id: "sprint-24-9",
    title: "Ekosistem & Takım",
    date: "2024-03-25",
    emoji: "👥",
    summary: "RunBoyRun artık sadece bir site değil, bir ekip. AgentCard'lar ile ekosistem sayfası hayat buldu.",
    highlights: [
      "AgentCard komponenti tasarlandı ve geliştirildi",
      "Ekip üyelerinin profilleri ve rolleri belirlendi",
      "Responsive grid layout implementasyonu",
      "Hover ve geçiş animasyonları eklendi"
    ],
    contributors: [
      {
        name: "Furkan",
        contribution: "Ekosistem vizyonu ve teknik implementasyon"
      },
      {
        name: "LENA",
        contribution: "Kart tasarımları ve görsel elementler"
      },
      {
        name: "Claude",
        contribution: "Kod optimizasyonu ve best practices"
      }
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Lucide Icons"
    ]
  }
]; 