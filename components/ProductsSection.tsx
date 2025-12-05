"use client";

import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import SectionHeader from "./ui/SectionHeader";
import BackgroundBlobs from "./ui/BackgroundBlobs";
import ProductCard, { Product } from "./products/ProductCard";

const products: Product[] = [
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
      <BackgroundBlobs />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={headerRef}>
          <SectionHeader
            title="Naše"
            highlight="Kupine"
            description="Najbolje sorte kupina, pažljivo uzgajane u idealnim uslovima"
            isVisible={headerVisible}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              ref={(el) => { cardRefs.current[index] = el; }}
            >
              <ProductCard
                product={product}
                isVisible={visibleItems.has(index)}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
