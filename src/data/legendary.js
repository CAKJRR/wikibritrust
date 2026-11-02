// ==========================================
// 1. TAMİR & DAYANIKLILIK REHBERİ
// ==========================================
export const DURABILITY_GUIDE = {
  title: 'Dayanıklılık (Durability) & Tamir Sistemi',
  explanation: 'Rust vanilla mekaniğinde bir eşyayı Tamir Masasında (Repair Bench) tamir ettiğinizde maksimum canı kalıcı olarak azalır (kırmızı bar oluşur). Brits PvE Worlds V2\'de bu sistem şu kurallarla işler:',
  mechanics: [
    {
      title: 'Mad’s Extra Magical Tools (Kalıcı %100 Max Can!)',
      desc: 'Sunucudaki tek istisnadır. Tamir masasında tamir edildiğinde kalıcı kırmızı bar cezasını tamamen silerek eşyanın orijinal %100 maksimum dayanıklılığını geri yükler. Nightmare Raid kasalarından, Legendary Heli enkazlarından veya Deep Sea sandıklarından nadir ganimet olarak düşer.'
    },
    {
      title: 'Yetenek Ağacı Eskimeyi Yavaşlatır (%45 Koruma)',
      desc: 'Ağaçtaki pasifler (Tempered Steel, Hardened Edge, Damascus Steel, Well Crafted, Elite Manufacturing) eşyaların kullanım sırasındaki aşınmasını %45 oranında azaltır. Eşyalarınız 2 kat daha geç kırılır.'
    },
    {
      title: 'Mad’s Magical Tools (Standart Efsanevi)',
      desc: 'Normal efsanevi aletlerdir. Standart şekilde tamir masasında tamir edilir, normal şekilde max canı azar azar düşer. Yüksek toplama hızı sağlar.'
    }
  ]
};

