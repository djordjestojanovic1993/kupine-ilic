import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/images/hero-2.jpg";

export default function RecipesSection() {
  return (
    <section id="recipes" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImg}
        alt="Kupine"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Kupine poštujemo generacijama.
            <br />
            A inspiriše nas svaki dan.
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Ima li išta ljepše
            <br />
            od domaćeg voća?
          </p>
          
          <Link 
            href="/recipes" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-lg font-bold rounded-full transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30"
          >
            Pogledajte naše recepte
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

