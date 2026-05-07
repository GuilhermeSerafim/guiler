export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  githubFront?: string; 
  githubBack?: string; 
  isMaintenance?: boolean;
  award?: string;
}

export const projects: Project[] = [
  {
    id: "venditus",
    title: "Venditus – Sistema SaaS White-Label para Gestão Empresarial",
    category: "SaaS: CRM, Financeiro e Multi-Tenancy",
    date: "2026",
    image: "/venditus-bg.png",
    description:
      "Plataforma completa de gestão para consultoria e educação, com arquitetura multi-tenant e personalização white-label. O sistema integra CRM avançado com funil de vendas, gestão financeira com fluxo de caixa em tempo real, controle de eventos e dashboard executivo.",
    technologies: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Supabase", 
      "PostgreSQL", "TanStack Query", "React Router", "Tremor", "Recharts", 
      "React Hook Form", "Zod", "Radix UI",
    ],
    link: "https://venditus.vercel.app",
    githubFront: "https://github.com/GuilhermeSerafim/venditus",
  },
  {
    id: "seven-tools",
    title: "SEVEN Tools – Hub de Ferramentas Empresariais",
    category: "Business Tools: Hub de IAs e Recursos Empresariais",
    date: "2026",
    image: "/seven-tools-hero.png",
    description:
      "Hub exclusivo do ecossistema SEVEN para centralizar IAs, ferramentas e recursos organizados por área de negócio. O projeto combina uma SPA React no frontend com uma API FastAPI no backend, estruturando uma base escalável para entregar utilidades empresariais com experiência fluida e deploy moderno.",
    technologies: [
      "React", "TypeScript", "Vite", "Bun", "FastAPI", "Python", "Docker", "PostgreSQL", "Alembic",
    ],
    link: "https://seven-tools.vercel.app/",
    githubFront: "https://github.com/GuilhermeSerafim/seven-tools-front",
    githubBack: "https://github.com/GuilhermeSerafim/seven-tools-back",
  },
  {
    id: "mesa-de-negocios",
    title: "Mesa de Negócios – Landing Page de Conversão",
    category: "Landing Page: Growth, Autoridade e Captação",
    date: "2026",
    image: "/mesa-de-negocios-hero.png",
    description:
      "Landing page da metodologia Mesa de Negócios do Grupo SEVEN / Grupo Nakamura, criada para comunicar autoridade, gerar intenção comercial e conduzir visitantes para aplicação. A implementação usa React, TypeScript, Tailwind CSS e shadcn/ui, com fluxo de CI/CD e deploy contínuo via Vercel.",
    technologies: [
      "React", "TypeScript", "Vite 6", "Tailwind CSS", "Shadcn/UI", "Vercel", "GitHub Actions",
    ],
    link: "https://dennisnakamura.com/",
    githubFront: "https://github.com/GuilhermeSerafim/LP-mesadenegocios",
  },
  {
    id: "geo-risk",
    title: "GeoRisk – Inteligência Preditiva de Riscos Ambientais",
    category: "GovTech: Plataforma de Análise Geoespacial e IA",
    date: "2025",
    image: "/geo-risk.png",
    description:
      "Plataforma avançada de geoprocessamento desenvolvida para a análise preditiva de riscos de alagamento em Curitiba, PR. A solução utiliza uma API robusta em FastAPI para cálculos geodésicos complexos e integração com modelos de IA para geração automática de relatórios técnicos.",
    technologies: [
      "Python", "FastAPI", "Next.js", "React", "Mapbox GL JS", "Shadcn/UI", 
      "TailwindCSS", "LangChain", "OpenAI API", "FAISS", "TypeScript", "Vite", "Shapely", "PyProj",
    ],
    link: "https://geo-risk-front.vercel.app",
    githubFront: "https://github.com/GuilhermeSerafim/geo-risk-front",
    githubBack: "https://github.com/GuilhermeSerafim/geo-risk",
    award: "2º Lugar - OpenAI Hackathon 2025",
  },
  {
    id: "play-senac",
    title: "Play Senac – Digital Facility Orchestration",
    category: "Enterprise: Gestão de Ativos e Agendamento Inteligente",
    date: "2025",
    image: "/play-senac.png",
    description:
      "Ecossistema digital focado na automação e gerenciamento de recursos esportivos do Centro Universitário Senac. O sistema substitui fluxos analógicos por uma interface centralizada com calendário em tempo real e painéis administrativos avançados.",
    technologies: [
      "Angular", "Java", "Spring Boot", "MySQL", "TypeScript", "Figma",
    ],
    link: "https://play-senac.vercel.app",
    githubFront: "https://github.com/GuilhermeSerafim/play-senac", 
    githubBack: "https://github.com/GuilhermeSerafim/play-senac-api",
    isMaintenance: true,
  },
  {
    id: "save-nutri",
    title: "SaveNutri – Inteligência Geoespacial para Alimentação Escolar",
    category: "GovTech: Smart Supply Chain e Segurança Alimentar",
    date: "2025",
    image: "/save-nutri.png",
    description:
      "Solução estratégica para otimização do PNAE (Lei 11.947/2009), operando exclusivamente na região de Teresópolis, RJ. A plataforma utiliza algoritmos de matching geoespacial para redução de custos logísticos e IA generativa para a criação de cardápios nutricionais baseados na safra real dos produtores locais.",
    technologies: [
      "Python", "FastAPI", "Next.js", "OpenAI API", "Mapbox GL JS", "Geopy", "Pydantic", "TypeScript", "TailwindCSS",
    ],
    githubBack: "https://github.com/GuilhermeSerafim/save-nutri-back",
    githubFront: "https://github.com/GuilhermeSerafim/save-nutri-front",
    link: "https://save-nutri.vercel.app/",
  },
];
