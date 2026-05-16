import { useState } from 'react';
import { CodeBlock } from '../common/CodeBlock';
import { Play } from 'lucide-react';

const codeString = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <h2>Mevcut Değer: {count}</h2>
      
      <button onClick={() => setCount(c => c - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Sıfırla</button>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}`;

export function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid xl:grid-cols-2 gap-6 items-start">
      <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden">
        <div className="bg-[#13131a] p-3 border-b border-white/5 flex items-center gap-2">
          <Play size={14} className="text-teal-400" />
          <span className="text-xs font-bold text-white">Canlı Demo</span>
        </div>
        <div className="p-10 flex flex-col items-center justify-center bg-[#0a0a0f] min-h-[300px]">
          <div className="text-[100px] font-bold leading-none mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
            {count}
          </div>
          <div className="flex gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
            <button 
              onClick={() => setCount(c => c - 1)}
              className="w-12 h-12 flex items-center justify-center bg-[#13131a] hover:bg-white/10 text-slate-300 font-medium rounded-lg transition-colors border border-white/5"
            >
              -1
            </button>
            <button 
              onClick={() => setCount(0)}
              className="px-6 h-12 flex items-center justify-center bg-[#13131a] hover:bg-white/10 text-slate-300 font-medium rounded-lg transition-colors border border-white/5"
            >
              Sıfırla
            </button>
            <button 
              onClick={() => setCount(c => c + 1)}
              className="w-12 h-12 flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              +1
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[-24px]">
        <CodeBlock code={codeString} title="Counter.tsx" />
      </div>
    </div>
  );
}