// ==========================================
// 1. TAMİR & DAYANIKLILIK REHBERİ (DURABILITY & REPAIR)
// ==========================================
export const DURABILITY_GUIDE = {
  title: 'Dayanıklılık & Kırmızı Bar Mekaniği',
  explanation: 'Rust oyununda bir eşyayı Tamir Masasında (Repair Bench) tamir ettikçe kalıcı kırmızı bir bar birikir. Kırmızı bar eşyanın maksimum canını sınırlar ve kırmızı bar tamamen dolduğunda (fullenirse) o eşya bir daha asla tamir edilemez, kırıldığında tamamen yok olur. Brits PvE Worlds V2 sunucusunda bu sistem şu kurallarla çalışır:',
  mechanics: [
    {
      title: 'Mad’s Extra Magical Tools (Tek Kullanımlık Kurtarıcı)',
      desc: 'Bu bir alet DEĞİLDİR; tek kullanımlık özel bir tamir eşyasıdır. Envanterde sürükle-bırak (Drag & Drop) yapılarak canı azalmış eşyaların üzerine bırakılır. Eşyayı yok olmaktan kurtaran tek mekanizmadır: Kalıcı kırmızı barı tamamen sıfırlar ve eşyayı %100 orijinal yeşil canına geri döndürür.'
    },
    {
      title: 'Yeşil Bar ve Kırmızı Bar Farkı',
      desc: 'Yeşil bar eşyanın mevcut kullanım canıdır. Kırmızı bar ise tamir masası kullandıkça biriken aşınma sınırıdır. Kırmızı bar dolduğunda eşya kilitlenir ve tamir edilemez hale gelir. Normal tamir masası kırmızı barı silemez; yalnızca Mad’s Extra Magical Tools kırmızı barı tamamen silebilir.'
    },
    {
      title: 'Yetenek Ağacı Eskimeyi Yavaşlatır (%45 Koruma)',
      desc: 'Gathercraft ve Survivalcraft dallarındaki pasif yetenekler (Tempered Steel, Hardened Edge, Damascus Steel, Well Crafted, Elite Manufacturing) eşyaların kullanım sırasındaki aşınmasını %45 oranında azaltır. Eşyalarınız normalden 2 kat daha geç kırılır.'
    }
  ]
};

// ==========================================
// 2. TÜM EFSANEVİ ALETLER & TAMİR EŞYALARI (DOĞAL SIRALAMA)
// ==========================================
export const LEGENDARY_TOOLS = [
  {
    id: 'brits-broken-axe',
    name: 'Brits Broken Axe',
    category: 'Odunculuk / Çiftçilik',
    isConsumable: false,
    dropSource: 'Efsanevi ganimet sandıkları',
    effect: 'Ağaç keserken oyuncunun çevresinde anında 4 ekstra maden nodu çıkarma şansı vardır.',
    highlight: 'En yüksek verim için Lumberjack seti ile eşleştirin.'
  },
  {
    id: 'brits-broken-pickaxe',
    name: 'Brits Broken Pickaxe',
    category: 'Madencilik',
    isConsumable: false,
    dropSource: 'Efsanevi ganimet sandıkları ve maden ödülleri',
    effect: 'Maden nodlarından sabit +%60 ekstra cevher verimi sağlar.',
    highlight: 'Prospector (+%75) ile birleştiğinde devasa HQM ve kükürt akışı sağlar.'
  },
  {
    id: 'reaping-spade',
    name: 'Reaping Spade',
    category: 'Tarım & Hasat',
    isConsumable: false,
    dropSource: 'Yerdeki taş ve kütükler toplanırken nadiren bulunur',
    effect: '6 metre çapındaki tüm ekili bitkileri (3x3 planter kutuları için ideal) tek tıkla anında hasat eder.',
    highlight: 'Bountiful Harvest ve God-Seed (GGGYYY) ile kumaş zengini olmanın anahtarıdır.'
  },
  {
    id: 'fertile-bone',
    name: 'Fertile Bone',
    category: 'Tarım & Büyütme',
    isConsumable: false,
    dropSource: 'Yabani toplanabilirlerden bulunur',
    effect: 'Aşama başına 50 kemik parçası harcayarak bitkileri anında bir sonraki büyüme evresine geçirir.',
    highlight: 'Ekilmiş bitkileri saniyeler içinde olgunlaştırıp hasada hazır hale getirir.'
  },
  {
    id: 'baloos-marrowpaw',
    name: 'Bal0o’s Marrowpaw',
    category: 'Avcılık & Kemik',
    isConsumable: false,
    dropSource: 'Ayı avlayıp derisini yüzerken bulunur',
    effect: 'Avlanan her hayvandan tam 4 kat daha fazla kemik verir.',
    highlight: 'Fertile Bone aletinin kemik ihtiyacını tek başına karşılar.'
  },
  {
    id: 'mads-magical',
    name: 'Mad’s Magical Tools',
    category: 'Standart Efsanevi Alet',
    isConsumable: false,
    dropSource: 'Yüksek seviye boss kasaları ve etkinlik ödülleri',
    effect: 'Standart efsanevi toplama aletidir; yüksek verim sağlar, tamir masasında normal şekilde tamir edilir.',
    highlight: 'Hızlı hammadde toplamak için ideal başlangıç efsanevisidir.'
  },
  {
    id: 'mads-extra-magical',
    name: 'Mad’s Extra Magical Tools',
    category: 'Özel Tamir Eşyası',
    isConsumable: true,
    dropSource: 'Nightmare Raids, Legendary Helis, Deep Sea Kasaları',
    effect: 'Bir alet değildir; tek kullanımlık sürükle-bırak tamir eşyasıdır. Envanterde canı azalmış herhangi bir eşyanın üzerine sürüklendiğinde kalıcı kırmızı bar cezasını tamamen sıfırlar ve eşyayı %100 maksimum yeşil cana ulaştırır.',
    highlight: 'Kırmızı barı dolup bir daha tamir edilemeyecek eşyaları yok olmaktan kurtaran tek yöntemdir.'
  }
];

