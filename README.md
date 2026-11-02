# Brit Rust Türkçe Ansiklopedisi (Worlds V2) 🌲⛏️

> **CAKJRR & Arkadaşları İçin Özel Hazırlanmış Topluluk Wiki Projesi**  
> Brits PvE Worlds V2 sunucusundaki tüm yetenek ağacı, dünya bossları (Harbinger vb.), Deep Sea kargo baskınları, en hızlı RP kasma metası ve efsanevi eşya tamir sistemini içeren modern web ansiklopedisi.

---

## 🎨 Tasarım & Renk Paleti

* **Sow (`#392525` / `#211515`):** Derin, sıcak odunsu zemin
* **Terracotta (`#B25D3E`):** Rustik kiremit ve sıcak bronz aksanlar
* **Sprout (`#E3E890`):** Canlı filiz yeşili vurgular ve God-Tier rozetleri
* **Seedling (`#FAF5E9`):** İpeksi sıcak fildişi metinler
* **Foliage & Rainfall:** Doğal orman ve taş tonları

---

## 🚀 İçerik Başlıkları

1. **Yetenek Ağacı (Worlds V2 - 4 Ana Ağaç):**
   * *Gathercraft:* Shatterpoint (Tek vuruş maden), Vein Seeker (Oto hotspot), Clearcut, Salvage King (4x Scrap) vb.
   * *Survivalcraft:* Bountiful Harvest (+50% hasat), Geneticist (/setgenes GGGYYY), Made to Order (Anında craft), Bargain Hunter vb.
   * *Combat:* Blastproof (Kendi patlayıcından 0 hasar), Aerodynamically Sound (+500% hızlı roket), Chain Reaction (%30 çift patlama), Life Leech vb.
   * *Vehicles:* Prodigious Pilot (+150% heli ivmesi), Gas Guru (-75% yakıt), Efficient Equestrian (+200% at hızı) vb.
2. **Bosslar & Etkinlikler:**
   * *Harbinger (Boss Drone):* Outpost portalı, 1M RP kartı, mağara siperi taktiği, LR-300 kullanımı ve Gem of Reserve ödülü.
   * *Deep Sea Cobalt Gemileri:* 153 taret hasarı, 3 HV roket kuralı, batarya ve Leviathan zırh ganimetleri.
   * *Nightmare Raids & Legendary Helikopterler.*
3. **En Hızlı RP (Para) Kasma Metası:**
   * Kenevir God-Seed çiftçiliği (`/setgenes GGGYYY` + Reaping Spade + Fertile Bone + Mantar Çorbası + `/pc cloth`).
   * Taktik Eldiven (Tactical Gloves) geri dönüşüm döngüsü (%2400 kar).
   * Sanal Taş Ocakları (Virtual Quarry) ve sonsuz dizel döngüsü.
4. **Efsanevi Eşyalar & Tamir Mekaniği:**
   * Yetenek ağacının -%45 eskime koruması.
   * Standart *Mad’s Magical Tools* vs Kalıcı %100 can yenileyen *Mad’s Extra Magical Tools* farkı.
   * Efsanevi altın silahlar tablosu (Brits Golden M249, Golden AK, Laginator, Plaguepiercer vb.).
5. **Sunucu Komutları:**
   * Tek tıkla kopyalanabilen `/st`, `/ps`, `/setgenes`, `/outpost`, `/hub`, `/buyraid`, `/tower1` vb.

---

## 🛠️ Yerel Kurulum (Local Development)

```bash
# Depoyu klonlayın
git clone https://github.com/CAKJRR/wikibritrust.git
cd wikibritrust

# Bağımlılıkları yükleyin
npm install

# Geliştirici sunucusunu başlatın
npm run dev
```

---

## ☁️ Vercel'e Dağıtım (Deploy to Vercel)

1. Projeyi GitHub'a gönderin (`git push origin main`).
2. [Vercel](https://vercel.com) paneline gidin ve **"Add New Project"** butonuna tıklayın.
3. `CAKJRR/wikibritrust` reposunu seçin.
4. Vercel, projeyi **Vite** olarak otomatik tanıyacaktır (Framework Preset: Vite, Build Command: `npm run build`, Output Directory: `dist`).
5. **"Deploy"** butonuna basın. Birkaç saniye içinde siteniz canlı yayında! 🎉
