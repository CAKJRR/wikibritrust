import React, { useState, useEffect } from 'react';
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
  ChevronDown 
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

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

      {/* Search Input in Sidebar */}
      <div className="p-3 border-b border-sow-border/60">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-mist absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rehberde ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-sow-dark border border-sow-border rounded-xl pl-8 pr-3 py-2 text-xs text-seedling placeholder-mist/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
          />
        </div>
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

        {/* 4. REHBERLER (Ana Menü - Accordion Açılır Kapanır) */}
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

      {/* Footer Profile / Instagram */}
      <div className="p-3 border-t border-sow-border bg-sow-dark/70">
        <a
          href="https://www.instagram.com/cakjrr"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-2.5 rounded-xl bg-sow-card border border-sow-border hover:border-terracotta/50 transition-all group"
        >
          <div className="flex items-center gap-2.5">
            <InstagramIcon className="w-4 h-4 text-terracotta-light group-hover:text-sprout transition-colors" />
            <div className="text-left">
              <span className="text-[11px] font-bold text-seedling block leading-tight">CAKJRR</span>
              <span className="text-[10px] text-mist block">@cakjrr</span>
            </div>
          </div>
          <span className="text-[10px] font-bold text-sprout bg-sprout/10 px-2 py-0.5 rounded-md border border-sprout/20">
            Instagram
          </span>
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
