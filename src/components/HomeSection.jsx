import React from 'react';
import { Swords, ShieldAlert, Coins, Sparkles, Terminal, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function HomeSection({ setActiveTab, setSelectedTree }) {
  const sections = [
    {
      id: 'skills',
      title: 'Yetenek Ağacı & İlerleme',
      subtitle: 'Worlds V2 • 4 Ana Dal • 40+ Yetenek',
      desc: 'Gathercraft, Survivalcraft, Combat ve Vehicles dallarının tam yapısı, yetenek maliyetleri ve sinerjileri.',
      icon: Swords,
      btnText: 'Ağacı İncele',
      badge: 'Sistem Rehberi',
      action: () => {
        setActiveTab('skills');
        setSelectedTree('Gathercraft');
      }
    },
    {
      id: 'early',
      title: 'Erken Oyun (Early Game)',
      subtitle: 'Wipe Başlangıcı • Hızlı Teknoloji',
      desc: 'Wipe\'ın ilk saatlerinde hurda (Scrap) optimizasyonu, Taktik Eldiven geri dönüşümü ve temel yetenek rotası.',
      icon: Layers,
      btnText: 'Başlangıç Rehberi',
      badge: 'Başlangıç',
      action: () => setActiveTab('early')
    },
    {
      id: 'mid',
      title: 'Orta Oyun (Mid Game)',
      subtitle: 'Tarım • Sanal Ocaklar • Bradley',
      desc: 'Kenevir ve kumaş otomasyonu, /setgenes genetik sistemi, Sanal Ocak dizel döngüsü ve Bradley APC taktikleri.',
      icon: Coins,
      btnText: 'Gelişim Rehberi',
      badge: 'Orta Aşama',
      action: () => setActiveTab('mid')
    },
    {
      id: 'endgame',
      title: 'Oyun Sonu (Endgame & Raids)',
      subtitle: 'Harbinger • Deep Sea • Nightmare',
      desc: 'Harbinger Boss Drone mekanikleri, Deep Sea Cobalt kargo operasyonları ve Nightmare seviye üs raidleri.',
      icon: ShieldAlert,
      btnText: 'İleri Seviye Rehber',
      badge: 'Endgame',
      action: () => setActiveTab('endgame')
    },
    {
      id: 'legendary',
      title: 'Efsanevi Eşya Kataloğu',
      subtitle: '13 Silah • Aletler • Zırh Setleri',
      desc: 'Sunucudaki tüm özel yapım efsanevi silahlar, Mad’s Extra Magical kalıcı tamir aletleri ve Dragon Thorn seti.',
      icon: Sparkles,
      btnText: 'Kataloğu Görüntüle',
      badge: 'Veritabanı',
      action: () => setActiveTab('legendary')
    },
    {
      id: 'commands',
      title: 'Sunucu Komut Referansı',
      subtitle: 'Kısayollar • /st • /setgenes • /ps',
      desc: 'Oyun içi menülere, pazarlara ve ışınlanma noktalarına hızlı erişim sağlayan komut listesi.',
      icon: Terminal,
      btnText: 'Komut Listesi',
      badge: 'Referans',
      action: () => setActiveTab('commands')
    }
  ];

  return (
    <div className="space-y-10 pb-6">
      
      {/* Corporate / Official Style Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sow-card via-sow to-sow-card border border-sow-border p-6 sm:p-10 shadow-warm">
        
        {/* Subtle Ambient Accent */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-12 w-80 h-80 rounded-full bg-sprout/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sow-dark border border-sow-border text-xs font-semibold text-mist mb-5">
            <span className="w-2 h-2 rounded-full bg-sprout animate-pulse" />
            <span className="text-seedling">Brits PvE Worlds</span>
            <span className="text-sow-border">•</span>
            <span className="text-sprout font-mono font-bold">Worlds V2 Veritabanı</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-seedling mb-4 leading-tight">
            Türkçe Topluluk Rehberi &amp; <span className="text-terracotta italic font-normal">Sistem Ansiklopedisi</span>
          </h1>

          <p className="text-sm sm:text-base text-seedling-muted leading-relaxed mb-8">
            Brits PvE Worlds V2 sunucusundaki birleşik yetenek ağacı mimarisi, dünya bossları, 
            otomasyon sistemleri ve efsanevi ganimet havuzlarına dair kapsamlı dokümantasyon platformu.
          </p>

          {/* Core System Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-1">
            <div className="bg-sow-dark/90 rounded-2xl p-4 border border-sow-border">
              <span className="text-xs font-mono font-semibold text-mist block mb-1">Yetenek Sistemi</span>
              <span className="text-lg font-serif font-bold text-seedling">4 Küresel Dal</span>
            </div>
            <div className="bg-sow-dark/90 rounded-2xl p-4 border border-sow-border">
              <span className="text-xs font-mono font-semibold text-mist block mb-1">Efsanevi Cephane</span>
              <span className="text-lg font-serif font-bold text-terracotta-light">13 Özel Silah</span>
            </div>
            <div className="bg-sow-dark/90 rounded-2xl p-4 border border-sow-border">
              <span className="text-xs font-mono font-semibold text-mist block mb-1">Ekonomi Metası</span>
              <span className="text-lg font-serif font-bold text-sprout">Kumaş &amp; Sanal Ocak</span>
            </div>
            <div className="bg-sow-dark/90 rounded-2xl p-4 border border-sow-border">
              <span className="text-xs font-mono font-semibold text-mist block mb-1">Tamir Standardı</span>
              <span className="text-lg font-serif font-bold text-rainfall-light">%100 Maks Can</span>
            </div>
          </div>

        </div>
      </div>

      {/* System Note Banner (Kurumsal Bilgi Notu) */}
      <div className="rounded-2xl bg-sow-card border border-sow-border p-5 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-sow-dark border border-sow-border flex items-center justify-center shrink-0 mt-0.5">
          <BookOpen className="w-5 h-5 text-terracotta-light" />
        </div>
        <div className="text-xs sm:text-sm space-y-1">
          <span className="font-serif font-bold text-seedling block">
            Sistem Notu: Worlds V2 Birleşik İlerleme Modeli
          </span>
          <p className="text-seedling-muted leading-relaxed">
            Worlds V2 ile birlikte yetenek puanları, karakter seviyesi ve deneyim puanı (XP) tüm dünyalar (Hub, Raid World, Event sunucuları) arasında ortak bir havuza bağlanmıştır. 
            Yetenek sıfırlama (respec) işlemi para yerine aktif oyun süresine (playtime) dayalı bekleme süreleriyle çalışmaktadır.
          </p>
        </div>
      </div>

      {/* Guide Cards Grid */}
      <div>
        <div className="mb-5 px-1">
          <h2 className="font-serif text-2xl font-bold text-seedling">
            Dokümantasyon &amp; Kılavuzlar
          </h2>
          <p className="text-xs text-mist">İncelemek istediğiniz konuya ait detay sayfasına doğrudan geçiş yapabilirsiniz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((sec) => {
            const Icon = sec.icon;

            return (
              <div
                key={sec.id}
                onClick={sec.action}
                className="group cursor-pointer rounded-2xl bg-sow-card border border-sow-border p-6 hover:border-terracotta/50 hover:-translate-y-1 transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sow-dark border border-sow-border flex items-center justify-center group-hover:border-terracotta/40 transition-colors">
                      <Icon className="w-5 h-5 text-terracotta-light group-hover:text-sprout transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-sow-dark text-mist border border-sow-border">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-seedling group-hover:text-terracotta-light transition-colors mb-1">
                    {sec.title}
                  </h3>
                  <span className="text-[11px] font-mono text-mist block mb-3">
                    {sec.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs font-semibold text-mist group-hover:text-seedling transition-colors">
                  <span>{sec.btnText}</span>
                  <ArrowRight className="w-4 h-4 text-terracotta transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
