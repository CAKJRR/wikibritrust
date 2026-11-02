import React, { useState, useMemo } from 'react';
import { SKILLS_DATA } from '../data/skills';
import VisualTree from './VisualTree';
import { Pickaxe, Shield, Swords, Truck, CheckCircle2, LayoutGrid, Network } from 'lucide-react';

export default function SkillSection({ searchQuery, selectedTree, setSelectedTree }) {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' is default for in-game visual look

  const trees = [
    { id: 'Gathercraft', label: 'Gathercraft', icon: Pickaxe },
    { id: 'Survivalcraft', label: 'Survivalcraft', icon: Shield },
    { id: 'Combat', label: 'Combat', icon: Swords },
    { id: 'Vehicles', label: 'Vehicles', icon: Truck },
  ];

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchTree = selectedTree === 'ALL' || skill.tree === selectedTree;
      const matchSearch =
        !searchQuery ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.benefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.synergy.toLowerCase().includes(searchQuery.toLowerCase());

      return matchTree && matchSearch;
    });
  }, [selectedTree, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Top Controls: Tree Selector + Visual/Grid View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-sow-card/90 border border-sow-border rounded-2xl p-4 shadow-warm">
        
        {/* Tree Tabs */}
        <div className="flex flex-wrap gap-2">
          {trees.map((tree) => {
            const Icon = tree.icon;
            const isSelected = selectedTree === tree.id;
            return (
              <button
                key={tree.id}
                onClick={() => setSelectedTree(tree.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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

        {/* View Switcher: Interactive Tree vs Cards */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-sow-dark p-1 rounded-xl border border-sow-border">
          <button
            onClick={() => setViewMode('tree')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'tree'
                ? 'bg-terracotta text-seedling shadow-sm'
                : 'text-mist hover:text-seedling'
            }`}
          >
            <Network className="w-3.5 h-3.5 text-sprout" />
            <span>🎮 Oyun İçi Ağaç</span>
          </button>

          <button
            onClick={() => setViewMode('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'cards'
                ? 'bg-terracotta text-seedling shadow-sm'
                : 'text-mist hover:text-seedling'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>📋 Kart Listesi</span>
          </button>
        </div>

      </div>

      {/* --- GÖRÜNÜM 1: OYUN İÇİ AĞAÇ DÜZENİ (TAM OYUN ARAYÜZÜ) --- */}
      {viewMode === 'tree' && (
        <VisualTree activeTree={selectedTree} setActiveTree={setSelectedTree} />
      )}

      {/* --- GÖRÜNÜM 2: KART / LİSTE DÜZENİ (OBJEKTİF WİKİ DOKÜMANTASYONU) --- */}
      {viewMode === 'cards' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group flex flex-col justify-between rounded-2xl bg-sow-card border border-sow-border hover:border-terracotta/40 p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
              >
                <div>
                  {/* Top: Header & Cost */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[11px] font-semibold text-mist tracking-wider block mb-1">
                        {skill.tree} • {skill.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-seedling group-hover:text-terracotta-light transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded-lg border border-sow-border shrink-0">
                      {skill.cost}
                    </span>
                  </div>

                  {/* Benefit Box */}
                  <div className="bg-sow-dark/70 rounded-xl px-3.5 py-2 border border-sow-border mb-3.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-mist block">
                      YETENEK ETKİSİ
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
                      <span>{skill.synergy}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
