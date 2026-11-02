import React, { useState } from 'react';
import { COMMANDS_DATA } from '../data/commands';
import { Terminal, Copy, Check } from 'lucide-react';

export default function CommandsSection() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const handleCopy = (cmd) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => {
      setCopiedCmd(null);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Intro */}
      <div className="bg-sow-card border border-rainfall/40 rounded-2xl p-5 sm:p-6 shadow-warm">
        <div className="flex items-center gap-3 mb-2">
          <Terminal className="w-5 h-5 text-rainfall-light" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-seedling">
            Önemli Sunucu Komutları &amp; Kısayollar
          </h2>
        </div>
        <p className="text-sm text-seedling-muted leading-relaxed">
          Sohbet ekranına (`Enter` veya `Tab`) yazarak kullanabileceğiniz pratik sunucu komutları. Kopyalamak için üzerlerine tıklamanız yeterlidir.
        </p>
      </div>

      {/* Commands Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMMANDS_DATA.map((item, idx) => {
          const isCopied = copiedCmd === item.cmd;

          return (
            <div
              key={idx}
              onClick={() => handleCopy(item.cmd)}
              className="group cursor-pointer rounded-2xl bg-sow-card border border-sow-border p-4 sm:p-5 hover:border-terracotta/50 hover:bg-sow-card/90 transition-all duration-200 shadow-sm flex items-start justify-between gap-4 select-none"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-sprout bg-sow-dark px-2.5 py-1 rounded-lg border border-sow-border group-hover:border-terracotta/40 transition-colors">
                    {item.cmd}
                  </span>
                  <span className="text-xs font-semibold text-seedling">
                    {item.name}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-seedling-muted leading-relaxed pt-1">
                  {item.desc}
                </p>
              </div>

              <button
                className={`p-2 rounded-xl shrink-0 transition-all ${
                  isCopied
                    ? 'bg-sprout text-sow-dark font-bold'
                    : 'bg-sow-dark text-mist group-hover:text-seedling border border-sow-border'
                }`}
                title="Komutu Kopyala"
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          );
        })}
      </div>

      {copiedCmd && (
        <div className="fixed bottom-6 right-6 z-50 bg-sprout text-sow-dark font-bold text-xs px-4 py-2.5 rounded-xl shadow-sprout border border-sprout/40 flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>"{copiedCmd}" panoya kopyalandı!</span>
        </div>
      )}

    </div>
  );
}
