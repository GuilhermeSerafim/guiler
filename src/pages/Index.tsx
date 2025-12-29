import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { projects } from "@/data/projects";
import profileSpeaking from "@/assets/profile-speaking.jpg";
import profileSide from "@/assets/profile-side.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Inspirational Quote Section */}
        <section className="py-12 max-w-4xl mx-auto">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 p-8 md:p-12 text-center animate-scale-in border border-border/50">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground leading-relaxed">
              "A inovação acontece na interseção entre curiosidade e
              persistência."
            </blockquote>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Projetos em Destaque
            </h2>
            <span className="text-sm font-medium text-muted-foreground px-4 py-2 rounded-full bg-muted/60">
              {projects.length} Projetos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`animate-slide-up stagger-${index + 1}`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Philosophy Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-8 md:p-12 animate-scale-in border border-border/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Filosofia & Expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Explorando mentes e galáxias através do código"
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Domínio Full Stack: Frontend (React, Angular) + Backend
                    (.NET, Spring Boot)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Construindo soluções escaláveis e sustentáveis com
                    princípios de arquitetura limpa
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">
                    Apaixonado por criar tecnologia que conecta potencial humano
                    e inovação
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden">
                <img
                  src={profileSpeaking}
                  alt="Speaking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mt-8">
                <img
                  src={profileSide}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 text-center animate-scale-in shadow-xl shadow-primary/20">
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
                Vamos construir algo incrível juntos?
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Pronto para transformar ideias em realidade? Estou disponível
                para novos projetos e colaborações disruptivas
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => navigate("/contact")}
                className=" md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all"
              >
                Iniciar um projeto
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simplificado */}
      <footer className="border-t border-border mt-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col items-center gap-8">
            {/* Ícones de Redes Sociais */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/GuilhermeSerafim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-da-silva-serafim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/iamguiler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://x.com/guilerdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="X (Twitter)"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://www.youtube.com/@iamguiler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="YouTube"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://wa.me/5511970349947"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2025 Guilherme Serafim • Engenheiro de Software</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
