

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/fotosjonatanigorjoabe/1.png";
import img2 from "@/assets/fotosjonatanigorjoabe/2.png";
import img3 from "@/assets/fotosjonatanigorjoabe/3.png";

const teamImages = [
  { src: img1, alt: "Igor Martins - Especialista Camaly", name: "Igor Martins" },
  { src: img2, alt: "Joabe Ávila - Especialista Camaly", name: "Joabe Ávila" },
  { src: img3, alt: "Jonatan Drumond - Especialista Camaly", name: "Jonatan Drumond" },
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
                  J
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-turquoise to-camaly-blue flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  I
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-camaly-blue to-camaly-wine flex items-center justify-center text-primary-foreground font-bold border-2 border-background">
                  J
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Nosso time de especialistas
              </p>
            </div>
          </div>

          {/* Features Grid */}
          {/* Carousel Placeholder */}
          <div className="relative w-full max-w-lg mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {teamImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-card bg-card h-[400px] md:h-[500px] flex items-center justify-center bg-muted/10 group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-xl font-bold font-heading">{image.name}</p>
                          <p className="text-sm text-white/80">Especialista</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary" />
              <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
