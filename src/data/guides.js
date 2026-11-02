// ==========================================================
// BRITS PVE WORLDS V2 - TÜM REHBERLER VE DOKÜMANTASYON VERİSİ
// Akıcı ve eksiksiz Türkçe içerik (Mühimmatlar oyun içi adlarıyla)
// ==========================================================

export const ALL_OFFICIAL_GUIDES = [
  { id: 'intro', title: 'Giriş & Sunucu Tanıtımı', stage: 'early', category: 'Başlangıç' },
  { id: 'beginner', title: 'Başlangıç Rehberi (İlk Gece)', stage: 'early', category: 'Başlangıç' },
  { id: 'rp-methods', title: 'En İyi RP Kazanma Yolları', stage: 'early', category: 'Başlangıç' },
  { id: 'early-skill-route', title: 'Erken Yetenek Rotası', stage: 'early', category: 'Başlangıç' },
  { id: 'feedback', title: 'Geri Bildirim ve Fikirler', stage: 'early', category: 'Başlangıç' },
  { id: 'support', title: 'Destek Talepleri (Ticket)', stage: 'early', category: 'Başlangıç' },
  { id: 'setgenes', title: '/setgenes Genetik Rehberi', stage: 'mid', category: 'Orta Seviye' },
  { id: 'food', title: 'Yemek ve Mutfak Sistemi', stage: 'mid', category: 'Orta Seviye' },
  { id: 'progression', title: 'İlerleme ve Seviyeler (Pr10)', stage: 'mid', category: 'Orta Seviye' },
  { id: 'quests', title: 'Görevler ve Etkinlikler', stage: 'mid', category: 'Orta Seviye' },
  { id: 'skills', title: 'Yetenek Ağacı Sistemi', stage: 'mid', category: 'Orta Seviye' },
  { id: 'virtual-quarries', title: 'Sanal Taş Ocakları', stage: 'mid', category: 'Orta Seviye' },
  { id: 'world-events', title: 'Dünya Etkinlikleri', stage: 'mid', category: 'Orta Seviye' },
  { id: 'deep-sea', title: 'Deep Sea Rework (Deniz Etkinliği)', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'armor-inserts', title: 'Zırh Eklentileri (Armor Inserts)', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'legendary-weapons', title: 'Efsanevi Silahlar Kataloğu', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'legendary-sets', title: 'Efsanevi Zırh Setleri', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'legendary-tools', title: 'Efsanevi Aletler & Tamir', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'bradleys', title: 'Bradley Tank Avı', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'helis', title: 'Helikopter Avı (Kuleler)', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'raiding', title: 'Raid Dünyaları ve Baskın', stage: 'endgame', category: 'İleri Seviye' },
];

