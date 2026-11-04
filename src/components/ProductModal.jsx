import React, { useState } from 'react';
import { X, Sparkles, Check, ShoppingBag, Clock, Heart } from 'lucide-react';
import { MEDAL_OPTIONS } from '../data/productsData';
import { formatCurrency } from '../utils/formatters';
import { useHaptics } from '../hooks/useHaptics';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const { triggerHaptic } = useHaptics();
  const [customName, setCustomName] = useState('');
  const [selectedMedal, setSelectedMedal] = useState(MEDAL_OPTIONS[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    triggerHaptic(20);
    onAddToCart({
      product,
      customName: customName.trim(),
      medal: selectedMedal,
      quantity,
    });
    onClose();
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-surface rounded-2xl shadow-2xl border border-[#EFE8DE] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header do Modal com Imagem e Fechar */}
        <div className="relative aspect-16/9 w-full bg-brand-50 overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          {product.badge && (
            <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-800 shadow-sm border border-brand-100 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>{product.badge}</span>
            </span>
          )}
        </div>

        {/* Corpo com Campos de Customização */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          <div>
            <h3 className="font-serif text-xl font-bold text-ink">{product.name}</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">{product.description}</p>
            {product.details && (
              <p className="mt-2 text-[11px] text-brand-800 bg-brand-50 p-2 rounded-lg border border-brand-100 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0 text-brand-600" />
                <span>{product.details}</span>
              </p>
            )}
          </div>

          {/* Campo de Nome Personalizado */}
          {product.allowsCustomName && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-ink flex items-center justify-between">
                <span>Nome para personalizar na peça:</span>
                <span className="text-[10px] text-brand-600 font-normal">Opcional</span>
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                placeholder="Ex: Maria Luísa ou Gabriel"
                maxLength={30}
                className="w-full px-3.5 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-white"
              />
              <p className="text-[10px] text-muted">
                O nome será montado nas contas da primeira dezena ou no pingente artesanal.
              </p>
            </div>
          )}

          {/* Seleção de Medalha / Devoção */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-ink block">
              Medalha / Santo de Devoção:
            </label>
            <select
              value={selectedMedal}
              onChange={(e) => setSelectedMedal(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-white"
            >
              {MEDAL_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Quantidade */}
          <div className="flex items-center justify-between pt-2 border-t border-[#F5EFE6]">
            <span className="text-xs font-bold text-ink">Quantidade:</span>
            <div className="flex items-center gap-2 border border-[#E5DCD2] rounded-xl px-2 py-1 bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-6 h-6 rounded-md hover:bg-brand-50 text-ink font-bold flex items-center justify-center text-sm"
              >
                -
              </button>
              <span className="w-6 text-center text-xs font-bold">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-6 h-6 rounded-md hover:bg-brand-50 text-ink font-bold flex items-center justify-center text-sm"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé com Botão Adicionar */}
        <div className="p-4 border-t border-[#EFE8DE] bg-[#FAF7F2] flex items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-muted font-bold block">
              Subtotal
            </span>
            <span className="font-serif text-lg font-bold text-brand-700">
              {formatCurrency(totalPrice)}
            </span>
          </div>

          <button
            onClick={handleAdd}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 active:scale-98 text-white text-xs font-bold shadow-md transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Adicionar à Sacola</span>
          </button>
        </div>
      </div>
    </div>
  );
}

