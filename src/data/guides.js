export const PROGRESSION_GUIDES = {
  early: {
    id: 'early',
    title: 'Erken Oyun (Early Game)',
    subtitle: 'Wipe Başlangıcı, Hızlı Scrap ve İlk Seviyeler',
    desc: 'Wipe\'ın ilk saatlerinde teknoloji ağacını hızlıca açmak, üssü sağlama almak ve kaynak darboğazını aşmak için yapılması gerekenler.',
    items: [
      {
        title: 'Taktik Eldiven (Tactical Gloves) Geri Dönüşümü',
        badge: 'İlk Saat Metası',
        content: [
          'Outpost (Güvenli Bölge) içerisindeki kıyafet otomatından 20 Scrap karşılığında Tactical Gloves satın alın.',
          'Eldivenleri Outpost içerisindeki geri dönüştürücüye (Recycler) atın.',
          'Her eldiven tam 288 Kumaş ve 12 Deri verir. Kumaşları ister zırh/yatak için kullanın, ister /pc cloth komutuyla doğrudan RP\'ye çevirin.',
          'Yatırılan 20 Scrap karşılığında yaklaşık 500-600 RP değerinde kumaş elde edilir. Wipe başı sermayesi için en pratik yöntemdir.'
        ]
      },
      {
        title: 'Yol Boyu Varil ve Hurda Farmı',
        badge: 'Hızlı Teknoloji',
        content: [
          'Yetenek puanı geldikçe Gathercraft ağacından Smash \'N Grab (1 SP) yeteneğini açın. Varillere tek vurarak eşyaları doğrudan çantaya çekebilirsiniz.',
          'Ardından Salvage King yeteneğini 3/3 yaparak varil ve sandıklardan gelen Scrap miktarını tam 4 katına (+%300) çıkarın.',
          'Parts Hunter ile bileşenler (yay, boru, dişli vb.) %45 ihtimalle ikiye katlanır. Çıkan fazla bileşenleri Outpost\'ta eritin.',
          'Araştırma masasında teknoloji açarken Bargain Hunter (1 SP) yeteneğini açmış olursanız, harcadığınız hurdanın %75\'i geri iade edilir.'
        ]
      },
      {
        title: 'İlk Madencilik Yetenekleri',
        badge: 'Temel Kaynak',
        content: [
          'Taş ve metal ihtiyacını hızlı çözmek için Gathercraft sol dalından Vein Seeker (1 SP) açın; madenlerde parlayan noktayı aramakla uğraşmazsınız.',
          'Ardından Shatterpoint (5 SP) açtığınızda artık bütün maden nodları tek vuruşta kırılır.'
        ]
      }
    ]
  },

  mid: {
    id: 'mid',
    title: 'Orta Oyun (Mid Game)',
    subtitle: 'Tarım Otomasyonu, Sanal Ocaklar ve Bradley Avı',
    desc: 'Temel silahların ve zırhların açıldığı, kalıcı gelir kapılarının ve otomatik üretim sistemlerinin kurulduğu aşama.',
    items: [
      {
        title: 'Otomatik Kenevir & Kumaş Çiftliği Kurulumu',
        badge: 'Pasif RP Kaynağı',
        content: [
          'Üssünüzde 3x3 Planter Box düzeni kurun. Otomatik sulama (sprinkler) ve ışıklandırmayı bağlayın.',
          'Survivalcraft ağacından Geneticist (5 SP) yeteneğini açarak bitki klonunuzu /setgenes komutuyla doğrudan God-Seed (GGGYYY) yapın.',
          'Bountiful Harvest (1 SP) ile ekili ürünlerden +%50 daha fazla verim alın.',
          'Yerden taş ve kütük toplarken düşen Reaping Spade (6m çaptaki tüm planter\'ı tek tıkla toplar) ve yabani ekinlerden düşen Fertile Bone (50 kemikle anında büyütür) aletlerini kullanın.',
          'Hasat ettiğiniz kumaşları /pc cloth ile doğrudan satın veya /ps pazarında diğer oyunculara pazarlayın.'
        ]
      },
      {
        title: 'Sanal Taş Ocakları (Virtual Quarry) & Dizel Döngüsü',
        badge: 'HQM & Sülfür',
        content: [
          'Outpost\'ta Pumpjack kiralayarak ham petrol (Crude Oil) çıkartın ve rafineride pişirip Low Grade Fuel yapın.',
          'LGF\'leri Outpost takas otomatında Dizel Yakıt (Diesel Fuel) ile takaslayın.',
          'Dizeli Sanal HQM ve Sülfür ocaklarına yükleyerek aralıksız maden akışı sağlayın.',
          'Fazla HQM\'leri pazarda satarak günlük 7M - 17M RP bandında tamamen pasif gelir elde edebilirsiniz.'
        ]
      },
      {
        title: 'Bradley APC Avı',
        badge: 'Askeri Ganimet',
        content: [
          'Launch Site\'taki Bradley tankı, devriye helikopterlerine kıyasla çok daha kolay bir hedeftir.',
          'Kulelerin ve binaların arkasından siper alarak HV Roket veya F1 el bombaları ile imha edilebilir.',
          'Eğer Huff-N-Puff efsanevi silahınız varsa, fırlattığı özel dartlar tankın zırhını saniyeler içinde deler.',
          'Enkazından CCTV kamera, hedefleme bilgisayarı, yüksek kalite metal ve askeri kasalar çıkar.'
        ]
      },
      {
        title: 'Patrol Helikopteri Düşürme',
        badge: 'Heli Kuleleri',
        content: [
          'Oyun içi mağazadan (/s) veya sinyalle çağrılan devriye helikopterlerini güvenle düşürmek için özel kuleler (/tower1 - /tower6) kullanılır.',
          'M249 veya yüksek şarjörlü silahlar tercih edilir. Ace’s Python (50 mermilik şarjör ve +%30 heli hasarı) çok etkilidir.',
          'Alevli sandıklar soğuduktan sonra içerisinden C4, roket ve yüksek seviye silahlar alınır.'
        ]
      }
    ]
  },

  endgame: {
    id: 'endgame',
    title: 'Oyun Sonu (Endgame Guides)',
    subtitle: 'Harbinger Boss Drone, Deep Sea, Nightmare Raids ve Efsaneviler',
    desc: 'Sunucunun en zorlu etkinlikleri, nadir efsanevi eşyalar ve en üst seviye raid operasyonları.',
    items: [
      {
        title: 'Harbinger Event (Boss Drone Arenası)',
        badge: 'Endgame Boss',
        content: [
          'Giriş: /outpost alanında piyanonun hemen yanındaki portaldan girilir.',
          'Gereksinim: 1.000.000 RP Keycard veya "Boom God" görev zincirinden kazanılan Harbinger Boss Card gerekir.',
          'Önemli Kural: Her anahtar tek bir giriş hakkı verir. İçeride ölürseniz tekrar giremezsiniz (Loot dışarıya bırakılır). Boss cooldown süresi yaklaşık 30 dakikadır.',
          'Savaş Taktiği: Boss havada süzülen mekanik bir drone\'dur. Üzerinize roketler ve ölümcül ateş ışınları saçar. Arenadaki derin mağara girintisini siper olarak kullanmalısınız.',
          'Yetenek & Ekipman: Combat dalındaki Hot Blooded (%25 Ateş Direnci) şarttır. Silah olarak geri tepmesi sıfır olan LR-300 mağara siperinden uzaktan vurmak için mükemmeldir.',
          'Ödüller: Silahların şarjör kapasitesini kalıcı artıran Gem of Reserve, yüksek miktarda XP/RP ve efsanevi alet/silah düşme şansı.'
        ]
      },
      {
        title: 'Deep Sea Rework (Cobalt Kargo Gemileri)',
        badge: 'Deniz Etkinliği',
        content: [
          'Okyanusta devriye gezen 5 Cobalt kargo gemisi her 1.5 - 2 saatte bir sıfırlanır.',
          'Gemi taretleri tam HQM zırhta bile tek atışta 153 hasar vurur. Taretleri etkisiz hale getirmek için 3 adet HV roketi gerekir.',
          'İçerideki elit bilim insanlarına karşı Combat dalındaki Armored (-%30 Scientist Hasarı) ve Life Leech (%1 Vampirizm) yetenekleri hayat kurtarır.',
          'Kilitli kasalardan garantili 1 stack C4/roket, jeneratör aküsü ve Leviathan Zırh prototipleri çıkar.'
        ]
      },
      {
        title: 'Nightmare Raids (Kabus Seviye Üsler)',
        badge: 'Raid World',
        content: [
          '/hub üzerinden Raid World portalına geçilir ve /buyraid ile Nightmare zorluğundaki üs satın alınır (20.000 RP).',
          'Üs tamamen zırhlı HQM duvarlar, katmanlı taretler ve tuzaklarla doludur.',
          'Combat ağacındaki Chain Reaction (%30 Bedava Çift Patlama) ve Aerodynamically Sound (+%500 Hızlı Roket) yetenekleri patlayıcı harcamanızı yarı yarıya düşürür.',
          'Başarıyla temizlendiğinde yaklaşık 300.000 RP net kazanç ve en üst seviye efsanevi eşyalar kazandırır.'
        ]
      },
      {
        title: 'Mad’s Extra Magical Tools ile %100 Kalıcı Tamir',
        badge: 'Sonsuz Dayanıklılık',
        content: [
          'Normalde Rust\'ta tamir masasında eşya tamir edildikçe kalıcı kırmızı bar oluşur ve eşya zamanla yok olur.',
          'Sunucudaki "Mad’s Extra Magical Tools" serisi, tamir masasında tamir edildiğinde bu kırmızı barı tamamen silerek orijinal %100 maksimum dayanıklılığını geri yükler.',
          'Bu aletler sadece Nightmare Raid kilitli kasalarından, Legendary Heli enkazlarından veya Deep Sea kargo sandıklarından nadir ganimet olarak düşer.'
        ]
      },
      {
        title: 'Dragon Thorn Vampirik Zırh Seti',
        badge: 'Ölümsüz Tank Seti',
        content: [
          'Her zırh parçası hasar vurdukça can çalar (Maske %1, Hoodie %2, Pelerin %7, Eldiven %1, Çizme %1, Pantolon %0.5).',
          'Tam set giyildiğinde toplam %12.5 Vampiric Healing bonusu verir.',
          'Combat ağacındaki Life Leech (%1) ile birleştiğinde toplam %13.5 can yenilemesiyle PvE çatışmalarında oyuncuyu ölümsüz bir tanka çevirir.'
        ]
      }
    ]
  }
};
