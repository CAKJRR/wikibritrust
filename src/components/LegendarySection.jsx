import React, { useState } from 'react';
import { 
  LEGENDARY_WEAPONS, 
  LEGENDARY_TOOLS, 
  LEGENDARY_SETS, 
  ARMOR_INSERTS
} from '../data/legendary';
import { 
  Swords, 
  Pickaxe, 
  Shield, 
  Layers
} from 'lucide-react';

export default function LegendarySection({ searchQuery = '' }) {
  const [subTab, setSubTab] = useState('weapons');
  const query = searchQuery.trim().toLocaleLowerCase('tr');

  const tabs = [
    { id: 'weapons', label: 'Efsanevi Silahlar (13)', icon: Swords },
    { id: 'tools', label: 'Efsanevi Aletler', icon: Pickaxe },
    { id: 'sets', label: 'Efsanevi Zırh Setleri (10)', icon: Shield },
    { id: 'inserts', label: 'Zırh Eklentileri (Inserts)', icon: Layers },
  ];

  // Arama Filtreleri (Objektif Veriler)
  const filteredWeapons = query
    ? LEGENDARY_WEAPONS.filter(
        (w) =>
          w.name.toLocaleLowerCase('tr').includes(query) ||
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
          t.dropSource.toLocaleLowerCase('tr').includes(query)
      )
    : LEGENDARY_TOOLS;

  const filteredSets = query
    ? LEGENDARY_SETS.filter(
        (s) =>
          s.name.toLocaleLowerCase('tr').includes(query) ||
          s.category.toLocaleLowerCase('tr').includes(query) ||
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
          i.tierTable.some(
            (t) =>
              t.tier.toLocaleLowerCase('tr').includes(query) ||
              t.protection.toLocaleLowerCase('tr').includes(query)
          )
      )
    : ARMOR_INSERTS.types;

  return (
    <div className="space-y-6">
      
      {/* 4 Ana Sekme Seçici */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-sow-card/90 rounded-2xl border border-sow-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = subTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-terracotta text-seedling shadow-terracotta'
                  : 'bg-sow text-mist hover:text-seedling hover:bg-sow-hover'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ==========================================================
          1. EFSANEVİ SİLAHLAR TABLOSU (RESMİ STANDART: SİLAH, ETKİ, CEPHANE)
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
          2. EFSANEVİ ALETLER TABLOSU
         ========================================================== */}
      {subTab === 'tools' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Aletler
            </h3>
            <p className="text-xs text-mist">
              Verimliliği artıran efsanevi toplama aletleri ve tek kullanımlık sürükle-bırak tamir eşyaları.
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredTools.map((tool) => (
                      <tr key={tool.id} className="hover:bg-sow/50 transition-colors">
                        <td className="py-4 px-5 font-serif font-bold text-seedling whitespace-nowrap">
                          {tool.name}
                        </td>
                        <td className="py-4 px-5 text-seedling-muted font-medium leading-relaxed">
                          {tool.effect}
                        </td>
                        <td className="py-4 px-5 text-mist whitespace-nowrap">
                          {tool.dropSource}
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
          3. EFSANEVİ ZIRH SETLERİ TABLOSU
         ========================================================== */}
      {subTab === 'sets' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Efsanevi Zırh Setleri (10 Set)
            </h3>
            <p className="text-xs text-mist">
              Darbe emilimi, can emme, otomatik dirilme ve meslek toplama setleri.
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
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredSets.map((set) => (
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
          4. ZIRH EKLENTİLERİ TABLOSU (SİLAHLARDAKİ GİBİ TABLO GÖRÜNÜMÜ)
         ========================================================== */}
      {subTab === 'inserts' && (
        <div className="space-y-4">
          <div className="px-1">
            <h3 className="font-serif text-2xl font-bold text-seedling">
              Zırh Eklentileri (Armor Inserts)
            </h3>
            <p className="text-xs text-mist">
              Zırh parçalarına takılarak belirli hasar türlerine karşı ek direnç sağlayan bulunabilir eklentiler (+, ++, +++).
            </p>
          </div>

          {filteredInserts.length === 0 ? (
            <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
              "{searchQuery}" ile eşleşen bir eklenti bulunamadı.
            </div>
          ) : (
            <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden shadow-warm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-sow-border bg-sow-dark/80 text-mist font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-4 px-5">Eklenti Ailesi</th>
                      <th className="py-4 px-5">Korunan Hasar Türleri</th>
                      <th className="py-4 px-5">Kademeler (+, ++, +++) ve Koruma Değerleri</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sow-border/60">
                    {filteredInserts.map((insert) => (
                      <tr key={insert.id} className="hover:bg-sow/50 transition-colors">
                        <td className="py-4 px-5 font-serif font-bold text-seedling whitespace-nowrap">
                          <div>
                            <span>{insert.name}</span>
                            <span className="block text-[11px] font-mono text-terracotta-light font-normal mt-0.5">
                              {insert.purpose}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-seedling-muted font-medium leading-relaxed">
                          {insert.resists}
                        </td>
                        <td className="py-4 px-5">
                          <div className="space-y-1 font-mono text-xs">
                            {insert.tierTable.map((t, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-seedling font-semibold">{t.tier}:</span>
                                <span className="text-sprout font-bold">{t.protection}</span>
                              </div>
                            ))}
                          </div>
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

    </div>
  );
}
