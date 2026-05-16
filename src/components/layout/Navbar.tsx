import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl tracking-tight text-foreground font-normal transition-opacity hover:opacity-80" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ReactÖğren<sup className="text-xs">®</sup>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm transition-colors ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Ana Sayfa</Link>
            <Link to="/topics" className={`text-sm transition-colors ${location.pathname.startsWith('/topics') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>Eğitimler</Link>
            <a href="/#hakkinda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hakkında</a>
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              to="/topics" 
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
            >
              Eğitime Başla
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium">Ana Sayfa</Link>
              <Link to="/topics" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium">Eğitimler</Link>
              <a href="/#hakkinda" onClick={() => setMobileMenuOpen(false)} className="text-foreground text-lg font-medium">Hakkında</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}