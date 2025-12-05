"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import FooterBrand from "./footer/FooterBrand";
import FooterLinks from "./footer/FooterLinks";

const navLinks = [
  { name: "Početna", href: "/#home" },
  { name: "Naše Kupine", href: "/#products" },
  { name: "O Nama", href: "/#about" },
  { name: "Recepti", href: "/recipes" },
];

const contactLinks = [
  { name: "info@kupine-ilic.rs", href: "mailto:info@kupine-ilic.rs" },
  { name: "+381 63 123 4567", href: "tel:+381631234567" },
];

export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FooterBrand isVisible={isVisible} />
          
          <FooterLinks
            title="Navigacija"
            links={navLinks}
            isVisible={isVisible}
            baseDelay={200}
          />
          
          <div>
            <FooterLinks
              title="Kontakt"
              links={contactLinks}
              isVisible={isVisible}
              baseDelay={300}
            />
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
