import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function ShowcaseDisclaimer() {
  return (
    <aside aria-label="Demonstração Técnica" className="bg-[#2B231F] text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="leading-tight">
            <strong>Demonstração Técnica:</strong> Catálogo Digital Interativo criado por{' '}
            <strong className="text-white">Paulo Raséc</strong> para o Ateliê Ale Zampieri.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/5541999337207?text=Ol%C3%A1%20Paulo,%20vi%20o%20cat%C3%A1logo%20do%20Ateli%C3%AA%20Ale%20Zampieri%20e%20gostaria%20de%20um%20projeto%20similar!"
            target="_blank"
            rel="noreferrer"
            className="text-gold-400 hover:text-gold-300 font-bold transition-colors inline-flex items-center gap-1"
          >
            <span>Contratar Desenvolvedor</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-stone-700">|</span>
          <a
            href="https://rasec-dev.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-stone-400 hover:text-white transition-colors"
          >
            rasec.dev
          </a>
        </div>
      </div>
    </aside>
  );
}
