import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Award, Users } from "lucide-react";

const Sobre = () => {
  const values = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Atuamos com ética e transparência em todos os processos.",
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos a perfeição em cada detalhe do nosso trabalho.",
    },
    {
      icon: Award,
      title: "Inovação",
      description: "Utilizamos tecnologia de ponta para otimizar processos.",
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Dedicados ao sucesso de nossos clientes e credores.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Sobre a AJ Judicial</h1>
            <p className="text-xl text-primary-foreground/90">
              Excelência e inovação em administração judicial
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Proporcionar uma gestão eficiente, transparente e segura de processos de recuperação judicial
                e falência, utilizando tecnologia de ponta para garantir os melhores resultados para todas as
                partes envolvidas. Buscamos simplificar processos complexos e promover a confiança através da
                transparência e da conformidade legal.
              </p>
            </div>

            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nossa Visão</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Ser referência nacional em administração judicial, reconhecida pela excelência nos serviços,
                inovação tecnológica e compromisso com a recuperação de empresas e a proteção dos direitos dos
                credores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam nossa atuação diária
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-elegant">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
              Experiência e Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
              <div className="text-center p-8 glass-card rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center p-8 glass-card rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Processos Administrados</div>
              </div>
              <div className="text-center p-8 glass-card rounded-2xl">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
