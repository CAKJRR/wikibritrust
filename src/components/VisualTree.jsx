import React, { useState } from 'react';
import { TREE_LAYOUTS } from '../data/treeLayouts';
import { SKILLS_DATA } from '../data/skills';
import { X, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function VisualTree({ activeTree, setActiveTree }) {
  const currentLayout = TREE_LAYOUTS[activeTree] || TREE_LAYOUTS.Gathercraft;
  const [selectedNodeId, setSelectedNodeId] = useState(currentLayout.nodes[0]?.id || 'shatterpoint');

  // Match the selected node with its full skill data
  const selectedSkill = SKILLS_DATA.find((s) => s.id === selectedNodeId) || SKILLS_DATA[0];

  const getNodePos = (id) => {
    if (id === 'hub') return { x: 50, y: 50 };
    const n = currentLayout.nodes.find((item) => item.id === id);
    return n ? { x: n.x, y: n.y } : { x: 50, y: 50 };
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      
      {/* --- SOL PANEL: OYUN İÇİ ETKİLEŞİMLİ AĞAÇ ALANI --- */}
      <div className="w-full lg:flex-1 bg-sow-card/95 border-2 border-sow-border rounded-3xl p-4 sm:p-6 shadow-warm relative overflow-hidden min-h-[580px] select-none">
        
        {/* Subtle grid pattern background like Rust in-game UI */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#FAF5E9 1.5px, transparent 1.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Top Hint Bar */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-sow-border/60 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sprout animate-pulse" />
            <span className="text-seedling font-semibold tracking-wide">
              {currentLayout.name} Yetenek Haritası
            </span>
          </div>
          <span className="text-mist text-[11px]">
            İncelemek için bir düğüme (diamond) tıklayın
          </span>
        </div>

        {/* Interactive Canvas Area */}
        <div className="relative w-full h-[500px] mt-2">
          
          {/* SVG Connection Lines */}
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
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="transition-colors"
                />
              );
            })}
          </svg>

          {/* Central Hub Diamond */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center cursor-default"
            style={{ left: '50%', top: '50%' }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rotate-45 rounded-2xl bg-gradient-to-br from-terracotta to-redwood-dark border-2 border-sprout/60 shadow-terracotta flex items-center justify-center">
              <div className="-rotate-45 text-center px-1">
                <span className="block text-[11px] sm:text-xs font-serif font-extrabold tracking-wider text-seedling leading-tight">
                  {currentLayout.hubLabel}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-sprout block mt-0.5">HUB</span>
              </div>
            </div>
          </div>

          {/* Skill Nodes */}
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
                {/* Diamond Box */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rotate-45 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-terracotta border-2 border-sprout scale-110 shadow-sprout ring-4 ring-sprout/30'
                      : isGod
                      ? 'bg-sow border-2 border-terracotta hover:border-sprout hover:scale-105 shadow-sm'
                      : 'bg-sow border border-sow-border hover:border-mist hover:scale-105'
                  }`}
                >
                  <span className="-rotate-45 text-base sm:text-lg select-none">
                    {node.icon}
                  </span>
                </div>

                {/* Rank / Status Pill */}
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
                  <span className="block text-[10px] font-semibold text-seedling group-hover:text-terracotta-light transition-colors whitespace-nowrap max-w-[80px] truncate">
                    {node.name}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* --- SAĞ PANEL: OYUN İÇİ DETAY DENETÇİSİ (IN-GAME INSPECTOR) --- */}
      <div className="w-full lg:w-[380px] bg-sow-card border-2 border-sow-border rounded-3xl p-6 shadow-warm relative">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-sow-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rotate-45 rounded-xl bg-gradient-to-br from-terracotta to-redwood border border-sprout/50 flex items-center justify-center shadow-terracotta shrink-0">
              <span className="-rotate-45 text-xl">✦</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-mist block">
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

        {/* Status & Cost */}
        <div className="flex items-center justify-between py-3 text-xs border-b border-sow-border/60">
          <span className="font-mono text-mist">
            DURUM: <strong className="text-seedling font-bold">AKTİF REHBER</strong>
          </span>
          <span className="font-mono text-xs font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded-lg border border-sow-border">
            MALİYET: {selectedSkill?.cost}
          </span>
        </div>

        {/* Benefits Box (Oyun içi gibi sarı/yeşil vurgulu) */}
        <div className="my-4 bg-sow-dark/80 rounded-2xl p-4 border border-sow-border">
          <span className="text-[10px] font-bold uppercase tracking-wider text-mist block mb-1">
            KAZANÇ / AVANTAJ (BENEFITS)
          </span>
          <p className="font-mono text-base font-bold text-sprout">
            {selectedSkill?.benefit}
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-3 mb-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-mist block">
            HAKKINDA (ABOUT)
          </span>
          <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
            {selectedSkill?.desc}
          </p>
        </div>

        {/* Synergy Box */}
        {selectedSkill?.synergy && (
          <div className="bg-sow rounded-2xl p-4 border border-terracotta/30 mb-5">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-sprout shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-seedling block mb-0.5">En İyi Kombo / Sinerji:</span>
                <p className="text-seedling-muted">{selectedSkill.synergy}</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Button */}
        <div className="pt-2">
          <div className="w-full py-3 rounded-xl bg-terracotta text-seedling font-serif font-bold text-sm text-center shadow-terracotta flex items-center justify-center gap-2">
            <span>Seçili Düğüm İncelemesi</span>
            <ChevronRight className="w-4 h-4 text-sprout" />
          </div>
        </div>

      </div>

    </div>
  );
}
