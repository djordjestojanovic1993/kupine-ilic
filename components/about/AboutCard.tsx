interface AboutCardProps {
  icon: string;
  title: string;
  description: string;
  isVisible: boolean;
}

export default function AboutCard({
  icon,
  title,
  description,
  isVisible,
}: AboutCardProps) {
  return (
    <div
      className={`flex-1 min-h-[140px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 md:p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 ${
        isVisible ? "scale-100" : "scale-95"
      }`}
      style={{ transitionDelay: "100ms" }}
    >
      <div className="flex items-start gap-4">
        <span
          className={`text-4xl transition-all duration-500 ${
            isVisible
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 -rotate-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {icon}
        </span>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

