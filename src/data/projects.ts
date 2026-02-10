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