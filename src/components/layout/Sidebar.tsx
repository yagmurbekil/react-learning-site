import { NavLink } from 'react-router-dom';
import { topicsData } from '../../data/topics';
import { motion } from 'framer-motion';

export function Sidebar() {
  return (
    <aside className="w-72 flex-shrink-0 h-[calc(100vh-100px)] sticky top-24 overflow-y-auto pr-2 hidden lg:block custom-scrollbar">
      <div className="dashboard-panel rounded-2xl p-4 h-full overflow-y-auto">
        {topicsData.map((category) => (
          <div key={category.id} className="mb-8 last:mb-0">
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-slate-700"></span>
              {category.title}
            </h3>
            <div className="space-y-1 border-l border-slate-800 ml-3 pl-3">
              {category.topics.map((topic) => (
                <NavLink
                  key={topic.id}
                  to={`/topics/${topic.id}`}
                  className={({ isActive }) => `
                    relative flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-300
                    ${isActive 
                      ? 'bg-indigo-500/10 text-indigo-400 font-medium' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div 
                          layoutId="sidebar-indicator" 
                          className="absolute -left-[13px] w-1.5 h-1.5 rounded-full bg-indigo-500 ring-4 ring-[#13131a]" 
                        />
                      )}
                      <span>{topic.title}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}