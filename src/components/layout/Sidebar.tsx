import { NavLink } from 'react-router-dom';
import { topicsData } from '../../data/topics';
import { motion } from 'framer-motion';

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 h-[calc(100vh-80px)] sticky top-24 overflow-y-auto pr-4 hidden lg:block custom-scrollbar">
      <div className="py-4">
        {topicsData.map((category) => (
          <div key={category.id} className="mb-8">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.topics.map((topic) => (
                <NavLink
                  key={topic.id}
                  to={`/topics/${topic.id}`}
                  className={({ isActive }) => `
                    flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                    ${isActive 
                      ? 'bg-white/10 text-foreground font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                      : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{topic.title}</span>
                      {isActive && (
                        <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
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