import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';

const CONSENT_KEY = '@atelie_zampieri_cookie_consent';

export default function CookieBanner({ onOpenPrivacy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_KEY);
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // Ignora erro
    }
  }, []);

  const handleAccept = (type) => {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify({ consent: type, date: Date.now() }));
    } catch {
      // Ignora erro
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-xl mx-auto bg-surface/95 backdrop-blur-md p-4 rounded-2xl border border-[#EFE8DE] shadow-xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" />
        </div>

        <div className="flex-1 text-xs text-muted">
          <p className="font-bold text-ink leading-snug">
            Privacidade & Cookies (LGPD)
          </p>
          <p className="mt-1 leading-relaxed">
            Utilizamos armazenamento local para salvar os itens da sua sacola e melhorar sua
            experiência de navegação.{' '}
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-brand-700 underline font-semibold hover:text-brand-800"
            >
              Conheça nossa Política
            </button>
            .
          </p>

          <div className="mt-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleAccept('all')}
              className="px-3.5 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors shadow-xs"
            >
              Aceitar Todos
            </button>
            <button
              type="button"
              onClick={() => handleAccept('essential')}
              className="px-3.5 py-1.5 rounded-xl border border-[#E5DCD2] hover:bg-brand-50 text-ink font-semibold text-xs transition-colors"
            >
              Apenas Necessários
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

