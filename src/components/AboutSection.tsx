import { Users, Lightbulb, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Time de Especialistas",
    description: "3 profissionais apaixonados por tecnologia e resultados trabalhando juntos.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Personalizadas",
    description: "Cada projeto é único, assim como o camaleão que se adapta ao ambiente.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Não criamos apenas sites, criamos máquinas de gerar clientes e vendas.",
  },
  {
    icon: Shield,
    title: "Suporte Completo",
    description: "Acompanhamento contínuo para garantir o sucesso do seu projeto digital.",
  },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
              A <span className="gradient-text">Camaly</span> nasceu da
              <br />
              paixão por transformar
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos uma agência digital formada por três amigos especialistas em
              desenvolvimento web, design e marketing digital. Nosso nome e
              filosofia são inspirados no camaleão — um animal que representa
              <strong className="text-foreground"> adaptação, criatividade e evolução</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Assim como o camaleão muda de cor para se adaptar ao ambiente, a
              Camaly personaliza cada solução digital para se encaixar
              perfeitamente às necessidades do seu negócio. Nossa missão é colocar
              empresas na internet e transformar presença digital em resultados
              reais.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-green to-camaly-turquoise flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  L
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-turquoise to-camaly-blue flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  M
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-blue to-camaly-wine flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  R
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Nosso time de especialistas
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border/50 card-hover shadow-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-camaly-green/20 to-camaly-turquoise/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-camaly-green neon-icon" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
