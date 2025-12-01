"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import blackberryImg from "@/assets/images/blackberry.png";

const navLinks = [
  { name: "Početna", href: "/#home" },
  { name: "Naše Kupine", href: "/#products" },
  { name: "O Nama", href: "/#about" },
  { name: "Recepti", href: "/recipes" },
  { name: "Kontakt", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 group transition-all duration-500 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={blackberryImg}
              alt="Kupine"
              width={36}
              height={36}
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
              Kupine Ilić
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-600 hover:text-purple-600 font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full ${
                  mounted ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: mounted ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors duration-300 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-6 h-0.5 bg-current rounded transition-all duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current rounded transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-72 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium py-3 px-3 rounded-lg transition-all duration-300 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
