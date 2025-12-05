"use client";

import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";

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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <Image
            src={blackberryImg}
            alt="Kupina"
            width={64}
            height={64}
            className={`w-16 h-16 object-contain mx-auto mb-4 transition-all duration-700 ${
              headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            O{" "}
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nama
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Otkrijte priču iza naših kupina - od tradicije do vašeg stola
          </p>
        </div>

        {/* Alternating Cards */}
        <div className="space-y-16">
          {cards.map((card, index) => {
            const isVisible = visibleItems.has(index);
            const isEven = index % 2 === 0;

            return (
              <div
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-1000 ease-out ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } ${
                  isVisible
                    ? "md:translate-x-0"
                    : isEven
                    ? "md:-translate-x-16"
                    : "md:translate-x-16"
                }`}
              >
                {/* Card */}
                <div
                  className={`flex-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 ${
                    isVisible ? "scale-100" : "scale-95"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className={`text-4xl transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 scale-100 rotate-0"
                          : "opacity-0 scale-50 -rotate-12"
                      }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      {card.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stat */}
                <div className="flex-shrink-0 text-center">
                  <div
                    className={`w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-700 cursor-default ${
                      isVisible
                        ? "scale-100 opacity-100 rotate-0"
                        : "scale-50 opacity-0 rotate-12"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <div className="text-3xl font-bold text-white">
                      {card.stat}
                    </div>
                    <div className="text-purple-100 text-xs">{card.statLabel}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
