"use client";
import { useState } from "react";

export default function Puzzle({ marcos, onComplete }: { marcos: any[], onComplete: () => void }) {
  const [resolvidos, setResolvidos] = useState<string[]>([]);
  const anos = ["2016", "2014", "2017", "2015"]; // Botões misturados

  const tentar = (ano: string) => {
    if (marcos[resolvidos.length].ano === ano) {
      const novo = [...resolvidos, ano];
      setResolvidos(novo);
      if (novo.length === marcos.length) setTimeout(onComplete, 1000);
    } else {
      alert("Ordem cronológica incorreta!");
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {marcos.map((m, i) => (
          <div key={i} className={`border-4 rounded-3xl p-5 flex flex-col items-center min-h-[150px] transition-all ${resolvidos.includes(m.ano) ? 'border-[#fdb913] bg-yellow-50' : 'border-dashed border-gray-200'}`}>
            <div className="font-black text-2xl mb-2 text-[#005367]">{resolvidos.includes(m.ano) ? m.ano : "????"}</div>
            <p className="text-[10px] text-center font-bold uppercase">{m.texto}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 flex-wrap justify-center border-t pt-8 w-full">
        {anos.map(ano => (
          <button key={ano} disabled={resolvidos.includes(ano)} onClick={() => tentar(ano)} className={`px-10 py-4 rounded-xl font-black text-xl shadow-lg transition-all ${resolvidos.includes(ano) ? 'bg-gray-100 text-gray-300' : 'bg-[#005367] text-white cursor-pointer active:scale-95'}`}>{ano}</button>
        ))}
      </div>
    </div>
  );
}