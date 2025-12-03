import { GradientButton } from "@/components/ui/gradient-button";
import { MessageCircle } from "lucide-react";
import heroVideo from "@/assets/videoprincipal/camaly02.mp4";

export const HeroSection = () => {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-4 lg:right-16 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-30">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl animate-float border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-[fadeUp_0.8s_ease-out_forwards]">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-camaly-green/10 text-camaly-green border border-camaly-green/20 mb-6">
              Agência Digital Especializada
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 animate-[fadeUp_0.8s_ease-out_0.1s_forwards] text-primary-foreground">
            Sua empresa merece
            <br />
            <span className="gradient-text">presença digital</span>
            <br />
            que transforma
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl animate-[fadeUp_0.8s_ease-out_0.2s_forwards]">
            Assim como o camaleão se adapta ao ambiente, a Camaly adapta soluções
            digitais únicas para colocar sua empresa na internet, conquistar
            visibilidade e multiplicar seus resultados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-[fadeUp_0.8s_ease-out_0.3s_forwards]">
            <GradientButton asChild>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </GradientButton>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">50+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Projetos entregues</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">3</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Especialistas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold gradient-text">100%</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Dedicação</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
