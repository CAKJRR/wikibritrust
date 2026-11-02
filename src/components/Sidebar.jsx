import React from 'react';
import { Home, Swords, Sunrise, Scale, Skull, Sparkles, Terminal, Gamepad2, Pickaxe, Shield, Truck, Search, X } from 'lucide-react';
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
  const navItems = [
    { id: 'home', label: 'Genel Bakış', icon: Home },
    { id: 'play', label: 'Nasıl Oynanır', icon: Gamepad2 },
    { id: 'skills', label: 'Yetenek Ağacı', icon: Swords },
    { id: 'early', label: 'Başlangıç Rehberleri', icon: Sunrise },
    { id: 'mid', label: 'Orta Seviye Rehberler', icon: Scale },
    { id: 'endgame', label: 'İleri Seviye Rehberler', icon: Skull },
    { id: 'legendary', label: 'Efsanevi Eşyalar', icon: Sparkles },
    { id: 'commands', label: 'Sunucu Komutları', icon: Terminal },
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

  const content = (
    <div className="flex flex-col h-full bg-sow-card/95 backdrop-blur-md border-r border-sow-border select-none">
      
      {/* Top Logo & Title (Görsel sığacak şekilde 16:9 object-contain) */}
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

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="space-y-1">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-terracotta text-seedling shadow-terracotta'
                    : 'text-mist hover:text-seedling hover:bg-sow'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sprout' : 'text-mist'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sprout" />}
              </button>

              {/* Sub-tree links if on skills tab */}
              {item.id === 'skills' && isActive && (
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
          );
        })}

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
