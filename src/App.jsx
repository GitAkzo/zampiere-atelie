import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import FAQSection from './components/FAQSection';
import CartDrawer from './components/CartDrawer';
import ShowcaseDisclaimer from './components/ShowcaseDisclaimer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';
import { useCart } from './hooks/useCart';
import { useHaptics } from './hooks/useHaptics';
import { PRODUCTS } from './data/productsData';
import { formatCurrency } from './utils/formatters';
import { ShoppingBag, Heart, Instagram } from 'lucide-react';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { cart, addItem, removeItem, updateQuantity, clearCart, totals } = useCart();
  const { triggerHaptic } = useHaptics();

  const handleOpenCart = () => {
    triggerHaptic(15);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      {/* Disclaimer de Showcase de Portfólio */}
      <ShowcaseDisclaimer />

      {/* Header Sticky */}
      <Header
        totalItems={totals.totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 pb-24">
        <HeroSection />

        <CatalogSection
          products={PRODUCTS}
          onAddToCart={addItem}
        />

        <FAQSection />
      </main>

      {/* Barra Flutuante Mobile quando houver itens na sacola */}
      {totals.totalItems > 0 && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-lg mx-auto sm:hidden animate-in slide-in-from-bottom duration-200">
          <button
            onClick={handleOpenCart}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-brand-700 text-white shadow-xl active:scale-98 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gold-400 text-ink text-xs font-extrabold flex items-center justify-center">
                {totals.totalItems}
              </span>
              <span className="text-xs font-bold">Ver Sacola de Encomendas</span>
            </div>
            <span className="text-xs font-extrabold font-serif">
              {formatCurrency(totals.subtotal)}
            </span>
          </button>
        </div>
      )}

      {/* Gaveta Lateral da Sacola */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        totals={totals}
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
        onClear={clearCart}
      />

      {/* Banner de Cookies e Consentimento LGPD */}
      <CookieBanner onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Modal de Política de Privacidade */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Rodapé Oficial do Catálogo */}
      <footer className="border-t border-[#EFE8DE] bg-surface py-8 px-4 text-center text-xs text-muted space-y-3">
        <p className="flex items-center justify-center gap-1.5 font-medium text-ink">
          <span>Feito à mão com</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>em Guarapuava – Paraná</span>
        </p>

        <div className="flex items-center justify-center gap-4 text-[11px]">
          <a
            href="https://www.instagram.com/ateliealezampieri/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-700 transition-colors inline-flex items-center gap-1"
          >
            <Instagram className="w-3 h-3 text-brand-600" />
            <span>@ateliealezampieri</span>
          </a>
          <span>•</span>
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:text-brand-700 transition-colors underline"
          >
            Política de Privacidade
          </button>
        </div>

        <p className="text-[10px] text-stone-400">
          Ateliê Ale Zampieri • Peças Artesanais e Artigos Religiosos sob Encomenda
        </p>
      </footer>
    </div>
  );
}
