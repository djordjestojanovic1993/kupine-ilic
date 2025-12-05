"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export function useScrollRevealMultiple(
  count: number,
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.2, rootMargin = "0px 0px -80px 0px", once = true } = options;
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const observers: IntersectionObserver[] = [];

      refs.current.forEach((element, index) => {
        if (!element) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set([...prev, index]));
              if (once) {
                observer.disconnect();
              }
            } else if (!once) {
              setVisibleItems((prev) => {
                const next = new Set(prev);
                next.delete(index);
                return next;
              });
            }
          },
          { threshold, rootMargin }
        );

        observer.observe(element);
        observers.push(observer);
      });

      return () => observers.forEach((obs) => obs.disconnect());
    }, 50);

    return () => clearTimeout(timeout);
  }, [count, threshold, rootMargin, once]);

  return { refs, visibleItems };
}

