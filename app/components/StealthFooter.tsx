export default function StealthFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-dark)]/95 backdrop-blur-xl border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between gap-4 flex-wrap">

        {/* Business name + copyright */}
        <p className="font-mono text-[10.5px] tracking-[0.06em] text-[var(--text-2)] whitespace-nowrap">
          © 2026{" "}
          <strong className="text-[var(--text-1)] font-semibold">
            Scalar Resonant Systems Inc.
          </strong>
          {" "}· All rights reserved.
        </p>

        {/* Registered address — always visible */}
        <address className="font-mono text-[10px] tracking-[0.06em] text-[var(--text-3)] not-italic whitespace-nowrap">
          5737 Scenic Hills Dr, Roanoke, VA 24018-5209, USA
        </address>

      </div>
    </footer>
  );
}
