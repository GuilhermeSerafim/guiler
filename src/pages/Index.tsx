import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { projects, inspirationalQuotes } from "@/data/projects";
import profileSpeaking from "@/assets/profile-speaking.jpg";
import profileSide from "@/assets/profile-side.jpg";
import { Link } from "react-router-dom";

const Index = () => {
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

        {/* Contact CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/80 p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              Vamos construir algo incrível juntos
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Pronto para colaborar? Vamos nos conectar e transformar ideias em
              realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <a
                href="https://instagram.com/iamguiler"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/90 hover:scale-105 transition-all"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/5511970349947"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/90 hover:scale-105 transition-all"
              >
                WhatsApp
              </a>
              <a
                href="https://x.com/guilerdev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/90 hover:scale-105 transition-all"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 max-w-3xl mx-auto justify-items-center sm:justify-items-center">
            <div className="text-center w-full">
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-accent transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-accent transition-colors"
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-accent transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-accent transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center w-full">
              <h3 className="font-semibold mb-4">Projetos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#georisk"
                    className="hover:text-accent transition-colors"
                  >
                    GeoRisk
                  </a>
                </li>
                <li>
                  <a
                    href="#play-senac"
                    className="hover:text-accent transition-colors"
                  >
                    Play Senac
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center w-full">
              <h3 className="font-semibold mb-4">Conecte-se</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/GuilhermeSerafim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/guilherme-da-silva-serafim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/iamguiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/guilerdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@iamguiler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511970349947"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Guilherme Serafim • Engenheiro de Software</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
