import { formatCurrency } from './formatters';

// Telefone de contato do Ateliê (configurado com o contato de demonstração)
export const ATELIE_WHATSAPP_PHONE = '41999337207';

/**
 * Constrói o link wa.me com mensagem estruturada, limpa e amigável.
 * Compatível com WhatsApp Web e Mobile sem corrupção de caracteres.
 */
export function buildWhatsAppOrderUrl({
  items = [],
  customer = {},
  deliveryType = 'retirada',
  address = '',
  paymentMethod = 'PIX',
  observations = '',
  targetPhone = ATELIE_WHATSAPP_PHONE,
}) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const lines = [
    `*NOVO PEDIDO - ATELIÊ ALE ZAMPIERI*`,
    `Pedido gerado via Catálogo Digital`,
    `----------------------------------------`,
    `*[CLIENTE]*`,
    `Nome: ${customer.name || 'Não informado'}`,
    `WhatsApp: ${customer.phone || 'Não informado'}`,
    ``,
    `*[PEÇAS ENCOMENDADAS]*`
  ];

  items.forEach((item, index) => {
    let itemDetail = `${index + 1}. *${item.name}*`;
    itemDetail += `\n   Qtd: ${item.quantity}x | Preço: ${formatCurrency(item.price * item.quantity)}`;

    if (item.customName && item.customName.trim()) {
      itemDetail += `\n   Nome na Peça: *${item.customName.trim()}*`;
    }

    if (item.medal && item.medal.trim()) {
      itemDetail += `\n   Medalha/Devoção: ${item.medal.trim()}`;
    }

    lines.push(itemDetail);
  });

  lines.push(``);
  lines.push(`*[RESUMO FINANCEIRO]*`);
  lines.push(`Subtotal: *${formatCurrency(subtotal)}*`);
  lines.push(`Forma de Pagamento: *${paymentMethod}*`);
  lines.push(``);

  lines.push(`*[ENTREGA / RETIRADA]*`);
  if (deliveryType === 'retirada') {
    lines.push(`Modalidade: Retirada no Ateliê (Guarapuava - PR)`);
  } else {
    lines.push(`Modalidade: Entrega / Envio`);
    if (address && address.trim()) {
      lines.push(`Endereço/Cidade: ${address.trim()}`);
    }
  }

  if (observations && observations.trim()) {
    lines.push(``);
    lines.push(`*[OBSERVAÇÕES DO CLIENTE]*`);
    lines.push(`${observations.trim()}`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Olá Alessandra! Gostaria de confirmar a disponibilidade e o prazo de confecção para essas peças.`);

  const fullText = lines.join('\n');
  const cleanPhone = targetPhone.replace(/\D/g, '');
  return `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(fullText)}`;
}
