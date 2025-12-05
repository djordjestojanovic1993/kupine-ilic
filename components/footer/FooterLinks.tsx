import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  isVisible: boolean;
  baseDelay?: number;
}

export default function FooterLinks({
  title,
  links,
  isVisible,
  baseDelay = 200,
}: FooterLinksProps) {
  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${baseDelay - 100}ms` }}
    >
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li
            key={link.name}
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${baseDelay + index * 50}ms` }}
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
  );
}

