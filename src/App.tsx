import { Mail, ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { useState } from 'react';
import { InteractiveLogo } from './components/InteractiveLogo';

// Refined Ribbon Text with lower opacity and clean spacing
// Refined Ribbon Text with a neon blue glow effect
const RibbonText = () => (
  <div className="flex items-center gap-12 whitespace-nowrap opacity-40">
    <Rocket className="w-4 h-4 text-blue-400 rotate-[-90deg] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
    <span className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
      Launching Soon • Launching Soon • Launching Soon • Launching Soon
    </span>
    <Rocket className="w-4 h-4 text-blue-400 rotate-[-90deg] drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
    <span className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
      Launching Soon • Launching Soon • Launching Soon • Launching Soon
    </span>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div 
      className="h-[100dvh] w-full flex flex-col relative overflow-hidden selection:bg-blue-500/30 font-display bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" 
      }}
    >
      <div className="absolute inset-0 bg-black/85 z-0 pointer-events-none"></div>
      
      {/* --- REFINED INFINITE RIBBONS --- */}
      {/* Reduced width and set background to transparent to let the stars peek through */}
      
    {/* Left Ribbon - Moving Down with Glow Border */}
<div className="absolute left-0 top-0 h-full w-10 md:w-16 bg-transparent border-r border-blue-500/20 shadow-[4px_0_20px_rgba(59,130,246,0.1)] z-10 flex items-center justify-center overflow-hidden">
  <div className="w-auto h-auto rotate-90 flex animate-infinite-scroll-down">
    <RibbonText />
    <RibbonText />
    <RibbonText />
  </div>
</div>

{/* Right Ribbon - Moving Up with Glow Border */}
<div className="absolute right-0 top-0 h-full w-10 md:w-16 bg-transparent border-l border-blue-500/20 shadow-[-4px_0_20px_rgba(59,130,246,0.1)] z-10 flex items-center justify-center overflow-hidden">
  <div className="w-auto h-auto rotate-90 flex animate-infinite-scroll-up">
    <RibbonText />
    <RibbonText />
    <RibbonText />
  </div>
</div>

      {/* --- MAIN CONTENT --- */}
      <main className="z-20 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full px-12 md:px-24">
        
        <div className="mb-8 cursor-default scale-90 md:scale-100">
           <InteractiveLogo />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-4 leading-[1.1] md:leading-tight drop-shadow-lg">
          Unify Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Digital Universe.
          </span>
        </h1>
        
        <p className="text-gray-300 text-base md:text-xl lg:text-2xl mb-10 max-w-xl font-medium drop-shadow-md leading-relaxed px-4">
          One hub. Infinite connections. <br className="hidden md:block" />
          The insanely fast platform for your global network.
        </p>

        <div className="w-full max-w-md px-4">
          {submitted ? (
            <div className="bg-blue-600/10 border border-blue-500/30 text-white px-8 py-5 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in-95 shadow-2xl justify-center">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-lg">You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full relative group flex items-center">
              <Mail className="absolute left-5 text-gray-500 w-5 h-5 group-focus-within:text-white transition-colors z-10" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join the waitlist..." 
                required
                className="w-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 hover:border-white/30 rounded-full py-5 pl-14 pr-36 text-white text-base focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-600 shadow-2xl"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-white text-black hover:bg-gray-200 font-bold px-6 rounded-full transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
              >
                Access <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </main>

      <footer className="z-20 w-full pb-8 pt-2 shrink-0 text-gray-500 text-[10px] md:text-xs font-semibold flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2 uppercase tracking-widest opacity-40">
        <span>© {new Date().getFullYear()} zQuab</span>
        <span className="hidden md:inline">•</span>
        <span>Preparing for liftoff</span>
      </footer>
    </div>
  );
}

export default App;