import {
  Globe,
  ShoppingCart,
  Layers,
  Smartphone,
  Gamepad2,
  TrendingUp,
  Palette,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e fortalecem sua marca na internet.",
    color: "from-camaly-green to-camaly-turquoise",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerces completos e otimizados para vender mais e conquistar novos clientes.",
    color: "from-camaly-turquoise to-camaly-blue",
  },
  {
    icon: Layers,
    title: "Plataformas Web",
    description: "Sistemas e plataformas personalizadas que automatizam e escalam seu negócio.",
    color: "from-camaly-blue to-camaly-wine",
  },
  {
    icon: Smartphone,
    title: "Aplicativos",
    description: "Apps mobile e web apps que conectam sua empresa diretamente ao cliente.",
    color: "from-camaly-wine to-camaly-yellow",
  },
  {
    icon: Gamepad2,
    title: "Sites de Games",
    description: "Portais gamificados e sites interativos para engajar e fidelizar seu público.",
    color: "from-camaly-yellow to-camaly-green",
  },
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego",
    description: "Campanhas estratégicas de tráfego pago que geram leads e vendas qualificadas.",
    color: "from-camaly-green to-camaly-blue",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Logos, branding e materiais visuais que destacam sua marca no mercado.",
    color: "from-camaly-turquoise to-camaly-yellow",
  },
  {
    icon: MessageSquare,
    title: "Consultoria Digital",
    description: "Diagnóstico completo e estratégias personalizadas para seu crescimento online.",
    color: "from-camaly-blue to-camaly-green",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-camaly-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-camaly-turquoise/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            Soluções digitais que
            <br />
            <span className="gradient-text">transformam negócios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do conceito à execução, criamos experiências digitais completas que
            colocam sua empresa em destaque na internet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 card-hover shadow-card overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-semibold font-heading mb-3 text-card-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
