"use client";
import { useState } from "react";

interface QuizProps {
  perguntas: any[];
  onComplete: () => void;
}

export default function Quiz({ perguntas, onComplete }: QuizProps) {
  const [index, setIndex] = useState(0);

  const handleResp = (idx: number) => {
    if (idx === perguntas[index].r) {
      if (index + 1 < perguntas.length) setIndex(index + 1);
      else onComplete();
    } else {
      alert("Resposta incorreta! Revise o conteúdo.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#005367] text-white p-6 rounded-2xl">
        <span className="text-xs opacity-60 uppercase font-bold">Questão {index + 1} de {perguntas.length}</span>
        <h4 className="text-xl font-bold mt-2">{perguntas[index].p}</h4>
      </div>
      <div className="grid gap-3">
        {perguntas[index].o.map((opcao: string, i: number) => (
          <button key={i} onClick={() => handleResp(i)} className="p-4 text-left border-2 rounded-xl hover:border-[#fdb913] hover:bg-yellow-50 font-bold transition-all flex gap-3">
            <span className="opacity-30">{String.fromCharCode(65 + i)}</span> {opcao}
          </button>
        ))}
      </div>
    </div>
  );
}