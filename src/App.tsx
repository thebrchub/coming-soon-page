import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { InteractiveLogo } from './components/InteractiveLogo';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // You can wire this up to a simple backend or Formspree later!
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div 
      // Locked the height to EXACTLY the screen height and hid overflow to absolutely kill the scrollbar
      className="h-[100dvh] w-full flex flex-col relative overflow-hidden selection:bg-blue-500/30 px-4 font-display bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" 
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/80 z-0 pointer-events-none"></div>
      
      {/* Main content - flex-1 takes remaining space, centering perfectly without overflowing */}
      <main className="z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        
        {/* Logo - Reduced bottom margin to save vertical space */}
        <div className="mb-6 cursor-default">
           <InteractiveLogo />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-4 leading-tight drop-shadow-lg">
          Unify Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            Digital Universe.
          </span>
        </h1>
        
        {/* Subheadline - SHORTENED EXACTLY AS REQUESTED */}
        <p className="text-gray-300 text-lg md:text-2xl mb-10 max-w-xl font-medium drop-shadow-md leading-tight">
          One hub. Infinite connections. <br className="hidden md:block" />
          The insanely fast platform for your global network.
        </p>

        {/* Form / Success State */}
        {submitted ? (
          <div className="bg-[#111]/80 backdrop-blur-md border border-white/10 text-white px-8 py-6 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in-95 w-full max-w-md justify-center shadow-2xl">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-lg">You're on the VIP list!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md relative group flex items-center">
            <Mail className="absolute left-5 text-gray-400 w-5 h-5 group-focus-within:text-white transition-colors z-10" />
            
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..." 
              required
              className="w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-2xl py-4 pl-14 pr-36 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 shadow-2xl"
            />
            
            {/* Premium White Button */}
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black hover:bg-gray-200 font-bold py-2 px-5 rounded-xl transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
            >
              Get Access <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </main>

      {/* Footer - Sits safely at the absolute bottom of the viewport */}
      <footer className="z-10 w-full pb-6 pt-2 shrink-0 text-gray-400 text-sm font-medium flex justify-center items-center drop-shadow-sm">
        © {new Date().getFullYear()} zQuab. Preparing for liftoff.
      </footer>
    </div>
  );
}

export default App;