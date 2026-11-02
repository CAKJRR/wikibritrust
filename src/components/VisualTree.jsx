import React, { useState, useEffect } from 'react';
import { TREE_LAYOUTS } from '../data/treeLayouts';
import { SKILLS_DATA } from '../data/skills';
import { Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

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

  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      
      {/* --- SOL ALAN: OYUN İÇİ HARİTA GÖRÜNÜMÜ --- */}
      <div className="w-full xl:flex-1 bg-sow-card/95 border border-sow-border rounded-3xl p-4 sm:p-6 shadow-warm relative overflow-x-auto min-h-[720px] select-none">
        
        {/* Rust Stili Arka Plan Noktaları */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FAF5E9 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Üst Durum Çubuğu */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-sow-border/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sprout animate-pulse" />
            <span className="text-seedling font-semibold tracking-wide">
              {currentLayout.name} Yetenek Düğümleri
            </span>
          </div>
          <span className="text-mist text-[11px] font-mono">
            İncelemek istediğiniz düğüme tıklayın
          </span>
        </div>

        {/* Harita Düzlemi (Geniş ve Ferah: min-w-[760px] h-[640px]) */}
        <div className="relative w-full min-w-[720px] h-[640px] mt-2">
          
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
            <div className="w-20 h-20 rotate-45 rounded-2xl bg-gradient-to-br from-sow via-sow-card to-sow border-2 border-sprout/60 shadow-warm flex items-center justify-center">
              <div className="-rotate-45 text-center px-1">
                <span className="block text-[10px] font-serif font-extrabold tracking-wider text-seedling leading-tight">
                  {currentLayout.hubLabel}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-sprout font-mono font-bold block mt-0.5">HUB</span>
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

                {/* Altındaki Seviye ve İsim */}
                <div className="mt-2 text-center pointer-events-none">
                  <span 
                    className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                      isSelected
                        ? 'bg-sprout text-sow-dark'
                        : 'bg-sow-dark/90 text-mist border border-sow-border'
                    }`}
                  >
                    {node.rank}
                  </span>
                  <span className="block text-[10px] font-semibold text-seedling group-hover:text-terracotta-light transition-colors whitespace-nowrap max-w-[85px] truncate">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* --- SAĞ ALAN: DETAY DENETLEME PANELİ (INSPECTOR) --- */}
      <div className="w-full xl:w-[380px] bg-sow-card border border-sow-border rounded-3xl p-6 shadow-warm relative">
        
        {/* Başlık Alanı */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-sow-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rotate-45 rounded-xl bg-sow-dark border border-sprout/50 flex items-center justify-center shadow-sm shrink-0">
              <span className="-rotate-45 text-xl">✦</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mist block">
                {selectedSkill?.type || 'Yetenek'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-seedling">
                {selectedSkill?.name}
              </h3>
            </div>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sprout text-sow-dark">
            {selectedSkill?.tier}
          </span>
        </div>

        {/* Durum & Maliyet Bilgisi */}
        <div className="flex items-center justify-between py-3 text-xs border-b border-sow-border/60">
          <span className="font-mono text-mist">
            DURUM: <strong className="text-seedling font-bold">AKTİF REHBER</strong>
          </span>
          <span className="font-mono text-xs font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded-lg border border-sow-border">
            {selectedSkill?.cost}
          </span>
        </div>

        {/* Kazanç / Avantaj Kutusu (Oyun içi sarı/yeşil benefits tarzı) */}
        <div className="my-4 bg-sow-dark/80 rounded-2xl p-4 border border-sow-border">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mist block mb-1">
            KAZANÇ / AVANTAJ (BENEFITS)
          </span>
          <p className="font-mono text-base font-bold text-sprout">
            {selectedSkill?.benefit}
          </p>
        </div>

        {/* Açıklama */}
        <div className="space-y-2 mb-5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-mist block">
            HAKKINDA (ABOUT)
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
                <span className="font-bold text-seedling block mb-0.5">Sinerji / Taktik:</span>
                <p className="text-seedling-muted">{selectedSkill.synergy}</p>
              </div>
            </div>
          </div>
        )}

        {/* Alt Bilgi */}
        <div className="pt-2">
          <div className="w-full py-2.5 rounded-xl bg-sow-dark border border-sow-border text-mist text-xs font-mono text-center flex items-center justify-center gap-1.5">
            <span>Düğüm İncelemesi Aktif</span>
          </div>
        </div>

      </div>

    </div>
  );
}
