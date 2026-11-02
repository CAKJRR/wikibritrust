import React from 'react';
import { DURABILITY_GUIDE, LEGENDARY_WEAPONS } from '../data/legendary';
import { Sparkles, ShieldCheck, Crosshair, AlertCircle, Wrench } from 'lucide-react';

export default function LegendarySection() {
  return (
    <div className="space-y-8">
      
      {/* Durability & Repair Explanation Box */}
      <div className="rounded-3xl bg-sow-card border border-terracotta/40 p-6 sm:p-8 shadow-warm">
        <div className="flex items-center gap-3 mb-3">
          <Wrench className="w-6 h-6 text-terracotta" />
          <h2 className="font-serif text-2xl font-bold text-seedling">
            {DURABILITY_GUIDE.title}
          </h2>
        </div>
        
        <p className="text-sm text-seedling-muted leading-relaxed mb-6">
          {DURABILITY_GUIDE.explanation}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DURABILITY_GUIDE.mechanics.map((item, idx) => {
            const isExtra = item.title.includes('Extra Magical');

            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 border flex flex-col justify-between ${
                  isExtra
                    ? 'bg-gradient-to-b from-sow-card to-redwood-dark/40 border-sprout/60 shadow-sprout/10'
                    : 'bg-sow-dark/80 border-sow-border'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {isExtra ? (
                      <Sparkles className="w-4 h-4 text-sprout" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 text-terracotta" />
                    )}
                    <h3 className="font-serif text-base font-bold text-seedling">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {isExtra && (
                  <span className="mt-4 text-[11px] font-bold tracking-wider uppercase text-sprout bg-sprout/10 border border-sprout/30 px-2.5 py-1 rounded-lg self-start">
                    ✦ Kalıcı Can Yenileme
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legendary Weapons Table / Grid */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-seedling">
              Efsanevi Silahlar Kataloğu
            </h3>
            <p className="text-xs text-mist">Sunucudaki özel yeteneklere sahip efsanevi silahlar ve cephane türleri</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEGENDARY_WEAPONS.map((wpn, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-sow-card border border-sow-border p-5 hover:border-terracotta/40 transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg font-bold text-seedling">
                    {wpn.name}
                  </h4>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sow-dark border border-sow-border text-terracotta-light whitespace-nowrap">
                    {wpn.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-seedling-muted mb-4 font-medium leading-relaxed">
                  {wpn.effect}
                </p>
              </div>

              <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs">
                <span className="text-mist">Cephane:</span>
                <span className="font-mono text-sprout font-medium">{wpn.ammo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
