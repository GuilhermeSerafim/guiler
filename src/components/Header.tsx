import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Adicionado useLocation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  const executeScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const headerOffset = 100;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Fecha menu mobile se estiver aberto

    if (location.pathname === "/") {
      // Se já estamos na home, rola direto
      executeScroll();
    } else {
      // Se não estamos na home, navega para lá passando um estado
      navigate("/", { state: { target: "projects" } });
    }
  };

  // Effect para detectar navegação vindo de outra página com intenção de scroll
  useEffect(() => {
    if (location.pathname === "/" && location.state?.target === "projects") {
      // Um pequeno timeout garante que o DOM da Home foi montado antes de procurar o ID
      setTimeout(() => {
        executeScroll();
        // Limpa o state para evitar scroll indesejado ao dar refresh
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [location]);

  // ... (Lógica de tema permanece igual)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 pill-nav px-4 sm:px-6">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">
                  GS
                </span>
              </div>
              <span className="text-base sm:text-xl font-bold font-serif truncate">
                Guilherme Serafim
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Início
            </Link>
            
            {/* Link atualizado */}
            <a
              href="#projects" // Alterado para âncora ou mantido Link, mas o onClick manda
              onClick={scrollToProjects}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all cursor-pointer"
            >
              Projetos
            </a>

            <Link
              to="/about"
              onClick={scrollToTop}
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Sobre
            </Link>
            <a
              href="/GuilhermeSerafim_Fullstack.pdf"
              download
              className="text-sm font-medium hover:bg-muted/60 rounded-full px-4 py-2 transition-all"
            >
              Currículo
            </a>
          </nav>

          {/* Actions e Mobile Menu Button (Mantidos iguais) */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
             <button onClick={toggleTheme} className="p-1.5 sm:p-2 rounded-full hover:bg-muted/60 transition-all">
               {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
             </button>
             <Button onClick={() => navigate("/contact")} className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-2 hover:scale-105 transition-all">
               Entre em Contato
             </Button>
             <button className="md:hidden p-1.5 sm:p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
             </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {/* Link Mobile Atualizado */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
              >
                Projetos
              </a>
              <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
                Sobre
              </Link>
              <a href="/GuilhermeSerafim_Fullstack.pdf" download className="text-sm font-medium hover:text-accent transition-colors">
                Currículo
              </a>
              <Button onClick={() => { navigate("/contact"); setIsMenuOpen(false); }} className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full">
                Entre em Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;