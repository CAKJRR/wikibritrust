export const TREE_LAYOUTS = {
  // ==========================================
  // --- 1. GATHERCRAFT ---
  // ==========================================
  Gathercraft: {
    name: 'Gathercraft',
    hubLabel: 'GATHERCRAFT',
    color: '#ce422b',
    nodes: [
      // Mining (Sol Dal)
      { id: 'ore-sense', x: 34, y: 50, name: 'Ore Sense', icon: '📡', rank: '0/1', cost: '5 SP' },
      { id: 'prospector', x: 20, y: 50, name: 'Prospector', icon: '⛏️', rank: '0/3', cost: '1 SP' },
      { id: 'second-strike', x: 6, y: 50, name: 'Second Strike', icon: '🔄', rank: '0/3', cost: '1 SP' },
      { id: 'vein-seeker', x: 20, y: 32, name: 'Vein Seeker', icon: '✦', rank: '0/1', cost: '1 SP' },
      { id: 'shatterpoint', x: 6, y: 32, name: 'Shatterpoint', icon: '⚡', rank: '0/1', cost: '5 SP' },
      { id: 'tempered-steel', x: 20, y: 68, name: 'Tempered Steel', icon: '🛡️', rank: '0/3', cost: '1 SP' },
      
      // Scavenging (Üst Dal)
      { id: 'treasure-hunter', x: 50, y: 30, name: 'Treasure Hunter', icon: '🗺️', rank: '0/1', cost: '1 SP' },
      { id: 'smash-n-grab', x: 50, y: 14, name: "Smash 'N Grab", icon: '📦', rank: '0/1', cost: '1 SP' },
      { id: 'parts-hunter', x: 32, y: 10, name: 'Parts Hunter', icon: '⚙️', rank: '0/3', cost: '1 SP' },
      { id: 'salvage-king', x: 68, y: 10, name: 'Salvage King', icon: '👑', rank: '0/3', cost: '1 SP' },

      // Woodcutting (Sağ Dal)
      { id: 'hardened-edge', x: 66, y: 50, name: 'Hardened Edge', icon: '🪓', rank: '0/3', cost: '1 SP' },
      { id: 'timberfall', x: 80, y: 50, name: 'Timberfall', icon: '🌲', rank: '0/3', cost: '1 SP' },
      { id: 'regrowth', x: 94, y: 50, name: 'Regrowth', icon: '🌱', rank: '0/3', cost: '1 SP' },
      { id: 'felling-blow', x: 80, y: 32, name: 'Felling Blow', icon: '💥', rank: '0/1', cost: '5 SP' },
      { id: 'clearcut', x: 94, y: 32, name: 'Clearcut', icon: '🌳', rank: '0/1', cost: '5 SP' },

      // Recycling, Foraging & Fishing (Alt Dal)
      { id: 'rapid-recycle', x: 50, y: 68, name: 'Rapid Recycle', icon: '♻️', rank: '0/3', cost: '1 SP' },
      { id: 'foragers-fortune', x: 34, y: 82, name: "Forager's Fortune", icon: '🍄', rank: '0/3', cost: '1 SP' },
      { id: 'wild-sense', x: 18, y: 82, name: 'Wild Sense', icon: '🌿', rank: '0/1', cost: '5 SP' },
      { id: 'fishermans-fortune', x: 50, y: 82, name: 'Fisherman Fortune', icon: '🎣', rank: '0/3', cost: '1 SP' },
      { id: 'braided-line', x: 50, y: 95, name: 'Braided Line', icon: '🪢', rank: '0/3', cost: '1 SP' },
      { id: 'tea-party', x: 66, y: 82, name: 'Tea Party', icon: '🫖', rank: '0/1', cost: '5 SP' },
    ],
    connections: [
      { from: 'hub', to: 'ore-sense' },
      { from: 'ore-sense', to: 'prospector' },
      { from: 'prospector', to: 'second-strike' },
      { from: 'prospector', to: 'vein-seeker' },
      { from: 'vein-seeker', to: 'shatterpoint' },
      { from: 'prospector', to: 'tempered-steel' },

      { from: 'hub', to: 'treasure-hunter' },
      { from: 'treasure-hunter', to: 'smash-n-grab' },
      { from: 'smash-n-grab', to: 'parts-hunter' },
      { from: 'smash-n-grab', to: 'salvage-king' },

      { from: 'hub', to: 'hardened-edge' },
      { from: 'hardened-edge', to: 'timberfall' },
      { from: 'timberfall', to: 'regrowth' },
      { from: 'hardened-edge', to: 'felling-blow' },
      { from: 'felling-blow', to: 'clearcut' },

      { from: 'hub', to: 'rapid-recycle' },
      { from: 'rapid-recycle', to: 'foragers-fortune' },
      { from: 'foragers-fortune', to: 'wild-sense' },
      { from: 'rapid-recycle', to: 'fishermans-fortune' },
      { from: 'fishermans-fortune', to: 'braided-line' },
      { from: 'rapid-recycle', to: 'tea-party' },
    ]
  },

  // ==========================================
  // --- 2. SURVIVALCRAFT ---
  // ==========================================
  Survivalcraft: {
    name: 'Survivalcraft',
    hubLabel: 'SURVIVALCRAFT',
    color: '#22c55e',
    nodes: [
      // Health / Healing (Üst Dal)
      { id: 'inspired-decor', x: 50, y: 32, name: 'Inspired Decor', icon: '🛋️', rank: '0/3', cost: '1 SP' },
      { id: 'healing-factor', x: 50, y: 16, name: 'Healing Factor', icon: '❤️', rank: '0/1', cost: '1 SP' },
      { id: 'lazarus-effect', x: 50, y: 5, name: 'Lazarus Effect', icon: '✨', rank: '0/1', cost: '5 SP' },
      { id: 'feather-fall', x: 66, y: 12, name: 'Feather Fall', icon: '🪶', rank: '0/1', cost: '5 SP' },
      { id: 'rejuvenating-presence', x: 34, y: 12, name: 'Rejuvenating', icon: '💖', rank: '0/1', cost: '5 SP' },

      // Skinning & Animals (Sol Dal)
      { id: 'damascus-steel', x: 36, y: 48, name: 'Damascus Steel', icon: '🗡️', rank: '0/3', cost: '1 SP' },
      { id: 'waste-not', x: 22, y: 48, name: 'Waste Not', icon: '🥩', rank: '0/3', cost: '1 SP' },
      { id: 'slice-n-dice', x: 8, y: 48, name: 'Slice \'N Dice', icon: '🔪', rank: '0/1', cost: '1 SP' },
      { id: 'predators-eye', x: 22, y: 32, name: "Predator's Eye", icon: '🐺', rank: '0/1', cost: '5 SP' },

      // Farming (Alt-Sol Dal)
      { id: 'bountiful-harvest', x: 30, y: 68, name: 'Bountiful Harvest', icon: '🌱', rank: '0/1', cost: '1 SP' },
      { id: 'geneticist', x: 14, y: 82, name: 'Geneticist', icon: '🧬', rank: '0/1', cost: '5 SP' },

      // Cooking & Mixing (Alt Dal)
      { id: 'free-refills', x: 50, y: 68, name: 'Free Refills', icon: '🍞', rank: '0/3', cost: '1 SP' },
      { id: 'lightweight', x: 50, y: 84, name: 'Lightweight', icon: '🍵', rank: '0/3', cost: '1 SP' },
      { id: 'mad-hatter', x: 34, y: 94, name: 'Mad Hatter', icon: '🎩', rank: '0/1', cost: '5 SP' },
      { id: 'skilled-chef', x: 66, y: 84, name: 'Skilled Chef', icon: '👨‍🍳', rank: '0/1', cost: '5 SP' },
      { id: 'chemical-chef', x: 82, y: 94, name: 'Chemical Chef', icon: '⚗️', rank: '0/1', cost: '5 SP' },

      // Crafting & Armor (Sağ Dal - Ferah 20% Dikey Aralık)
      { id: 'walking-tank', x: 80, y: 28, name: 'Walking Tank', icon: '🪖', rank: '0/3', cost: '1 SP' },
      { id: 'well-crafted', x: 66, y: 44, name: 'Well Crafted', icon: '🛡️', rank: '0/3', cost: '1 SP' },
      { id: 'made-to-order', x: 80, y: 44, name: 'Made to Order', icon: '⏱️', rank: '0/1', cost: '5 SP' },
      { id: 'refined-blueprints', x: 94, y: 44, name: 'Refined Blueprints', icon: '📜', rank: '0/1', cost: '5 SP' },
      { id: 'almost-up-to-code', x: 66, y: 64, name: 'Almost Up to Code', icon: '📐', rank: '0/3', cost: '1 SP' },
      { id: 'spare-parts', x: 80, y: 64, name: 'Spare Parts', icon: '🔩', rank: '0/3', cost: '1 SP' },
      { id: 'bargain-hunter', x: 94, y: 64, name: 'Bargain Hunter', icon: '💰', rank: '0/1', cost: '1 SP' },
    ],
    connections: [
      { from: 'hub', to: 'inspired-decor' },
      { from: 'inspired-decor', to: 'healing-factor' },
      { from: 'healing-factor', to: 'lazarus-effect' },
      { from: 'healing-factor', to: 'feather-fall' },
      { from: 'healing-factor', to: 'rejuvenating-presence' },

      { from: 'hub', to: 'damascus-steel' },
      { from: 'damascus-steel', to: 'waste-not' },
      { from: 'waste-not', to: 'slice-n-dice' },
      { from: 'waste-not', to: 'predators-eye' },

      { from: 'hub', to: 'bountiful-harvest' },
      { from: 'bountiful-harvest', to: 'geneticist' },

      { from: 'hub', to: 'free-refills' },
      { from: 'free-refills', to: 'lightweight' },
      { from: 'lightweight', to: 'mad-hatter' },
      { from: 'lightweight', to: 'skilled-chef' },
      { from: 'skilled-chef', to: 'chemical-chef' },

      { from: 'hub', to: 'well-crafted' },
      { from: 'well-crafted', to: 'made-to-order' },
      { from: 'made-to-order', to: 'refined-blueprints' },
      { from: 'well-crafted', to: 'walking-tank' },
      { from: 'well-crafted', to: 'almost-up-to-code' },
      { from: 'almost-up-to-code', to: 'spare-parts' },
      { from: 'spare-parts', to: 'bargain-hunter' },
    ]
  },

  // ==========================================
  // --- 3. COMBAT ---
  // ==========================================
  Combat: {
    name: 'Combat',
    hubLabel: 'COMBAT',
    color: '#ef4444',
    nodes: [
      // Explosives & Raid (Üst Dal)
      { id: 'shockwave', x: 50, y: 30, name: 'Shockwave', icon: '💥', rank: '0/3', cost: '1 SP' },
      { id: 'chain-reaction', x: 50, y: 12, name: 'Chain Reaction', icon: '💣', rank: '0/3', cost: '1 SP' },
      { id: 'aerodynamically-sound', x: 32, y: 16, name: 'Aerodynamic', icon: '🚀', rank: '0/1', cost: '5 SP' },
      { id: 'reliable-fuses', x: 16, y: 16, name: 'Reliable Fuses', icon: '🧨', rank: '0/1', cost: '1 SP' },
      { id: 'blastproof', x: 68, y: 16, name: 'Blastproof', icon: '🛡️', rank: '0/1', cost: '1 SP' },
      { id: 'orbital-strike', x: 84, y: 16, name: 'Orbital Strike', icon: '☄️', rank: '0/1', cost: '1 SP' },

      // Vampirism & Animals (Sol Dal)
      { id: 'big-game-hunter', x: 34, y: 50, name: 'Big Game Hunter', icon: '🏹', rank: '0/1', cost: '1 SP' },
      { id: 'thick-hide', x: 20, y: 50, name: 'Thick Hide', icon: '🛡️', rank: '0/1', cost: '1 SP' },
      { id: 'life-leech', x: 6, y: 50, name: 'Life Leech', icon: '🩸', rank: '0/1', cost: '5 SP' },
      { id: 'team-effort', x: 22, y: 66, name: 'Team Effort', icon: '👥', rank: '0/1', cost: '5 SP' },

      // Guns & Ammo (Sağ Dal)
      { id: 'extra-rounds', x: 66, y: 50, name: 'Extra Rounds', icon: '🎯', rank: '0/3', cost: '1 SP' },
      { id: 'elite-manufacturing', x: 80, y: 34, name: 'Elite Manuf.', icon: '🔫', rank: '0/3', cost: '1 SP' },
      { id: 'ammo-rationing', x: 94, y: 34, name: 'Ammo Rationing', icon: '📦', rank: '0/1', cost: '5 SP' },
      { id: 'sixth-sense', x: 80, y: 50, name: 'Sixth Sense', icon: '👁️', rank: '0/1', cost: '5 SP' },
      { id: 'armored', x: 80, y: 66, name: 'Armored', icon: '🪖', rank: '0/3', cost: '1 SP' },
      { id: 'man-hunter', x: 94, y: 66, name: 'Man-Hunter', icon: '🎯', rank: '0/3', cost: '1 SP' },

      // Resistances & Traps (Alt Dal)
      { id: 'hot-blooded', x: 50, y: 68, name: 'Hot Blooded', icon: '🔥', rank: '0/1', cost: '1 SP' },
      { id: 'crawl-out', x: 50, y: 82, name: 'Crawl Out', icon: '☣️', rank: '0/1', cost: '1 SP' },
      { id: 'cold-blooded', x: 50, y: 95, name: 'Cold Blooded', icon: '❄️', rank: '0/1', cost: '1 SP' },
      { id: 'trapwise', x: 32, y: 82, name: 'Trapwise', icon: '🪤', rank: '0/1', cost: '5 SP' },
      { id: 'disarmament', x: 68, y: 82, name: 'Disarmament', icon: '⚡', rank: '0/1', cost: '5 SP' },
    ],
    connections: [
      { from: 'hub', to: 'shockwave' },
      { from: 'shockwave', to: 'chain-reaction' },
      { from: 'shockwave', to: 'aerodynamically-sound' },
      { from: 'aerodynamically-sound', to: 'reliable-fuses' },
      { from: 'shockwave', to: 'blastproof' },
      { from: 'blastproof', to: 'orbital-strike' },

      { from: 'hub', to: 'big-game-hunter' },
      { from: 'big-game-hunter', to: 'thick-hide' },
      { from: 'thick-hide', to: 'life-leech' },
      { from: 'big-game-hunter', to: 'team-effort' },

      { from: 'hub', to: 'extra-rounds' },
      { from: 'extra-rounds', to: 'elite-manufacturing' },
      { from: 'elite-manufacturing', to: 'ammo-rationing' },
      { from: 'extra-rounds', to: 'sixth-sense' },
      { from: 'extra-rounds', to: 'armored' },
      { from: 'armored', to: 'man-hunter' },

      { from: 'hub', to: 'hot-blooded' },
      { from: 'hot-blooded', to: 'crawl-out' },
      { from: 'crawl-out', to: 'cold-blooded' },
      { from: 'crawl-out', to: 'trapwise' },
      { from: 'crawl-out', to: 'disarmament' },
    ]
  },

  // ==========================================
  // --- 4. VEHICLES ---
  // ==========================================
  Vehicles: {
    name: 'Vehicles',
    hubLabel: 'VEHICLES',
    color: '#38bdf8',
    nodes: [
      { id: 'gas-guru', x: 50, y: 22, name: 'Gas Guru', icon: '⛽', rank: '0/3', cost: '1 SP' },
      { id: 'efficient-equestrian', x: 26, y: 50, name: 'Efficient Equestrian', icon: '🐎', rank: '0/1', cost: '1 SP' },
      { id: 'champion-cyclist', x: 26, y: 76, name: 'Champion Cyclist', icon: '🚲', rank: '0/1', cost: '1 SP' },
      { id: 'seasoned-sailor', x: 74, y: 50, name: 'Seasoned Sailor', icon: '⛵', rank: '0/1', cost: '1 SP' },
      { id: 'prodigious-pilot', x: 74, y: 76, name: 'Prodigious Pilot', icon: '🚁', rank: '0/1', cost: '1 SP' },
    ],
    connections: [
      { from: 'hub', to: 'gas-guru' },
      { from: 'hub', to: 'efficient-equestrian' },
      { from: 'efficient-equestrian', to: 'champion-cyclist' },
      { from: 'hub', to: 'seasoned-sailor' },
      { from: 'seasoned-sailor', to: 'prodigious-pilot' },
    ]
  }
};
