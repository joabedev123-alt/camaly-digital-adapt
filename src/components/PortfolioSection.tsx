import { ExternalLink } from "lucide-react";
import picrediPreview from "../assets/fotosjonatanigorjoabe/picredi-preview.png";
import pontocomPreview from "../assets/fotosjonatanigorjoabe/pontocom-preview.png";
import triadPreview from "../assets/fotosjonatanigorjoabe/triad-preview.png";
import fragmentePreview from "../assets/fotosjonatanigorjoabe/fragmente-preview.png";
import sitePreview2 from "../assets/fotosjonatanigorjoabe/site-preview-2.png";
import soraiaPreview from "../assets/fotosjonatanigorjoabe/soraia-preview.png";
import bomprecoPreview from "../assets/fotosjonatanigorjoabe/bompreco-preview.png";
import saborAlhoPreview from "../assets/fotosjonatanigorjoabe/sabor-alho-preview.png";
import rosaBlushPreview from "../assets/fotosjonatanigorjoabe/rosa-blush-preview.png";
import andersonSilvaPreview from "../assets/fotosjonatanigorjoabe/anderson-silva-preview.png";
import douglasImoveisPreview from "../assets/fotosjonatanigorjoabe/douglas-imoveis-preview.png";
import domMiguelPreview from "../assets/fotosjonatanigorjoabe/dom-miguel-preview.png";
import colecionadoresPreview from "../assets/fotosjonatanigorjoabe/colecionadores-preview.png";
import vitoriaPlacasPreview from "../assets/fotosjonatanigorjoabe/vitoria-placas-preview.png";
import getecPreview from "../assets/fotosjonatanigorjoabe/getec-preview.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Project = {
  title: string;
  category: string;
  image: string;
  gradient: string;
  link: string;
};

type ProjectItem = Project | {
  isCarousel: true;
  items: Project[];
};

const projects: ProjectItem[] = [
  {
    isCarousel: true,
    items: [
      {
        title: "Picredi",
        category: "Site institucional, site de banco",
        image: picrediPreview,
        gradient: "from-camaly-green to-camaly-turquoise",
        link: "https://picredi.com.br"
      },
      {
        title: "H2V Mob",
        category: "Site Institucional",
        image: sitePreview2,
        gradient: "from-camaly-green to-camaly-turquoise",
        link: "https://h2vmob.com.br"
      },
      {
        title: "Douglas Imoveis",
        category: "Site Institucional",
        image: douglasImoveisPreview,
        gradient: "from-camaly-green to-camaly-turquoise",
        link: "https://douglasazevedoimoveis.com.br"
      },
      {
        title: "Dom Miguel Atacadista",
        category: "Site Institucional",
        image: domMiguelPreview,
        gradient: "from-camaly-green to-camaly-turquoise",
        link: "https://dommiguelindustria.com.br"
      },
      {
        title: "Desintupidora Getec",
        category: "Site Institucional",
        image: getecPreview,
        gradient: "from-camaly-green to-camaly-turquoise",
        link: "https://desentupidora24horas.tec.br"
      }
    ]
  },
  {
    isCarousel: true,
    items: [
      {
        title: "Pontocom",
        category: "E-commerce",
        image: pontocomPreview,
        gradient: "from-camaly-blue to-camaly-wine",
        link: "https://pontocomeletros.com.br"
      },
      {
        title: "Comercial Bom Preço",
        category: "E-commerce",
        image: bomprecoPreview,
        gradient: "from-camaly-blue to-camaly-wine",
        link: "https://comercialbompreco.com.br"
      },
      {
        title: "Rosa e Blush",
        category: "E-commerce",
        image: rosaBlushPreview,
        gradient: "from-camaly-blue to-camaly-wine",
        link: "https://rosaeblush.com.br"
      },
      {
        title: "Colecionadores de Games",
        category: "E-commerce",
        image: colecionadoresPreview,
        gradient: "from-camaly-blue to-camaly-wine",
        link: "https://www.colecionadoresdegames.com.br/?pb=0"
      }
    ]
  },
  {
    isCarousel: true,
    items: [
      {
        title: "Triad Marcenaria",
        category: "Landing Page",
        image: triadPreview,
        gradient: "from-camaly-wine to-camaly-yellow",
        link: "https://triadmarcenaria.com.br"
      },
      {
        title: "Fragmente Já",
        category: "Landing Page",
        image: fragmentePreview,
        gradient: "from-camaly-yellow to-camaly-green",
        link: "https://fragmenteja.com.br"
      },
      {
        title: "Autora Soraia",
        category: "Landing Page",
        image: soraiaPreview,
        gradient: "from-camaly-wine to-camaly-yellow",
        link: "https://autorasoraiahfasciani.com"
      },
      {
        title: "Sabor de Alho",
        category: "Landing Page",
        image: saborAlhoPreview,
        gradient: "from-camaly-yellow to-camaly-green",
        link: "https://sabordealho.com.br"
      },
      {
        title: "Anderson Silva treinador",
        category: "Landing Page",
        image: andersonSilvaPreview,
        gradient: "from-camaly-wine to-camaly-yellow",
        link: "https://andersonsilvatreinador.com.br"
      },
      {
        title: "Vitoria Placas",
        category: "Landing Page",
        image: vitoriaPlacasPreview,
        gradient: "from-camaly-wine to-camaly-yellow",
        link: "https://www.vitoriaplacas.com.br"
      }
    ]
  },
  {
    title: "E-commerce Fashion",
    category: "Loja Virtual",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    gradient: "from-camaly-green to-camaly-turquoise",
    link: "#"
  },
  {
    title: "App Delivery",
    category: "Aplicativo Mobile",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    gradient: "from-camaly-turquoise to-camaly-blue",
    link: "#"
  },
  {
    title: "Portal Corporativo",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    gradient: "from-camaly-blue to-camaly-wine",
    link: "#"
  },
  {
    title: "Plataforma SaaS",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-camaly-wine to-camaly-yellow",
    link: "#"
  },
  {
    title: "Landing Page Startup",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    gradient: "from-camaly-yellow to-camaly-green",
    link: "#"
  },
  {
    title: "Game Portal",
    category: "Site de Games",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    gradient: "from-camaly-green to-camaly-blue",
    link: "#"
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    target={project.link !== "#" ? "_blank" : "_self"}
    rel={project.link !== "#" ? "noopener noreferrer" : ""}
    className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 shadow-card card-hover cursor-pointer block h-full"
  >
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
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
  </a>
);

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
          {projects.map((item, index) => {
            if ('isCarousel' in item) {
              return (
                <Carousel
                  key={`carousel-${index}`}
                  className="w-full h-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {item.items.map((project, idx) => (
                      <CarouselItem key={idx}>
                        <div className="h-full">
                          <ProjectCard project={project} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              );
            }
            return <ProjectCard key={item.title} project={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
