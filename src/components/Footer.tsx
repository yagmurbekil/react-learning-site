
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer: React.FC = () => (
  <footer className="bg-[#01030b] border-t border-white/10 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2 text-brand-blue mb-4">
            <span className="text-2xl font-bold text-white tracking-wide">ReactÖğren</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Modern web geliştirme standartlarına uygun, temiz ve anlaşılır React eğitim platformu. Tasarım öğrencileri ve yeni başlayanlar için özenle hazırlanmıştır.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#hero" className="hover:text-brand-blue transition-colors">Ana Sayfa</a></li>
            <li><a href="#components" className="hover:text-brand-blue transition-colors">Bileşenler</a></li>
            <li><a href="#props" className="hover:text-brand-blue transition-colors">Props</a></li>
            <li><a href="#state" className="hover:text-brand-blue transition-colors">State Yönetimi</a></li>
            <li><a href="#hooks" className="hover:text-brand-blue transition-colors">React Hooks</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">İletişim</h4>
          <p className="text-sm text-gray-400 mb-4">Proje hakkında sorularınız için bize ulaşın.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue transition-all">
              <GithubIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue transition-all">
              <TwitterIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-blue transition-all">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} ReactÖğren. Tüm hakları saklıdır.</p>
        <p>Grafik Tasarım Final Projesi için kodlandı </p>
      </div>
    </div>
  </footer>
);

export default Footer;