// ==========================================
// 3. EFSANEVİ ZIRH SETLERİ (SAVAŞ & TOPLAMA)
// ==========================================
export const LEGENDARY_SETS = [
  // --- SAVAŞ SETLERİ ---
  {
    id: 'leviathan-armor',
    name: 'Leviathan Zırh Seti',
    category: 'Savaş Seti (Deep Sea Prototipi)',
    role: 'Ağır Darbe Emilimi',
    dropSource: 'Deep Sea Cobalt kargo ambarı ve kilitli kasaları',
    parts: '1 parçada ~%33, 6 parçada %46 emilim',
    setBonus: 'Tam Sette %53 Darbe Emilimi',
    desc: 'Deep Sea Cobalt kargo operasyonları için geliştirilmiş ağır prototip zırhtır. Ölümcül gemi taretleri ve elit bilim insanı saldırılarında gelen hasarı maksimum oranda emer.'
  },
  {
    id: 'impact-armor',
    name: 'Impact Zırh Seti',
    category: 'Savaş Seti (Hasar Azaltma)',
    role: 'Darbe Dayanıklılığı',
    dropSource: 'Nightmare Raid kasaları ve Helikopter enkazları',
    parts: 'Tam Zırhlı Kompozit Plakalar',
    setBonus: 'Tam Sette %33 Hasar Azaltma',
    desc: 'Patrol helikopterlerine, roket tuzaklarına ve ağır patlamalara karşı hayatta kalmayı sağlayan dayanıklı savunma zırhı.'
  },
  {
    id: 'dragon-thorn',
    name: 'Dragon Thorn Zırh Seti',
    category: 'Savaş Seti (Vampirik İyileşme)',
    role: 'Ölümsüz Tank Seti',
    dropSource: 'Endgame Zindanlar ve Boss Sandıkları',
    parts: 'Maske (%1), Hoodie (%2), Pelerin (%7), Eldiven (%1), Çizme (%1), Pantolon (%0.5)',
    setBonus: 'Tam Sette %12.5 Can Emme (Vampiric)',
    desc: 'Hasar vurdukça canınızı doldurur. Combat ağacındaki Life Leech (%1) yeteneği ile birleştiğinde toplam %13.5 can yenilemesiyle çatışmalarda ölümsüz bir tanka dönüşürsünüz.'
  },
  {
    id: 'helping-hands',
    name: 'Helping Hands',
    category: 'Efsanevi Güvenlik Donanımı',
    role: 'Otomatik Dirilme',
    dropSource: 'Nadir dünya bossu ödülleri ve etkinlik kasaları',
    parts: 'Özel el ve zırh donanımı',
    setBonus: 'Yere düştüğünde anında %100 tam canla ayağa kaldırır + 5 saniye ölümsüzlük verir!',
    desc: 'Zorlu boss dövüşlerinde veya raidlerde hata yaptığınızda hayatınızı kurtaran sunucunun en güçlü güvenlik mekanizmasıdır.'
  },

  // --- TOPLAMA SETLERİ ---
  {
    id: 'mining-set',
    name: 'Madencilik Seti (Mining Set)',
    category: 'Toplama Seti (Maden)',
    role: '+%100 Maden Verimi',
    dropSource: 'Görevler, pazar ve dünya sandıkları',
    parts: 'Madenci Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Maden Cevheri',
    desc: 'Taş, metal, kükürt ve HQM madenlerinden 2 kat daha fazla hammadde kazandırır. Brits Broken Pickaxe ile birleştiğinde maksimum verime ulaşır.'
  },
  {
    id: 'lumberjack-set',
    name: 'Oduncu Seti (Lumberjack Set)',
    category: 'Toplama Seti (Odun)',
    role: '+%100 Odun Verimi',
    dropSource: 'Quartermaster görevleri ve etkinlik ödülleri',
    parts: 'Oduncu Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Odun',
    desc: 'Ağaç keserken odun miktarını tam ikiye katlar. Brits Broken Axe ile birlikte giyildiğinde odun keserken etrafta 4 maden nodu çıkarma şansını en verimli şekilde kullanır.'
  },
  {
    id: 'hunter-set',
    name: 'Avcı Seti (Hunter Set)',
    category: 'Toplama Seti (Avcılık & Hayvan)',
    role: '+%100 Deri ve Kemik',
    dropSource: 'Avcılık görev zincirleri ve nadir sandıklar',
    parts: 'Avcı Şapkası (%30), Gövde (%35), Pantolon (%35)',
    setBonus: 'Tam Sette %100 Ekstra Deri & Kemik',
    desc: 'Vahşi hayvanları kesip derisini yüzerken 2 kat fazla hammadde sağlar. Bal0o\'s Marrowpaw ile birleştiğinde devasa kemik stoğu elde edilir.'
  },
  {
    id: 'farmer-set',
    name: 'Çiftçi Seti (Farmer Set)',
    category: 'Toplama Seti (Tarım)',
    role: '+%60 Hasat Verimi',
    dropSource: 'Tarım görevleri ve Çiftçi Pazarı',
    parts: 'Çiftçi Şapkası, Gömlek, Pantolon',
    setBonus: 'Tam Sette %60 Ekstra Hasat Verimi',
    desc: 'Kenevir, mısır, patates ve meyve hasatlarında verimi doğrudan artırır. Reaping Spade ile 3x3 planter toplarken maksimum RP getirir.'
  },
  {
    id: 'scavenger-set',
    name: 'Yağmacı Seti (Scavenger Set)',
    category: 'Toplama Seti (Hurda & Bileşen)',
    role: '+%60 Hurda & Parça',
    dropSource: 'Monument sandıkları ve yol kasaları',
    parts: 'Scavenger Maskesi, Ceketi, Pantolonu',
    setBonus: 'Tam Sette %60 Ekstra Hurda & Bileşen',
    desc: 'Varillerden ve sandıklardan hurda ve bileşen toplama verimini artırır. Salvage King yeteneğiyle birleştiğinde wipe başı gelişimini uçurur.'
  },
  {
    id: 'angler-set',
    name: 'Balıkçı Seti (Angler Set)',
    category: 'Toplama Seti (Balıkçılık)',
    role: '+%200 Balık Bonusu',
    dropSource: 'Balıkçılık görevleri ve kıyı sandıkları',
    parts: 'Balıkçı Şapkası, Yelek, Pantolon',
    setBonus: 'Tam Sette %200 Ekstra Balıkçılık Bonusu',
    desc: 'Okyanus ve nehir balıkçılığında 3 kat verim sağlar; nadir balık ve ganimet yakalama şansını zirveye taşır.'
  }
];

