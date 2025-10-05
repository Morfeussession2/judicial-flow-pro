import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Scale,
  Shield,
  Users,
  FileText,
  Bell,
  BarChart3,
  Video,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-judicial.jpg";
import transparencyIcon from "@/assets/icon-transparency.jpg";
import automationIcon from "@/assets/icon-automation.jpg";
import securityIcon from "@/assets/icon-security.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Cadastro de Credores",
      description: "Sistema completo para cadastro e gestão de credores com validação automática.",
    },
    {
      icon: FileText,
      title: "Gestão de Documentos",
      description: "Upload e organização de documentos com suporte a múltiplos formatos.",
    },
    {
      icon: Bell,
      title: "Notificações Automatizadas",
      description: "Sistema de notificações por e-mail e plataforma para todas as partes.",
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Geração automática de relatórios gerenciais e estatísticos.",
    },
    {
      icon: Video,
      title: "Assembleias Virtuais",
      description: "Módulo completo para realização de assembleias online com votação segura.",
    },
    {
      icon: Lock,
      title: "Conformidade LGPD",
      description: "Total conformidade com a Lei Geral de Proteção de Dados.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Criptografia de ponta a ponta e proteção de dados sensíveis.",
      image: securityIcon,
    },
    {
      icon: CheckCircle,
      title: "Transparência Total",
      description: "Rastreabilidade completa de todas as ações e comunicações.",
      image: transparencyIcon,
    },
    {
      icon: Scale,
      title: "Conformidade Legal",
      description: "Atende todos os requisitos legais aplicáveis.",
      image: automationIcon,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-glow/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Gestão Profissional de{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Recuperação Judicial
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Plataforma completa para administração judicial com transparência, segurança e eficiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary border-white">
                  Acessar Plataforma
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para gerenciar processos de recuperação judicial com excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 shadow-elegant">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Por Que Escolher a AJ Judicial?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compromisso com a excelência, segurança e transparência em cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
                </div>
                <div className="relative z-10 p-8 h-full min-h-[400px] flex flex-col justify-end">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/90">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto Para Modernizar Sua Gestão?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Entre em contato e descubra como podemos transformar a administração dos seus processos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary border-white">
                  Começar Agora
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
                  Agendar Demonstração
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

export default Index;
