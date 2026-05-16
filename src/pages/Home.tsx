import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Layers, Workflow, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Dashboard Style Hero */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400 uppercase tracking-widest"
            >
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
              Sistem Aktif - V2.0
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Geleceğin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-teal-400 to-indigo-400 animate-gradient-x">Arayüzlerini</span> <br />
              İnşa Edin.
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Teorik ezberleri unutun. Modern frontend mimarisini, etkileşimli dashboard demoları, profesyonel state yönetimi ve production-ready TypeScript kalıplarıyla öğrenin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/topics" className="px-8 py-4 bg-white text-[#0a0a0f] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] group">
                Sisteme Giriş <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a href="#features" className="px-8 py-4 dashboard-panel text-white font-medium rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Modülleri İncele
              </a>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Typescript 5+</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Modern Hook'lar</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-500"/> Mimari Tasarım</span>
            </div>
          </div>

          {/* Floating UI Elements / Dashboard Simulation */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 dashboard-panel rounded-2xl border border-white/10 p-6 flex flex-col gap-4 transform-gpu shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">app-metrics.tsx</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                  <Cpu className="text-indigo-400 mb-2" size={24} />
                  <div className="text-xs text-slate-400 mb-1">State Updates</div>
                  <div className="text-2xl font-bold text-white">1,240<span className="text-sm text-teal-400 ml-2">/s</span></div>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-4">
                  <Workflow className="text-teal-400 mb-2" size={24} />
                  <div className="text-xs text-slate-400 mb-1">Re-renders</div>
                  <div className="text-2xl font-bold text-white">Optimized</div>
                </div>
              </div>
              
              <div className="flex-1 bg-[#0a0a0f] rounded-xl border border-white/5 p-4 overflow-hidden relative">
                <div className="absolute top-4 right-4 text-xs bg-white/10 px-2 py-1 rounded text-slate-300 font-mono">Live Feed</div>
                <pre className="text-xs font-mono text-slate-400 leading-loose">
                  <span className="text-indigo-400">const</span> [data, setData] = <span className="text-teal-400">useState</span>&lt;Metrics&gt;();<br/><br/>
                  <span className="text-indigo-400">useEffect</span>(() =&gt; {'{'}<br/>
                  {'  '}<span className="text-indigo-400">const</span> sub = api.subscribe(<span className="text-green-400">'metrics'</span>, setData);<br/>
                  {'  '}<span className="text-indigo-400">return</span> () =&gt; sub.unsubscribe();<br/>
                  {'}'}, []);<br/>
                </pre>
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-4 right-4 dashboard-panel p-3 rounded-lg flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Terminal size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white font-bold">TypeScript</div>
                    <div className="text-[10px] text-teal-400">Strict Mode: ON</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Based Features */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Modern Geliştirme Yaklaşımı</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Sadece kod yazmayı değil, büyük ölçekli uygulamaları nasıl mimarize edeceğinizi öğrenin.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="dashboard-panel p-8 rounded-2xl group hover:border-indigo-500/30 transition-colors">
            <Layers className="text-indigo-400 mb-6 w-10 h-10" />
            <h3 className="text-xl font-bold mb-3 text-white">Component Mimarisi</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Solid prensiplerine uygun, tekrar kullanılabilir ve test edilebilir bağımsız UI bileşenleri tasarlamayı öğrenin.</p>
          </div>
          <div className="dashboard-panel p-8 rounded-2xl group hover:border-teal-500/30 transition-colors">
            <Workflow className="text-teal-400 mb-6 w-10 h-10" />
            <h3 className="text-xl font-bold mb-3 text-white">State Senkronizasyonu</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Redux Toolkit ve React Query ile sunucu durumu (server state) ve istemci durumunu (client state) ayırın.</p>
          </div>
          <div className="dashboard-panel p-8 rounded-2xl group hover:border-purple-500/30 transition-colors">
            <Terminal className="text-purple-400 mb-6 w-10 h-10" />
            <h3 className="text-xl font-bold mb-3 text-white">Tip Güvenliği</h3>
            <p className="text-sm text-slate-400 leading-relaxed">TypeScript interface ve generics kullanarak runtime hatalarını henüz kod yazarken derleme aşamasında yakalayın.</p>
          </div>
        </div>
      </section>
    </div>
  );
}