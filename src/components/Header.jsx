import React from 'react';
import { Menu, Search, Sparkles } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Header({ searchQuery, setSearchQuery, setMobileOpen, activeTabTitle }) {
  return (
    <header className="sticky top-0 z-30 bg-sow-dark/90 backdrop-blur-md border-b border-sow-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Mobile Menu Button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-sow-card border border-sow-border text-mist hover:text-seedling"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base sm:text-lg text-seedling">
                {activeTabTitle || 'Kılavuz'}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sprout/15 text-sprout text-[11px] font-bold border border-sprout/20">
                <span className="w-1.5 h-1.5 rounded-full bg-sprout animate-pulse" />
                Worlds V2
              </span>
            </div>
          </div>

          {/* Search Bar in Header */}
          <div className="flex-1 max-w-md hidden sm:block relative">
            <Search className="w-4 h-4 text-mist absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Hızlı arama (örn: Shatterpoint, Harbinger, Eldiven)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sow-card border border-sow-border rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-seedling placeholder-mist/70 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all"
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

          {/* Instagram Button on Top Right (Repo Linki Kaldırıldı) */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/cakjrr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sow-card border border-sow-border text-xs font-semibold text-seedling hover:bg-sow hover:border-terracotta/50 transition-all shadow-sm group"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta-light group-hover:text-sprout transition-colors" />
              <span>@cakjrr</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
