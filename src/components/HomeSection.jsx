import React from 'react';
import { Swords, ShieldAlert, Coins, Sparkles, Terminal, ArrowRight, Zap, Trophy, ShieldCheck, Flame } from 'lucide-react';

export default function HomeSection({ setActiveTab, setSelectedTree }) {
  const cards = [
    {
      id: 'skills',
      title: 'Yetenek Ağacı (Worlds V2)',
      subtitle: '4 Ana Ağaç • 30+ Yetenek',
      desc: 'Oyun içi interaktif harita görünümüyle Gathercraft, Survivalcraft, Combat ve Vehicles dallarını inceleyin. God-Tier ve S-Tier yetenek sinerjilerini keşfedin.',
      icon: Swords,
      color: 'from-terracotta to-redwood',
      btnText: 'Ağacı Keşfet',
      badge: 'İnteraktif Ağaç',
      action: () => {
        setActiveTab('skills');
        setSelectedTree('Gathercraft');
      }
    },
    {
      id: 'bosses',
      title: 'Bosslar & Dünya Etkinlikleri',
      subtitle: 'Harbinger • Deep Sea • Nightmare Raids',
      desc: 'Harbinger (Boss Drone) arena taktikleri, Outpost portalı, mağara siperi stratejisi ve Deep Sea Cobalt kargo operasyonunun tüm sırları.',
      icon: ShieldAlert,
      color: 'from-redwood to-sow-card',
      btnText: 'Boss Taktiklerini Oku',
      badge: 'Taktik Rehberi',
      action: () => setActiveTab('bosses')
    },
    {
      id: 'farming',
      title: 'Hızlı RP (Para) Kasma Metası',
      subtitle: 'Kumaş • Eldiven • Sanal Ocak',
      desc: 'Milyonlarca RP kazanmanın 3 büyük yolu: God-Seed (GGGYYY) kenevir çiftliği, Taktik Eldiven eritme döngüsü ve sonsuz sanal ocak otomasyonu.',
      icon: Coins,
      color: 'from-foliage to-sow-card',
      btnText: 'RP Metasını Gör',
      badge: 'En Popüler',
      action: () => setActiveTab('farming')
    },
    {
      id: 'legendary',
      title: 'Efsanevi Eşyalar & Tamir',
      subtitle: '13 Silah • Efsanevi Aletler • Zırhlar',
      desc: 'Mad’s Extra Magical aletlerle %100 kalıcı tamir mekaniği, Dragon Thorn vampirik zırhı ve 13 efsanevi altın silahın tam özellikleri.',
      icon: Sparkles,
      color: 'from-rainfall-dark to-sow-card',
      btnText: 'Kataloğu İncele',
      badge: 'Tam Liste',
      action: () => setActiveTab('legendary')
    },
    {
      id: 'commands',
      title: 'Önemli Sunucu Komutları',
      subtitle: 'Tek Tıkla Kopyala • Hızlı Erişim',
      desc: '/st, /setgenes, /ps, /pc cloth, /buyraid, /tower1 ve daha fazlası. Tıklayarak doğrudan panonuza kopyalayabilirsiniz.',
      icon: Terminal,
      color: 'from-sow-card to-sow',
      btnText: 'Komutları Görüntüle',
      badge: 'Pratik Kısayollar',
      action: () => setActiveTab('commands')
    }
  ];

  return (
    <div className="space-y-10 pb-6">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sow-card via-sow to-redwood-dark/40 border border-sow-border p-6 sm:p-10 shadow-warm">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-terracotta/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 rounded-full bg-sprout/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sow-dark/80 border border-terracotta/30 text-xs font-semibold text-terracotta-light mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sprout" />
            <span>CAKJRR Özel Topluluk Platformu</span>
            <span className="w-1 h-1 rounded-full bg-mist" />
            <span className="text-sprout font-bold">Worlds V2 Canlı</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-seedling mb-4 leading-tight">
            Brit Rust Dünyasında Zirveye Çıkmanın <span className="text-terracotta italic font-normal">Tek Kılavuzu</span>
          </h1>

          <p className="text-sm sm:text-base text-seedling-muted leading-relaxed mb-6">
            Bu rehber; <strong className="text-seedling font-bold">CAKJRR</strong> ve ekibi için Brits PvE Worlds V2 sunucusundaki tüm gizli mekanikleri, 
            yetenek kombinasyonlarını, efsanevi ganimetleri ve para kasma yöntemlerini derlemek amacıyla hazırlandı. 
            Aşağıdaki başlıklardan dilediğinizi seçerek keşfe başlayabilirsiniz.
          </p>

          {/* Quick Stats Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-sow-dark/80 rounded-2xl p-3 border border-sow-border text-center">
              <span className="text-lg sm:text-xl font-serif font-bold text-sprout block">4 Ağaç</span>
              <span className="text-[11px] text-mist font-medium">Küresel Yetenek</span>
            </div>
            <div className="bg-sow-dark/80 rounded-2xl p-3 border border-sow-border text-center">
              <span className="text-lg sm:text-xl font-serif font-bold text-terracotta-light block">13 Silah</span>
              <span className="text-[11px] text-mist font-medium">Efsanevi Cephane</span>
            </div>
            <div className="bg-sow-dark/80 rounded-2xl p-3 border border-sow-border text-center">
              <span className="text-lg sm:text-xl font-serif font-bold text-seedling block">1M+ RP</span>
              <span className="text-[11px] text-mist font-medium">Kumaş &amp; Maden Metası</span>
            </div>
            <div className="bg-sow-dark/80 rounded-2xl p-3 border border-sow-border text-center">
              <span className="text-lg sm:text-xl font-serif font-bold text-rainfall-light block">%100 Can</span>
              <span className="text-[11px] text-mist font-medium">Extra Magical Tamir</span>
            </div>
          </div>

        </div>
      </div>

      {/* Featured Meta Tip of the Day */}
      <div className="rounded-2xl bg-sow-card border border-terracotta/40 p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-xl bg-terracotta/20 border border-terracotta/40 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-terracotta" />
        </div>
        <div className="text-xs sm:text-sm">
          <span className="font-serif font-bold text-seedling block mb-0.5">
            Günün Meta Tavsiyesi: Harbinger &amp; LR-300 Sinerjisi
          </span>
          <p className="text-seedling-muted leading-relaxed">
            Outpost'taki piyano portalından Harbinger Boss Drone arenasına girmeden önce Combat dalından <strong className="text-seedling">Hot Blooded</strong> (%25 Ateş Direnci) açmayı unutmayın. 
            İçerideki derin mağarada siper alıp sıfır seken LR-300 ile kafasına lazer gibi kilitlenerek boss'u güvenle eritebilirsiniz!
          </p>
        </div>
      </div>

      {/* Navigation Portal Cards */}
      <div>
        <div className="mb-4 px-1">
          <h2 className="font-serif text-2xl font-bold text-seedling">
            Rehber Bölümleri &amp; Ansiklopedi
          </h2>
          <p className="text-xs text-mist">İncelemek istediğiniz konuya tıklayarak detaylı rehber sayfasına geçiş yapın.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.id}
                onClick={c.action}
                className="group cursor-pointer rounded-3xl bg-sow-card border border-sow-border p-6 hover:border-terracotta/60 hover:-translate-y-1 transition-all duration-200 shadow-warm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-terracotta to-redwood border border-terracotta-light/30 flex items-center justify-center shadow-terracotta group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-seedling" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-sow-dark text-sprout border border-sow-border">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-seedling group-hover:text-terracotta-light transition-colors mb-1">
                    {c.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-mist uppercase tracking-wider block mb-3">
                    {c.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-5">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs font-semibold text-terracotta-light group-hover:text-sprout transition-colors">
                  <span>{c.btnText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
