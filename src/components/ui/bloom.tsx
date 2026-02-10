interface BloomProps {
  color?: string;
  width?: number;
  height?: number;
  blur?: number;
  opacity?: number;
  className?: string;
}

export function Bloom({
  color = "rgb(79, 96, 250)",
  width = 181,
  height = 94,
  blur = 100,
  opacity = 0.6,
  className = "",
}: BloomProps) {
  return (
    <span
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        backgroundColor: color,
        width,
        height,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  );
}
