import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Fashion",
    category: "Loja Virtual",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    gradient: "from-camaly-green to-camaly-turquoise",
  },
  {
    title: "App Delivery",
    category: "Aplicativo Mobile",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    gradient: "from-camaly-turquoise to-camaly-blue",
  },
  {
    title: "Portal Corporativo",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-camaly-blue to-camaly-wine",
  },
  {
    title: "Plataforma SaaS",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-camaly-wine to-camaly-yellow",
  },
  {
    title: "Landing Page Startup",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    gradient: "from-camaly-yellow to-camaly-green",
  },
  {
    title: "Game Portal",
    category: "Site de Games",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    gradient: "from-camaly-green to-camaly-blue",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground">
            Projetos que
            <br />
            <span className="gradient-text">transformaram negócios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos projetos que desenvolvemos e os resultados que
            alcançamos para nossos clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sm font-medium text-primary-foreground/80 mb-1">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-primary-foreground mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                  <span>Ver projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom info (always visible) */}
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs text-camaly-green font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold font-heading text-card-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
