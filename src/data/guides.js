// ==========================================================
// BRITS PVE WORLDS V2 - TÜM REHBERLER VE DOKÜMANTASYON VERİSİ
// Resmi britspve.com rehber mimarisine 1:1 uyumlu tam içerik
// ==========================================================

export const ALL_OFFICIAL_GUIDES = [
  { id: 'intro', title: 'Introduction', stage: 'early', category: 'Başlangıç' },
  { id: 'setgenes', title: '/setgenes Guide', stage: 'mid', category: 'Orta Seviye' },
  { id: 'armor-inserts', title: 'Armor Inserts', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'beginner', title: 'Beginner Guide', stage: 'early', category: 'Başlangıç' },
  { id: 'rp-methods', title: 'Best Beginner and Advanced RP Method', stage: 'early', category: 'Başlangıç' },
  { id: 'deep-sea', title: 'Deep Sea Rework', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'feedback', title: 'Feedback and Ideas', stage: 'early', category: 'Başlangıç' },
  { id: 'food', title: 'Food System', stage: 'mid', category: 'Orta Seviye' },
  { id: 'legendary-sets', title: 'Legendary Sets', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'legendary-tools', title: 'Legendary Tools', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'legendary-weapons', title: 'Legendary Weapons', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'progression', title: 'Progression & Levels', stage: 'mid', category: 'Orta Seviye' },
  { id: 'quests', title: 'Quests & Events', stage: 'mid', category: 'Orta Seviye' },
  { id: 'skills', title: 'Skills', stage: 'mid', category: 'Orta Seviye' },
  { id: 'support', title: 'Support Tickets', stage: 'early', category: 'Başlangıç' },
  { id: 'bradleys', title: 'Tackling Bradleys', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'helis', title: 'Tackling Helis', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'raiding', title: 'Tackling Raiding', stage: 'endgame', category: 'İleri Seviye' },
  { id: 'virtual-quarries', title: 'Virtual Quarries', stage: 'mid', category: 'Orta Seviye' },
  { id: 'world-events', title: 'World Events', stage: 'mid', category: 'Orta Seviye' },
];

