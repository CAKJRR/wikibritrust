import React, { useState, useEffect } from 'react';
import { 
  DURABILITY_GUIDE, 
  LEGENDARY_TOOLS, 
  LEGENDARY_SETS, 
  LEGENDARY_WEAPONS, 
  ARMOR_INSERTS 
} from '../data/legendary';
import { 
  Sparkles, 
  ShieldCheck, 
  Crosshair, 
  Wrench, 
  Pickaxe, 
  Shield, 
  Swords, 
  Layers, 
  CheckCircle2, 
  Info,
  Flame,
  Table as TableIcon
} from 'lucide-react';

export default function LegendarySection({ searchQuery = '' }) {
  const [subTab, setSubTab] = useState('weapons');
  const [weaponViewMode, setWeaponViewMode] = useState('table'); // 'table' or 'grid'
  const query = searchQuery.trim().toLocaleLowerCase('tr');

  const tabs = [
    { id: 'weapons', label: 'Efsanevi Silahlar (13)', icon: Swords },
    { id: 'tools', label: 'Efsanevi Aletler & Tamir', icon: Pickaxe },
    { id: 'sets', label: 'Efsanevi Zırh Setleri (10)', icon: Shield },
    { id: 'inserts', label: 'Zırh Eklentileri (Inserts)', icon: Layers },
    { id: 'durability', label: 'Kırmızı Bar & Tamir', icon: Wrench },
  ];

  const filteredWeapons = query
    ? LEGENDARY_WEAPONS.filter(
        (w) =>
          w.name.toLocaleLowerCase('tr').includes(query) ||
          w.role.toLocaleLowerCase('tr').includes(query) ||
          w.effect.toLocaleLowerCase('tr').includes(query) ||
          w.ammo.toLocaleLowerCase('tr').includes(query)
      )
    : LEGENDARY_WEAPONS;

  const filteredTools = query
    ? LEGENDARY_TOOLS.filter(
        (t) =>
          t.name.toLocaleLowerCase('tr').includes(query) ||
          t.category.toLocaleLowerCase('tr').includes(query) ||
          t.effect.toLocaleLowerCase('tr').includes(query) ||
          t.highlight?.toLocaleLowerCase('tr').includes(query) ||
          t.dropSource.toLocaleLowerCase('tr').includes(query)
      )
    : LEGENDARY_TOOLS;

  const filteredSets = query
    ? LEGENDARY_SETS.filter(
        (s) =>
          s.name.toLocaleLowerCase('tr').includes(query) ||
          s.category.toLocaleLowerCase('tr').includes(query) ||
          s.role?.toLocaleLowerCase('tr').includes(query) ||
          s.desc.toLocaleLowerCase('tr').includes(query) ||
          s.setBonus.toLocaleLowerCase('tr').includes(query) ||
          s.parts.toLocaleLowerCase('tr').includes(query)
      )
    : LEGENDARY_SETS;

  const filteredInserts = query
    ? ARMOR_INSERTS.types.filter(
        (i) =>
          i.name.toLocaleLowerCase('tr').includes(query) ||
          i.purpose.toLocaleLowerCase('tr').includes(query) ||
          i.resists.toLocaleLowerCase('tr').includes(query) ||
          i.recommendedArea.toLocaleLowerCase('tr').includes(query)
      )
    : ARMOR_INSERTS.types;

  // Auto-switch subtab if query matches only another subtab
  useEffect(() => {
    if (query) {
      if (filteredWeapons.length > 0 && subTab !== 'weapons') setSubTab('weapons');
      else if (filteredWeapons.length === 0 && filteredTools.length > 0 && subTab !== 'tools') setSubTab('tools');
      else if (filteredWeapons.length === 0 && filteredTools.length === 0 && filteredSets.length > 0 && subTab !== 'sets') setSubTab('sets');
      else if (filteredWeapons.length === 0 && filteredTools.length === 0 && filteredSets.length === 0 && filteredInserts.length > 0 && subTab !== 'inserts') setSubTab('inserts');
    }
  }, [query]);

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
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* --- SUBTAB 1: EFSANEVİ SİLAHLAR (LEGENDARY WEAPONS TABLE) --- */}
      {subTab === 'weapons' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
            <div>
              <h3 className="font-serif text-2xl font-bold text-seedling">
                Legendary Weapons (13 Silah)
              </h3>
              <p className="text-xs text-mist">
                These are all custom-made weapons. (Resmi britspve.com dokümantasyon tablosu).
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="inline-flex items-center gap-1 bg-sow-dark p-1 rounded-xl border border-sow-border self-start sm:self-auto">
              <button
                onClick={() => setWeaponViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  weaponViewMode === 'table' ? 'bg-terracotta text-seedling' : 'text-mist hover:text-seedling'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Tablo Görünümü</span>
              </button>
              <button
                onClick={() => setWeaponViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  weaponViewMode === 'grid' ? 'bg-terracotta text-seedling' : 'text-mist hover:text-seedling'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Kart Görünümü</span>
              </button>
            </div>
          </div>

          {filteredWeapons.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir efsanevi silah bulunamadı.
            </div>
          ) : weaponViewMode === 'table' ? (
            /* Resmi Dokümantasyon Tablosu (media_1793591852853_3825fb80.png) */
            <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden shadow-warm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-sow-border bg-sow-dark/80 text-mist font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Name (İsim)</th>
                      <th className="py-4 px-5">Effect (Özel Etki &amp; Perk)</th>
                      <th className="py-4 px-5">Ammo (Cephane)</th>
                      <th className="py-4 px-5">Role / Tip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredWeapons.map((wpn, idx) => (
                      <tr 
                        key={idx}
                        className="hover:bg-sow/50 transition-colors"
                      >
                        <td className="py-4 px-5 font-serif font-bold text-seedling whitespace-nowrap">
                          {wpn.name}
                        </td>
                        <td className="py-4 px-5 text-seedling-muted font-medium leading-relaxed">
                          {wpn.effect}
                        </td>
                        <td className="py-4 px-5 font-mono text-sprout font-semibold whitespace-nowrap">
                          {wpn.ammo}
                        </td>
                        <td className="py-4 px-5 whitespace-nowrap">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sow-dark border border-terracotta/40 text-terracotta-light">
                            {wpn.role}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Kart Görünümü */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWeapons.map((wpn, idx) => (
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

                  <div className="pt-3 border-t border-sow-border/60 flex items-start justify-between gap-4 text-xs">
                    <span className="text-mist shrink-0">Cephane:</span>
                    <span className="font-mono text-sprout font-semibold text-right leading-relaxed">{wpn.ammo}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* --- SUBTAB 2: EFSANEVİ ALETLER & ÖZEL TAMİR EŞYALARI --- */}
      {subTab === 'tools' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Aletler &amp; Özel Tamir Eşyaları
            </h3>
            <p className="text-xs text-mist">
              Tarım, madencilik, avcılık aletleri ve sürükle-bırak ile kırmızı barı sıfırlayan tek kullanımlık Mad's Extra Magical.
            </p>
          </div>

          {filteredTools.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir efsanevi alet bulunamadı.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredTools.map((tool) => {
                const isConsumable = tool.isConsumable;

                return (
                  <div
                    key={tool.id}
                    className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                      isConsumable
                        ? 'bg-gradient-to-br from-sow-card via-sow to-terracotta/20 border-terracotta shadow-warm ring-1 ring-terracotta/40'
                        : 'bg-sow-card border-sow-border hover:border-terracotta/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${
                            isConsumable ? 'text-terracotta-light' : 'text-mist'
                          }`}>
                            {tool.category}
                          </span>
                          <h4 className="font-serif text-xl font-bold text-seedling">
                            {tool.name}
                          </h4>
                        </div>

                        {isConsumable ? (
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-terracotta text-seedling px-2.5 py-1 rounded-full shrink-0 shadow-terracotta flex items-center gap-1">
                            <Flame className="w-3 h-3 text-sprout" />
                            <span>Kırmızı Bar Sıfırlama</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold tracking-wider uppercase bg-sow-dark border border-sow-border text-mist px-2.5 py-0.5 rounded-full shrink-0">
                            Alet
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-4">
                        {tool.effect}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-sow-border/60 text-xs">
                      <div className="flex items-start gap-1.5 text-mist">
                        <span className="font-bold text-seedling shrink-0">Nasıl Bulunur:</span>
                        <span>{tool.dropSource}</span>
                      </div>
                      <div className={`flex items-start gap-1.5 px-3 py-2 rounded-xl border ${
                        isConsumable 
                          ? 'bg-terracotta/15 border-terracotta/40 text-terracotta-light font-medium'
                          : 'bg-sow-dark/70 border-sow-border text-seedling font-medium'
                      }`}>
                        <Sparkles className="w-3.5 h-3.5 text-sprout shrink-0 mt-0.5" />
                        <span>{tool.highlight}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* --- SUBTAB 3: EFSANEVİ ZIRH SETLERİ (SETS - 10 SET) --- */}
      {subTab === 'sets' && (
        <div className="space-y-6">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Zırh Setleri (Savaş &amp; Toplama)
            </h3>
            <p className="text-xs text-mist">
              Vampirik iyileşme, ağır darbe emilimi, otomatik dirilme ve %100 meslek toplama setleri.
            </p>
          </div>

          {filteredSets.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir zırh seti bulunamadı.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredSets.map((set) => {
                const isCombat = set.category.includes('Savaş') || set.id === 'helping-hands';

                return (
                  <div
                    key={set.id}
                    className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                      isCombat
                        ? 'bg-gradient-to-br from-sow-card via-sow to-redwood-dark/30 border-terracotta shadow-warm'
                        : 'bg-sow-card border-sow-border hover:border-sprout/40'
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

                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${
                          isCombat 
                            ? 'bg-sow-dark border-terracotta/40 text-terracotta-light' 
                            : 'bg-sow-dark border-sprout/40 text-sprout'
                        }`}>
                          {set.role || 'Efsanevi Set'}
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
          )}
        </div>
      )}

      {/* --- SUBTAB 4: ZIRH EKLENTİLERİ (ARMOR INSERTS - EXACT OFFICIAL FORMAT) --- */}
      {subTab === 'inserts' && (
        <div className="space-y-6">
          {/* Header Box */}
          <div className="bg-sow-card border border-sow-border rounded-2xl p-6 sm:p-8 shadow-warm space-y-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-seedling mb-2">
                {ARMOR_INSERTS.title}
              </h3>
              <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                {ARMOR_INSERTS.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-sow-border/60">
              <h4 className="font-serif text-base font-bold text-seedling mb-1.5">
                How Armor Inserts Work (Nasıl Çalışır?)
              </h4>
              <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                {ARMOR_INSERTS.howItWorks}
              </p>
            </div>

            {/* Pro Tip Box */}
            <div className="p-4 rounded-xl bg-sow-dark border border-sprout/30 space-y-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-sprout flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sprout" />
                <span>Pro Tip (Uzman Tavsiyesi)</span>
              </h5>
              <ul className="text-xs text-seedling-muted space-y-1">
                {ARMOR_INSERTS.proTip.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sprout mt-1.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inserts 4 Types with Numerical Tables */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-bold text-seedling px-1">
              Armor Insert Types (Eklenti Türleri ve Koruma Değerleri)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInserts.map((insert) => (
                <div 
                  key={insert.id}
                  className="bg-sow-card border border-sow-border rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h5 className="font-serif text-lg font-bold text-seedling">
                        {insert.name}
                      </h5>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sow-dark border border-sprout/40 text-sprout">
                        {insert.tier}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-terracotta-light mb-2">
                      {insert.purpose}
                    </p>

                    <p className="text-xs text-mist mb-3">
                      <strong className="text-seedling">Protection types:</strong> {insert.resists}
                    </p>

                    {/* Numerical Tier Table */}
                    <div className="rounded-xl border border-sow-border overflow-hidden bg-sow-dark/80 my-3">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-sow-border bg-sow text-mist font-bold text-[11px]">
                            <th className="py-2.5 px-3">Tier (Kademe)</th>
                            <th className="py-2.5 px-3">Protection (Koruma Değeri)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-sow-border/60">
                          {insert.tierTable.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-sow/40">
                              <td className="py-2.5 px-3 font-mono font-semibold text-seedling whitespace-nowrap">
                                {row.tier}
                              </td>
                              <td className="py-2.5 px-3 font-mono font-bold text-sprout">
                                {row.protection}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {insert.note && (
                      <p className="text-[11px] text-terracotta-light italic mt-2">
                        {insert.note}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-sow-border/60 text-xs">
                    <span className="text-mist block text-[11px] mb-0.5">Önerilen Kullanım Alanı:</span>
                    <p className="font-semibold text-seedling">{insert.recommendedArea}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Finding Inserts & Strategic Usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-sow-card border border-sow-border rounded-2xl p-6 shadow-sm space-y-3">
              <h4 className="font-serif text-lg font-bold text-seedling flex items-center gap-2">
                <Info className="w-4 h-4 text-sprout" />
                <span>Finding Armor Inserts (Nasıl Bulunur?)</span>
              </h4>
              <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                {ARMOR_INSERTS.findingInserts}
              </p>
              <p className="text-xs text-mist">
                Sandıklar, elit monumentler ve askeri hedeflerden düşer. Üst kademeler (++ ve +++) temel kademeye göre çok daha değerlidir.
              </p>
            </div>

            <div className="bg-sow-card border border-sow-border rounded-2xl p-6 shadow-sm space-y-3">
              <h4 className="font-serif text-lg font-bold text-seedling flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sprout" />
                <span>Strategic Usage (Stratejik Eşleştirme)</span>
              </h4>
              <div className="divide-y divide-sow-border/60 text-xs">
                {ARMOR_INSERTS.usageGuide.map((guide, gIdx) => (
                  <div key={gIdx} className="py-2 flex items-center justify-between gap-2">
                    <span className="text-seedling font-medium">{guide.situation}</span>
                    <span className="font-mono font-bold text-sprout bg-sow-dark px-2.5 py-0.5 rounded border border-sow-border shrink-0">
                      {guide.insert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 5: TAMİR & KIRMIZI BAR MEKANİĞİ --- */}
      {subTab === 'durability' && (
        <div className="space-y-6">
          <div className="bg-sow-card border border-sow-border rounded-2xl p-6 sm:p-8 shadow-warm space-y-3">
            <div className="flex items-center gap-2 text-terracotta-light">
              <Wrench className="w-5 h-5 text-sprout" />
              <h3 className="font-serif text-2xl font-bold text-seedling">
                {DURABILITY_GUIDE.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
              {DURABILITY_GUIDE.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DURABILITY_GUIDE.mechanics.map((mech, idx) => {
              const isExtra = mech.title.includes('Mad’s Extra Magical');

              return (
                <div 
                  key={idx}
                  className={`border rounded-2xl p-6 shadow-sm flex flex-col justify-between ${
                    isExtra
                      ? 'bg-gradient-to-br from-sow-card via-sow to-terracotta/20 border-terracotta ring-1 ring-terracotta/40'
                      : 'bg-sow-card border-sow-border'
                  }`}
                >
                  <div>
                    <h4 className="font-serif text-lg font-bold text-seedling mb-3 flex items-center gap-2">
                      {isExtra && <Flame className="w-4 h-4 text-sprout" />}
                      <span>{mech.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                      {mech.desc}
                    </p>
                  </div>

                  {isExtra && (
                    <div className="mt-4 pt-3 border-t border-terracotta/30 text-xs font-semibold text-sprout flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sürükle-Bırak ile %100 Can &amp; Kırmızı Bar Sıfırlama</span>
                    </div>
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
