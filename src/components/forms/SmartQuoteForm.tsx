'use client';

import React, { useState } from 'react';
import { Building2, Briefcase, PaintBucket, CalendarCheck, Send } from 'lucide-react';

const SmartQuoteForm = () => {
    const [selectedService, setSelectedService] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        // Campos Dinâmicos
        areaSize: '', // Metragem
        frequency: '', // Frequência
        buildingHeight: '', // Altura (Fachada)
        surfaceType: '', // Tipo de superfície (Fachada)
        eventDate: '', // Data (Eventos)
        guestCount: '' // Qtd Pessoas (Eventos),
    towers: '',
        units: '',
        leisureAreas: '',
        duringEvent: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulação de envio para API
        console.log('Dados enviados:', { service: selectedService, ...formData });

        // Disparo para o Google Tag Manager
        if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'form_submission_success',
                service_type: selectedService,
                form_location: 'home_hero'
            });
        }

        alert("Solicitação enviada! Nossa equipe analisará os dados.");
    };

    // Lógica de Renderização Condicional
    const renderDynamicFields = () => {
        switch (selectedService) {
            case 'condominio':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Número de Torres/Blocos</label>
                            <input type="number" name="towers" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Ex: 2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Total de Unidades/Aptos</label>
                            <input type="number" name="units" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Ex: 120" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Áreas de Lazer inclusas?</label>
                            <select name="leisureAreas" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none">
                                <option>Sim, completa</option>
                                <option>Parcial</option>
                                <option>Não, apenas áreas comuns</option>
                            </select>
                        </div>
                    </div>
                );

            case 'escritorio':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Metragem Aproximada (m²)</label>
                            <input type="number" name="areaSize" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Ex: 250" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Frequência Desejada</label>
                            <select name="frequency" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none">
                                <option>Diária</option>
                                <option>3x na semana</option>
                                <option>Semanal</option>
                                <option>Quinzenal</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Piso (Predominante)</label>
                            <select className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none">
                                <option>Carpete</option>
                                <option>Porcelanato/Cerâmica</option>
                                <option>Madeira/Laminado</option>
                            </select>
                        </div>
                    </div>
                );

            case 'fachada':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Altura do Edifício (Andares)</label>
                            <input type="number" name="buildingHeight" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Ex: 15" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Material da Fachada</label>
                            <select name="surfaceType" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none">
                                <option>Vidro / Espelhada</option>
                                <option>ACM</option>
                                <option>Pastilha / Pedra</option>
                                <option>Concreto Aparente</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
                            <strong>Nota de Segurança:</strong> Nossa equipe possui certificação NR-35 para trabalho em altura.
                        </div>
                    </div>
                );

            case 'eventos':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Data do Evento</label>
                            <input type="date" name="eventDate" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Estimativa de Público</label>
                            <input type="number" name="guestCount" onChange={handleInputChange} className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Ex: 500" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Necessidade de Limpeza Durante o evento?</label>
                            <div className="flex gap-4 mt-2">
                                <label className="flex items-center text-slate-600"><input type="radio" name="duringEvent" value="sim" onChange={handleInputChange} className="mr-2" /> Sim, equipe de plantão</label>
                                <label className="flex items-center text-slate-600"><input type="radio" name="duringEvent" value="nao" onChange={handleInputChange} className="mr-2" /> Não, apenas Pós-evento</label>
                            </div>
                        </div>
                    </div>
                );

            default:
                return <p className="text-slate-500 text-sm italic py-2">Selecione um serviço acima para ver as opções específicas.</p>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Solicitar Orçamento Personalizado</h2>

            {/* 1. Seleção de Serviço (Visual Cards) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { id: 'condominio', label: 'Condomínios', icon: Building2 },
                    { id: 'escritorio', label: 'Escritórios', icon: Briefcase },
                    { id: 'fachada', label: 'Fachadas', icon: PaintBucket },
                    { id: 'eventos', label: 'Pós-Evento', icon: CalendarCheck },
                ].map((service) => (
                    <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md
              ${selectedService === service.id
                                ? 'border-teal-600 bg-teal-50 text-teal-700 ring-2 ring-teal-100'
                                : 'border-slate-200 text-slate-600 hover:border-teal-300'}`}
                    >
                        <service.icon size={28} className="mb-2" />
                        <span className="text-sm font-semibold">{service.label}</span>
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* 2. Campos Dinâmicos */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 min-h-[120px] transition-all">
                    <h3 className="text-sm uppercase tracking-wide text-slate-500 font-bold mb-4">Detalhes do Serviço</h3>
                    {renderDynamicFields()}
                </div>

                {/* 3. Campos Universais */}
                <div>
                    <h3 className="text-sm uppercase tracking-wide text-slate-500 font-bold mb-4">Seus Dados de Contato</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            placeholder="Nome do Responsável"
                            className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            onChange={handleInputChange}
                            placeholder="Nome da Empresa / Condomínio"
                            className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                            placeholder="E-mail Corporativo"
                            className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleInputChange}
                            placeholder="WhatsApp / Telefone"
                            className="w-full p-3 border border-slate-300 rounded focus:ring-2 focus:ring-teal-500 outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Botão de Envio (Laranja para CTA) */}
                <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 text-lg"
                >
                    <Send size={20} />
                    Receber Proposta Gratuita
                </button>
            </form>
        </div>
    );
};

export default SmartQuoteForm;
