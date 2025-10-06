import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
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
  }, {
    name: "Relatórios",
    path: "/relatorios"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-lg bg-background/95 border-b border-border shadow-elegant" : "bg-background/80 backdrop-blur-md"}`}>
      <div className="p-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-6 group">
          <Scale className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Administradora Judicial
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-lg font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}>
              {link.name}
            </Link>)}
        </nav>

        {/* Desktop Logout Button */}
        {location.pathname === '/upload-documentos' ? (
          <div className="hidden md:block">
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
          ) : (
          <div className="hidden md:block">
            <Button asChild variant="default" className="w-full">
              <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                Área Restrita
              </Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>)}
            {location.pathname === '/upload-documentos' ? (
              <Button variant="ghost" className="w-full" onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}>
                <LogOut className="w-4 h-4 mr-2" />
                  Sair
                </Button>
              ) : (
                <Button asChild variant="default" className="w-full">
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Área Restrita
                  </Link>
                </Button>
            )}
          </nav>
        </div>}
    </header>;
};
export default Header;