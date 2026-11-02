import React from 'react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sow-border bg-sow-dark/95 py-10 text-xs text-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Footer: Logo, Brand & Instagram */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-sow-border/60">
          
          <div className="flex items-center gap-3">
            <div className="h-10 px-2 rounded-xl bg-sow-card border border-terracotta/40 shadow-sm flex items-center justify-center shrink-0">
              <img
                src="/cakjrr.png"
                alt="CAKJRR Logo"
                className="h-8 w-auto max-w-[120px] object-contain rounded"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-seedling text-sm">CAKJRR • Brit Rust Türkçe Ansiklopedisi</p>
              <p className="text-[11px] text-mist">Brits PvE Worlds V2 oyuncu topluluğu için hazırlanmıştır.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/cakjrr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sow-card border border-sow-border text-xs font-semibold text-seedling hover:bg-sow hover:border-terracotta/50 transition-all shadow-sm group"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta-light group-hover:text-sprout transition-colors" />
              <span>Instagram: <strong className="text-seedling font-bold">@cakjrr</strong></span>
            </a>
          </div>

        </div>

        {/* Bottom Credits & Disclaimer: Facepunch & Brits PvE */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-mist/80">
          <p className="text-center sm:text-left">
            Rust, <strong>Facepunch Studios</strong>'un tescilli ticari markasıdır. Bu rehber <strong>Brits PvE Worlds</strong> topluluğu için <strong>CAKJRR</strong> tarafından bağımsız olarak geliştirilmiş gayriresmî bir oyuncu kılavuzudur.
          </p>
          <div className="flex items-center gap-3 shrink-0 text-mist">
            <span className="text-terracotta-light font-semibold">Brits PvE Worlds V2</span>
            <span>•</span>
            <span className="text-sprout font-semibold">Facepunch Studios</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
