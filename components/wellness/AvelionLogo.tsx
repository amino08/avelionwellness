export function AvelionLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M8 34L20 6L32 34H26L20 18L14 34H8Z" fill="#0A1628" />
      <path
        d="M20 6L26 20L32 34H26L20 22L14 34H8L20 6Z"
        fill="url(#avelion-silver)"
        opacity="0.85"
      />
      <defs>
        <linearGradient id="avelion-silver" x1="14" y1="6" x2="32" y2="34">
          <stop stopColor="#B8C3D1" />
          <stop offset="0.5" stopColor="#E8EDF2" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
