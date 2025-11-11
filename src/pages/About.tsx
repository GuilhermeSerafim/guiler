import Header from "@/components/Header";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import AboutHero from "@/components/AboutHero";

const About = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header />
      <AboutHero />
      <div className="min-h-screen bg-background animate-fade-in">

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div id="about-section" className="mb-16 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
              Sobre Mim
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
              Um espaço para explorar ideias, encontrar inspiração e descobrir
              novas maneiras de ver o mundo.
            </p>
          </div>

          {/* Story Section */}
          <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Minha História
            </h2>
            <p>
              Minha jornada começou com uma simples pergunta: E se eu pudesse
              criar soluções que realmente fizessem a diferença na vida das
              pessoas através da tecnologia?
            </p>
            <p>
              Em um mundo repleto de informação, senti a necessidade de algo
              diferente—um profissional que prioriza a qualidade sobre a
              quantidade, conexões autênticas sobre números, e resultados reais
              sobre promessas vazias.
            </p>
            <p>
              Exploro tecnologias que importam: práticas de desenvolvimento que
              realmente funcionam, experiências que transformam ideias em
              realidade, e estratégias de crescimento que levam a mudanças
              duradouras. Minha abordagem é baseada em curiosidade, respaldada
              por pesquisa e enriquecida pela experiência prática.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Minha Missão</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Acredito que a forma como abordamos os desafios molda como os
                resolvemos. Dedico-me a:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>
                    Desenvolver soluções equilibradas que priorizam resultados
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>
                    Explorar novas tecnologias com curiosidade e respeito
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>
                    Criar código limpo e manutenível que resolve problemas reais
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>
                    Abraçar o crescimento profissional como uma jornada contínua
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Meus Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-muted">
                <h3 className="text-xl font-semibold mb-3">Autenticidade</h3>
                <p className="text-muted-foreground">
                  Compartilho experiências reais, reflexões honestas e insights
                  genuínos—não perfeição fabricada.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted">
                <h3 className="text-xl font-semibold mb-3">Dedicação</h3>
                <p className="text-muted-foreground">
                  Cada projeto é cuidadosamente planejado, desenvolvido com
                  atenção e projetado para agregar valor real.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted">
                <h3 className="text-xl font-semibold mb-3">Colaboração</h3>
                <p className="text-muted-foreground">
                  Valorizo diferentes perspectivas e acredito que cada projeto
                  merece respeito e dedicação única.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted">
                <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                <p className="text-muted-foreground">
                  Promovo práticas que são sustentáveis e escaláveis, sempre
                  buscando as melhores soluções.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12 rounded-2xl bg-card">
            <h2 className="text-3xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato para discutirmos seu próximo projeto e
              transformarmos suas ideias em realidade.
            </p>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
          </section>
        </main>
      </div>
    </main>
  );
};

export default About;
