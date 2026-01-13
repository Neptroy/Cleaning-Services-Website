import Link from 'next/link';
import { ShieldCheck, Star } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
            {/* Background Image com Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/60 z-10" />
                {/* Placeholder image that will be replaced or is decorative */}
                <div
                    className="w-full h-full bg-slate-800 opacity-60"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1920&auto=format&fit=crop")', // Temporary placeholder from Unsplash
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 z-20 pt-20">
                <div className="max-w-3xl">
                    {/* Badge de Confiança */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Empresa Certificada NR-35 e ISO 9001</span>
                    </div>

                    {/* Headline Principal */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                        Sua empresa limpa, <br />
                        sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">imagem preservada</span>.
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                        Serviços de limpeza técnica e conservação para condomínios e empresas.
                        Equipes treinadas, produtos ecológicos e supervisão ativa para você focar no seu negócio.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-orange-600 rounded-full hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/30 transform hover:-translate-y-0.5"
                        >
                            Pedir Orçamento Grátis
                        </Link>

                        <Link
                            href="/servicos"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border-2 border-slate-600 rounded-full hover:bg-slate-800 hover:border-slate-500"
                        >
                            Conhecer Serviços
                        </Link>
                    </div>

                    {/* Prova Social Rápida */}
                    <div className="mt-12 flex items-center gap-4 text-sm text-slate-400">
                        {/* Avatars placeholder */}
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs text-white font-bold overflow-hidden">
                                    {/* Placeholder avatar */}
                                    <div className="w-full h-full bg-slate-500" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center text-yellow-400 gap-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="font-bold text-white">4.9/5</span>
                            </div>
                            <span>Mais de 150 clientes atendidos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
