import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-camaly-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/favicon1/PHOTO-2025-12-03-13-22-15.png"
              alt="Camaly Logo"
              className="h-16 w-auto object-contain mb-4 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_15px_hsl(161,73%,42%)] animate-fade-in"
            />
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Agência digital especializada em transformar negócios através de
              soluções web inovadoras. Assim como o camaleão, nos adaptamos às
              suas necessidades.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jonatandrumond/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-camaly-green hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading text-primary-foreground mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#hero" },
                { label: "Sobre Nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Portfólio", href: "#portfolio" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-camaly-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold font-heading text-primary-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@camaly.com.br"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-camaly-green transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  contato@camaly.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5531973373379?text=Olá,%20gostaria%20de%20mais%20informação..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  (31) 97337-3379
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Camaly. Todos os direitos reservados.</p>
            <p>
              Desenvolvido com 💚 pela equipe Camaly
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
