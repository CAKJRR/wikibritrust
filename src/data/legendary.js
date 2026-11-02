// ==========================================
// 1. TAMİR & DAYANIKLILIK REHBERİ (DURABILITY & REPAIR)
// ==========================================
export const DURABILITY_GUIDE = {
  title: 'Dayanıklılık (Durability) & Kırmızı Bar Mekaniği',
  explanation: 'Rust vanilla mekaniğinde bir eşyayı Tamir Masasında (Repair Bench) tamir ettikçe kalıcı kırmızı bir bar birikir. Kırmızı bar eşyanın maksimum canını sınırlar ve kırmızı bar tamamen dolduğunda (fullenirse) o eşya bir daha ASLA tamir edilemez ve kırıldığında yok olur. Brits PvE Worlds V2\'de bu sistem şu hayati kurallarla çalışır:',
  mechanics: [
    {
      title: 'Mad’s Extra Magical (Tek Kullanımlık Kurtarıcı!)',
      desc: 'Bu bir alet DEĞİLDİR; tek kullanımlık özel bir tamir eşyasıdır. Envanterde sürükle-bırak (Drag & Drop) yapılarak canı azalmış eşyaların üzerine bırakılır. Eşyayı yok olmaktan kurtaran tek mekanizmadır: Kalıcı kırmızı barı tamamen sıfırlar ve eşyayı %100 orijinal yeşil canına geri döndürür!'
    },
    {
      title: 'Yeşil Bar vs Kırmızı Bar Farkı',
      desc: 'Yeşil bar eşyanın mevcut canıdır. Kırmızı bar ise tamir masası kullandıkça biriken aşınma sınırıdır. Kırmızı bar dolduğunda eşya kilitlenir ve tamir edilemez hale gelir. Normal tamir masası kırmızı barı silemez; yalnızca Mad’s Extra Magical kırmızı barı silebilir.'
    },
    {
      title: 'Yetenek Ağacı Eskimeyi Yavaşlatır (%45 Koruma)',
      desc: 'Gathercraft ve Survivalcraft dallarındaki pasifler (Tempered Steel, Hardened Edge, Damascus Steel, Well Crafted, Elite Manufacturing) eşyaların kullanım sırasındaki aşınmasını %45 oranında azaltır. Eşyalarınız 2 kat daha geç kırılır.'
    }
  ]
};

