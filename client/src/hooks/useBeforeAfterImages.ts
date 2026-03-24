import { useState, useEffect } from "react";

interface CaseImage {
  id: string;
  image: string;
  label: string;
  tag: string;
}

/**
 * Hook para carregar automaticamente imagens da pasta /before-after/
 * Cada arquivo é uma composição completa antes/depois.
 */
export function useBeforeAfterImages(): CaseImage[] {
  const [cases, setCases] = useState<CaseImage[]>([]);

  useEffect(() => {
    // Carregar imagens da pasta /before-after/
    const loadImages = async () => {
      const imageFiles = [
        'case-1.jpg.jpeg',
        'case-2.jpg.jpeg',
        'case-3.jpg.jpeg',
        'case-4.jpg.jpeg',
        'case-5.jpg.jpeg',
        'case-6.jpg.jpeg',
        'case-7.jpg.jpeg'
      ];

      const loadedCases: CaseImage[] = imageFiles.map((file, index) => ({
        id: `case-${index + 1}`,
        image: `/before-after/${file}`,
        label: `Caso ${index + 1}`,
        tag: 'Resultado Completo'
      }));

      setCases(loadedCases);
    };

    loadImages();
  }, []);

  return cases;
}
