interface StatBoxProps {
  stat: string;
  label: string;
  isVisible: boolean;
}

export default function StatBox({ stat, label, isVisible }: StatBoxProps) {
  return (
    <div className="flex-shrink-0 text-center">
      <div
        className={`w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-all duration-700 cursor-default ${
          isVisible
            ? "scale-100 opacity-100 rotate-0"
            : "scale-50 opacity-0 rotate-12"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="text-3xl font-bold text-white">{stat}</div>
        <div className="text-purple-100 text-xs">{label}</div>
      </div>
    </div>
  );
}

