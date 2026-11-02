import React, { useState, useEffect, useMemo } from 'react';
import { 
  Home, 
  Swords, 
  BookOpen, 
  Sunrise, 
  Scale, 
  Skull, 
  Sparkles, 
  Terminal, 
  Gamepad2, 
  Pickaxe, 
  Shield, 
  Truck, 
  Search, 
  X, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

import { SKILLS_DATA } from '../data/skills';
import { PROGRESSION_GUIDES } from '../data/guides';
import { LEGENDARY_WEAPONS, LEGENDARY_TOOLS, LEGENDARY_SETS } from '../data/legendary';
import { COMMANDS_DATA } from '../data/commands';

export default function Sidebar({
  activeTab,
  setActiveTab,
  selectedTree,
  setSelectedTree,
  searchQuery,
  setSearchQuery,
  mobileOpen,
  setMobileOpen
}) {
  const isGuideTab = ['early', 'mid', 'endgame'].includes(activeTab);
  const [guidesOpen, setGuidesOpen] = useState(isGuideTab);

  // Keep guides open if user is on any guide page
  useEffect(() => {
    if (isGuideTab) {
      setGuidesOpen(true);
    }
  }, [activeTab, isGuideTab]);

  const guideSubItems = [
    { id: 'early', label: 'Başlangıç Rehberleri', icon: Sunrise },
    { id: 'mid', label: 'Orta Seviye Rehberler', icon: Scale },
    { id: 'endgame', label: 'İleri Seviye Rehberler', icon: Skull },
  ];

  const treeItems = [
    { id: 'Gathercraft', label: 'Gathercraft', icon: Pickaxe },
    { id: 'Survivalcraft', label: 'Survivalcraft', icon: Shield },
    { id: 'Combat', label: 'Combat', icon: Swords },
    { id: 'Vehicles', label: 'Vehicles', icon: Truck },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGuidesMainClick = () => {
    if (!isGuideTab) {
      setActiveTab('early');
      setGuidesOpen(true);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setGuidesOpen(!guidesOpen);
    }
  };

  // --- Kapsamlı Anlık Arama Dizini (Tüm Sitede Canlı Arama) ---
  const query = searchQuery.trim().toLocaleLowerCase('tr');

  const searchResults = useMemo(() => {
    if (query.length < 2) return [];

    const results = [];

    // 1. Efsanevi Silahlar & Aletler
    LEGENDARY_WEAPONS.forEach((w) => {
      if (
        w.name.toLocaleLowerCase('tr').includes(query) ||
        w.effect?.toLocaleLowerCase('tr').includes(query) ||
        w.role?.toLocaleLowerCase('tr').includes(query)
      ) {
        results.push({
          id: `wpn-${w.name}`,
          title: w.name,
          category: 'Efsanevi Silah',
          badge: w.role,
          desc: w.effect,
          action: () => {
            setActiveTab('legendary');
            setMobileOpen(false);
          }
        });
      }
    });

    LEGENDARY_TOOLS.forEach((t) => {
      if (
        t.name.toLocaleLowerCase('tr').includes(query) ||
        t.effect?.toLocaleLowerCase('tr').includes(query)
      ) {
        results.push({
          id: `tool-${t.name}`,
          title: t.name,
          category: 'Efsanevi Alet',
          badge: 'Alet',
          desc: t.effect,
          action: () => {
            setActiveTab('legendary');
            setMobileOpen(false);
          }
        });
      }
    });

    // 2. Yetenekler
    SKILLS_DATA.forEach((s) => {
      if (
        s.name.toLocaleLowerCase('tr').includes(query) ||
        s.desc?.toLocaleLowerCase('tr').includes(query) ||
        s.benefit?.toLocaleLowerCase('tr').includes(query)
      ) {
        results.push({
          id: `skill-${s.id}`,
          title: s.name,
          category: `Yetenek (${s.tree})`,
          badge: s.tier,
          desc: s.benefit || s.desc,
          action: () => {
            setActiveTab('skills');
            if (setSelectedTree) setSelectedTree(s.tree);
            setMobileOpen(false);
          }
        });
      }
    });

    // 3. Rehberler
    ['early', 'mid', 'endgame'].forEach((stage) => {
      const cat = PROGRESSION_GUIDES[stage];
      if (cat?.guides) {
        cat.guides.forEach((g) => {
          if (
            g.title.toLocaleLowerCase('tr').includes(query) ||
            g.summary?.toLocaleLowerCase('tr').includes(query) ||
            g.sections?.some(
              (sec) =>
                sec.heading?.toLocaleLowerCase('tr').includes(query) ||
                sec.items?.some((it) => it.toLocaleLowerCase('tr').includes(query))
            )
          ) {
            results.push({
              id: `guide-${g.id}`,
              title: g.title,
              category: `${cat.categoryLead} Rehberi`,
              badge: g.badge,
              desc: g.summary,
              action: () => {
                setActiveTab(stage);
                setMobileOpen(false);
              }
            });
          }
        });
      }
    });

    // 4. Komutlar
    COMMANDS_DATA.forEach((c) => {
      if (
        c.cmd.toLocaleLowerCase('tr').includes(query) ||
        c.name.toLocaleLowerCase('tr').includes(query) ||
        c.desc.toLocaleLowerCase('tr').includes(query)
      ) {
        results.push({
          id: `cmd-${c.cmd}`,
          title: c.cmd,
          category: 'Sunucu Komutu',
          badge: c.name,
          desc: c.desc,
          action: () => {
            setActiveTab('commands');
            setMobileOpen(false);
          }
        });
      }
    });

    return results.slice(0, 8);
  }, [query, setActiveTab, setSelectedTree, setMobileOpen]);

  const content = (
    <div className="flex flex-col h-full bg-sow-card/95 backdrop-blur-md border-r border-sow-border select-none">
      
      {/* Top Logo & Title (16:9 banner object-contain) */}
      <div className="p-4 border-b border-sow-border flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => handleNavClick('home')}
        >
          <div className="h-10 px-2 rounded-xl bg-sow-dark border border-terracotta/40 shadow-sm flex items-center justify-center shrink-0">
            <img
              src="/cakjrr.png"
              alt="CAKJRR Logo"
              className="h-8 w-auto max-w-[100px] object-contain rounded"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-extrabold text-base tracking-tight text-seedling">
                CAKJRR
              </span>
              <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-sprout/20 text-sprout border border-sprout/30">
                V2
              </span>
            </div>
            <p className="text-[10px] text-mist font-medium">Brit Rust Wiki</p>
          </div>
        </div>

        {/* Mobile Close Button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden p-1.5 text-mist hover:text-seedling rounded-lg hover:bg-sow"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search Input in Sidebar (Sitedeki Tek ve Güçlü Arama Çubuğu) */}
      <div className="p-3 border-b border-sow-border/60 relative">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-mist absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rehberde, silahta, yetenekte ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-sow-dark border border-sow-border rounded-xl pl-8 pr-7 py-2 text-xs text-seedling placeholder-mist/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-mist hover:text-seedling p-0.5 rounded"
              title="Temizle"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Canlı Arama Sonuçları Açılır Paneli */}
        {searchResults.length > 0 && (
          <div className="absolute left-3 right-3 top-full mt-1.5 z-50 bg-sow-card border border-terracotta/40 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto divide-y divide-sow-border/60 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-3 py-1.5 bg-sow-dark text-[10px] font-mono font-bold text-sprout flex items-center justify-between">
              <span>CANLI ARAMA SONUÇLARI</span>
              <span className="text-mist font-normal">{searchResults.length} sonuç</span>
            </div>

            {searchResults.map((res) => (
              <div
                key={res.id}
                onClick={() => {
                  res.action();
                }}
                className="p-2.5 hover:bg-sow cursor-pointer transition-colors group flex items-start justify-between gap-2"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-seedling group-hover:text-terracotta-light transition-colors truncate">
                      {res.title}
                    </span>
                    <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-sow-dark text-mist border border-sow-border shrink-0">
                      {res.category}
                    </span>
                  </div>
                  {res.desc && (
                    <p className="text-[10px] text-seedling-muted truncate mt-0.5">
                      {res.desc}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-3 h-3 text-mist group-hover:text-sprout shrink-0 mt-1" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5 scrollbar-none">
        
        <div className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-mist/70">
          Kılavuz Menüsü
        </div>

        {/* 1. Genel Bakış */}
        <button
          onClick={() => handleNavClick('home')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'home'
              ? 'bg-terracotta text-seedling shadow-terracotta'
              : 'text-mist hover:text-seedling hover:bg-sow'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-sprout' : 'text-mist'}`} />
            <span>Genel Bakış</span>
          </div>
          {activeTab === 'home' && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
        </button>

        {/* 2. Nasıl Oynanır */}
        <button
          onClick={() => handleNavClick('play')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'play'
              ? 'bg-terracotta text-seedling shadow-terracotta'
              : 'text-mist hover:text-seedling hover:bg-sow'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Gamepad2 className={`w-4 h-4 ${activeTab === 'play' ? 'text-sprout' : 'text-mist'}`} />
            <span>Nasıl Oynanır</span>
          </div>
          {activeTab === 'play' && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
        </button>

        {/* 3. Yetenek Ağacı (Accordion) */}
        <div className="space-y-1">
          <button
            onClick={() => handleNavClick('skills')}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'skills'
                ? 'bg-terracotta text-seedling shadow-terracotta'
                : 'text-mist hover:text-seedling hover:bg-sow'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Swords className={`w-4 h-4 ${activeTab === 'skills' ? 'text-sprout' : 'text-mist'}`} />
              <span>Yetenek Ağacı</span>
            </div>
            {activeTab === 'skills' && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
          </button>

          {/* Sub-tree links if on skills tab */}
          {activeTab === 'skills' && (
            <div className="ml-5 pl-2.5 border-l border-sow-border space-y-1 pt-1 pb-1">
              {treeItems.map((tree) => {
                const TreeIcon = tree.icon;
                const isTreeSelected = selectedTree === tree.id;
                return (
                  <button
                    key={tree.id}
                    onClick={() => {
                      setSelectedTree(tree.id);
                      setMobileOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      isTreeSelected
                        ? 'text-sprout bg-sow-dark font-bold'
                        : 'text-mist hover:text-seedling'
                    }`}
                  >
                    <TreeIcon className="w-3.5 h-3.5" />
                    <span>{tree.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 4. REHBERLER (Accordion Açılır Kapanır) */}
        <div className="space-y-1">
          <button
            onClick={handleGuidesMainClick}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              isGuideTab
                ? 'bg-terracotta/90 text-seedling shadow-terracotta'
                : 'text-mist hover:text-seedling hover:bg-sow'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <BookOpen className={`w-4 h-4 ${isGuideTab ? 'text-sprout' : 'text-mist'}`} />
              <span>Rehberler</span>
            </div>
            <ChevronDown 
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                guidesOpen ? 'rotate-180 text-sprout' : 'text-mist'
              }`} 
            />
          </button>

          {/* Rehberler Alt Menüsü */}
          {guidesOpen && (
            <div className="ml-5 pl-2.5 border-l border-sow-border space-y-1 pt-1 pb-1">
              {guideSubItems.map((sub) => {
                const SubIcon = sub.icon;
                const isSubActive = activeTab === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                      isSubActive
                        ? 'text-sprout bg-sow-dark font-bold shadow-sm'
                        : 'text-mist hover:text-seedling hover:bg-sow/50'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <SubIcon className={`w-3.5 h-3.5 shrink-0 ${isSubActive ? 'text-sprout' : 'text-mist'}`} />
                      <span className="truncate">{sub.label}</span>
                    </div>
                    {isSubActive && <span className="w-1 h-1 rounded-full bg-sprout shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. Efsanevi Eşyalar */}
        <button
          onClick={() => handleNavClick('legendary')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'legendary'
              ? 'bg-terracotta text-seedling shadow-terracotta'
              : 'text-mist hover:text-seedling hover:bg-sow'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Sparkles className={`w-4 h-4 ${activeTab === 'legendary' ? 'text-sprout' : 'text-mist'}`} />
            <span>Efsanevi Eşyalar</span>
          </div>
          {activeTab === 'legendary' && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
        </button>

        {/* 6. Sunucu Komutları */}
        <button
          onClick={() => handleNavClick('commands')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'commands'
              ? 'bg-terracotta text-seedling shadow-terracotta'
              : 'text-mist hover:text-seedling hover:bg-sow'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Terminal className={`w-4 h-4 ${activeTab === 'commands' ? 'text-sprout' : 'text-mist'}`} />
            <span>Sunucu Komutları</span>
          </div>
          {activeTab === 'commands' && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
        </button>

      </div>

      {/* Minimalist Footer Creator Tag (Sade, Dikkat Çekmeyen Tek Satır) */}
      <div className="p-3 border-t border-sow-border/60 text-center">
        <a
          href="https://www.instagram.com/cakjrr"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-mist hover:text-seedling transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5 text-terracotta-light" />
          <span>@cakjrr</span>
        </a>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Fixed Sidebar */}
      <aside className="hidden lg:block w-64 fixed top-0 left-0 bottom-0 z-40">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-72 max-w-xs h-full z-10 shadow-2xl animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
