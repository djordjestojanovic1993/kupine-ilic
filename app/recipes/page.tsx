"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import blackberryImg from "@/assets/images/blackberry.png";

const recipes = [
  {
    title: "Domaći Džem od Kupina",
    description: "Tradicionalni recept za najukusniji džem od svježih kupina. Savršen za doručak ili kao dodatak desertima.",
    time: "45 min",
    difficulty: "Lako",
    image: "🫙",
    ingredients: [
      "1 kg svježih kupina",
      "700 g šećera",
      "Sok od 1 limuna",
      "1 kesica želatina za džem",
    ],
    steps: [
      "Operite kupine i stavite ih u veći lonac.",
      "Dodajte šećer i sok od limuna, promiješajte.",
      "Ostavite da odstoji 2 sata kako bi kupine pustile sok.",
      "Stavite lonac na srednju vatru i kuhajte 30-40 minuta, povremeno miješajući.",
      "Dodajte želatinu i kuhajte još 5 minuta.",
      "Vruć džem prelijte u sterilizirane staklenke i zatvorite.",
    ],
  },
  {
    title: "Kupinov Kolač",
    description: "Sočan kolač prepun kupina sa hrskavom koricom. Idealan za obiteljska okupljanja.",
    time: "1h 15min",
    difficulty: "Srednje",
    image: "🍰",
    ingredients: [
      "300 g brašna",
      "200 g maslaca",
      "150 g šećera",
      "3 jaja",
      "400 g svježih kupina",
      "1 prašak za pecivo",
      "Prstohvat soli",
      "Vanilin šećer",
    ],
    steps: [
      "Pomiješajte brašno, prašak za pecivo i sol.",
      "U drugoj posudi umutite maslac i šećer dok ne postane pjenasto.",
      "Dodajte jaja jedno po jedno, pa vanilin šećer.",
      "Postepeno dodajte brašno i miješajte dok se ne sjedini.",
      "Prelijte tijesto u nauljen kalup, rasporedite kupine po vrhu.",
      "Pecite na 180°C oko 45-50 minuta.",
      "Ohladite prije posluživanja.",
    ],
  },
  {
    title: "Smoothie od Kupina",
    description: "Osvježavajući smoothie bogat vitaminima. Savršen start dana ili užina nakon treninga.",
    time: "5 min",
    difficulty: "Lako",
    image: "🥤",
    ingredients: [
      "200 g kupina (svježih ili smrznutih)",
      "1 banana",
      "200 ml jogurta",
      "100 ml mlijeka",
      "1 žlica meda",
      "Led po želji",
    ],
    steps: [
      "Stavite sve sastojke u blender.",
      "Miksajte 1-2 minute dok ne postane glatko.",
      "Po želji dodajte led i miksajte još malo.",
      "Prelijte u čašu i odmah poslužite.",
    ],
  },
  {
    title: "Kupine u Čokoladi",
    description: "Elegantni desert - svježe kupine umočene u finu tamnu čokoladu.",
    time: "20 min",
    difficulty: "Lako",
    image: "🍫",
    ingredients: [
      "300 g svježih kupina",
      "200 g tamne čokolade",
      "50 g bijele čokolade (za dekoraciju)",
      "Malo kokosovog ulja",
    ],
    steps: [
      "Operite kupine i dobro ih osušite.",
      "Otopite tamnu čokoladu na pari, dodajte malo kokosovog ulja.",
      "Umočite svaku kupinu do pola u čokoladu.",
      "Stavite na papir za pečenje da se osuše.",
      "Otopite bijelu čokoladu i napravite ukrasne linije.",
      "Ohladite u hladnjaku 15 minuta prije posluživanja.",
    ],
  },
  {
    title: "Kupinovo Vino",
    description: "Domaće voćno vino od kupina prema tradicionalnom receptu naših baka.",
    time: "3 mjeseca",
    difficulty: "Napredno",
    image: "🍷",
    ingredients: [
      "5 kg zrelih kupina",
      "3 kg šećera",
      "10 litara vode",
      "Vinski kvasac",
      "1 limun",
    ],
    steps: [
      "Zgnječite kupine u velikoj posudi.",
      "Dodajte vodu, šećer i sok od limuna, dobro promiješajte.",
      "Dodajte vinski kvasac prema uputama.",
      "Pokrijte gazom i ostavite na toplom mjestu 7 dana, dnevno miješajte.",
      "Procijedite tekućinu i prelijte u staklenu posudu s ventilom.",
      "Ostavite da fermentira 2-3 mjeseca na hladnom mjestu.",
      "Pretočite u boce i ostavite da odleži još mjesec dana.",
    ],
  },
  {
    title: "Tart od Kupina",
    description: "Kremasti tart sa svježim kupinama i vanilijom. Impresivan desert za posebne prilike.",
    time: "1h 30min",
    difficulty: "Srednje",
    image: "🥧",
    ingredients: [
      "Za tijesto: 200g brašna, 100g maslaca, 50g šećera, 1 jaje",
      "Za kremu: 300ml vrhnja, 200g mascarpone sira, 3 žlice šećera u prahu",
      "400 g svježih kupina",
      "Vanilin ekstrakt",
      "Listići mente za dekoraciju",
    ],
    steps: [
      "Za tijesto: Pomiješajte brašno, maslac, šećer i jaje. Umijesite i ohladite 30 min.",
      "Razvaljajte tijesto i stavite u kalup za tart. Pecite na 180°C 15-20 min.",
      "Ohladite pečenu koricu.",
      "Za kremu: Umutite vrhnje, dodajte mascarpone, šećer i vaniliju.",
      "Rasporedite kremu po ohlađenoj korici.",
      "Složite kupine po vrhu u dekorativni uzorak.",
      "Ukrasite listićima mente i poslužite hladno.",
    ],
  },
];

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedRecipe) {
      const scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.touchAction = "none";
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.touchAction = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.touchAction = "";
    };
  }, [selectedRecipe]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <Image
            src={blackberryImg}
            alt="Kupina"
            width={80}
            height={80}
            className="w-20 h-20 object-contain mx-auto mb-6 animate-bounce"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Naši <span className="text-pink-300">Recepti</span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Otkrijte ukusne načine kako uživati u našim kupinama kroz tradicionalne i moderne recepte
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.title}
                onClick={() => setSelectedRecipe(recipe)}
                className="group bg-white rounded-3xl border-2 border-purple-100 hover:border-purple-300 p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className="text-6xl mb-4">{recipe.image}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {recipe.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {recipe.description}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-purple-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.time}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    recipe.difficulty === "Lako" 
                      ? "bg-green-100 text-green-700"
                      : recipe.difficulty === "Srednje"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Nazad na početnu
          </Link>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setSelectedRecipe(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{selectedRecipe.image}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedRecipe.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-purple-200 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {selectedRecipe.time}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        selectedRecipe.difficulty === "Lako" 
                          ? "bg-green-400 text-green-900"
                          : selectedRecipe.difficulty === "Srednje"
                          ? "bg-yellow-400 text-yellow-900"
                          : "bg-red-400 text-red-900"
                      }`}>
                        {selectedRecipe.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedRecipe(null)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-600 mb-6">{selectedRecipe.description}</p>

              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">🥣</span> Sastojci
                </h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-xl">👩‍🍳</span> Priprema
                </h3>
                <ol className="space-y-3">
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index} className="flex gap-3 text-gray-600">
                      <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 pt-0">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
