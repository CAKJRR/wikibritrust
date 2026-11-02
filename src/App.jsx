import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import SkillSection from './components/SkillSection';
import BossesSection from './components/BossesSection';
import FarmingSection from './components/FarmingSection';
import LegendarySection from './components/LegendarySection';
import CommandsSection from './components/CommandsSection';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuickFilter = (keyword) => {
    if (keyword === 'God-Tier') {
      setActiveTab('skills');
      setSearchQuery('');
    } else if (keyword === 'Harbinger') {
      setActiveTab('bosses');
      setSearchQuery('');
    } else if (keyword === 'Cloth') {
      setActiveTab('farming');
      setSearchQuery('');
    } else if (keyword === 'Extra Magical') {
      setActiveTab('legendary');
      setSearchQuery('');
    }
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sow-dark text-seedling flex flex-col font-sans selection:bg-terracotta selection:text-seedling">
      
      {/* Top Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Hero Welcome Banner */}
        <HeroBanner onQuickFilter={handleQuickFilter} />

        {/* Dynamic Tab Views */}
        {activeTab === 'skills' && (
          <SkillSection searchQuery={searchQuery} />
        )}

        {activeTab === 'bosses' && (
          <BossesSection />
        )}

        {activeTab === 'farming' && (
          <FarmingSection />
        )}

        {activeTab === 'legendary' && (
          <LegendarySection />
        )}

        {activeTab === 'commands' && (
          <CommandsSection />
        )}

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
