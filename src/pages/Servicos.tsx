import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Scale,
  FileText,
  Users,
  Bell,
  BarChart3,
  Video,
  Shield,
  Upload,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Scale,
      title: "Recuperação Judicial",
      description:
        "Gestão completa de processos de recuperação judicial, desde o protocolo até a homologação do plano.",
      features: [
        "Análise e validação de créditos",
        "Organização de assembleias",
        "Acompanhamento do plano de recuperação",
        "Relatórios periódicos ao juízo",
      ],
    },
    {
      icon: FileText,
      title: "Falência",
      description:
        "Administração judicial de processos de falência com total transparência e eficiência.",
      features: [
        "Arrecadação de bens",
        "Realização de ativos",
        "Gestão de rateios",
        "Prestação de contas",
      ],
    },
    {
      icon: Users,
      title: "Gestão de Credores",
      description: "Sistema completo para cadastro, verificação e comunicação com credores.",
      features: [
        "Cadastro digital de credores",
        "Verificação de créditos",
        "Portal do credor",
        "Comunicação automatizada",
      ],
    },
    {
      icon: Upload,
      title: "Gestão Documental",
      description: "Plataforma segura para upload e organização de documentos processuais.",
      features: [
        "Upload de múltiplos formatos",
        "Organização automática",
        "Controle de versões",
        "Acesso controlado",
      ],
    },
    {
      icon: Bell,
      title: "Notificações Automatizadas",
      description: "Sistema inteligente de notificações para todas as partes interessadas.",
      features: [
        "Notificações por e-mail",
        "Alertas na plataforma",
        "Lembretes de prazos",
        "Confirmação de recebimento",
      ],
    },
    {
      icon: BarChart3,
      title: "Relatórios e Analytics",
      description: "Geração automática de relatórios gerenciais e estatísticos.",
      features: [
        "Relatórios personalizáveis",
        "Dashboard em tempo real",
        "Análise de indicadores",
        "Exportação de dados",
      ],
    },
    {
      icon: Video,
      title: "Assembleias Virtuais",
      description: "Módulo completo para realização de assembleias online com total segurança.",
      features: [
        "Votação eletrônica segura",
        "Transmissão ao vivo",
        "Ata automática",
        "Gravação das sessões",
      ],
    },
    {
      icon: Shield,
      title: "Conformidade LGPD",
      description: "Total conformidade com a Lei Geral de Proteção de Dados Pessoais.",
      features: [
        "Criptografia de dados",
        "Controle de acesso",
        "Auditoria completa",
        "Política de privacidade",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Nossos Serviços</h1>
            <p className="text-xl text-primary-foreground/90">
              Soluções completas para administração judicial com tecnologia de ponta
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center flex-shrink-0 shadow-elegant">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto Para Conhecer Nossas Soluções?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato e agende uma demonstração personalizada da nossa plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contato">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Acessar Plataforma
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
