import type { CSSProperties } from "react";

export type StickerType = "star" | "heart" | "gem" | "round" | "sparkle" | "butterfly";

type StickerProps = {
  type: StickerType;
  color: string;
  size?: number;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
};

// White outline + soft shadow is what makes each shape read as a "sticker"
const outline = { stroke: "#fff", strokeWidth: 5, strokeLinejoin: "round" as const, paintOrder: "stroke" as const };
const shine = "rgba(255,255,255,0.55)";

function Shape({ type, color }: { type: StickerType; color: string }) {
  switch (type) {
    case "star":
      return (
        <>
          <polygon points="50,5 61,38 96,38 68,59 79,93 50,72 21,93 32,59 4,38 39,38" fill={color} {...outline} />
          <polygon points="50,18 56,40 50,60 44,40" fill={shine} />
        </>
      );
    case "heart":
      return (
        <>
          <path
            d="M50 88 C20 65 5 48 5 30 C5 15 17 5 30 5 C40 5 47 11 50 18 C53 11 60 5 70 5 C83 5 95 15 95 30 C95 48 80 65 50 88Z"
            fill={color}
            {...outline}
          />
          <ellipse cx="28" cy="28" rx="10" ry="6" transform="rotate(-35 28 28)" fill={shine} />
        </>
      );
    case "gem":
      return (
        <>
          <polygon points="25,8 75,8 95,28 95,72 75,92 25,92 5,72 5,28" fill={color} {...outline} />
          <polygon points="32,22 68,22 80,34 80,66 68,78 32,78 20,66 20,34" fill="rgba(255,255,255,0.25)" />
          <path d="M25 8 L32 22 M75 8 L68 22 M95 28 L80 34 M95 72 L80 66 M75 92 L68 78 M25 92 L32 78 M5 72 L20 66 M5 28 L20 34" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <polygon points="34,26 52,26 40,44" fill={shine} />
        </>
      );
    case "round":
      return (
        <>
          <circle cx="50" cy="50" r="44" fill={color} {...outline} />
          <circle cx="50" cy="50" r="26" fill="rgba(255,255,255,0.25)" />
          <path d="M50 6 L50 24 M50 76 L50 94 M6 50 L24 50 M76 50 L94 50 M19 19 L32 32 M81 19 L68 32 M19 81 L32 68 M81 81 L68 68" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
          <ellipse cx="36" cy="32" rx="9" ry="5" transform="rotate(-35 36 32)" fill={shine} />
        </>
      );
    case "sparkle":
      return (
        <path
          d="M50 2 C55 35 65 45 98 50 C65 55 55 65 50 98 C45 65 35 55 2 50 C35 45 45 35 50 2Z"
          fill={color}
          {...outline}
        />
      );
    case "butterfly":
      return (
        <>
          <ellipse cx="30" cy="35" rx="24" ry="20" transform="rotate(-20 30 35)" fill={color} {...outline} />
          <ellipse cx="70" cy="35" rx="24" ry="20" transform="rotate(20 70 35)" fill={color} {...outline} />
          <ellipse cx="33" cy="68" rx="16" ry="14" transform="rotate(20 33 68)" fill={color} {...outline} />
          <ellipse cx="67" cy="68" rx="16" ry="14" transform="rotate(-20 67 68)" fill={color} {...outline} />
          <circle cx="28" cy="33" r="6" fill={shine} />
          <circle cx="72" cy="33" r="6" fill={shine} />
          <rect x="46" y="22" width="8" height="58" rx="4" fill="#c2577f" />
          <path d="M48 24 Q40 8 34 6 M52 24 Q60 8 66 6" stroke="#c2577f" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      );
  }
}

export default function Sticker({ type, color, size = 48, rotate = 0, className = "", style }: StickerProps) {
  return (
    <svg
      viewBox="-4 -4 108 108"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        filter: "drop-shadow(0 3px 4px rgba(120, 60, 90, 0.3))",
        overflow: "visible",
        ...style,
      }}
    >
      <Shape type={type} color={color} />
    </svg>
  );
}
