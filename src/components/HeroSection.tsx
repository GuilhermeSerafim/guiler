import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-main.jpg";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-muted via-card to-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={profileImage}
            alt="Professional portrait"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Developer & Innovator
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1 italic">
              "In every challenge, I see an opportunity for learning, like an astronomer faced with a cosmic mystery."
            </p>
            <p className="text-foreground text-base md:text-lg leading-relaxed max-w-xl animate-slide-up stagger-2">
              Transforming ideas into impactful digital solutions. Specialized in AI, full-stack development, 
              and creating technologies that make a difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
              View Projects
            </Button>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
