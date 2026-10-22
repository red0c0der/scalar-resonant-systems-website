export default function StealthFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex flex-col items-center gap-0.5 px-5 pt-1.5 pb-2 bg-[#050811]/75 backdrop-blur-md border-t border-white/[0.06]">
      {/* Gradient divider */}
      <div className="w-full h-px mb-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <p className="font-mono text-[10px] tracking-[0.06em] text-[var(--text-muted)] text-center">
        © 2026{" "}
        <strong className="text-[var(--text-main)] font-semibold">
          Scalar Resonant Systems Inc.
        </strong>{" "}
        All rights reserved.
      </p>

      <address className="font-mono text-[9.5px] tracking-[0.05em] text-[var(--text-muted)] not-italic text-center opacity-70">
        5737 Scenic Hills Dr &nbsp;//&nbsp; Roanoke, VA 24018-5209 &nbsp;//&nbsp; USA
      </address>
    </footer>
  );
}