// ==========================================
// 2. TÜM EFSANEVİ ALETLER & ÖZEL TAMİR EŞYALARI
// ==========================================
export const LEGENDARY_TOOLS = [
  {
    id: 'mads-extra-magical',
    name: 'Mad’s Extra Magical',
    category: 'Özel Tamir Eşyası (Tek Kullanımlık)',
    isConsumable: true,
    dropSource: 'Nightmare Raids, Legendary Helis, Deep Sea Kasaları',
    effect: 'Bir alet DEĞİLDİR; tek kullanımlık sürükle-bırak (Drag & Drop) tamir eşyasıdır. Envanterde canı azalmış herhangi bir eşyanın üzerine sürüklendiğinde kalıcı kırmızı bar cezasını tamamen sıfırlar ve eşyayı %100 maksimum yeşil cana ulaştırır.',
    highlight: 'Kırmızı barı fullenip bir daha tamir edilemeyecek eşyaları yok olmaktan kurtaran tek yöntemdir.'
  },
  {
    id: 'brits-broken-axe',
    name: 'Brits Broken Axe',
    category: 'Odunculuk / Çiftçilik',
    isConsumable: false,
    dropSource: 'Efsanevi ganimet sandıkları',
    effect: 'Ağaç keserken oyuncunun çevresinde anında 4 ekstra maden nodu çıkarma şansı vardır.',
    highlight: 'En yüksek verim için Lumberjack kıyafeti ile eşleştirin.'
  },
  {
    id: 'brits-broken-pickaxe',
    name: 'Brits Broken Pickaxe',
    category: 'Madencilik',
    isConsumable: false,
    dropSource: 'Efsanevi ganimet sandıkları & maden ödülleri',
    effect: 'Maden nodlarından sabit +%60 ekstra cevher verimi sağlar.',
    highlight: 'Prospector (+%75) ile birleştiğinde devasa HQM ve kükürt akışı sağlar.'
  },
  {
    id: 'reaping-spade',
    name: 'Reaping Spade',
    category: 'Tarım & Hasat',
    isConsumable: false,
    dropSource: 'Yerdeki taş ve kütükler toplanırken nadiren bulunur',
    effect: '6 metre çapındaki tüm bitkileri (tam 3x3 planter düzeni için ideal) tek tıkla anında hasat eder.',
    highlight: 'Bountiful Harvest ve God-Seed (GGGYYY) ile kumaş zengini olmanın anahtarıdır.'
  },
  {
    id: 'fertile-bone',
    name: 'Fertile Bone',
    category: 'Tarım & Büyütme',
    isConsumable: false,
    dropSource: 'Yabani toplanabilirlerden (wild collectibles) bulunur',
    effect: 'Aşama başına 50 kemik parçasıyla bitkileri anında bir sonraki büyüme evresine geçirir.',
    highlight: 'Ekilmiş bitkileri saniyeler içinde olgunlaştırıp hasada hazır hale getirir.'
  },
  {
    id: 'baloos-marrowpaw',
    name: 'Bal0o’s Marrowpaw',
    category: 'Avcılık & Kemik',
    isConsumable: false,
    dropSource: 'Ayı (Bear) avlayıp derisini yüzerken bulunur',
    effect: 'Avlanan her hayvandan tam 4 kat (4x) daha fazla kemik verir.',
    highlight: 'Fertile Bone aletinin kemik ihtiyacını tek başına karşılar.'
  },
  {
    id: 'mads-magical',
    name: 'Mad’s Magical Tools',
    category: 'Standart Efsanevi Alet',
    isConsumable: false,
    dropSource: 'Yüksek seviye boss kasaları & etkinlik ödülleri',
    effect: 'Standart efsanevi toplama aletidir; yüksek verim sağlar, tamir masasında normal oranda tamir edilir.',
    highlight: 'Hızlı hammadde kasımı için ideal başlangıç efsanevisidir.'
  }
];

