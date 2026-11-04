import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_QUESTIONS } from '../data/faqData';
import { ATELIE_WHATSAPP_PHONE } from '../utils/whatsappOrder';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="duvidas" className="bg-brand-50/50 border-t border-[#EFE8DE] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span>Tire suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
            Perguntas Frequentes
          </h2>
          <p className="mt-1 text-xs text-muted">
            Tudo o que você precisa saber sobre prazos, envios e personalizações.
          </p>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-3">
          {FAQ_QUESTIONS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-surface rounded-2xl border border-[#EFE8DE] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-ink hover:text-brand-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-muted leading-relaxed border-t border-[#FAF5EF] animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Adicional para WhatsApp */}
        <div className="mt-8 text-center p-6 bg-surface rounded-2xl border border-[#EFE8DE] shadow-xs">
          <p className="font-serif text-sm font-bold text-ink">
            Tem alguma dúvida sobre uma personalização exclusiva?
          </p>
          <p className="text-xs text-muted mt-1">
            Chame a artesã Alessandra diretamente no WhatsApp para criar uma peça sob medida.
          </p>
          <a
            href={`https://wa.me/55${ATELIE_WHATSAPP_PHONE}?text=${encodeURIComponent(
              'Olá Alessandra! Estive no seu catálogo online e gostaria de tirar uma dúvida sobre uma encomenda personalizada.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold shadow-xs hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Ateliê no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
