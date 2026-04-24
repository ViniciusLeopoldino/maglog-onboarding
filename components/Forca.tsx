"use client";
import { useState } from "react";

interface ForcaProps {
  palavra: string;
  dica?: string;
  onComplete: () => void;
}

export default function Forca({ palavra, dica, onComplete }: ForcaProps) {
  const [letrasDescobertas, setLetrasDescobertas] = useState<string[]>([]);
  const teclado = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  const tentarLetra = (l: string) => {
    if (letrasDescobertas.includes(l)) return;

    const novas = [...letrasDescobertas, l];
    setLetrasDescobertas(novas);

    // Verifica se ganhou
    const palavraLimpa = palavra.toUpperCase().replace(/\s/g, "");
    const ganhou = palavraLimpa.split("").every((char) => novas.includes(char));

    if (ganhou) {
      setTimeout(() => {
        alert("Excelente! Você descobriu a palavra.");
        onComplete();
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 py-6">
      {dica && (
        <p className="text-[#005367] font-bold text-center text-lg uppercase tracking-widest">
          {dica}
        </p>
      )}

      {/* Espaços da Palavra */}
      <div className="flex flex-wrap justify-center gap-3">
        {palavra.toUpperCase().split("").map((l, i) => (
          <div
            key={i}
            className={`w-12 h-16 border-b-8 flex items-center justify-center text-4xl font-black rounded-t-lg transition-all
              ${l === " " ? "border-transparent" : "border-[#005367] bg-gray-50"}
              ${letrasDescobertas.includes(l) ? "text-[#005367]" : "text-transparent"}`}
          >
            {l}
          </div>
        ))}
      </div>

      {/* Teclado Virtual */}
      <div className="grid grid-cols-6 md:grid-cols-10 gap-2 max-w-2xl">
        {teclado.map((l) => (
          <button
            key={l}
            onClick={() => tentarLetra(l)}
            disabled={letrasDescobertas.includes(l)}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-xl font-bold border-2 transition-all
              ${letrasDescobertas.includes(l) 
                ? "bg-gray-100 text-gray-300 border-gray-100 shadow-inner" 
                : "bg-white border-gray-300 hover:border-[#005367] hover:text-[#005367] shadow-sm active:scale-90"}`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}