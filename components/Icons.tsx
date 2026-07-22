import type { ReactElement, SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type IconProps = SVGProps<SVGSVGElement>;

export const ICONS: Record<string, (p: IconProps) => ReactElement> = {
  growth: (p) => (
    <svg {...base} {...p}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  ),
  target: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  handshake: (p) => (
    <svg {...base} {...p}>
      <path d="M11 17l-2 2a1.5 1.5 0 01-2-2l4-4" />
      <path d="M13 7l3-2 5 5-3 3-3-3" />
      <path d="M3 10l5-5 5 5-4 4-3-3" />
    </svg>
  ),
  heart: (p) => (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.5-9-9a4.5 4.5 0 019-1 4.5 4.5 0 019 1c-2 4.5-9 9-9 9z" />
    </svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.6 5L19 9.6 13.6 12 12 17l-1.6-5L5 9.6 10.4 8z" />
      <path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
    </svg>
  ),
  bulb: (p) => (
    <svg {...base} {...p}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 00-4 10.5c.7.7 1 1.4 1 2.5h6c0-1.1.3-1.8 1-2.5A6 6 0 0012 3z" />
    </svg>
  ),
  rocket: (p) => (
    <svg {...base} {...p}>
      <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5" />
      <path d="M9 15l-1-1c1-5 4-8 9-9 0 5-3 8-8 9z" />
      <circle cx="14.5" cy="9.5" r="1.3" />
    </svg>
  ),
  chat: (p) => (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H8l-4 4z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
  network: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 7v4m0 0l-5 5m5-5l5 5" />
    </svg>
  ),
  globe: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  ),
  arrowDown: (p) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  ),
  arrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  ),
  camera: (p) => (
    <svg {...base} {...p}>
      <path d="M3 8h3l1.5-2h9L18 8h3v11H3z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  ball: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l3 2-1 4h-4l-1-4z" />
      <path d="M12 3v4M5 9l4 1M19 9l-4 1M8 20l2-4M16 20l-2-4" />
    </svg>
  ),
  plane: (p) => (
    <svg {...base} {...p}>
      <path d="M21 4L3 11l6 2 2 6 3-6 7-9z" />
    </svg>
  ),
  chip: (p) => (
    <svg {...base} {...p}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </svg>
  ),
  dumbbell: (p) => (
    <svg {...base} {...p}>
      <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
    </svg>
  ),
  car: (p) => (
    <svg {...base} {...p}>
      <path d="M3 13l1.8-4.6A2 2 0 016.7 7h10.6a2 2 0 011.9 1.4L21 13v5h-2.5M3 18v-5m0 5h2.5M3 13h18" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  ),
  code: (p) => (
    <svg {...base} {...p}>
      <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
    </svg>
  ),
};

export function Icon({
  name,
  ...props
}: { name: string } & IconProps) {
  const Cmp = ICONS[name] ?? ICONS.spark;
  return <Cmp {...props} />;
}