export const PROGRESSION_GUIDES = {
  // ==========================================================
  // BAŞLANGIÇ REHBERLERİ (BEGINNER GUIDES)
  // ==========================================================
  early: {
    id: 'early',
    categoryLead: 'BEGINNER',
    categoryTail: 'GUIDES',
    accent: 'sprout',
    subtitle: 'Sunucuya yeni mi geldin? Buradan başla: ilk gece, RP temelleri ve yardım alma yolları.',
    guides: [
      {
        id: 'intro',
        title: 'Introduction (Giriş)',
        badge: 'Genel Bakış',
        summary: 'Brits PvE Worlds sunucusunun ne olduğunu, sunucu mimarisini ve temel oynanış felsefesini öğren.',
        sections: [
          {
            heading: 'Brits PvE Worlds Nedir?',
            intro:
              'Brits PvE Worlds; görevler, özel askeri etkinlikler, 4 dallı küresel yetenek ağacı ve efsanevi eşyalarla MMORPG tarzı bir ilerleme sunan özerk Rust PvE sunucusudur. Rust\'a yeni başlayanlar da, binlerce saatlik emektarlar da burada zengin bir oynanış bulur.'
          },
          {
            heading: 'Sunucu Bölgeleri ve Portlar',
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
              'Raid Dünyaları (/buyraid): Hazır askeri üsleri satın alıp kuşatma silahlarıyla patlattığın ganimet alanları.',
              'Efsanevi Teçhizat: 13 özel silah, 10 zırh seti, Armor Inserts ve %100 tamir edilebilir aletler.'
            ]
          }
        ],
        link: { tab: 'play', label: 'Sunucuya Nasıl Bağlanılır?' }
      },
      {
        id: 'beginner',
        title: 'Beginner Guide (Başlangıç Rehberi)',
        badge: 'İlk Gece',
        summary: 'Yeni oyuncuların temel sistemleri öğrenip sunucudaki ilk saatlerinde kaybolmaması için adım adım rehber.',
        sections: [
          {
            heading: '1. İlk Adımlar: HUB ve Dünya Seçimi',
            intro:
              'Sunucuya ilk bağlandığında güvenli HUB bölgesinde veya oyun dünyalarından birinde doğarsın. HUB; dünyalar ve Raid Dünyaları arasında geçiş yaptığın ve ana mağazaya eriştiğin merkezdir.',
            items: [
              'İstediğin zaman sohbete /hub yazarak güvenli merkeze dönebilirsin.',
              'Oyun dünyaları (World 1 - 8) arasında hiçbir kural farkı yoktur; arkadaşlarınla aynı dünyayı seçmen yeterlidir.',
              'Mağazayı açmak için istediğin an /s veya /shop komutunu kullanabilirsin.'
            ]
          },
          {
            heading: '2. İlk Üs ve Başlangıç Görevleri',
            ordered: true,
            items: [
              'Dünyaya girdiğinde hemen /quest veya /q yazarak "Getting Started" başlangıç görevlerini başlat.',
              'Bu görevler odun, taş ve temel hurda toplatırken sana yüksek miktarda başlangıç XP ve RP kazandırır.',
              'İlk 2x2 veya 1x2 taş üssünü kur, dolabını kilitle ve /sethome evim komutuyla evinin koordinatını kaydet.',
              'Evin yıkılmaz ve diğer oyuncular tarafından yağmalanamaz; sunucuda tam PvE koruması vardır.'
            ]
          },
          {
            heading: '3. İlk Seviyeler ve Gelişim',
            items: [
              'Seviye atladıkça /st ile yetenek ağacını aç; ilk puanlarını Gathercraft ve Survivalcraft dallarına ver.',
              'Günlük görevleri (/q -> Dailies) her gün kontrol et; düzenli hurda ve RP kaynağıdır.',
              'Oyuncu pazarlarını incelemek için /ps veya /market yaz.'
            ],
            note: 'Takıldığın her konuda sunucu Discord\'unda #support kanalından ticket açabilirsin.'
          }
        ],
        link: { tab: 'commands', label: 'Tüm Sunucu Komutları' }
      },
      {
        id: 'rp-methods',
        title: 'Best Beginner and Advanced RP Method (En İyi RP Yöntemleri)',
        badge: 'Ekonomi & Para',
        summary: 'Başlangıçtan oyun sonuna RP kazanma yolları: Tactical Gloves geri dönüşümü, kumaş çiftliği, sanal ocaklar ve raidler.',
        sections: [
          {
            heading: 'RP (Reward Points) Nedir?',
            intro:
              'RP, sunucunun evrensel para birimidir. /s mağazasında efsanevi eşyalar, raid üsleri (/buyraid), helikopter kuleleri ve etkinlik biletleri satın almak için kullanılır.'
          },
          {
            heading: 'Başlangıç Taktiği: Tactical Gloves Geri Dönüşümü',
            ordered: true,
            items: [
              'Outpost\'taki kıyafet otomatından 20 Scrap karşılığında Tactical Gloves (Taktik Eldiven) satın al.',
              'Eldivenleri Outpost\'taki geri dönüştürücüye (Recycler) at.',
              'Her eldiven tam 288 Kumaş (Cloth) ve 12 Deri verir.',
              'Kumaşı /pc cloth komutuyla doğrudan RP\'ye çevir. Wipe başında 10 dakikada on binlerce RP sermayesi kurmanın en hızlı yoludur.'
            ],
            note: 'Sunucuya yeni girdiğinde hurdanın ilk 200 tanesini bu yöntemle RP\'ye çevirmek gelişimi inanılmaz hızlandırır.'
          },
          {
            heading: 'Orta Seviye: 3x3 Planter ile Otomatik Kenevir Çiftliği',
            items: [
              'Üssüne Advanced Triangle Planter Box III yerleştir ve otomatik sulama/ışık bağla.',
              'Survivalcraft dalındaki Geneticist yeteneğini aç ve /setgenes GGGYYY komutuyla God-Seed klonları üret.',
              'Bountiful Harvest yeteneği ile bitki başına verimi katla.',
              'Reaping Spade efsanevi küreğini kullanarak 6 metre çapındaki tüm bitkileri tek tıkla topla.',
              'Hasat ettiğin yüz binlerce kumaşı /pc cloth ile satarak sınırsız RP akışı sağla.'
            ]
          },
          {
            heading: 'İleri Seviye: Sanal Ocaklar ve Raid Dünyaları',
            items: [
              'Sanal Taş Ocakları (/qr) sen çevrimdışıyken bile devasa miktarda hammadde üretir.',
              'Raid Dünyalarında (/buyraid) Nightmare üslerini patlatmak, çiftlikten sonra sunucunun en yüksek nakit RP getiren aktivitesidir (sefer başına 300.000+ RP ganimet).'
            ]
          }
        ]
      },
      {
        id: 'early-skill-route',
        title: 'Early Skill Route (Erken Yetenek Rotası)',
        badge: 'Hızlı Teknoloji',
        summary: 'İlk yetenek puanlarını (SP) doğru harcayarak hurda, bileşen ve maden toplama hızını 4 katına çıkarma rehberi.',
        sections: [
          {
            heading: 'Hurda ve Varil Temizliği (Gathercraft)',
            items: [
              'Smash \'N Grab (1 SP): Varilleri tek vuruşta patlatır ve tüm eşyaları doğrudan çantana ışınlar.',
              'Salvage King (3/3 Kademe): Varil ve sandıklardan çıkan hurda miktarını tam 4 katına (%400) çıkarır.',
              'Parts Hunter: Geri dönüştürücüde ve sandıklarda bileşenlerin %45 ihtimalle ikiye katlanmasını sağlar.',
              'Bargain Hunter (1 SP): Araştırma masasında (Research Bench) harcanan hurdanın büyük kısmını iade eder.'
            ]
          },
          {
            heading: 'Hızlı Madencilik Pasifleri',
            items: [
              'Vein Seeker (1 SP): Maden kırarken parlayan kıvılcım noktasını arama zorunluluğunu kaldırır.',
              'Shatterpoint (5 SP): Maden noduna vurduğun ilk darbede nodu tek vuruşta patlatır.',
              'Prospector: Madenlerden çıkan metal, kükürt ve HQM verimini +%75 artırır.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'İnteraktif Yetenek Haritasını İncele' }
      },
      {
        id: 'feedback',
        title: 'Feedback and Ideas (Geri Bildirim & Fikirler)',
        badge: 'Topluluk',
        summary: 'Sunucu geliştiricilerine önerilerini, denge fikirlerini ve hata raporlarını iletme kanalları.',
        sections: [
          {
            heading: 'Fikirlerini Nasıl Paylaşırsın?',
            intro:
              'Brits topluluğu oyuncu geri bildirimleriyle büyür. Önerilerini, sunucuda görmek istediğin efsanevi silah/perk fikirlerini resmi Brits Discord sunucusundaki #suggestions kanalından paylaşabilirsin.'
          }
        ]
      },
      {
        id: 'support',
        title: 'Support Tickets (Destek Talepleri)',
        badge: 'Yardım & Ticket',
        summary: 'Oyun içi takılma, kayıp eşya veya teknik sorunlarda sunucu yetkililerine ulaşma rehberi.',
        sections: [
          {
            heading: 'Ticket Açma Adımları',
            intro:
              'Brits Discord sunucusunda #support-tickets kanalına giderek "Create Ticket" butonuna basabilirsin. Yetkililer dakikalar içinde yardımcı olur.'
          }
        ]
      }
    ]
  },

  // ==========================================================
  // ORTA SEVİYE REHBERLER (INTERMEDIATE GUIDES)
  // ==========================================================
  mid: {
    id: 'mid',
    categoryLead: 'INTERMEDIATE',
    categoryTail: 'GUIDES',
    accent: 'terracotta-light',
    subtitle: 'Core systems: skills, food, quests, progression and world events.',
    guides: [
      {
        id: 'setgenes',
        title: '/setgenes Guide',
        badge: 'Tarım & Genetik',
        summary: 'The /setgenes command lets you choose the gene setup for a seed. (God-Seed GGGYYY üretimi ve tarım otomasyonu).',
        sections: [
          {
            heading: 'Komut Nasıl Kullanılır?',
            ordered: true,
            items: [
              'Survivalcraft yetenek ağacındaki Geneticist yeteneğini açtığından emin ol.',
              'Genetiğini değiştirmek istediğin tohumu (Seed) veya klonu elinde aktif olarak tut.',
              'Sohbete /setgenes yazıp ardından 6 harflik gen kodunu ekle. Örnek: /setgenes GGGYYY',
              'Komut tohumun tüm kromozomlarını anında kusursuz gen dizilimine çevirir.'
            ],
            note: 'Komutun kullanım bekleme süresi (cooldown) vardır; harfleri ilk seferde doğru girdiğinden emin ol.'
          },
          {
            heading: 'Gen Harfleri ve Anlamları',
            items: [
              'G (Growth): Bitkinin büyüme hızını artırır. Çok daha kısa sürede hasat olgunluğuna ulaşır.',
              'Y (Yield): Hasat edilen ürün miktarını doğrudan katlar. Kenevirde devasa kumaş verir.',
              'H (Hardiness): Bitkinin soğuk, susuzluk ve kötü hava koşullarına dayanıklılığını sağlar.',
              'W (Water): Negatif gen; bitkinin aşırı su tüketmesine yol açar.',
              'X (Empty): Boş gen; hiçbir katkı sağlamaz.'
            ]
          },
          {
            heading: 'Kusursuz God-Seed: GGGYYY ve Klon Çoğaltma',
            items: [
              '3x Growth (G) ve 3x Yield (Y) sunucudaki en yüksek verimli kumaş ve gıda dizilimidir.',
              'GGGYYY tohumu ektikten sonra olgunlaştığında doğrudan kesmek yerine sağ tıklayarak Klon (Clone) al.',
              'Aldığın her klon aynı GGGYYY genini taşır; böylece tek bir tohumdan yüzlerce saksılık devasa bir sera kurabilirsin.'
            ]
          }
        ]
      },
      {
        id: 'food',
        title: 'Food System',
        badge: 'Mutfak & iBag',
        summary: 'You can find various special food items, meals, and ingredients on this server. Every food item has its own special properties.',
        sections: [
          {
            heading: 'Özel Yemekler ve Güçlendirmeler (Buffs)',
            items: [
              'Sunucudaki her özel yemek, oyuncuya ve yakınındaki takım arkadaşlarına güçlü geçici pasifler sağlar.',
              'Yemek buffları; maksimum can artışı, hızlı can yenilemesi, darbe direnci ve toplama verimini artırır.',
              'Yetenek ağacındaki bonusların üzerine doğrudan eklenir (stacklenir).',
              'Yemekler buzdolabı veya iBag haricinde tutulursa zamanla bozulur.'
            ]
          },
          {
            heading: 'Envanterdeki Özel Butonlar',
            items: [
              'Meals: Karakterin üzerinde o an aktif olan tüm yemek güçlendirmelerini listeler.',
              'iBag (Malzeme Çantası): Dünyada topladığın ham gıdaları ve hayvan ürünlerini (örneğin inek sütü) otomatik olarak kendi içine çeker. Sonsuz buzdolabı görevi görür; içindeki malzemeler asla bozulmaz.',
              'Cook: Tarifler, gerekli malzemeler ve favoriler sekmelerinden oluşan kapsamlı yemek pişirme arayüzünü açar.',
              'Market (Çiftçi Pazarı): Şeker, un, ekmek, kumaş gibi temel hammaddeleri hurda (Scrap) ile alıp satabileceğin oyuncu pazarıdır.'
            ],
            note: 'Çiftçi Pazarı tamamen oyuncu stoğuna dayalıdır; sunucu içi ekonomi için harika bir gelir kapısıdır.'
          }
        ]
      },
      {
        id: 'progression',
        title: 'Progression & Levels',
        badge: 'Seviye & Prestige',
        summary: 'On Brits PvE Worlds, leveling is central to progression. Your level determines access to better skills (Seviye 100 ve Pr10 sistemi).',
        sections: [
          {
            heading: 'Seviye Atlama ve Yetenek Puanı (SP)',
            items: [
              'Her seviye atladığında yetenek ağacında harcamak üzere 2 Yetenek Puanı (SP) kazanırsın.',
              'Yetenek ağacı menüsünü /st komutuyla veya envanter açıkken üstteki XP barına tıklayarak açabilirsin.',
              'Prestige öncesi maksimum ulaşılabilir seviye 100\'dür.'
            ]
          },
          {
            heading: 'Prestige Sistemi (/pr)',
            items: [
              'Seviye 100\'e ulaştığında /pr yazarak Prestige aşamasına geçebilirsin.',
              'Prestige seviyeni 1\'e ve harcanan SP\'lerini sıfırlar; ancak karşılığında kalıcı prestij unvanı ve özel sunucu avantajları verir.',
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
        title: 'Quests & Events',
        badge: 'Görev Sistemi',
        summary: 'BritsPVE uses a custom quest system with progression paths from beginner objectives to end-game challenges.',
        sections: [
          {
            heading: 'Özel Görev Mimarisi',
            intro:
              'BritsPVE, başlangıç hedeflerinden en zorlu oyun sonu meydan okumalarına kadar uzanan özel bir görev motoruna sahiptir. Görevler XP, RP, efsanevi aletler ve nadir bileşenler verir. Menüyü /quest veya /q ile açabilirsin.'
          },
          {
            heading: 'Görev Kategorileri',
            items: [
              'Getting Started (Başlangıç): Temel toplama, sığınak ve hurda mekaniklerini öğretir.',
              'Daily Quests (Günlük Görevler): Her 24 saatte bir sıfırlanır (örn. Barrel Basher, Subway Siege, Elite Hacker).',
              'Resource & Economy: Sanal taş ocakları, petrol çıkarma ve hammadde işleme görevleri.',
              'Recycle / Takas Görevleri: Bant (Duct Tape), çamaşır suyu (Bleach) ve batarya gibi eşyaları nakit RP ve XP\'ye çevirir.',
              'Raid & Combat Quests: Üs patlatma ve askeri hedefleri yok etme zincirleri (Raid Rookie, Fortress Cracker).',
              'Quartermaster Quests: Yüksek hacimli kaynak toplama görevleri; efsanevi yemek tarifleri ve serumların kilidini açar.',
              'Boom God Challenges: Oyun sonunun en saygın ve en yüksek RP veren boss/raid zorlukları.'
            ]
          }
        ]
      },
      {
        id: 'skills',
        title: 'Skills',
        badge: 'Yetenek Ağacı',
        summary: 'You can open the skill tree overlay by using the /st command or by clicking the XP bar while your inventory is open.',
        sections: [
          {
            heading: 'Yetenek Ağacına Erişim',
            items: [
              '/st komutunu yazarak veya envanter açıkken üstteki XP barına tıklayarak yetenek haritasını aç.',
              '4 küresel dal bulunur: Gathercraft (Toplama), Survivalcraft (Hayatta Kalma), Combat (Savaş) ve Vehicles (Araçlar).',
              'Yetenek maliyetleri 1 SP veya 5 SP olabilir. Puanlarını istediğin zaman sıfırlayıp yeniden dağıtabilirsin.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'İnteraktif Yetenek Haritasına Git' }
      },
      {
        id: 'virtual-quarries',
        title: 'Virtual Quarries',
        badge: 'Pasif Gelir',
        summary: 'Virtual Quarries are one of the core passive-income systems on BritsPVE, letting you generate resources while offline or AFK.',
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
              'Mağazadan (/s) Survey Charge (Arama Patlayıcısı) satın al.',
              'İstediğin sanal ocak türünü /s üzerinden envanterine al.',
              '/qr komutunu yazarak Sanal Ocak yönetim panelini aç; Survey Charge patlatarak zengin bir maden damarı bul ve ocağını yerleştir.',
              'Ocağın haznesine Low Grade Fuel koyarak üretimi başlat.'
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
        title: 'World Events',
        badge: 'Dünya Etkinlikleri',
        summary: 'These are some of the world driven events (Radtown, Harbinger Drone Boss, Harbor, Zombie ve Liderlik Tabloları).',
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
  // İLERİ SEVİYE REHBERLER (ENDGAME & COMBAT GUIDES)
  // ==========================================================
  endgame: {
    id: 'endgame',
    categoryLead: 'ADVANCED & ENDGAME',
    categoryTail: 'GUIDES',
    accent: 'terracotta',
    subtitle: 'Oyun sonu içerikleri: Deep Sea Rework, Armor Inserts, efsaneviler, Bradley tankları, helikopterler ve raidler.',
    guides: [
      {
        id: 'deep-sea',
        title: 'Deep Sea Rework',
        badge: 'Deniz Etkinliği / Cobalt',
        summary: 'Deep Sea 1 is already gone from the servers! Cobalt Corporation denizleri ele geçiriyor: Kargo gemileri, pinger devriyeleri ve tam temizlik taktikleri.',
        sections: [
          {
            heading: 'Genel Bakış (Overview)',
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
              'Kilitli Sandıklar: Scavenge alanlarından üç kademeli kilitli sandık (Locked Crates) net şekilde görülebilir; hack süresi standart 15 dakikadır.',
              'Efsanevi Düşme Şansı: Leviathan Armor Set parçaları ve Mad\'s Extra Magical aletler elde etme şansı oldukça yüksektir.'
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
            note: 'Gerekli Ekipman: 200+ Tüfek Mermisi, 10-15 Satchel veya 2-3 Roket, 5-10 Şırınga/Medkit, 20+ Sargı Bezi, Metal Tier 3 Zırh veya Leviathan Seti, RHIB tekne, can yenileyici yemekler.'
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
        title: 'Armor Inserts (Zırh Eklentileri)',
        badge: 'Zırh Geliştirmesi',
        summary: 'Armor Inserts are lootable armor enhancements that add resistance against specific damage types. (+, ++ ve +++ sayısal koruma değerleri).',
        sections: [
          {
            heading: 'Zırh Eklentileri Nasıl Çalışır?',
            intro:
              'Armor Inserts, koruyucu zırh parçalarına takılarak belirli hasar türlerine karşı ek direnç sağlayan bulunabilir eklentilerdir. Farklı eklenti aileleri farklı tehditleri karşılar, bu yüzden girdiğiniz aktiviteye göre eklentilerinizi değiştirebilirsiniz.'
          },
          {
            heading: 'Pro İpucu (Pro Tip)',
            items: [
              'Su altı ve deniz operasyonları: Asbestos inserts kullanın.',
              'Raid Dünyaları ve ağır askeri çatışmalar: Metal inserts kullanın.',
              'Yüksekten düşme riski olan kule ve monumentler: Lead inserts kullanın.',
              'Genel harita gezintisi ve hayatta kalma: Wooden inserts kullanın.'
            ]
          },
          {
            heading: 'Eklenti Türleri ve Sayısal Kademe Tabloları',
            intro: 'Dört ana eklenti serisinin kademelere (+, ++, +++) göre tam koruma değerleri:',
            items: [
              '1. Wooden Inserts (Satiated Serisi): Genel günlük hayatta kalma koruması. Isırık, kesik, ezik, saplanma, açlık, susuzluk ve arı sokmasına karşı. [Kademe +: 1.0 | Kademe ++: 2.0 | Kademe +++: 3.0 (tüm listelenen türlerde)]',
              '2. Asbestos Inserts (Waterproof Serisi): Su ve soğuk ortamlar için uzmanlaşmış koruma. Boğulma hasarı ve soğuk maruziyeti. [Kademe +: 5.0 Boğulma, 1.0 Soğuk | Kademe ++: 10.0 Boğulma, 2.0 Soğuk | Kademe +++: 15.0 Boğulma, 3.0 Soğuk]',
              '3. Lead Inserts (Impact Serisi): Kinetik ve patlayıcı tehditlere karşı darbe koruması. Düşme hasarı, patlama hasarı ve araç hasarı. [Kademe +: 1.0 | Kademe ++: 2.0 | Kademe +++: 3.0 (her tür için)]',
              '4. Metal Inserts (Metal Serisi): Sınıfının en iyi savaş koruması. Mermi hasarı, kanama ve patlayıcı hasarı. [Kademe +: 4.0 Mermi, 2.0 Kanama, 1.0 Patlayıcı | Kademe ++: 6.0 Mermi, 4.0 Kanama, 4.0 Patlayıcı | Kademe +++: 8.0 Mermi, 6.0 Kanama, 6.0 Patlayıcı]'
            ],
            note: 'Savaş Notu: Metal eklentiler genellikle Raid Dünyaları ve yüksek tehdit içeren boss çatışmaları için en iyi tercihtir.'
          },
          {
            heading: 'Eklentileri Bulma (Finding Armor Inserts)',
            intro:
              'Armor Inserts, sunucu dünyalarındaki ganimet sandıklarından, monumentlerden ve boss kasalarından düşer. Yüksek kademeler (++ ve +++), temel kademeden (+) çok daha nadirdir.'
          },
          {
            heading: 'Stratejik Kullanım Özeti',
            items: [
              'Okyanus monumentleri ve Deep Sea: Asbestos',
              'Raid Dünyaları ve ağır üs çatışmaları: Metal',
              'Kule tırmanışları ve dikey bölgeler: Lead',
              'Genel harita keşfi ve kaynak farmı: Wooden'
            ],
            note: 'Farklı eklenti türlerini envanterinizde bulundurun ve yaptığınız göreve göre zırhınıza takıp çıkarın.'
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşyalar & Inserts Tablosu' }
      },
      {
        id: 'legendary-weapons',
        title: 'Legendary Weapons (Efsanevi Silahlar)',
        badge: '13 Efsanevi Silah',
        summary: 'Sunucuya özel yapılmış, özel mühimmat ve sıra dışı etkilere sahip 13 efsanevi silahın tam listesi.',
        sections: [
          {
            heading: 'Tüm Efsanevi Silahlar Tablosu',
            intro: 'Brits PvE Worlds V2 sunucusundaki tüm özel mühimmatlı silahlar:',
            items: [
              'Brits Golden M249: Helikopterlere +%50 daha fazla hasar (+50% DMG to helis) | Cephane: 5.56 Tüfek Mermisi | Rol: Heli Avcısı',
              'Brits Golden AK: Bradley radarı ve Bilim İnsanlarına +%30 hasar | Cephane: 5.56 Tüfek Mermisi | Rol: Monument Temizliği',
              'The LAGINATOR: Tam otomatik yüksek güçlü roketatar | Cephane: 5.56 Tüfek Mermisi ve Roket | Rol: Üs Yıkıcı / Raid Canavarı',
              'Eoocoka: Kese Bombası (Satchel) fırlatan eoka tabancası | Cephane: Av Tüfeği Saçması ve Kese Bombası | Rol: Erken Oyun Kapı Kırıcı',
              'Plaguepiercer: Bilim İnsanlarına %500 devasa hasar (500% dmg to scientists) | Cephane: Ok (Arrows) | Rol: Deep Sea & Cobalt Katili',
              'Ashmaker: HV Roketi ateşleyen özel altıpatlar (Revolver that shoots HVs) | Cephane: Tabanca Mermisi ve HV Roket | Rol: Mobil Ağır Topçu',
              'Brits Boom Stick: Altıpatlar ile roket mühimmatının hibrit füzyonu | Cephane: 5.56 Mermi ve Roket | Rol: Raid Desteği & Yıkım',
              'Ace’s Python: 50 mermilik şarjör, Helikopterlere +%30 hasar (Yumurta kostümünde +%20 ekstra) | Cephane: 5.56 Mermi | Rol: Hafif Heli Avcısı',
              'Cluster Clutch: F1 el bombaları fırlatan su borusu pompalı tüfek | Cephane: Av Tüfeği Saçması ve F1 El Bombası | Rol: Alan Temizliği',
              'Brits Broken Eoka: Pompalı mermisiyle helikopterlere tam +%500 Hasar! | Cephane: Av Tüfeği Saçması | Rol: Tek Vuruşta Heli İndirme',
              'DoubleBoom: Roket fırlatan çifte pompalı tüfek | Cephane: Av Tüfeği Saçması ve Roket | Rol: Yakın Mesafe Yıkım',
              'Hydra’s Stolen Wand: Doğrudan MLRS füzeleri fırlatan asa | Cephane: MLRS Roketi | Rol: Kuşatma Asası',
              'Huff-N-Puff: Bradley tanklarını saniyeler içinde eriten özel dartlar fırlatır | Cephane: HV Roket ve Özel Dart | Rol: Bradley Katili'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşya Kataloğunda Tablo Olarak Gör' }
      },
      {
        id: 'legendary-sets',
        title: 'Legendary Sets (Efsanevi Zırh Setleri)',
        badge: '10 Efsanevi Set',
        summary: 'Leviathan (%53 darbe emilimi), Impact (%33), Dragon Thorn (%12.5 can emme), Helping Hands ve %100 meslek toplama setleri.',
        sections: [
          {
            heading: 'Savaş Setleri (Combat Sets)',
            items: [
              'Leviathan Armor Set: Deep Sea Cobalt kargo ambarı ve kilitli kasalarından düşer. Tam sette %53 darbe emilimi (Impact Absorption) verir.',
              'Impact Armor Set: Nightmare Raid kasaları ve heli enkazlarından düşer. Tam sette %33 darbe emilimi sağlar.',
              'Dragon Thorn Armor Set: Hasar vurdukça can çalar. Tam sette %12.5 vampirik iyileşme (Hoodie %2, Pelerin %7). Combat ağacındaki Life Leech ile toplam %13.5 can emme sağlar.',
              'Helping Hands: Yere düştüğünde (downed) seni anında %100 tam canla ayağa kaldırır ve 5 saniye tam ölümsüzlük verir.'
            ]
          },
          {
            heading: 'Toplama Setleri (Gathering Sets)',
            items: [
              'Mining Set: Madenci Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra maden cevheri.',
              'Lumberjack Set: Oduncu Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra odun verimi.',
              'Hunter Set: Avcı Şapkası (%30), Gövde (%35), Pantolon (%35) ile tam sette +%100 ekstra deri ve kemik.',
              'Farmer Set: Çiftçi Şapkası, Gömlek, Pantolon ile tam sette +%60 ekstra hasat verimi.',
              'Scavenger Set: Scavenger kıyafetleriyle tam sette +%60 ekstra hurda ve bileşen verimi.',
              'Angler Set: Balıkçı kıyafetleriyle tam sette +%200 ekstra balıkçılık bonusu.'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Zırh Setlerini İncele' }
      },
      {
        id: 'legendary-tools',
        title: 'Legendary Tools (Efsanevi Aletler)',
        badge: 'Efsanevi Aletler & Tamir',
        summary: 'Brits Broken Axe, Broken Pickaxe, Fertile Bone, Reaping Spade, Bal0o\'s Marrowpaw ve %100 kalıcı tamir sağlayan Mad\'s Extra Magical aletler.',
        sections: [
          {
            heading: 'Özel Yetenekli Aletler',
            items: [
              'Brits Broken Axe: Ağaç keserken oyuncunun çevresinde anında 4 ekstra maden nodu çıkarma şansı vardır. Lumberjack seti ile eşleştirin.',
              'Brits Broken Pickaxe: Maden nodlarından sabit +%60 ekstra cevher verimi sağlar.',
              'Reaping Spade: 6 metre çapındaki tüm ekili bitkileri (3x3 planter kutuları için kusursuz) tek tıkla anında hasat eder. Yerdeki taş/kütüklerden bulunur.',
              'Fertile Bone: Aşama başına 50 kemik parçası harcayarak bitkileri anında bir sonraki büyüme evresine geçirir.',
              'Bal0o\'s Marrowpaw: Ayı avlayıp derisini yüzerken bulunur; hayvanlardan tam 4 kat (4x) kemik verir. Fertile Bone\'u besler.',
              'Mad\'s Magical Tools: Standart efsanevi alettir; yüksek toplama hızı sağlar.'
            ]
          },
          {
            heading: 'Mad\'s Extra Magical Tools: %100 Kalıcı Tamir!',
            intro:
              'Rust vanilla mekaniğinde bir eşyayı Tamir Masasında (Repair Bench) tamir ettiğinizde maksimum canı kalıcı olarak azalır (kırmızı bar oluşur) ve eşya zamanla yok olur. Mad\'s Extra Magical Tools sunucudaki tek istisnadır: Tamir masasında tamir edildiğinde bu kırmızı barı tamamen siler ve orijinal %100 maksimum dayanıklılığı geri yükler.',
            note: 'Nightmare Raid kasalarından, Legendary Heli enkazlarından veya Deep Sea kargo sandıklarından nadir ganimet olarak düşer.'
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Alet Kataloğunu Aç' }
      },
      {
        id: 'bradleys',
        title: 'Tackling Bradleys (Bradley Avı)',
        badge: 'Askeri Ganimet',
        summary: 'Bradley APC tanklarını avlama rehberi: Raid Dünyaları, satın alınabilir Bradley\'ler, etkili silahlar ve ganimet kuralları.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              'Sohbete /hub yaz ve kırmızı portallardan (Raid Dünyaları 1-4) birine gir.',
              'Haritada bir Bradley adasına doğru ilerle.',
              'Mağazayı (/s) aç ve "Buyable Bradleys" bölümünden bütçene uygun bir Bradley seç.',
              'Bradley gökyüzünden düşer. Havadayken hasar almaz; yere indiği an ateş açabilirsin.'
            ],
            note: 'Bradley tankları Launch Site anıtında değil, Raid Dünyası\'ndaki özel Bradley adalarında kesilir.'
          },
          {
            heading: 'Savaş Taktiği ve Silah Seçimi',
            items: [
              'Adalardaki beton duvarları siper olarak kullan; ana topuna ve roket salvosuna açık alanda yakalanma.',
              'Standart roketatarlar kolay zorluklarda yeterlidir; ancak Huff-N-Puff efsanevi dart silahı Bradley\'i saniyeler içinde eritir.',
              'Ashmaker (HV roket sıkan revolver) hızlı hareket ederek vur-kaç yapmak için mükemmeldir.'
            ]
          },
          {
            heading: 'Ganimet Kuralları',
            items: [
              'Bradley patladığında ortaya çıkan alevli sandıkları yalnızca tankı çağıran oyuncu/takım açabilir.',
              'Etrafa saçılan gevşek parçaları diğer oyuncular alabilir; bu yüzden ateşi söndüğü an sandıkları hızla toplayın.'
            ]
          }
        ]
      },
      {
        id: 'helis',
        title: 'Tackling Helis (Heli Avı)',
        badge: 'Heli Kuleleri',
        summary: 'Patrol Helikopterlerini düşürme rehberi: Kuleler (/tower1-6), M249 Drum Mag taktiği, god peek yapıları ve /hsretire.',
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
              '/tower1 ile /tower6 arasındaki özel nişancı kulelerine ışınlan (Tower 6 en geniş görüş açısına sahiptir).',
              'Mağazayı (/s) aç, "Buyable Helis" bölümünden istediğin zorluktaki helikopteri çağır.'
            ]
          },
          {
            heading: 'Savaş Taktikleri',
            items: [
              'En hızlı düşürmek için üst ana rotora ve kuyruk rotoruna odaklan.',
              'Nişanın iyiyse standart 5.56, daha rahat vurmak istersen HV 5.56 mermisi kullan.',
              'Ace\'s Python (50 mermilik şarjör, helikopterlere +%30 hasar) çok etkilidir.',
              'Brits Broken Eoka ile helikoptere yakın mesafeden vurursan tek vuruşta devasa hasar verir.',
              'Çatışma kötü giderse sohbete /hsretire yazarak helikopteri anında geri çekebilirsin.'
            ]
          }
        ]
      },
      {
        id: 'raiding',
        title: 'Tackling Raiding (Baskın & Raid Dünyaları)',
        badge: 'Raid Dünyası',
        summary: 'Raid Dünyalarında hazır üsleri satın alıp (/buyraid) kuşatma silahlarıyla patlatarak devasa ganimet kazanma rehberi.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/hub yaz ve dört kırmızı portaldan birine girerek Raid Dünyasına geç.',
              '/buyraid yazarak bütçene uygun bir üs satın al; üs saniyeler içinde dünyada oluşur.',
              'Raid bekleme süreleri (cooldown) tamamen kaldırılmıştır; kaynağın olduğu sürece art arda baskın yapabilirsin.'
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
              'Baskın sırasında inşaat yapabilirsin: merdiven, siper veya köprü kurabilirsin.',
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
