// Rehber verisi: her aşama (early/mid/endgame) bir kategori, her rehber bir kart + tam sayfa içeriktir.
// Bölüm (section) biçimi: { heading, intro?, items?: string[], ordered?: boolean, note? }
// Rehber seviyesinde isteğe bağlı: link: { tab, label } -> sitedeki başka bir sekmeye yönlendirir.

export const PROGRESSION_GUIDES = {
  // ==========================================================
  // BAŞLANGIÇ REHBERLERİ
  // ==========================================================
  early: {
    id: 'early',
    categoryLead: 'BAŞLANGIÇ',
    categoryTail: 'REHBERLERİ',
    accent: 'sprout',
    subtitle: 'Sunucuya yeni mi geldin? Buradan başla: ilk gece, RP temelleri ve yardım alma yolları.',
    guides: [
      {
        id: 'intro',
        title: 'Giriş',
        badge: 'Genel',
        summary: 'Brits PvE Worlds\'ün ne olduğunu ve nasıl çalıştığını kısaca öğren.',
        sections: [
          {
            heading: 'Brits PvE Worlds Nedir?',
            intro:
              'Brits PvE Worlds; görevler, özel etkinlikler, yetenek ağacı ve efsanevi eşyalarla MMORPG tarzı bir ilerleme sunan Rust PvE sunucusudur. Rust\'a yeni başlayanlar da, yılların oyuncuları da burada kendine bir yol bulabilir.'
          },
          {
            heading: 'Sunucu Bölgeleri',
            items: [
              'EU: Avrupa\'daki ana sunucu. Görevler, özel etkinlikler ve MMORPG ilerlemesi.',
              'US: Kuzey Amerika sunucusu. Görevler, özel silahlar ve MMORPG ilerlemesi.',
              'AU: Avustralya sunucusu. Görevler, XP ve MMORPG ilerlemesi.'
            ]
          },
          {
            heading: 'Öne Çıkan Sistemler',
            items: [
              'Görev sistemi (/quest): XP, RP ve eşya ödüllü görev zincirleri.',
              'Yetenek ağacı (/st): 4 ana dal, seviye atladıkça açılan yetenekler.',
              'Sanal Taş Ocakları: Çevrimdışıyken bile kaynak üreten pasif gelir sistemi.',
              'Raid Dünyaları: Hazır üsleri satın alıp patlattığın ve ganimet topladığın alanlar.',
              'Efsanevi silah, alet ve zırhlar: Sunucuya özel eşyalar.',
              'Dünya Etkinlikleri: Harbinger, Zombie, Harbor gibi özel etkinlikler.'
            ]
          }
        ],
        link: { tab: 'play', label: 'Sunucuya nasıl bağlanılır?' }
      },
      {
        id: 'beginner',
        title: 'Başlangıç Rehberi',
        badge: 'İlk Gece',
        summary: 'Yeni oyuncuların temel bilgilere ulaşıp ilk girişte kaybolmaması için hazırlandı.',
        sections: [
          {
            heading: '1. İlk Adımlar: HUB',
            intro:
              'Sunucuya girdiğinde ya normal oyun dünyalarından (World 1-8) birinde ya da HUB\'da doğarsın. HUB; dünyalar ve Raid Dünyaları arasında geçiş yaptığın, ana mağazaya eriştiğin güvenli merkezdir.',
            items: ['HUB\'a dönmek için istediğin zaman /hub yaz.', 'Mağazayı (/s) buradan veya oyun içinde açabilirsin.']
          },
          {
            heading: '2. Dünyanı Seç, Üssünü Kur',
            ordered: true,
            items: [
              'Kalıcı üssünü kuracağın bir dünya seç. Tüm dünyaların haritası aynıdır; seçim oynanışı değiştirmez.',
              'Dünyaya girer girmez /quest (veya /q) menüsünü aç ve "Getting Started" başlangıç görevlerini yap. Bu görevler temel kaynak, XP ve RP verir.',
              'Yeterli malzemeyi toplayınca küçük bir başlangıç üssü kur ve /sethome ile konumunu kaydet.'
            ]
          },
          {
            heading: '3. İlk Geceden Sonra',
            items: [
              '/st ile yetenek ağacını aç; ilk puanlarını Gathercraft ve Survivalcraft gibi dallara yatır.',
              'Günlük görevleri takip et; düzenli RP ve XP kaynağıdır.',
              'Kendi pazarın veya oyuncu dükkanları için /ps komutunu kullan.'
            ],
            note: 'Takıldığın yerde Brits Discord sunucusunda ticket açabilirsin.'
          }
        ],
        link: { tab: 'commands', label: 'Tüm sunucu komutları' }
      },
      {
        id: 'rp-methods',
        title: 'En İyi RP Yöntemleri',
        badge: 'Ekonomi',
        summary: 'Başlangıçtan ileri seviyeye RP kazanma yolları: Tactical Gloves, kumaş çiftliği, ocaklar ve baskınlar.',
        sections: [
          {
            heading: 'RP Nedir?',
            intro:
              'RP, sunucunun para birimidir. Pazarda alışveriş, baskın üsleri ve etkinlik girişleri gibi pek çok yerde kullanılır.'
          },
          {
            heading: 'Başlangıç: Tactical Gloves Geri Dönüşümü',
            ordered: true,
            items: [
              'Outpost\'taki kıyafet otomatından 20 Scrap karşılığında Tactical Gloves satın al.',
              'Eldivenleri Outpost\'taki geri dönüştürücüye (Recycler) at.',
              'Her eldiven 288 Kumaş ve 12 Deri verir. Kumaşı /pc cloth ile RP\'ye çevirebilirsin.'
            ],
            note: 'Wipe başı sermayesi için en pratik yöntemlerden biridir.'
          },
          {
            heading: 'Orta ve İleri: Kenevir & Kumaş Çiftliği',
            items: [
              'Üssünde 3x3 Planter Box düzeni kur; otomatik sulama ve ışıklandırmayı bağla.',
              'Önerilen kurulum: 6x Advanced Triangle Planter Box III.',
              'Survivalcraft ağacındaki Geneticist yeteneğiyle /setgenes kullanarak bitkini God-Seed (GGGYYY) yap.',
              'Bountiful Harvest yeteneği ekili ürünlerden daha fazla verim almanı sağlar.',
              'Reaping Spade efsanevi aleti 6 metre çapındaki tüm bitkileri tek seferde toplar.',
              'Hasat ettiğin kumaşı /pc cloth ile sat veya /ps ile diğer oyunculara pazarla.'
            ]
          },
          {
            heading: 'Pasif Gelir ve Baskınlar',
            items: [
              'Sanal Taş Ocakları çevrimdışıyken de kaynak üretir (Orta Seviye Rehberler\'e bak).',
              'Raid Dünyaları\'ndaki hazır üsleri patlatmak (/buyraid), çiftlikten sonra en kazançlı ikinci yöntemdir.'
            ]
          }
        ]
      },
      {
        id: 'early-skill-route',
        title: 'Erken Yetenek Rotası',
        badge: 'Hızlı Teknoloji',
        summary: 'İlk yetenek puanlarını nereye harcayacağını gösteren Gathercraft odaklı rota.',
        sections: [
          {
            heading: 'Hurda ve Varil Farmı',
            items: [
              'Smash \'N Grab (1 SP): Varilleri tek vuruşta kırar ve eşyaları doğrudan çantana çeker.',
              'Salvage King 3/3: Varil ve sandıklardan gelen Scrap miktarını 4 katına çıkarır.',
              'Parts Hunter: Bileşenlerin %45 ihtimalle ikiye katlanmasını sağlar.',
              'Bargain Hunter (1 SP): Araştırma masasında harcadığın hurdanın bir kısmını iade eder.'
            ]
          },
          {
            heading: 'İlk Madencilik Yetenekleri',
            items: [
              'Vein Seeker (1 SP): Madenlerde parlayan noktayı aramak zorunda kalmazsın.',
              'Shatterpoint (5 SP): Tüm maden nodlarını tek vuruşta kırarsın.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'Yetenek ağacını incele' }
      },
      {
        id: 'feedback',
        title: 'Geri Bildirim ve Fikirler',
        badge: 'Topluluk',
        summary: 'Önerilerini ve fikirlerini ekiple paylaşmanın yolu.',
        sections: [
          {
            heading: 'Nasıl Paylaşırım?',
            intro:
              'Geri bildirimlerini veya önerilerini Discord sunucusundaki #suggestions kanalına yazabilirsin. Yeni içerik hakkındaki düşüncelerini paylaşmanın en iyi yolu bu kanaldır.'
          }
        ]
      },
      {
        id: 'support',
        title: 'Destek Talepleri',
        badge: 'Yardım',
        summary: 'Sorun yaşadığında yetkililere nasıl ulaşırsın?',
        sections: [
          {
            heading: 'Ticket Açmak',
            intro: 'Brits Discord sunucusuna katılıp destek talebi (ticket) açarak yetkililere ulaşabilirsin.'
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
    subtitle: 'Temel sistemler: yetenekler, yemek, görevler, ilerleme ve dünya etkinlikleri.',
    guides: [
      {
        id: 'setgenes',
        title: '/setgenes Rehberi',
        badge: 'Tarım',
        summary: '/setgenes komutuyla bitkinin genlerini istediğin gibi belirle.',
        sections: [
          {
            heading: 'Komut Nasıl Kullanılır?',
            ordered: true,
            items: [
              'Geneticist yeteneğini açtığından emin ol (Survivalcraft ağacı).',
              'Genini değiştirmek istediğin tohumu veya klonu elinde tut.',
              'Sohbete /setgenes yazıp ardından 6 harflik gen dizilimini gir. Örnek: /setgenes GGGYYY'
            ],
            note: 'Komutun bekleme süresi vardır; harfleri ilk seferde doğru girmeye dikkat et.'
          },
          {
            heading: 'Gen Harfleri',
            items: [
              'G (Growth): Bitkinin büyüme hızı.',
              'Y (Yield): Hasat edilen ürün miktarı.',
              'H (Hardiness): Sıcaklık ve çevre koşullarına dayanıklılık.',
              'W ve X: İstenmeyen genlerdir (fazla su tüketimi, boş gen).'
            ]
          },
          {
            heading: 'Önerilen Dizilim',
            items: [
              'GGGYYY: Hem hızlı büyüyen hem de en fazla ürün veren "God-Seed" dizilimidir.',
              'Mükemmel genli bitkiden klon alarak aynı bitkiyi sınırsız çoğaltabilirsin.'
            ]
          }
        ]
      },
      {
        id: 'food',
        title: 'Yemek Sistemi',
        badge: 'Sistem',
        summary: 'Özel yemekler, malzeme çantası (iBag), bozulma ve Çiftçi Pazarı.',
        sections: [
          {
            heading: 'Yemeklerin Etkileri',
            items: [
              'Sunucudaki her yemeğin ve özel tarifin kendine ait etkileri vardır; bu etkiler seni ve bazen takım arkadaşlarını güçlendirir.',
              'Yemek etkileri, yetenek ağacındaki bonusların üzerine eklenir.',
              'Hazırlanan yemekler uygun şekilde saklanmazsa zamanla bozulur.'
            ]
          },
          {
            heading: 'Envanterdeki Yeşil Butonlar',
            items: [
              'Meals: Üzerinde aktif olan tüm yemek etkilerini gösterir.',
              'iBag (Malzeme Çantası): Dünyada topladığın ham malzemeleri (örn. hayvanlardan süt) otomatik saklar. Aynı zamanda buzdolabı görevi görür; içindeki malzemeler bozulmaz.',
              'Cook: Tarifler, malzemeler ve favoriler sekmelerinden oluşan yemek yapma menüsünü açar.',
              'Market (Çiftçi Pazarı): Şeker, ekmek, kumaş gibi temel malzemeleri Scrap ile alıp satabilirsin.'
            ],
            note: 'Çiftçi Pazarı\'nın stoğunu oyuncular belirler; yalnızca başka oyuncuların sattığı ürünler listelenir.'
          }
        ]
      },
      {
        id: 'progression',
        title: 'İlerleme ve Seviyeler',
        badge: 'Sistem',
        summary: 'Seviye atlama, yetenek puanları, Prestige sistemi ve en hızlı XP yolları.',
        sections: [
          {
            heading: 'Seviye ve Yetenek Puanı',
            items: [
              'Seviye atladıkça yetenek ağacında harcamak üzere Yetenek Puanı (SP) kazanırsın.',
              'Yetenek ağacını /st komutuyla veya envanter açıkken XP barına tıklayarak açabilirsin.',
              'Prestige öncesi maksimum seviye 100\'dür.'
            ]
          },
          {
            heading: 'Prestige',
            items: [
              'Seviye 100\'e ulaşınca /pr ile Prestige yapabilirsin.',
              'Prestige seviyeni ve yetenek puanlarını sıfırlar, karşılığında özel avantajlar verir.',
              'En fazla 10 kez Prestige yapabilirsin (Pr10).'
            ]
          },
          {
            heading: 'En Hızlı XP Yolları',
            items: [
              'Quartermaster görevleri (T1-T4): Kısa sürede büyük miktarda XP verir.',
              'Toplama kıyafetleri ve yemek bonuslarıyla verimi artır (Lumberjack, Mining setleri gibi).',
              'Yetenek ağacı ekranındaki Rested XP havuzunu takip et; madencilik gibi aktivitelerde bonus XP verir.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'Yetenek ağacını aç' }
      },
      {
        id: 'quests',
        title: 'Görevler ve Etkinlikler',
        badge: 'Sistem',
        summary: 'BritsPVE görev sistemi: kategoriler, ilerleme yolları ve ödüller.',
        sections: [
          {
            heading: 'Görev Sistemi',
            intro:
              'BritsPVE, başlangıç hedeflerinden oyun sonu zorluklarına uzanan ilerleme yolları olan özel bir görev sistemi kullanır. Görevler XP, RP, alet, malzeme ve efsanevi eşya verir. Menüyü /quest veya /q ile açabilirsin.'
          },
          {
            heading: 'Görev Kategorileri',
            items: [
              'Başlangıç Görevleri: Toplama ve inşa gibi temel mekanikleri öğretir (Getting Started).',
              'Günlük Görevler: Her gün tekrarlanan; kaynak, XP ve RP verir (örn. Barrel Basher, Subway Siege, Elite Hacker).',
              'Çeşitli ve Kaynak Görevleri: Sanal taş ocakları, kaynak işleme ve efsanevi eşya ilerlemesi (örn. Virtual Oil Baron, The Laginator).',
              'RP Eşyası / Takas Görevleri: Duct tape, çamaşır suyu, pil gibi bileşenleri XP ve RP\'ye çevirir.',
              'Baskın ve Savaş Görevleri: Üs yıkma ve silah ustalığı odaklı zincirler (örn. Raid Rookie, Fortress Cracker, Siege Specialist).',
              'Quartermaster Görevleri: Odun, taş gibi temel kaynak toplama zincirleri; özel çaylar, yemek tarifleri ve serumların kilidini açar.',
              'Diğer: Dungeon, balıkçılık, keşif, Bradley/Heli hedefleri ve oyun sonu "Boom God" zorlukları.'
            ]
          }
        ]
      },
      {
        id: 'skills',
        title: 'Yetenekler',
        badge: 'Sistem',
        summary: '/st ile açılan yetenek ağacının genel yapısı.',
        sections: [
          {
            heading: 'Yetenek Ağacına Erişim',
            items: [
              '/st komutunu yaz veya envanter açıkken XP barına tıkla.',
              'Dört ana dal vardır: Gathercraft, Survivalcraft, Combat ve Vehicles.',
              'Her yetenek tıklanarak yükseltilir; maliyetler 1 SP veya 5 SP olabilir.'
            ]
          }
        ],
        link: { tab: 'skills', label: 'İnteraktif yetenek haritasına git' }
      },
      {
        id: 'virtual-quarries',
        title: 'Sanal Taş Ocakları',
        badge: 'Pasif Gelir',
        summary: 'Çevrimdışıyken veya AFK iken kaynak üreten pasif gelir sistemi.',
        sections: [
          {
            heading: 'Ocak Türleri',
            items: [
              'Mining Quarry: High Quality Metal (HQM), Metal Cevheri ve Kükürt Cevheri üretir.',
              'Pump Jack: Ham petrol (Crude Oil) üretir.',
              'Wood Generator: Odun üretir.'
            ]
          },
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              'Mağazadan (/s) Survey Charge satın al.',
              'İstediğin ocak türünü satın al.',
              '/qr yazarak Sanal Ocak arayüzünü aç; Survey Charge ile bir nod bul ve ocağını yerleştir.',
              'Ocakların çalışması için yakıt olarak petrol varilleri ver.'
            ]
          },
          {
            heading: 'Yükseltmeler',
            items: [
              'Ocaklar Seviye 6\'ya kadar yükseltilebilir (çarpan 8.5x\'e kadar çıkar).',
              'Yükseltmelerde Duct Tape, Bleach, HQM ve ekstra ocaklar gibi malzemeler kullanılır.'
            ]
          }
        ]
      },
      {
        id: 'world-events',
        title: 'Dünya Etkinlikleri',
        badge: 'Etkinlik',
        summary: 'Radtown, Harbinger, Harbor, Zombie ve Liderlik Tablosu etkinlikleri.',
        sections: [
          {
            heading: 'Radtown Etkinliği',
            intro:
              'Agresif NPC\'lere karşı savaşıp değerli kilitli bir sandığı açmaya çalışırsın. Erken oyunda XP ve ganimet için idealdir.'
          },
          {
            heading: 'Harbinger Etkinliği (Boss)',
            items: [
              'Giriş: /outpost\'taki piyanonun yanındaki portal.',
              'Gereksinim: 1.000.000 RP değerinde bir keycard.',
              'Anahtar girişte harcanır; içeride ölürsen o hak yanar. Boss yaklaşık 30 dakikalık bekleme süresinden sonra tekrar denenebilir.',
              'Boss, havada süzülen mekanik bir drone\'dur. Roket yağmurundan korunmak için mağara girintisini siper olarak kullan; M249 gibi silahlar işe yarar.',
              'Combat dalındaki ateş direnci yeteneği (Hot Blooded) şiddetle tavsiye edilir.'
            ]
          },
          {
            heading: 'Harbor Etkinliği',
            intro:
              'Birden fazla aşamalı, kooperatif bir etkinlik: bilim insanlarını temizle, bir Bradley APC\'yi indir ve bir devriye helikopterini düşür; ardından büyük ödül sandıklarının kilidi açılır.'
          },
          {
            heading: 'Zombie Etkinliği',
            intro:
              'Katılımcılar geri sayımlı karanlık bir bekleme odasına ışınlanır. Başladığında oyuncular silah toplamaya koşar; rastgele seçilen bir oyuncu zombi olur (yalnızca çatal kullanır). İnsanlar hayatta kalırsa veya enfekte olanları temizlerse kazanır; ölen insanlar zombiye dönüşür.'
          },
          {
            heading: 'Liderlik Tablosu Etkinlikleri',
            intro:
              'En iyi oyuncuları çeşitli ölçütlerde takip eden genel yarışmalar. Liderler özel avantajlar ve bonus XP kazanır.'
          }
        ]
      }
    ]
  },

  // ==========================================================
  // İLERİ SEVİYE REHBERLER
  // ==========================================================
  endgame: {
    id: 'endgame',
    categoryLead: 'İLERİ SEVİYE',
    categoryTail: 'REHBERLERİ',
    accent: 'terracotta',
    subtitle: 'Oyun sonu içerikleri: efsaneviler, Bradley\'ler, helikopterler ve baskınlar.',
    guides: [
      {
        id: 'armor-inserts',
        title: 'Zırh Eklentileri (Armor Inserts)',
        badge: 'Zırh',
        summary: 'Zırhına takılarak belirli hasar türlerine direnç kazandıran bulunabilir eklentiler.',
        sections: [
          {
            heading: 'Nedir?',
            intro:
              'Armor Inserts, zırh parçalarına takılan ve belirli hasar türlerine karşı direnç ekleyen bulunabilir eşyalardır. Her eklenti üç kademede gelir: +, ++ ve +++.'
          },
          {
            heading: 'Eklenti Türleri',
            items: [
              'Wooden (Satiated Serisi): Günlük hayatta kalma koruması. Isırık, kesik, ezik, saplanma, açlık, susuzluk ve arı sokmasına karşı.',
              'Asbestos (Waterproof Serisi): Boğulma hasarını belirgin azaltır; hafif soğuk direnci verir.',
              'Lead (Impact Serisi): Düşme hasarı, patlama ve araç hasarı gibi darbe türlerine karşı.',
              'Metal (Metal Serisi): Kurşun, kanama ve patlama hasarına karşı en güçlü savaş koruması.'
            ]
          },
          {
            heading: 'Hangi Durumda Hangisi?',
            items: [
              'Deniz ve su monumentleri: Asbestos',
              'Raid Dünyaları ve savaş: Metal',
              'Yüksekten düşme riski olan yerler: Lead',
              'Genel gezinti: Wooden'
            ]
          }
        ]
      },
      {
        id: 'deep-sea',
        title: 'Deep Sea Rework',
        badge: 'Deniz Etkinliği',
        summary: 'Erken oyun Tier 2 etkinliği: Cobalt kargo gemisi ve elit bilim insanları.',
        sections: [
          {
            heading: 'Genel Bilgi',
            items: [
              'Deep Sea, kargo gemisi düzeni ve su altı/gemi keşfi üzerine kurulu bir Tier 2 etkinliğidir.',
              'Okyanusta devriye gezen Cobalt kargo gemileri her 1.5 - 2 saatte bir sıfırlanır.',
              'Gemi taretleri tam HQM zırhta bile tek atışta 153 hasar vurur; taretleri etkisiz hale getirmek için 3 adet HV roketi gerekir.'
            ]
          },
          {
            heading: 'Önerilen Ekipman',
            items: [
              'Tek başına veya küçük grupla: 2-4 Ashmaker, Pumpkin Pie, can için meyveler, medkit.',
              'Bir RHIB (/rhib, 1.000 Scrap).',
              'Savunma için Vampiric göğüslük ile Impact veya Leviathan zırhı.',
              'Combat dalındaki Armored ve Life Leech yetenekleri bilim insanlarına karşı büyük fark yaratır.'
            ]
          },
          {
            heading: 'Nasıl İlerlenir?',
            ordered: true,
            items: [
              'Geminin ön kapılarından gir.',
              'Köşe taretlerini erken tetiklememek için bilim insanı botlarını dikkatle temizle.',
              'Komuta köprüsüne doğru ilerle.',
              'Üst güverte ve koridorlardaki kalan tehditleri sistemli şekilde temizle.'
            ],
            note: 'Kilitli kasalardan C4/roket, jeneratör aküsü ve Leviathan Zırh prototipleri çıkabilir.'
          }
        ]
      },
      {
        id: 'legendary-sets',
        title: 'Efsanevi Setler',
        badge: 'Efsanevi',
        summary: 'Leviathan, Impact, Dragon Thorn ve toplama setleri.',
        sections: [
          {
            heading: 'Savaş Setleri',
            items: [
              'Leviathan Seti (Deep Sea prototipi): Tam sette %53 darbe emilimi verir.',
              'Impact Seti: Tam sette %33 darbe emilimi sağlar.',
              'Dragon Thorn Seti: Vurdukça can çalar; tam sette %12.5 vampirik iyileşme verir (Hoodie %2, Pelerin %7).',
              'Helping Hands: Yere düştüğünde seni anında tam canla ayağa kaldırır ve 5 saniye ölümsüzlük verir.'
            ]
          },
          {
            heading: 'Toplama Setleri',
            items: [
              'Mining / Hunter / Lumberjack: Tam sette %100\'e kadar verim bonusu (Şapka %30, Gövde %35, Pantolon %35).',
              'Farmer / Scavenger: Tam sette %60\'a kadar verim bonusu.',
              'Angler: Tam sette %200\'e kadar balıkçılık bonusu.'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşya Kataloğu' }
      },
      {
        id: 'legendary-tools',
        title: 'Efsanevi Aletler',
        badge: 'Efsanevi',
        summary: 'Verimliliği yüksek, tamir edilebilir efsanevi aletler.',
        sections: [
          {
            heading: 'Aletler',
            items: [
              'Brits Broken Axe: Oyuncunun çevresinde 4 ekstra maden nodu çıkarma şansı.',
              'Brits Broken Pickaxe: Madenlerden sabit +%60 verim.',
              'Fertile Bone: Bitkileri aşama başına 50 kemik parçasıyla anında büyütür (yabani toplanabilirlerden bulunur).',
              'Reaping Spade: 6 m çapındaki tüm bitkileri toplar (3x3 planter düzeni için ideal; yerdeki taş/kütükler toplanırken bulunur).',
              'Bal0o\'s Marrowpaw: Her hayvandan 4 kat kemik verir (ayılardan bulunur).'
            ],
            note: 'En yüksek verim için aleti, görevine uygun efsanevi kıyafetle eşleştir (örn. Lumberjack kıyafeti ile Brits Broken Axe).'
          },
          {
            heading: 'Mad\'s Extra Magical Tools: %100 Kalıcı Tamir',
            items: [
              'Normalde tamir masasında tamir edilen eşyada kalıcı kırmızı bar oluşur ve eşya zamanla yok olur.',
              'Mad\'s Extra Magical serisi tamir edildiğinde bu kırmızı barı tamamen siler ve %100 maksimum dayanıklılığı geri verir.',
              'Nightmare Raid kasalarından, Legendary Heli enkazlarından veya Deep Sea sandıklarından nadir ganimet olarak düşer.'
            ]
          }
        ],
        link: { tab: 'legendary', label: 'Efsanevi Eşya Kataloğu' }
      },
      {
        id: 'legendary-weapons',
        title: 'Efsanevi Silahlar',
        badge: 'Efsanevi',
        summary: 'Sunucuya özel yapılmış, özel etkili silahlar.',
        sections: [
          {
            heading: 'Öne Çıkanlar',
            items: [
              'Brits Golden AK: Bradley radarı ve bilim insanlarına +%30 hasar.',
              'Brits Golden M249: Helikopterlere +%50 hasar.',
              'The Laginator: Tam otomatik roketatar.',
              'Plaguepiercer: Bilim insanlarına %500 hasar veren yay.',
              'Brits Boom Stick, DoubleBoom, Cluster Clutch: Standart silah gövdesini patlayıcı mühimmatla birleştiren melez silahlar.',
              'Brits Broken Eoka: Pompalı mermisiyle helikopterlere +%500 hasar.',
              'Huff-N-Puff: Bradley\'leri saniyeler içinde eriten özel dartlar fırlatır.'
            ]
          }
        ],
        link: { tab: 'legendary', label: '13 efsanevi silahın tam listesi' }
      },
      {
        id: 'bradleys',
        title: 'Bradley Avı',
        badge: 'Askeri Ganimet',
        summary: 'Bradley\'ler devriye helikopterlerinden çok daha kolaydır; özel ekipman şart değildir.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/hub yaz ve kırmızı portallardan (Raid Dünyaları 1-4) birine gir.',
              'Bir Bradley adasına doğru ilerle.',
              'Mağazayı (/s) aç, satın alınabilir Bradley bölümünden birini seç.',
              'Bradley gökyüzünden düşer. Havadayken hasar verilemez, ancak iniş noktasına önceden ateş edebilirsin.'
            ],
            note: 'Bradley Launch Site\'ta değil, Raid Dünyası\'ndaki Bradley adalarında kesilir.'
          },
          {
            heading: 'Taktik',
            items: [
              'Adalardaki yan duvarları siper olarak kullan.',
              'Dikkatle köşeden çıkıp hasar ver; roketlerine uzun süre açık kalma.',
              'Standart roketatarlar kolay zorluklarda yeterlidir. Ashmaker ve Huff-N-Puff gibi efsanevi silahlar çok daha hızlı keser.'
            ]
          },
          {
            heading: 'Ganimet Kuralları',
            items: [
              'Düşen sandıkları yalnızca sen açabilirsin.',
              'Diğer oyuncular sadece etrafa saçılan eşyaları alabilir, bu yüzden istediklerini hızlıca topla.'
            ]
          }
        ]
      },
      {
        id: 'helis',
        title: 'Heli Avı',
        badge: 'Heli Kuleleri',
        summary: 'Patrol helikopterleri Bradley\'den çok daha serttir; hazırlıklı git.',
        sections: [
          {
            heading: 'Hazırlık',
            items: [
              'Tam HQM zırh seti.',
              'M249 ve Drum Mag yeteneği (/st ile açılır).',
              'Max Health Tea, böğürtlen veya tıbbi malzeme.'
            ],
            note: 'Yüksek seviye ekipmanın yoksa Elite ve Legendary heli\'lerden uzak dur; hazırlıksız oyuncuyu tek atışta indirebilirler.'
          },
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/tower1 ile /tower6 arasındaki özel nişancı kulelerine ışınlan (Tower 6 şiddetle tavsiye edilir).',
              'Mağazayı (/s) aç, Buyable Helis bölümünden istediğin zorluğu seç.'
            ]
          },
          {
            heading: 'Savaş Taktiği',
            items: [
              'En fazla hasar için üst rotoru ve kuyruk rotorunu hedef al.',
              'Nişanın iyiyse standart 5.56, güvenli oynamak istersen HV 5.56 kullan.',
              'Son vuruşu heli karaya yakınken yapmaya çalış; sandıklar derin suya düşmesin.',
              'Ace\'s Python (50 mermilik şarjör, +%30 heli hasarı) da çok etkilidir.'
            ]
          },
          {
            heading: 'Gelişmiş Kurulum',
            items: [
              'Ev arsanda "god peek" yapan 5 katlı kendi heli kulesi inşa edebilirsin.',
              'Kulenin içine fazladan M249 ve mermi yüklü, enerjisiz bir taret koyabilirsin; aktif M2\'nı taretin M2\'si üzerinde gezdirerek tek hamlede tam şarjöre doldurabilirsin.',
              'Heli savaşı kötü giderse /hsretire yazarak onu yok edebilirsin.'
            ]
          }
        ]
      },
      {
        id: 'raiding',
        title: 'Baskın (Raiding)',
        badge: 'Raid Dünyası',
        summary: 'Raid Dünyalarında hazır üsleri satın alıp yıkarak ganimet kazan.',
        sections: [
          {
            heading: 'Nasıl Başlanır?',
            ordered: true,
            items: [
              '/hub yaz ve dört kırmızı portaldan birine gir.',
              '/buyraid ile bir üs satın al (oluştur).',
              'Raid bekleme süreleri kaldırılmıştır; kaynağın yettiği sürece art arda baskın yapabilirsin.'
            ]
          },
          {
            heading: 'Zorluk Seviyeleri',
            items: [
              'Easy: Ahşap üs, düşük maliyet. Başlangıç ve ilk raid görevleri için ideal.',
              'Medium: Metal üs, orta maliyet.',
              'Hard / Nightmare: HQM üs, yüksek maliyet. Nightmare yaklaşık 20.000 RP\'ye mal olur ama yaklaşık 300.000 RP değerinde ganimet verebilir.'
            ]
          },
          {
            heading: 'Temel Mekanikler',
            items: [
              'Üsler NPC\'ler tarafından savunulur; sadece yapılar ve tuzaklarla değil, düşman yapay zekayla da savaşırsın.',
              'Baskın sırasında inşaat yapabilirsin: siper, bakış noktası veya köprü kurabilirsin.',
              'Kuşatma silahları (Battering Ram, Siege Tower, Catapult, Mortar) kullanılabilir.',
              'Üslerin zamanlayıcısı vardır ve süre dolunca kaybolurlar; işi bitirmek için yeterli patlayıcı (roket, C4) getir.'
            ]
          },
          {
            heading: 'İpuçları',
            items: [
              'Daha zor seviyelere yatırım yapmadan önce /st ile baskın yeteneklerini aç (örn. Chain Reaction, Aerodynamically Sound).',
              'İç mekan tuzaklarına dikkat et; köşelerde acele etme, odaları yavaş temizle.',
              'Önerilen silahlar: Brits Boom Stick ve Ashmaker.',
              '/strike ultimate komutunu kullanacaksan önce üssün SAM sitelerini imha et; duman çıkması devre dışı kaldıklarını gösterir.'
            ]
          }
        ]
      },
      {
        id: 'harbinger',
        title: 'Harbinger Boss Drone',
        badge: 'Endgame Boss',
        summary: 'Outpost\'taki portaldan girilen, boss drone arenası. Keycard gerektirir.',
        sections: [
          {
            heading: 'Giriş ve Kurallar',
            items: [
              'Giriş: /outpost alanında piyanonun yanındaki portal.',
              'Gereksinim: 1.000.000 RP Keycard veya "Boom God" görev zincirinden kazanılan Harbinger Boss Card.',
              'Her anahtar tek giriş hakkı verir; içeride ölürsen tekrar giremezsin. Boss bekleme süresi yaklaşık 30 dakikadır.'
            ]
          },
          {
            heading: 'Savaş Taktiği',
            items: [
              'Boss havada süzülen mekanik bir drone\'dur; roketler ve ateş ışınları saçar.',
              'Arenadaki derin mağara girintisini siper olarak kullan.',
              'Combat dalındaki Hot Blooded (%25 ateş direnci) şarttır.',
              'Geri tepmesi sıfır olan LR-300, mağara siperinden uzaktan vurmak için çok uygundur.'
            ]
          },
          {
            heading: 'Ödüller',
            items: ['Gem of Reserve (şarjör kapasitesini kalıcı artırır), yüksek XP/RP ve efsanevi alet/silah düşme şansı.']
          }
        ]
      }
    ]
  }
};
