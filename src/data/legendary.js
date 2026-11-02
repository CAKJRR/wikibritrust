export const DURABILITY_GUIDE = {
  title: 'Dayanıklılık (Durability) & Tamir Sistemi',
  explanation: 'Rust vanilla mekaniğinde bir eşyayı Tamir Masasında (Repair Bench) tamir ettiğinizde maksimum canı kalıcı olarak azalır (kırmızı bar oluşur). Brits PvE Worlds V2\'de bu sistem şu kurallarla işler:',
  mechanics: [
    {
      title: 'Yetenek Ağacı Eskimeyi Yavaşlatır (%45 Koruma)',
      desc: 'Ağaçtaki pasifler (Tempered Steel, Hardened Edge, Damascus Steel, Well Crafted, Elite Manufacturing) eşyaların kullanım sırasındaki aşınmasını %45 oranında azaltır. Eşyalarınız 2 kat daha geç kırılır ama tamir masasında kırmızı barı silmez.'
    },
    {
      title: 'Mad’s Magical Tools (Standart Efsanevi)',
      desc: 'Normal efsanevi aletlerdir. Standart şekilde tamir masasında tamir edilir, normal şekilde max canı azar azar düşer.'
    },
    {
      title: 'Mad’s Extra Magical Tools (Kalıcı %100 Max Can!)',
      desc: 'Sunucudaki tek istisnadır. Tamir masasında tamir edildiğinde kırmızı bar cezasını sıfırlayarak orijinal %100 maksimum dayanıklılığına geri döner (Restore original maximum durability). Sonsuza kadar kırılmadan kullanılabilir.'
    }
  ]
};

// TÜM EFSANEVİ ALETLER (LEGENDARY TOOLS)
export const LEGENDARY_TOOLS = [
  {
    id: 'mads-extra-magical',
    name: 'Mad’s Extra Magical Tools',
    category: 'Tamir / Sonsuz Dayanıklılık',
    dropSource: 'Nightmare Raids, Legendary Helis, Deep Sea Kasaları',
    effect: 'Tamir masasında tamir edildiğinde kalıcı kırmızı bar cezasını siler ve eşyanın orijinal %100 maksimum dayanıklılığını geri yükler.',
    highlight: 'Sonsuza kadar kırılmadan %100 canla kullanılabilen tek alettir.'
  },
  {
    id: 'mads-magical',
    name: 'Mad’s Magical Tools',
    category: 'Standart Efsanevi Alet',
    dropSource: 'Yüksek seviye boss kasaları & etkinlik ödülleri',
    effect: 'Standart efsanevi toplama aletidir; tamir masasında normal tamir edilir ve normal oranda max can kaybeder.',
    highlight: 'Yüksek verim ve toplama hızı sağlar.'
  },
  {
    id: 'reaping-spade',
    name: 'Reaping Spade',
    category: 'Tarım & Hasat',
    dropSource: 'Yerden taş ve odun kütüğü toplarken nadiren düşer',
    effect: '6 metre yarıçaptaki tüm bitkileri (tam 3x3 planter kutusunu) tek tıkla anında hasat eder.',
    highlight: 'Bountiful Harvest ve God-Seed (GGGYYY) ile kumaş zengini olmanın anahtarıdır.'
  },
  {
    id: 'fertile-bone',
    name: 'Fertile Bone',
    category: 'Tarım & Büyütme',
    dropSource: 'Doğadaki yabani kenevir/meyve toplayıcılarından düşer',
    effect: '50 kemik tozu (Bone Fragment) karşılığında mahsulü anında bir sonraki büyüme evresine geçirir.',
    highlight: 'Ekilmiş bitkileri saniyeler içinde olgunlaştırıp hasada hazır hale getirir.'
  },
  {
    id: 'baloos-marrowpaw',
    name: 'Bal0o’s Marrowpaw',
    category: 'Avcılık & Kemik',
    dropSource: 'Ayı (Bear) avlayıp derisini yüzerken düşer',
    effect: 'Avlanan her hayvandan tam 4 KAT (4x) daha fazla kemik parçası (Bone Fragment) verir.',
    highlight: 'Fertile Bone aletinin kemik ihtiyacını sonsuz kılmak için kullanılır.'
  },
  {
    id: 'brits-broken-pickaxe',
    name: 'Brits Broken Pickaxe',
    category: 'Madencilik',
    dropSource: 'Efsanevi ganimet sandıkları & maden ödülleri',
    effect: 'Maden nodlarından tam +%60 ekstra cevher verimi sağlar.',
    highlight: 'Prospector (+%75) ile birleştiğinde devasa HQM ve kükürt akışı sağlar.'
  },
  {
    id: 'brits-broken-axe',
    name: 'Brits Broken Axe',
    category: 'Odunculuk / Çiftçilik',
    dropSource: 'Efsanevi ganimet sandıkları',
    effect: 'Ağaç keserken oyuncunun etrafında anında 4 ADET MADEN NODU doğurma şansı vardır.',
    highlight: 'Odun keserken aynı anda sülfür ve metal nodu çıkartarak maden arama derdini bitirir.'
  }
];

