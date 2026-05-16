import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { topicsData } from '../data/topics';
import { CodeBlock } from '../components/common/CodeBlock';
import { Info, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

// Demos
import { StateDemo } from '../components/demos/StateDemo';
import { EffectDemo } from '../components/demos/EffectDemo';
import { ContextDemo } from '../components/demos/ContextDemo';
import { FormDemo } from '../components/demos/FormDemo';
import { ReduxDemo } from '../components/demos/ReduxDemo';
import { RouterDemo } from '../components/demos/RouterDemo';

const DEMOS: Record<string, React.ReactNode> = {
  'state-demo': <StateDemo />,
  'effect-demo': <EffectDemo />,
  'context-demo': <ContextDemo />,
  'form-demo': <FormDemo />,
  'redux-demo': <ReduxDemo />,
  'router-demo': <RouterDemo />
};

export function TopicContent() {
  const { id } = useParams<{ id: string }>();

  const topic = useMemo(() => {
    for (const category of topicsData) {
      const found = category.topics.find(t => t.id === id);
      if (found) return { ...found, categoryTitle: category.title };
    }
    return null;
  }, [id]);

  if (!topic) {
    return <Navigate to="/topics" replace />;
  }

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto"
    >
      <div className="mb-10 dashboard-panel p-8 rounded-2xl relative overflow-hidden border-t-2 border-t-indigo-500">
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <Cpu size={120} />
        </div>
        <span className="text-indigo-400 font-semibold text-xs mb-3 block tracking-widest uppercase">
          {topic.categoryTitle}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {topic.title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
          {topic.description}
        </p>
        
        <div className="mt-8 bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 text-indigo-200 text-sm flex gap-4 relative z-10">
          <div className="w-1.5 h-full absolute left-0 top-0 bg-indigo-500 rounded-l-xl"></div>
          <div>
            <strong className="text-white block mb-1">Kavramsal Bakış:</strong>
            {topic.analogy}
          </div>
        </div>
      </div>

      {!topic.demoId && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Info size={20} className="text-teal-400" />
            Örnek Uygulama
          </h2>
          <CodeBlock code={topic.code} title={`${topic.id}.tsx`} />
          <div className="dashboard-panel rounded-xl p-5 border border-white/5 mt-4">
            <h4 className="font-semibold text-white mb-2 text-sm">Satır Satır Analiz</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{topic.codeExplanation}</p>
          </div>
        </div>
      )}

      {topic.demoId && DEMOS[topic.demoId] && (
        <div className="mt-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-white/10 flex-1"></div>
            <h2 className="text-sm font-bold text-slate-500 tracking-widest uppercase">İnteraktif Laboratuvar</h2>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>
          {DEMOS[topic.demoId]}
        </div>
      )}
    </motion.div>
  );
}