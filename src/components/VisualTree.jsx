import React, { useState, useEffect } from 'react';
import { TREE_LAYOUTS } from '../data/treeLayouts';
import { SKILLS_DATA } from '../data/skills';
import { Sparkles, CheckCircle2, Info, Compass } from 'lucide-react';

export default function VisualTree({ activeTree, setActiveTree }) {
  const currentLayout = TREE_LAYOUTS[activeTree] || TREE_LAYOUTS.Gathercraft;
  const [selectedNodeId, setSelectedNodeId] = useState(currentLayout.nodes[0]?.id || 'shatterpoint');

  // When activeTree changes, select the first node of that tree
  useEffect(() => {
    if (currentLayout.nodes[0]) {
      setSelectedNodeId(currentLayout.nodes[0].id);
    }
  }, [activeTree]);

  // Match the selected node with its full skill data
  const selectedSkill = SKILLS_DATA.find((s) => s.id === selectedNodeId) || SKILLS_DATA[0];

  const getNodePos = (id) => {
    if (id === 'hub') return { x: 50, y: 50 };
    const n = currentLayout.nodes.find((item) => item.id === id);
    return n ? { x: n.x, y: n.y } : { x: 50, y: 50 };
  };

  // Safe Turkish type label (avoids CSS uppercase glyph glitches like MULTÎ-TÎER)
  const formatSkillType = (type) => {
    if (!type) return 'Yetenek';
    const lower = type.toLowerCase();
    if (lower.includes('multi')) return 'Kademeli Yetenek (1-3 Seviye)';
    if (lower.includes('ability')) return 'Özel Kabiliyet';
    if (lower.includes('passive')) return 'Pasif Yetenek';
    return type;
  };

  // Clean Turkish benefit translation helper
  const formatBenefitText = (benefit) => {
    if (!benefit) return 'Etki bilgisi bulunmuyor.';
    return benefit
      .replace('-75% Fuel Consumption', '-%75 Yakıt Tüketimi (Tüm Araçlar)')
      .replace('+75% Ore Yield', '+%75 Ekstra Maden Verimi')
      .replace('35% Instant Node Respawn', '%35 Anında Maden Yenilenmesi')
      .replace('100% Instant 1-hit Mine', 'Tek Vuruşta Anında Maden Kırma')
      .replace('-45% Pickaxe Wear', '-%45 Kazma / Alet Aşınması')
      .replace('1-Hit Auto Loot Barrels', 'Varilleri Tek Vuruşta Otomatik Toplama')
      .replace('45% Component Dupe', '%45 Bileşen Çoğaltma (Dupe)')
      .replace('+200% Scrap From Barrels', 'Varillerden +%200 Hurda (Scrap)')
      .replace('+75% Wood Yield', '+%75 Ekstra Odun Verimi')
      .replace('35% Instant Tree Respawn', '%35 Anında Ağaç Yenilenmesi')
      .replace('100% Instant 1-Hit Tree', 'Ağaçları Tek Vuruşta Devirme')
      .replace('+100% Yield Whole Tree', 'Ağaç Başına +%100 Ekstra Odun')
      .replace('+100% Recycler Speed', '+%100 Geri Dönüşüm Hızı')
      .replace('100% Extra Food/Mushrooms', '+%100 Ekstra Yiyecek ve Mantar')
      .replace('+50% Extra Fish Catch', '+%50 Ekstra Balık Tutma Verimi')
      .replace('+100% Tea Potency/Duration', '+%100 Çay Gücü ve Süresi')
      .replace('+150% Comfort Nearby', '+%150 Çevre Konfor Bonusu')
      .replace('+50% Passive HP Regen', '+%50 Pasif Can Yenilenmesi')
      .replace('100% Stand Up On Down', 'Düşünce %100 Otomatik Doğrulma')
      .replace('-90% Fall Damage', '-%90 Düşme Hasarı Azaltma')
      .replace('+30 Max HP To Team', 'Tüm Takıma +30 Maksimum Can')
      .replace('200m Animal Radar', '200 Metre Hayvan Radarı')
      .replace('+75% Animal Skinning Yield', '+%75 Hayvan Derisi ve Eti')
      .replace('1-Hit Animal Gutting', 'Hayvanları Tek Vuruşta Yüzme')
      .replace('+100% Crop Yield (Cloth)', '+%100 Hasat Verimi (Kenevir / Kumaş)')
      .replace('100% Perfect Genes (/setgenes)', '/setgenes ile %100 Kusursuz Genler')
      .replace('35% No Food Consumed', '%35 Yemek / Su Harcamama Şansı')
      .replace('-50% Food/Water Depletion', '-%50 Açlık ve Susuzluk Tüketimi')
      .replace('35% Craft Cost Refund', '%35 Üretim Maliyeti İadesi')
      .replace('+50% Extra Cooked Food', '+%50 Ekstra Pişmiş Yemek Verimi')
      .replace('+100% Mixing Table Speed', '+%100 Karıştırma Masası Hızı')
      .replace('+25% Armor Durability', '+%25 Zırh Dayanıklılığı')
      .replace('Instant Crafting (No Wait)', 'Anında Üretim (Sıfır Bekleme)')
      .replace('Auto Unlock Tier 1-3 BPs', 'Seviye 1-3 Tüm BP\'ler Otomatik Açık')
      .replace('+20% Heavy Armor Speed', 'Ağır Zırhla +%20 Hareket Hızı')
      .replace('-50% Base Upkeep Cost', '-%50 Üs Bakım (Upkeep) Masrafı')
      .replace('35% Component Refund On Craft', 'Üretimde %35 Bileşen İadesi')
      .replace('-30% Outpost & Bandit Prices', 'Outpost ve Haydut Pazarında -%30 İndirim')
      .replace('+50% Explosive Damage', '+%50 Patlayıcı Hasarı')
      .replace('35% Rocket/C4 Dupe On Impact', '%35 Roket / C4 Çifte Patlama Şansı')
      .replace('2x Rocket Speed & Range', '2 Kat Roket Uçuş Hızı ve Menzili')
      .replace('100% Instant Fuse Grenades', 'El Bombalarında Anında Patlama')
      .replace('-50% Self-Explosive Damage', 'Kendi Patlayıcılarından -%50 Hasar')
      .replace('Summon Heavy MLRS Strike', 'Özel Hedefe Ağır MLRS Hava Saldırısı')
      .replace('+50% Damage To Animals', 'Vahşi Hayvanlara Karşı +%50 Hasar')
      .replace('+15% Animal Damage Resistance', 'Hayvan Saldırılarına Karşı +%15 Zırh')
      .replace('15% Lifesteal On Hits', 'Vuruş Başına %15 Can Emme (Lifesteal)')
      .replace('+25% XP Shared With Team', 'Takımla Paylaşılan +%25 Ekstra XP')
      .replace('+50% Magazine Capacity', '+%50 Ekstra Şarjör Kapasitesi')
      .replace('Craft Pristine Ammo (No Gun Wear)', 'Silahı Aşındırmayan Kusursuz Mermi')
      .replace('35% Chance To Not Consume Ammo', 'Ateş Ederken %35 Mermi Harcamama')
      .replace('Sense Nearby Players (50m)', '50m Çapındaki Oyuncuları Algılama')
      .replace('+15% Radiation & Bleed Defense', '+%15 Radyasyon ve Kanama Zırhı')
      .replace('+25% Damage Against Scientists', 'Bilim Adamı ve NPC\'lere Karşı +%25 Hasar')
      .replace('+25% Fire & Incendiary Defense', 'Ateşe ve Yanıcı Maddelere Karşı +%25 Zırh')
      .replace('Crawl 2x Faster When Downed', 'Düşünce 2 Kat Daha Hızlı Sürünme')
      .replace('+25% Cold & Freezing Defense', 'Soğuğa ve Donmaya Karşı +%25 Direnç')
      .replace('Auto-Disarm Enemy Traps', 'Düşman Tuzaklarını Otomatik Bozma')
      .replace('-50% Trap Damage Taken', 'Tuzaklardan Alınan Hasarda -%50 Azalma')
      .replace('+50% Horse Speed & Stamina', '+%50 At Hızı ve Dayanıklılığı')
      .replace('+50% Bicycle & Motorbike Speed', '+%50 Bisiklet ve Motor Hızı')
      .replace('+50% Boat & Tugboat Speed', '+%50 Tekne ve Tugboat Hızı')
      .replace('+50% Minicopter & Scrap Heli Speed', '+%50 Mini ve Hurda Helikopter Hızı');
  };

  // Clean cost translation
  const formatCostText = (cost) => {
    if (!cost) return '1 Yetenek Puanı';
    return cost
      .replace('1 SP / rank (Maks 3/3)', 'Kademe Başına 1 SP (Maks. 3)')
      .replace('1 SP', '1 Yetenek Puanı')
      .replace('5 SP', '5 Yetenek Puanı')
      .replace('Owned', 'Kalıcı Açık (Varsayılan)');
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      
      {/* --- SOL ALAN: OYUN İÇİ HARİTA GÖRÜNÜMÜ --- */}
      <div className="w-full xl:flex-1 bg-sow-card/95 border border-sow-border rounded-3xl p-4 sm:p-6 shadow-warm relative overflow-x-auto min-h-[960px] select-none">
        
        {/* Rust Stili Arka Plan Noktaları */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FAF5E9 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Üst Durum Çubuğu */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-sow-border/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sprout animate-pulse" />
            <span className="text-seedling font-semibold tracking-wide text-sm">
              {currentLayout.name} Yetenek Haritası
            </span>
            <span className="text-mist/60 text-xs font-mono">• Worlds V2</span>
          </div>
          <div className="flex items-center gap-2 text-mist text-[11px] font-mono">
            <Compass className="w-3.5 h-3.5 text-sprout" />
            <span>İncelemek istediğiniz düğüme tıklayın</span>
          </div>
        </div>

        {/* Harita Düzlemi (Ferah ve Geniş: min-w-[980px] h-[860px]) */}
        <div className="relative w-full min-w-[980px] h-[860px] mt-4">
          
          {/* Bağlantı Çizgileri */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {currentLayout.connections.map((conn, idx) => {
              const start = getNodePos(conn.from);
              const end = getNodePos(conn.to);
              return (
                <line
                  key={idx}
                  x1={`${start.x}%`}
                  y1={`${start.y}%`}
                  x2={`${end.x}%`}
                  y2={`${end.y}%`}
                  stroke="#453030"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Merkez HUB Elması */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center cursor-default"
            style={{ left: '50%', top: '50%' }}
          >
            <div className="w-24 h-24 rotate-45 rounded-2xl bg-gradient-to-br from-sow via-sow-card to-sow border-2 border-sprout/70 shadow-warm flex items-center justify-center">
              <div className="-rotate-45 text-center px-1">
                <span className="block text-[11px] font-serif font-extrabold tracking-wider text-seedling leading-tight">
                  {currentLayout.hubLabel}
                </span>
                <span className="text-[10px] tracking-widest text-sprout font-mono font-bold block mt-0.5">HUB</span>
              </div>
            </div>
          </div>

          {/* Düğümler (Nodes) */}
          {currentLayout.nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            const isGod = node.tier === 'God-Tier';

            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer group"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {/* Elmas Kutu */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rotate-45 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-terracotta border-2 border-sprout scale-110 shadow-sprout ring-4 ring-sprout/20'
                      : isGod
                      ? 'bg-sow border-2 border-terracotta hover:border-sprout hover:scale-105'
                      : 'bg-sow border border-sow-border hover:border-mist hover:scale-105'
                  }`}
                >
                  <span className="-rotate-45 text-sm sm:text-base select-none">
                    {node.icon}
                  </span>
                </div>

                {/* Altındaki Kademe ve İsim (Ferah Boşluk & Asla Çakışmaz) */}
                <div className="mt-2 text-center pointer-events-none flex flex-col items-center">
                  <span 
                    className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded leading-none ${
                      isSelected
                        ? 'bg-sprout text-sow-dark'
                        : 'bg-sow-dark/90 text-mist border border-sow-border'
                    }`}
                  >
                    {node.rank}
                  </span>
                  <span className="block text-[11px] font-medium text-seedling group-hover:text-terracotta-light transition-colors whitespace-nowrap max-w-[105px] truncate mt-1">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* --- SAĞ ALAN: DETAY DENETLEME PANELİ (INSPECTOR) --- */}
      <div className="w-full xl:w-[380px] bg-sow-card border border-sow-border rounded-3xl p-6 shadow-warm relative sticky top-6">
        
        {/* Başlık Alanı */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-sow-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rotate-45 rounded-xl bg-sow-dark border border-sprout/50 flex items-center justify-center shadow-sm shrink-0">
              <span className="-rotate-45 text-xl">✦</span>
            </div>
            <div>
              <span className="text-[11px] font-mono font-semibold tracking-wide text-mist block">
                {formatSkillType(selectedSkill?.type)}
              </span>
              <h3 className="font-serif text-2xl font-bold text-seedling">
                {selectedSkill?.name}
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sprout text-sow-dark shrink-0">
            {selectedSkill?.tier || 'Standart'}
          </span>
        </div>

        {/* Gereksinim & Maliyet Bilgisi */}
        <div className="flex items-center justify-between py-3 text-xs border-b border-sow-border/60">
          <span className="font-mono text-mist">
            Öğrenme Maliyeti:
          </span>
          <span className="font-mono text-xs font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded-lg border border-sow-border">
            {formatCostText(selectedSkill?.cost)}
          </span>
        </div>

        {/* Yetenek Etkisi Kutusu */}
        <div className="my-4 bg-sow-dark/80 rounded-2xl p-4 border border-sow-border">
          <span className="text-[10px] font-mono font-bold tracking-wider text-mist block mb-1">
            YETENEK ETKİSİ
          </span>
          <p className="font-mono text-base font-bold text-sprout leading-snug">
            {formatBenefitText(selectedSkill?.benefit)}
          </p>
        </div>

        {/* Açıklama */}
        <div className="space-y-2 mb-5">
          <span className="text-[10px] font-mono font-bold tracking-wider text-mist block">
            AÇIKLAMA &amp; ETKİ ALANI
          </span>
          <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
            {selectedSkill?.desc}
          </p>
        </div>

        {/* Sinerji / Taktik Bilgisi */}
        {selectedSkill?.synergy && (
          <div className="bg-sow rounded-2xl p-4 border border-sow-border mb-5">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-sprout shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-seedling block mb-0.5">Taktiksel Öneri:</span>
                <p className="text-seedling-muted leading-relaxed">{selectedSkill.synergy}</p>
              </div>
            </div>
          </div>
        )}

        {/* Düğüm Durumu Bilgisi */}
        <div className="pt-2">
          <div className="w-full py-2.5 px-3 rounded-xl bg-sow-dark border border-sow-border text-mist text-xs font-mono text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-sprout" />
            <span>Düğüm Aktif İnceleniyor ({activeTree})</span>
          </div>
        </div>

      </div>

    </div>
  );
}
