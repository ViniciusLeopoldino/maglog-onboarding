"use client";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

// --- DADOS ---
const MARCOS_HISTORICOS = [
  { ano: "2014", texto: "Início das operações visão, coragem e foco." },
  { ano: "2015", texto: "Inovação no Last Mile e soluções portuárias." },
  { ano: "2016", texto: "Frota moderna + expansão de serviços e tecnologia TMS." },
  { ano: "2017", texto: "WMS próprio + novos serviços e integração." },
];

const FASES = [
  { id: 1, titulo: "Boas Vindas - Institucional", tipo: "video", videoId: "dQw4w9WgXcQ" },
  { id: 2, titulo: "Nossa História (Puzzle)", tipo: "puzzle" },
  { id: 3, titulo: "Cultura Maglog", tipo: "video", videoId: "dQw4w9WgXcQ" },
  { id: 4, titulo: "Ano de Fundação (Forca)", tipo: "forca", resposta: "2014" },
  { id: 5, titulo: "Processos Operacionais", tipo: "video", videoId: "dQw4w9WgXcQ" },
  { id: 6, titulo: "Finalização", tipo: "quiz" },
];

const TECLADO = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM".split("");

export default function Home() {
  const [faseUsuario, setFaseUsuario] = useState(1);
  const [modalAberto, setModalAberto] = useState(false);
  const [faseSelecionada, setFaseSelecionada] = useState<any>(null);
  const [puzzleResolvido, setPuzzleResolvido] = useState<string[]>([]);
  const [letrasDescobertas, setLetrasDescobertas] = useState<string[]>([]);

  const completarFase = () => {
    if (faseSelecionada && faseUsuario === faseSelecionada.id) {
      setFaseUsuario(prev => prev + 1);
    }
    setModalAberto(false);
    setPuzzleResolvido([]);
    setLetrasDescobertas([]);
  };

  const abrirFase = (fase: any) => {
    if (fase.id <= faseUsuario) {
      setFaseSelecionada(fase);
      setModalAberto(true);
    }
  };

  const tentarLetra = (letra: string) => {
    if (!letrasDescobertas.includes(letra)) {
      const novasLetras = [...letrasDescobertas, letra];
      setLetrasDescobertas(novasLetras);
      const ganhou = faseSelecionada.resposta.split("").every((l: string) => novasLetras.includes(l));
      if (ganhou) { setTimeout(() => { alert("Acertou!"); completarFase(); }, 500); }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f4] overflow-x-hidden pb-32">
      
      {/* BACKGROUND DE ARMAZÉM (Fundo do Print 1) */}
      <div 
        className="fixed inset-0 z-0 opacity-15 bg-cover bg-center grayscale pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')" }}
      />

      <div className="relative z-10 flex flex-col items-center py-10 px-4">
        
        {/* CARD INFORMATIVO SUPERIOR */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-20 w-full max-w-2xl border-l-8 border-[#005367] flex justify-between items-center">
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Atividade Atual</h2>
            <p className="text-xl font-bold text-[#005367] uppercase">
              {FASES.find(f => f.id === faseUsuario)?.titulo || "Trilha Concluída!"}
            </p>
          </div>
          <div className="bg-[#005367]/5 p-3 rounded-lg text-center min-w-[60px]">
            <span className="block text-[10px] font-bold text-[#005367]">FASE</span>
            <span className="text-2xl font-black text-[#005367]">0{faseUsuario}</span>
          </div>
        </div>

        {/* CONTAINER DA TRILHA */}
        <div className="relative w-full max-w-4xl min-h-[1000px]">
          
          {/* SVG DA LINHA (Colocado com pointer-events-none para não bloquear cliques) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <path 
              d="M 200 80 Q 700 200 600 450 T 200 800 T 600 1100" 
              stroke="#005367" 
              strokeWidth="6" 
              strokeDasharray="12 12" 
              fill="none" 
              className="opacity-20"
            />
          </svg>

          {FASES.map((fase, index) => {
            const ativa = fase.id <= faseUsuario;
            const concluida = fase.id < faseUsuario;
            
            return (
              <div 
                key={fase.id} 
                style={{ left: index % 2 === 0 ? "20%" : "75%", top: `${index * 180}px` }} 
                className="absolute transform -translate-x-1/2 flex flex-col items-center z-20"
              >
                {/* ESTRELAS */}
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3].map(s => (
                    <span key={s} className={`text-lg ${concluida ? 'text-[#fdb913]' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>

                {/* BOTÃO DA FASE */}
                <button
                  onClick={() => abrirFase(fase)}
                  disabled={!ativa}
                  style={{ cursor: ativa ? 'pointer' : 'not-allowed' }}
                  className={`
                    w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300
                    ${ativa 
                      ? 'bg-white border-[#005367] text-[#005367] shadow-xl hover:scale-110 active:scale-95' 
                      : 'bg-gray-200 border-gray-300 text-gray-400 opacity-80'}
                  `}
                >
                  {concluida ? (
                    <span className="text-2xl font-bold text-[#fdb913]">✓</span>
                  ) : (
                    <span className="text-xl font-black">{fase.id}</span>
                  )}
                  
                  {/* LABEL FLUTUANTE */}
                  <div className="absolute -bottom-8 whitespace-nowrap">
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${ativa ? 'text-[#005367]' : 'text-gray-400'}`}>
                      {fase.titulo.split(" ")[0]}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL GLOBAL */}
      {modalAberto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#003b49]/90 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border-t-8 border-[#fdb913]">
            
            {/* MODAL HEADER */}
            <div className="p-4 flex justify-between items-center border-b bg-gray-50">
              <h3 className="font-bold text-[#005367] uppercase italic">MAGLOG | {faseSelecionada.titulo}</h3>
              <button 
                onClick={() => setModalAberto(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              >✕</button>
            </div>

            <div className="p-8">
              {/* CONTEÚDO: VÍDEO */}
              {faseSelecionada.type === "video" || faseSelecionada.tipo === "video" && (
                <div className="aspect-video w-full">
                  <YouTube 
                    videoId={faseSelecionada.videoId} 
                    className="w-full h-full" 
                    opts={{ width: '100%', height: '100%', playerVars: { autoplay: 1 }}} 
                    onEnd={completarFase} 
                  />
                </div>
              )}

              {/* CONTEÚDO: PUZZLE */}
              {faseSelecionada.tipo === "puzzle" && (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {MARCOS_HISTORICOS.map((m, i) => (
                      <div key={i} className={`border-2 rounded-xl p-4 flex flex-col items-center min-h-[160px] transition-all ${puzzleResolvido.includes(m.ano) ? 'border-[#fdb913] bg-[#fdb913]/10' : 'border-dashed border-gray-300 bg-gray-50'}`}>
                        <div className="font-black text-xl mb-3 text-[#005367]">{puzzleResolvido.includes(m.ano) ? m.ano : "????"}</div>
                        <p className="text-[11px] text-center uppercase font-bold leading-tight">{m.texto}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-4 flex-wrap border-t pt-8">
                    {["2016", "2014", "2017", "2015"].map(ano => (
                      <button 
                        key={ano} 
                        disabled={puzzleResolvido.includes(ano)}
                        onClick={() => {
                          if(MARCOS_HISTORICOS[puzzleResolvido.length].ano === ano) {
                            const novo = [...puzzleResolvido, ano];
                            setPuzzleResolvido(novo);
                            if(novo.length === 4) setTimeout(completarFase, 1000);
                          } else {
                            alert("Ordem incorreta!");
                          }
                        }} 
                        className={`px-8 py-3 rounded-lg font-black text-lg transition-all shadow-md cursor-pointer ${puzzleResolvido.includes(ano) ? 'bg-gray-100 text-gray-300 shadow-none' : 'bg-[#005367] text-white hover:bg-[#fdb913] hover:text-[#005367]'}`}
                      >
                        {ano}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CONTEÚDO: FORCA */}
              {faseSelecionada.tipo === "forca" && (
                <div className="flex flex-col items-center gap-8 py-10">
                  <p className="text-[#005367] font-bold text-center text-lg">Qual o ano em que a Maglog iniciou suas operações?</p>
                  <div className="flex gap-4 mb-8">
                    {faseSelecionada.resposta.split("").map((l: string, i: number) => (
                      <div key={i} className="w-14 h-20 border-b-8 border-[#005367] flex items-center justify-center text-4xl font-black text-[#005367]">
                        {letrasDescobertas.includes(l) ? l : ""}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-6 md:grid-cols-10 gap-2 max-w-3xl">
                    {TECLADO.map(l => (
                      <button 
                        key={l} 
                        onClick={() => tentarLetra(l)} 
                        disabled={letrasDescobertas.includes(l)} 
                        className={`w-11 h-11 rounded font-bold border-2 transition-all cursor-pointer ${letrasDescobertas.includes(l) ? 'bg-gray-100 text-gray-300 border-gray-200' : 'bg-white border-gray-300 hover:border-[#005367] hover:bg-[#005367]/5 text-gray-600'}`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="bg-[#005367] p-2 text-center">
              <p className="text-white text-[9px] uppercase tracking-[0.2em] font-bold">Logística de Boas-Vindas Maglog</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}