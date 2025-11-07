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
    category: "AI & Geospatial Analysis",
    date: "2024",
    image: "/placeholder.svg",
    description: "An innovative platform leveraging artificial intelligence and geospatial data to assess and visualize environmental risks. GeoRisk combines machine learning algorithms with geographic information systems to provide real-time risk analysis for natural disasters, climate change impacts, and environmental hazards.",
    technologies: ["Python", "TensorFlow", "GIS", "React", "FastAPI", "PostgreSQL"],
    link: "#",
  },
  {
    id: "play-senac",
    title: "Play Senac",
    category: "Educational Platform",
    date: "2024",
    image: "/placeholder.svg",
    description: "A modern e-learning platform designed to revolutionize digital education at Senac. Features interactive courses, real-time collaboration, gamification elements, and adaptive learning paths. Built with scalability and user experience as core principles, serving thousands of students.",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket", "AWS", "TypeScript"],
    link: "#",
  },
];

export const inspirationalQuotes = [
  "In every challenge, I see an opportunity for learning, like an astronomer faced with a cosmic mystery.",
  "Code is poetry written in logic, where each function tells a story of problem-solving.",
  "Innovation happens at the intersection of curiosity and persistence.",
  "The best solutions emerge when technology serves human needs, not the other way around.",
  "Every project is a journey of discovery, revealing not just technical solutions but also personal growth.",
];
