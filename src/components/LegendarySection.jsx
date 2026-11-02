import React, { useState, useEffect } from 'react';
import { 
  LEGENDARY_TOOLS, 
  LEGENDARY_SETS, 
  LEGENDARY_WEAPONS, 
  ARMOR_INSERTS 
} from '../data/legendary';
import { 
  Swords, 
  Pickaxe, 
  Shield, 
  Layers, 
  Sparkles,
  Info,
  CheckCircle2,
  Table as TableIcon
} from 'lucide-react';

export default function LegendarySection({ searchQuery = '' }) {
  const [subTab, setSubTab] = useState('weapons');
  const query = searchQuery.trim().toLocaleLowerCase('tr');

  // Kullanıcının talimatı: "Burası Olmasın" diyerek Kırmızı Bar & Tamir butonunu kaldırdık.
  // "O Butonun Adı Da Sadece Efsanevi Aletler Olsun"
  const tabs = [
    { id: 'weapons', label: 'Efsanevi Silahlar (13)', icon: Swords },
    { id: 'tools', label: 'Efsanevi Aletler', icon: Pickaxe },
    { id: 'sets', label: 'Efsanevi Zırh Setleri (10)', icon: Shield },
    { id: 'inserts', label: 'Zırh Eklentileri (Inserts)', icon: Layers },
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

  // Arama sonucuna göre otomatik sekme geçişi
  useEffect(() => {
    if (query) {
      if (filteredWeapons.length > 0 && subTab !== 'weapons') setSubTab('weapons');
      else if (filteredWeapons.length === 0 && filteredTools.length > 0 && subTab !== 'tools') setSubTab('tools');
      else if (filteredWeapons.length === 0 && filteredTools.length === 0 && filteredSets.length > 0 && subTab !== 'sets') setSubTab('sets');
      else if (filteredWeapons.length === 0 && filteredTools.length === 0 && filteredSets.length === 0 && filteredInserts.length > 0 && subTab !== 'inserts') setSubTab('inserts');
    }
  }, [query]);

  return (
    <div className="space-y-6">
      
      {/* 4 Ana Sekme Seçici (Kırmızı Bar sekmesi kaldırıldı, aletler sadece 'Efsanevi Aletler') */}
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

      {/* ==========================================================
          1. EFSANEVİ SİLAHLAR TABLOSU (KULLANICININ İSTEDİĞİ RESMİ TABLO)
         ========================================================== */}
      {subTab === 'weapons' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Silahlar (13 Silah)
            </h3>
            <p className="text-xs text-mist">
              Brits PvE Worlds sunucusuna ait tüm özel mühimmatlı efsanevi silahlar.
            </p>
          </div>

          {filteredWeapons.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir efsanevi silah bulunamadı.
            </div>
          ) : (
            <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden shadow-warm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-sow-border bg-sow-dark/80 text-mist font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Silah Adı</th>
                      <th className="py-4 px-5">Özel Yetenek &amp; Etki</th>
                      <th className="py-4 px-5">Cephane (Ammo)</th>
                      <th className="py-4 px-5">Rol / Tip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredWeapons.map((wpn, idx) => (
                      <tr key={idx} className="hover:bg-sow/50 transition-colors">
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
          )}
        </div>
      )}

      {/* ==========================================================
          2. EFSANEVİ ALETLER TABLOSU (SİLAHLARDAKİ GİBİ TABLO GÖRÜNÜMÜ)
         ========================================================== */}
      {subTab === 'tools' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Aletler
            </h3>
            <p className="text-xs text-mist">
              Verimliliği artıran aletler ile sürükle-bırak yapılarak kırmızı barı sıfırlayan tek kullanımlık Mad's Extra Magical Tools.
            </p>
          </div>

          {filteredTools.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir alet bulunamadı.
            </div>
          ) : (
            <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden shadow-warm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-sow-border bg-sow-dark/80 text-mist font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Alet / Eşya Adı</th>
                      <th className="py-4 px-5">Özel Yetenek &amp; Etki</th>
                      <th className="py-4 px-5">Düşme Kaynağı</th>
                      <th className="py-4 px-5">Kategori / Rol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredTools.map((tool) => {
                      const isConsumable = tool.isConsumable;

                      return (
                        <tr 
                          key={tool.id} 
                          className={`transition-colors ${
                            isConsumable ? 'bg-terracotta/10 hover:bg-terracotta/15' : 'hover:bg-sow/50'
                          }`}
                        >
                          <td className="py-4 px-5 font-serif font-bold text-seedling whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              {isConsumable && <Sparkles className="w-4 h-4 text-sprout shrink-0" />}
                              <span>{tool.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-5 text-seedling-muted font-medium leading-relaxed">
                            <p>{tool.effect}</p>
                            {tool.highlight && (
                              <p className="text-[11px] text-terracotta-light font-semibold mt-1">
                                ✦ {tool.highlight}
                              </p>
                            )}
                          </td>
                          <td className="py-4 px-5 text-mist whitespace-nowrap">
                            {tool.dropSource}
                          </td>
                          <td className="py-4 px-5 whitespace-nowrap">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                              isConsumable 
                                ? 'bg-terracotta text-seedling border-terracotta shadow-sm font-bold' 
                                : 'bg-sow-dark border-sow-border text-terracotta-light'
                            }`}>
                              {tool.category}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==========================================================
          3. EFSANEVİ ZIRH SETLERİ TABLOSU (SİLAHLARDAKİ GİBİ TABLO GÖRÜNÜMÜ)
         ========================================================== */}
      {subTab === 'sets' && (
        <div className="space-y-4">
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
            <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden shadow-warm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-sow-border bg-sow-dark/80 text-mist font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Set Adı</th>
                      <th className="py-4 px-5">Set Bonusu &amp; Açıklama</th>
                      <th className="py-4 px-5">Parçalar &amp; Düşme Kaynağı</th>
                      <th className="py-4 px-5">Rol / Kategori</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredSets.map((set) => {
                      const isCombat = set.category.includes('Savaş') || set.id === 'helping-hands';

                      return (
                        <tr key={set.id} className="hover:bg-sow/50 transition-colors">
                          <td className="py-4 px-5 font-serif font-bold text-seedling whitespace-nowrap">
                            {set.name}
                          </td>
                          <td className="py-4 px-5 text-seedling-muted font-medium leading-relaxed">
                            <p className="font-bold text-sprout mb-1">{set.setBonus}</p>
                            <p className="text-xs text-seedling-muted">{set.desc}</p>
                          </td>
                          <td className="py-4 px-5 text-xs text-mist">
                            <p><strong className="text-seedling">Parçalar:</strong> {set.parts}</p>
                            <p className="mt-0.5"><strong className="text-seedling">Kaynak:</strong> {set.dropSource}</p>
                          </td>
                          <td className="py-4 px-5 whitespace-nowrap">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                              isCombat 
                                ? 'bg-sow-dark border-terracotta/40 text-terracotta-light' 
                                : 'bg-sow-dark border-sprout/40 text-sprout'
                            }`}>
                              {set.role || set.category}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==========================================================
          4. ZIRH EKLENTİLERİ (ARMOR INSERTS - NET VE TEMİZ TÜRKÇE)
         ========================================================== */}
      {subTab === 'inserts' && (
        <div className="space-y-6">
          {/* Giriş Bilgi Kutusu */}
          <div className="bg-sow-card border border-sow-border rounded-2xl p-6 sm:p-7 shadow-warm space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-seedling mb-2">
                {ARMOR_INSERTS.title}
              </h3>
              <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
                {ARMOR_INSERTS.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sow-dark border border-sprout/30 space-y-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-sprout flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sprout" />
                <span>Uzman Tavsiyesi</span>
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

          {/* 4 Eklenti Serisi ve Sayısal Koruma Tabloları */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-seedling px-1">
              Zırh Eklentisi Türleri
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredInserts.map((insert) => (
                <div 
                  key={insert.id}
                  className="bg-sow-card border border-sow-border rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="font-serif text-lg font-bold text-seedling">
                        {insert.name}
                      </h5>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sow-dark border border-sprout/40 text-sprout">
                        {insert.tier}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-terracotta-light mb-1.5">
                      {insert.purpose}
                    </p>

                    <p className="text-xs text-mist mb-3">
                      <strong className="text-seedling">Korunan Hasarlar:</strong> {insert.resists}
                    </p>

                    {/* Kademe Tablosu */}
                    <div className="rounded-xl border border-sow-border overflow-hidden bg-sow-dark/80 my-2">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-sow-border bg-sow text-mist font-bold text-[11px]">
                            <th className="py-2 px-3">Kademe</th>
                            <th className="py-2 px-3">Koruma Değeri</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-sow-border/60">
                          {insert.tierTable.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-sow/40">
                              <td className="py-2 px-3 font-mono font-semibold text-seedling whitespace-nowrap">
                                {row.tier}
                              </td>
                              <td className="py-2 px-3 font-mono font-bold text-sprout">
                                {row.protection}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {insert.note && (
                      <p className="text-[11px] text-terracotta-light italic mt-1.5">
                        {insert.note}
                      </p>
                    )}
                  </div>

                  <div className="pt-2.5 border-t border-sow-border/60 text-xs">
                    <span className="text-mist block text-[11px]">Önerilen Alan:</span>
                    <p className="font-semibold text-seedling">{insert.recommendedArea}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stratejik Kullanım Özeti */}
          <div className="bg-sow-card border border-sow-border rounded-2xl p-6 shadow-sm space-y-3">
            <h4 className="font-serif text-lg font-bold text-seedling flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sprout" />
              <span>Stratejik Kullanım Alanları</span>
            </h4>
            <div className="divide-y divide-sow-border/60 text-xs">
              {ARMOR_INSERTS.usageGuide.map((guide, gIdx) => (
                <div key={gIdx} className="py-2.5 flex items-center justify-between gap-2">
                  <span className="text-seedling font-medium">{guide.situation}</span>
                  <span className="font-mono font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded border border-sow-border shrink-0">
                    {guide.insert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
