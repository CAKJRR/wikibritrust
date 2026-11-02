export const TREE_LAYOUTS = {
  Gathercraft: {
    name: 'Gathercraft',
    hubLabel: 'GATHERCRAFT',
    color: '#B25D3E',
    nodes: [
      // Mining (Sol)
      { id: 'vein-seeker', x: 30, y: 35, name: 'Vein Seeker', icon: '✦', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'shatterpoint', x: 16, y: 35, name: 'Shatterpoint', icon: '⚡', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'prospector', x: 30, y: 50, name: 'Prospector', icon: '⛏️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'second-strike', x: 16, y: 50, name: 'Second Strike', icon: '🔄', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'tempered-steel', x: 30, y: 65, name: 'Tempered Steel', icon: '🛡️', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      
      // Scavenging (Üst)
      { id: 'smash-n-grab', x: 50, y: 32, name: "Smash 'N Grab", icon: '📦', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'parts-hunter', x: 40, y: 18, name: 'Parts Hunter', icon: '⚙️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'salvage-king', x: 50, y: 15, name: 'Salvage King', icon: '👑', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },

      // Woodcutting (Sağ)
      { id: 'hardened-edge', x: 70, y: 50, name: 'Hardened Edge', icon: '🪓', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'timberfall', x: 84, y: 50, name: 'Timberfall', icon: '🌲', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
      { id: 'felling-blow', x: 70, y: 35, name: 'Felling Blow', icon: '💥', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },
      { id: 'clearcut', x: 84, y: 35, name: 'Clearcut', icon: '🌳', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },

      // Recycling & Foraging (Alt)
      { id: 'rapid-recycle', x: 50, y: 68, name: 'Rapid Recycle', icon: '♻️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'foragers-fortune', x: 40, y: 82, name: "Forager's Fortune", icon: '🍄', rank: '0/3', cost: '1 SP', tier: 'A-Tier' },
    ],
    connections: [
      // From Center to branches
      { from: 'hub', to: 'prospector' },
      { from: 'prospector', to: 'second-strike' },
      { from: 'prospector', to: 'vein-seeker' },
      { from: 'vein-seeker', to: 'shatterpoint' },
      { from: 'prospector', to: 'tempered-steel' },

      { from: 'hub', to: 'smash-n-grab' },
      { from: 'smash-n-grab', to: 'salvage-king' },
      { from: 'smash-n-grab', to: 'parts-hunter' },

      { from: 'hub', to: 'hardened-edge' },
      { from: 'hardened-edge', to: 'timberfall' },
      { from: 'hardened-edge', to: 'felling-blow' },
      { from: 'felling-blow', to: 'clearcut' },

      { from: 'hub', to: 'rapid-recycle' },
      { from: 'rapid-recycle', to: 'foragers-fortune' },
    ]
  },

  Survivalcraft: {
    name: 'Survivalcraft',
    hubLabel: 'SURVIVALCRAFT',
    color: '#E3E890',
    nodes: [
      // Health (Üst)
      { id: 'healing-factor', x: 50, y: 34, name: 'Healing Factor', icon: '❤️', rank: '0/1', cost: '1 SP', tier: 'S-Tier' },
      { id: 'feather-fall', x: 64, y: 20, name: 'Feather Fall', icon: '🪶', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },

      // Skinning (Sol)
      { id: 'waste-not', x: 30, y: 50, name: 'Waste Not', icon: '🥩', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },

      // Farming (Alt-Sol)
      { id: 'bountiful-harvest', x: 34, y: 68, name: 'Bountiful Harvest', icon: '🌱', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'geneticist', x: 20, y: 80, name: 'Geneticist', icon: '🧬', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },

      // Cooking & Mixing (Alt)
      { id: 'lightweight', x: 50, y: 70, name: 'Lightweight', icon: '🍵', rank: '0/3', cost: '1 SP', tier: 'God-Tier' },
      { id: 'chemical-chef', x: 65, y: 82, name: 'Chemical Chef', icon: '⚗️', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },

      // Crafting & Armor (Sağ)
      { id: 'well-crafted', x: 68, y: 50, name: 'Well Crafted', icon: '🛡️', rank: '3/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'made-to-order', x: 82, y: 50, name: 'Made to Order', icon: '⏱️', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'refined-blueprints', x: 88, y: 35, name: 'Refined Blueprints', icon: '📜', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'bargain-hunter', x: 88, y: 65, name: 'Bargain Hunter', icon: '💰', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
    ],
    connections: [
      { from: 'hub', to: 'healing-factor' },
      { from: 'healing-factor', to: 'feather-fall' },

      { from: 'hub', to: 'waste-not' },

      { from: 'hub', to: 'bountiful-harvest' },
      { from: 'bountiful-harvest', to: 'geneticist' },

      { from: 'hub', to: 'lightweight' },
      { from: 'lightweight', to: 'chemical-chef' },

      { from: 'hub', to: 'well-crafted' },
      { from: 'well-crafted', to: 'made-to-order' },
      { from: 'made-to-order', to: 'refined-blueprints' },
      { from: 'well-crafted', to: 'bargain-hunter' },
    ]
  },

  Combat: {
    name: 'Combat',
    hubLabel: 'COMBAT',
    color: '#B25D3E',
    nodes: [
      // Explosives (Üst)
      { id: 'shockwave', x: 50, y: 35, name: 'Shockwave', icon: '💥', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'chain-reaction', x: 50, y: 20, name: 'Chain Reaction', icon: '💣', rank: '0/3', cost: '1 SP', tier: 'God-Tier' },
      { id: 'aerodynamically-sound', x: 36, y: 22, name: 'Aerodynamically Sound', icon: '🚀', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'blastproof', x: 64, y: 22, name: 'Blastproof', icon: '🛡️', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
      { id: 'orbital-strike', x: 80, y: 22, name: 'Orbital Strike', icon: '☄️', rank: '1/1', cost: 'Owned', tier: 'God-Tier' },

      // Vampirism & Animals (Sol)
      { id: 'life-leech', x: 26, y: 50, name: 'Life Leech', icon: '🩸', rank: '0/1', cost: '5 SP', tier: 'S-Tier' },

      // Guns & Ammo (Sağ)
      { id: 'extra-rounds', x: 68, y: 50, name: 'Extra Rounds', icon: '🎯', rank: '3/3', cost: 'Owned', tier: 'S-Tier' },
      { id: 'elite-manufacturing', x: 80, y: 38, name: 'Elite Manufacturing', icon: '🔫', rank: '3/3', cost: 'Owned', tier: 'S-Tier' },
      { id: 'ammo-rationing', x: 92, y: 38, name: 'Ammo Rationing', icon: '📦', rank: '0/1', cost: '5 SP', tier: 'God-Tier' },
      { id: 'armored', x: 80, y: 64, name: 'Armored', icon: '🪖', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'man-hunter', x: 92, y: 64, name: 'Man-Hunter', icon: '👁️', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },

      // Resistances (Alt)
      { id: 'cold-blooded', x: 50, y: 72, name: 'Cold Blooded', icon: '❄️', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
    ],
    connections: [
      { from: 'hub', to: 'shockwave' },
      { from: 'shockwave', to: 'chain-reaction' },
      { from: 'shockwave', to: 'aerodynamically-sound' },
      { from: 'shockwave', to: 'blastproof' },
      { from: 'blastproof', to: 'orbital-strike' },

      { from: 'hub', to: 'life-leech' },

      { from: 'hub', to: 'extra-rounds' },
      { from: 'extra-rounds', to: 'elite-manufacturing' },
      { from: 'elite-manufacturing', to: 'ammo-rationing' },
      { from: 'extra-rounds', to: 'armored' },
      { from: 'armored', to: 'man-hunter' },

      { from: 'hub', to: 'cold-blooded' },
    ]
  },

  Vehicles: {
    name: 'Vehicles',
    hubLabel: 'VEHICLES',
    color: '#728383',
    nodes: [
      { id: 'gas-guru', x: 50, y: 22, name: 'Gas Guru', icon: '⛽', rank: '0/3', cost: '1 SP', tier: 'S-Tier' },
      { id: 'efficient-equestrian', x: 26, y: 50, name: 'Efficient Equestrian', icon: '🐎', rank: '0/1', cost: '1 SP', tier: 'S-Tier' },
      { id: 'champion-cyclist', x: 26, y: 78, name: 'Champion Cyclist', icon: '🚲', rank: '0/1', cost: '1 SP', tier: 'B-Tier' },
      { id: 'seasoned-sailor', x: 74, y: 50, name: 'Seasoned Sailor', icon: '⛵', rank: '0/1', cost: '1 SP', tier: 'A-Tier' },
      { id: 'prodigious-pilot', x: 74, y: 78, name: 'Prodigious Pilot', icon: '🚁', rank: '0/1', cost: '1 SP', tier: 'God-Tier' },
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
