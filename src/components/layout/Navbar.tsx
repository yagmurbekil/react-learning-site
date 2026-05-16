import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TerminalSquare, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto w-full max-w-5xl rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? 'dashboard-panel py-3 px-6 shadow-2xl border-white/10' 
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 p-0.5 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
              <div className="w-full h-full bg-[#0a0a0f] rounded-md flex items-center justify-center text-white">
                <TerminalSquare size={18} />
              </div>
            </div>
            <span className="text-xl font-bold tracking-wide text-white">
              Dev<span className="text-indigo-400">Academy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
            <Link to="/" className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${location.pathname === '/' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Platform</Link>
            <Link to="/topics" className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${location.pathname.startsWith('/topics') ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Müfredat</Link>
            <Link to="/sandbox" className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${location.pathname === '/sandbox' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Laboratuvar</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/topics" className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Compass size={16} /> Keşfet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col gap-2">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-3 rounded-lg bg-white/5">Platform</Link>
                <Link to="/topics" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-3 rounded-lg bg-white/5">Müfredat</Link>
                <Link to="/sandbox" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium p-3 rounded-lg bg-white/5">Laboratuvar</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}