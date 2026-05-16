import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { CodeBlock } from '../common/CodeBlock';
import { Database, Zap } from 'lucide-react';

const codeString = `import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// 1. Slice (State ve Reducerlar)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    addAmount: (state, action) => { state.value += action.payload }
  }
});
export const { increment, decrement, addAmount } = counterSlice.actions;

// 2. Store (Global Kasa)
const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

// 3. Bileşenlerde Kullanım
function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(increment())}>
      +1 (Mevcut: {count})
    </button>
  );
}`;

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

const { increment, decrement, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

function CounterApp() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-8 bg-[#0a0a0f] min-h-[300px] justify-center relative">
      <div className="absolute top-4 left-4 bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-1 rounded border border-indigo-500/20 font-mono flex items-center gap-1">
        <Database size={12} /> Global Store
      </div>
      
      <div className="mb-8 relative group">
        <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl group-hover:bg-teal-500/40 transition-colors"></div>
        <div className="relative p-6 bg-[#13131a] rounded-full border border-teal-500/30 w-32 h-32 flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.2)]">
          <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-teal-200 to-teal-500">{count}</span>
        </div>
      </div>
      
      <div className="flex gap-3 bg-white/5 p-2 rounded-xl border border-white/10">
        <button 
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 flex items-center justify-center bg-[#13131a] hover:bg-white/10 text-slate-300 font-medium rounded-lg transition-colors border border-white/5"
        >
          -1
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-6 py-2 flex items-center justify-center bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-lg transition-colors gap-1 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
        >
          <Zap size={16} /> +5 Ekle
        </button>
        <button 
          onClick={() => dispatch(increment())}
          className="px-4 py-2 flex items-center justify-center bg-[#13131a] hover:bg-white/10 text-slate-300 font-medium rounded-lg transition-colors border border-white/5"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export function ReduxDemo() {
  return (
    <Provider store={store}>
      <div className="grid xl:grid-cols-2 gap-6 items-start">
        <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden">
          <div className="bg-[#13131a] p-3 border-b border-white/5 flex items-center gap-2">
            <span className="text-xs font-bold text-white">Canlı State Yönetimi</span>
          </div>
          <CounterApp />
          <div className="p-4 bg-teal-500/5 border-t border-teal-500/10 text-xs text-teal-200">
            <strong>Akış:</strong> UI Event (Tıklama) &rarr; Dispatch Action &rarr; Reducer &rarr; Update Global Store &rarr; UI Re-render (useSelector)
          </div>
        </div>

        <div className="mt-[-24px]">
          <CodeBlock code={codeString} title="ReduxSetup.tsx" />
        </div>
      </div>
    </Provider>
  );
}