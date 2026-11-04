import { useCallback } from 'react';

/**
 * Hook para feedback tátil em dispositivos móveis via Vibration API
 */
export function useHaptics() {
  const triggerHaptic = useCallback((pattern = 10) => {
    try {
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(pattern);
      }
    } catch {
      // Falha silenciosa em navegadores que bloqueiam ou não suportam
    }
  }, []);

  return { triggerHaptic };
}
