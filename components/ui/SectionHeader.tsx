"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  highlight: string;
  description: string;
  icon?: ReactNode;
  isVisible?: boolean;
}

export default function SectionHeader({
  title,
  highlight,
  description,
  icon,
  isVisible = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`text-center mb-16 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {icon && (
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          {icon}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {title}{" "}
        <span className="text-purple-600 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">{description}</p>
    </div>
  );
}

