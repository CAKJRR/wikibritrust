import React from 'react';
import { BOSSES_DATA } from '../data/bosses';
import { ShieldAlert, MapPin, Key, Clock, Crosshair, Award, AlertTriangle } from 'lucide-react';

export default function BossesSection() {
  return (
    <div className="space-y-8">
      
      {/* Intro Note */}
      <div className="bg-sow-card border border-terracotta/40 rounded-2xl p-5 sm:p-6 shadow-warm">
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="w-5 h-5 text-terracotta" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-seedling">
            Dünya Bossları &amp; Büyük Etkinlik Taktikleri
          </h2>
        </div>
        <p className="text-sm text-seedling-muted leading-relaxed">
          Brits PvE dünyasındaki en değerli efsanevi ganimetler (Mad's Extra Magical aletler, altın silahlar ve şarjör mücevheri) bu etkinliklerin kilitli kasalarından ve enkazlarından elde edilir.
        </p>
      </div>

      {/* Boss Cards */}
      <div className="space-y-6">
        {BOSSES_DATA.map((boss) => {
          const isHarbinger = boss.id === 'harbinger';

          return (
            <div
              key={boss.id}
              className={`rounded-3xl bg-sow-card border p-6 sm:p-8 transition-all duration-200 ${
                isHarbinger
                  ? 'border-terracotta shadow-warm bg-gradient-to-b from-sow-card via-sow to-redwood-dark/30'
                  : 'border-sow-border'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-sow-border">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-terracotta/20 text-terracotta-light border border-terracotta/30">
                      {boss.category}
                    </span>
                    {isHarbinger && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sprout/20 text-sprout border border-sprout/30">
                        Top Boss Drone
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-seedling">
                    {boss.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-mist">
                  <div className="flex items-center gap-1.5 bg-sow-dark px-3 py-1.5 rounded-xl border border-sow-border">
                    <Clock className="w-3.5 h-3.5 text-rainfall-light" />
                    <span>{boss.cooldown}</span>
                  </div>
                </div>
              </div>

              {/* Info Grid: Location & Entry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 bg-sow-dark/70 rounded-2xl p-4 border border-sow-border">
                  <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-mist block mb-0.5">
                      Konum &amp; Portal
                    </span>
                    <span className="text-seedling font-medium">{boss.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-sow-dark/70 rounded-2xl p-4 border border-sow-border">
                  <Key className="w-4 h-4 text-sprout shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-mist block mb-0.5">
                      Giriş / Anahtar Şartı
                    </span>
                    <span className="text-seedling font-medium">{boss.entryRequirement}</span>
                  </div>
                </div>
              </div>

              {/* Mechanics & Strategy */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mist flex items-center gap-1.5 mb-2.5">
                    <AlertTriangle className="w-4 h-4 text-terracotta" /> Savaş Mekanikleri &amp; Dikkat Edilmesi Gerekenler
                  </h4>
                  <ul className="space-y-2">
                    {boss.mechanics.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-seedling-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0 mt-2" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Weapon */}
                <div className="bg-sow rounded-2xl p-4 border border-sow-border/80">
                  <div className="flex items-start gap-2.5">
                    <Crosshair className="w-4 h-4 text-sprout shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <span className="font-bold text-seedling block mb-0.5">Önerilen Silah &amp; Mühimmat:</span>
                      <p className="text-sprout/90 font-medium">{boss.recommendedWeapon}</p>
                    </div>
                  </div>
                </div>

                {/* Rewards */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mist flex items-center gap-1.5 mb-2.5">
                    <Award className="w-4 h-4 text-sprout" /> Düşen Ödüller &amp; Ganimetler
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {boss.rewards.map((r, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-3 py-1.5 rounded-xl bg-sow-dark border border-sow-border text-seedling"
                      >
                        ✦ {r}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
