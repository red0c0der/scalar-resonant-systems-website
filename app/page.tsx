export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center">
        <img 
          src="/logo.png" 
          alt="Scalar Resonant Systems Inc." 
          className="w-full h-auto object-contain"
        />
        
        <div className="h-px w-24 bg-gray-800 mx-auto mt-4 mb-12"></div>
        
        <p className="text-sm text-gray-500 uppercase tracking-widest text-center">
          Infrastructure in stealth.
        </p>
      </div>
    </main>
  );
}
