import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wait for the first scroll before observing
    const onFirstScroll = () => {
      window.removeEventListener('scroll', onFirstScroll);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(el);
    };

    window.addEventListener('scroll', onFirstScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onFirstScroll);
    };
  }, []);

  return ref;
}
