import React, { useState } from 'react';
import { Sparkles, Clock, Plus, Heart } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';
import { useHaptics } from '../hooks/useHaptics';

export default function ProductCard({ product, onSelectProduct }) {
  const { triggerHaptic } = useHaptics();
  const [imageError, setImageError] = useState(false);

  const fallbackImage =
    'https://images.unsplash.com/photo-1676206502051-89deda798a80?auto=format&fit=crop&w=700&q=80';

  const handleClick = () => {
    triggerHaptic(10);
    onSelectProduct(product);
  };

  return (
    <div className="group flex flex-col bg-surface rounded-2xl border border-[#EFE8DE] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200">
      {/* Imagem do Produto */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-brand-50">
        <img
          src={imageError ? fallbackImage : product.image}
          alt={product.name}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badge Flutuante */}
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-brand-800 shadow-sm backdrop-blur-xs flex items-center gap-1 border border-brand-100">
            <Sparkles className="w-3 h-3 text-gold-500" />
            <span>{product.badge}</span>
          </span>
        )}

        {/* Prazo de Produção */}
        {product.leadTime && (
          <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#2B231F]/80 text-white backdrop-blur-xs flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-400" />
            <span>{product.leadTime}</span>
          </span>
        )}
      </div>

      {/* Conteúdo Informativo */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h3 className="font-serif text-base font-bold text-ink leading-snug line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Rodapé do Card com Preço e Ação */}
        <div className="pt-2 border-t border-[#F5EFE6] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
              A partir de
            </span>
            <span className="font-serif text-lg font-bold text-brand-700">
              {formatCurrency(product.price)}
            </span>
          </div>

          <button
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white text-xs font-semibold shadow-xs hover:shadow transition-all"
          >
            <span>Personalizar</span>
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

