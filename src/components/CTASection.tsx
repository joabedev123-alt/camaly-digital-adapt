import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001021] to-[#002347]" />

      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
        <div className="absolute top-20 right-20 w-60 h-60 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-primary-foreground">
            Coloque sua empresa
            <br />
            na internet hoje mesmo
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Não deixe sua empresa invisível. Fale com a Camaly e comece sua
            transformação digital agora. Diagnóstico gratuito!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton
              className="bg-primary-foreground text-black hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/5531973373379"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </GradientButton>
            <GradientButton
              variant="outline"
              className="border-2 border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground"
              asChild
            >
              <a href="#servicos">
                Ver Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </GradientButton>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            Resposta rápida • Orçamento sem compromisso • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
};
