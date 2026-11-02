import React from 'react';
import { Menu } from 'lucide-react';

export default function Header({ setMobileOpen, activeTabTitle }) {
  return (
    <header className="sticky top-0 z-30 bg-sow-dark/95 backdrop-blur-md border-b border-sow-border/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Mobile Menu Button + Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-sow-card border border-sow-border text-mist hover:text-seedling"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <span className="font-serif font-bold text-base sm:text-lg text-seedling">
                {activeTabTitle || 'Kılavuz'}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sprout/15 text-sprout text-[11px] font-bold border border-sprout/20">
                <span className="w-1.5 h-1.5 rounded-full bg-sprout animate-pulse" />
                Worlds V2 Canlı
              </span>
            </div>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2 text-xs text-mist font-mono">
            <span className="hidden md:inline">Brits PvE Worlds</span>
            <span className="hidden md:inline text-sow-border">•</span>
            <span className="text-sprout font-semibold">Topluluk Ansiklopedisi</span>
          </div>

        </div>
      </div>
    </header>
  );
}
