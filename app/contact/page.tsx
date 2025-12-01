import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent">
            Kontaktirajte Nas
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Rado ćemo odgovoriti na sva vaša pitanja o našim kupinama
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-purple-500/5 border border-purple-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Pošaljite Poruku</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  placeholder="Vaše ime"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none"
                  placeholder="vas@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none resize-none"
                  placeholder="Vaša poruka..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Pošalji Poruku
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Lokacija</h3>
                  <p className="text-gray-600">Ulica kupina 123<br />10000 Zagreb, Hrvatska</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                  <p className="text-gray-600">+385 91 234 5678</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@kupine.hr</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-purple-500/5 border border-purple-100 hover:border-purple-300 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Radno Vrijeme</h3>
                  <p className="text-gray-600">
                    Pon - Pet: 08:00 - 18:00<br />
                    Sub: 08:00 - 14:00<br />
                    Ned: Zatvoreno
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              <span>←</span>
              <span>Povratak na početnu</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}


