import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Sobre",
    path: "/sobre"
  }, {
    name: "Serviços",
    path: "/servicos"
  }, {
    name: "Contato",
    path: "/contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 bg-slate-900">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-glow shadow-elegant group-hover:shadow-glow transition-all duration-300">
              <Scale className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AJ Judicial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${location.pathname === link.path ? "text-primary" : "text-foreground/80"}`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Área do Cliente
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/10 ${location.pathname === link.path ? "text-primary bg-primary/5" : "text-foreground/80"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>)}
              <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full">
                  Área do Cliente
                </Button>
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;