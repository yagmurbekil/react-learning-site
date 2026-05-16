import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CodeBlock } from '../common/CodeBlock';
import { ShieldCheck, AlertCircle } from 'lucide-react';

const schema = yup.object({
  username: yup.string().required('Kullanıcı adı gereklidir').min(4, 'En az 4 karakter olmalı'),
  email: yup.string().email('Geçerli bir email giriniz').required('Email gereklidir'),
  password: yup.string().required('Şifre gereklidir').min(6, 'En az 6 karakter olmalı'),
}).required();

const codeString = `import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required().min(4),
  email: yup.string().email().required(),
}).required();

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => console.log("Başarılı", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} />
      <p>{errors.username?.message}</p>
      
      <input {...register('email')} />
      <p>{errors.email?.message}</p>
      
      <button type="submit">Kayıt Ol</button>
    </form>
  );
}`;

export function FormDemo() {
  const [successData, setSuccessData] = useState<any>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    setSuccessData(data);
    setTimeout(() => setSuccessData(null), 4000);
  };

  return (
    <div className="grid xl:grid-cols-2 gap-6 items-start">
      <div className="dashboard-panel rounded-2xl border border-white/5 overflow-hidden">
        <div className="bg-[#13131a] p-3 border-b border-white/5">
          <span className="text-xs font-bold text-white">Canlı Form Validasyonu</span>
        </div>
        <div className="p-6 bg-[#0a0a0f]">
          {successData ? (
            <div className="h-[320px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
              <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mb-2">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Sistem Kaydı Başarılı</h3>
              <pre className="text-xs text-teal-200 bg-teal-950/50 p-4 rounded-xl border border-teal-500/20 text-left w-full max-w-sm overflow-x-auto">
                {JSON.stringify(successData, null, 2)}
              </pre>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto h-[320px]">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kullanıcı Adı</label>
                <div className="relative">
                  <input 
                    {...register('username')} 
                    className={`w-full bg-[#13131a] border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${errors.username ? 'border-rose-500/50 ring-rose-500/20' : 'border-white/10 hover:border-white/20'}`}
                    placeholder="dev_user"
                  />
                  {errors.username && <AlertCircle size={16} className="absolute right-3 top-3 text-rose-500" />}
                </div>
                {errors.username && <p className="text-rose-400 text-xs mt-1.5">{errors.username.message}</p>}
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">E-posta</label>
                <div className="relative">
                  <input 
                    {...register('email')} 
                    className={`w-full bg-[#13131a] border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${errors.email ? 'border-rose-500/50 ring-rose-500/20' : 'border-white/10 hover:border-white/20'}`}
                    placeholder="user@devacademy.com"
                  />
                  {errors.email && <AlertCircle size={16} className="absolute right-3 top-3 text-rose-500" />}
                </div>
                {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">Şifre</label>
                <div className="relative">
                  <input 
                    type="password"
                    {...register('password')} 
                    className={`w-full bg-[#13131a] border rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${errors.password ? 'border-rose-500/50 ring-rose-500/20' : 'border-white/10 hover:border-white/20'}`}
                    placeholder="••••••••"
                  />
                  {errors.password && <AlertCircle size={16} className="absolute right-3 top-3 text-rose-500" />}
                </div>
                {errors.password && <p className="text-rose-400 text-xs mt-1.5">{errors.password.message}</p>}
              </div>

              <button type="submit" className="w-full py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-400 transition-colors mt-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                Güvenli Kayıt
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-[-24px]">
        <CodeBlock code={codeString} title="RegisterForm.tsx" />
      </div>
    </div>
  );
}