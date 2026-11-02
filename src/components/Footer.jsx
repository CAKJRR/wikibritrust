import React from 'react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-sow-border bg-sow-dark/95 py-8 text-xs text-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Top: Logo & Minimal Creator Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-sow-border/50">
          <div className="flex items-center gap-3">
            <div className="h-9 px-2 rounded-xl bg-sow-card border border-terracotta/30 shadow-sm flex items-center justify-center shrink-0">
              <img
                src="/cakjrr.png"
                alt="CAKJRR Logo"
                className="h-7 w-auto max-w-[100px] object-contain rounded"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-seedling text-sm">Brits Rust Türkçe Ansiklopedisi</p>
              <p className="text-[11px] text-mist">Brits PvE Worlds V2 oyuncu topluluğu için hazırlanmıştır.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-mist">Topluluk Geliştirici:</span>
            <a
              href="https://www.instagram.com/cakjrr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-seedling hover:text-sprout transition-colors font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-terracotta-light" />
              <span>@cakjrr</span>
            </a>
          </div>
        </div>

        {/* Official Bilingual Disclaimer Box */}
        <div className="rounded-2xl bg-sow-card/80 border border-sow-border/80 p-4 text-xs text-mist leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-seedling font-semibold">
            <span className="text-terracotta-light">✦</span>
            <span>Topluluk &amp; Sorumluluk Reddi Beyanı (Community Disclaimer)</span>
          </div>
          <p className="text-[11px] text-mist/90">
            <strong className="text-seedling font-mono font-semibold">TR:</strong> Bu web sitesi, <em>Brits PvE Worlds V2</em> oyuncuları için bağımsız olarak hazırlanmış, kâr amacı gütmeyen gayriresmî bir Türkçe topluluk rehberidir. <em>Brits PvE Worlds</em> yönetimi veya <em>Facepunch Studios</em> ile doğrudan resmi bir kurumsal ortaklığı ya da sponsorluğu bulunmamaktadır. Tüm oyun içi ticari markalar, isimler ve varlıklar ilgili hak sahiplerine aittir.
          </p>
          <p className="text-[11px] text-mist/75 italic">
            <strong className="text-seedling font-mono font-semibold not-italic">EN:</strong> This is an independent, non-profit, fan-made community documentation created for players of <em>Brits PvE Worlds V2</em>. We are not officially affiliated with, endorsed by, or sponsored by Brits PvE Worlds administration or Facepunch Studios. All in-game trademarks, assets, and names belong to their respective owners.
          </p>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[11px] text-mist/70">
          <p className="text-center sm:text-left">
            Rust © <strong>Facepunch Studios</strong>. Brits PvE Worlds V2 Türkçe Topluluk Kılavuzu.
          </p>
          <div className="flex items-center gap-2 shrink-0 text-mist">
            <span className="text-terracotta-light">Brits PvE Worlds V2</span>
            <span>•</span>
            <span className="text-sprout">Community Fan Project</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