// ==========================================
// 2. TÜM EFSANEVİ ALETLER (LEGENDARY TOOLS)
// ==========================================
export const LEGENDARY_TOOLS = [
  {
    id: 'mads-extra-magical',
    name: 'Mad’s Extra Magical Tools',
    category: 'Tamir / Sonsuz Dayanıklılık',
    dropSource: 'Nightmare Raids, Legendary Helis, Deep Sea Kasaları',
    effect: 'Tamir masasında tamir edildiğinde kalıcı kırmızı bar cezasını tamamen siler ve eşyanın orijinal %100 maksimum dayanıklılığını geri yükler.',
    highlight: 'Sonsuza kadar kırılmadan %100 canla kullanılabilen tek alettir.'
  },
  {
    id: 'brits-broken-axe',
    name: 'Brits Broken Axe',
    category: 'Odunculuk / Çiftçilik',
    dropSource: 'Efsanevi ganimet sandıkları',
    effect: 'Ağaç keserken oyuncunun çevresinde anında 4 ekstra maden nodu çıkarma şansı vardır.',
    highlight: 'En yüksek verim için Lumberjack kıyafeti ile eşleştirin.'
  },
  {
    id: 'brits-broken-pickaxe',
    name: 'Brits Broken Pickaxe',
    category: 'Madencilik',
    dropSource: 'Efsanevi ganimet sandıkları & maden ödülleri',
    effect: 'Maden nodlarından sabit +%60 ekstra cevher verimi sağlar.',
    highlight: 'Prospector (+%75) ile birleştiğinde devasa HQM ve kükürt akışı sağlar.'
  },
  {
    id: 'reaping-spade',
    name: 'Reaping Spade',
    category: 'Tarım & Hasat',
    dropSource: 'Yerdeki taş ve kütükler toplanırken nadiren bulunur',
    effect: '6 metre çapındaki tüm bitkileri (tam 3x3 planter düzeni için ideal) tek tıkla anında hasat eder.',
    highlight: 'Bountiful Harvest ve God-Seed (GGGYYY) ile kumaş zengini olmanın anahtarıdır.'
  },
  {
    id: 'fertile-bone',
    name: 'Fertile Bone',
    category: 'Tarım & Büyütme',
    dropSource: 'Yabani toplanabilirlerden (wild collectibles) bulunur',
    effect: 'Aşama başına 50 kemik parçasıyla bitkileri anında bir sonraki büyüme evresine geçirir.',
    highlight: 'Ekilmiş bitkileri saniyeler içinde olgunlaştırıp hasada hazır hale getirir.'
  },
  {
    id: 'baloos-marrowpaw',
    name: 'Bal0o’s Marrowpaw',
    category: 'Avcılık & Kemik',
    dropSource: 'Ayı (Bear) avlayıp derisini yüzerken bulunur',
    effect: 'Avlanan her hayvandan tam 4 kat (4x) daha fazla kemik verir.',
    highlight: 'Fertile Bone aletinin kemik ihtiyacını tek başına karşılar.'
  },
  {
    id: 'mads-magical',
    name: 'Mad’s Magical Tools',
    category: 'Standart Efsanevi Alet',
    dropSource: 'Yüksek seviye boss kasaları & etkinlik ödülleri',
    effect: 'Standart efsanevi toplama aletidir; yüksek verim sağlar, normal oranda tamir edilir.',
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
// 4. ZIRH EKLENTİLERİ (ARMOR INSERTS)
// ==========================================
export const ARMOR_INSERTS = {
  title: 'Zırh Eklentileri (Armor Inserts)',
  summary: 'Zırh parçalarına takılarak belirli hasar türlerine karşı direnç ekleyen bulunabilir eklentilerdir. Her eklenti üç kademede gelir: +, ++ ve +++.',
  types: [
    {
      name: 'Wooden Inserts (Satiated Serisi)',
      tier: '+, ++, +++',
      purpose: 'Genel Gezinti & Hayatta Kalma',
      resists: 'Isırık, kesik, ezik, saplanma, açlık, susuzluk ve arı sokmasına karşı genel hayatta kalma koruması.',
      recommendedArea: 'Genel harita gezintisi, vahşi doğa ve günlük aktiviteler.'
    },
    {
      name: 'Asbestos Inserts (Waterproof Serisi)',
      tier: '+, ++, +++',
      purpose: 'Deniz & Su Operasyonları',
      resists: 'Boğulma hasarını belirgin şekilde azaltır; hafif soğuk direnci verir.',
      recommendedArea: 'Deniz ve su monumentleri, Deep Sea kargo ve su altı batıkları.'
    },
    {
      name: 'Lead Inserts (Impact Serisi)',
      tier: '+, ++, +++',
      purpose: 'Darbe & Patlama Koruması',
      resists: 'Düşme hasarı, patlama ve araç hasarı gibi darbe türlerine karşı direnç sağlar.',
      recommendedArea: 'Yüksekten düşme riski olan kuleler, monument tırmanışları ve patlayıcı alanları.'
    },
    {
      name: 'Metal Inserts (Metal Serisi)',
      tier: '+, ++, +++',
      purpose: 'Ağır Savaş & Baskın Koruması',
      resists: 'Kurşun, kanama ve patlama hasarına karşı sunucudaki en güçlü savaş korumasıdır.',
      recommendedArea: 'Raid Dünyaları (/buyraid), zorlu üs baskınları ve elit NPC savaşları.'
    }
  ],
  usageGuide: [
    { situation: 'Deniz ve su monumentleri', insert: 'Asbestos Inserts (Waterproof)' },
    { situation: 'Raid Dünyaları ve askeri çatışma', insert: 'Metal Inserts (Metal Serisi)' },
    { situation: 'Yüksekten düşme riski olan yerler', insert: 'Lead Inserts (Impact Serisi)' },
    { situation: 'Genel gezinti ve temel hayatta kalma', insert: 'Wooden Inserts (Satiated Serisi)' }
  ]
};

// ==========================================
// 5. TÜM EFSANEVİ SİLAHLAR (TAM 13 SİLAH)
// ==========================================
export const LEGENDARY_WEAPONS = [
  {
    name: 'Brits Golden AK',
    effect: 'Bradley radarı ve Bilim İnsanlarına +%30 hasar (Anti-Bradley radar & +30% DMG to scientists)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Monument & PvE Temizliği'
  },
  {
    name: 'Brits Golden M249',
    effect: 'Helikopterlere +%50 daha fazla hasar (+50% DMG to Helis)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Heli Avcısı'
  },
  {
    name: 'The LAGINATOR',
    effect: 'Tam otomatik yüksek güçlü roketatar (Fully automatic high-powered rocket launcher)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo) & Roket (Rocket)',
    role: 'Üs Yıkıcı / Raid Canavarı'
  },
  {
    name: 'Plaguepiercer',
    effect: 'Bilim İnsanlarına %500 devasa hasar (500% DMG to scientists)',
    ammo: 'Ok (Arrows)',
    role: 'Deep Sea & Cobalt Katili'
  },
  {
    name: 'Brits Boom Stick',
    effect: 'Standart silah gövdesini patlayıcı roket mühimmatıyla birleştiren melez tüfek',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo) & Roket (Rocket)',
    role: 'Raid Desteği & Yıkım'
  },
  {
    name: 'DoubleBoom',
    effect: 'Roket fırlatan çifte pompalı tüfek (Double barrel shotgun that shoots rockets)',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells) & Roket (Rocket)',
    role: 'Yakın Mesafe Yıkım'
  },
  {
    name: 'Cluster Clutch',
    effect: 'F1 el bombaları fırlatan su borusu pompalı tüfek (Shoots F1 grenades)',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells) & F1 El Bombası (F1 Grenade)',
    role: 'Alan Temizliği'
  },
  {
    name: 'Brits Broken Eoka',
    effect: 'Pompalı mermisiyle helikopterlere tam +%500 Hasar! (+500% DMG to Helis)',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells)',
    role: 'Tek Vuruşta Heli Patlatma'
  },
  {
    name: 'Huff-N-Puff',
    effect: 'Bradley tanklarını saniyeler içinde eriten özel dartlar fırlatır',
    ammo: 'HV Roket (HV Rocket) & Özel Dart (Special Dart)',
    role: 'Bradley Katili'
  },
  {
    name: 'Ashmaker',
    effect: 'HV Roketi ateşleyen özel altıpatlar (Revolver that shoots HVs)',
    ammo: 'Tabanca Mermisi (Pistol Ammo) & HV Roket (HV Rocket)',
    role: 'Mobil Ağır Topçu'
  },
  {
    name: 'Ace’s Python',
    effect: '50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümü giyiliyorsa +%20 ekstra)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Hafif Heli Avcısı'
  },
  {
    name: 'Hydra’s Stolen Wand',
    effect: 'Doğrudan MLRS füzeleri fırlatan mistik asa (Shoots MLRS)',
    ammo: 'MLRS Roketi (MLRS Rocket)',
    role: 'Kuşatma Asası'
  },
  {
    name: 'Eooooka',
    effect: 'Kese Bombası (Satchel Charge) fırlatan eoka tabancası',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells) & Kese Bombası (Satchel Charge)',
    role: 'Erken Oyun Kapı Kırıcı'
  }
];