export const PROGRESSION_GUIDES = {
  // ==========================================================
  // BAŞLANGIÇ REHBERLERİ
  // ==========================================================
  early: {
    id: 'early',
    categoryLead: 'BAŞLANGIÇ',
    categoryTail: 'REHBERLERİ',
    accent: 'sprout',
    subtitle: 'Sunucuya yeni mi geldin? Buradan başla: ilk gece, temel RP kazanımı ve sunucuya adaptasyon.',
    guides: [
      {
        id: 'intro',
        title: 'Giriş & Sunucu Tanıtımı',
        badge: 'Genel Bakış',
        summary: 'Brits PvE Worlds sunucusunun ne olduğunu, sunucu mimarisini ve temel oynanış felsefesini öğrenin.',
        sections: [
          {
            heading: 'Brits PvE Worlds Nedir?',
            intro:
              'Brits PvE Worlds; görevler, özel askeri etkinlikler, 4 dallı küresel yetenek ağacı ve efsanevi eşyalarla MMORPG tarzı bir ilerleme sunan özerk Rust PvE sunucusudur. Rust\'a yeni başlayanlar da, binlerce saatlik emektarlar da burada zengin bir oynanış bulur.'
          },
          {
            heading: 'Sunucu Bölgeleri ve Bağlantı Portları',
            items: [
              'EU Bölgesi: worlds.eu.britspve.com:28015 - Avrupa ana sunucusu.',
              'US Bölgesi: worlds.us.britspve.com:28015 - Kuzey Amerika sunucusu.',
              'AU Bölgesi: worlds.au.britspve.com:28015 - Avustralya ve Asya Pasifik sunucusu.'
            ]
          },
          {
            heading: 'Öne Çıkan Sistemler',
            items: [
              'Görev Sistemi (/quest): XP, RP ve efsanevi eşya ödüllü dinamik zincirler.',
              'Yetenek Ağacı (/st): 4 küresel dal, seviye atladıkça kazanılan 2 SP ile açılan pasifler.',
              'Sanal Taş Ocakları (/qr): Çevrimdışıyken bile kaynak üreten 6 kademeli pasif maden tesisleri.',
              'Raid Dünyaları (/buyraid): Hazır askeri üsleri satın alıp kuşatma silahlarıyla patlattığınız ganimet alanları.',
              'Efsanevi Teçhizat: 13 özel silah, 10 zırh seti, Armor Inserts ve %100 tamir edilebilir aletler.'
            ]
          }
        ],
        link: { tab: 'play', label: 'Sunucuya Nasıl Bağlanılır?' }
      },
      {
        id: 'beginner',
        title: 'Başlangıç Rehberi (İlk Gece)',
        badge: 'İlk Gece',
        summary: 'Yeni oyuncuların temel sistemleri öğrenip sunucudaki ilk saatlerinde kaybolmaması için adım adım rehber.',
        sections: [
          {
            heading: '1. İlk Adımlar: HUB ve Dünya Seçimi',
            intro:
              'Sunucuya ilk bağlandığınızda güvenli HUB bölgesinde veya oyun dünyalarından birinde doğarsınız. HUB; dünyalar ve Raid Dünyaları arasında geçiş yaptığınız ve ana mağazaya eriştiğiniz merkezdir.',
            items: [
              'İstediğiniz zaman sohbete /hub yazarak güvenli merkeze dönebilirsiniz.',
              'Oyun dünyaları (World 1 - 8) arasında hiçbir kural farkı yoktur; arkadaşlarınızla aynı dünyayı seçmeniz yeterlidir.',
              'Mağazayı açmak için istediğiniz an /s veya /shop komutunu kullanabilirsiniz.'
            ]
          },
          {
            heading: '2. İlk Üs ve Başlangıç Görevleri',
            ordered: true,
            items: [
              'Dünyaya girdiğinizde hemen /quest veya /q yazarak "Getting Started" başlangıç görevlerini başlatın.',
              'Bu görevler odun, taş ve temel hurda toplatırken size yüksek miktarda başlangıç XP ve RP kazandırır.',
              'İlk taş üssünüzü kurun, dolabınızı kilitleyin ve /sethome evim komutuyla evinizin koordinatını kaydedin.',
              'Eviniz yıkılmaz ve diğer oyuncular tarafından yağmalanamaz; sunucuda tam PvE koruması vardır.'
            ]
          },
          {
            heading: '3. İlk Seviyeler ve Gelişim',
            items: [
              'Seviye atladıkça /st ile yetenek ağacını açın; ilk puanlarınızı Gathercraft ve Survivalcraft dallarına verin.',
              'Günlük görevleri (/q -> Dailies) her gün kontrol edin; düzenli hurda ve RP kaynağıdır.',
              'Oyuncu pazarlarını incelemek için /ps veya /market yazın.'
            ],
            note: 'Takıldığınız her konuda sunucu Discord sunucusundaki #support kanalından ticket açabilirsiniz.'
          }
        ],
        link: { tab: 'commands', label: 'Tüm Sunucu Komutları' }
      },
      {
        id: 'rp-methods',
        title: 'En İyi RP Kazanma Yolları',
        badge: 'Ekonomi & Para',
        summary: 'Başlangıçtan oyun sonuna RP kazanma yolları: Taktik eldiven dönüşümü, kumaş çiftliği, sanal ocaklar ve raidler.',
        sections: [
          {
            heading: 'RP (Reward Points) Nedir?',
            intro:
              'RP, sunucunun ana para birimidir. /s mağazasında efsanevi eşyalar, raid üsleri (/buyraid), helikopter kuleleri ve etkinlik biletleri satın almak için kullanılır.'
          },
          {
            heading: 'Başlangıç Taktiği: Taktik Eldiven Geri Dönüşümü',
            ordered: true,
            items: [
              'Outpost alanındaki kıyafet otomatından 20 Scrap karşılığında Tactical Gloves (Taktik Eldiven) satın alın.',
              'Eldivenleri Outpost içerisindeki geri dönüştürücüye (Recycler) atın.',
              'Her eldiven tam 288 Kumaş (Cloth) ve 12 Deri verir.',
              'Kumaşı /pc cloth komutuyla doğrudan RP\'ye çevirin. Wipe başında 10 dakikada on binlerce RP sermayesi kurmanın en hızlı yoludur.'
            ],
            note: 'Sunucuya yeni girdiğinizde hurdanızın ilk 200 tanesini bu yöntemle RP\'ye çevirmek gelişimi inanılmaz hızlandırır.'
          },
          {
            heading: 'Orta Seviye: 3x3 Saksı ile Otomatik Kenevir Çiftliği',
            items: [
              'Üssünüze Advanced Triangle Planter Box III yerleştirin ve otomatik sulama/ışık bağlayın.',
              'Survivalcraft dalındaki Geneticist yeteneğini açın ve /setgenes GGGYYY komutuyla God-Seed klonları üretin.',
              'Bountiful Harvest yeteneği ile bitki başına verimi katlayın.',
              'Reaping Spade efsanevi küreğini kullanarak 6 metre çapındaki tüm bitkileri tek tıkla toplayın.',
              'Hasat ettiğiniz yüz binlerce kumaşı /pc cloth ile satarak sınırsız RP akışı sağlayın.'
            ]
          },
          {
            heading: 'İleri Seviye: Sanal Taş Ocakları ve Raid Dünyaları',
            items: [
              'Sanal Taş Ocakları (/qr) siz oyunda değilken bile devasa miktarda hammadde üretir.',
              'Raid Dünyalarında (/buyraid) Nightmare üslerini patlatmak, çiftlikten sonra sunucunun en yüksek nakit RP getiren aktivitesidir (sefer başına 300.000+ RP ganimet).'
            ]
          }
        ]
      },
      {
        id: 'early-skill-route',
        title: 'Erken Yetenek Rotası',
        badge: 'Hızlı Gelişim',
        summary: 'İlk yetenek puanlarını (SP) doğru harcayarak hurda, bileşen ve maden toplama hızını 4 katına çıkarma rehberi.',
        sections: [
          {
            heading: 'Hurda ve Varil Temizliği (Gathercraft)',
            items: [
              'Smash \'N Grab (1 SP): Varilleri tek vuruşta patlatır ve tüm eşyaları doğrudan çantanıza ışınlar.',
              'Salvage King (3/3 Kademe): Varil ve sandıklardan çıkan hurda miktarını tam 4 katına (%400) çıkarır.',
              'Parts Hunter: Geri dönüştürücüde ve sandıklarda bileşenlerin %45 ihtimalle ikiye katlanmasını sağlar.',
              'Bargain Hunter (1 SP): Araştırma masasında harcanan hurdanın büyük kısmını iade eder.'
            ]
          },
          {
            heading: 'Hızlı Madencilik Pasifleri',
            items: [
              'Vein Seeker (1 SP): Maden kırarken parlayan kıvılcım noktasını arama zorunluluğunu kaldırır.',
              'Shatterpoint (5 SP): Maden noduna vurduğunuz ilk darbede nodu tek vuruşta patlatır.',
              'Prospector: Madenlerden çıkan metal, kükürt ve HQM verimini +%75 artırır.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'İnteraktif Yetenek Haritasını İncele' }
      },
      {
        id: 'feedback',
        title: 'Geri Bildirim ve Fikirler',
        badge: 'Topluluk',
        summary: 'Sunucu geliştiricilerine önerilerinizi, denge fikirlerinizi ve hata raporlarınızı iletme kanalları.',
        sections: [
          {
            heading: 'Fikirlerinizi Nasıl Paylaşırsınız?',
            intro:
              'Brits topluluğu oyuncu geri bildirimleriyle büyür. Önerilerinizi, sunucuda görmek istediğiniz efsanevi silah/perk fikirlerini resmi Brits Discord sunucusundaki #suggestions kanalından paylaşabilirsiniz.'
          }
        ]
      },
      {
        id: 'support',
        title: 'Destek Talepleri (Ticket)',
        badge: 'Yardım',
        summary: 'Oyun içi takılma, kayıp eşya veya teknik sorunlarda sunucu yetkililerine ulaşma rehberi.',
        sections: [
          {
            heading: 'Ticket Açma Adımları',
            intro:
              'Brits Discord sunucusunda #support-tickets kanalına giderek "Create Ticket" butonuna basabilirsiniz. Yetkililer kısa sürede yardımcı olur.'
          }
        ]
      }
    ]
  },

  // ==========================================================
  // ORTA SEVİYE REHBERLER
  // ==========================================================
  mid: {
    id: 'mid',
    categoryLead: 'ORTA SEVİYE',
    categoryTail: 'REHBERLERİ',
    accent: 'terracotta-light',
    subtitle: 'Temel sistemler: genetik tarım, mutfak, görevler, seviye atlama ve dünya etkinlikleri.',
    guides: [
      {
        id: 'setgenes',
        title: '/setgenes Genetik Rehberi',
        badge: 'Tarım & Genetik',
        summary: '/setgenes komutuyla tohum genlerini anında belirleme, God-Seed (GGGYYY) üretimi ve klon çoğaltma.',
        sections: [
          {
            heading: 'Komut Nasıl Kullanılır?',
            ordered: true,
            items: [
              'Survivalcraft yetenek ağacındaki Geneticist yeteneğini açtığınızdan emin olun.',
              'Genetiğini değiştirmek istediğiniz tohumu veya klonu elinizde aktif tutun.',
              'Sohbete /setgenes yazıp ardından 6 harflik gen kodunu ekleyin. Örnek: /setgenes GGGYYY',
              'Komut tohumun tüm kromozomlarını anında kusursuz gen dizilimine çevirir.'
            ],
            note: 'Komutun kullanım bekleme süresi vardır; harfleri ilk seferde doğru girdiğinizden emin olun.'
          },
          {
            heading: 'Gen Harfleri ve Anlamları',
            items: [
              'G (Growth): Bitkinin büyüme hızını artırır. Çok daha kısa sürede hasat olgunluğuna ulaşır.',
              'Y (Yield): Hasat edilen ürün miktarını doğrudan katlar. Kenevirde devasa kumaş verir.',
              'H (Hardiness): Bitkinin soğuk, susuzluk ve kötü hava koşullarına dayanıklılığını sağlar.',
              'W (Water): Negatif gendir; bitkinin aşırı su tüketmesine yol açar.',
              'X (Empty): Boş gendir; hiçbir katkı sağlamaz.'
            ]
          },
          {
            heading: 'Kusursuz God-Seed: GGGYYY ve Klon Çoğaltma',
            items: [
              '3x Growth (G) ve 3x Yield (Y) sunucudaki en yüksek verimli kumaş ve gıda dizilimidir.',
              'GGGYYY tohumu ektikten sonra olgunlaştığında doğrudan kesmek yerine sağ tıklayarak Klon (Clone) alın.',
              'Aldığınız her klon aynı GGGYYY genini taşır; böylece tek bir tohumdan yüzlerce saksılık devasa bir sera kurabilirsiniz.'
            ]
          }
        ]
      },
      {
        id: 'food',
        title: 'Yemek ve Mutfak Sistemi',
        badge: 'Mutfak & iBag',
        summary: 'Özel yemekler, malzeme çantası (iBag sonsuz buzdolabı), pişirme tarifleri ve Çiftçi Pazarı.',
        sections: [
          {
            heading: 'Özel Yemekler ve Güçlendirmeler (Buffs)',
            items: [
              'Sunucudaki her özel yemek, oyuncuya ve yakınındaki takım arkadaşlarına güçlü geçici pasifler sağlar.',
              'Yemek buffları; maksimum can artışı, hızlı can yenilemesi, darbe direnci ve toplama verimini artırır.',
              'Yetenek ağacındaki bonusların üzerine doğrudan eklenir.',
              'Yemekler buzdolabı veya iBag haricinde tutulursa zamanla bozulur.'
            ]
          },
          {
            heading: 'Envanterdeki Özel Butonlar',
            items: [
              'Meals: Karakterinizin üzerinde o an aktif olan tüm yemek güçlendirmelerini listeler.',
              'iBag (Malzeme Çantası): Dünyada topladığınız ham gıdaları ve hayvan ürünlerini (örneğin süt) otomatik olarak içine çeker. Sonsuz buzdolabı görevi görür; içindeki malzemeler asla bozulmaz.',
              'Cook: Tarifler, gerekli malzemeler ve favoriler sekmelerinden oluşan kapsamlı yemek pişirme arayüzünü açar.',
              'Market (Çiftçi Pazarı): Şeker, un, ekmek, kumaş gibi temel hammaddeleri hurda (Scrap) ile alıp satabileceğiniz oyuncu pazarıdır.'
            ],
            note: 'Çiftçi Pazarı tamamen oyuncu stoğuna dayalıdır; sunucu içi ekonomi için harika bir gelir kapısıdır.'
          }
        ]
      },
      {
        id: 'progression',
        title: 'İlerleme ve Seviyeler (Pr10)',
        badge: 'Seviye & Prestige',
        summary: 'Seviye atlama sistemi, her seviyede 2 SP, Seviye 100 sınırı ve Prestige 1-10 avantajları.',
        sections: [
          {
            heading: 'Seviye Atlama ve Yetenek Puanı (SP)',
            items: [
              'Her seviye atladığınızda yetenek ağacında harcamak üzere 2 Yetenek Puanı (SP) kazanırsınız.',
              'Yetenek ağacı menüsünü /st komutuyla veya envanter açıkken üstteki XP barına tıklayarak açabilirsiniz.',
              'Prestige öncesi maksimum ulaşılabilir seviye 100\'dür.'
            ]
          },
          {
            heading: 'Prestige Sistemi (/pr)',
            items: [
              'Seviye 100\'e ulaştığınızda /pr yazarak Prestige aşamasına geçebilirsiniz.',
              'Prestige seviyenizi 1\'e ve harcanan SP\'lerinizi sıfırlar; ancak karşılığında kalıcı prestij unvanı ve özel sunucu avantajları verir.',
              'Toplamda 10 kez Prestige yapılabilir (Pr10 maksimum kademedir).'
            ]
          },
          {
            heading: 'En Hızlı XP Kazanma Yolları',
            items: [
              'Quartermaster Görev Zincirleri (T1 - T4): Dakikalar içinde devasa XP paketleri verir.',
              'Efsanevi Toplama Setleri: Mining ve Lumberjack kıyafetleriyle nod kırmak ekstra XP çarpanı tetikler.',
              'Rested XP Havuzu: Oyunda değilken biriken dinlenme XP\'si madencilik ve odunculukta 2 kat hızlı seviye atlatır.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'Yetenek Ağacını Aç' }
      },
      {
        id: 'quests',
        title: 'Görevler ve Etkinlikler',
        badge: 'Görev Sistemi',
        summary: 'BritsPVE özel görev motoru: Başlangıç, günlük görevler, takaslar, raid ve Boom God hedefleri.',
        sections: [
          {
            heading: 'Özel Görev Mimarisi',
            intro:
              'BritsPVE, başlangıç hedeflerinden en zorlu oyun sonu meydan okumalarına kadar uzanan özel bir görev motoruna sahiptir. Görevler XP, RP, efsanevi aletler ve nadir bileşenler verir. Menüyü /quest veya /q ile açabilirsiniz.'
          },
          {
            heading: 'Görev Kategorileri',
            items: [
              'Getting Started (Başlangıç): Temel toplama, sığınak ve hurda mekaniklerini öğretir.',
              'Daily Quests (Günlük Görevler): Her 24 saatte bir sıfırlanır (Barrel Basher, Subway Siege, Elite Hacker gibi).',
              'Resource & Economy: Sanal taş ocakları, petrol çıkarma ve hammadde işleme görevleri.',
              'Recycle / Takas Görevleri: Bant (Duct Tape), çamaşır suyu (Bleach) ve batarya gibi eşyaları nakit RP ve XP\'ye çevirir.',
              'Raid & Combat Görevleri: Üs patlatma ve askeri hedefleri yok etme zincirleri (Raid Rookie, Fortress Cracker).',
              'Quartermaster Görevleri: Yüksek hacimli kaynak toplama zincirleri; efsanevi yemek tarifleri ve serumların kilidini açar.',
              'Boom God Zorlukları: Oyun sonunun en saygın ve en yüksek RP veren boss ve baskın meydan okumalarıdır.'
            ]
          }
        ]
      },
      {
        id: 'skills',
        title: 'Yetenek Ağacı Sistemi',
        badge: 'Yetenek Ağacı',
        summary: '/st komutu veya XP barı ile açılan 4 küresel yetenek dalının yapısı ve puanlama mantığı.',
        sections: [
          {
            heading: 'Yetenek Ağacına Erişim',
            items: [
              '/st komutunu yazarak veya envanter açıkken üstteki XP barına tıklayarak yetenek haritasını açabilirsiniz.',
              '4 küresel dal bulunur: Gathercraft (Toplama), Survivalcraft (Hayatta Kalma), Combat (Savaş) ve Vehicles (Araçlar).',
              'Yetenek maliyetleri 1 SP veya 5 SP olabilir. Puanlarınızı istediğiniz zaman sıfırlayıp yeniden dağıtabilirsiniz.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'İnteraktif Yetenek Haritasına Git' }
      },
      {
        id: 'virtual-quarries',
        title: 'Sanal Taş Ocakları',
        badge: 'Pasif Gelir',
        summary: 'Çevrimdışıyken veya AFK iken çalışan maden ocakları, petrol pompaları ve Seviye 6 yükseltmeleri.',
        sections: [
          {
            heading: 'Sanal Ocak Türleri',
            items: [
              'Mining Quarry: Yüksek Kaliteli Metal (HQM), Metal Cevheri ve Kükürt Cevheri üretir.',
              'Pump Jack: Ham Petrol (Crude Oil) üretir; rafine edilerek Düşük Dereceli Yakıt (LGF) elde edilir.',
              'Wood Generator: Sürekli ve kesintisiz odun üretimi sağlar.'
            ]
          },
          {
            heading: 'Nasıl Kurulur?',
            ordered: true,
            items: [
              'Mağazadan (/s) Survey Charge (Arama Patlayıcısı) satın alın.',
              'İstediğiniz sanal ocak türünü /s üzerinden envanterinize alın.',
              '/qr komutunu yazarak Sanal Ocak yönetim panelini açın; Survey Charge patlatarak zengin bir damar bulun ve ocağınızı yerleştirin.',
              'Ocağın haznesine Low Grade Fuel koyarak üretimi başlatın.'
            ]
          },
          {
            heading: 'Yükseltmeler (Seviye 1 - 6)',
            items: [
              'Ocaklar Seviye 6\'ya kadar yükseltilebilir (Üretim çarpanı 8.5x katına kadar çıkar).',
              'Yükseltmelerde Duct Tape, Bleach, HQM ve ocak parçaları kullanılır.'
            ]
          }
        ]
      },
      {
        id: 'world-events',
        title: 'Dünya Etkinlikleri',
        badge: 'Etkinlikler',
        summary: 'Harbinger Drone Boss, Radtown, Harbor konvoyu, Zombi hayatta kalma ve liderlik tabloları.',
        sections: [
          {
            heading: 'Harbinger Boss Drone Arenası',
            items: [
              'Giriş: /outpost alanında piyanonun yanında bulunan gizemli portal.',
              'Gereksinim: 1.000.000 RP değerinde Keycard veya Boom God görev kartı.',
              'Boss havada asılı duran ağır roketli bir savaş dronudur. Arenadaki derin mağara girintisi siper olarak kullanılmalıdır.',
              'Combat ağacındaki Hot Blooded (%25 ateş direnci) yeteneği zorunludur.'
            ]
          },
          {
            heading: 'Radtown & Harbor Etkinlikleri',
            items: [
              'Radtown: Yüksek radyasyonlu alanda elit NPC timlerini temizleyip kilitli efsanevi sandıkları açma savaşı.',
              'Harbor Operasyonu: Bilim insanlarını temizleyip sahile yanaşan askeri konvoyu ve Bradley APC\'yi imha etme çok aşamalı kooperatif görevi.'
            ]
          },
          {
            heading: 'Zombie Survival & Liderlik Tabloları',
            items: [
              'Zombi Etkinliği: Karanlık bekleme odasında başlar; bir oyuncu rastgele enfekte olur ve çatalla diğer oyuncuları avlamaya çalışır. Hayatta kalanlar büyük RP kazanır.',
              'Liderlik Tabloları: Haftalık en çok maden kıran, heli düşüren ve raid yapan oyunculara özel unvan ve XP ödülleri dağıtılır.'
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================
  // İLERİ SEVİYE REHBERLER (ENDGAME & COMBAT)
  // ==========================================================
  endgame: {
    id: 'endgame',
    categoryLead: 'İLERİ SEVİYE',
    categoryTail: 'REHBERLERİ',
    accent: 'terracotta',
    subtitle: 'Oyun sonu askeri operasyonlar: Deep Sea Rework, Zırh Eklentileri, efsanevi silahlar, Bradley ve Heli avı.',
    guides: [
      {
        id: 'deep-sea',
        title: 'Deep Sea Rework (Deniz Etkinliği)',
        badge: 'Deniz Operasyonu',
        summary: 'Cobalt Corporation denizleri ele geçiriyor: Kargo gemileri, pinger devriyeleri, taret kör noktaları ve tam temizlik taktikleri.',
        sections: [
          {
            heading: 'Genel Bakış',
            intro:
              'Yeni Deep Sea etkinliği, eski batan vanilla Deep Sea mekaniğini baştan aşağı yeniledi. Buradaki en temel ve en büyük değişiklik: Cobalt Corporation dünyayı ele geçiriyor!',
            items: [
              'Her Deep Sea etkinliğinde, gemi battıktan sonra her 2 ila 4 saatte bir ortaya çıkan 2 adet Cobalt kargo gemisi etkinliği gerçekleşir.',
              'Bu 2 kargo gemisi, vanillaya kıyasla kat kat daha iyi ganimet içerir (yeniden doğan variller ve sandıklar dahil).',
              'Artan devasa ganimet miktarı nedeniyle, akıllıca planlamazsanız tüm eşyaları tek seferde taşımak için birden fazla sefere ihtiyaç duyabilirsiniz.'
            ],
            note: 'Deep Sea 1 sunuculardan tamamen kaldırılmıştır (18 Şubat 2026 itibariyle yeni Rework aktiftir).'
          },
          {
            heading: 'Cobalt Devriyeleri (Cobalt Patrols)',
            intro:
              'Derin denizde devriye gezen hızlı teknelerdir. Genellikle 3 botluk timlerden oluşurlar. Büyük zenginlik taşıyan "Pinger" cihazları taşırlar. Yalnızsanız veya yetersiz teçhizata sahipseniz, 2 hızlı tekne/denizaltı karşılaşmasıyla bu pinger\'ları sudan çıkarmak başlı başına zorlu bir görevdir.'
          },
          {
            heading: 'Cobalt Kargo Gemileri (Cobalt Cargo Ships)',
            intro: 'Denizdeki en değerli askeri ganimet hedefleri:',
            items: [
              'Doğma Davranışı: Her Deep Sea döngüsünde 2 kargo gemisi bulunur; batıştan 2 ila 4 saat sonra geri dönerler.',
              'Seyir Rotası: Cobalt Kargo Gemileri yalnızca dış okyanus çeperinde seyreder; nehirlerin içine veya sığ kıyılara asla girmez.',
              'Ganimet Yelpazesi: Bu kargolar elit ağır bilim insanları (Heavy Scientists) ve birinci sınıf ganimetlerle doludur.',
              'Kilitli Sandıklar: Scavenge alanlarından üç kademeli kilitli sandık net şekilde görülebilir; hack süresi standart 15 dakikadır.',
              'Efsanevi Düşme Şansı: Leviathan Zırh Seti parçaları ve Mad\'s Extra Magical tamir eşyası elde etme şansı oldukça yüksektir.'
            ]
          },
          {
            heading: 'Kargonun Tehlikeleri ve Etkisiz Hale Getirilmesi',
            intro: 'Gemiye çıkmadan önce iki ölümcül tehdidi mutlaka bilmelisiniz:',
            items: [
              'Botlar (Cobalt Scientists): Hızlıca yeniden doğarlar ve 125 HP ile korkutucu bir menzilden yüksek isabetle ateş ederler. Ciddi zırha ihtiyacınız vardır; açık alanlarda kesinlikle siper arkasında kalın ve agresifçe tek tek indirin. Önerilen: Plaguepiercer yayını veya Brits Golden AK ile uzaktan vurun; Metal T3, Leviathan veya Dragon Thorn seti kullanın.',
              'Taretler (Heavy Turrets): Gemide en tehlikeli 4 taret bulunur: 2 adet başta (ön güverte), 2 adet kıçta (arka güverte). Her taret sınırsız cephane ile inanılmaz bir hızda seri ateş eder. Çok yüksek hasar vurur. Siper almalı, köşe açısı (peek) kullanmalı veya roket / patlayıcı mermi ile ateş almadan uzaktan vurulmalıdır.',
              'Taret İmha Yöntemi: Taret başına 3 Kese Bombası (Satchel) veya 1 Roket, ya da 10-15 adet 5.56 patlayıcı mermi. Taret başka hedefe kilitlendiğinde peek atın veya görüş menzili dışından vurun. Tekneyi pruvanın altına veya kör noktalara sürerek yanaşın.'
            ]
          },
          {
            heading: 'Düşman Konumları (Enemy Locations)',
            items: [
              'Botlar: Kargonun 3 katına dağılmıştır: Konteyner alanları, dış yürüme platformları ve en üst kaptan köşkü/kabinler.',
              'Ağır Taretler: Toplam 4 Ağır Taret bulunur: 2 adet pruva güvertesinde (ön), 2 adet kıç güvertesinde (arka), orta güverte ve köprü altında ek savunma noktaları.'
            ]
          },
          {
            heading: 'Temizleme Taktikleri: Taktik 1 - Steady Out (Güvenli & Dengeli)',
            intro:
              'Yeni başlayanlar veya solo oyuncular için düşük riskli, güvenli yöntem. Yavaş tempo: yanaş, temizle, sandıkları aç ve güvenle dön.',
            ordered: true,
            items: [
              'Bekleme: Kargo rotasının oturması ve taret açılarının kilitlenmesi için 10-15 dakika gözlemleyin.',
              'Tekneyle Yaklaşım: Taretlerin kör noktalarından (arka veya pruva altından) RHIB ile yaklaşın.',
              'Taretleri Uzaktan İmha: Gemiye ayak basmadan önce taretleri roket veya satchel ile uzaktan havaya uçurun.',
              'Alt Güverte Temizliği: Alt güvertedeki bilim insanlarını siper arkasından sakince temizleyin.',
              'Köprüye Tırmanış: Merdivenlerden köprüye doğru ilerleyin; her kattaki botları temizleyin.',
              'Sandıkları Başlat: 3 adet kilitli sandığı aktive edin (15 dk) ve yeniden doğan botlara karşı pozisyonunuzu koruyun.',
              'Tahliye: Ganimetleri toplayıp RHIB ile güvenli limana dönün.'
            ],
            note: 'Gerekli Ekipman: 200+ 5.56 Rifle Ammo, 10-15 Satchel Charges veya 2-3 Rockets, 5-10 Şırınga/Medkit, 20+ Sargı Bezi, Metal Tier 3 Zırh veya Leviathan Seti, RHIB tekne, can yenileyici yemekler.'
          },
          {
            heading: 'Temizleme Taktikleri: Taktik 2 - Speedrunner (5 Dakikalık Hızlı Rush)',
            intro:
              'Deneyimli ekipler için yüksek risk, maksimum kazanç yöntemi. Kargonun tamamını 5 dakikadan kısa sürede temizler.',
            ordered: true,
            items: [
              'Mini-copter ile İndirme: Doğrudan kaptan köşkünün çatısına (en tepeye) iniş yapın.',
              'Eşzamanlı Taret İmhası: İki oyuncu aynı anda 15 saniye içinde 4 tareti roketleyerek anında havaya uçursun.',
              'Köprü ve Kabin Baskını: Kaptan köşkü ve üst kabinleri yüksek DPS silahlarla (LAGINATOR, Brits Golden AK) saniyeler içinde biçin.',
              'Triple Hack: 3 kilitli sandığı aynı anda başlatın.',
              'Boğaz Savunması: Ana güverte merdiven boğazlarını (choke points) tutarak bot dalgalarını bastırın.',
              'Hızlı Tahliye: Sandıklar açıldığı anda ganimeti yükleyip Mini ile hemen havalanın.'
            ],
            note: 'Gerekli Ekipman: Mini-helikopter, The LAGINATOR veya Brits Golden AK, tam Dragon Thorn veya Leviathan zırhı, Helping Hands (ani düşmelerde anında dirilme güvencesi).'
          }
        ],
        link: { tab: 'legendary', label: 'Leviathan Zırhı ve Efsanevi Eşyaları İncele' }
      },
      {
        id: 'armor-inserts',
        title: 'Zırh Eklentileri (Armor Inserts)',
        badge: 'Zırh Geliştirmesi',
        summary: 'Zırh parçalarına takılarak belirli hasar türlerine karşı ek direnç sağlayan eklentiler (+, ++ ve +++ sayısal koruma değerleri).',
        sections: [
          {
            heading: 'Zırh Eklentileri Nasıl Çalışır?',
            intro:
              'Armor Inserts, koruyucu zırh parçalarına takılarak belirli hasar türlerine karşı ek direnç sağlayan bulunabilir eklentilerdir. Farklı eklenti aileleri farklı tehditleri karşılar, bu yüzden girdiğiniz aktiviteye göre eklentilerinizi değiştirebilirsiniz.'
          },
          {
            heading: 'Uzman Tavsiyesi (Pro Tip)',
            items: [
              'Su altı ve deniz operasyonları: Asbestos (Asbest) eklentileri kullanın.',
              'Raid Dünyaları ve ağır askeri çatışmalar: Metal eklentileri kullanın.',
              'Yüksekten düşme riski olan kule ve monumentler: Lead (Kurşun) eklentileri kullanın.',
              'Genel harita gezintisi ve hayatta kalma: Wooden (Ahşap) eklentileri kullanın.'
            ]
          },
          {
            heading: 'Eklenti Türleri ve Sayısal Koruma Tabloları',
            intro: 'Dört ana eklenti serisinin kademelere (+, ++, +++) göre tam koruma değerleri:',
            items: [
              '1. Ahşap Eklentiler (Satiated Serisi): Genel günlük hayatta kalma koruması. Isırık, kesik, ezilme, saplanma, açlık, susuzluk ve arı sokmasına karşı. [Kademe +: 1.0 | Kademe ++: 2.0 | Kademe +++: 3.0 (tüm hasar türlerinde)]',
              '2. Asbest Eklentileri (Waterproof Serisi): Su ve soğuk ortamlar için koruma. Boğulma hasarı ve soğuk maruziyeti. [Kademe +: 5.0 Boğulma, 1.0 Soğuk | Kademe ++: 10.0 Boğulma, 2.0 Soğuk | Kademe +++: 15.0 Boğulma, 3.0 Soğuk]',
              '3. Kurşun Eklentileri (Impact Serisi): Kinetik ve patlayıcı tehditlere karşı darbe koruması. Düşme hasarı, patlama hasarı ve araç çarpması. [Kademe +: 1.0 | Kademe ++: 2.0 | Kademe +++: 3.0 (her tür için)]',
              '4. Metal Eklentileri (Metal Serisi): Sınıfının en iyi savaş koruması. Mermi hasarı, kanama ve patlayıcı hasarı. [Kademe +: 4.0 Mermi, 2.0 Kanama, 1.0 Patlayıcı | Kademe ++: 6.0 Mermi, 4.0 Kanama, 4.0 Patlayıcı | Kademe +++: 8.0 Mermi, 6.0 Kanama, 6.0 Patlayıcı]'
            ],
            note: 'Savaş Notu: Metal eklentiler genellikle Raid Dünyaları ve yüksek tehdit içeren boss çatışmaları için en iyi tercihtir.'
          },
          {
            heading: 'Eklentiler Nasıl Bulunur?',
            intro:
              'Zırh eklentileri, sunucu dünyalarındaki ganimet sandıklarından, askeri monumentlerden ve boss kasalarından düşer. Üst kademeler (++ ve +++), temel kademeden (+) çok daha nadirdir.'
          },
          {
            heading: 'Stratejik Kullanım Özeti',
            items: [
              'Okyanus monumentleri ve Deep Sea: Asbestos Inserts',
              'Raid Dünyaları ve ağır üs çatışmaları: Metal Inserts',
              'Kule tırmanışları ve dikey bölgeler: Lead Inserts',
              'Genel harita keşfi ve kaynak farmı: Wooden Inserts'
            ],
            note: 'Farklı eklenti türlerini envanterinizde bulundurun ve yaptığınız göreve göre zırhınıza takıp çıkarın.'
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşyalar & Inserts Tablosu' }
      },
      {
        id: 'legendary-weapons',
        title: 'Efsanevi Silahlar Kataloğu',
        badge: '13 Efsanevi Silah',
        summary: 'Sunucuya özel yapılmış, özel mühimmat ve sıra dışı etkilere sahip 13 efsanevi silahın tam listesi.',
        sections: [
          {
            heading: 'Tüm Efsanevi Silahlar',
            intro: 'Brits PvE Worlds V2 sunucusundaki tüm özel mühimmatlı silahlar:',
            items: [
              'Brits Golden M249: Helikopterlere +%50 daha fazla hasar | Cephane: 5.56 Rifle Ammo',
              'Brits Golden AK: Bradley radarı ve Bilim İnsanlarına +%30 hasar | Cephane: 5.56 Rifle Ammo',
              'The LAGINATOR: Tam otomatik yüksek güçlü roketatar | Cephane: 5.56 Rifle Ammo & Rockets',
              'Eoocoka: Kese Bombası fırlatan eoka tabancası | Cephane: Shotgun Shells & Satchel Charges',
              'Plaguepiercer: Bilim İnsanlarına %500 devasa hasar | Cephane: Arrows',
              'Ashmaker: HV Roketi ateşleyen özel altıpatlar | Cephane: Pistol Bullets & HV Rockets',
              'Brits Boom Stick: Altıpatlar ile roket mühimmatının hibrit füzyonu | Cephane: 5.56 Rifle Ammo & Rockets',
              'Ace’s Python: 50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümünde +%20 ekstra) | Cephane: 5.56 Rifle Ammo',
              'Cluster Clutch: F1 el bombaları fırlatan su borusu pompalı tüfek | Cephane: Shotgun Shells & F1 Grenades',
              'Brits Broken Eoka: Pompalı mermisiyle helikopterlere tam +%500 Hasar! | Cephane: Shotgun Shells',
              'DoubleBoom: Roket fırlatan çifte pompalı tüfek | Cephane: Shotgun Shells & Rockets',
              'Hydra’s Stolen Wand: Doğrudan MLRS füzeleri fırlatan asa | Cephane: MLRS Rockets',
              'Huff-N-Puff: Bradley tanklarını saniyeler içinde eriten özel dartlar fırlatır | Cephane: HV Rockets & Special Darts'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşya Kataloğunda Tablo Olarak Gör' }
      },
      {
        id: 'legendary-sets',
        title: 'Efsanevi Zırh Setleri',
        badge: '10 Efsanevi Set',
        summary: 'Leviathan (%53 darbe emilimi), Impact (%33), Dragon Thorn (%12.5 can emme), Helping Hands ve %100 meslek toplama setleri.',
        sections: [
          {
            heading: 'Savaş Setleri',
            items: [
              'Leviathan Zırh Seti: Deep Sea Cobalt kargo ambarı ve kilitli kasalarından düşer. Tam sette %53 darbe emilimi verir.',
              'Impact Zırh Seti: Nightmare Raid kasaları ve heli enkazlarından düşer. Tam sette %33 darbe emilimi sağlar.',
              'Dragon Thorn Zırh Seti: Hasar vurdukça can çalar. Tam sette %12.5 can emme (Hoodie %2, Pelerin %7). Combat ağacındaki Life Leech ile toplam %13.5 can emme sağlar.',
              'Helping Hands: Yere düştüğünüzde sizi anında %100 tam canla ayağa kaldırır ve 5 saniye tam ölümsüzlük verir.'
            ]
          },
          {
            heading: 'Toplama Setleri',
            items: [
              'Madencilik Seti: Madenci Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra maden cevheri.',
              'Oduncu Seti: Oduncu Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra odun verimi.',
              'Avcı Seti: Avcı Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra deri ve kemik.',
              'Çiftçi Seti: Çiftçi Şapkası, Gömlek, Pantolon ile tam sette +%60 ekstra hasat verimi.',
              'Yağmacı Seti: Scavenger kıyafetleriyle tam sette +%60 ekstra hurda ve bileşen verimi.',
              'Balıkçı Seti: Balıkçı kıyafetleriyle tam sette +%200 ekstra balıkçılık bonusu.'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Zırh Setlerini İncele' }
      },
      {
        id: 'legendary-tools',
        title: 'Efsanevi Aletler & Tamir',
        badge: 'Aletler & Tamir',
        summary: 'Brits Broken Axe, Broken Pickaxe, Fertile Bone, Reaping Spade, Bal0o\'s Marrowpaw ve %100 kalıcı tamir sağlayan Mad\'s Extra Magical.',
        sections: [
          {
            heading: 'Özel Yetenekli Aletler',
            items: [
              'Brits Broken Axe: Ağaç keserken oyuncunun çevresinde anında 4 ekstra maden nodu çıkarma şansı vardır. Lumberjack seti ile eşleştirin.',
              'Brits Broken Pickaxe: Maden nodlarından sabit +%60 ekstra cevher verimi sağlar.',
              'Reaping Spade: 6 metre çapındaki tüm ekili bitkileri tek tıkla anında hasat eder. Yerdeki taş/kütüklerden bulunur.',
              'Fertile Bone: Aşama başına 50 kemik parçası harcayarak bitkileri anında bir sonraki büyüme evresine geçirir.',
              'Bal0o\'s Marrowpaw: Ayı avlayıp derisini yüzerken bulunur; hayvanlardan tam 4 kat kemik verir. Fertile Bone\'u besler.',
              'Mad\'s Magical Tools: Standart efsanevi alettir; yüksek toplama hızı sağlar.'
            ]
          },
          {
            heading: 'Mad\'s Extra Magical: %100 Kalıcı Tamir!',
            intro:
              'Bir alet değildir; tek kullanımlık sürükle-bırak tamir eşyasıdır. Normalde tamir masasında tamir edilen eşyada kalıcı kırmızı bar oluşur ve kırmızı bar dolduğunda eşya bir daha tamir edilemez. Mad\'s Extra Magical envanterde eşyanın üzerine sürüklendiğinde bu kalıcı kırmızı barı tamamen sıfırlar ve eşyayı %100 maksimum yeşil canına ulaştırır.',
            note: 'Nightmare Raid kasalarından, Legendary Heli enkazlarından veya Deep Sea kargo sandıklarından nadir ganimet olarak düşer.'
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Alet Kataloğunu Aç' }
      },
      {
        id: 'bradleys',
        title: 'Bradley Tank Avı',
        badge: 'Askeri Ganimet',
        summary: 'Bradley APC tanklarını avlama rehberi: Raid Dünyaları, satın alınabilir Bradley\'ler, etkili silahlar ve ganimet kuralları.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              'Sohbete /hub yazın ve kırmızı portallardan (Raid Dünyaları 1-4) birine girin.',
              'Haritada bir Bradley adasına doğru ilerleyin.',
              'Mağazayı (/s) açın ve "Buyable Bradleys" bölümünden bütçenize uygun bir Bradley seçin.',
              'Bradley gökyüzünden düşer. Havadayken hasar almaz; yere indiği an ateş açabilirsiniz.'
            ],
            note: 'Bradley tankları Launch Site anıtında değil, Raid Dünyası\'ndaki özel Bradley adalarında kesilir.'
          },
          {
            heading: 'Savaş Taktiği ve Silah Seçimi',
            items: [
              'Adalardaki beton duvarları siper olarak kullanın; ana topuna ve roket salvosuna açık alanda yakalanmayın.',
              'Standart roketatarlar kolay zorluklarda yeterlidir; ancak Huff-N-Puff efsanevi dart silahı Bradley\'i saniyeler içinde eritir.',
              'Ashmaker (HV Roket sıkan revolver) hızlı hareket ederek vur-kaç yapmak için mükemmeldir.'
            ]
          },
          {
            heading: 'Ganimet Kuralları',
            items: [
              'Bradley patladığında ortaya çıkan alevli sandıkları yalnızca tankı çağıran oyuncu veya takım açabilir.',
              'Etrafa saçılan gevşek parçaları diğer oyuncular alabilir; bu yüzden ateşi söndüğü an sandıkları hızla toplayın.'
            ]
          }
        ]
      },
      {
        id: 'helis',
        title: 'Helikopter Avı (Kuleler)',
        badge: 'Heli Kuleleri',
        summary: 'Patrol Helikopterlerini düşürme rehberi: Kuleler (/tower1-6), M249 Drum Mag taktiği, üs kulesi yapımı ve /hsretire.',
        sections: [
          {
            heading: 'Hazırlık ve Ekipman',
            items: [
              'Tam HQM zırh seti veya Leviathan/Dragon Thorn zırhı.',
              'M249 ve Combat dalındaki Drum Mag yeteneği (şarjör kapasitesini artırır).',
              'Max Health Tea, bolca şırınga ve sargı bezi.',
              'Hazırlıksız oyuncular Elite ve Legendary heli\'lerden uzak durmalıdır; tek roketle indirebilirler.'
            ]
          },
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/tower1 ile /tower6 arasındaki özel nişancı kulelerine ışınlanın (Tower 6 en geniş görüş açısına sahiptir).',
              'Mağazayı (/s) açın, "Buyable Helis" bölümünden istediğiniz zorluktaki helikopteri çağırın.'
            ]
          },
          {
            heading: 'Savaş Taktikleri',
            items: [
              'En hızlı düşürmek için üst ana rotora ve kuyruk rotoruna odaklanın.',
              'Nişanınız iyiyse standart 5.56, daha rahat vurmak isterseniz HV 5.56 mermisi kullanın.',
              'Ace\'s Python (50 mermilik şarjör, helikopterlere +%30 hasar) çok etkilidir.',
              'Brits Broken Eoka ile helikoptere yakın mesafeden vurursanız tek vuruşta devasa hasar verir.',
              'Çatışma kötü giderse sohbete /hsretire yazarak helikopteri anında geri çekebilirsiniz.'
            ]
          }
        ]
      },
      {
        id: 'raiding',
        title: 'Raid Dünyaları ve Baskın',
        badge: 'Raid Dünyası',
        summary: 'Raid Dünyalarında hazır üsleri satın alıp (/buyraid) kuşatma silahlarıyla patlatarak devasa ganimet kazanma rehberi.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/hub yazın ve dört kırmızı portaldan birine girerek Raid Dünyasına geçin.',
              '/buyraid yazarak bütçenize uygun bir üs satın alın; üs saniyeler içinde dünyada oluşur.',
              'Raid bekleme süreleri tamamen kaldırılmıştır; kaynağınız olduğu sürece art arda baskın yapabilirsiniz.'
            ]
          },
          {
            heading: 'Zorluk Kademeleri ve Maliyet',
            items: [
              'Easy: Ahşap üs, düşük maliyet. Başlangıç ve ilk raid görevleri için uygundur.',
              'Medium: Sac ve taş yapılar, dengeli getiri.',
              'Hard / Nightmare: HQM yapılar, ağır savunma taretleri ve elit NPC muhafızlar. Nightmare yaklaşık 20.000 RP\'ye mal olur ancak 300.000+ RP değerinde efsanevi eşya ve hurda verir.'
            ]
          },
          {
            heading: 'Kuşatma Mekanikleri ve İpuçları',
            items: [
              'Baskın sırasında inşaat yapabilirsiniz: merdiven, siper veya köprü kurabilirsiniz.',
              'Kuşatma aletleri (Koçbaşı, Mancınık, Kuşatma Kulesi, Havan) kullanılabilir.',
              'Üslerin SAM hava savunma bataryalarını imha etmeden hava aracıyla yaklaşmayın.',
              'Önerilen silahlar: The LAGINATOR, Brits Boom Stick ve Ashmaker.'
            ]
          }
        ]
      }
    ]
  }
};
