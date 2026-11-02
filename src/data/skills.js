export const SKILLS_DATA = [
  // ==========================================
  // --- 1. GATHERCRAFT ---
  // ==========================================
  
  // Mining (Sol Dal)
  {
    id: 'ore-sense',
    name: 'Ore Sense',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'B-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '200m Ore Radar',
    desc: '200 metre çapındaki tüm maden nodlarını (Taş, Metal, Kükürt, HQM) haritada ve ekranda işaretler.',
    synergy: 'Maden arama süresini kısaltır; Prospector ve Shatterpoint ile birleştiğinde hızlı rota oluşturur.'
  },
  {
    id: 'prospector',
    name: 'Prospector',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+75% Ore Yield',
    desc: 'Kazılan madenlerden (Taş, Metal, Kükürt, HQM) %75 daha fazla cevher elde edilmesini sağlar.',
    synergy: 'Sülfür ve HQM madenlerinde cephane ve zırh üretimini doğrudan katlar.'
  },
  {
    id: 'second-strike',
    name: 'Second Strike',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '35% Instant Node Respawn',
    desc: 'Kırılan maden nodunun %35 şansla aynı noktada anında yeniden doğmasını sağlar.',
    synergy: 'Aynı noktada art arda nod kırarak yer değiştirmeden hızlıca çanta doldurabilirsiniz.'
  },
  {
    id: 'vein-seeker',
    name: 'Vein Seeker',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '100% Auto Hotspot',
    desc: 'Madenlerdeki parlayan noktaya (hotspot) nişan alma zorunluluğunu kaldırır. Her vuruş otomatik kritik sayılır.',
    synergy: 'Shatterpoint ile birleştiğinde madene doğrudan vurup anında tek vuruşta kırabilirsiniz.'
  },
  {
    id: 'shatterpoint',
    name: 'Shatterpoint',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '100% Instant 1-hit Mine',
    desc: 'Maden nodlarına (Taş, Metal, Kükürt, HQM) tek vuruşta kırma özelliği verir. Kazma süresini ortadan kaldırır.',
    synergy: 'Vein Seeker + Second Strike + Prospector ile maden kasmayı en üst hıza taşır.'
  },
  {
    id: 'tempered-steel',
    name: 'Tempered Steel',
    tree: 'Gathercraft',
    category: 'Mining',
    tier: 'A-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-45% Pickaxe Wear',
    desc: 'Kazmaların ve Jackhammer\'ların kullanım sırasında aşınmasını %45 azaltır.',
    synergy: 'Mad’s Magical ve standart kazmaların tamir aralığını iki katına çıkarır.'
  },

  // Scavenging (Üst Dal)
  {
    id: 'treasure-hunter',
    name: 'Treasure Hunter',
    tree: 'Gathercraft',
    category: 'Scavenging',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: 'Auto Dig Stash',
    desc: 'Gömülü küçük zulaları (Small Stash) ve gizli hazineleri otomatik olarak ortaya çıkarır.',
    synergy: 'Monumentlerde ve yol kenarında gizlenmiş eşyaları kaçırmadan toplamayı sağlar.'
  },
  {
    id: 'smash-n-grab',
    name: "Smash 'N Grab",
    tree: 'Gathercraft',
    category: 'Scavenging',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '1-Hit Auto Loot Barrels',
    desc: 'Yoldaki ve anıtlardaki varilleri tek vuruşta kırar; çıkan hurda ve bileşenleri otomatik çantaya çeker.',
    synergy: 'Salvage King (4x Scrap) ve Parts Hunter ile yol boyu hurda toplamayı hızlandırır.'
  },
  {
    id: 'parts-hunter',
    name: 'Parts Hunter',
    tree: 'Gathercraft',
    category: 'Scavenging',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '45% Component Dupe',
    desc: 'Sandıklardan ve varillerden çıkan bileşenleri (yay, dişli, boru vb.) %45 ihtimalle ikiye katlar.',
    synergy: 'Geri dönüştürücüye (Recycler) atıldığında ekstra hurda ve HQM girdisi sağlar.'
  },
  {
    id: 'salvage-king',
    name: 'Salvage King',
    tree: 'Gathercraft',
    category: 'Scavenging',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+300% Scrap (4x Scrap)',
    desc: 'Varillerden ve sandıklardan 4 kat daha fazla hurda (Scrap) verir.',
    synergy: 'Wipe başında teknoloji ağacını (Tech Tree) çok daha erken tamamlamanızı sağlar.'
  },

  // Woodcutting (Sağ Dal)
  {
    id: 'hardened-edge',
    name: 'Hardened Edge',
    tree: 'Gathercraft',
    category: 'Woodcutting',
    tier: 'B-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-45% Axe Wear',
    desc: 'Baltaların ve testerelerin kullanım sırasında aşınmasını %45 azaltır.',
    synergy: 'Baltaların ömrünü uzatarak tamir masasına gitme sıklığını düşürür.'
  },
  {
    id: 'timberfall',
    name: 'Timberfall',
    tree: 'Gathercraft',
    category: 'Woodcutting',
    tier: 'A-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+75% Wood Yield',
    desc: 'Ağaç keserken elde edilen odun miktarını %75 artırır.',
    synergy: 'Büyük üs inşaatlarında ve fırın yakıtında odun tasarrufu sağlar.'
  },
  {
    id: 'regrowth',
    name: 'Regrowth',
    tree: 'Gathercraft',
    category: 'Woodcutting',
    tier: 'B-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '5% Chance 3-5 Trees Regrow',
    desc: 'Bir ağaç kesildiğinde %5 şansla etrafında anında 3 ila 5 yeni ağaç bitmesini sağlar.',
    synergy: 'Üs etrafında odun kaynağının tükenmesini engeller.'
  },
  {
    id: 'felling-blow',
    name: 'Felling Blow',
    tree: 'Gathercraft',
    category: 'Woodcutting',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '100% Instant 1-hit Tree',
    desc: 'Ağaçlara tek vuruşta devirme özelliği kazandırır.',
    synergy: 'Clearcut ile zincirleme odun hasadında temel oluşturur.'
  },
  {
    id: 'clearcut',
    name: 'Clearcut',
    tree: 'Gathercraft',
    category: 'Woodcutting',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '35% Chain Harvest (10m)',
    desc: 'Bir ağaç devrildiğinde %35 şansla 10 metre yarıçaptaki çevre ağaçları da tek seferde hasat eder.',
    synergy: 'Felling Blow ile birlikte fırınlar için gereken odun ihtiyacını çok hızlı karşılar.'
  },

  // Recycling & Foraging (Alt Dal)
  {
    id: 'rapid-recycle',
    name: 'Rapid Recycle',
    tree: 'Gathercraft',
    category: 'Scavenging',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-2.5s Recycler Tick',
    desc: 'Geri dönüştürücünün çalışma hızını artırır; bileşenleri çok daha kısa sürede eritir.',
    synergy: 'Outpost veya Güvenli Bölgede hurda eritirken bekleme süresini azaltır.'
  },
  {
    id: 'foragers-fortune',
    name: "Forager's Fortune",
    tree: 'Gathercraft',
    category: 'Foraging',
    tier: 'A-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+225% Wild Yield',
    desc: 'Doğada kendiliğinden yetişen yabani kenevir, mantar ve meyvelerden +%225 ekstra verim verir.',
    synergy: 'Wipe başında kumaş ve yatak ihtiyacını ilk dakikalarda çözer.'
  },
  {
    id: 'wild-sense',
    name: 'Wild Sense',
    tree: 'Gathercraft',
    category: 'Foraging',
    tier: 'C-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: 'Wild Collectables Radar',
    desc: 'Çevredeki yabani bitkileri ve toplanabilir kaynakları ekranda işaretler.',
    synergy: 'Kenevir ve mantar ararken haritada gezinmeyi kolaylaştırır.'
  },
  {
    id: 'fishermans-fortune',
    name: "Fisherman's Fortune",
    tree: 'Gathercraft',
    category: 'Fishing',
    tier: 'C-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: 'Increased Fish Catch Rate',
    desc: 'Balık tutarken daha nadir ve yüksek seviye balık yakalama şansını artırır.',
    synergy: 'Balıkçılık görevlerinde ve hurda takasında kullanılır.'
  },
  {
    id: 'braided-line',
    name: 'Braided Line',
    tree: 'Gathercraft',
    category: 'Fishing',
    tier: 'C-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: 'Reduced Line Snap Chance',
    desc: 'Olta misinasının kopma ihtimalini azaltır.',
    synergy: 'Büyük köpekbalığı ve nadir balıkları kaçırmadan çekmeyi sağlar.'
  },
  {
    id: 'tea-party',
    name: 'Tea Party',
    tree: 'Gathercraft',
    category: 'Foraging',
    tier: 'B-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: 'Shared Tea Buff to Team',
    desc: 'İçtiğiniz çayın buff etkisini yakındaki takım arkadaşlarınıza da kısmen yansıtır.',
    synergy: 'Ekip halinde maden veya hurda farmına çıkarken çay tasarrufu sağlar.'
  },

  // ==========================================
  // --- 2. SURVIVALCRAFT ---
  // ==========================================

  // Health & Healing (Üst Dal)
  {
    id: 'inspired-decor',
    name: 'Inspired Decor',
    tree: 'Survivalcraft',
    category: 'Health',
    tier: 'A-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '100% Comfort in TC',
    desc: 'Yetki sahibi olduğunuz Tool Cupboard (TC) menzilinde daima %100 konfor (Comfort) sağlar.',
    synergy: 'Üssün içinde ateş yakmadan maksimum can yenilenmesini aktif tutar.'
  },
  {
    id: 'healing-factor',
    name: 'Healing Factor',
    tree: 'Survivalcraft',
    category: 'Health',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+0.5 Health per Second',
    desc: 'Saniyede 0.5 can pasif olarak kendiliğinden yenilenir.',
    synergy: 'Çatışma aralarında ve zehirlenmelerde bandaj harcamadan canı yüksek tutar.'
  },
  {
    id: 'lazarus-effect',
    name: 'Lazarus Effect',
    tree: 'Survivalcraft',
    category: 'Health',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '50% Self Revive When Downed',
    desc: 'Yere düştüğünüzde (Wounded) %50 şansla kendi kendinize anında ayağa kalkmanızı sağlar.',
    synergy: 'Solo PvE zindanlarında veya boss dövüşlerinde hayat kurtarır.'
  },
  {
    id: 'feather-fall',
    name: 'Feather Fall',
    tree: 'Survivalcraft',
    category: 'Health',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '100% Fall Damage Immunity',
    desc: 'Düşme hasarına karşı %100 bağışıklık sağlar. Yüksek anıtlardan veya dağlardan atlasanız bile hasar almazsınız.',
    synergy: 'Monument çatılarından inişlerde ve helikopter atlayışlarında can kaybını sıfırlar.'
  },
  {
    id: 'rejuvenating-presence',
    name: 'Rejuvenating Presence',
    tree: 'Survivalcraft',
    category: 'Health',
    tier: 'C-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: 'Shared Healing to Nearby Allies',
    desc: 'Pasif can yenilemenizin bir kısmını yakındaki takım arkadaşlarınıza paylaştırır.',
    synergy: 'Ekip çatışmalarında pasif destek sağlar.'
  },

  // Skinning & Animals (Sol Dal)
  {
    id: 'damascus-steel',
    name: 'Damascus Steel',
    tree: 'Survivalcraft',
    category: 'Hunting',
    tier: 'B-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-45% Knife Wear',
    desc: 'Kemik ve av bıçaklarının kullanım sırasında aşınmasını %45 azaltır.',
    synergy: 'Bıçakların ömrünü uzatır.'
  },
  {
    id: 'waste-not',
    name: 'Waste Not',
    tree: 'Survivalcraft',
    category: 'Hunting',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+75% Skinning Yield',
    desc: 'Hayvan derisi yüzerken %75 daha fazla deri, hayvan yağı ve kemik verir.',
    synergy: 'Ayı avlayarak Low Grade Fuel ve kemik ihtiyacını karşılamayı hızlandırır.'
  },
  {
    id: 'slice-n-dice',
    name: 'Slice \'N Dice',
    tree: 'Survivalcraft',
    category: 'Hunting',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '25% Instant Skin Animal',
    desc: 'Hayvan cesedine vurduğunuzda %25 şansla tek vuruşta tüm hayvanı anında derisiyle hasat eder.',
    synergy: 'Waste Not ile birlikte hayvan farmını hızlandırır.'
  },
  {
    id: 'predators-eye',
    name: "Predator's Eye",
    tree: 'Survivalcraft',
    category: 'Hunting',
    tier: 'C-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: 'Animal Radar',
    desc: 'Çevredeki ayı, kurt ve diğer hayvanları ekranda işaretler.',
    synergy: 'Karlık biyomda ayı avlarken hedef bulmayı kolaylaştırır.'
  },

  // Farming (Alt-Sol Dal)
  {
    id: 'bountiful-harvest',
    name: 'Bountiful Harvest',
    tree: 'Survivalcraft',
    category: 'Farming',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+50% Planted Crop Yield',
    desc: 'Planter box içerisine ekilen tarım mahsullerinden (Kenevir, Berry, Patates) %50 daha fazla ürün verir.',
    synergy: 'God-Seed (GGGYYY) kenevir çiftliği ve Reaping Spade ile kumaş üretimini katlar.'
  },
  {
    id: 'geneticist',
    name: 'Geneticist',
    tree: 'Survivalcraft',
    category: 'Farming',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '/setgenes Command (3h Cooldown)',
    desc: '3 saatte bir bitkilerin genetiğini doğrudan belirlemenizi sağlar (örn: GGGYYY God-Seed). Çaprazlama zahmetini bitirir.',
    synergy: 'Bountiful Harvest ile birlikte kumaş çiftliğini en yüksek verime ulaştırır.'
  },

  // Cooking, Tea & Mixing (Alt Dal)
  {
    id: 'free-refills',
    name: 'Free Refills',
    tree: 'Survivalcraft',
    category: 'Tea & Cooking',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '30% Item Refund When Consumed',
    desc: 'Yemek yediğinizde veya çay içtiğinizde %30 şansla eşyayı envanterinizden eksiltmez.',
    synergy: 'Pahalı Pure seviye çayların ve özel yemeklerin kullanım ömrünü uzatır.'
  },
  {
    id: 'lightweight',
    name: 'Lightweight',
    tree: 'Survivalcraft',
    category: 'Tea & Cooking',
    tier: 'God-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+75% Tea Duration',
    desc: 'İçilen çayların (Ore Tea, Scrap Tea, Max Health Tea) etki süresini %75 uzatır.',
    synergy: 'Pure seviye maden ve hurda çaylarının süresini neredeyse iki katına çıkarır.'
  },
  {
    id: 'mad-hatter',
    name: 'Mad Hatter',
    tree: 'Survivalcraft',
    category: 'Tea & Cooking',
    tier: 'B-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: 'Free Random 60m Tea Buff',
    desc: 'Belirli aralıklarla oyuncuya 60 dakika süren rastgele güçlü bir çay buff\'ı tanımlar.',
    synergy: 'Sürekli aktif buff desteği sağlar.'
  },
  {
    id: 'skilled-chef',
    name: 'Skilled Chef',
    tree: 'Survivalcraft',
    category: 'Tea & Cooking',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '2x Cooking Speed & Buff Duration',
    desc: 'Yemek pişirme hızını 2 katına çıkarır ve pişirilen yemeklerin buff süresini uzatır.',
    synergy: 'Mantar çorbası ve et yemeklerinin süresini uzatır.'
  },
  {
    id: 'chemical-chef',
    name: 'Chemical Chef',
    tree: 'Survivalcraft',
    category: 'Tea & Cooking',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '+100 Mixing Table Speed',
    desc: 'Karıştırma masasının (Mixing Table) çalışma hızını ciddi oranda artırır.',
    synergy: 'Büyük ölçekli barut ve patlayıcı üretiminde bekleme süresini düşürür.'
  },

  // Crafting, Armor & Blueprints (Sağ Dal)
  {
    id: 'well-crafted',
    name: 'Well Crafted',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-45% Armor Wear',
    desc: 'Zırhların darbe aldıkça yıpranmasını %45 oranında azaltır.',
    synergy: 'HQM ve Leviathan zırh setlerinin dayanıklılık süresini uzatır.'
  },
  {
    id: 'made-to-order',
    name: 'Made to Order',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '100% Instant Craft',
    desc: 'Kara listede olmayan eşyaları (Barut, Mermi, C4, Tıbbi İğne, Zırh) bekleme süresi olmadan anında üretir.',
    synergy: 'Büyük miktarda mühimmat veya patlayıcı üretirken zaman kaybını önler.'
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '30% Crafting Component Refund',
    desc: 'Zanaat yaparken harcanan bileşenlerin (Tech Trash, Boru vb.) %30\'unu geri iade eder.',
    synergy: 'C4 ve roket üretiminde bileşen tasarrufu sağlar.'
  },
  {
    id: 'refined-blueprints',
    name: 'Refined Blueprints',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '25% Craft Dupe',
    desc: 'Zanaat yaparken %25 şansla üretilen eşyayı bedavadan bir adet daha kopyalar.',
    synergy: 'Roket ve C4 üretiminde hammadde maliyetini doğrudan düşürür.'
  },
  {
    id: 'walking-tank',
    name: 'Walking Tank',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'A-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '45% Max Insert Slot Chance',
    desc: 'Üretilen veya bulunan zırhlarda maksimum zırh eklentisi (Armor Insert) yuvası çıkma şansını %45 artırır.',
    synergy: 'Zırhlara ekstra hasar direnci takmayı kolaylaştırır.'
  },
  {
    id: 'almost-up-to-code',
    name: 'Almost Up to Code',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'B-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '30% Building Refund',
    desc: 'Yapı inşa ederken harcanan taş, metal veya HQM malzemesinin %30\'unu iade eder.',
    synergy: 'Büyük üs inşaatlarında hammadde tasarrufu sağlar.'
  },
  {
    id: 'bargain-hunter',
    name: 'Bargain Hunter',
    tree: 'Survivalcraft',
    category: 'Crafting',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '75% Scrap Research Refund',
    desc: 'Araştırma masasında teknoloji ağacı açılırken harcanan hurdanın %75\'ini geri iade eder.',
    synergy: '1000 Scrap harcandığında 750 Scrap doğrudan iade edilir.'
  },

  // ==========================================
  // --- 3. COMBAT ---
  // ==========================================

  // Explosives & Raid (Üst Dal)
  {
    id: 'shockwave',
    name: 'Shockwave',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+60% Explosive Radius',
    desc: 'Patlayıcıların sıçrama hasarı (splash damage) alanını %60 genişletir.',
    synergy: 'Base raidlerinde duvar kesişimlerine sıkılan roketin çevre yapılara tam hasar vermesini sağlar.'
  },
  {
    id: 'chain-reaction',
    name: 'Chain Reaction',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'God-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '30% Second Explosion Chance',
    desc: 'Attığınız her patlayıcıda %30 şansla bedavadan ikinci bir patlama tetikler.',
    synergy: 'Raid World ve üs patlatmalarında sülfür ve patlayıcı harcamanızı %30 oranında azaltır.'
  },
  {
    id: 'aerodynamically-sound',
    name: 'Aerodynamically Sound',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '+500% Rocket Velocity',
    desc: 'Roketlerin uçuş hızını 5 katına çıkarır. Roketler mermi gibi düz gider, düşüş açısı sıfırlanır.',
    synergy: 'Uzak mesafeden taret, Bradley veya helikopter vururken isabet oranını artırır.'
  },
  {
    id: 'reliable-fuses',
    name: 'Reliable Fuses',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '100% Dud Detonation',
    desc: 'Sönen / fitili boşa çıkan (dud) Satchel ve Beancan patlayıcılar yine de kesin olarak patlar.',
    synergy: 'Erken oyun raidlerinde fitil sönmesi yüzünden bekleme ve ölme riskini bitirir.'
  },
  {
    id: 'blastproof',
    name: 'Blastproof',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '100% Self Explosive Resist',
    desc: 'Kendi attığınız patlayıcılardan (C4, Roket, F1, Satchel, MLRS) hasar almazsınız.',
    synergy: 'Dar alanlarda veya kapı diplerinde güvenle roket atmanızı sağlar.'
  },
  {
    id: 'orbital-strike',
    name: 'Orbital Strike',
    tree: 'Combat',
    category: 'Explosives',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: 'On-Demand AirStrike Flare',
    desc: 'İşaret fişeği fırlatarak gökyüzünden hedefe güdümlü füze yağmuru indirme yeteneğidir.',
    synergy: 'Taret tarlalarını ve kalabalık NPC kamplarını uzaktan temizlemek için kullanılır.'
  },

  // Vampirism & Animals (Sol Dal)
  {
    id: 'big-game-hunter',
    name: 'Big Game Hunter',
    tree: 'Combat',
    category: 'Hunting',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+50% Animal Damage',
    desc: 'Hayvanlara verdiğiniz hasarı %50 artırır.',
    synergy: 'Ayı ve kutup ayılarını çok daha az mermiyle hızlıca düşürmeyi sağlar.'
  },
  {
    id: 'thick-hide',
    name: 'Thick Hide',
    tree: 'Combat',
    category: 'Hunting',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '-50% Animal Damage Taken',
    desc: 'Vahşi hayvanlardan alınan hasarı %50 oranında azaltır.',
    synergy: 'Karlık biyomda ayı saldırılarına karşı korur.'
  },
  {
    id: 'life-leech',
    name: 'Life Leech',
    tree: 'Combat',
    category: 'Vampirism',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '1% Damage Healed (Vampirism)',
    desc: 'Düşmanlara verdiğiniz hasarın %1\'i doğrudan can barınıza aktarılır.',
    synergy: 'Deep Sea ve Cobalt gemilerinde bilim insanı temizlerken canı dolu tutmayı sağlar.'
  },
  {
    id: 'team-effort',
    name: 'Team Effort',
    tree: 'Combat',
    category: 'Hunting',
    tier: 'C-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '5% Shared XP',
    desc: 'Takım arkadaşlarınızın kazandığı deneyim puanının %5\'ini sizinle paylaşır.',
    synergy: 'Grup halinde oynarken seviye atlamayı hızlandırır.'
  },

  // Guns & Scientists (Sağ Dal)
  {
    id: 'extra-rounds',
    name: 'Extra Rounds',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+30% Magazine Capacity',
    desc: 'Tüm silahların şarjör kapasitesini %30 artırır (AK-47: 39 mermi, M249: 130 mermi, LR-300: 39 mermi).',
    synergy: 'Şarjör değiştirme sıklığını azaltarak kesintisiz ateş gücü sağlar.'
  },
  {
    id: 'elite-manufacturing',
    name: 'Elite Manufacturing',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-45% Weapon Wear',
    desc: 'Ateş ettikçe silahların aşınmasını %45 oranında azaltır.',
    synergy: 'Efsanevi altın silahların dayanıklılığını korur, tamir aralığını uzatır.'
  },
  {
    id: 'ammo-rationing',
    name: 'Ammo Rationing',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '25% Free Ammo Chance',
    desc: 'Ateş ettiğiniz her 4 mermiden biri envanterden eksilmez (%25 ücretsiz mermi).',
    synergy: 'M249 veya LR-300 ile uzun süreli taramalarda mühimmat tasarrufu sağlar.'
  },
  {
    id: 'sixth-sense',
    name: 'Sixth Sense',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'C-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '25m Enemy Radar',
    desc: '25 metre yakınınızdaki düşman NPC\'leri haritada gösterir.',
    synergy: 'Karanlık tünellerde pusuya düşmeyi engeller.'
  },
  {
    id: 'armored',
    name: 'Armored',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-30% Scientist Damage Taken',
    desc: 'Bilim insanlarından ve elit NPC\'lerden alınan hasarı %30 oranında azaltır.',
    synergy: 'Deep Sea Cobalt kargo baskınlarında taret ve tüfek hasarına karşı korur.'
  },
  {
    id: 'man-hunter',
    name: 'Man-Hunter',
    tree: 'Combat',
    category: 'Weapons',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '+30% Damage to Scientists',
    desc: 'Bilim insanlarına ve insan NPC\'lere verilen hasarı %30 artırır.',
    synergy: 'Armored ve Life Leech ile birlikte PvE çatışmalarını hızlandırır.'
  },

  // Resistances & Traps (Alt Dal)
  {
    id: 'hot-blooded',
    name: 'Hot Blooded',
    tree: 'Combat',
    category: 'Resistances',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '-25% Heat & Fire Damage',
    desc: 'Ateş, alev ve ısı hasarını %25 oranında azaltır.',
    synergy: 'Harbinger Boss Drone alev ışınlarına karşı hayatta kalmak için zorunludur.'
  },
  {
    id: 'crawl-out',
    name: 'Crawl Out Through The Fallout',
    tree: 'Combat',
    category: 'Resistances',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '-25% Radiation Damage',
    desc: 'Radyasyon hasarını %25 oranında azaltır.',
    synergy: 'Launch Site ve Military Tunnels gibi yüksek radyasyonlu anıtlarda koruma sağlar.'
  },
  {
    id: 'cold-blooded',
    name: 'Cold Blooded',
    tree: 'Combat',
    category: 'Resistances',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: 'Environmental Cold Immunity',
    desc: 'Çevresel dondurucu soğuklara karşı tam bağışıklık ve %25 soğuk direnci sağlar.',
    synergy: 'Kar biyomunda ve gece saatlerinde soğuktan can kaybetmeyi engeller.'
  },
  {
    id: 'trapwise',
    name: 'Trapwise',
    tree: 'Combat',
    category: 'Resistances',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '-50% Trap Damage Taken',
    desc: 'Tuzaklardan (Ayı kapanı, kara mayını, shotgun trap vb.) alınan hasarı %50 azaltır.',
    synergy: 'Raid World üslerine girerken beklenmedik tuzak hasarını azaltır.'
  },
  {
    id: 'disarmament',
    name: 'Disarmament',
    tree: 'Combat',
    category: 'Resistances',
    tier: 'B-Tier',
    type: 'Ability',
    cost: '5 SP',
    benefit: '+50% Trap Damage to NPCs',
    desc: 'Yerleştirdiğiniz tuzakların NPC düşmanlara verdiği hasarı %50 artırır.',
    synergy: 'Üs savunmasında tuzakların etkinliğini artırır.'
  },

  // ==========================================
  // --- 4. VEHICLES ---
  // ==========================================
  {
    id: 'gas-guru',
    name: 'Gas Guru',
    tree: 'Vehicles',
    category: 'Fuel',
    tier: 'S-Tier',
    type: 'Multi-Tier',
    cost: '1 SP / rank (Maks 3/3)',
    benefit: '-75% Fuel Consumption',
    desc: 'Bindiğiniz tüm araçların (Heli, Tekne, Araba, Tugboat, Denizaltı) yakıt tüketimini %75 oranında azaltır.',
    synergy: 'Uzun menzilli seyahatlerde Low Grade Fuel tasarrufu sağlar.'
  },
  {
    id: 'efficient-equestrian',
    name: 'Efficient Equestrian',
    tree: 'Vehicles',
    category: 'Horse',
    tier: 'S-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+200% Mounted Horse Speed',
    desc: 'Ata bindiğinizde atın koşu hızını %200 (3 katına) çıkarır.',
    synergy: 'Sıfır yakıt maliyetiyle haritada hızlı seyahat etmeyi sağlar.'
  },
  {
    id: 'champion-cyclist',
    name: 'Champion Cyclist',
    tree: 'Vehicles',
    category: 'Bicycle',
    tier: 'B-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+100% Bike Acceleration',
    desc: 'Bisiklet sürerken hızlanmayı %100 artırır.',
    synergy: 'Wipe başı yolculuklarında pratik hızlanma sağlar.'
  },
  {
    id: 'seasoned-sailor',
    name: 'Seasoned Sailor',
    tree: 'Vehicles',
    category: 'Boat',
    tier: 'A-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+100% Boat Acceleration',
    desc: 'Tekne ve Tugboat sürerken kalkış ve ivmelenmeyi 2 katına çıkarır.',
    synergy: 'Deep Sea Cobalt kargo gemilerini kovalarken su üstü manevrasını güçlendirir.'
  },
  {
    id: 'prodigious-pilot',
    name: 'Prodigious Pilot',
    tree: 'Vehicles',
    category: 'Helicopter',
    tier: 'God-Tier',
    type: 'Ability',
    cost: '1 SP',
    benefit: '+150% Heli Acceleration',
    desc: 'Minicopter ve Scrap Helikopter sürerken ivmelenmeyi %150 artırır. Helikopter kalkışı ve hızlanması hızlanır.',
    synergy: 'Monumentler ve petrol platformları arasındaki uçuş süresini yarıya indirir.'
  }
];
