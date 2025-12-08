import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="/favicon1/PHOTO-2025-12-03-13-22-15.png"
            alt="Camaly Logo"
            className="h-20 w-auto object-contain transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_hsl(161,73%,42%)] animate-fade-in"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 relative group",
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-camaly-green to-camaly-turquoise transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <GradientButton className="h-10 px-6 py-2 min-w-0" asChild>
            <a
              href="https://wa.me/5531973373379?text=Olá,%20gostaria%20de%20mais%20informação..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </GradientButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
            >
              {link.label}
            </a>
          ))}
          <GradientButton className="mt-4 w-full" asChild>
            <a href="https://wa.me/5531973373379?text=Olá,%20gostaria%20de%20mais%20informação..." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </GradientButton>
        </nav>
      </div>
    </header>
  );
};
