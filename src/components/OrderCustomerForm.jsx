import React, { useState } from 'react';
import { MessageCircle, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { formatPhone, sanitizePhone } from '../utils/formatters';
import { buildWhatsAppOrderUrl } from '../utils/whatsappOrder';
import { useHaptics } from '../hooks/useHaptics';

export default function OrderCustomerForm({ items = [], onComplete }) {
  const { triggerHaptic } = useHaptics();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [deliveryType, setDeliveryType] = useState('retirada');
  const [address, setAddress] = useState('');
  const [observations, setObservations] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    // Apenas números
    const cleanDigits = e.target.value.replace(/\D/g, '');
    setPhone(formatPhone(cleanDigits));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }

    const cleanPhone = sanitizePhone(phone);
    if (cleanPhone.length < 10) {
      setError('Por favor, digite um telefone/WhatsApp válido com DDD.');
      return;
    }

    if (deliveryType === 'entrega' && !address.trim()) {
      setError('Por favor, informe seu endereço ou cidade para entrega.');
      return;
    }

    setError('');
    triggerHaptic(30);

    const whatsappUrl = buildWhatsAppOrderUrl({
      items,
      customer: { name, phone },
      deliveryType,
      address,
      paymentMethod: 'PIX (Sinal de 50% na aprovação)',
      observations,
    });

    // Abre a conversa no WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (onComplete) onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-3 border-t border-[#EFE8DE]">
      <div className="flex items-center gap-1.5 text-xs font-bold text-brand-800">
        <Sparkles className="w-3.5 h-3.5 text-gold-500" />
        <span>Seus Dados para Encomenda</span>
      </div>

      {error && (
        <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Nome */}
      <div>
        <label className="block text-[11px] font-bold text-ink mb-1">Seu Nome Completo *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Ana Maria Silva"
          className="w-full px-3 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:ring-2 focus:ring-brand-500 focus:outline-hidden bg-white"
        />
      </div>

      {/* WhatsApp com Máscara */}
      <div>
        <label className="block text-[11px] font-bold text-ink mb-1">Seu WhatsApp com DDD *</label>
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          placeholder="(42) 9 9999-9999"
          maxLength={16}
          className="w-full px-3 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:ring-2 focus:ring-brand-500 focus:outline-hidden bg-white"
        />
      </div>

      {/* Modalidade de Entrega */}
      <div>
        <label className="block text-[11px] font-bold text-ink mb-1.5">Como prefere receber?</label>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setDeliveryType('retirada')}
            className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
              deliveryType === 'retirada'
                ? 'bg-brand-50 border-brand-500 text-brand-900 font-bold shadow-xs'
                : 'border-[#EFE8DE] text-muted hover:bg-brand-50/50'
            }`}
          >
            Retirar no Ateliê (Guarapuava)
          </button>
          <button
            type="button"
            onClick={() => setDeliveryType('entrega')}
            className={`p-2.5 rounded-xl border text-center font-medium transition-all ${
              deliveryType === 'entrega'
                ? 'bg-brand-50 border-brand-500 text-brand-900 font-bold shadow-xs'
                : 'border-[#EFE8DE] text-muted hover:bg-brand-50/50'
            }`}
          >
            Entrega / Envio Correios
          </button>
        </div>
      </div>

      {/* Endereço se for Entrega */}
      {deliveryType === 'entrega' && (
        <div>
          <label className="block text-[11px] font-bold text-ink mb-1">
            Endereço Completo ou Cidade/Bairro *
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Rua, número, bairro e cidade"
            className="w-full px-3 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:ring-2 focus:ring-brand-500 focus:outline-hidden bg-white"
          />
        </div>
      )}

      {/* Observações */}
      <div>
        <label className="block text-[11px] font-bold text-ink mb-1">
          Observações ou Detalhes Especiais
        </label>
        <textarea
          rows={2}
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Ex: Gostaria de tons azul bebê para batizado de menino..."
          className="w-full px-3 py-2 rounded-xl border border-[#E5DCD2] text-xs focus:ring-2 focus:ring-brand-500 focus:outline-hidden bg-white resize-none"
        />
      </div>

      {/* Botão Finalizar */}
      <button
        type="submit"
        className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Enviar Pedido para o WhatsApp</span>
      </button>
    </form>
  );
}
