import { Metadata } from 'next';
import Image from 'next/image';
import SmartQuoteForm from '@/components/forms/SmartQuoteForm';
import { ShieldCheck, CheckCircle2, HardHat } from 'lucide-react';

export const metadata: Metadata = {
    title: "Limpeza de Fachadas em Altura | MANSKI",
    description: "Serviço especializado de limpeza de vidros, ACM e pastilhas em altura. Certificação NR-35 e máxima segurança para sua fachada.",
    keywords: ['limpeza de fachada', 'limpeza de vidros em altura', 'NR-35 limpeza', 'manutenção predial', 'limpeza de ACM'],
    openGraph: {
        title: 'Limpeza de Fachadas Profissional',
        description: 'Sua fachada impecável e segura. Solicite um orçamento hoje.',
        // images: [{ url: '/og-fachada.jpg', width: 1200, height: 630 }], // Placeholder logic
        type: 'website',
    },
};

export default function FachadasPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Limpeza de Fachadas e Conservação Predial",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Cleaning Services Co.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP"
            },
            "image": "https://seusite.com.br/logo.png",
            "priceRange": "$$"
        },
        "areaServed": {
            "@type": "City",
            "name": "São Paulo"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Limpeza",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Limpeza de Fachadas em Altura"
                    }
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-white">
                {/* Header/Hero Compacto */}
                <div className="bg-slate-900 py-16 text-center text-white relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                            Empresa de Limpeza de Fachadas e Conservação em São Paulo
                        </h1>
                        <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                            Vidros, ACM e pastilhas limpos com segurança total. Equipe certificada NR-35 e tecnologia de hidrojateamento.
                        </p>
                    </div>
                    {/* Background pattern or subtle branding could go here */}
                </div>

                <div className="container mx-auto px-4 py-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Coluna de Conteúdo (SEO & Autoridade) */}
                        <div className="space-y-8">

                            <section>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <ShieldCheck className="text-teal-600" />
                                    Por que escolher nossa limpeza técnica?
                                </h2>
                                <div className="prose text-slate-600 leading-relaxed">
                                    <p className="mb-4">
                                        Sabemos que a primeira impressão é a que fica. Fachadas sujas desvalorizam seu patrimônio e podem esconder infiltrações.
                                        Nossa equipe utiliza técnicas de alpinismo industrial e plataformas elevatórias para garantir o brilho do seu edifício.
                                    </p>
                                    <ul className="space-y-3 mt-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                            <span><strong>Segurança em 1º Lugar:</strong> Todos os profissionais possuem certificação NR-35 (Trabalho em Altura) e NR-18.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                            <span><strong>Equipamentos Modernos:</strong> Utilizamos produtos biodegradáveis que removem a sujeira sem danificar as vedações ou vidros.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 mt-1 shrink-0" />
                                            <span><strong>Seguro de Responsabilidade Civil:</strong> Tranquilidade total para o síndico ou gestor predial durante a execução.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                                    <HardHat className="text-orange-600" />
                                    Atendemos Condomínios e Empresas
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Realizamos desde a limpeza pontual pós-obra até contratos mensais de conservação de vidros.
                                    Atuamos em toda a região de São Paulo, focando em prédios comerciais, shoppings e condomínios residenciais de alto padrão.
                                </p>
                            </section>

                        </div>

                        {/* Coluna do Formulário (Conversão) */}
                        <div className="lg:sticky lg:top-8">
                            <div className="shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
                                <div className="bg-orange-600 p-4 text-center">
                                    <p className="text-white font-bold text-lg">Peça seu orçamento em 2 minutos</p>
                                </div>
                                {/* Reusing the Smart form, typically we might want to pre-select 'fachada' if possible, 
                        or just let user select. Ideally props could handle this. */}
                                <div className="bg-white">
                                    <SmartQuoteForm />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
