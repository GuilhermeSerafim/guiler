import profileAlt from "@/assets/profile-dark.jpg";

const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
            Construindo o futuro, uma linha de código por vez
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Conecto a elegância do frontend com a robustez do backend. Com a
            minha expertise crio soluções completas que são poderosas e fáceis
            de usar.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {/* Frontend */}
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Angular
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              TypeScript
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              JavaScript
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Redux
            </span>

            {/* Backend */}
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Java
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Spring Boot
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              .NET
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              C#
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Node.js
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Swift
            </span>

            {/* Cloud & DevOps */}
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              AWS
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Docker
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Vercel
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Render
            </span>

            {/* Databases */}
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Oracle
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              MySQL
            </span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              MongoDB
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={profileAlt}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
