export type Prompt = {
  id: string;
  category: string;
  title: string;
  description: string;
  example: string;
};

export const PROMPT_CATEGORIES = [
  "development",
  "productivity",
  "ui-ux",
  "testing",
  "deployment",
] as const;

export const PROMPTS: Prompt[] = [
  {
    id: "dev-1",
    category: "development",
    title: "Next.js API Route Oluşturucu",
    description: "REST API endpoint'i için TypeScript ile güçlendirilmiş bir Next.js API route şablonu oluşturur.",
    example: 'Create a Next.js API route for user authentication with TypeScript, including request validation and error handling.',
  },
  {
    id: "dev-2",
    category: "development",
    title: "React Component Generator",
    description: "Modern best practice'lere uygun, TypeScript ve styling içeren bir React komponenti oluşturur.",
    example: 'Create a React component for a dashboard card with TypeScript, styling, and proper prop types.',
  },
  {
    id: "prod-1",
    category: "productivity",
    title: "Git Commit Mesajı Yazma",
    description: "Conventional commits formatında, açıklayıcı commit mesajları oluşturur.",
    example: 'Write a commit message for adding new authentication features with JWT implementation.',
  },
  {
    id: "ui-1",
    category: "ui-ux",
    title: "Tailwind UI Pattern",
    description: "Yaygın UI pattern'leri için hazır Tailwind CSS class'ları oluşturur.",
    example: 'Create a responsive card grid layout with hover effects and dark mode support using Tailwind CSS.',
  },
  {
    id: "test-1",
    category: "testing",
    title: "Jest Test Generator",
    description: "React komponentleri için kapsamlı Jest testleri oluşturur.",
    example: 'Write Jest tests for a React form component with validation and API submission.',
  },
  {
    id: "deploy-1",
    category: "deployment",
    title: "Docker Compose Yapılandırması",
    description: "Çok katmanlı uygulamalar için Docker Compose yapılandırması oluşturur.",
    example: 'Create a Docker Compose setup for a Next.js app with PostgreSQL and Redis.',
  },
]; 