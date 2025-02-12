export function Logo() {
  return (
    <div className="relative flex h-24 w-24 items-center justify-center">
      <svg viewBox="0 0 100 100" className="size-12" fill="none">
        <path
          d="M50 20 L80 70 L20 70 Z"
          stroke="#22C55E"
          strokeWidth="4"
          fill="none"
          className="-translate-x-2 transform"
        />

        <path
          d="M50 20 L80 70 L20 70 Z"
          stroke="white"
          strokeWidth="4"
          fill="none"
          className="translate-x-2 transform"
        />
      </svg>
    </div>
  );
}
