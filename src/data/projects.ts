export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  isMaintenance?: boolean;
}

export const projects: Project[] = [
  {
    id: "geo-risk",
    title: "GeoRisk",
    category: "Plataforma de Análise de Riscos Ambientais",
    date: "2025",
    image: "/geo-risk.png",
    description:
      "Plataforma geoespacial que combina uma API em FastAPI com um front-end em Next.js para análise de risco de alagamento em Curitiba. A API calcula distância a corpos d’água, estima níveis de risco com base em altitude e proximidade de rios e utiliza IA para gerar relatórios técnicos. O front‑end exibe mapas 3D interativos, permite seleção de pontos ou áreas, ajuste de raio de análise e busca de endereços; integra a API para exibir o nível de risco e explicações técnicas.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Mapbox GL JS",
      "Shadcn/UI",
      "TailwindCSS",
      "LangChain",
      "OpenAI API",
      "FAISS",
      "TypeScript",
      "Vite",
      "Shapely",
      "PyProj",
    ],
    link: "https://geo-risk-front.vercel.app",
    github: "https://github.com/GuilhermeSerafim/geo-risk-front",
  },
  {
    id: "play-senac",
    title: "Play Senac",
    category: "Sistema de Reservas de Quadras",
    date: "2025",
    image: "/play-senac.png",
    description:
      "Sistema web para agendamento e gerenciamento de quadras esportivas no campus do Senac. Permite criar, visualizar, editar e cancelar reservas, com painel administrativo e calendário em tempo real, substituindo processos manuais por uma operação digital centralizada.",
    technologies: [
      "Angular",
      "Java",
      "Spring Boot",
      "MySQL",
      "TypeScript",
      "Figma",
    ],
    link: "https://play-senac.vercel.app",
    github: "https://github.com/GuilhermeSerafim/play-senac",
  },
];

export const inspirationalQuotes = [
  "In every challenge, I see an opportunity for learning, like an astronomer faced with a cosmic mystery.",
  "Code is poetry written in logic, where each function tells a story of problem-solving.",
  "Innovation happens at the intersection of curiosity and persistence.",
  "The best solutions emerge when technology serves human needs, not the other way around.",
  "Every project is a journey of discovery, revealing not just technical solutions but also personal growth.",
];
