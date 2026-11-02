import React from 'react';
import { Search, Swords, ShieldAlert, Coins, Sparkles, Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Header({ activeTab, setActiveTab, searchQuery, setSearchQuery }) {
  const navItems = [
    { id: 'skills', label: 'Yetenek Ağacı', icon: Swords },
    { id: 'bosses', label: 'Bosslar & Etkinlikler', icon: ShieldAlert },
    { id: 'farming', label: 'RP & Para Metası', icon: Coins },
    { id: 'legendary', label: 'Efsanevi & Tamir', icon: Sparkles },
    { id: 'commands', label: 'Komutlar', icon: Terminal },
  ];

  return (
    <header className="sticky top-0 z-50 bg-sow-dark/95 backdrop-blur-md border-b border-sow-border shadow-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setActiveTab('skills')}>
            <div className="relative group">
              <img
                src="/cakjrr.png"
                alt="CAKJRR Logo"
                className="w-12 h-12 rounded-2xl object-cover bg-sow-card border-2 border-terracotta/40 shadow-terracotta group-hover:border-sprout transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-sprout border-2 border-sow-dark flex items-center justify-center" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-extrabold text-xl tracking-tight text-seedling">
                  CAKJRR <span className="text-terracotta text-lg font-sans font-bold">/</span> Wiki
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-sprout/20 text-sprout border border-sprout/30">
                  Worlds V2
                </span>
              </div>
              <p className="text-[11px] text-mist font-medium">Brit Rust Türkçe Ansiklopedisi</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <Search className="w-4 h-4 text-mist absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Yetenek, boss, eşya veya taktik ara... (örn: Shatterpoint, Harbinger, RP)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sow-card border border-sow-border rounded-xl pl-10 pr-4 py-2 text-sm text-seedling placeholder-mist/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mist hover:text-seedling font-medium"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Profile & GitHub */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/CAKJRR/wikibritrust"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sow-card border border-sow-border text-xs font-semibold text-seedling hover:bg-sow hover:border-terracotta/50 transition-all shadow-sm"
              title="GitHub Reposu"
            >
              <GithubIcon className="w-4 h-4 text-terracotta-light" />
              <span className="hidden sm:inline">CAKJRR / Repo</span>
            </a>
          </div>

        </div>

        {/* Mobile Search */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="w-4 h-4 text-mist absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ara (örn: Shatterpoint, Harbinger, RP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sow-card border border-sow-border rounded-xl pl-10 pr-4 py-2 text-sm text-seedling placeholder-mist/70 focus:outline-none focus:border-terracotta"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-terracotta text-seedling shadow-terracotta'
                    : 'text-mist hover:text-seedling hover:bg-sow-card'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-sprout' : 'text-mist'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
