import React, { useState, useEffect, useRef } from 'react';
import { TREE_LAYOUTS } from '../data/treeLayouts';
import { SKILLS_DATA } from '../data/skills';
import { Sparkles, Compass } from 'lucide-react';

export default function VisualTree({ activeTree, setActiveTree }) {
  const currentLayout = TREE_LAYOUTS[activeTree] || TREE_LAYOUTS.Gathercraft;
  const [selectedNodeId, setSelectedNodeId] = useState(currentLayout.nodes[0]?.id || 'ore-sense');

  const viewportRef = useRef(null);
  const hasDraggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  // Ağaç değiştiğinde ilk yeteneği seç ve görünümü merkezdeki HUB'a yumuşakça odakla
  useEffect(() => {
    if (currentLayout.nodes[0]) {
      setSelectedNodeId(currentLayout.nodes[0].id);
    }
    const el = viewportRef.current;
    if (el) {
      const centerViewport = () => {
        const targetLeft = Math.max(0, (el.scrollWidth - el.clientWidth) / 2);
        const targetTop = Math.max(0, (el.scrollHeight - el.clientHeight) / 2);
        el.scrollTo({ left: targetLeft, top: targetTop, behavior: 'smooth' });
      };

      centerViewport();
      const timer = setTimeout(centerViewport, 60);
      return () => clearTimeout(timer);
    }
  }, [activeTree]);

  // Seçili yeteneğin detaylı verisini bul
  const selectedSkill = SKILLS_DATA.find((s) => s.id === selectedNodeId) || SKILLS_DATA[0];

  // Sürükle-kaydır (drag-to-pan / hand) işleyicisi
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const el = viewportRef.current;
    if (!el) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = el.scrollLeft;
    const startTop = el.scrollTop;
    hasDraggedRef.current = false;

    const onMove = (ev) => {
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      if (!hasDraggedRef.current && Math.abs(dx) + Math.abs(dy) > 4) {
        hasDraggedRef.current = true;
        setIsDragging(true);
      }
      if (hasDraggedRef.current) {
        el.scrollLeft = startLeft - dx;
        el.scrollTop = startTop - dy;
      }
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      setIsDragging(false);
      // Sürükleme bitince tıklama olayının hemen tetiklenmesini engelle
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 30);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const getNodePos = (id) => {
    if (id === 'hub') return { x: 50, y: 50 };
    const n = currentLayout.nodes.find((item) => item.id === id);
    return n ? { x: n.x, y: n.y } : { x: 50, y: 50 };
  };

  // Güvenli Türkçe tür etiketi (CSS uppercase glitchlerini engeller)
  const formatSkillType = (type) => {
    if (!type) return 'Yetenek';
    const lower = type.toLowerCase();
    if (lower.includes('multi')) return 'Kademeli Yetenek (1-3 Seviye)';
    if (lower.includes('ability')) return 'Özel Yetenek';
    if (lower.includes('passive')) return 'Pasif Yetenek';
    return type;
  };

  // Temiz Türkçe maliyet formatlayıcı
  const formatCostText = (cost) => {
    if (!cost) return '1 Yetenek Puanı (1 SP)';
    if (cost.includes('Maks')) return cost;
    if (cost === '1 SP') return '1 Yetenek Puanı (1 SP)';
    if (cost === '5 SP') return '5 Yetenek Puanı (5 SP)';
    return cost;
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 items-start">
      
      {/* --- SOL ALAN: OYUN İÇİ HARİTA GÖRÜNÜMÜ --- */}
      <div className="w-full xl:flex-1 min-w-0 bg-sow-card/95 border border-sow-border rounded-3xl p-4 sm:p-6 shadow-warm relative overflow-hidden select-none">
        
        {/* Rust Stili Izgara Arka Planı */}
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
            <span>Detay için bir yeteneğe tıklayın • Haritayı sürükleyerek gezin</span>
          </div>
        </div>

        {/* Sürüklenebilir Görüntü Alanı (Pan / Hand) */}
        <div
          ref={viewportRef}
          onMouseDown={handleMouseDown}
          onDragStart={(e) => e.preventDefault()}
          className={`relative mt-4 h-[660px] overflow-auto no-scrollbar rounded-2xl select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {/* Harita Tuvali (Geniş ve Ferah: min-w-[1020px] h-[860px]) */}
          <div className="relative w-full min-w-[1020px] h-[860px]">
            
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

            {/* Yetenekler (Skills) */}
            {currentLayout.nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    if (!hasDraggedRef.current) setSelectedNodeId(node.id);
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center group ${
                    isDragging ? 'cursor-grabbing' : 'cursor-pointer'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Elmas Kutu - Tam Merkez Noktası (node.x, node.y) */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rotate-45 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isSelected
                        ? 'bg-terracotta border-2 border-sprout scale-110 shadow-sprout ring-4 ring-sprout/20'
                        : 'bg-sow border border-sow-border hover:border-mist hover:scale-105'
                    }`}
                  >
                    <span className="-rotate-45 text-sm sm:text-base select-none">
                      {node.icon}
                    </span>
                  </div>

                  {/* Altındaki Seviye Rozeti ve İsim (Elmasın Merkezini Bozmayacak Şekilde Altına Konumlu) */}
                  <div className="absolute top-full mt-2.5 text-center pointer-events-none flex flex-col items-center w-32 left-1/2 -translate-x-1/2">
                    <span 
                      className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded leading-none ${
                        isSelected
                          ? 'bg-sprout text-sow-dark'
                          : 'bg-sow-dark/90 text-mist border border-sow-border'
                      }`}
                    >
                      {node.rank}
                    </span>
                    <span className="block text-[11px] font-medium text-seedling group-hover:text-terracotta-light transition-colors text-center leading-tight mt-1 break-words px-0.5">
                      {node.name}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>
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

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-sow-dark border border-sow-border text-sprout shrink-0">
            {formatCostText(selectedSkill?.cost) || '1 SP'}
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
            {selectedSkill?.benefit || 'Etki bilgisi bulunmuyor.'}
          </p>
        </div>

        {/* Açıklama */}
        <div className="space-y-2 mb-5">
          <span className="text-[10px] font-mono font-bold tracking-wider text-mist block">
            AÇIKLAMA
          </span>
          <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
            {selectedSkill?.desc}
          </p>
        </div>

        {/* Sinerji / Taktik Bilgisi */}
        {selectedSkill?.synergy && (
          <div className="bg-sow rounded-2xl p-4 border border-sow-border mb-2">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-sprout shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-seedling block mb-0.5">TAKTİK &amp; SİNERJİ</span>
                <p className="text-seedling-muted leading-relaxed">{selectedSkill.synergy}</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
