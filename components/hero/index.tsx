"use client";

import { useState, useEffect } from "react";
import HeroBackground, { backgroundImages } from "./HeroBackground";
import HeroParticles from "./HeroParticles";
import HeroIndicators from "./HeroIndicators";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden"
    >
      <HeroBackground currentSlide={currentSlide} />
      <HeroParticles />
      <HeroIndicators
        totalSlides={backgroundImages.length}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />
      <HeroContent mounted={mounted} />
      <ScrollIndicator mounted={mounted} />
    </section>
  );
}

