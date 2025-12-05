import Link from "next/link";
import Image from "next/image";
import blackberryImg from "@/assets/images/blackberry.png";

interface FooterBrandProps {
  isVisible: boolean;
}

export default function FooterBrand({ isVisible }: FooterBrandProps) {
  return (
    <div
      className={`md:col-span-2 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
  );
}

