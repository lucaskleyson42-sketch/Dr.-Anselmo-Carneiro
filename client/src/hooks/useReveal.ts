/*
 * useReveal — Scroll-based reveal animation hook
 * Observes elements with .reveal, .reveal-left, .reveal-right, .reveal-scale classes
 * Adds .visible class when element enters viewport
 */

import { useEffect } from "react";

export function useReveal(threshold = 0.15) {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);
}
