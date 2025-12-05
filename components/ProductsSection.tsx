import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";

const products = [
  {
    emoji: "blackberry",
    title: "Sveže Kupine",
    description:
      "Ručno ubrane sveže kupine, savršene za direktnu konzumaciju ili pripremu slatkiša.",
    price: "od 500 RSD / kg",
    gradient: "from-purple-50 to-white",
    border: "border-purple-100 hover:border-purple-300",
    shadow: "hover:shadow-purple-500/20",
    priceColor: "text-purple-600",
  },
  {
    emoji: "🍯",
    title: "Domaći Džem",
    description:
      "Tradicionalni recept, bez konzervansa. Čist ukus kupina u svakom zalogaju.",
    price: "od 800 RSD / tegla",
    gradient: "from-pink-50 to-white",
    border: "border-pink-100 hover:border-pink-300",
    shadow: "hover:shadow-pink-500/20",
    priceColor: "text-pink-600",
  },
  {
    emoji: "🧊",
    title: "Smrznute Kupine",
    description:
      "Brzo smrznute na vrhuncu zrelosti. Dostupne cele godine za vaše smoothije.",
    price: "od 400 RSD / kg",
    gradient: "from-purple-50 to-pink-50",
    border: "border-purple-100 hover:border-purple-300",
    shadow: "hover:shadow-purple-500/20",
    priceColor: "text-purple-600",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
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
          {products.map((product) => (
            <div
              key={product.title}
              className={`group relative bg-gradient-to-br ${product.gradient} p-8 rounded-3xl border-2 ${product.border} hover:shadow-xl ${product.shadow} cursor-pointer transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="mb-6 h-20 flex items-center">
                {product.emoji === "blackberry" ? (
                  <Image
                    src={blackberryImg}
                    alt="Kupina"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain animate-bounce"
                  />
                ) : (
                  <span className="text-7xl">
                    {product.emoji}
                  </span>
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
              <div className={`${product.priceColor} font-bold text-xl`}>
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
