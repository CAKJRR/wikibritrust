import React, { useState, useEffect } from 'react';
import { PROGRESSION_GUIDES } from '../data/guides';
import { ArrowLeft, ChevronRight, ExternalLink, Info } from 'lucide-react';

// Tailwind'in sınıfları görebilmesi için tam sınıf adları burada yazılı.
const ACCENTS = {
  sprout: { text: 'text-sprout', border: 'border-sprout/40', bg: 'bg-sprout/10' },
  'terracotta-light': { text: 'text-terracotta-light', border: 'border-terracotta-light/40', bg: 'bg-terracotta-light/10' },
  terracotta: { text: 'text-terracotta', border: 'border-terracotta/50', bg: 'bg-terracotta/10' },
};

export default function ProgressionSection({ stage = 'early', searchQuery = '', setActiveTab, setSelectedTree }) {
  const category = PROGRESSION_GUIDES[stage] || PROGRESSION_GUIDES.early;
  const accent = ACCENTS[category.accent] || ACCENTS.sprout;
  const [openId, setOpenId] = useState(null);

  // Sekme değişince listeye dön
  useEffect(() => {
    setOpenId(null);
  }, [stage]);

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

  const openGuide = category.guides.find((g) => g.id === openId);

  const goToLink = (link) => {
    if (!setActiveTab) return;
    setActiveTab(link.tab);
    if (link.tab === 'skills' && setSelectedTree) setSelectedTree('Gathercraft');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---------------- Rehber detay sayfası ----------------
  if (openGuide) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => {
            setOpenId(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-mist hover:text-seedling transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {category.categoryLead} {category.categoryTail}
          </span>
        </button>

        <div className="rounded-3xl bg-sow-card border border-sow-border p-6 sm:p-8 shadow-warm">
          <div className="pb-5 border-b border-sow-border">
            <span className={`text-xs font-bold tracking-wide ${accent.text} block mb-1.5`}>{openGuide.badge}</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-seedling mb-2">{openGuide.title}</h2>
            <p className="text-sm text-seedling-muted leading-relaxed">{openGuide.summary}</p>
          </div>

          <div className="space-y-7 pt-6">
            {openGuide.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-3">
                <h3 className="font-serif text-lg font-bold text-seedling">{section.heading}</h3>

                {section.intro && (
                  <p className="text-sm text-seedling-muted leading-relaxed">{section.intro}</p>
                )}

                {section.items && (
                  <ul className="space-y-2.5">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-sm text-seedling-muted leading-relaxed">
                        {section.ordered ? (
                          <span className="w-5 h-5 rounded-lg bg-terracotta/20 text-terracotta-light border border-terracotta/30 flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                            {iIdx + 1}
                          </span>
                        ) : (
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.bg} border ${accent.border} shrink-0 mt-2`} />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <div className="flex items-start gap-2.5 rounded-xl bg-sow-dark/80 border border-sow-border p-3.5 text-xs text-seedling-muted leading-relaxed">
                    <Info className={`w-4 h-4 shrink-0 mt-0.5 ${accent.text}`} />
                    <span>{section.note}</span>
                  </div>
                )}
              </section>
            ))}
          </div>

          {openGuide.link && (
            <div className="pt-6 mt-7 border-t border-sow-border">
              <button
                onClick={() => goToLink(openGuide.link)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sow-dark border border-sow-border hover:border-terracotta/50 text-xs font-semibold text-terracotta-light transition-all"
              >
                <span>{openGuide.link.label}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ---------------- Kategori + kart listesi ----------------
  return (
    <div className="space-y-6">
      {/* Kategori başlığı (resmi sitedeki "BEGINNER GUIDES" düzeni) */}
      <div className={`rounded-2xl bg-sow-card border ${accent.border} px-5 py-5 sm:px-6 shadow-warm`}>
        <h2 className="font-sans text-lg sm:text-xl font-extrabold tracking-wide text-seedling">
          <span className={accent.text}>{category.categoryLead}</span> {category.categoryTail}
        </h2>
        <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mt-1.5">{category.subtitle}</p>
      </div>

      {guides.length === 0 ? (
        <div className="rounded-2xl bg-sow-card border border-sow-border p-8 text-center text-sm text-mist">
          "{searchQuery}" ile eşleşen bir rehber bulunamadı.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => {
                setOpenId(guide.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left cursor-pointer rounded-2xl p-5 border border-sow-border bg-sow-card hover:border-terracotta/60 hover:bg-sow-card/90 transition-all duration-200 flex flex-col justify-between gap-4 group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-seedling leading-snug">{guide.title}</h3>
                  <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-md bg-sow-dark ${accent.text} border border-sow-border shrink-0`}>
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
  );
}
