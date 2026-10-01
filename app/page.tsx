export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white font-sans">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          Scalar Resonant Systems
        </h1>
        
        <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide">
          Toroidal photonic architecture. <br className="hidden md:block" />
          Zero on-chip heat.
        </p>

        <div className="h-px w-24 bg-gray-800 mx-auto my-12"></div>
        
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          Infrastructure in stealth.
        </p>
      </div>
    </main>
  );
}
