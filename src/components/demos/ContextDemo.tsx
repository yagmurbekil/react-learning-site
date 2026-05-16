import { createContext, useContext, useState } from 'react';
import { CodeBlock } from '../common/CodeBlock';
import { LayoutDashboard, Settings, User } from 'lucide-react';

const codeString = `import { createContext, useContext, useState } from 'react';

// 1. Context Oluştur
const ThemeContext = createContext('dark');

// 2. Alt Bileşenler (Props kullanmadan veriye erişir)
function Navbar() {
  const theme = useContext(ThemeContext);
  return <nav className={theme}>... Menü ...</nav>;
}

// 3. Ana Bileşen (Provider ile sarmalar)
export function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <button onClick={() => setTheme('light')}>Değiştir</button>
    </ThemeContext.Provider>
  );
}`;

type Theme = 'dark' | 'light';
const ThemeContext = createContext<{theme: Theme; toggle: () => void}>({ theme: 'dark', toggle: () => {} });

function DashboardUI() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  
  return (
    <div className={`w-full max-w-sm mx-auto rounded-xl overflow-hidden transition-all duration-500 ${
      isDark ? 'bg-[#13131a] border border-white/10' : 'bg-slate-100 border border-slate-300'
    }`}>
      <div className={`p-4 border-b flex justify-between items-center ${isDark ? 'border-white/10' : 'border-slate-300'}`}>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>User Panel</span>
      </div>
      
      <div className="p-6">
        <div className="flex gap-4 mb-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}`}>
            <User size={24} />
          </div>
          <div>
            <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Ahmet Yılmaz</div>
            <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ahmet@example.com</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className={`p-3 rounded-lg flex items-center gap-3 ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-slate-50'} transition-colors cursor-pointer`}>
            <LayoutDashboard size={18} className={isDark ? 'text-teal-400' : 'text-teal-600'} />
            <span className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Genel Bakış</span>
          </div>
          <div className={`p-3 rounded-lg flex items-center gap-3 ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-slate-50'} transition-colors cursor-pointer`}>
            <Settings size={18} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
            <span className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Ayarlar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContextDemo() {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className="grid xl:grid-cols-2 gap-6 items-start">
        <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden">
          <div className="bg-[#13131a] p-3 border-b border-white/5 flex justify-between items-center">
            <span className="text-xs font-bold text-white">Canlı Demo</span>
            <button 
              onClick={toggle}
              className="px-3 py-1 bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold rounded transition-colors"
            >
              Toggle Theme
            </button>
          </div>
          <div className="p-8 bg-[#0a0a0f] min-h-[300px] flex items-center">
            <DashboardUI />
          </div>
          <div className="p-4 bg-indigo-500/5 border-t border-indigo-500/10 text-xs text-indigo-200">
            <strong>Bilgi:</strong> "Toggle Theme" butonuna tıklandığında üst bileşendeki state değişir ve <code className="bg-black/30 px-1 rounded">ThemeContext.Provider</code> altındaki tüm bileşenler yeni temayı proplarla iletilmesine gerek kalmadan doğrudan alır.
          </div>
        </div>

        <div className="mt-[-24px]">
          <CodeBlock code={codeString} title="ThemeContext.tsx" />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}