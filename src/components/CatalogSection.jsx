import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { CATEGORIES } from '../data/productsData';

export default function CatalogSection({ products = [], onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeProductModal, setActiveProductModal] = useState(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        selectedCategory === 'todos' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  return (
    <section id="catalogo" className="max-w-5xl mx-auto px-4 py-10">
      {/* Título da Seção */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
            Catálogo Interativo
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Nossas Criações Sob Encomenda
          </h2>
        </div>

        {/* Campo de Busca Rápida */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar peça ou terço..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:outline-hidden focus:ring-2 focus:ring-brand-500 bg-white"
          />
        </div>
      </div>

      {/* Categorias (Tabs Horizontais) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-surface text-ink hover:bg-brand-50 border border-[#EFE8DE]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={setActiveProductModal}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-surface rounded-2xl border border-[#EFE8DE] p-6">
          <Sparkles className="w-8 h-8 text-brand-400 mx-auto mb-2" />
          <h3 className="font-serif text-base font-bold text-ink">Nenhuma peça encontrada</h3>
          <p className="text-xs text-muted mt-1">
            Tente buscar com outros termos ou altere a categoria selecionada.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('todos');
            }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-100 text-brand-800 hover:bg-brand-200 transition-colors"
          >
            Ver todos os produtos
          </button>
        </div>
      )}

      {/* Modal de Personalização e Detalhes */}
      <ProductModal
        product={activeProductModal}
        isOpen={Boolean(activeProductModal)}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}

