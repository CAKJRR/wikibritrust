import React from 'react';
import { 
  Compass, 
  Swords, 
  BookOpen, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  Terminal, 
  Gamepad2, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Info
} from 'lucide-react';

export default function HomeSection({ setActiveTab, setSelectedTree }) {
  const navigateTo = (tab, tree = null) => {
    setActiveTab(tab);
    if (tree && setSelectedTree) {
      setSelectedTree(tree);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      title: '1. Başlangıç & Sunucuya Bağlantı',
      desc: 'Sunucuya ilk kez katılan oyuncular için temel bağlantı, ilk gece ve ekonomi adımları.',
      links: [
        { label: 'Nasıl Oynanır (Sunucuya Bağlanma)', desc: 'Sunucu listesinden bulma ve EU/US/AU konsol IP adresleri', action: () => navigateTo('play') },
        { label: 'Başlangıç Rehberi', desc: 'HUB düzeni, dünya seçimi, başlangıç görevleri ve ilk üs', action: () => navigateTo('early') },
        { label: 'En İyi RP (Para) Kazanma Metotları', desc: 'Taktik Eldiven geri dönüşümü ve kenevir çiftliği kurulumu', action: () => navigateTo('early') },
        { label: 'Erken Yetenek Rotası', desc: 'Varil kırma, 4x hurda ve ilk madencilik yetenekleri', action: () => navigateTo('early') },
      ]
    },
    {
      title: '2. Karakter Gelişimi & Sistemler',
      desc: 'Worlds V2 küresel yetenek mimarisi, genetik tarım, mutfak ve pasif maden ocakları.',
      links: [
        { label: 'İnteraktif Yetenek Haritası', desc: 'Gathercraft, Survivalcraft, Combat ve Vehicles dalları', action: () => navigateTo('skills', 'Gathercraft') },
        { label: '/setgenes Genetik Rehberi', desc: 'God-Seed (GGGYYY) dizilimi ve sınırsız klon çoğaltma', action: () => navigateTo('mid') },
        { label: 'Yemek ve Mutfak Sistemi', desc: 'Özel yemek buffları, iBag malzeme çantası ve Çiftçi Pazarı', action: () => navigateTo('mid') },
        { label: 'Sanal Taş Ocakları (Virtual Quarries)', desc: '/qr ile AFK/çevrimdışı maden ve petrol çıkarma döngüsü', action: () => navigateTo('mid') },
      ]
    },
    {
      title: '3. Askeri Operasyonlar & Dünya Etkinlikleri',
      desc: 'Tank avı, helikopter kuleleri, raid dünyaları ve özel boss karşılaşmaları.',
      links: [
        { label: 'Bradley APC Avı', desc: 'Raid Dünyası Bradley adaları, mağaza çağrısı ve roketleme taktiği', action: () => navigateTo('endgame') },
        { label: 'Patrol Helikopteri Düşürme', desc: '/tower1 - /tower6 nişancı kuleleri ve rotor hedefleme', action: () => navigateTo('endgame') },
        { label: 'Raid Dünyaları & Hazır Üsler', desc: '/buyraid ile Easy, Medium, Hard ve Nightmare üs yıkımı', action: () => navigateTo('endgame') },
        { label: 'Deep Sea Cobalt Kargo Gemisi', desc: 'Okyanus kargo devriyesi, gemi taretleri ve elit bilim insanları', action: () => navigateTo('endgame') },
        { label: 'Harbinger Boss Drone Arenası', desc: '/outpost portalı, mağara siperi taktiği ve boss ganimetleri', action: () => navigateTo('endgame') },
      ]
    },
    {
      title: '4. Ekipman, Efsaneviler & Referans',
      desc: 'Özel yapım altın silahlar, zırh eklentileri, kalıcı tamir ve sunucu kısayolları.',
      links: [
        { label: '13 Efsanevi Silah Kataloğu', desc: 'Brits Golden AK, The Laginator, Huff-N-Puff ve cephane türleri', action: () => navigateTo('legendary') },
        { label: 'Mad’s Extra Magical (%100 Tamir)', desc: 'Kırmızı barı silerek eşyaya orijinal %100 dayanıklılık veren aletler', action: () => navigateTo('legendary') },
        { label: 'Zırh Eklentileri (Armor Inserts)', desc: 'Wooden, Asbestos, Lead ve Metal serisi (+, ++, +++) eklentiler', action: () => navigateTo('endgame') },
        { label: 'Önemli Sunucu Komutları', desc: '/st, /setgenes, /ps, /pc cloth, /buyraid tek tıkla kopyalama', action: () => navigateTo('commands') },
      ]
    }
  ];

  return (
    <div className="space-y-8 pb-10">
      
      {/* 1. Başlık & Ansiklopedi Girişi */}
      <div className="bg-sow-card/95 border border-sow-border rounded-3xl p-6 sm:p-8 shadow-warm">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-sprout animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-sprout uppercase">
            Brits PvE Worlds V2
          </span>
          <span className="text-mist/60 text-xs">•</span>
          <span className="text-xs text-mist font-medium">
            Türkçe Topluluk Ansiklopedisi
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-seedling mb-3">
          Brits PvE Worlds Ansiklopedisi
        </h1>

        <p className="text-sm sm:text-base text-seedling-muted leading-relaxed max-w-4xl">
          Brits PvE Worlds sunucusuna ait birleşik yetenek mimarisi, askeri hedefler (Bradley &amp; Patrol Heli), 
          tarım ve maden otomasyonu, efsanevi cephanelik ve sunucu komutlarına dair kapsamlı bağımsız dokümantasyon kaynağıdır.
        </p>

        <div className="mt-5 pt-4 border-t border-sow-border/60 flex flex-wrap items-center gap-3 text-xs">
          <button
            onClick={() => navigateTo('play')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sow-dark border border-sprout/40 text-sprout hover:bg-sprout/10 font-medium transition-all"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Sunucuya Nasıl Bağlanılır?</span>
          </button>
          <button
            onClick={() => navigateTo('skills', 'Gathercraft')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sow-dark border border-sow-border hover:border-mist text-seedling font-medium transition-all"
          >
            <Swords className="w-3.5 h-3.5 text-terracotta-light" />
            <span>Yetenek Ağacını Aç</span>
          </button>
          <button
            onClick={() => navigateTo('commands')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sow-dark border border-sow-border hover:border-mist text-seedling font-medium transition-all"
          >
            <Terminal className="w-3.5 h-3.5 text-rainfall-light" />
            <span>Komut Listesi</span>
          </button>
        </div>
      </div>

      {/* 2. Sunucu Genel Özellikleri Tablosu (Wiki Infobox / Specs) */}
      <div className="bg-sow-card border border-sow-border rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-sow-border text-xs font-mono font-bold uppercase tracking-wider text-mist">
          <Server className="w-4 h-4 text-sprout" />
          <span>Sunucu Mimarisi &amp; Temel Veriler</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">Sunucu Türü</span>
            <span className="text-seedling font-semibold text-sm">Rust PvE MMORPG</span>
            <p className="text-seedling-muted text-[11px] mt-1">Özel yetenekler, görevler ve oyuncu ekonomisi.</p>
          </div>

          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">Bölgeler &amp; Bağlantı</span>
            <span className="text-seedling font-semibold text-sm">EU • US • AU</span>
            <p className="text-seedling-muted text-[11px] mt-1">Port 28015 üzerinden doğrudan konsol bağlantısı.</p>
          </div>

          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">İlerleme &amp; Seviye</span>
            <span className="text-seedling font-semibold text-sm">Seviye 100 &amp; Pr10 Prestige</span>
            <p className="text-seedling-muted text-[11px] mt-1">Seviye atladıkça yetenek puanı (SP) kazanılır.</p>
          </div>

          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">Yetenek Ağacı Mimarisi</span>
            <span className="text-seedling font-semibold text-sm">4 Küresel Dal (Worlds V2)</span>
            <p className="text-seedling-muted text-[11px] mt-1">Gathercraft, Survivalcraft, Combat ve Vehicles.</p>
          </div>

          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">Dünya Düzeni</span>
            <span className="text-seedling font-semibold text-sm">HUB • Worlds 1-8 • Raid Dünyaları</span>
            <p className="text-seedling-muted text-[11px] mt-1">/hub üzerinden portallarla dünyalar arası geçiş.</p>
          </div>

          <div className="bg-sow-dark/70 rounded-xl p-3.5 border border-sow-border/80">
            <span className="text-mist block text-[11px] mb-1 font-mono">Efsanevi Teçhizat Standardı</span>
            <span className="text-seedling font-semibold text-sm">13 Özel Silah &amp; %100 Tamir</span>
            <p className="text-seedling-muted text-[11px] mt-1">Mad’s Extra Magical aletlerle kırmızı bar silme.</p>
          </div>
        </div>
      </div>

      {/* 3. Ansiklopedi İçindekiler Dizini (Dokümantasyon Başlıkları) */}
      <div className="space-y-6">
        <div className="pb-2 border-b border-sow-border/80">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-seedling">
            Dokümantasyon Dizini
          </h2>
          <p className="text-xs text-mist mt-1">
            İncelemek istediğiniz konuya tıklayarak ilgili rehber veya sistem sayfasına ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-sow-card border border-sow-border rounded-2xl p-5 shadow-sm space-y-3"
            >
              <div className="pb-2 border-b border-sow-border/60">
                <h3 className="font-serif text-base sm:text-lg font-bold text-seedling">
                  {sec.title}
                </h3>
                <p className="text-xs text-mist mt-0.5 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {sec.links.map((link, lIdx) => (
                  <div
                    key={lIdx}
                    onClick={link.action}
                    className="group cursor-pointer p-2.5 rounded-xl bg-sow-dark/50 hover:bg-sow-dark border border-sow-border/50 hover:border-terracotta/40 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-seedling group-hover:text-terracotta-light transition-colors block">
                        {link.label}
                      </span>
                      <span className="text-[11px] text-seedling-muted block truncate mt-0.5">
                        {link.desc}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-mist group-hover:text-sprout group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Sistem Notu & Topluluk Beyanı */}
      <div className="rounded-2xl bg-sow-card/80 border border-sow-border p-5 text-xs text-seedling-muted leading-relaxed space-y-2">
        <div className="flex items-center gap-2 text-seedling font-semibold">
          <Info className="w-4 h-4 text-sprout shrink-0" />
          <span>Sistem Bilgisi: Worlds V2 Birleşik İlerleme Modeli</span>
        </div>
        <p>
          Brits PvE Worlds V2 güncellemesi ile yetenek ağaçları, karakter seviyesi ve deneyim puanı (XP) sunucular arasında tek bir ortak havuza bağlanmıştır. 
          Bu rehber platformu, oyun deneyimini kolaylaştırmak amacıyla Türkçe topluluk için bağımsız olarak hazırlanmıştır.
        </p>
      </div>

    </div>
  );
}
