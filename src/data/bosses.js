export const BOSSES_DATA = [
  {
    id: 'harbinger',
    name: 'Harbinger (Boss Drone)',
    category: 'Endgame World Boss',
    location: '/outpost (Piyanonun Yanındaki Portal)',
    entryRequirement: '1.000.000 RP Keycard VEYA "Boom God" Görevinden Alınan Harbinger Boss Card',
    cooldown: '30 Dakika (Yeniden Doğma)',
    mechanics: [
      'Uçan mekanik drone boss; roketler ve ölümcül ateş ışınları (fire rays) püskürtür.',
      'Arena içerisindeki derin mağara (deep cave) siper olarak kullanılmalıdır.',
      'TEK BİR GİRİŞ HAKKI: Ölürseniz tekrar içeri giremezsiniz, kapı kilitlenir (Loot dışarıya bırakılır).',
      'Combat ağacındaki Hot Blooded (%25 Ateş Direnci) ve yanmaz kıyafetler kritik önem taşır.'
    ],
    recommendedWeapon: 'LR-300 (Sıfır seken geri tepmesiyle mağara siperinden uzaktan vurmak için en iyi silahtır) veya Brits Golden M249.',
    rewards: [
      'Gem of Reserve (Silahların şarjör kapasitesini kalıcı olarak artıran efsanevi mücevher)',
      'Efsanevi Eşyalar (Mad’s Magical / Extra Magical Tools ve Altın Silah düşme şansı)',
      'Devasa miktarda XP ve RP ödülü'
    ]
  },
  {
    id: 'deep-sea-cargo',
    name: 'Deep Sea – Cobalt Cargo Ships',
    category: 'Okyanus Etkinliği',
    location: 'Okyanustaki 5 Ayrı Cobalt Kargo Gemisi',
    entryRequirement: 'Giriş kartı veya güvenli çıkarma (Bot/Tugboat)',
    cooldown: '1.5 - 2 Saatte Bir Sıfırlanır (Son 1 saate kadar respawn olur)',
    mechanics: [
      'Gemi üzerindeki taretler tam HQM zırhta bile tek atışta 153 hasar vurur (Taretleri indirmek için 3 HV roketi gerekir).',
      'İçeride ağır zırhlı elit Cobalt Bilim İnsanları bulunur.',
      'Ölündüğünde boğulma bug\'ı düzeltildi; artık oyuncular su yüzeyine güvenle fırlatılır.',
      'Armored (-%30 Scientist Hasarı) ve Life Leech (%1 Vampirizm) yetenekleri zorunludur.'
    ],
    recommendedWeapon: 'Plaguepiercer (Bilim İnsanlarına +%500 Hasar) veya Brits Golden AK (+%30 Scientist Hasarı)',
    rewards: [
      'Garantili 1 Stack C4 ve Roket ganimeti',
      'Kilitli kasalarda garantili Akü (Battery) ve Leviathan Zırh parçaları',
      'Gemi hurdalığı ve yüksek seviye teknoloji bileşenleri'
    ]
  },
  {
    id: 'legendary-heli',
    name: 'Legendary Patrol Helicopter',
    category: 'Hava Bossu',
    location: '/s Mağazasından Çağrılır -> Kuleler (/tower1 - /tower6)',
    entryRequirement: 'Legendary Heli Sinyali (Store veya Görev Ödülü)',
    cooldown: 'İsteğe Bağlı Çağrı',
    mechanics: [
      'Aşırı yüksek can barı, napalm füzeleri ve ağır makineli tüfek saldırısı.',
      'Hazırlıksız oyuncuları tek mermiyle indirebilir; tam HQM veya Impact Zırh seti şarttır.',
      'Özel kulelerde (/tower1 - /tower6) duvar arkasından vur-kaç taktiğiyle kesilir.'
    ],
    recommendedWeapon: 'Brits Broken Eoka (+500% Heli Hasarı) veya Brits Golden M249 (+50% Heli Hasarı) + Ace\'s Python',
    rewards: [
      'Enkazdan çıkan alevli süper sandıklar (C4, Roket, M249, CCTV, Hedefleme modülleri)',
      'Büyük miktarda HQM ve metal hurdası',
      'Sunucuda chat duyurulu nadir efsanevi düşürme şansı'
    ]
  },
  {
    id: 'nightmare-raids',
    name: 'Nightmare Raids (Kabus Seviye Üsler)',
    category: 'Raid World Etkinliği',
    location: '/hub -> Kırmızı Portallar (Raid World)',
    entryRequirement: '20.000 RP Maliyet (/buyraid)',
    cooldown: 'Satın Alındıktan Sonra Süreli',
    mechanics: [
      'Tamamen zırhlı HQM duvarlar, katmanlı taretler, SAM siteleri ve tuzaklar.',
      'Büyük patlayıcı stoku (C4, Roket, MLRS) gerektirir.',
      'Chain Reaction (%30 Bedava İkinci Patlama) ve Aerodynamically Sound (+500% Hızlı Roket) ile maliyet düşürülür.'
    ],
    recommendedWeapon: 'The LAGINATOR (Tam otomatik roketatar) veya Brits Boom Stick / Ashmaker',
    rewards: [
      '~300.000 RP net kazanç (Devasa kar oranı!)',
      'Yüzlerce yüksek seviye silah, zırh ve efsanevi alet havuzu',
      'Bitirme süresi rekorları chatte duyurulur'
    ]
  }
];
