import { useState, useEffect } from 'react';
import { CodeBlock } from '../common/CodeBlock';
import { RefreshCw, UserCircle2 } from 'lucide-react';

const codeString = `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // API isteğini simüle et
    setTimeout(() => {
      if (isMounted) {
        setUser({
          id: userId,
          name: \`Kullanıcı \${userId}\`,
          role: userId % 2 === 0 ? 'Admin' : 'Üye'
        });
        setLoading(false);
      }
    }, 1000);

    // Cleanup: Bileşen unmount olursa veya userId değişirse çalışır
    return () => {
      isMounted = false; 
    };
  }, [userId]); // Sadece userId değiştiğinde tetiklenir

  if (loading) return <Loading />;
  return <UserCard user={user} />;
}`;

export function EffectDemo() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    
    const timer = setTimeout(() => {
      if (isMounted) {
        setUser({
          id: userId,
          name: `Geliştirici ${userId}`,
          email: `dev${userId}@devacademy.com`,
          role: userId % 2 === 0 ? 'Sistem Yöneticisi' : 'Kıdemli Geliştirici',
          status: 'Online'
        });
        setLoading(false);
      }
    }, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [userId]);

  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {/* Demo Section */}
      <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col">
        <div className="bg-[#13131a] p-4 border-b border-white/5 flex justify-between items-center">
          <span className="text-sm font-bold text-white">Canlı Önizleme</span>
          <div className="flex gap-2">
            {[1, 2, 3].map(id => (
              <button
                key={id}
                onClick={() => setUserId(id)}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  userId === id 
                    ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                ID: {id}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 p-8 flex items-center justify-center bg-[#0a0a0f] min-h-[300px] relative">
          {loading ? (
            <div className="flex flex-col items-center gap-4 text-indigo-400">
              <RefreshCw className="animate-spin" size={32} />
              <p className="text-sm font-mono tracking-widest animate-pulse">API_FETCHING...</p>
            </div>
          ) : user ? (
            <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                    <UserCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{user.name}</h3>
                    <p className="text-xs text-slate-400">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 rounded border border-green-500/20">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-green-400 font-bold uppercase">{user.status}</span>
                </div>
              </div>
              
              <div className="bg-[#0a0a0f] rounded-lg p-3 border border-white/5 relative z-10">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Yetki Seviyesi</div>
                <div className="text-sm text-teal-400 font-mono">{user.role}</div>
              </div>
            </div>
          ) : null}
        </div>
        
        <div className="p-4 bg-teal-500/5 border-t border-teal-500/10 text-xs text-teal-200">
          <strong>Not:</strong> Yukarıdaki butonlara tıkladığınızda <code className="bg-black/30 px-1 rounded">userId</code> state'i değişir. Bu değişim, dependency array <code className="bg-black/30 px-1 rounded">[userId]</code> içinde olduğu için <code className="bg-black/30 px-1 rounded">useEffect</code> hook'unu tekrar tetikler.
        </div>
      </div>

      {/* Code Section */}
      <div className="h-full">
        <CodeBlock code={codeString} title="UserProfile.tsx" />
      </div>
    </div>
  );
}