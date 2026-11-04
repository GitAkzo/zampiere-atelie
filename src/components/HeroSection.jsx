import React from 'react';
import { Heart, Sparkles, ShieldCheck, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-canvas to-canvas py-8 sm:py-12 border-b border-[#EFE8DE]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Badge Afetiva */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100/80 border border-brand-200 text-brand-800 text-xs font-semibold mb-4">
          <Heart className="w-3.5 h-3.5 text-brand-600 fill-brand-600" />
          <span>Feito à mão com amor e devoção</span>
        </div>

        {/* Título Principal */}
        <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ink max-w-2xl mx-auto leading-tight sm:leading-snug">
          Peças personalizadas que eternizam fé e momentos inesquecíveis
        </h2>

        {/* Descrição */}
        <p className="mt-3 text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Terços devocionais, artigos religiosos e mimos de maternidade criados exclusivamente para você.
          Escolha os detalhes e finalize com atendimento humanizado no WhatsApp.
        </p>

        {/* Selos de Confiança */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-brand-900 font-medium">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-[#EFE8DE] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Nomes Personalizados</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-[#EFE8DE] shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Entrega Segura em Guarapuava e Brasil</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-[#EFE8DE] shadow-xs">
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Acabamento Fino Artesanal</span>
          </span>
        </div>

        {/* Botão de Ação Rápida */}
        <div className="mt-7">
          <button
            onClick={scrollToCatalog}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-700 hover:bg-brand-800 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-98 transition-all"
          >
            <span>Explorar o Catálogo</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

