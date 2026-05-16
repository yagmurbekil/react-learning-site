import { useState } from 'react';
import { CodeBlock } from '../common/CodeBlock';
import { Map, Home, Info, Mail } from 'lucide-react';

const codeString = `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-900 text-white">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </nav>
      
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}`;

export function RouterDemo() {
  const [currentPath, setCurrentPath] = useState('/');

  const renderContent = () => {
    switch(currentPath) {
      case '/': return (
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-center text-indigo-300 animate-in fade-in zoom-in h-full flex flex-col justify-center items-center">
          <Home size={32} className="mb-3 text-indigo-400" />
          <h3 className="text-xl font-bold mb-2 text-white">Dashboard</h3>
          <p className="text-sm">Ana yönlendirme (/)</p>
        </div>
      );
      case '/hakkimizda': return (
        <div className="p-6 bg-teal-500/10 rounded-xl border border-teal-500/20 text-center text-teal-300 animate-in fade-in slide-in-from-right-4 h-full flex flex-col justify-center items-center">
          <Info size={32} className="mb-3 text-teal-400" />
          <h3 className="text-xl font-bold mb-2 text-white">Sistem Bilgisi</h3>
          <p className="text-sm">/hakkimizda route</p>
        </div>
      );
      case '/iletisim': return (
        <div className="p-6 bg-rose-500/10 rounded-xl border border-rose-500/20 text-center text-rose-300 animate-in fade-in slide-in-from-bottom-4 h-full flex flex-col justify-center items-center">
          <Mail size={32} className="mb-3 text-rose-400" />
          <h3 className="text-xl font-bold mb-2 text-white">Destek Birimi</h3>
          <p className="text-sm">/iletisim route</p>
        </div>
      );
      default: return null;
    }
  };

  return (
    <div className="grid xl:grid-cols-2 gap-6 items-start">
      <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden">
        <div className="bg-[#13131a] p-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            <Map size={14} className="text-slate-400" />
            <span className="text-xs font-bold text-white">Routing Simülasyonu</span>
          </div>
          <div className="bg-black/50 rounded px-3 py-1 text-[10px] font-mono text-teal-400 border border-white/5">
            https://devacademy.app{currentPath}
          </div>
        </div>
        
        <div className="bg-[#0a0a0f] flex flex-col h-[300px]">
          <div className="flex gap-2 p-4 border-b border-white/5 bg-white/[0.02]">
            <button 
              onClick={() => setCurrentPath('/')} 
              className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${currentPath === '/' ? 'bg-white text-[#0a0a0f]' : 'bg-white/5 text-slate-400 hover:text-white'}`}
            >
              /
            </button>
            <button 
              onClick={() => setCurrentPath('/hakkimizda')} 
              className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${currentPath === '/hakkimizda' ? 'bg-white text-[#0a0a0f]' : 'bg-white/5 text-slate-400 hover:text-white'}`}
            >
              /hakkimizda
            </button>
            <button 
              onClick={() => setCurrentPath('/iletisim')} 
              className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${currentPath === '/iletisim' ? 'bg-white text-[#0a0a0f]' : 'bg-white/5 text-slate-400 hover:text-white'}`}
            >
              /iletisim
            </button>
          </div>
          <div className="flex-1 p-6">
            {renderContent()}
          </div>
        </div>
      </div>

      <div className="mt-[-24px]">
        <CodeBlock code={codeString} title="RouterSetup.tsx" />
      </div>
    </div>
  );
}