import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import SkillSection from './components/SkillSection';
import ProgressionSection from './components/ProgressionSection';
import LegendarySection from './components/LegendarySection';
import CommandsSection from './components/CommandsSection';
import PlaySection from './components/PlaySection';
import Footer from './components/Footer';

const TAB_TITLES = {
  home: 'Genel Bakış & Başlangıç',
  play: 'Nasıl Oynanır',
  skills: 'Yetenek Ağacı (Worlds V2)',
  early: 'Başlangıç Rehberleri',
  mid: 'Orta Seviye Rehberler',
  endgame: 'İleri Seviye Rehberler',
  legendary: 'Efsanevi Eşyalar & Tamir',
  commands: 'Sunucu Komutları',
};

// URL Hash ve LocalStorage senkronizasyonu için yardımcı fonksiyon
function parseInitialRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash) {
    const parts = hash.split('/');
    const tabCandidate = parts[0];
    const subCandidate = parts[1] || null;

    if (TAB_TITLES[tabCandidate]) {
      return {
        tab: tabCandidate,
        subId: subCandidate,
      };
    }
  }

  // Hash yoksa LocalStorage kontrolü
  try {
    const savedTab = localStorage.getItem('brits_active_tab');
    const savedSub = localStorage.getItem('brits_sub_id');
    if (savedTab && TAB_TITLES[savedTab]) {
      return {
        tab: savedTab,
        subId: savedSub || null,
      };
    }
  } catch (e) {
    // LocalStorage erişilemezse varsayılan
  }

  return { tab: 'home', subId: null };
}

export default function App() {
  const initial = parseInitialRoute();

  const [activeTab, setActiveTab] = useState(initial.tab);
  const [selectedTree, setSelectedTree] = useState(
    initial.tab === 'skills' && initial.subId ? initial.subId : 'Gathercraft'
  );
  const [activeGuideId, setActiveGuideId] = useState(
    ['early', 'mid', 'endgame'].includes(initial.tab) ? initial.subId : null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sekme veya alt sayfa değiştikçe URL Hash ve LocalStorage'ı güncelle (Sayfa Yenilendiğinde Mevcut Sayfada Kalma Garantisi)
  useEffect(() => {
    try {
      localStorage.setItem('brits_active_tab', activeTab);
      
      if (['early', 'mid', 'endgame'].includes(activeTab)) {
        if (activeGuideId) {
          window.history.replaceState(null, '', `#${activeTab}/${activeGuideId}`);
          localStorage.setItem('brits_sub_id', activeGuideId);
        } else {
          window.history.replaceState(null, '', `#${activeTab}`);
          localStorage.removeItem('brits_sub_id');
        }
      } else if (activeTab === 'skills') {
        window.history.replaceState(null, '', `#skills/${selectedTree}`);
        localStorage.setItem('brits_sub_id', selectedTree);
      } else {
        window.history.replaceState(null, '', `#${activeTab}`);
        localStorage.removeItem('brits_sub_id');
      }
    } catch (e) {
      // LocalStorage hatası olursa sessizce geç
    }
  }, [activeTab, activeGuideId, selectedTree]);

  // Tarayıcı İleri / Geri butonları ve harici link tıklamaları için hash dinleyici
  useEffect(() => {
    const handleHashChange = () => {
      const current = parseInitialRoute();
      setActiveTab(current.tab);
      if (['early', 'mid', 'endgame'].includes(current.tab)) {
        setActiveGuideId(current.subId);
      } else if (current.tab === 'skills' && current.subId) {
        setSelectedTree(current.subId);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Rehber kategorisi doğrudan menüden tıklandığında alt rehber id'sini sıfırlayabilme
  const handleNavTab = (tab) => {
    setActiveTab(tab);
    if (!['early', 'mid', 'endgame'].includes(tab)) {
      setActiveGuideId(null);
    }
  };

  return (
    <div className="min-h-screen bg-sow-dark text-seedling flex font-sans selection:bg-terracotta selection:text-seedling">
      
      {/* 1. Sol Sidebar (Desktop Sabit, Mobilde Açılır Çekmece) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleNavTab}
        selectedTree={selectedTree}
        setSelectedTree={setSelectedTree}
        activeGuideId={activeGuideId}
        setActiveGuideId={setActiveGuideId}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* 2. Sağ Ana İçerik Alanı (Sidebar genişliği kadar sola boşluk) */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        
        {/* Üst Bar (Sadeleştirilmiş, Repo Linki Yok, Menü Butonu) */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setMobileOpen={setMobileOpen}
          activeTabTitle={TAB_TITLES[activeTab] || 'Brits PvE Worlds'}
        />

        {/* Ana İçerik Sayfası */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Anasayfa / Genel Bakış (Varsayılan Açılış) */}
          {activeTab === 'home' && (
            <HomeSection
              setActiveTab={handleNavTab}
              setSelectedTree={setSelectedTree}
            />
          )}

          {/* Nasıl Oynanır (Sunucuya Bağlanma) */}
          {activeTab === 'play' && (
            <PlaySection setActiveTab={handleNavTab} />
          )}

          {/* Yetenek Ağacı (Oyun İçi Yetenek Haritası + Kartlar) */}
          {activeTab === 'skills' && (
            <SkillSection
              searchQuery={searchQuery}
              selectedTree={selectedTree}
              setSelectedTree={setSelectedTree}
            />
          )}

          {/* Erken Oyun (Early Game) */}
          {activeTab === 'early' && (
            <ProgressionSection 
              stage="early" 
              activeGuideId={activeGuideId}
              setActiveGuideId={setActiveGuideId}
              searchQuery={searchQuery} 
              setActiveTab={handleNavTab} 
              setSelectedTree={setSelectedTree} 
            />
          )}

          {/* Orta Oyun (Mid Game) */}
          {activeTab === 'mid' && (
            <ProgressionSection 
              stage="mid" 
              activeGuideId={activeGuideId}
              setActiveGuideId={setActiveGuideId}
              searchQuery={searchQuery} 
              setActiveTab={handleNavTab} 
              setSelectedTree={setSelectedTree} 
            />
          )}

          {/* Oyun Sonu (Endgame) */}
          {activeTab === 'endgame' && (
            <ProgressionSection 
              stage="endgame" 
              activeGuideId={activeGuideId}
              setActiveGuideId={setActiveGuideId}
              searchQuery={searchQuery} 
              setActiveTab={handleNavTab} 
              setSelectedTree={setSelectedTree} 
            />
          )}

          {/* Efsanevi Eşyalar & Tamir */}
          {activeTab === 'legendary' && (
            <LegendarySection searchQuery={searchQuery} />
          )}

          {/* Sunucu Komutları */}
          {activeTab === 'commands' && (
            <CommandsSection searchQuery={searchQuery} />
          )}

        </main>

        {/* Sadeleştirilmiş Footer (Sadece Logo & Instagram @cakjrr) */}
        <Footer />

      </div>

    </div>
  );
}
