export function LeafMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`leaf-rustle inline-block ${className}`} aria-hidden>
      <path
        d="M7 26.5C12 15 17.5 7.5 28 5.2C25.2 16.5 19.2 23.8 7 26.5Z"
        fill="currentColor"
      />
      <path
        d="M11 22.5C15.2 16.8 19.2 12.6 24.5 8.4"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="0.8"
      />
    </svg>
  );
}
