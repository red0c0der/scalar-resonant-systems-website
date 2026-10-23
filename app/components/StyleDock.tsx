"use client";

import { useEffect, useState } from "react";

const styles = [
  { id: "cyberpunk", name: "OBSIDIAN CYBERPUNK", color: "#00f0ff" },
  { id: "titanium-gold", name: "TITANIUM & 24K GOLD", color: "#fbbf24" },
  { id: "silicon-prism", name: "SILICON WAFER & PRISM", color: "#c084fc" },
  { id: "matrix-emerald", name: "QUANTUM MATRIX PHOSPHOR", color: "#10b981" },
  { id: "synthwave-sunset", name: "SYNTHWAVE SUNSET", color: "#f43f5e" },
  { id: "solarflare-plasma", name: "SOLARFLARE THERMODYNAMIC", color: "#ea580c" },
  { id: "stealth-carbon", name: "STEALTH PHANTOM CARBON", color: "#ffffff" },
];

export default function StyleDock() {
  const [activeStyle, setActiveStyle] = useState("cyberpunk");
  const [autoMelt, setAutoMelt] = useState<number | false>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("SRS_ACTIVE_STYLE");
      if (saved && styles.some((s) => s.id === saved)) {
        setActiveStyle(saved);
        document.body.setAttribute("data-style", saved);
      }
    } catch {}
  }, []);

  const setStyle = (id: string) => {
    setActiveStyle(id);
    document.body.setAttribute("data-style", id);
    try {
      localStorage.setItem("SRS_ACTIVE_STYLE", id);
    } catch {}
  };

  const cycleAutoMelt = () => {
    if (!autoMelt) setAutoMelt(30);
    else if (autoMelt === 30) setAutoMelt(60);
    else setAutoMelt(false);
  };

  useEffect(() => {
    if (!autoMelt) return;
    const interval = setInterval(() => {
      setActiveStyle((prev) => {
        const idx = styles.findIndex((s) => s.id === prev);
        const next = styles[(idx + 1) % styles.length].id;
        document.body.setAttribute("data-style", next);
        try {
          localStorage.setItem("SRS_ACTIVE_STYLE", next);
        } catch {}
        return next;
      });
    }, autoMelt * 1000);
    return () => clearInterval(interval);
  }, [autoMelt]);

  const activeObj = styles.find((s) => s.id === activeStyle) || styles[0];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#050811]/90 backdrop-blur-xl border border-[var(--border-line)] rounded-full px-4 py-2 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_var(--border-glow)] transition-all duration-400">
      <button
        onClick={cycleAutoMelt}
        className={`text-[9.5px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full transition-all duration-200 ${
          autoMelt
            ? "bg-[var(--neon-cyan)] text-[#050811] shadow-[0_0_12px_var(--neon-cyan)]"
            : "bg-white/5 border border-white/20 text-gray-300 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]"
        }`}
        title="Cycle Auto-Melt Cadence (30s / 60s / OFF)"
      >
        {autoMelt ? `⟳ ${autoMelt}s` : "⟳ AUTO"}
      </button>
      <div className="w-px h-3.5 bg-white/20 mx-1"></div>
      <div className="flex items-center gap-2">
        {styles.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              if (autoMelt) setAutoMelt(false);
              setStyle(s.id);
            }}
            className={`w-5 h-5 rounded-full transition-all duration-250 ${
              activeStyle === s.id
                ? "scale-125 ring-2 ring-white shadow-[0_0_12px_currentColor]"
                : "opacity-75 hover:opacity-100 hover:scale-115"
            }`}
            style={{
              backgroundColor: s.color,
              color: s.color,
            }}
            title={s.name}
          />
        ))}
      </div>
      <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--neon-cyan)] ml-2 uppercase transition-colors duration-400">
        {activeObj.name.split(" ")[0]}
      </span>
    </div>
  );
}
