import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";

export interface Product {
  emoji: string;
  title: string;
  description: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  isVisible: boolean;
  index: number;
}

export default function ProductCard({ product, isVisible, index }: ProductCardProps) {
  return (
    <div
      className={`group relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer transition-all duration-700 ease-out hover:-translate-y-2 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div
        className={`mb-6 h-20 flex items-center transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      >
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
      <div className="text-purple-600 font-bold text-xl">{product.price}</div>
    </div>
  );
}

