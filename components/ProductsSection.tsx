"use client";

import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";

const products = [
  {
    emoji: "blackberry",
    title: "Sveže Kupine",
    description:
      "Ručno ubrane sveže kupine, savršene za direktnu konzumaciju ili pripremu slatkiša.",
    price: "od 500 RSD / kg",
  },
  {
    emoji: "🍯",
    title: "Domaći Džem",
    description:
      "Tradicionalni recept, bez konzervansa. Čist ukus kupina u svakom zalogaju.",
    price: "od 800 RSD / tegla",
  },
  {
    emoji: "🧊",
    title: "Smrznute Kupine",
    description:
      "Brzo smrznute na vrhuncu zrelosti. Dostupne cele godine za vaše smoothije.",
    price: "od 400 RSD / kg",
  },
];

export default function ProductsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { refs: cardRefs, visibleItems } = useScrollRevealMultiple(products.length);

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Naše{" "}
            <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Kupine
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Najbolje sorte kupina, pažljivo uzgajane u idealnim uslovima
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={product.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer transition-all duration-700 ease-out hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`mb-6 h-20 flex items-center transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`} style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                  {product.emoji === "blackberry" ? (
                    <Image
                      src={blackberryImg}
                      alt="Kupina"
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain animate-bounce"
                    />
                  ) : (
                    <span className="text-7xl">{product.emoji}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 relative inline-block">
                  {product.title}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Price */}
                <div className="text-purple-600 font-bold text-xl">
                  {product.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
