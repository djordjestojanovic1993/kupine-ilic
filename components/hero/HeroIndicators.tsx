interface HeroIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

export default function HeroIndicators({
  totalSlides,
  currentSlide,
  onSlideChange,
}: HeroIndicatorsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`h-2 rounded-full transition-all duration-500 ${
            index === currentSlide
              ? "bg-white w-8 shadow-lg shadow-white/50"
              : "bg-white/50 w-2 hover:bg-white/75"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

