export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <img 
          src="/logo.png" 
          alt="Scalar Resonant Systems Inc." 
          className="w-full h-auto object-contain"
        />
        
        <div className="h-px w-24 bg-gray-800 mx-auto mt-4 mb-6"></div>
        
        <p className="text-xs md:text-sm text-cyan-400 font-mono tracking-[0.25em] uppercase text-center mb-1">
          Optical Tensor Quantum Architecture
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-8 font-mono">
          Infrastructure in stealth // Core Hardware Online
        </p>

        {/* Telemetry Indicator Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-[11px] font-mono text-gray-400 bg-black/60 border border-gray-800/80 rounded-full px-5 py-2 backdrop-blur-md">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            64-CH C-BAND COMB
          </span>
          <span className="text-gray-700">|</span>
          <span className="flex items-center gap-2 text-cyan-400">
            ALD COUPLER: 2.015 dB IL
          </span>
          <span className="text-gray-700">|</span>
          <span className="flex items-center gap-2 text-purple-400">
            T² MANIFOLD: Q ≈ 2,791
          </span>
        </div>

        {/* Interactive Portals */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
          <a
            href="/lab"
            className="group relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/40 border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all duration-300 text-cyan-300 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <span className="w-2 h-2 rounded-sm bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#00f0ff]"></span>
            Photonic Lab
            <span className="text-cyan-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>

          <a
            href="/card"
            className="group relative flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-950/60 to-zinc-950/40 border border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 text-purple-300 font-mono text-xs uppercase tracking-wider font-semibold"
          >
            <span className="w-2 h-2 rounded-sm bg-purple-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#a855f7]"></span>
            Founder Card
            <span className="text-purple-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