// TÜM EFSANEVİ ZIRH SETLERİ (LEGENDARY SETS)
export const LEGENDARY_SETS = [
  {
    id: 'dragon-thorn',
    name: 'Dragon Thorn Armor Set',
    category: 'Vampirik Zırh (Ölümsüz Tank)',
    dropSource: 'Endgame Zindanlar & Boss Sandıkları',
    parts: 'Maske (%1), Hoodie (%2), Pelerin (%7), Eldiven (%1), Çizme (%1), Pantolon (%0.5)',
    setBonus: 'Tam Set Bonusu: %12.5 Vampiric Healing (Hasar vurdukça can yenileme)!',
    desc: 'Düşmana hasar verdiğinizde canınızı doldurur. Combat ağacındaki Life Leech (%1) ile birleştiğinde toplam %13.5 can çalma yaparak sizi PvE çatışmalarında adeta ölümsüz kılar.'
  },
  {
    id: 'leviathan-armor',
    name: 'Leviathan Armor Set',
    category: 'Deep Sea Prototipi (Ağır Zırh)',
    dropSource: 'Deep Sea Cobalt Cargo gemisi ambarındaki kilitli sandıklar',
    parts: 'Ağır göğüslük, kask ve koruyucu bacak zırhı',
    setBonus: 'Yüksek darbe emilimi ve Deep Sea sualtı operasyon koruması.',
    desc: 'Cobalt gemilerindeki ölümcül taret ve elit bilim insanı saldırılarını emmek için özel olarak tasarlanmış en yeni prototip settir.'
  },
  {
    id: 'impact-armor',
    name: 'Impact Armor Set',
    category: 'Hasar Azaltma (Damage Mitigation)',
    dropSource: 'Nightmare Raid kasaları ve Helikopter enkazları',
    parts: 'Tam zırhlı kompozit plakalar',
    setBonus: 'Yüksek patlayıcı ve mermi direnci.',
    desc: 'Legendary patrol helikopterlerine ve roket tuzaklarına karşı hayatta kalmak için kullanılan ağır defans zırhı.'
  },
  {
    id: 'helping-hands',
    name: 'Helping Hands',
    category: 'Özel Efsanevi Aksesuar',
    dropSource: 'Nadir dünya bossu ödülleri',
    parts: 'Özel el/bilek donanımı',
    setBonus: 'Yere düştüğünde (downed) ANINDA %100 Canla Ayağa Kaldırır + 5 Saniye Tam Ölümsüzlük!',
    desc: 'PvE\'de solo oynarken veya zorlu bosslarda hata yaptığınızda hayatınızı kurtaran sunucunun en güçlü güvenlik mekanizmasıdır.'
  },
  {
    id: 'specialist-sets',
    name: 'Uzman Meslek Zırhları (Gathering Sets)',
    category: 'Özel Meslek Giysileri',
    dropSource: 'Pazar, görevler ve dünya sandıkları',
    parts: 'Lumberjack, Mining, Hunter, Farmer, Scavenger, Angler Setleri',
    setBonus: 'Her set kendi alanında (Odun, Maden, Deri/Kemik, Ekin, Hurda, Balık) ekstra verim ve hız bonusu sağlar.',
    desc: 'İlgili efsanevi aletle giyildiğinde (örn: Lumberjack Set + Brits Broken Axe) maksimum sinerji oluşturur.'
  }
];

// TÜM EFSANEVİ SİLAHLAR (LEGENDARY WEAPONS - TAM 13 SİLAH)
export const LEGENDARY_WEAPONS = [
  {
    name: 'Brits Golden M249',
    effect: 'Helikopterlere +%50 daha fazla hasar (+50% DMG to Helis)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Heli Avcısı'
  },
  {
    name: 'Brits Golden AK',
    effect: 'Bradley radarı ve Bilim İnsanlarına +%30 hasar (Anti-Bradley radar & +30% DMG to scientists)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Monument & PvE Temizliği'
  },
  {
    name: 'The LAGINATOR',
    effect: 'Tam otomatik yüksek güçlü roketatar (Fully automatic high-powered rocket launcher)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo) & Roket (Rocket)',
    role: 'Üs Yıkıcı / Raid Canavarı'
  },
  {
    name: 'Plaguepiercer',
    effect: 'Bilim İnsanlarına %500 devasa hasar (500% dmg to scientists)',
    ammo: 'Ok (Arrows)',
    role: 'Deep Sea & Cobalt Katili'
  },
  {
    name: 'Ashmaker',
    effect: 'HV Roketi ateşleyen özel altıpatlar (Revolver that shoots HVs)',
    ammo: 'Tabanca Mermisi (Pistol Ammo) & HV Roket (HV Rocket)',
    role: 'Mobil Ağır Topçu'
  },
  {
    name: 'Brits Boom Stick',
    effect: 'Altıpatlar ve roket füzyonu (Fusion of revolver and rockets)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo) & Roket (Rocket)',
    role: 'Raid Desteği'
  },
  {
    name: 'Ace’s Python',
    effect: '50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümü giyiliyorsa +%20 ekstra)',
    ammo: '5.56 Tüfek Mermisi (5.56 Rifle Ammo)',
    role: 'Hafif Heli Avcısı'
  },
  {
    name: 'Brits Broken Eoka',
    effect: 'Helikopterlere tam +%500 Hasar! (+500% DMG to helis)',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells)',
    role: 'Tek Vuruşta Heli Patlatma'
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
    name: 'Hydra’s Stolen Wand',
    effect: 'Doğrudan MLRS füzeleri fırlatan mistik asa (Shoots MLRS)',
    ammo: 'MLRS Roketi (MLRS Rocket)',
    role: 'Kuşatma Asası'
  },
  {
    name: 'Huff-N-Puff',
    effect: 'Bradley tanklarını saniyeler içinde eriten özel dartlar fırlatır',
    ammo: 'HV Roket (HV Rocket) & Özel Dart (Special Dart)',
    role: 'Bradley Katili'
  },
  {
    name: 'Eooooka',
    effect: 'Kese Bombası (Satchel Charge) fırlatan eoka tabancası',
    ammo: 'Av Tüfeği Saçması (Shotgun Shells) & Kese Bombası (Satchel Charge)',
    role: 'Erken Oyun Kapı Kırıcı'
  }
];
