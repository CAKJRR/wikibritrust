import React from 'react';
import { FARMING_DATA } from '../data/farming';
import { Coins, TrendingUp, Sparkles } from 'lucide-react';

export default function FarmingSection() {
  return (
    <div className="space-y-8">
      
      {/* Intro Banner */}
      <div className="bg-sow-card border border-sprout/40 rounded-2xl p-5 sm:p-6 shadow-warm">
        <div className="flex items-center gap-3 mb-2">
          <Coins className="w-5 h-5 text-sprout" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-seedling">
            RP (Para) Kazanma Metotları
          </h2>
        </div>
        <p className="text-sm text-seedling-muted leading-relaxed">
          Brits PvE ekonomisinde mağazalardan (`/s`) helikopter, efsanevi anahtarlar ve nadir eşyalar satın almak için RP kazanma yöntemleri.
        </p>
      </div>

      {/* Methods Cards */}
      <div className="space-y-6">
        {FARMING_DATA.map((method) => (
          <div
            key={method.id}
            className="rounded-3xl bg-sow-card border border-sow-border p-6 sm:p-8 hover:border-terracotta/40 transition-all duration-200 shadow-warm"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-sow-border">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sow-dark border border-sow-border text-sprout">
                    {method.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-seedling">
                  {method.title}
                </h3>
              </div>

              <div className="text-xs font-semibold text-sprout bg-sow-dark px-3 py-1.5 rounded-xl border border-sow-border flex items-center gap-1.5 self-start sm:self-auto">
                <TrendingUp className="w-4 h-4 text-sprout" />
                <span>{method.efficiency}</span>
              </div>
            </div>

            <p className="text-sm text-seedling-muted py-4">
              {method.desc}
            </p>

            {/* Steps List */}
            <div className="bg-sow-dark/70 rounded-2xl p-5 border border-sow-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-mist mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-terracotta" /> Adım Adım Kurulum ve Uygulama
              </h4>
              <ol className="space-y-2.5">
                {method.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-seedling">
                    <span className="w-5 h-5 rounded-lg bg-terracotta/20 text-terracotta-light border border-terracotta/30 flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-seedling-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
