"use client";

import Link from "next/link";
import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute -top-20 -left-20 w-72 h-72 bg-pink-600 rounded-full blur-3xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        />
        <div
          className={`absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-20 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Blackberry */}
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-75"
          }`}
        >
          <Image
            src={blackberryImg}
            alt="Kupina"
            width={56}
            height={56}
            className="w-14 h-14 object-contain inline-block animate-bounce"
          />
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold mb-4 text-white transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Želite <span className="text-pink-300">naručiti</span>?
        </h2>

        {/* Description */}
        <p
          className={`text-lg text-purple-200 mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Kontaktirajte nas za narudžbine, dostavu ili posetu našoj plantaži
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className={`group relative inline-block px-10 py-4 bg-white text-purple-700 font-semibold rounded-full overflow-hidden transition-all duration-500 delay-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-90"
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-2">
            Kontaktirajte Nas
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
