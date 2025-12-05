"use client";

import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import BackgroundBlobs from "./ui/BackgroundBlobs";
import AboutCard from "./about/AboutCard";
import StatBox from "./about/StatBox";

const cards = [
  {
    title: "Tradicija",
    description:
      "Već generacijama naša porodica uzgaja najbolje kupine u regionu. Naša plantaža se nalazi u srcu prirode, daleko od zagađenja.",
    icon: "🌿",
    stat: "15+",
    statLabel: "Godina iskustva",
  },
  {
    title: "Prirodno",
    description:
      "Verujemo u tradicionalne metode uzgoja bez pesticida i veštačkih đubriva. Svaka kupina je rezultat ljubavi i poštovanja prema prirodi.",
    icon: "🍃",
    stat: "100%",
    statLabel: "Organsko",
  },
  {
    title: "Kvalitet",
    description:
      "Kupine rastu u čistom vazduhu i plodnom tlu. Ručno ubiremo svaku bobicu kako bismo obezbedili najviši kvalitet.",
    icon: "✨",
    stat: "500+",
    statLabel: "Zadovoljnih kupaca",
  },
];

export default function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { refs: cardRefs, visibleItems } = useScrollRevealMultiple(cards.length, {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <BackgroundBlobs
        positions={{
          top: { position: "top-20 right-10", color: "bg-purple-100" },
          bottom: { position: "bottom-20 left-10", color: "bg-pink-100" },
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Image
            src={blackberryImg}
            alt="Kupina"
            width={56}
            height={56}
            className={`w-14 h-14 object-contain mx-auto mb-3 transition-all duration-700 ${
              headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            O{" "}
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nama
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Otkrijte priču iza naših kupina - od tradicije do vašeg stola
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {cards.map((card, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={card.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 transition-all duration-1000 ease-out ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                } ${
                  isVisible
                    ? "md:translate-x-0"
                    : isEven
                    ? "md:-translate-x-16"
                    : "md:translate-x-16"
                }`}
              >
                <AboutCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  isVisible={isVisible}
                />
                <StatBox
                  stat={card.stat}
                  label={card.statLabel}
                  isVisible={isVisible}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
