import React, { useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/skills';
import { Pickaxe, Shield, Swords, Truck, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function SkillSection({ searchQuery }) {
  const [selectedTree, setSelectedTree] = useState('ALL');
  const [selectedTier, setSelectedTier] = useState('ALL');

  const trees = [
    { id: 'ALL', label: 'Tüm Ağaçlar', icon: Sparkles },
    { id: 'Gathercraft', label: 'Gathercraft', icon: Pickaxe, color: 'text-terracotta' },
    { id: 'Survivalcraft', label: 'Survivalcraft', icon: Shield, color: 'text-sprout' },
    { id: 'Combat', label: 'Combat', icon: Swords, color: 'text-redwood-light' },
    { id: 'Vehicles', label: 'Vehicles', icon: Truck, color: 'text-rainfall-light' },
  ];

  const tiers = ['ALL', 'God-Tier', 'S-Tier', 'A-Tier', 'B-Tier'];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchTree = selectedTree === 'ALL' || skill.tree === selectedTree;
      const matchTier = selectedTier === 'ALL' || skill.tier === selectedTier;
      const matchSearch =
        !searchQuery ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.benefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.synergy.toLowerCase().includes(searchQuery.toLowerCase());

      return matchTree && matchTier && matchSearch;
    });
  }, [selectedTree, selectedTier, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Filters Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-sow-card/80 border border-sow-border rounded-2xl p-4 sm:p-5">
        
        {/* Tree Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {trees.map((tree) => {
            const Icon = tree.icon;
            const isSelected = selectedTree === tree.id;
            return (
              <button
                key={tree.id}
                onClick={() => setSelectedTree(tree.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-terracotta text-seedling shadow-terracotta'
                    : 'bg-sow text-mist hover:text-seedling hover:bg-sow-hover'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tree.label}
              </button>
            );
          })}
        </div>

        {/* Tier Selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          <span className="text-xs text-mist font-medium pr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Seviye:
          </span>
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier;
            return (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-sprout text-sow-dark shadow-sprout font-bold'
                    : 'bg-sow text-mist hover:text-seedling'
                }`}
              >
                {tier === 'ALL' ? 'Hepsi' : tier}
              </button>
            );
          })}
        </div>

      </div>

      {/* Result Count */}
      <div className="flex items-center justify-between text-xs text-mist px-1">
        <span>
          Toplam <strong className="text-seedling">{filteredSkills.length}</strong> yetenek listeleniyor
        </span>
        {selectedTree !== 'ALL' && (
          <span className="text-terracotta-light font-medium">Ağaç: {selectedTree}</span>
        )}
      </div>

      {/* Grid of Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill) => {
          const isGod = skill.tier === 'God-Tier';
          const isS = skill.tier === 'S-Tier';

          return (
            <div
              key={skill.id}
              className={`group flex flex-col justify-between rounded-2xl bg-sow-card border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm ${
                isGod
                  ? 'border-terracotta/50 shadow-terracotta/20 bg-gradient-to-b from-sow-card to-redwood-dark/20'
                  : isS
                  ? 'border-sprout/40'
                  : 'border-sow-border hover:border-mist/30'
              }`}
            >
              <div>
                {/* Card Top: Badges */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[11px] font-semibold text-mist uppercase tracking-wider block mb-1">
                      {skill.tree} • {skill.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-seedling group-hover:text-terracotta-light transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isGod
                          ? 'bg-terracotta text-seedling shadow-sm'
                          : isS
                          ? 'bg-sprout text-sow-dark'
                          : 'bg-sow-dark text-mist border border-sow-border'
                      }`}
                    >
                      {skill.tier}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-mist bg-sow-dark px-2 py-0.5 rounded-md border border-sow-border">
                      {skill.cost}
                    </span>
                  </div>
                </div>

                {/* Benefit Box */}
                <div className="bg-sow-dark/70 rounded-xl px-3.5 py-2 border border-sow-border mb-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-mist block">
                    Temel Etki / Kazanç
                  </span>
                  <span className="font-mono text-sm font-semibold text-sprout">
                    {skill.benefit}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>

              {/* Synergy Footer */}
              {skill.synergy && (
                <div className="mt-auto pt-3 border-t border-sow-border/60">
                  <div className="flex items-start gap-1.5 text-xs text-mist">
                    <CheckCircle2 className="w-3.5 h-3.5 text-terracotta-light shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-seedling font-medium">Sinerji:</strong>{' '}
                      {skill.synergy}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-16 bg-sow-card rounded-2xl border border-sow-border">
          <p className="text-seedling font-serif text-lg mb-2">Aradığınız kriterlere uygun yetenek bulunamadı.</p>
          <p className="text-mist text-xs">Filtreleri veya arama kutusunu temizlemeyi deneyin.</p>
        </div>
      )}

    </div>
  );
}
