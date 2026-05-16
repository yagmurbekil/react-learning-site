import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative w-full flex flex-col bg-background font-sans overflow-x-hidden min-h-screen">
      {/* Fixed Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay for readability when scrolling */}
      <div className="fixed inset-0 bg-background/40 z-0 pointer-events-none" />

      {/* Navigation Bar */}
      <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl w-full mx-auto">
        <Link 
          to="/" 
          className="text-3xl tracking-tight text-foreground font-normal" 
          style={{ fontFamily: 'var(--font-display)' }}
        >
          ReactÖğren<sup className="text-xs">®</sup>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm text-foreground transition-colors">Ana Sayfa</Link>
          <Link to="/topics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Eğitimler</Link>
          <a href="#hakkinda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hakkında</a>
        </div>
        <Link 
          to="/topics" 
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform hidden md:block"
        >
          Eğitime Başla
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-6 pb-20">
        <h1 
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-foreground animate-fade-rise" 
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Sıfırdan <em className="not-italic text-muted-foreground">React</em> ve <em className="not-italic text-muted-foreground">TSX Öğren.</em>
        </h1>
        
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          Modern web geliştirmenin temel taşı olan React'i, interaktif örnekler ve temiz kodlarla keşfedin. Karmaşanın ortasında, odaklanmış ve ilham verici bir öğrenme alanı inşa ediyoruz.
        </p>
        
        <Link 
          to="/topics" 
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] cursor-pointer transition-transform animate-fade-rise-delay-2 inline-flex"
        >
          Eğitime Başla
        </Link>
      </main>

      {/* About Section */}
      <section id="hakkinda" className="relative z-10 w-full bg-background/80 backdrop-blur-2xl border-t border-white/5 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl text-foreground font-normal tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Neden <em className="not-italic text-muted-foreground">ReactÖğren?</em>
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              React, modern web uygulamaları geliştirmek için oluşturulmuş güçlü ve esnek bir kütüphanedir. Ancak karmaşık dokümantasyonlar ve dağınık kaynaklar arasında kaybolmak çok kolaydır.
            </p>
            <p>
              Bu platformun amacı; React ve TypeScript tabanlı modern web geliştirme süreçlerini en yalın, estetik ve anlaşılır biçimde size sunmaktır. Sadece kod yazmayı değil, <strong>doğru ve temiz kod yazmayı</strong> interaktif demolar ve gerçek dünya örnekleriyle öğretiyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}