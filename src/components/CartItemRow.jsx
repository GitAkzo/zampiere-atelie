import React from 'react';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function CartItemRow({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex gap-3 p-3 bg-surface rounded-xl border border-[#EFE8DE] shadow-xs">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-lg object-cover bg-brand-50 shrink-0"
      />

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <h4 className="text-xs font-bold text-ink leading-snug line-clamp-1">
            {item.name}
          </h4>

          {/* Tags de Customização */}
          <div className="flex flex-wrap gap-1 mt-1">
            {item.customName && (
              <span className="text-[10px] bg-brand-50 text-brand-800 font-semibold px-1.5 py-0.5 rounded-md border border-brand-200">
                Nome: {item.customName}
              </span>
            )}
            {item.medal && (
              <span className="text-[10px] bg-gold-100 text-gold-700 font-semibold px-1.5 py-0.5 rounded-md">
                {item.medal}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#F5EFE6]">
          <div className="flex items-center gap-1.5 border border-[#E5DCD2] rounded-lg px-1.5 py-0.5 bg-white">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.cartItemId, -1)}
              className="w-5 h-5 rounded text-ink hover:bg-brand-50 font-bold flex items-center justify-center text-xs"
            >
              -
            </button>
            <span className="w-5 text-center text-xs font-bold">{item.quantity}</span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.cartItemId, 1)}
              className="w-5 h-5 rounded text-ink hover:bg-brand-50 font-bold flex items-center justify-center text-xs"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-brand-700 font-serif">
              {formatCurrency(item.price * item.quantity)}
            </span>
            <button
              type="button"
              onClick={() => onRemove(item.cartItemId)}
              aria-label="Remover item"
              className="p-1 rounded text-muted hover:text-rose-600 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

