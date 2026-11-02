import React from 'react';
import { Sparkles, Compass, Shield, Zap } from 'lucide-react';

export default function HeroBanner({ onQuickFilter }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sow-card via-sow to-redwood-dark/40 border border-sow-border p-6 sm:p-10 shadow-warm mb-10">
      
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 rounded-full bg-sprout/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sow-dark/80 border border-terracotta/30 text-xs font-semibold text-terracotta-light">
            <Sparkles className="w-3.5 h-3.5 text-sprout" />
            <span>Brits PvE Worlds V2 • Türkçe Bilgi Bankası</span>
          </div>
          <span className="text-xs text-mist font-medium">Topluluk Ansiklopedisi</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-seedling mb-4 leading-tight">
          Vahşi Doğada Hayatta Kalmanın &amp; Gelişimin <span className="text-terracotta italic font-normal">Kapsamlı Rehberi</span>
        </h1>

        <p className="text-sm sm:text-base text-seedling-muted leading-relaxed mb-6">
          Worlds V2 güncellemesiyle birleşen küresel yetenek ağacı, Deep Sea Cobalt kargo operasyonları, 
          Harbinger (Boss Drone) arena taktikleri ve sunucu ekonomisi bu platformda toplandı.
        </p>

        {/* Quick Shortcut Tags */}
        <div className="flex flex-wrap gap-2.5 pt-1">
          <button
            onClick={() => onQuickFilter('God-Tier')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sow-dark border border-sprout/40 text-xs font-semibold text-sprout hover:bg-sprout/10 transition-all shadow-sm"
          >
            🏆 God-Tier Yetenekler
          </button>
          <button
            onClick={() => onQuickFilter('Harbinger')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sow-dark border border-terracotta/40 text-xs font-semibold text-terracotta-light hover:bg-terracotta/10 transition-all shadow-sm"
          >
            👾 Harbinger Boss Rehberi
          </button>
          <button
            onClick={() => onQuickFilter('Cloth')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sow-dark border border-mist/40 text-xs font-semibold text-seedling hover:bg-sow transition-all shadow-sm"
          >
            💰 1M+ RP Kumaş Çiftliği
          </button>
          <button
            onClick={() => onQuickFilter('Extra Magical')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sow-dark border border-rainfall/40 text-xs font-semibold text-rainfall-light hover:bg-sow transition-all shadow-sm"
          >
            🛡️ %100 Dayanıklılık (Tamir)
          </button>
        </div>
      </div>
    </div>
  );
}
