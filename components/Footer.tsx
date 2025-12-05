"use client";

import Link from "next/link";
import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const footerLinks = {
  navigacija: [
    { name: "Početna", href: "/#home" },
    { name: "Naše Kupine", href: "/#products" },
    { name: "O Nama", href: "/#about" },
    { name: "Recepti", href: "/recipes" },
  ],
  kontakt: [
    { name: "info@kupine-ilic.rs", href: "mailto:info@kupine-ilic.rs" },
    { name: "+381 63 123 4567", href: "tel:+381631234567" },
  ],
};

export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div
            className={`md:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src={blackberryImg}
                alt="Kupine"
                width={40}
                height={40}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                Kupine Ilić
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Već generacijama uzgajamo najkvalitetnije kupine u srcu Srbije.
              Tradicija, ljubav i poštovanje prema prirodi u svakoj bobici.
            </p>
          </div>

          {/* Navigation */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold text-lg mb-4">Navigacija</h3>
            <ul className="space-y-3">
              {footerLinks.navigacija.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              {footerLinks.kontakt.map((link, index) => (
                <li
                  key={link.name}
                  className={`transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">Srbija</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kupine Ilić. Sva prava pridržana.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300"
            >
              Privatnost
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300"
            >
              Uslovi korišćenja
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
