import React from 'react';
import { ShoppingBag, Instagram, Sparkles } from 'lucide-react';
import { useHaptics } from '../hooks/useHaptics';

export default function Header({ totalItems = 0, onOpenCart }) {
  const { triggerHaptic } = useHaptics();

  const handleCartClick = () => {
    triggerHaptic(15);
    onOpenCart();
  };

  return (
    <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-md border-b border-[#EFE8DE] shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Marca & Identidade */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 shadow-inner">
            <Sparkles className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h1 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-ink leading-tight">
              Ateliê Ale Zampieri
            </h1>
            <p className="text-[11px] text-muted flex items-center gap-1">
              <span>Personalizados & Devoção</span>
              <span className="w-1 h-1 rounded-full bg-brand-400" />
              <span>Guarapuava - PR</span>
            </p>
          </div>
        </div>

        {/* Ações de Topo */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/ateliealezampieri/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-brand-600" />
            <span>@ateliealezampieri</span>
          </a>

          {/* Botão da Sacola */}
          <button
            onClick={handleCartClick}
            aria-label="Abrir sacola de compras"
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs shadow-sm hover:shadow active:scale-98 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Sacola</span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-gold-400 text-ink text-[11px] font-extrabold flex items-center justify-center animate-in zoom-in duration-150">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

