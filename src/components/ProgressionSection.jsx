import React, { useState } from 'react';
import { PROGRESSION_GUIDES } from '../data/guides';
import { Compass, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ProgressionSection({ stage = 'early' }) {
  const guide = PROGRESSION_GUIDES[stage] || PROGRESSION_GUIDES.early;
  const [activeItemIdx, setActiveItemIdx] = useState(0);

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-sow-card/90 border border-sow-border rounded-2xl p-5 sm:p-6 shadow-warm">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-sprout bg-sprout/10 px-2.5 py-0.5 rounded-full border border-sprout/20">
            {guide.subtitle}
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-seedling mb-2">
          {guide.title}
        </h2>
        <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed">
          {guide.desc}
        </p>
      </div>

      {/* Guide Cards Grid (Kullanıcının gönderdiği resimdeki sade wiki düzeni) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {guide.items.map((item, idx) => {
          const isSelected = activeItemIdx === idx;

          return (
            <div
              key={idx}
              onClick={() => setActiveItemIdx(idx)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-sow-card via-sow to-redwood-dark/40 border-terracotta shadow-terracotta'
                  : 'bg-sow-card border-sow-border hover:border-mist/40'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-seedling">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-sow-dark text-sprout border border-sow-border shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs text-seedling-muted line-clamp-2 mb-4">
                  {item.content[0]}
                </p>
              </div>

              <div className="pt-3 border-t border-sow-border/60 flex items-center justify-between text-xs text-terracotta-light font-semibold">
                <span>Detayları İncele</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Expanded View for Selected Guide */}
      {guide.items[activeItemIdx] && (
        <div className="rounded-3xl bg-sow-card border border-terracotta/40 p-6 sm:p-8 shadow-warm space-y-4">
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-sow-border">
            <div>
              <span className="text-xs font-semibold text-sprout block mb-1">
                KILAVUZ DETAYI • {guide.items[activeItemIdx].badge}
              </span>
              <h3 className="font-serif text-2xl font-bold text-seedling">
                {guide.items[activeItemIdx].title}
              </h3>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {guide.items[activeItemIdx].content.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-seedling-muted leading-relaxed">
                <span className="w-5 h-5 rounded-lg bg-terracotta/20 text-terracotta-light border border-terracotta/30 flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                  {pIdx + 1}
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
