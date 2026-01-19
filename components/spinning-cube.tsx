"use client";

export default function SpinningCube({
  size = 320,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`cube-scene ${className}`}
      style={{ ["--cube-size" as any]: `${size}px` }}
      aria-hidden="true"
    >
      <div className="cube">
        <div className="cube-face cube-front" />
        <div className="cube-face cube-back" />
        <div className="cube-face cube-right" />
        <div className="cube-face cube-left" />
        <div className="cube-face cube-top" />
        <div className="cube-face cube-bottom" />
      </div>
    </div>
  );
}
