interface BackgroundBlobsProps {
  positions?: {
    top?: { position: string; color: string };
    bottom?: { position: string; color: string };
  };
}

export default function BackgroundBlobs({ positions }: BackgroundBlobsProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className={`absolute w-72 h-72 rounded-full blur-3xl opacity-30 ${
          positions?.top?.position || "top-20 left-10"
        } ${positions?.top?.color || "bg-purple-100"}`}
      />
      <div
        className={`absolute w-72 h-72 rounded-full blur-3xl opacity-30 ${
          positions?.bottom?.position || "bottom-20 right-10"
        } ${positions?.bottom?.color || "bg-pink-100"}`}
      />
    </div>
  );
}