// ==========================================
// 3. EFSANEVİ ZIRH SETLERİ (SAVAŞ & TOPLAMA)
// ==========================================
export const LEGENDARY_SETS = [
  // --- SAVAŞ SETLERİ ---
  {
    id: 'leviathan-armor',
    name: 'Leviathan Armor Set',
    category: 'Savaş Seti (Deep Sea Prototipi)',
    role: 'Ağır Hasar Emilimi',
    dropSource: 'Deep Sea Cobalt kargo ambarı ve kilitli kasaları',
    parts: '1 parçada ~%33, 6 parçada %46 emilim',
    setBonus: 'Tam Sette %53 Darbe Emilimi (Impact Absorption)',
    desc: 'Deep Sea Cobalt kargo operasyonları için geliştirilmiş ağır prototip zırhtır. Ölümcül gemi taretleri ve elit bilim insanı saldırılarında darbeyi maksimum oranda emer.'
  },
  {
    id: 'impact-armor',
    name: 'Impact Armor Set',
    category: 'Savaş Seti (Hasar Azaltma)',
    role: 'Darbe Emilimi',
    dropSource: 'Nightmare Raid kasaları ve Helikopter enkazları',
    parts: 'Tam Zırhlı Kompozit Plakalar',
    setBonus: 'Tam Sette %33 Darbe Emilimi (Damage Mitigation)',
    desc: 'Patrol helikopterlerine, roket tuzaklarına ve ağır patlamalara karşı hayatta kalmayı sağlayan dayanıklı savunma zırhı.'
  },
  {
    id: 'dragon-thorn',
    name: 'Dragon Thorn Armor Set',
    category: 'Savaş Seti (Vampirik İyileşme)',
    role: 'Ölümsüz Tank Seti',
    dropSource: 'Endgame Zindanlar & Boss Sandıkları',
    parts: 'Maske (%1), Hoodie (%2), Pelerin (%7), Eldiven (%1), Çizme (%1), Pantolon (%0.5)',
    setBonus: 'Tam Sette %12.5 Vampiric Healing (Can Emme)',
    desc: 'Hasar vurdukça canınızı doldurur. Combat ağacındaki Life Leech (%1) ile birleştiğinde toplam %13.5 can yenilemesiyle PvE çatışmalarında oyuncuyu ölümsüz bir tanka çevirir.'
  },
  {
    id: 'helping-hands',
    name: 'Helping Hands',
    category: 'Efsanevi Güvenlik Donanımı',
    role: 'Otomatik Dirilme & Ölümsüzlük',
    dropSource: 'Nadir dünya bossu ödülleri & etkinlik kasaları',
    parts: 'Özel el ve zırh donanımı',
    setBonus: 'Yere düştüğünde (downed) ANINDA %100 Canla Ayağa Kaldırır + 5 Saniye Tam Ölümsüzlük!',
    desc: 'Zorlu boss dövüşlerinde veya raidlerde hata yaptığınızda hayatınızı kurtaran sunucunun en güçlü güvenlik mekanizmasıdır.'
  },

  // --- TOPLAMA SETLERİ ---
  {
    id: 'mining-set',
    name: 'Mining Set (Madencilik Seti)',
    category: 'Toplama Seti (Maden)',
    role: '+%100 Maden Verimi',
    dropSource: 'Görevler, pazar ve dünya sandıkları',
    parts: 'Madenci Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Maden Verimi (+100% Ore Yield)',
    desc: 'Taş, metal, kükürt ve HQM madenlerinden 2 kat daha fazla hammadde kazandırır. Brits Broken Pickaxe ile birleştiğinde maksimum verime ulaşır.'
  },
  {
    id: 'lumberjack-set',
    name: 'Lumberjack Set (Oduncu Seti)',
    category: 'Toplama Seti (Odun)',
    role: '+%100 Odun Verimi',
    dropSource: 'Quartermaster görevleri ve etkinlik ödülleri',
    parts: 'Oduncu Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Odun Verimi (+100% Wood Yield)',
    desc: 'Ağaç keserken odun miktarını tam ikiye katlar. Brits Broken Axe ile birlikte giyildiğinde odun keserken etrafta 4 maden nodu doğurma şansını en verimli şekilde kullanır.'
  },
  {
    id: 'hunter-set',
    name: 'Hunter Set (Avcı Seti)',
    category: 'Toplama Seti (Avcılık & Hayvan)',
    role: '+%100 Deri ve Kemik',
    dropSource: 'Avcılık görev zincirleri ve nadir sandıklar',
    parts: 'Avcı Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Deri & Kemik Verimi',
    desc: 'Vahşi hayvanları kesip derisini yüzerken 2 kat fazla hammadde sağlar. Bal0o\'s Marrowpaw ile birleştiğinde devasa kemik stoğu elde edilir.'
  },
  {
    id: 'farmer-set',
    name: 'Farmer Set (Çiftçi Seti)',
    category: 'Toplama Seti (Tarım)',
    role: '+%60 Hasat Verimi',
    dropSource: 'Tarım görevleri ve Çiftçi Pazarı',
    parts: 'Çiftçi Şapkası, Gömlek, Pantolon',
    setBonus: 'Tam Sette %60 Ekstra Hasat Verimi (+60% Crop Yield)',
    desc: 'Kenevir, mısır, patates ve meyve hasatlarında verimi doğrudan katlar. Reaping Spade ile 3x3 planter toplarken maksimum RP getirir.'
  },
  {
    id: 'scavenger-set',
    name: 'Scavenger Set (Yağmacı Seti)',
    category: 'Toplama Seti (Hurda & Bileşen)',
    role: '+%60 Hurda & Parça',
    dropSource: 'Monument sandıkları ve yol kasaları',
    parts: 'Scavenger Maskesi, Ceketi, Pantolonu',
    setBonus: 'Tam Sette %60 Ekstra Hurda & Bileşen Verimi',
    desc: 'Varillerden ve sandıklardan hurda ve bileşen toplama verimini artırır. Salvage King yeteneğiyle birleştiğinde wipe başı gelişimini uçurur.'
  },
  {
    id: 'angler-set',
    name: 'Angler Set (Balıkçı Seti)',
    category: 'Toplama Seti (Balıkçılık)',
    role: '+%200 Balık Bonusu',
    dropSource: 'Balıkçılık görevleri ve kıyı sandıkları',
    parts: 'Balıkçı Şapkası, Yelek, Pantolon',
    setBonus: 'Tam Sette %200 Ekstra Balıkçılık Bonusu (+200% Fish Bonus)',
    desc: 'Okyanus ve nehir balıkçılığında 3 kat verim sağlar; nadir balık ve ganimet yakalama şansını zirveye taşır.'
  }
];

