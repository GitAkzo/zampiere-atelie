/**
 * Formata valores numéricos para a moeda brasileira (R$ 0,00)
 */
export function formatCurrency(value) {
  const numeric = typeof value === 'number' ? value : Number(value) || 0;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numeric);
}

/**
 * Aplica máscara de telefone brasileiro: (00) 0 0000-0000 ou (00) 0000-0000
 */
export function formatPhone(value = '') {
  const clean = value.replace(/\D/g, '').slice(0, 11);
  if (clean.length <= 2) return clean ? `(${clean}` : '';
  if (clean.length <= 3) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
  if (clean.length <= 7) return `(${clean.slice(0, 2)}) ${clean.slice(2, 3)} ${clean.slice(3)}`;
  return `(${clean.slice(0, 2)}) ${clean.slice(2, 3)} ${clean.slice(3, 7)}-${clean.slice(7)}`;
}

/**
 * Remove qualquer caractere não numérico
 */
export function sanitizePhone(value = '') {
  return value.replace(/\D/g, '');
}

