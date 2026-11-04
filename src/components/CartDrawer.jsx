import React, { useState } from 'react';
import { X, ShoppingBag, ArrowRight, Sparkles, Trash2 } from 'lucide-react';
import CartItemRow from './CartItemRow';
import OrderCustomerForm from './OrderCustomerForm';
import { formatCurrency } from '../utils/formatters';

export default function CartDrawer({
  isOpen,
  onClose,
  cart = [],
  totals,
  onUpdateQuantity,
  onRemove,
  onClear,
}) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-canvas shadow-2xl border-l border-[#EFE8DE] flex flex-col">
          {/* Header da Gaveta */}
          <div className="p-4 bg-surface border-b border-[#EFE8DE] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-ink">Sua Sacola</h3>
                <p className="text-[11px] text-muted">
                  {totals.totalItems} {totals.totalItems === 1 ? 'item selecionado' : 'itens selecionados'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={onClear}
                  title="Esvaziar sacola"
                  className="p-1.5 rounded-lg text-muted hover:text-rose-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar sacola"
                className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-brand-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Conteúdo da Sacola */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center mx-auto mb-3 text-brand-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-base font-bold text-ink">Sua sacola está vazia</h4>
                <p className="text-xs text-muted mt-1 max-w-xs mx-auto">
                  Explore o catálogo para escolher terços ou mimos artesanais sob medida.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                >
                  Ver Peças do Catálogo
                </button>
              </div>
            ) : (
              <>
                {/* Lista de Itens */}
                <div className="space-y-2.5">
                  {cart.map((item) => (
                    <CartItemRow
                      key={item.cartItemId}
                      item={item}
                      onUpdateQuantity={onUpdateQuantity}
                      onRemove={onRemove}
                    />
                  ))}
                </div>

                {/* Alternância do Formulário de Checkout */}
                {showCheckoutForm ? (
                  <OrderCustomerForm
                    items={cart}
                    onComplete={() => {
                      onClose();
                      setShowCheckoutForm(false);
                    }}
                  />
                ) : (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setShowCheckoutForm(true)}
                      className="w-full py-3 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <span>Avançar para Dados de Entrega</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Rodapé Fixo com Subtotal */}
          {cart.length > 0 && (
            <div className="p-4 bg-surface border-t border-[#EFE8DE] space-y-2">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Total Estimado:</span>
                <span className="font-serif text-xl font-bold text-brand-800">
                  {formatCurrency(totals.subtotal)}
                </span>
              </div>
              <p className="text-[10px] text-muted text-center flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-500" />
                <span>O pagamento (Pix ou link) é combinado diretamente no WhatsApp.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

