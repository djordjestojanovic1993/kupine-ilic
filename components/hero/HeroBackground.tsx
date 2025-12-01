import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";

export const backgroundImages = [hero1, hero2, hero3, hero4];

interface HeroBackgroundProps {
  currentSlide: number;
}

export default function HeroBackground({ currentSlide }: HeroBackgroundProps) {
  return (
    <>
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/25 to-purple-900/50" />
        </div>
      ))}
    </>
  );
}

