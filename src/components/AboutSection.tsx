

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/fotosjonatanigorjoabe/PHOTO-2025-12-05-12-06-25.png";
import img2 from "@/assets/fotosjonatanigorjoabe/PHOTO-2025-12-05-12-06-26.png";
import img3 from "@/assets/fotosjonatanigorjoabe/PHOTO-2025-12-05-12-06-26 2.png";

const teamImages = [
  { src: img1, alt: "Igor Martins - Especialista Camaly", name: "Igor Martins" },
  { src: img2, alt: "Joabe Ávila - Especialista Camaly", name: "Joabe Ávila" },
  { src: img3, alt: "Jonatan Drumond - Especialista Camaly", name: "Jonatan Drumond" },
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
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
              adaptação, criatividade e evolução.
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
                  J
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-turquoise to-camaly-blue flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  I
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-blue to-camaly-wine flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  J
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Nosso time de especialistas
                </p>
                <p className="text-xs text-muted-foreground">
                  Igor Martins - Especialista Camaly
                </p>
              </div>
            </div>
          </div>

          {/* Triangle Layout */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              {/* Top to Bottom Left */}
              <line x1="50%" y1="15%" x2="25%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
              {/* Top to Bottom Right */}
              <line x1="50%" y1="15%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
              {/* Bottom Left to Bottom Right */}
              <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" />
            </svg>

            {/* Top Image (Jonatan) */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 z-20 group">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-110 bg-muted">
                <img
                  src={img2}
                  alt="Jonatan Drumond"
                  className="w-full h-full object-cover object-center scale-[1.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-sm">Jonatan Drumond</span>
                </div>
              </div>
            </div>

            {/* Bottom Left Image (Joabe) */}
            <div className="absolute bottom-[10%] left-[5%] md:left-[10%] z-20 group">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-110 bg-muted">
                <img
                  src={img3}
                  alt="Joabe Ávila"
                  className="w-full h-full object-cover object-center scale-[1.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-sm">Joabe Ávila</span>
                </div>
              </div>
            </div>

            {/* Bottom Right Image (Igor) */}
            <div className="absolute bottom-[10%] right-[5%] md:right-[10%] z-20 group">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform duration-500 group-hover:scale-110 bg-muted">
                <img
                  src={img1}
                  alt="Igor Martins"
                  className="w-full h-full object-cover object-center scale-[1.6]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-bold text-sm">Igor Martins</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-camaly-green/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
