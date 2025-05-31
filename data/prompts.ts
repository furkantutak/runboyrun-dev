export interface Prompt {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullPrompt: string;
  usage: string;
  example?: string;
}

export const prompts: Prompt[] = [
  {
    id: "1",
    slug: "component-builder",
    title: "📦 Component Builder",
    category: "Development",
    description: "Create responsive, accessible React components with modern best practices.",
    fullPrompt: `You are a React component expert. Create a responsive, accessible React component for a modal dialog. 

Requirements:
- Use TypeScript
- Include proper ARIA attributes
- Handle keyboard navigation (ESC, Tab, Enter)
- Support both controlled and uncontrolled modes
- Include animation with framer-motion
- Use Tailwind CSS for styling
- Add proper focus management

Please provide the complete component code with TypeScript interfaces and usage example.`,
    usage: "Perfect for building reusable UI components with accessibility in mind. Use in React/Next.js projects."
  },
  {
    id: "2",
    slug: "test-generator",
    title: "🧪 Test Generator",
    category: "Development",
    description: "Generate comprehensive unit tests using Vitest and React Testing Library.",
    fullPrompt: `Generate Vitest + React Testing Library unit tests for a form component with validation.

Focus on:
- Testing form validation logic
- User interactions (typing, clicking, submitting)
- Error states and messages
- Accessibility testing with jest-axe
- Edge cases and boundary conditions
- Mock external dependencies

Provide complete test suite with setup and teardown functions.`,
    usage: "Use this to quickly generate comprehensive test suites for your React components."
  },
  {
    id: "3", 
    slug: "daily-focus",
    title: "⏱️ Daily Focus Prompt",
    category: "Productivity",
    description: "Optimize your daily tasks based on your current context and priorities.",
    fullPrompt: `Analyze my current task list and suggest the top 3 most important tasks for today.

Consider:
- Deadlines and urgency
- Impact and importance matrix
- Current energy levels and focus
- Dependencies between tasks
- Available time blocks

Format the response with:
1. Top 3 tasks with reasoning
2. Suggested time allocation
3. Energy level matching
4. Quick wins for momentum`,
    usage: "Perfect for morning planning sessions or when feeling overwhelmed with tasks."
  },
  {
    id: "4",
    slug: "commit-summarizer", 
    title: "🧠 Commit Summarizer",
    category: "Cursor",
    description: "Transform your git commits into professional changelogs and release notes.",
    fullPrompt: `Analyze all recent commits in this branch and create a professional changelog.

Format:
## What's New
- Feature additions with brief descriptions

## Improvements  
- Enhancements and optimizations

## Bug Fixes
- Issues resolved

## Technical Changes
- Refactoring and internal improvements

Use clear, user-friendly language and group related changes together.`,
    usage: "Perfect for creating release notes, team updates, or project documentation."
  },
  {
    id: "5",
    slug: "hidden-power",
    title: "🧩 Hidden Power Prompt", 
    category: "Bonus",
    description: "Unlock creative automation ideas for your workflow and file organization.",
    fullPrompt: `Design an intelligent file organization system prompt that could automatically organize my workspace.

Consider:
- File types and project contexts
- Naming conventions and patterns
- Folder hierarchies that make sense
- Automated tagging and categorization
- Search optimization
- Backup and version control integration

Provide a comprehensive system design with example folder structures and automation rules.`,
    usage: "Use this to reimagine and optimize your digital workspace organization."
  }
];

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find(prompt => prompt.slug === slug);
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter(prompt => prompt.category === category);
} 