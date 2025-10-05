import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contato = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 1234-5678",
      link: "tel:+551112345678",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@ajjudicial.com.br",
      link: "mailto:contato@ajjudicial.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold">Entre em Contato</h1>
            <p className="text-xl text-primary-foreground/90">
              Estamos prontos para atender você e esclarecer suas dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
                <p className="text-muted-foreground text-lg">
                  Nossa equipe está pronta para ajudar você. Entre em contato através dos canais abaixo
                  ou preencha o formulário.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="glass-card hover:shadow-elegant transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card animate-fade-in-up">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      required
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 91234-5678"
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      placeholder="Assunto da mensagem"
                      required
                      className="transition-all duration-300 focus:shadow-elegant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua dúvida ou solicitação"
                      required
                      rows={6}
                      className="transition-all duration-300 focus:shadow-elegant resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Respondemos em até 24 horas úteis.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
