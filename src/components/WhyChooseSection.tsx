import { Check, Zap, Shield, BarChart3, HeartHandshake, Eye } from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "Adaptação às suas necessidades",
    description: "Cada projeto é único. Entendemos seu negócio e criamos soluções sob medida.",
  },
  {
    icon: Zap,
    title: "Projetos rápidos e profissionais",
    description: "Metodologia ágil que entrega resultados em tempo recorde sem perder qualidade.",
  },
  {
    icon: Shield,
    title: "Suporte completo",
    description: "Acompanhamento contínuo desde o diagnóstico até o pós-lançamento.",
  },
  {
    icon: BarChart3,
    title: "Estratégias que vendem",
    description: "Não só desenvolvemos, mas implementamos estratégias de tráfego para gerar vendas.",
  },
  {
    icon: Check,
    title: "Resultados reais",
    description: "Nosso foco é no seu crescimento. Medimos e otimizamos constantemente.",
  },
  {
    icon: Eye,
    title: "Visibilidade garantida",
    description: "Colocamos sua empresa onde seus clientes estão: na internet.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-camaly-green/5 via-camaly-turquoise/5 to-camaly-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
            Por que a Camaly?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            O parceiro ideal para sua
            <br />
            <span className="gradient-text">transformação digital</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Como o camaleão que se adapta perfeitamente ao ambiente, nós nos
            adaptamos às necessidades do seu negócio para entregar resultados
            excepcionais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-camaly-green/30 transition-all duration-300 hover:shadow-card group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-camaly-green to-camaly-turquoise flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold font-heading mb-2 text-card-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
