import { Link } from "react-router-dom";
import { Scale, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
      <div className="container mx-auto px-4 py-12 bg-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">AJ Judicial</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Gestão profissional e transparente de processos de recuperação judicial e falência.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Recuperação Judicial</li>
              <li className="text-sm text-primary-foreground/80">Falência</li>
              <li className="text-sm text-primary-foreground/80">Gestão de Credores</li>
              <li className="text-sm text-primary-foreground/80">Assembleias Virtuais</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contato@ajjudicial.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} AJ Judicial. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidade" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;