'use client';

import React from 'react';
import Image from 'next/image';

interface Testimonial {
    quote: string;
    author: string;
    position: string;
    avatar: string;
}

interface ClientLogo {
    src: string;
    alt: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "A equipe da Cleaning Services Co. transformou a limpeza do nosso condomínio. Profissionais dedicados e um cuidado impecável com cada detalhe. Recebemos muitos elogios dos moradores!",
        author: "Dra. Ana Paula F. Mendes",
        position: "Síndica - Condomínio Green Towers",
        avatar: "/images/avatars/avatar-ana.png",
    },
    {
        quote: "A limpeza da fachada era um desafio enorme, mas a Cleaning Services Co. executou o serviço com maestria e total segurança. Cumpriram o prazo e o resultado superou as expectativas.",
        author: "Carlos Alberto S. Junior",
        position: "Gerente de Facilities - Edifício Empresarial Alpha",
        avatar: "/images/avatars/avatar-carlos.png",
    },
    {
        quote: "Precisávamos de uma limpeza pós-evento em tempo recorde e a Cleaning Services Co. entregou! Agilidade, organização e um excelente trabalho. Recomendo fortemente!",
        author: "Mariana Oliveira",
        position: "Produtora de Eventos - Eventos Prime",
        avatar: "/images/avatars/avatar-mariana.png",
    },
];

const clientLogos: ClientLogo[] = [
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ" },
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central 2" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ 2" },
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central 3" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ 3" },
    // Duplicate for infinite scroll effect
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central 4" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ 4" },
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central 5" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ 5" },
    { src: "/images/logos/condominio-central.png", alt: "Condomínio Central 6" },
    { src: "/images/logos/empresa-xyz.png", alt: "Empresa XYZ 6" },
];

const TestimonialsAndClients: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">
                    Quem confia na <span className="text-blue-600">qualidade</span> dos nossos serviços
                </h2>

                {/* Seção de Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="relative w-20 h-20 mb-6">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    fill
                                    className="rounded-full ring-4 ring-blue-100 object-cover"
                                />
                            </div>
                            <p className="text-slate-600 italic mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div>
                                <p className="font-bold text-slate-900">{testimonial.author}</p>
                                <p className="text-sm text-slate-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carrossel de Logos de Clientes (Infinite Scroll CSS) */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-center text-slate-400 uppercase tracking-widest mb-12">
                        Nossos Clientes Satisfeitos
                    </h3>
                    <div className="relative w-full overflow-hidden">
                        {/* Visual gradient edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                        <div className="flex animate-scroll-infinite w-[200%]">
                            <div className="flex justify-around w-1/2">
                                {clientLogos.slice(0, 6).map((logo, index) => (
                                    <div key={index} className="flex-shrink-0 w-40 flex items-center justify-center p-4">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={160}
                                            height={80}
                                            className="max-w-full h-auto opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-around w-1/2">
                                {clientLogos.slice(0, 6).map((logo, index) => (
                                    <div key={`dup-${index}`} className="flex-shrink-0 w-40 flex items-center justify-center p-4">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={160}
                                            height={80}
                                            className="max-w-full h-auto opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Estilo para a animação do carrossel */}
            <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default TestimonialsAndClients;