// ==========================================
// 4. ZIRH EKLENTİLERİ (ARMOR INSERTS - TAM TÜRKÇE)
// ==========================================
export const ARMOR_INSERTS = {
  title: 'Zırh Eklentileri (Armor Inserts)',
  summary: 'Zırh parçalarına takılarak belirli hasar türlerine karşı ek direnç sağlayan bulunabilir eklentilerdir. Her eklenti üç kademede gelir: +, ++ ve +++.',
  howItWorks: 'Zırh eklentileri koruyucu giysilere takılan takviyelerdir. Farklı eklenti aileleri farklı tehlikelere karşı koruma sağlar; bu sayede girdiğiniz göreve göre eklentilerinizi değiştirebilirsiniz.',
  proTip: [
    'Deniz ve su altı operasyonları: Asbestos (Asbest) eklentileri kullanın.',
    'Raid dünyaları ve ağır askeri çatışmalar: Metal eklentileri kullanın.',
    'Yüksekten düşme riski olan kule ve anıtlar: Lead (Kurşun) eklentileri kullanın.',
    'Genel harita keşfi ve hayatta kalma: Wooden (Ahşap) eklentileri kullanın.'
  ],
  types: [
    {
      id: 'wooden',
      name: 'Ahşap Eklentiler (Satiated Serisi)',
      tier: '+, ++, +++',
      purpose: 'Genel Gezinti ve Günlük Hayatta Kalma',
      resists: 'Isırık, kesik, ezilme, saplanma, açlık, susuzluk ve arı sokması',
      recommendedArea: 'Genel harita keşfi, vahşi doğa ve günlük aktiviteler.',
      tierTable: [
        { tier: 'Wooden Insert +', protection: '1.0 (tüm koruma türlerinde)' },
        { tier: 'Wooden Insert ++', protection: '2.0 (tüm koruma türlerinde)' },
        { tier: 'Wooden Insert +++', protection: '3.0 (tüm koruma türlerinde)' }
      ]
    },
    {
      id: 'asbestos',
      name: 'Asbest Eklentileri (Waterproof Serisi)',
      tier: '+, ++, +++',
      purpose: 'Deniz ve Su Altı Operasyonları',
      resists: 'Boğulma hasarı ve soğuk maruziyeti',
      recommendedArea: 'Deniz ve su monumentleri, batıklar ve Deep Sea Cobalt kargo operasyonları.',
      tierTable: [
        { tier: 'Asbestos Insert +', protection: '5.0 Boğulma, 1.0 Soğuk' },
        { tier: 'Asbestos Insert ++', protection: '10.0 Boğulma, 2.0 Soğuk' },
        { tier: 'Asbestos Insert +++', protection: '15.0 Boğulma, 3.0 Soğuk' }
      ]
    },
    {
      id: 'lead',
      name: 'Kurşun Eklentileri (Impact Serisi)',
      tier: '+, ++, +++',
      purpose: 'Kinetik Darbe ve Patlama Koruması',
      resists: 'Düşme hasarı, patlama hasarı ve araç çarpması',
      recommendedArea: 'Yüksekten düşme riski olan kuleler, monument tırmanışları ve patlayıcı alanları.',
      tierTable: [
        { tier: 'Lead Insert +', protection: '1.0 (her tür için)' },
        { tier: 'Lead Insert ++', protection: '2.0 (her tür için)' },
        { tier: 'Lead Insert +++', protection: '3.0 (her tür için)' }
      ]
    },
    {
      id: 'metal',
      name: 'Metal Eklentileri (Metal Serisi)',
      tier: '+, ++, +++',
      purpose: 'Ağır Askeri Çatışma Koruması',
      resists: 'Mermi hasarı, kanama ve patlayıcı hasarı',
      recommendedArea: 'Raid Dünyaları (/buyraid), zorlu üs baskınları ve elit NPC savaşları.',
      note: 'Savaş Notu: Metal eklentiler genellikle Raid Dünyaları ve zorlu boss çatışmaları için en iyi tercihtir.',
      tierTable: [
        { tier: 'Metal Insert +', protection: '4.0 Mermi, 2.0 Kanama, 1.0 Patlayıcı' },
        { tier: 'Metal Insert ++', protection: '6.0 Mermi, 4.0 Kanama, 4.0 Patlayıcı' },
        { tier: 'Metal Insert +++', protection: '8.0 Mermi, 6.0 Kanama, 6.0 Patlayıcı' }
      ]
    }
  ],
  findingInserts: 'Zırh eklentileri sunucu dünyalarındaki ganimet sandıklarından, anıtlardan ve boss kasalarından düşer. Üst kademeler (++ ve +++), temel kademeden (+) çok daha nadirdir.',
  usageGuide: [
    { situation: 'Deniz ve su monumentleri', insert: 'Asbestos Inserts (Asbest)' },
    { situation: 'Raid Dünyaları ve askeri savaş', insert: 'Metal Inserts (Metal)' },
    { situation: 'Kule tırmanışları ve yüksek alanlar', insert: 'Lead Inserts (Kurşun)' },
    { situation: 'Genel harita keşfi ve gezinti', insert: 'Wooden Inserts (Ahşap)' }
  ]
};

