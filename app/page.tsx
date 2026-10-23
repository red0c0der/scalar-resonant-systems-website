import StyleDock from "./components/StyleDock";

// ── Key metrics shown in the telemetry strip and bento grid ──────────────────
const METRICS = [
  { label: "Optical Channels", value: "64λ", sub: "C-Band Comb" },
  { label: "ALD Coupler IL", value: "2.015 dB", sub: "180 nm SiO₂" },
  { label: "T² Manifold Q", value: "2,791", sub: "Toroid Resonance" },
  { label: "Reticle Die Size", value: "2.5 × 2.5 mm", sub: "Phase-1 Tape-Out" },
  { label: "Patent Claims", value: "53", sub: "Filed · Provisional" },
  { label: "Channel Spacing", value: "150 GHz", sub: "DWDM Δν" },
];

const PILLARS = [
  {
    icon: "◈",
    title: "Toroidal Photonic Core",
    body: "Triple-radius T² manifold architecture enables non-Euclidean tensor routing, eliminating the bandwidth walls that cap conventional planar photonic integrated circuits.",
  },
  {
    icon: "⬡",
    title: "3D Desargues Tape-Out",
    body: "Phase-1 reticle uses a projective-geometry-based layout to achieve near-lossless multi-layer optical coupling through atomic-layer-deposited vertical gap junctions.",
  },
  {
    icon: "⟁",
    title: "64-Channel Comb Source",
    body: "Integrated C-band frequency comb delivers 64 simultaneous wavelength carriers at 150 GHz spacing, purpose-built for DWDM hyperscale compute interconnects.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center relative overflow-x-hidden transition-colors duration-400 bg-[var(--bg-dark)]">

      {/* ── Sticky Nav ────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-6 sm:px-10 py-3 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
        <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--neon-cyan)] uppercase font-bold">
          Scalar Resonant Systems
        </span>
        <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider text-gray-400 uppercase">
          <a href="#technology" className="hover:text-[var(--neon-cyan)] transition-colors">Technology</a>
          <a href="#metrics"    className="hover:text-[var(--neon-cyan)] transition-colors">Performance</a>
          <a href="#ip"         className="hover:text-[var(--neon-cyan)] transition-colors">IP</a>
          <a href="#contact"    className="hover:text-white transition-colors border border-white/20 hover:border-[var(--neon-cyan)] px-3 py-1 rounded-full">Contact</a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-5xl flex flex-col items-center justify-center min-h-[85vh] px-4 pt-12 pb-8 relative z-10">
        <img
          src="/logo.png"
          alt="Scalar Resonant Systems Inc."
          className="w-full h-auto object-contain max-h-[200px] mb-8"
        />

        <h1 className="text-2xl sm:text-4xl font-bold text-white text-center leading-tight tracking-tight mb-4 max-w-3xl">
          Light-Speed Compute Architecture<br />
          <span className="text-[var(--neon-cyan)]">Beyond the Electronic Bandwidth Wall</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mb-10 leading-relaxed">
          Scalar Resonant Systems is developing a toroidal photonic processor platform that routes optical tensors through non-Euclidean manifold geometries — unlocking interconnect densities and switching speeds inaccessible to conventional planar silicon photonics.
        </p>

        {/* Live telemetry pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-[11px] font-mono text-gray-300 bg-black/60 border border-[var(--border-line)] rounded-full px-5 py-2 backdrop-blur-md shadow-[0_0_20px_var(--border-glow)]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-emerald)] animate-pulse" />
            HARDWARE ONLINE
          </span>
          <span className="text-gray-700">|</span>
          <span className="text-[var(--neon-cyan)]">64-CH C-BAND COMB</span>
          <span className="text-gray-700">|</span>
          <span className="text-[var(--neon-purple)]">ALD IL: 2.015 dB</span>
          <span className="text-gray-700">|</span>
          <span className="text-gray-400">T² Q ≈ 2,791</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--neon-cyan)] text-[#050811] font-mono text-xs uppercase tracking-wider font-bold hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_var(--border-glow)]"
          >
            Contact Engineering →
          </a>
          <a
            href="/card"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--border-line)] text-gray-300 font-mono text-xs uppercase tracking-wider hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-all duration-200 backdrop-blur-md"
          >
            Founder Profile
          </a>
        </div>
      </section>

      {/* ── Technology Pillars ────────────────────────────────────────────── */}
      <section id="technology" className="w-full max-w-5xl px-4 py-20">
        <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--neon-cyan)] uppercase mb-2 text-center">Core Architecture</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-12">The T² Photonic Stack</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col gap-3 p-6 rounded-2xl bg-black/40 border border-white/[0.07] hover:border-[var(--border-line)] hover:shadow-[0_0_30px_var(--border-glow)] transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-2xl text-[var(--neon-cyan)]">{p.icon}</span>
              <h3 className="text-sm font-bold text-white tracking-wide">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Performance Metrics Bento Grid ───────────────────────────────── */}
      <section id="metrics" className="w-full max-w-5xl px-4 py-20">
        <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--neon-cyan)] uppercase mb-2 text-center">Technical Specifications</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-12">Performance Benchmarks</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-1 p-5 rounded-xl bg-black/50 border border-white/[0.06] hover:border-[var(--border-line)] transition-colors duration-200"
            >
              <span className="text-[10px] font-mono tracking-[0.1em] text-gray-500 uppercase">{m.label}</span>
              <span className="text-lg sm:text-xl font-bold text-[var(--neon-cyan)] font-mono">{m.value}</span>
              <span className="text-[10px] text-gray-600 font-mono">{m.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── IP & Research ────────────────────────────────────────────────── */}
      <section id="ip" className="w-full max-w-5xl px-4 py-20">
        <p className="text-[10px] font-mono tracking-[0.3em] text-[var(--neon-cyan)] uppercase mb-2 text-center">Intellectual Property</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">53-Claim Patent Portfolio</h2>
        <p className="text-xs text-gray-500 text-center font-mono mb-10 max-w-xl mx-auto">
          Provisional application covering toroidal waveguide topology, ALD vertical coupling, Desargues-geometry tape-out layout, and multi-channel comb source integration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { tag: "CLAIM SET A", title: "Toroidal Waveguide Topology", desc: "Non-Euclidean photonic manifold geometry for lossless optical tensor routing across multi-radius toroid structures." },
            { tag: "CLAIM SET B", title: "ALD Vertical Gap Junction", desc: "Atomic-layer-deposited 180 nm SiO₂ coupler achieving 2.015 dB insertion loss across a 3D inter-layer optical gap." },
            { tag: "CLAIM SET C", title: "Desargues Layout Engine", desc: "Projective-geometry-based photonic IC layout algorithm enabling dense, cross-layer waveguide routing without intersection loss." },
            { tag: "CLAIM SET D", title: "64λ Integrated Comb Source", desc: "On-chip C-band frequency comb generating 64 simultaneous carriers at 150 GHz spacing for DWDM interconnect fabrics." },
          ].map((item) => (
            <div key={item.tag} className="flex gap-4 p-5 rounded-xl bg-black/40 border border-white/[0.06] hover:border-[var(--border-line)] transition-colors duration-200">
              <span className="text-[9px] font-mono text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 px-2 py-1 rounded h-fit whitespace-nowrap tracking-widest">{item.tag}</span>
              <div>
                <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────────────── */}
      <section id="contact" className="w-full max-w-5xl px-4 py-20 mb-12">
        <div className="rounded-2xl border border-[var(--border-line)] bg-black/50 backdrop-blur-md p-10 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-[0_0_40px_var(--border-glow)]">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Partnerships & Engineering Inquiries</h2>
            <p className="text-xs text-gray-500 font-mono max-w-sm">
              Foundry partnerships, investor relations, and licensing discussions welcome.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-fit">
            <a
              href="mailto:founder@scalarresonant.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--neon-cyan)] text-[#050811] font-mono text-xs uppercase tracking-wider font-bold hover:brightness-110 transition-all shadow-[0_0_20px_var(--border-glow)] whitespace-nowrap"
            >
              ✉ founder@scalarresonant.com
            </a>
            <a
              href="https://www.linkedin.com/in/redocoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-gray-400 font-mono text-xs uppercase tracking-wider hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-all"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </section>

      <StyleDock />
    </main>
  );
}
