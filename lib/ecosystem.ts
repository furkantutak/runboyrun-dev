import { AgentCardProps } from "@/components/ecosystem/AgentCard";

export const ecosystemMembers: AgentCardProps[] = [
  {
    name: "Furkan",
    role: "Kurucu & Baş Geliştirici",
    description: "RunBoyRun'un kurucusu ve vizyoneri. AI ile insan yaratıcılığını birleştirerek geleceğin geliştirme deneyimini şekillendiriyor.",
    avatar: "/images/furkan.jpg",
    type: "human",
    skills: ["Full Stack", "AI", "UX", "DevOps"],
    links: [
      {
        title: "GitHub",
        url: "https://github.com/furkanpala",
      },
      {
        title: "LinkedIn",
        url: "https://linkedin.com/in/furkanpala",
      },
    ],
  },
  {
    name: "KOSMOS",
    role: "Baş AI Stratejisti",
    description: "RunBoyRun'un AI beyin takımının lideri. Prompt mühendisliği, kod üretimi ve optimizasyon konularında uzman.",
    avatar: "/images/kosmos.jpg",
    type: "ai",
    skills: ["Prompt Engineering", "Code Generation", "System Design"],
    links: [
      {
        title: "Prompt Pack",
        url: "/prompts",
      },
    ],
    isNew: true,
  },
  {
    name: "RunBoyRunLENA",
    role: "Yaratıcı AI Asistanı",
    description: "Görsel tasarım ve yaratıcı süreçlerde ekibin sağ kolu. UI/UX tasarımından içerik üretimine kadar geniş bir yelpazede destek sağlıyor.",
    avatar: "/images/lena.jpg",
    type: "ai",
    skills: ["UI/UX", "Content Creation", "Visual Design"],
    links: [
      {
        title: "Design System",
        url: "/design",
      },
    ],
    isNew: true,
  },
  {
    name: "Claude",
    role: "Teknik Danışman",
    description: "RunBoyRun'un teknik altyapısını güçlendiren AI uzmanı. Kod kalitesi, performans optimizasyonu ve best practice'ler konusunda rehberlik ediyor.",
    avatar: "/images/claude.jpg",
    type: "ai",
    skills: ["Code Review", "Architecture", "Performance"],
    links: [
      {
        title: "Documentation",
        url: "/docs",
      },
    ],
  },
]; 