import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  imageUrl: string;
  onCtaClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, tag, imageUrl, onCtaClick }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">

      {/* Header Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

        {/* Tag Overlay */}
        <span className="absolute top-4 left-4 inline-block px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase bg-blue-600/80 backdrop-blur-md rounded-full">
          {tag}
        </span>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        {/* Ícone flutuante sobre a imagem ou no conteúdo */}
        <div className="mb-6 relative -mt-14 z-10">
          <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
          <div className="relative w-14 h-14 flex items-center justify-center bg-white text-gray-700 rounded-xl shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border border-gray-100">
            <Icon size={28} strokeWidth={1.5} />
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
      </div>

      {/* Detalhe estético: linha de progresso no hover */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
