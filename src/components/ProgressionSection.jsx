import React from 'react';
import { PROGRESSION_GUIDES, ALL_OFFICIAL_GUIDES } from '../data/guides';
import { ArrowLeft, ChevronRight, ExternalLink, Info, BookOpen } from 'lucide-react';

const ACCENTS = {
  sprout: { 
    text: 'text-sprout', 
    border: 'border-sprout/40', 
    bg: 'bg-sprout/10',
    titleColor: 'text-sprout'
  },
  'terracotta-light': { 
    text: 'text-terracotta-light', 
    border: 'border-terracotta-light/40', 
    bg: 'bg-terracotta-light/10',
    titleColor: 'text-terracotta-light'
  },
  terracotta: { 
    text: 'text-terracotta', 
    border: 'border-terracotta/50', 
    bg: 'bg-terracotta/10',
    titleColor: 'text-terracotta'
  },
};

export default function ProgressionSection({ 
  stage = 'early', 
  activeGuideId = null,
  setActiveGuideId,
  searchQuery = '', 
  setActiveTab, 
  setSelectedTree 
}) {
  const category = PROGRESSION_GUIDES[stage] || PROGRESSION_GUIDES.early;
  const accent = ACCENTS[category.accent] || ACCENTS.sprout;

  // Rehberi aktif kategori veya tüm rehberler içinde bul
  const openGuide = activeGuideId 
    ? (
        category.guides.find((g) => g.id === activeGuideId) ||
        PROGRESSION_GUIDES.early.guides.find((g) => g.id === activeGuideId) ||
        PROGRESSION_GUIDES.mid.guides.find((g) => g.id === activeGuideId) ||
        PROGRESSION_GUIDES.endgame.guides.find((g) => g.id === activeGuideId)
      )
    : null;

  const query = searchQuery.trim().toLocaleLowerCase('tr');
  const guides = query
    ? category.guides.filter((g) => {
        const text = [g.title, g.summary, g.badge, ...g.sections.flatMap((s) => [s.heading, s.intro, ...(s.items || [])])]
          .filter(Boolean)
          .join(' ')
          .toLocaleLowerCase('tr');
        return text.includes(query);
      })
    : category.guides;

  const handleSelectGuide = (guideId, guideStage) => {
    if (setActiveGuideId) setActiveGuideId(guideId);
    if (guideStage && guideStage !== stage && setActiveTab) {
      setActiveTab(guideStage);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    if (setActiveGuideId) setActiveGuideId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLink = (link) => {
    if (!setActiveTab) return;
    setActiveTab(link.tab);
    if (link.tab === 'skills' && setSelectedTree) setSelectedTree('Gathercraft');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Sağ Taraf Rehber Dizini Menüsü ---
  const renderGuidesSidebar = () => (
    <div className="bg-sow-card border border-sow-border rounded-2xl p-5 shadow-warm space-y-3 sticky top-20">
      <div className="flex items-center justify-between pb-3 border-b border-sow-border">
        <h4 className="font-serif text-lg font-bold text-seedling flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-sprout" />
          <span>Rehber Dizini</span>
        </h4>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sow-dark border border-sow-border text-mist">
          {ALL_OFFICIAL_GUIDES.length}
        </span>
      </div>

      <nav className="space-y-1 max-h-[75vh] overflow-y-auto pr-1">
        {ALL_OFFICIAL_GUIDES.map((item) => {
          const isCurrent = openGuide?.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectGuide(item.id, item.stage)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between group ${
                isCurrent
                  ? 'bg-terracotta text-seedling font-bold shadow-terracotta'
                  : 'text-mist hover:text-seedling hover:bg-sow'
              }`}
            >
              <span className="truncate">{item.title}</span>
              <span className={`text-[10px] shrink-0 ml-2 px-1.5 py-0.5 rounded ${
                isCurrent 
                  ? 'bg-seedling/20 text-seedling' 
                  : 'bg-sow-dark text-mist/60 group-hover:text-mist'
              }`}>
                {item.category}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );

  // ==========================================================
  // 1. REHBER DETAY GÖRÜNÜMÜ (TEK REHBER OKUMA)
  // ==========================================================
  if (openGuide) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sol Ana Kolon */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          
          {/* Geri Dön Butonu */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center gap-2 text-xs font-semibold text-mist hover:text-seedling transition-colors bg-sow-card px-3.5 py-2 rounded-xl border border-sow-border hover:border-terracotta/40"
          >
            <ArrowLeft className="w-4 h-4 text-sprout" />
            <span>&larr; Rehber Listesine Dön</span>
          </button>

          {/* Ana Rehber Dokümantasyon Kartı */}
          <article className="rounded-3xl bg-sow-card border border-sow-border p-6 sm:p-8 shadow-warm space-y-6">
            
            {/* Üst Başlık & Badge */}
            <header className="pb-6 border-b border-sow-border">
              <span className={`text-xs font-bold tracking-wider uppercase ${accent.text} block mb-2`}>
                {openGuide.badge}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-seedling mb-3 leading-tight">
                {openGuide.title}
              </h1>
              <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed max-w-4xl">
                {openGuide.summary}
              </p>
            </header>

            {/* İçerik Bölümleri */}
            <div className="space-y-8 pt-2">
              {openGuide.sections.map((section, sIdx) => (
                <section key={sIdx} className="space-y-3.5">
                  <h3 className="font-serif text-xl font-bold text-seedling flex items-center gap-2.5">
                    <span className="w-1.5 h-4 rounded-full bg-sprout" />
                    <span>{section.heading}</span>
                  </h3>

                  {section.intro && (
                    <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed font-normal">
                      {section.intro}
                    </p>
                  )}

                  {section.items && (
                    <ul className="space-y-3 pt-1">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3 text-xs sm:text-sm text-seedling-muted leading-relaxed">
                          {section.ordered ? (
                            <span className="w-5 h-5 rounded-lg bg-terracotta/20 text-terracotta-light border border-terracotta/30 flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                              {iIdx + 1}
                            </span>
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full ${accent.bg} border ${accent.border} shrink-0 mt-2`} />
                          )}
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="flex items-start gap-2.5 rounded-xl bg-sow-dark border border-sow-border p-3.5 text-xs text-seedling-muted leading-relaxed">
                      <Info className={`w-4 h-4 shrink-0 mt-0.5 ${accent.text}`} />
                      <span>{section.note}</span>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Dış Sekme Bağlantısı */}
            {openGuide.link && (
              <footer className="pt-6 mt-6 border-t border-sow-border">
                <button
                  onClick={() => goToLink(openGuide.link)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sow-dark border border-sow-border hover:border-terracotta/50 text-xs font-semibold text-terracotta-light transition-all shadow-sm"
                >
                  <span>{openGuide.link.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sprout" />
                </button>
              </footer>
            )}
          </article>

        </div>

        {/* Sağ Kolon: Rehber Dizini Menüsü */}
        <aside className="lg:col-span-4 xl:col-span-3">
          {renderGuidesSidebar()}
        </aside>

      </div>
    );
  }

  // ==========================================================
  // 2. KATEGORİ GENEL BAKIŞ GÖRÜNÜMÜ (KART LİSTESİ)
  // ==========================================================
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Sol Ana Kolon */}
      <div className="lg:col-span-8 xl:col-span-9 space-y-6">
        
        {/* Kategori Başlık Banner'ı */}
        <div className={`rounded-2xl bg-sow-card border ${accent.border} px-6 py-6 shadow-warm`}>
          <h2 className="font-sans text-xl sm:text-2xl font-black tracking-wider uppercase text-seedling">
            <span className={accent.titleColor}>{category.categoryLead}</span> {category.categoryTail}
          </h2>
          <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mt-2">{category.subtitle}</p>
        </div>

        {/* Kartlar Izgarası (Sade ve Temiz) */}
        {guides.length === 0 ? (
          <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
            "{searchQuery}" ile eşleşen bir rehber bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => handleSelectGuide(guide.id, stage)}
                className="text-left cursor-pointer rounded-2xl p-5 border border-sow-border bg-sow-card hover:border-terracotta/60 hover:bg-sow-card/90 transition-all duration-200 flex flex-col justify-between gap-4 group shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-seedling leading-snug group-hover:text-sprout transition-colors">
                      {guide.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md bg-sow-dark ${accent.text} border border-sow-border shrink-0`}>
                      {guide.badge}
                    </span>
                  </div>
                  <p className="text-xs text-seedling-muted leading-relaxed line-clamp-3">{guide.summary}</p>
                </div>

                <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs text-terracotta-light font-semibold">
                  <span>Rehberi Oku</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Sağ Kolon: Rehber Dizini Menüsü */}
      <aside className="lg:col-span-4 xl:col-span-3">
        {renderGuidesSidebar()}
      </aside>

    </div>
  );
}
