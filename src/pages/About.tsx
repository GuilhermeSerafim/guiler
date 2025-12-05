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
          
          {/* Intro Section (Seu texto original) */}
          <div id="about-section" className="mb-20 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
              Sobre Mim
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1 max-w-3xl mx-auto">
              A cada era, o espaço-tempo se dobra: ora espaço sem tempo; ora
              tempo sem espaço. Quando os dois colidem, nasce a disrupção — como
              as borboletas negras que prosperaram na 2ª Revolução Industrial
              graças à fuligem. Não apenas me adapto — eu sou a própria
              disrupção.
            </p>
          </div>

          {/* New Story & Mission Split Section */}
          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up stagger-2">
            {/* A Origem */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary/60 inline-block rounded-full"></span>
                A Origem
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Minha trajetória não é linear; é quântica. Onde existia ruído, aprendi a
                identificar padrões. Assim como a biologia evolui através de erros e acertos,
                minha codificação nasceu da necessidade de impor ordem ao caos digital.
                Não escrevo apenas linhas de comando; construo ecossistemas que respiram,
                reagem e sobrevivem à obsolescência programada.
              </p>
            </div>

            {/* A Missão */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary/60 inline-block rounded-full"></span>
                A Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Transcender a tela. O código é apenas a ferramenta; o objetivo real é
                dobrar a realidade. Minha missão é arquitetar soluções que não apenas
                resolvam problemas atuais, mas que antecipem as perguntas que ainda
                ninguém teve coragem de fazer. É transformar a complexidade bruta em
                elegância funcional.
              </p>
            </div>
          </section>

          {/* New Values Section */}
          <section className="mb-24 animate-slide-up stagger-3">
            <h2 className="text-3xl font-bold text-center mb-12">Pilares Fundamentais</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Antifragilidade</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  O caos não me destrói; ele me melhora. Sistemas robustos quebram; 
                  sistemas antifrágeis se fortalecem diante da volatilidade e do erro.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Alquimia Digital</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A capacidade de transformar dados brutos e lógica fria em experiências 
                  humanas, intuitivas e de alto valor. Onde há chumbo, vejo ouro.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">Eterno Beta</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A versão final é um mito. A estagnação é o fim. A busca pela 
                  próxima iteração, a próxima refatoração e a próxima quebra de paradigma é constante.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section - Adjusted tone slightly */}
          <section className="text-center py-12 rounded-2xl bg-muted/30 border border-border/50 animate-slide-up stagger-4">
            <h2 className="text-3xl font-bold mb-4">Pronto para a Disrupção?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não procuro apenas projetos, procuro desafios que exijam visão. 
              Vamos construir o futuro antes que ele chegue.
            </p>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Iniciar Colaboração
            </Button>
          </section>
          
        </main>
      </div>
    </main>
  );
};

export default About;