import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
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

const ProjectCard = ({ 
  title, 
  category, 
  date, 
  image, 
  description, 
  technologies,
  link,
  github 
}: ProjectCardProps) => {
  return (
    <div className="group relative block rounded-[2.5rem] overflow-hidden card-hover bg-card">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted rounded-t-[2.5rem]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Category and Date */}
        <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
          <span className="px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md bg-primary/90 text-primary-foreground border border-white/20">
            {category}
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
            {date}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Projeto
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Código Fonte
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
