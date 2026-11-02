import React, { useState } from 'react';
import { Copy, Check, Gamepad2, Server, Info } from 'lucide-react';

const SERVERS = [
  {
    region: 'EU',
    name: 'Brits PvE Worlds',
    desc: 'Avrupa\'daki ana sunucu. Görevler, özel etkinlikler ve MMORPG ilerlemesi.',
    address: 'worlds.eu.britspve.com:28015'
  },
  {
    region: 'US',
    name: 'Brits PvE Worlds',
    desc: 'Kuzey Amerika sunucusu. Görevler, özel silahlar ve MMORPG ilerlemesi.',
    address: 'worlds.us.britspve.com:28015'
  },
  {
    region: 'AU',
    name: 'Brits PvE Worlds',
    desc: 'Avustralya sunucusu. Görevler, XP ve MMORPG ilerlemesi.',
    address: 'worlds.au.britspve.com:28015'
  }
];

const LIST_STEPS = [
  <>Rust'ı başlat ve <strong className="text-seedling">Play Game</strong>'e tıkla.</>,
  <>Sunucu listesinin üstündeki <strong className="text-seedling">Modded</strong> sekmesini aç.</>,
  <>Arama kutusuna <strong className="text-seedling">Brit</strong> yaz.</>,
  <><strong className="text-seedling">[EU]</strong>, <strong className="text-seedling">[US]</strong> veya <strong className="text-seedling">[AU]</strong> Brits PvE Worlds'ü seçip Connect'e bas.</>
];

export default function PlaySection({ setActiveTab }) {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Başlık */}
      <div className="bg-sow-card border border-sow-border rounded-2xl p-5 sm:p-6 shadow-warm">
        <div className="flex items-center gap-3 mb-2">
          <Gamepad2 className="w-5 h-5 text-sprout" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-seedling">Nasıl Oynanır?</h2>
        </div>
        <p className="text-sm text-seedling-muted leading-relaxed">
          Sunucuya girmenin iki yolu var: oyun içi sunucu listesinden bulabilir ya da aşağıdaki adreslerden biriyle doğrudan bağlanabilirsin. Sana en yakın bölgeyi seç.
        </p>
      </div>

      {/* Seçenek 1 */}
      <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden">
        <div className="px-5 py-4 border-b border-sow-border bg-sow-dark/50">
          <h3 className="font-sans text-sm font-extrabold tracking-wide text-sprout">1. YOL: SUNUCU LİSTESİNDEN BUL</h3>
          <p className="text-xs text-mist mt-0.5">En kolay yol. Hiçbir şey yazman gerekmez.</p>
        </div>
        <ol className="divide-y divide-sow-border/60">
          {LIST_STEPS.map((step, idx) => (
            <li key={idx} className="flex items-center gap-4 px-5 py-3.5 text-sm text-seedling-muted">
              <span className="w-6 h-6 rounded-lg bg-terracotta/20 text-terracotta-light border border-terracotta/30 flex items-center justify-center shrink-0 text-xs font-bold font-mono">
                {idx + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Seçenek 2 */}
      <div className="rounded-2xl bg-sow-card border border-sow-border overflow-hidden">
        <div className="px-5 py-4 border-b border-sow-border bg-sow-dark/50">
          <h3 className="font-sans text-sm font-extrabold tracking-wide text-sprout">2. YOL: IP İLE BAĞLAN</h3>
          <p className="text-xs text-mist mt-0.5">
            Oyundayken <strong className="text-seedling">F1</strong> tuşuyla konsolu aç, komutu yapıştır ve Enter'a bas.
          </p>
        </div>

        <div className="divide-y divide-sow-border/60">
          {SERVERS.map((server) => {
            const command = `client.connect ${server.address}`;
            const isCopied = copied === command;
            return (
              <div key={server.region} className="px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-terracotta-light" />
                    <span className="text-sm font-bold text-seedling">
                      {server.region} · {server.name}
                    </span>
                  </div>
                  <p className="text-xs text-seedling-muted leading-relaxed">{server.desc}</p>
                </div>

                <button
                  onClick={() => handleCopy(command)}
                  title="Komutu Kopyala"
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-sow-dark border border-sow-border hover:border-terracotta/50 transition-all shrink-0 text-left"
                >
                  <code className="font-mono text-xs sm:text-sm text-sprout break-all">{command}</code>
                  {isCopied ? (
                    <Check className="w-4 h-4 text-sprout shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 text-mist group-hover:text-seedling shrink-0" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Alt not */}
      <div className="flex items-start gap-3 rounded-2xl bg-sow-card border border-sow-border p-5 text-sm text-seedling-muted leading-relaxed">
        <Info className="w-4 h-4 text-terracotta-light shrink-0 mt-0.5" />
        <span>
          Yeni misin?{' '}
          <button
            onClick={() => {
              setActiveTab('early');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-semibold text-terracotta-light hover:text-sprout underline underline-offset-2"
          >
            Başlangıç Rehberi
          </button>
          'nden başla. Takıldığın yerde Brits Discord sunucusunda ticket açabilirsin.
        </span>
      </div>

      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-sprout text-sow-dark font-bold text-xs px-4 py-2.5 rounded-xl shadow-sprout border border-sprout/40 flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>Bağlantı komutu panoya kopyalandı!</span>
        </div>
      )}
    </div>
  );
}