// ==========================================
// 4. ZIRH EKLENTİLERİ (ARMOR INSERTS - EXACT OFFICIAL DATA)
// ==========================================
export const ARMOR_INSERTS = {
  title: 'Armor Inserts (Zırh Eklentileri)',
  summary: 'Armor Inserts are lootable armor enhancements that add resistance against specific damage types. Each insert comes in three tiers: +, ++, and +++.',
  howItWorks: 'Armor Inserts are attachable upgrades for protective gear. Different insert families cover different threats, so you can swap them based on your activity.',
  proTip: [
    'Underwater content: use Asbestos inserts.',
    'Raid/combat/heavy content: use Metal inserts.',
    'Fall-risk content: use Lead inserts.',
    'General roaming: use Wooden inserts.'
  ],
  types: [
    {
      id: 'wooden',
      name: 'Wooden Inserts (Satiated Series)',
      tier: '+, ++, +++',
      purpose: 'Genel Gezinti & Hayatta Kalma (General Survival)',
      resists: 'Bite, Slash, Blunt, Stab, Hunger, Thirst, Bee Sting (Isırık, Kesik, Ezik, Saplanma, Açlık, Susuzluk, Arı Sokması)',
      recommendedArea: 'Genel harita keşfi, vahşi doğa ve günlük aktiviteler.',
      tierTable: [
        { tier: 'Wooden Insert +', protection: '1.0 (all listed types)' },
        { tier: 'Wooden Insert ++', protection: '2.0 (all listed types)' },
        { tier: 'Wooden Insert +++', protection: '3.0 (all listed types)' }
      ]
    },
    {
      id: 'asbestos',
      name: 'Asbestos Inserts (Waterproof Series)',
      tier: '+, ++, +++',
      purpose: 'Deniz & Su Operasyonları (Water & Cold)',
      resists: 'Drowning, Cold exposure (Boğulma hasarı ve soğuk maruziyeti)',
      recommendedArea: 'Deniz ve su monumentleri, batıklar ve Deep Sea Cobalt kargo operasyonları.',
      tierTable: [
        { tier: 'Asbestos Insert +', protection: '5.0 Drowning, 1.0 Cold' },
        { tier: 'Asbestos Insert ++', protection: '10.0 Drowning, 2.0 Cold' },
        { tier: 'Asbestos Insert +++', protection: '15.0 Drowning, 3.0 Cold' }
      ]
    },
    {
      id: 'lead',
      name: 'Lead Inserts (Impact Series)',
      tier: '+, ++, +++',
      purpose: 'Kinetik & Patlama Koruması (Kinetic & Explosive)',
      resists: 'Fall damage, Explosion damage, Anti-vehicle damage (Düşme, patlama ve araç darbesi)',
      recommendedArea: 'Yüksekten düşme riski olan kuleler, monument tırmanışları ve patlayıcı alanları.',
      tierTable: [
        { tier: 'Lead Insert +', protection: '1.0 each type' },
        { tier: 'Lead Insert ++', protection: '2.0 each type' },
        { tier: 'Lead Insert +++', protection: '3.0 each type' }
      ]
    },
    {
      id: 'metal',
      name: 'Metal Inserts (Metal Series)',
      tier: '+, ++, +++',
      purpose: 'Ağır Savaş Koruması (Best-in-class Combat)',
      resists: 'Bullet damage, Bleeding, Explosive damage (Mermi, kanama ve patlama hasarı)',
      recommendedArea: 'Raid Dünyaları (/buyraid), zorlu üs baskınları ve elit NPC savaşları.',
      note: 'Combat note: Metal inserts are generally best for raid worlds and high threat combat encounters.',
      tierTable: [
        { tier: 'Metal Insert +', protection: '4.0 Bullet, 2.0 Bleed, 1.0 Explosive' },
        { tier: 'Metal Insert ++', protection: '6.0 Bullet, 4.0 Bleed, 4.0 Explosive' },
        { tier: 'Metal Insert +++', protection: '8.0 Bullet, 6.0 Bleed, 6.0 Explosive' }
      ]
    }
  ],
  findingInserts: 'Armor Inserts can drop from loot sources across server worlds. Higher tiers (++, +++) are rarer than base tier (+).',
  usageGuide: [
    { situation: 'Ocean monuments (Deniz ve su alanları)', insert: 'Asbestos Inserts (Waterproof)' },
    { situation: 'Raid worlds (Raid Dünyaları ve savaş)', insert: 'Metal Inserts (Metal Serisi)' },
    { situation: 'Monument runs / vertical areas (Yüksek alanlar)', insert: 'Lead Inserts (Impact Serisi)' },
    { situation: 'General exploration (Genel gezinti)', insert: 'Wooden Inserts (Satiated Serisi)' }
  ]
};

