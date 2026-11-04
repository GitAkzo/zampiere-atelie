import React from 'react';
import { X, ShieldCheck, Lock, Eye } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-surface rounded-2xl shadow-2xl border border-[#EFE8DE] overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#EFE8DE] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-2 text-brand-800">
            <ShieldCheck className="w-5 h-5 text-brand-600" />
            <h3 className="font-serif text-base font-bold text-ink">
              Política de Privacidade & Conformidade LGPD
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="p-1 rounded-lg text-muted hover:text-ink hover:bg-brand-50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-muted leading-relaxed">
          <section className="space-y-1">
            <h4 className="font-bold text-ink flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-brand-600" />
              <span>1. Coleta e Finalidade de Dados</span>
            </h4>
            <p>
              O presente catálogo digital tem como finalidade exclusiva facilitar a organização e
              personalização de encomendas artesanais. Os dados fornecidos (como nome e WhatsApp)
              são utilizados unicamente para gerar a mensagem estruturada de pedido e possibilitar o
              contato com a artesã via WhatsApp.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-bold text-ink flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-brand-600" />
              <span>2. Armazenamento Local e Cookies</span>
            </h4>
            <p>
              Utilizamos armazenamento local restrito (Local Storage) em seu próprio dispositivo
              para persistir os itens da sua sacola por até 7 dias, garantindo que suas escolhas não
              sejam perdidas caso feche o navegador. Nenhum dado é compartilhado ou vendido a
              terceiros.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-bold text-ink">3. Direitos do Titular (LGPD)</h4>
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui o direito
              de solicitar a exclusão de suas informações e histórico de mensagens a qualquer
              momento diretamente pelo canal de atendimento.
            </p>
          </section>

          <section className="space-y-1">
            <h4 className="font-bold text-ink">4. Demonstração Técnica & Propriedade</h4>
            <p>
              Esta solução digital foi concebida e desenvolvida por <strong>Paulo Raséc</strong>{' '}
              (rasec-dev.vercel.app) como protótipo de alto impacto para o Ateliê Ale Zampieri
              (Guarapuava - PR).
            </p>
          </section>
        </div>

        {/* Rodapé */}
        <div className="p-3 border-t border-[#EFE8DE] bg-[#FAF7F2] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

