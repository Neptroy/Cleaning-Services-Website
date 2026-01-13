'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServiceCard from '@/components/cards/ServiceCard';
import SmartQuoteForm from '@/components/forms/SmartQuoteForm';
import TestimonialsAndClients from '@/components/sections/TestimonialsAndClients';
import { Building2, Briefcase, PaintBucket, Clock } from 'lucide-react';

const services = [
  {
    title: "Limpeza de Condomínios",
    description: "Gestão completa de limpeza para áreas comuns, torres e vidraças com foco na satisfação dos moradores.",
    icon: Building2,
    tag: "Residencial",
    serviceId: "condominio"
  },
  {
    title: "Limpeza Corporativa",
    description: "Ambientes de trabalho impecáveis que aumentam a produtividade e transmitem profissionalismo.",
    icon: Briefcase,
    tag: "Corporativo",
    serviceId: "escritorio"
  },
  {
    title: "Limpeza de Fachadas",
    description: "Especialistas em altura (NR-35) para vidros e ACM, garantindo a estética e conservação predial.",
    icon: PaintBucket,
    tag: "Especializado",
    serviceId: "fachada"
  },
  {
    title: "Pós-Eventos e Obras",
    description: "Agilidade máxima para deixar seu espaço pronto para uso em tempo recorde com equipes treinadas.",
    icon: Clock,
    tag: "Agilidade",
    serviceId: "eventos"
  }
];

export default function Home() {
  const scrollToQuote = () => {
    const element = document.getElementById('orcamento');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <section id="servicos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Soluções sob medida para cada necessidade, com tecnologia de ponta e profissionais qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onCtaClick={scrollToQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social (Testemunhos e Clientes) */}
      <TestimonialsAndClients />

      {/* Form Section */}
      <section id="orcamento" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Pronto para elevar o nível da sua <span className="text-teal-600">limpeza?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Preencha o formulário ao lado e receba uma proposta personalizada em até 24 horas.
                Nossos consultores estão prontos para entender seu desafio.
              </p>

              <ul className="space-y-4">
                {['Orçamento sem compromisso', 'Visita técnica gratuita', 'Atendimento 24/7 para emergências'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SmartQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Cleaning Services Co. - Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
