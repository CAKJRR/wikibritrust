import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SkillSection from './components/SkillSection';
import ProgressionSection from './components/ProgressionSection';
import LegendarySection from './components/LegendarySection';
import CommandsSection from './components/CommandsSection';
import PlaySection from './components/PlaySection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // Default is 'home' (Genel Bakış)
  const [selectedTree, setSelectedTree] = useState('Gathercraft');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabTitles = {
    home: 'Genel Bakış & Başlangıç',
    play: 'Nasıl Oynanır',
    skills: 'Yetenek Ağacı (Worlds V2)',
    early: 'Başlangıç Rehberleri',
    mid: 'Orta Seviye Rehberler',
    endgame: 'İleri Seviye Rehberler',
    legendary: 'Efsanevi Eşyalar & Tamir',
    commands: 'Sunucu Komutları',
  };

  return (
    <div className="min-h-screen bg-sow-dark text-seedling flex font-sans selection:bg-terracotta selection:text-seedling">
      
      {/* 1. Sol Sidebar (Desktop Sabit, Mobilde Açılır Çekmece) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedTree={selectedTree}
        setSelectedTree={setSelectedTree}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* 2. Sağ Ana İçerik Alanı (Sidebar genişliği kadar sola boşluk) */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        
        {/* Üst Bar (Sadeleştirilmiş, Repo Linki Yok, Arama + Menü Butonu) */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setMobileOpen={setMobileOpen}
          activeTabTitle={tabTitles[activeTab]}
        />

        {/* Ana İçerik Sayfası */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Anasayfa / Genel Bakış (Varsayılan Açılış) */}
          {activeTab === 'home' && (
            <HomeSection
              setActiveTab={setActiveTab}
              setSelectedTree={setSelectedTree}
            />
          )}

          {/* Nasıl Oynanır (Sunucuya Bağlanma) */}
          {activeTab === 'play' && (
            <PlaySection setActiveTab={setActiveTab} />
          )}

          {/* Yetenek Ağacı (Oyun İçi Düğüm Haritası + Kartlar) */}
          {activeTab === 'skills' && (
            <SkillSection
              searchQuery={searchQuery}
              selectedTree={selectedTree}
              setSelectedTree={setSelectedTree}
            />
          )}

          {/* Erken Oyun (Early Game) */}
          {activeTab === 'early' && (
            <ProgressionSection stage="early" searchQuery={searchQuery} setActiveTab={setActiveTab} setSelectedTree={setSelectedTree} />
          )}

          {/* Orta Oyun (Mid Game) */}
          {activeTab === 'mid' && (
            <ProgressionSection stage="mid" searchQuery={searchQuery} setActiveTab={setActiveTab} setSelectedTree={setSelectedTree} />
          )}

          {/* Oyun Sonu (Endgame) */}
          {activeTab === 'endgame' && (
            <ProgressionSection stage="endgame" searchQuery={searchQuery} setActiveTab={setActiveTab} setSelectedTree={setSelectedTree} />
          )}

          {/* Efsanevi Eşyalar & Tamir */}
          {activeTab === 'legendary' && (
            <LegendarySection />
          )}

          {/* Sunucu Komutları */}
          {activeTab === 'commands' && (
            <CommandsSection />
          )}

        </main>

        {/* Sadeleştirilmiş Footer (Sadece Logo & Instagram @cakjrr) */}
        <Footer />

      </div>

    </div>
  );
}
