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
}

export const projects: Project[] = [
  {
    id: "georisk",
    title: "GeoRisk",
    category: "IA & Análise Geoespacial",
    date: "2024",
    image: "/placeholder.svg",
    description: "Uma plataforma inovadora que utiliza inteligência artificial e dados geoespaciais para avaliar e visualizar riscos ambientais. O GeoRisk combina algoritmos de machine learning com sistemas de informação geográfica para fornecer análise de risco em tempo real para desastres naturais, impactos de mudanças climáticas e perigos ambientais.",
    technologies: ["Python", "TensorFlow", "GIS", "React", "FastAPI", "PostgreSQL"],
    link: "#",
    github: "https://github.com/GuilhermeSerafim",
  },
  {
    id: "play-senac",
    title: "Play Senac",
    category: "Plataforma Educacional",
    date: "2024",
    image: "/placeholder.svg",
    description: "Uma plataforma moderna de e-learning projetada para revolucionar a educação digital no Senac. Apresenta cursos interativos, colaboração em tempo real, elementos de gamificação e caminhos de aprendizagem adaptáveis. Construída com escalabilidade e experiência do usuário como princípios fundamentais, atendendo milhares de estudantes.",
    technologies: ["React", "Angular", ".NET", "Spring Boot", "SQL", "Node.js"],
    link: "#",
    github: "https://github.com/GuilhermeSerafim",
  },
];

export const inspirationalQuotes = [
  "In every challenge, I see an opportunity for learning, like an astronomer faced with a cosmic mystery.",
  "Code is poetry written in logic, where each function tells a story of problem-solving.",
  "Innovation happens at the intersection of curiosity and persistence.",
  "The best solutions emerge when technology serves human needs, not the other way around.",
  "Every project is a journey of discovery, revealing not just technical solutions but also personal growth.",
];
