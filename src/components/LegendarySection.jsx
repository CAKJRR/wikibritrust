import React, { useState } from 'react';
import { DURABILITY_GUIDE, LEGENDARY_TOOLS, LEGENDARY_SETS, LEGENDARY_WEAPONS } from '../data/legendary';
import { Sparkles, ShieldCheck, Crosshair, Wrench, Pickaxe, Shield, Swords } from 'lucide-react';

export default function LegendarySection() {
  const [subTab, setSubTab] = useState('weapons');

  const tabs = [
    { id: 'weapons', label: 'Efsanevi Silahlar (13)', icon: Swords },
    { id: 'tools', label: 'Efsanevi Aletler (Tools)', icon: Pickaxe },
    { id: 'sets', label: 'Efsanevi Zırh Setleri', icon: Shield },
    { id: 'durability', label: 'Tamir & Dayanıklılık', icon: Wrench },
  ];

  return (
    <div className="space-y-8">
      
      {/* Sub Tabs Selector */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-sow-card/90 rounded-2xl border border-sow-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = subTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-terracotta text-seedling shadow-terracotta'
                  : 'text-mist hover:text-seedling hover:bg-sow'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-sprout' : 'text-mist'}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- SUBTAB 1: EFSANEVİ SİLAHLAR --- */}
      {subTab === 'weapons' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Silahlar Kataloğu (13 Silah)
            </h3>
            <p className="text-xs text-mist">
              Brits PvE Worlds V2 sunucusundaki tüm özel mühimmatlı ve süper perkli efsanevi silahlar.
            </p>
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
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sow-dark border border-sow-border text-terracotta-light whitespace-nowrap">
                      {wpn.role}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-seedling-muted mb-4 font-medium leading-relaxed">
                    {wpn.effect}
                  </p>
                </div>

                <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs">
                  <span className="text-mist">Cephane:</span>
                  <span className="font-mono text-sprout font-semibold">{wpn.ammo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SUBTAB 2: EFSANEVİ ALETLER (TOOLS) --- */}
      {subTab === 'tools' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Aletler (Legendary Tools)
            </h3>
            <p className="text-xs text-mist">
              Tarım, madencilik, avcılık ve sonsuz tamir için sunucunun en kritik araçları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LEGENDARY_TOOLS.map((tool) => {
              const isExtra = tool.id === 'mads-extra-magical';

              return (
                <div
                  key={tool.id}
                  className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                    isExtra
                      ? 'bg-gradient-to-br from-sow-card via-sow to-redwood-dark/40 border-sprout shadow-sprout/20'
                      : 'bg-sow-card border-sow-border hover:border-terracotta/40'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[11px] font-bold text-mist uppercase tracking-wider block mb-1">
                          {tool.category}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-seedling">
                          {tool.name}
                        </h4>
                      </div>

                      {isExtra && (
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-sprout text-sow-dark px-2.5 py-1 rounded-full">
                          Kalıcı %100 Can
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-4">
                      {tool.effect}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-sow-border/60 text-xs">
                    <div className="flex items-start gap-1.5 text-mist">
                      <span className="font-bold text-seedling">Nasıl Bulunur:</span>
                      <span>{tool.dropSource}</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-terracotta-light font-medium bg-sow-dark/70 px-3 py-1.5 rounded-xl border border-sow-border">
                      <Sparkles className="w-3.5 h-3.5 text-sprout shrink-0 mt-0.5" />
                      <span>{tool.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- SUBTAB 3: EFSANEVİ ZIRH SETLERİ (SETS) --- */}
      {subTab === 'sets' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Zırh Setleri &amp; Donanımlar
            </h3>
            <p className="text-xs text-mist">
              Vampirik iyileşme, ağır hasar azaltma ve anında ölümden dönme donanımları.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LEGENDARY_SETS.map((set) => {
              const isDragon = set.id === 'dragon-thorn';
              const isHelping = set.id === 'helping-hands';

              return (
                <div
                  key={set.id}
                  className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                    isDragon || isHelping
                      ? 'bg-gradient-to-br from-sow-card via-sow to-redwood-dark/30 border-terracotta shadow-warm'
                      : 'bg-sow-card border-sow-border'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[11px] font-bold text-mist uppercase tracking-wider block mb-1">
                          {set.category}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-seedling">
                          {set.name}
                        </h4>
                      </div>

                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sow-dark border border-sow-border text-sprout">
                        {set.id === 'helping-hands' ? 'Ölümsüzlük' : 'Efsanevi Set'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-4">
                      {set.desc}
                    </p>

                    {/* Set Bonus Box */}
                    <div className="bg-sow-dark rounded-xl p-3.5 border border-sow-border mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-mist block mb-1">
                        Set Özelliği &amp; Bonus
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-sprout">
                        {set.setBonus}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-sow-border/60 text-xs text-mist space-y-1">
                    <p><strong className="text-seedling">Parçalar:</strong> {set.parts}</p>
                    <p><strong className="text-seedling">Düşme Kaynağı:</strong> {set.dropSource}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- SUBTAB 4: TAMİR & DAYANIKLILIK --- */}
      {subTab === 'durability' && (
        <div className="rounded-3xl bg-sow-card border border-terracotta/40 p-6 sm:p-8 shadow-warm space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-6 h-6 text-terracotta" />
              <h3 className="font-serif text-2xl font-bold text-seedling">
                {DURABILITY_GUIDE.title}
              </h3>
            </div>
            <p className="text-sm text-seedling-muted leading-relaxed">
              {DURABILITY_GUIDE.explanation}
            </p>
          </div>

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
                      <h4 className="font-serif text-base font-bold text-seedling">
                        {item.title}
                      </h4>
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
      )}

    </div>
  );
}
