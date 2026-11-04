import { useState, useEffect, useMemo } from 'react';

const STORAGE_KEY = '@atelie_zampieri_cart_v1';
const CART_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias de validade conforme diretrizes

function loadInitialCart() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return [];
    if (parsed.timestamp && Date.now() - parsed.timestamp > CART_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
    return parsed.items;
  } catch {
    return [];
  }
}

export function useCart() {
  const [cart, setCart] = useState(loadInitialCart);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          items: cart,
        })
      );
    } catch {
      // Ignora erro de cota excedida
    }
  }, [cart]);

  const addItem = ({ product, customName = '', medal = '', quantity = 1 }) => {
    setCart((prev) => {
      // Diferencia itens pelo produto E pelas customizações (nome e medalha)
      const existingIndex = prev.findIndex(
        (i) =>
          i.id === product.id &&
          (i.customName || '') === customName &&
          (i.medal || '') === medal
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      const cartItemId = `${product.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
      return [
        ...prev,
        {
          cartItemId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          leadTime: product.leadTime,
          customName,
          medal,
          quantity,
        },
      ];
    });
  };

  const removeItem = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            const nextQuantity = item.quantity + delta;
            return nextQuantity > 0 ? { ...item, quantity: nextQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignora
    }
  };

  const totals = useMemo(() => {
    const totalItems = (cart ?? []).reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = (cart ?? []).reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return { totalItems, subtotal };
  }, [cart]);

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totals,
  };
}
