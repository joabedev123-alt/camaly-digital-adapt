import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStart",
    content: "A Camaly transformou completamente nossa presença digital. Em 3 meses, triplicamos nossas vendas online. Profissionalismo e dedicação impressionantes!",
    rating: 5,
    avatar: "CS",
  },
  {
    name: "Ana Martins",
    role: "Fundadora, Bella Moda",
    content: "Nossa loja virtual ficou incrível! O time entendeu exatamente o que precisávamos e entregou muito além das expectativas. Super recomendo!",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Roberto Santos",
    role: "Diretor, Inovare Consultoria",
    content: "O site institucional que desenvolveram para nós transmite exatamente a credibilidade que buscávamos. Clientes novos citam o site como diferencial.",
    rating: 5,
    avatar: "RS",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 text-camaly-green/10">
        <Quote className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-10 w-20 h-20 text-camaly-turquoise/10 rotate-180">
        <Quote className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            O que nossos clientes
            <br />
            <span className="gradient-text">dizem sobre nós</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é a nossa maior conquista e motivação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-card card-hover group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-camaly-green to-camaly-turquoise flex items-center justify-center shadow-glow">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-camaly-yellow text-camaly-yellow"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-green to-camaly-turquoise flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold font-heading text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
