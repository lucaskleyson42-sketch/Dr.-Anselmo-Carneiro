import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseImage {
  id: string;
  image: string;
  label: string;
  tag: string;
}

interface BeforeAfterCarouselProps {
  cases: CaseImage[];
}

export default function BeforeAfterCarousel({ cases }: BeforeAfterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const getItemsPerView = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width < 768) return 1;
    return 2;
  };

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, cases.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!cases.length) return;
    const autoPlay = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4400);
    return () => clearInterval(autoPlay);
  }, [cases.length]);

  useEffect(() => {
    if (currentIndex >= cases.length) {
      setTimeout(() => {
        setCurrentIndex(currentIndex - cases.length);
      }, 700); // after transition
    }
  }, [currentIndex, cases.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = dragStart - dragCurrent;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setDragCurrent(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStart - dragCurrent;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div className="w-full relative">
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {[...cases, ...cases].map((caseItem, index) => (
            <div
              key={`${caseItem.id}-${index}`}
              className="flex-shrink-0 px-3 resultados-carousel-slide"
              style={{
                width: `${100 / itemsPerView}%`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl" style={{ background: "var(--charcoal)" }}>
                <div
                  className="resultados-carousel-image-wrapper"
                >
                  <img
                    src={caseItem.image}
                    alt={caseItem.label}
                    className="resultados-carousel-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      display: "block",
                    }}
                  />
                </div>

                <div className="p-4 border-t border-olive/20">
                  <div className="flex justify-between items-start gap-3">
                    <span
                      className="text-warm-white text-sm"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 300,
                      }}
                    >
                      {caseItem.label}
                    </span>
                    <span
                      className="text-xs text-warm-white/40 whitespace-nowrap"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {caseItem.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow controls inside carousel */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto p-2 rounded-full border border-olive/30 text-olive hover:bg-olive/10 transition-all duration-300"
            aria-label="Caso anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto p-2 rounded-full border border-olive/30 text-olive hover:bg-olive/10 transition-all duration-300"
            aria-label="Próximo caso"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: Math.ceil(cases.length / itemsPerView) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === (currentIndex % cases.length) ? "bg-olive w-6" : "bg-olive/30 w-2 hover:bg-olive/50"
            }`}
            aria-label={`Ir para página ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

