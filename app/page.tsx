import StyleDock from "./components/StyleDock";

const METRICS = [
  { label: "Optical Channels",  value: "64λ",         sub: "C-Band Comb"        },
  { label: "ALD Coupler IL",    value: "2.015 dB",     sub: "180 nm SiO₂ Gap"   },
  { label: "T² Manifold Q",     value: "≈ 2,791",      sub: "Toroid Resonance"   },
  { label: "Die Size",          value: "2.5 × 2.5 mm", sub: "Phase-1 Tape-Out"  },
  { label: "Patent Claims",     value: "53",           sub: "Provisional Filed"  },
  { label: "Channel Spacing",   value: "150 GHz",      sub: "DWDM Δν"            },
];

const PILLARS = [
  {
    tag:   "Architecture",
    title: "Toroidal Photonic Core",
    body:  "Triple-radius T² manifold routes optical tensors through non-Euclidean waveguide geometry, eliminating the bandwidth ceilings that constrain conventional planar photonic integrated circuits.",
  },
  {
    tag:   "Fabrication",
    title: "3D Multi-Layer Photonic Tape-Out",
    body:  "Coaxial multi-layer IC layout achieves low-loss vertical optical coupling via atomic-layer-deposited 180 nm SiO₂ gap junctions in a 2.5 × 2.5 mm Phase-1 reticle.",
  },
  {
    tag:   "Photonics",
    title: "64λ Comb Source",
    body:  "On-chip C-band frequency comb generates 64 simultaneous wavelength carriers at 150 GHz spacing — purpose-built for DWDM hyperscale AI compute interconnects.",
  },
];