// ==========================================
// 5. TÜM EFSANEVİ SİLAHLAR (MERMİLER OYUN İÇİ İSİMLERİYLE)
// ==========================================
export const LEGENDARY_WEAPONS = [
  {
    name: 'Brits Golden M249',
    effect: 'Helikopterlere +%50 daha fazla hasar (+50% DMG to Helis)',
    ammo: '5.56 Rifle Ammo',
    role: 'Heli Avcısı'
  },
  {
    name: 'Brits Golden AK',
    effect: 'Bradley radarı ve Bilim İnsanlarına +%30 hasar',
    ammo: '5.56 Rifle Ammo',
    role: 'Monument & PvE Temizliği'
  },
  {
    name: 'The LAGINATOR',
    effect: 'Tam otomatik yüksek güçlü roketatar',
    ammo: '5.56 Rifle Ammo & Rockets',
    role: 'Üs Yıkıcı / Raid Canavarı'
  },
  {
    name: 'Eoocoka',
    effect: 'Kese Bombası (Satchel) fırlatan eoka tabancası',
    ammo: 'Shotgun Shells & Satchel Charges',
    role: 'Erken Oyun Kapı Kırıcı'
  },
  {
    name: 'Plaguepiercer',
    effect: 'Bilim İnsanlarına %500 devasa hasar',
    ammo: 'Arrows',
    role: 'Deep Sea & Cobalt Katili'
  },
  {
    name: 'Ashmaker',
    effect: 'HV Roketi ateşleyen özel altıpatlar',
    ammo: 'Pistol Bullets & HV Rockets',
    role: 'Mobil Ağır Topçu'
  },
  {
    name: 'Brits Boom Stick',
    effect: 'Altıpatlar ve roket mühimmatının hibrit füzyonu',
    ammo: '5.56 Rifle Ammo & Rockets',
    role: 'Raid Desteği & Yıkım'
  },
  {
    name: 'Ace’s Python',
    effect: '50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümünde +%20 ekstra)',
    ammo: '5.56 Rifle Ammo',
    role: 'Hafif Heli Avcısı'
  },
  {
    name: 'Cluster Clutch',
    effect: 'F1 el bombaları fırlatan su borusu pompalı tüfek',
    ammo: 'Shotgun Shells & F1 Grenades',
    role: 'Alan Temizliği'
  },
  {
    name: 'Brits Broken Eoka',
    effect: 'Pompalı mermisiyle helikopterlere tam +%500 Hasar!',
    ammo: 'Shotgun Shells',
    role: 'Tek Vuruşta Heli İndirme'
  },
  {
    name: 'DoubleBoom',
    effect: 'Roket fırlatan çifte pompalı tüfek',
    ammo: 'Shotgun Shells & Rockets',
    role: 'Yakın Mesafe Yıkım'
  },
  {
    name: 'Hydra’s Stolen Wand',
    effect: 'Doğrudan MLRS füzeleri fırlatan mistik asa',
    ammo: 'MLRS Rockets',
    role: 'Kuşatma Asası'
  },
  {
    name: 'Huff-N-Puff',
    effect: 'Bradley tanklarını saniyeler içinde eriten özel dartlar fırlatır',
    ammo: 'HV Rockets & Special Darts',
    role: 'Bradley Katili'
  }
];
