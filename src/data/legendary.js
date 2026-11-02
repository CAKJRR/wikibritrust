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

export const LEGENDARY_WEAPONS = [
  {
    name: 'Brits Golden M249',
    effect: 'Helikopterlere +%50 daha fazla hasar (+50% DMG to Helis)',
    ammo: '5.56 Rifle Ammo',
    role: 'Heli Avcısı'
  },
  {
    name: 'Brits Golden AK',
    effect: 'Bradley radarı ve Bilim İnsanlarına +%30 hasar (Anti-Bradley radar & +30% DMG to scientists)',
    ammo: '5.56 Rifle Ammo',
    role: 'Monument & PvE Temizliği'
  },
  {
    name: 'The LAGINATOR',
    effect: 'Tam otomatik yüksek güçlü roketatar (Fully automatic high-powered rocket launcher)',
    ammo: '5.56 Rifle Ammo & Roket',
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
    ammo: 'Tabanca Mermisi & HV Roket',
    role: 'Mobil Ağır Topçu'
  },
  {
    name: 'Brits Boom Stick',
    effect: 'Altıpatlar ve roket füzyonu (Fusion of revolver and rockets)',
    ammo: '5.56 Rifle Ammo & Roket',
    role: 'Raid Desteği'
  },
  {
    name: 'Ace’s Python',
    effect: '50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümü giyiliyorsa +%20 ekstra)',
    ammo: '5.56 Rifle Ammo',
    role: 'Hafif Heli Avcısı'
  },
  {
    name: 'Hydra’s Stolen Wand',
    effect: 'Doğrudan MLRS füzeleri fırlatır (Shoots MLRS)',
    ammo: 'MLRS',
    role: 'Yıkım Asası'
  },
  {
    name: 'Brits Broken Eoka',
    effect: 'Helikopterlere tam +%500 Hasar! (+500% DMG to helis)',
    ammo: 'Av Tüfeği Saçması (Shotgun shells)',
    role: 'Tek Vuruşta Heli Patlatma'
  }
];