const CLAIMS = [
  { tag: "Claim Set A", title: "Toroidal Waveguide Topology",  desc: "Non-Euclidean photonic manifold geometry for lossless optical tensor routing across multi-radius toroid structures." },
  { tag: "Claim Set B", title: "ALD Vertical Gap Junction",    desc: "Atomic-layer-deposited 180 nm SiO₂ coupler achieving 2.015 dB insertion loss across a 3D inter-layer optical gap." },
  { tag: "Claim Set C", title: "Coherent State Routing & Buffering", desc: "Multidimensional optical state transformation, storage-basis conversion, and coherent recombination across χ⁽³⁾ nonlinear waveguides." },
  { tag: "Claim Set D", title: "64λ Integrated Comb Source",   desc: "On-chip C-band frequency comb generating 64 simultaneous carriers at 150 GHz spacing for DWDM interconnect fabrics." },
];

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full overflow-x-hidden z-10">

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.05] bg-[var(--bg-dark)]/90 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">

          {/* Wordmark */}
          <a href="/" className="flex items-center gap-3 group">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] group-hover:scale-125 transition-transform" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[var(--text-1)] uppercase font-mono">
              Scalar Resonant Systems
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden sm:flex items-center gap-1">
            {["Technology", "Performance", "IP", "Contact"].map((label) => {
              const id = label === "Technology" ? "technology"
                       : label === "Performance" ? "metrics"
                       : label === "IP"          ? "ip"
                       :                           "contact";
              const isCta = label === "Contact";
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  className={
                    isCta
                      ? "ml-4 px-4 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-widest uppercase border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-dark)] transition-all duration-200"
                      : "px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider text-[var(--text-2)] uppercase hover:text-[var(--text-1)] hover:bg-white/[0.04] transition-all duration-200"
                  }
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto px-6 sm:px-10 pt-24 pb-28 flex flex-col items-center text-center">

        {/* Live status badge */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--accent-dim)] backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-emerald)] shadow-[0_0_6px_#10b981] animate-pulse" />
          <span className="text-[10.5px] font-mono tracking-[0.16em] text-[var(--text-2)] uppercase">
            Hardware Online · Phase-1 Tape-Out
          </span>
        </div>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Scalar Resonant Systems Inc."
          className="w-full max-w-sm h-auto object-contain mb-10 opacity-95"
        />

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12] mb-6 max-w-3xl text-[var(--text-1)]">
          Light-Speed Compute<br />
          <span className="text-[var(--accent)]">Beyond the Bandwidth Wall</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg text-[var(--text-2)] max-w-2xl leading-relaxed mb-12">
          Scalar Resonant Systems is engineering a toroidal photonic processor platform
          that routes optical tensors through non-Euclidean manifold geometries —
          delivering interconnect densities and switching speeds inaccessible to
          conventional planar silicon photonics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-[var(--accent)] text-[var(--bg-dark)] font-mono font-bold text-[11px] tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_24px_var(--accent-glow)]"
          >
            Contact Engineering
          </a>
          <a
            href="/card"
            className="flex-1 flex items-center justify-center gap-2 h-11 px-6 rounded-xl border border-[var(--border)] text-[var(--text-2)] font-mono text-[11px] tracking-widest uppercase hover:border-[var(--border-hi)] hover:text-[var(--text-1)] transition-all backdrop-blur-sm"
          >
            Founder Profile →
          </a>
        </div>
      </section>

      {/* ── Divider ─────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-hi)] to-transparent" />
      </div>

      {/* ── Technology Pillars ───────────────────────────────────────────────── */}
      <section id="technology" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="mb-14 text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
            Core Architecture
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight">
            The T² Photonic Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col gap-4 p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hi)] hover:shadow-[0_0_40px_var(--accent-glow)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <span className="self-start text-[9px] font-mono tracking-[0.2em] text-[var(--accent)] bg-[var(--accent-dim)] px-2.5 py-1 rounded-full uppercase border border-[var(--border)]">
                {p.tag}
              </span>
              <h3 className="text-[15px] font-semibold text-[var(--text-1)] leading-snug">{p.title}</h3>
              <p className="text-[13px] text-[var(--text-2)] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Metrics Bento ───────────────────────────────────────────────────── */}
      <section id="metrics" className="w-full bg-[var(--bg-surface)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20">
          <div className="mb-14 text-center">
            <p className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              Technical Specifications
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight">
              Performance Benchmarks
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="flex flex-col gap-1.5 p-6 rounded-xl bg-[var(--bg-dark)] border border-[var(--border)] hover:border-[var(--border-hi)] transition-colors duration-200"
              >
                <span className="text-[9.5px] font-mono tracking-[0.14em] text-[var(--text-3)] uppercase">{m.label}</span>
                <span className="text-2xl font-bold text-[var(--accent)] font-mono leading-none">{m.value}</span>
                <span className="text-[10.5px] font-mono text-[var(--text-3)]">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IP & Patent Portfolio ────────────────────────────────────────────── */}
      <section id="ip" className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">
        <div className="mb-14 text-center">
          <p className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
            Intellectual Property
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight mb-4">
            53-Claim Patent Portfolio
          </h2>
          <p className="text-[13.5px] text-[var(--text-2)] max-w-2xl mx-auto leading-relaxed">
            Provisional application covering toroidal waveguide topology, ALD vertical coupling,
            coherent multidimensional state routing, and 64-channel comb source integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CLAIMS.map((c) => (
            <div
              key={c.tag}
              className="flex gap-5 p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[var(--border-hi)] transition-colors duration-200"
            >
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-[9px] font-mono tracking-[0.14em] text-[var(--accent-gold)] bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 px-2.5 py-1 rounded whitespace-nowrap uppercase">
                  {c.tag}
                </span>
              </div>
              <div>
                <h4 className="text-[13.5px] font-semibold text-[var(--text-1)] mb-1.5">{c.title}</h4>
                <p className="text-[12.5px] text-[var(--text-2)] leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="w-full bg-[var(--bg-surface)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24">
          <div className="max-w-3xl mx-auto rounded-2xl border border-[var(--border-hi)] bg-[var(--bg-dark)] p-10 sm:p-14 shadow-[0_0_60px_var(--accent-glow)] text-center">
            <p className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-1)] tracking-tight mb-4">
              Partnerships & Engineering Inquiries
            </h2>
            <p className="text-[13.5px] text-[var(--text-2)] mb-10 leading-relaxed">
              Open to foundry partnerships, investor relations, and IP licensing discussions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:founder@scalar-resonant.systems"
                className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-[var(--accent)] text-[var(--bg-dark)] font-mono font-bold text-[11px] tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_24px_var(--accent-glow)]"
              >
                ✉ founder@scalar-resonant.systems
              </a>
              <a
                href="https://www.linkedin.com/in/redocoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-[var(--border-hi)] text-[var(--text-2)] font-mono text-[11px] tracking-widest uppercase hover:text-[var(--text-1)] hover:border-[var(--accent)] transition-all"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spacer so fixed footer doesn't clip content ─────────────────────── */}
      <div className="h-24 w-full" />

      <StyleDock />
    </main>
  );
}
