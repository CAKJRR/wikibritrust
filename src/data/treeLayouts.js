export const TREE_LAYOUTS = {
  // ==========================================
  // --- 1. GATHERCRAFT ---
  // ==========================================
  Gathercraft: {
    name: 'Gathercraft',
    hubLabel: 'GATHERCRAFT',
    color: '#ce422b',
    nodes: [
      // Sol Dal (Mining)
      { id: 'prospector', x: 38, y: 50, name: 'Prospector', icon: '⛏️', rank: '0/3', cost: '1 SP' },
      { id: 'second-strike', x: 26, y: 50, name: 'Second Strike', icon: '💎', rank: '0/1', cost: '1 SP' },
      { id: 'tempered-steel', x: 14, y: 50, name: 'Tempered Steel', icon: '⚒️', rank: '0/3', cost: '1 SP' },
      { id: 'ore-sense', x: 26, y: 32, name: 'Ore Sense', icon: '📡', rank: '0/1', cost: '5 SP' },
      { id: 'shatterpoint', x: 4, y: 34, name: 'Shatterpoint', icon: '⚡', rank: '0/1', cost: '5 SP' },
      { id: 'vein-seeker', x: 4, y: 66, name: 'Vein Seeker', icon: '🔍', rank: '0/1', cost: '1 SP' },
      
      // Üst Dal (Scavenging)
      { id: 'treasure-hunter', x: 50, y: 34, name: 'Treasure Hunter', icon: '🔥', rank: '0/1', cost: '1 SP' },
      { id: 'smash-n-grab', x: 50, y: 18, name: "Smash 'N Grab", icon: '💥', rank: '0/1', cost: '1 SP' },
      { id: 'salvage-king', x: 36, y: 6, name: 'Salvage King', icon: '⚙️', rank: '0/3', cost: '1 SP' },
      { id: 'parts-hunter', x: 64, y: 6, name: 'Parts Hunter', icon: '🎒', rank: '0/3', cost: '1 SP' },

      // Sağ Dal (Woodcutting)
      { id: 'timberfall', x: 62, y: 50, name: 'Timberfall', icon: '🌲', rank: '0/3', cost: '1 SP' },
      { id: 'hardened-edge', x: 74, y: 34, name: 'Hardened Edge', icon: '🪓', rank: '0/3', cost: '1 SP' },
      { id: 'regrowth', x: 74, y: 50, name: 'Regrowth', icon: '🌱', rank: '0/1', cost: '1 SP' },
      { id: 'felling-blow', x: 88, y: 34, name: 'Felling Blow', icon: '🪵', rank: '0/1', cost: '5 SP' },
      { id: 'clearcut', x: 88, y: 66, name: 'Clearcut', icon: '🍃', rank: '0/1', cost: '5 SP' },

      // Alt Dal (Recycling, Foraging & Fishing)
      { id: 'rapid-recycle', x: 50, y: 64, name: 'Rapid Recycle', icon: '♻️', rank: '0/1', cost: '1 SP' },
      { id: 'foragers-fortune', x: 38, y: 70, name: "Forager's Fortune", icon: '🌿', rank: '0/3', cost: '1 SP' },
      { id: 'tea-party', x: 26, y: 70, name: 'Tea Party', icon: '🫖', rank: '0/1', cost: '5 SP' },
      { id: 'wild-sense', x: 14, y: 70, name: 'Wild Sense', icon: '🐺', rank: '0/1', cost: '5 SP' },
      { id: 'fishermans-fortune', x: 50, y: 78, name: "Fisherman's Fortune", icon: '🪝', rank: '0/1', cost: '1 SP' },
      { id: 'braided-line', x: 62, y: 88, name: 'Braided Line', icon: '🎣', rank: '0/1', cost: '1 SP' },
      { id: 'feeding-frenzy', x: 74, y: 80, name: 'Feeding Frenzy', icon: '🐟', rank: '0/3', cost: '1 SP' },
    ],
    connections: [
      // Mining
      { from: 'hub', to: 'prospector' },
      { from: 'prospector', to: 'second-strike' },
      { from: 'prospector', to: 'ore-sense' },
      { from: 'second-strike', to: 'ore-sense' },
      { from: 'second-strike', to: 'tempered-steel' },
      { from: 'tempered-steel', to: 'ore-sense' },
      { from: 'tempered-steel', to: 'shatterpoint' },
      { from: 'tempered-steel', to: 'vein-seeker' },
      { from: 'shatterpoint', to: 'vein-seeker' },

      // Scavenging
      { from: 'hub', to: 'treasure-hunter' },
      { from: 'treasure-hunter', to: 'smash-n-grab' },
      { from: 'smash-n-grab', to: 'salvage-king' },
      { from: 'smash-n-grab', to: 'parts-hunter' },

      // Woodcutting
      { from: 'hub', to: 'timberfall' },
      { from: 'timberfall', to: 'hardened-edge' },
      { from: 'timberfall', to: 'regrowth' },
      { from: 'hardened-edge', to: 'regrowth' },
      { from: 'regrowth', to: 'felling-blow' },
      { from: 'regrowth', to: 'clearcut' },
      { from: 'felling-blow', to: 'clearcut' },

      // Recycling, Foraging & Fishing
      { from: 'hub', to: 'rapid-recycle' },
      { from: 'rapid-recycle', to: 'foragers-fortune' },
      { from: 'rapid-recycle', to: 'fishermans-fortune' },
      { from: 'foragers-fortune', to: 'fishermans-fortune' },
      { from: 'foragers-fortune', to: 'tea-party' },
      { from: 'tea-party', to: 'wild-sense' },
      { from: 'fishermans-fortune', to: 'braided-line' },
      { from: 'braided-line', to: 'feeding-frenzy' },
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
      // Üst Dal (Health & Healing)
      { id: 'healing-factor', x: 50, y: 36, name: 'Healing Factor', icon: '❤️', rank: '0/1', cost: '1 SP' },
      { id: 'lazarus-effect', x: 50, y: 20, name: 'Lazarus Effect', icon: '✨', rank: '0/1', cost: '5 SP' },
      { id: 'rejuvenating-presence', x: 38, y: 8, name: 'Rejuvenating', icon: '💖', rank: '0/1', cost: '5 SP' },
      { id: 'feather-fall', x: 62, y: 8, name: 'Feather Fall', icon: '🪶', rank: '0/1', cost: '5 SP' },
      { id: 'inspired-decor', x: 26, y: 20, name: 'Inspired Decor', icon: '🛡️', rank: '0/1', cost: '1 SP' },

      // Sol Dal (Skinning / Animals)
      { id: 'waste-not', x: 38, y: 50, name: 'Waste Not', icon: '🥩', rank: '0/3', cost: '1 SP' },
      { id: 'damascus-steel', x: 26, y: 50, name: 'Damascus Steel', icon: '🗡️', rank: '0/3', cost: '1 SP' },
      { id: 'predators-eye', x: 26, y: 34, name: "Predator's Eye", icon: '🐺', rank: '0/1', cost: '5 SP' },
      { id: 'slice-n-dice', x: 14, y: 50, name: 'Slice \'N Dice', icon: '🔪', rank: '0/1', cost: '1 SP' },

      // Sol-Alt Dal (Farming)
      { id: 'bountiful-harvest', x: 36, y: 68, name: 'Bountiful Harvest', icon: '🌱', rank: '0/1', cost: '1 SP' },
      { id: 'geneticist', x: 24, y: 82, name: 'Geneticist', icon: '🧬', rank: '0/1', cost: '5 SP' },

      // Alt Dal (Cooking & Mixing)
      { id: 'free-refills', x: 50, y: 68, name: 'Free Refills', icon: '🍞', rank: '0/3', cost: '1 SP' },
      { id: 'lightweight', x: 50, y: 84, name: 'Lightweight', icon: '🍵', rank: '0/3', cost: '1 SP' },
      { id: 'mad-hatter', x: 38, y: 94, name: 'Mad Hatter', icon: '🎩', rank: '0/1', cost: '5 SP' },
      { id: 'skilled-chef', x: 62, y: 94, name: 'Skilled Chef', icon: '👨‍🍳', rank: '0/1', cost: '5 SP' },
      { id: 'chemical-chef', x: 74, y: 86, name: 'Chemical Chef', icon: '⚗️', rank: '0/1', cost: '5 SP' },

      // Sağ Dal (Crafting & Armor)
      { id: 'made-to-order', x: 62, y: 50, name: 'Made to Order', icon: '⏱️', rank: '0/1', cost: '5 SP' },
      { id: 'walking-tank', x: 74, y: 32, name: 'Walking Tank', icon: '🛡️', rank: '0/3', cost: '1 SP' },
      { id: 'almost-up-to-code', x: 74, y: 50, name: 'Almost Up to Code', icon: '📐', rank: '0/3', cost: '1 SP' },
      { id: 'spare-parts', x: 86, y: 50, name: 'Spare Parts', icon: '⚙️', rank: '0/3', cost: '1 SP' },
      { id: 'well-crafted', x: 86, y: 72, name: 'Well Crafted', icon: '🪖', rank: '0/3', cost: '1 SP' },
      { id: 'refined-blueprints', x: 96, y: 38, name: 'Refined Blueprints', icon: '📜', rank: '0/1', cost: '5 SP' },
      { id: 'bargain-hunter', x: 96, y: 62, name: 'Bargain Hunter', icon: '💰', rank: '0/1', cost: '1 SP' },
    ],
    connections: [
      // Health & Healing
      { from: 'hub', to: 'healing-factor' },
      { from: 'healing-factor', to: 'lazarus-effect' },
      { from: 'lazarus-effect', to: 'rejuvenating-presence' },
      { from: 'lazarus-effect', to: 'feather-fall' },
      { from: 'rejuvenating-presence', to: 'feather-fall' },
      { from: 'rejuvenating-presence', to: 'inspired-decor' },

      // Skinning / Animals
      { from: 'hub', to: 'waste-not' },
      { from: 'waste-not', to: 'damascus-steel' },
      { from: 'waste-not', to: 'predators-eye' },
      { from: 'damascus-steel', to: 'slice-n-dice' },
      { from: 'damascus-steel', to: 'predators-eye' },
      { from: 'predators-eye', to: 'slice-n-dice' },

      // Farming
      { from: 'hub', to: 'bountiful-harvest' },
      { from: 'bountiful-harvest', to: 'geneticist' },

      // Cooking & Mixing
      { from: 'hub', to: 'free-refills' },
      { from: 'free-refills', to: 'lightweight' },
      { from: 'lightweight', to: 'mad-hatter' },
      { from: 'lightweight', to: 'skilled-chef' },
      { from: 'skilled-chef', to: 'chemical-chef' },

      // Crafting & Armor
      { from: 'hub', to: 'made-to-order' },
      { from: 'made-to-order', to: 'walking-tank' },
      { from: 'made-to-order', to: 'almost-up-to-code' },
      { from: 'walking-tank', to: 'almost-up-to-code' },
      { from: 'walking-tank', to: 'spare-parts' },
      { from: 'almost-up-to-code', to: 'spare-parts' },
      { from: 'spare-parts', to: 'well-crafted' },
      { from: 'spare-parts', to: 'refined-blueprints' },
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
      // Üst Dal (Explosives & Raid)
      { id: 'shockwave', x: 50, y: 36, name: 'Shockwave', icon: '💥', rank: '0/3', cost: '1 SP' },
      { id: 'chain-reaction', x: 50, y: 20, name: 'Chain Reaction', icon: '💣', rank: '0/3', cost: '1 SP' },
      { id: 'reliable-fuses', x: 38, y: 10, name: 'Reliable Fuses', icon: '🧨', rank: '0/1', cost: '1 SP' },
      { id: 'blastproof', x: 62, y: 10, name: 'Blastproof', icon: '🛡️', rank: '0/1', cost: '1 SP' },
      { id: 'aerodynamically-sound', x: 26, y: 20, name: 'Aerodynamic', icon: '🚀', rank: '0/1', cost: '5 SP' },
      { id: 'orbital-strike', x: 74, y: 20, name: 'Orbital Strike', icon: '☄️', rank: '0/1', cost: '1 SP' },

      // Sol Dal (Creatures & Hunting)
      { id: 'big-game-hunter', x: 38, y: 50, name: 'Big Game Hunter', icon: '🏹', rank: '0/1', cost: '1 SP' },
      { id: 'thick-hide', x: 26, y: 50, name: 'Thick Hide', icon: '🛡️', rank: '0/1', cost: '1 SP' },
      { id: 'life-leech', x: 26, y: 32, name: 'Life Leech', icon: '🩸', rank: '0/1', cost: '5 SP' },
      { id: 'team-effort', x: 14, y: 50, name: 'Team Effort', icon: '👥', rank: '0/1', cost: '5 SP' },

      // Sağ Dal (Guns & Ammo)
      { id: 'extra-rounds', x: 62, y: 50, name: 'Extra Rounds', icon: '🎯', rank: '3/3', cost: '1 SP' },
      { id: 'elite-manufacturing', x: 74, y: 32, name: 'Elite Manuf.', icon: '🔫', rank: '3/3', cost: '1 SP' },
      { id: 'ammo-rationing', x: 74, y: 50, name: 'Ammo Rationing', icon: '📦', rank: '0/1', cost: '5 SP' },
      { id: 'man-hunter', x: 86, y: 50, name: 'Man-Hunter', icon: '🎯', rank: '0/3', cost: '1 SP' },
      { id: 'sixth-sense', x: 96, y: 38, name: 'Sixth Sense', icon: '👁️', rank: '0/1', cost: '5 SP' },
      { id: 'armored', x: 96, y: 62, name: 'Armored', icon: '🤖', rank: '0/3', cost: '1 SP' },

      // Alt Dal (Resistances)
      { id: 'hot-blooded', x: 50, y: 64, name: 'Hot Blooded', icon: '🔥', rank: '0/1', cost: '1 SP' },
      { id: 'crawl-out', x: 50, y: 78, name: 'Crawl Out', icon: '☣️', rank: '0/1', cost: '1 SP' },
      { id: 'trapwise', x: 38, y: 88, name: 'Trapwise', icon: '🪤', rank: '0/1', cost: '5 SP' },
      { id: 'cold-blooded', x: 62, y: 88, name: 'Cold Blooded', icon: '❄️', rank: '0/1', cost: '1 SP' },
      { id: 'disarmament', x: 74, y: 80, name: 'Disarmament', icon: '⚡', rank: '0/1', cost: '5 SP' },
    ],
    connections: [
      // Explosives & Raid
      { from: 'hub', to: 'shockwave' },
      { from: 'shockwave', to: 'chain-reaction' },
      { from: 'chain-reaction', to: 'reliable-fuses' },
      { from: 'chain-reaction', to: 'blastproof' },
      { from: 'reliable-fuses', to: 'aerodynamically-sound' },
      { from: 'blastproof', to: 'orbital-strike' },

      // Creatures & Hunting
      { from: 'hub', to: 'big-game-hunter' },
      { from: 'big-game-hunter', to: 'thick-hide' },
      { from: 'big-game-hunter', to: 'life-leech' },
      { from: 'life-leech', to: 'thick-hide' },
      { from: 'life-leech', to: 'team-effort' },
      { from: 'thick-hide', to: 'team-effort' },

      // Guns & Ammo
      { from: 'hub', to: 'extra-rounds' },
      { from: 'extra-rounds', to: 'elite-manufacturing' },
      { from: 'extra-rounds', to: 'ammo-rationing' },
      { from: 'elite-manufacturing', to: 'ammo-rationing' },
      { from: 'elite-manufacturing', to: 'man-hunter' },
      { from: 'ammo-rationing', to: 'man-hunter' },
      { from: 'man-hunter', to: 'sixth-sense' },
      { from: 'man-hunter', to: 'armored' },
      { from: 'sixth-sense', to: 'armored' },

      // Resistances
      { from: 'hub', to: 'hot-blooded' },
      { from: 'hot-blooded', to: 'crawl-out' },
      { from: 'crawl-out', to: 'trapwise' },
      { from: 'crawl-out', to: 'cold-blooded' },
      { from: 'cold-blooded', to: 'disarmament' },
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
      { id: 'gas-guru', x: 50, y: 24, name: 'Gas Guru', icon: '⛽', rank: '0/3', cost: '1 SP' },
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
