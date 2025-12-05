import Link from "next/link";
import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";

interface HeroContentProps {
  mounted: boolean;
}

export default function HeroContent({ mounted }: HeroContentProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
      {/* Floating blackberry image */}
      <div
        className={`mb-6 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="animate-bounce inline-block">
          <Image
            src={blackberryImg}
            alt="Kupina"
            width={120}
            height={120}
            className="w-28 h-28 mx-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Animated title */}
      <h1
        className={`text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg transition-all duration-1000 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block hover:scale-105 transition-transform duration-300">
          Sveže
        </span>{" "}
        <span className="inline-block hover:scale-105 transition-transform duration-300">
          Domaće
        </span>{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Kupine
          </span>
          {/* Sparkle effect */}
          <span className="absolute -top-2 -right-2 text-2xl animate-ping">
            ✨
          </span>
        </span>
      </h1>

      {/* Animated subtitle */}
      <p
        className={`text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto drop-shadow transition-all duration-1000 delay-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Uzgajane sa ljubavlju, ubrane sa pažnjom. Direktno od proizvođača do vašeg
        stola.
      </p>

      {/* Animated buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Link
          href="#products"
          className="group relative px-8 py-4 bg-white text-purple-700 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/30"
        >
          <span className="relative z-10">Pogledaj Ponudu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
        <Link
          href="/contact"
          className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-purple-700 hover:shadow-2xl hover:shadow-white/20"
        >
          Kontaktirajte Nas
        </Link>
      </div>
    </div>
  );
}

