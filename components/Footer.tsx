import Link from "next/link";
import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";

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
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={blackberryImg}
                alt="Kupine"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">Kupine Ilić</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Već generacijama uzgajamo najkvalitetnije kupine u srcu Srbije.
              Tradicija, ljubav i poštovanje prema prirodi u svakoj bobici.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigacija</h3>
            <ul className="space-y-3">
              {footerLinks.navigacija.map((link) => (
                <li key={link.name}>
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
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              {footerLinks.kontakt.map((link) => (
                <li key={link.name}>
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
              <p className="text-gray-400 text-sm">
                Srbija
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
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

