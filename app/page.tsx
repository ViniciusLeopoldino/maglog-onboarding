"use client";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";

// Importação dos dados e componentes modulares
import { FASES, PERGUNTAS_AVALIACAO, MARCOS_HISTORICOS } from "./data";
import Modal from "@/components/Modal";
import Quiz from "@/components/Quiz";
import Puzzle from "@/components/Puzzle";
import Forca from "@/components/Forca";

export default function OnboardingPage() {
  // Estado de progresso (pode ser integrado ao Supabase depois)
  const [progresso, setProgresso] = useState(1);
  const [faseSel, setFaseSel] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Evita erros de hidratação no Next.js
  useEffect(() => {
    setMounted(true);
    const salvo = localStorage.getItem("progresso_maglog");
    if (salvo) setProgresso(parseInt(salvo));
  }, []);

  const concluirAtividade = () => {
    const novoProgresso = faseSel.id === progresso ? progresso + 1 : progresso;
    setProgresso(novoProgresso);
    localStorage.setItem("progresso_maglog", novoProgresso.toString());
    setFaseSel(null);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans text-slate-900 antialiased">
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none grayscale" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')", backgroundSize: 'cover' }} />

      {/* Header com Barra de Progresso */}
      <header className="sticky top-0 z-50 bg-white shadow-xl p-4 md:p-6 flex justify-between items-center border-l-[10px] border-[#005367]">
        <div>
          <h1 className="font-black uppercase italic text-[#005367] text-lg md:text-2xl">Maglog Onboarding</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">Plataforma de Treinamento Interno</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-black text-gray-400 uppercase">Seu Progresso</p>
            <p className="text-sm font-bold text-[#005367]">{progresso} / {FASES.length} Concluído</p>
          </div>
          <div className="bg-[#005367] text-white px-5 py-2 rounded-2xl font-black text-2xl shadow-lg ring-4 ring-[#005367]/10">
            {Math.round((progresso / FASES.length) * 100)}%
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto p-6 md:p-12 space-y-24">
        {/* Agrupamento por Módulos */}
        {[1, 2, 3, 4, 5].map((mId) => {
          const moduloFases = FASES.filter((f) => f.modulo === mId);
          if (moduloFases.length === 0) return null;

          return (
            <section key={mId} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Card do Título do Módulo */}
              <div className="bg-white p-6 md:p-8 rounded-[35px] shadow-lg border border-gray-100 flex items-center gap-6 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#005367]/5 rounded-full -mr-16 -mt-16" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#005367] text-white rounded-3xl flex items-center justify-center font-black text-3xl md:text-4xl italic shadow-inner">
                  {mId}
                </div>
                <div>
                  <h2 className="text-[#005367] font-black text-xl md:text-3xl uppercase italic leading-none">
                    {moduloFases[0].mNome}
                  </h2>
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase mt-2 tracking-tighter">
                    {moduloFases.length} Atividades Obrigatórias
                  </p>
                </div>
              </div>

              {/* Grid de Atividades */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 px-4">
                {moduloFases.map((fase) => {
                  const estaBloqueada = fase.id > progresso;
                  const estaConcluida = fase.id < progresso;

                  return (
                    <div key={fase.id} className="flex flex-col items-center gap-4 group">
                      {/* Estrelas de Conquista */}
                      <div className="flex gap-1 transition-opacity duration-300">
                        {[1, 2, 3].map((s) => (
                          <span key={s} className={`text-sm ${estaConcluida ? "text-[#fdb913]" : "text-gray-200"}`}>★</span>
                        ))}
                      </div>

                      {/* Botão da Atividade */}
                      <button
                        disabled={estaBloqueada}
                        onClick={() => setFaseSel(fase)}
                        className={`
                          relative w-24 h-24 rounded-full border-[6px] shadow-2xl transition-all duration-300 flex items-center justify-center
                          ${estaBloqueada 
                            ? "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed opacity-60" 
                            : "bg-white border-[#005367] text-[#005367] cursor-pointer hover:scale-110 hover:rotate-3 ring-8 ring-white/50 active:scale-95"}
                        `}
                      >
                        {estaConcluida ? (
                          <span className="text-4xl font-bold text-[#fdb913] animate-in zoom-in">✓</span>
                        ) : (
                          <span className="text-2xl font-black">{fase.id}</span>
                        )}
                        
                        {/* Indicador de "Próximo" */}
                        {fase.id === progresso && (
                          <span className="absolute -top-2 -right-2 flex h-6 w-6">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fdb913] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-[#fdb913]"></span>
                          </span>
                        )}
                      </button>

                      <span className={`text-[10px] font-black uppercase text-center max-w-[120px] transition-colors ${estaBloqueada ? 'text-gray-300' : 'text-[#005367]'}`}>
                        {fase.titulo}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      {/* Modal Inteligente - Injeta o componente correto baseado no tipo da fase */}
      <Modal 
        isOpen={!!faseSel} 
        onClose={() => setFaseSel(null)} 
        titulo={faseSel?.titulo}
        subtitulo={`Módulo ${faseSel?.modulo} - Atividade ${faseSel?.id}`}
      >
        {faseSel?.tipo === "video" && (
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white">
            <YouTube 
              videoId={faseSel.vId} 
              className="w-full h-full" 
              onEnd={concluirAtividade} 
              opts={{ width: '100%', height: '100%', playerVars: { autoplay: 1 } }} 
            />
          </div>
        )}

        {faseSel?.tipo === "quiz" && (
          <Quiz perguntas={PERGUNTAS_AVALIACAO} onComplete={concluirAtividade} />
        )}

        {faseSel?.tipo === "puzzle" && (
          <Puzzle marcos={MARCOS_HISTORICOS} onComplete={concluirAtividade} />
        )}

        {faseSel?.tipo === "forca" && (
          <Forca palavra={faseSel.resp} dica={faseSel.dica} onComplete={concluirAtividade} />
        )}
      </Modal>

      {/* Footer Fixo */}
      <footer className="text-center py-10 opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Maglog Logística S.A. &copy; 2026</p>
      </footer>
    </div>
  );
}