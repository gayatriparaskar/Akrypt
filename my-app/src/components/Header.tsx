import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Akrypt IT Solutions</h1>
              <p className="text-xs text-muted-foreground">EMPOWERING BUSINESSES</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Zap className="w-4 h-4 mr-2" />
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4 border-t border-border pt-4">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity w-full">
              <Zap className="w-4 h-4 mr-2" />
              Start Project
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
