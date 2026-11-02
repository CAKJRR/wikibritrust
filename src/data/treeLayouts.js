export const TREE_LAYOUTS = {
  // ==========================================
  // --- 1. GATHERCRAFT ---
  // ==========================================
  Gathercraft: {
    name: 'Gathercraft',
    hubLabel: 'GATHERCRAFT',
    color: '#B25D3E',
    nodes: [
      // Mining (Sol Dal)
      { id: 'ore-sense', x: 36, y: 50, name: 'Ore Sense', icon: '📡', rank: '0/1', cost: '5 SP', tier: 'B-Tier' },
      { id: 'prospector', x: 22, y: 50, name: 'Prospector', icon: '⛏️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'second-strike', x: 8, y: 50, name: 'Second Strike', icon: '🔄', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'vein-seeker', x: 22, y: 34, name: 'Vein Seeker', icon: '✦', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'shatterpoint', x: 8, y: 34, name: 'Shatterpoint', icon: '⚡', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'tempered-steel', x: 22, y: 66, name: 'Tempered Steel', icon: '🛡️', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      
      // Scavenging (Üst Dal)
      { id: 'treasure-hunter', x: 50, y: 34, name: 'Treasure Hunter', icon: '🗺️', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'smash-n-grab', x: 50, y: 18, name: "Smash 'N Grab", icon: '📦', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'parts-hunter', x: 34, y: 12, name: 'Parts Hunter', icon: '⚙️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'salvage-king', x: 66, y: 12, name: 'Salvage King', icon: '👑', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },

      // Woodcutting (Sağ Dal)
      { id: 'hardened-edge', x: 64, y: 50, name: 'Hardened Edge', icon: '🪓', rank: '0/3', cost: '1 SP', tier: 'B-Tier' },
      { id: 'timberfall', x: 78, y: 50, name: 'Timberfall', icon: '🌲', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'regrowth', x: 92, y: 50, name: 'Regrowth', icon: '🌱', rank: '0/3', cost: '1 SP', tier: 'B-Tier' },
      { id: 'felling-blow', x: 78, y: 34, name: 'Felling Blow', icon: '💥', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },
      { id: 'clearcut', x: 92, y: 34, name: 'Clearcut', icon: '🌳', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },

      // Recycling, Foraging & Fishing (Alt Dal)
      { id: 'rapid-recycle', x: 50, y: 66, name: 'Rapid Recycle', icon: '♻️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'foragers-fortune', x: 34, y: 80, name: "Forager's Fortune", icon: '🍄', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'wild-sense', x: 20, y: 80, name: 'Wild Sense', icon: '🌿', rank: '0/1', cost: '5 SP', tier: 'C-Tier' },
      { id: 'fishermans-fortune', x: 50, y: 80, name: "Fisherman's Fortune", icon: '🎣', rank: '0/3', cost: '1 SP', tier: 'C-Tier' },
      { id: 'braided-line', x: 50, y: 94, name: 'Braided Line', icon: '🪢', rank: '0/3', cost: '1 SP', tier: 'C-Tier' },
      { id: 'tea-party', x: 66, y: 80, name: 'Tea Party', icon: '🫖', rank: '0/1', cost: '5 SP', tier: 'B-Tier' },
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
    color: '#E3E890',
    nodes: [
      // Health / Healing (Üst Dal - Bol Aralık)
      { id: 'inspired-decor', x: 50, y: 34, name: 'Inspired Decor', icon: '🛋️', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'healing-factor', x: 50, y: 20, name: 'Healing Factor', icon: '❤️', rank: '0/1', cost: '1 SP', tier: 'S-Tier' },
      { id: 'lazarus-effect', x: 36, y: 10, name: 'Lazarus Effect', icon: '✨', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },
      { id: 'feather-fall', x: 64, y: 10, name: 'Feather Fall', icon: '🪶', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'rejuvenating-presence', x: 22, y: 16, name: 'Rejuvenating', icon: '💖', rank: '0/1', cost: '5 SP', tier: 'C-Tier' },

      // Skinning & Animals (Sol Dal)
      { id: 'damascus-steel', x: 36, y: 50, name: 'Damascus Steel', icon: '🗡️', rank: '0/3', cost: '1 SP', tier: 'B-Tier' },
      { id: 'waste-not', x: 22, y: 50, name: 'Waste Not', icon: '🥩', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'slice-n-dice', x: 8, y: 50, name: 'Slice \'N Dice', icon: '🔪', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'predators-eye', x: 22, y: 34, name: "Predator's Eye", icon: '🐺', rank: '0/1', cost: '5 SP', tier: 'C-Tier' },

      // Farming (Alt-Sol Dal)
      { id: 'bountiful-harvest', x: 28, y: 68, name: 'Bountiful Harvest', icon: '🌱', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'geneticist', x: 14, y: 82, name: 'Geneticist', icon: '🧬', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },

      // Cooking & Mixing (Alt Dal - Bol Aralık)
      { id: 'free-refills', x: 50, y: 66, name: 'Free Refills', icon: '🍞', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'lightweight', x: 50, y: 82, name: 'Lightweight', icon: '🍵', rank: '0/3', cost: '1 SP', tier: 'God-Tier' },
      { id: 'mad-hatter', x: 34, y: 92, name: 'Mad Hatter', icon: '🎩', rank: '0/1', cost: '5 SP', tier: 'B-Tier' },
      { id: 'skilled-chef', x: 66, y: 82, name: 'Skilled Chef', icon: '👨‍🍳', rank: '0/1', cost: '5 SP', tier: 'A-Tier' },
      { id: 'chemical-chef', x: 80, y: 92, name: 'Chemical Chef', icon: '⚗️', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },

      // Crafting & Armor (Sağ Dal)
      { id: 'well-crafted', x: 66, y: 50, name: 'Well Crafted', icon: '🛡️', rank: '3/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'made-to-order', x: 80, y: 50, name: 'Made to Order', icon: '⏱️', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'refined-blueprints', x: 94, y: 50, name: 'Refined Blueprints', icon: '📜', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'walking-tank', x: 78, y: 34, name: 'Walking Tank', icon: '🪖', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'almost-up-to-code', x: 66, y: 66, name: 'Almost Up to Code', icon: '📐', rank: '0/3', cost: '1 SP', tier: 'B-Tier' },
      { id: 'spare-parts', x: 80, y: 66, name: 'Spare Parts', icon: '🔩', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'bargain-hunter', x: 94, y: 66, name: 'Bargain Hunter', icon: '💰', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
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
    color: '#B25D3E',
    nodes: [
      // Explosives & Raid (Üst Dal - Bol Aralık)
      { id: 'shockwave', x: 50, y: 34, name: 'Shockwave', icon: '💥', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'chain-reaction', x: 50, y: 18, name: 'Chain Reaction', icon: '💣', rank: '0/3', cost: '1 SP', tier: 'God-Tier' },
      { id: 'aerodynamically-sound', x: 32, y: 18, name: 'Aerodynamic', icon: '🚀', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'reliable-fuses', x: 16, y: 18, name: 'Reliable Fuses', icon: '🧨', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'blastproof', x: 68, y: 18, name: 'Blastproof', icon: '🛡️', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'orbital-strike', x: 84, y: 18, name: 'Orbital Strike', icon: '☄️', rank: '1/1', cost: 'Owned', tier: 'God-Tier' },

      // Vampirism & Animals (Sol Dal)
      { id: 'big-game-hunter', x: 34, y: 50, name: 'Big Game Hunter', icon: '🏹', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'thick-hide', x: 20, y: 50, name: 'Thick Hide', icon: '🛡️', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'life-leech', x: 8, y: 50, name: 'Life Leech', icon: '🩸', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },
      { id: 'team-effort', x: 34, y: 68, name: 'Team Effort', icon: '👥', rank: '0/1', cost: '5 SP', tier: 'C-Tier' },

      // Guns & Ammo (Sağ Dal)
      { id: 'extra-rounds', x: 66, y: 50, name: 'Extra Rounds', icon: '🎯', rank: '3/3', cost: 'Owned', tier: 'S-Tier' },
      { id: 'elite-manufacturing', x: 80, y: 34, name: 'Elite Manuf.', icon: '🔫', rank: '3/3', cost: 'Owned', tier: 'S-Tier' },
      { id: 'ammo-rationing', x: 94, y: 34, name: 'Ammo Rationing', icon: '📦', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'sixth-sense', x: 80, y: 50, name: 'Sixth Sense', icon: '👁️', rank: '0/1', cost: '5 SP', tier: 'C-Tier' },
      { id: 'armored', x: 80, y: 66, name: 'Armored', icon: '🪖', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'man-hunter', x: 94, y: 66, name: 'Man-Hunter', icon: '🎯', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },

      // Resistances & Traps (Alt Dal - Bol Aralık)
      { id: 'hot-blooded', x: 50, y: 66, name: 'Hot Blooded', icon: '🔥', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'crawl-out', x: 50, y: 80, name: 'Crawl Out', icon: '☣️', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'cold-blooded', x: 50, y: 94, name: 'Cold Blooded', icon: '❄️', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'trapwise', x: 34, y: 80, name: 'Trapwise', icon: '🪤', rank: '0/1', cost: '5 SP', tier: 'A-Tier' },
      { id: 'disarmament', x: 66, y: 80, name: 'Disarmament', icon: '⚡', rank: '0/1', cost: '5 SP', tier: 'B-Tier' },
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
    color: '#728383',
    nodes: [
      { id: 'gas-guru', x: 50, y: 24, name: 'Gas Guru', icon: '⛽', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'efficient-equestrian', x: 26, y: 50, name: 'Efficient Equestrian', icon: '🐎', rank: '0/1', cost: '1 SP', tier: 'S-Tier' },
      { id: 'champion-cyclist', x: 26, y: 76, name: 'Champion Cyclist', icon: '🚲', rank: '0/1', cost: '1 SP', tier: 'B-Tier' },
      { id: 'seasoned-sailor', x: 74, y: 50, name: 'Seasoned Sailor', icon: '⛵', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'prodigious-pilot', x: 74, y: 76, name: 'Prodigious Pilot', icon: '🚁', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
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