// ==========================================
// 5. TÜM EFSANEVİ SİLAHLAR (TAM 13 SİLAH - OFFICIAL TABLE)
// ==========================================
export const LEGENDARY_WEAPONS = [
  {
    name: 'Brits Golden M249',
    effect: '+50% DMG to helis (Helikopterlere +%50 daha fazla hasar)',
    ammo: '5.56 Rifle ammo',
    role: 'Heli Avcısı'
  },
  {
    name: 'Brits Golden AK',
    effect: 'Anti-Bradley radar and +30% DMG to scientists (Bradley radarı ve Bilim İnsanlarına +%30 hasar)',
    ammo: '5.56 Rifle ammo',
    role: 'Monument & PvE Temizliği'
  },
  {
    name: 'The LAGINATOR',
    effect: 'Fully automatic high-powered rocket launcher (Tam otomatik yüksek güçlü roketatar)',
    ammo: '5.56 Rifle ammo and Rockets',
    role: 'Üs Yıkıcı / Raid Canavarı'
  },
  {
    name: 'Eoocoka',
    effect: 'Satchel-charged eoka pistol (Kese Bombası fırlatan eoka tabancası)',
    ammo: 'Shotgun shells and Satchels',
    role: 'Erken Oyun Kapı Kırıcı'
  },
  {
    name: 'Plaguepiercer',
    effect: '500% dmg to scientists (Bilim İnsanlarına %500 devasa hasar)',
    ammo: 'Arrows',
    role: 'Deep Sea & Cobalt Katili'
  },
  {
    name: 'Ashmaker',
    effect: 'Revolver that shoots HVs (HV Roketi ateşleyen özel altıpatlar)',
    ammo: 'Pistol bullets and HVs',
    role: 'Mobil Ağır Topçu'
  },
  {
    name: 'Brits Boom Stick',
    effect: 'Fusion of revolver and rockets (Altıpatlar ve roket füzyonu)',
    ammo: '5.56 Rifle ammo and Rockets',
    role: 'Raid Desteği & Yıkım'
  },
  {
    name: 'Ace’s Python',
    effect: '50-round revolver, +30% DMG to helis and +20% if wearing egg suit',
    ammo: '5.56 Rifle ammo',
    role: 'Hafif Heli Avcısı'
  },
  {
    name: 'Cluster Clutch',
    effect: 'Waterpipe shotgun that shoots F1 grenades (F1 el bombaları fırlatan pompalı tüfek)',
    ammo: 'Shotgun shells and F1 grenades',
    role: 'Alan Temizliği'
  },
  {
    name: 'Brits Broken Eoka',
    effect: '+500% DMG to helis (Pompalı mermisiyle helikopterlere tam +%500 Hasar!)',
    ammo: 'shotgun shells',
    role: 'Tek Vuruşta Heli İndirme'
  },
  {
    name: 'DoubleBoom',
    effect: 'Double barrel shotgun that shoots rockets (Roket fırlatan çifte pompalı tüfek)',
    ammo: 'Shotgun shells and Rockets',
    role: 'Yakın Mesafe Yıkım'
  },
  {
    name: 'Hydra’s Stolen Wand',
    effect: 'Shoots MLRS (Doğrudan MLRS füzeleri fırlatan asa)',
    ammo: 'MLRS',
    role: 'Kuşatma Asası'
  },
  {
    name: 'Huff-N-Puff',
    effect: 'Throws darts that decimate bradleys (Bradley tanklarını saniyeler içinde eriten özel dartlar)',
    ammo: 'HVs and Darts',
    role: 'Bradley Katili'
  }
];
