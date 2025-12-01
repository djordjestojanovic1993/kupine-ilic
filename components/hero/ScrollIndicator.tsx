interface ScrollIndicatorProps {
  mounted: boolean;
}

export default function ScrollIndicator({ mounted }: ScrollIndicatorProps) {
  return (
    <div
      className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
        <div className="w-1 h-2 bg-white/80 rounded-full animate-scroll" />
      </div>
    </div>
  );
}

