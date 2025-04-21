import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Prevent execution during SSR
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Initial check
      setMatches(media.matches);

      // Update matches when the media query changes
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
      media.addEventListener('change', listener);

      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
} 