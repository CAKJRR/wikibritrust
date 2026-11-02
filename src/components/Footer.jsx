import React from 'react';
import GithubIcon from './GithubIcon';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-sow-border bg-sow-dark/80 py-10 text-xs text-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <img
            src="/cakjrr.png"
            alt="CAKJRR Logo"
            className="w-9 h-9 rounded-xl object-cover border border-terracotta/40"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div>
            <p className="font-serif font-bold text-seedling text-sm">CAKJRR • Brit Rust Ansiklopedisi</p>
            <p className="text-[11px] text-mist">Brits PvE Worlds V2 oyuncu topluluğu ve arkadaşlar için hazırlanmıştır.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/CAKJRR/wikibritrust"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-seedling-muted hover:text-seedling transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-terracotta" />
            <span>CAKJRR / wikibritrust</span>
          </a>
          <span>•</span>
          <span className="flex items-center gap-1 text-mist">
            Palette: <span className="text-terracotta font-semibold">Radish Terracotta</span> &amp; <span className="text-sprout font-semibold">Sprout</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
