export default function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blurs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating small circles */}
      <div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-300/30 rounded-full animate-float"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-purple-300/20 rounded-full animate-float"
        style={{ animationDuration: "7s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float"
        style={{ animationDuration: "5s", animationDelay: "0.5s" }}
      />
    </div>
  );
}


