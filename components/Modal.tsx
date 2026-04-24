"use client";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, titulo, subtitulo, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#003b49]/95 p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-[40px] w-full max-w-5xl shadow-2xl border-t-[12px] border-[#fdb913] my-auto">
        {/* Header do Modal */}
        <div className="p-6 flex justify-between items-center border-b bg-gray-50/50">
          <div className="flex flex-col">
            {subtitulo && <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{subtitulo}</span>}
            <h2 className="font-black text-[#005367] uppercase italic text-2xl leading-none">{titulo}</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-all font-black"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo Injetado */}
        <div className="p-6 md:p-10 text-slate-800">
          {children}
        </div>

        {/* Footer Padrão Maglog */}
        <div className="bg-[#005367] py-3 text-center rounded-b-[28px]">
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">
            Boas-Vindas Maglog | Cada rota conta uma história
          </span>
        </div>
      </div>
    </div>
  );
}