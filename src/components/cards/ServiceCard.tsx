import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  onCtaClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, tag, onCtaClick }) => {
  return (
    <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">

      {/* Indicador de Categoria (Tag) */}
      <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full w-fit">
        {tag}
      </span>

      {/* Ícone com fundo dinâmico */}
      <div className="mb-6 relative">
        <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
        <div className="relative w-14 h-14 flex items-center justify-center bg-gray-50 text-gray-700 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>

      {/* Conteúdo Textual */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* Botão de Ação (CTA) */}
      <button
        onClick={onCtaClick}
        className="flex items-center font-bold text-blue-600 group/btn hover:text-blue-800 transition-colors"
      >
        Solicitar Orçamento
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
      </button>

      {/* Detalhe estético: linha de progresso no hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
};

export default ServiceCard;
