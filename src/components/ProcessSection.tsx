import { Search, Pencil, CheckCircle, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Gratuito",
    description: "Analisamos seu negócio, mercado e objetivos para entender exatamente o que você precisa.",
  },
  {
    number: "02",
    icon: Pencil,
    title: "Criação",
    description: "Desenvolvemos sua solução digital com design exclusivo e tecnologia de ponta.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Aprovação",
    description: "Você acompanha cada etapa e aprova o projeto antes do lançamento oficial.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento",
    description: "Colocamos seu projeto no ar com todas as otimizações necessárias para performance.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Gestão e Tráfego",
    description: "Implementamos estratégias de marketing digital para atrair clientes e gerar vendas.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            Processo simples,
            <br />
            <span className="gradient-text">resultados extraordinários</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do primeiro contato ao sucesso do seu projeto, acompanhamos cada
            etapa para garantir a excelência.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-camaly-green via-camaly-turquoise to-camaly-blue transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Content */}
              <div
                className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
              >
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-shadow duration-300 group">
                  <span className="inline-block text-sm font-bold text-camaly-green mb-2">
                    Passo {step.number}
                  </span>
                  <h3 className="text-xl font-semibold font-heading mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-camaly-green to-camaly-turquoise flex items-center justify-center shadow-glow">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
