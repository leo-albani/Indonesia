import React, { useState, useEffect } from "react";
import { PACK_LEO, PACK_ELI, PACK_NOTE } from "../data";
import { PackingCategory } from "../types";

export const PackingList: React.FC = () => {
  const [activePerson, setActivePerson] = useState<"leo" | "eli">("leo");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // Load checks on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("indonesia_packing_checked_v1");
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Error reading packing state from localStorage:", e);
    }
  }, []);

  const handleToggle = (person: "leo" | "eli", categoryTitle: string, itemText: string) => {
    const key = `${person}:${categoryTitle}:${itemText}`;
    let updated: string[];
    if (checkedItems.includes(key)) {
      updated = checkedItems.filter((k) => k !== key);
    } else {
      updated = [...checkedItems, key];
    }
    setCheckedItems(updated);
    try {
      localStorage.setItem("indonesia_packing_checked_v1", JSON.stringify(updated));
    } catch (e) {
      console.error("Error saving packing state to localStorage:", e);
    }
  };

  const currentCategories: PackingCategory[] = activePerson === "leo" ? PACK_LEO : PACK_ELI;

  return (
    <section id="valigiaSection" className="mt-12 scroll-mt-6">
      <div className="bg-[#0E4D3C] text-[#FFF8EC] rounded-3xl overflow-hidden shadow-xl border border-[#15694F]">
        <div className="p-8 md:p-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#F2A23B] font-bold">
            🎒 La valigia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-2">
            Trolley piccolo, viaggio leggero
          </h2>
          <p className="text-sm md:text-base text-[#FFF8EC]/75 max-w-2xl leading-relaxed">
            La lista è calibrata per viaggiare leggeri con trolley compatti (visti i numerosi voli interni).
            Prevede due lavanderie programmate (Ubud il 4-5/08, Gili Air l'8-9/08) per coprire l'intero viaggio.
          </p>
        </div>

        {/* Person Toggles */}
        <div className="px-8 flex gap-3">
          <button
            onClick={() => setActivePerson("leo")}
            className={`flex-1 py-3 px-5 rounded-xl font-mono font-bold text-sm tracking-wide transition-all duration-200 border border-white/20 cursor-pointer ${
              activePerson === "leo"
                ? "bg-[#FF6B4A] border-[#FF6B4A] text-white shadow-md scale-[1.02]"
                : "bg-white/5 hover:bg-white/10 text-[#FFF8EC]/80"
            }`}
          >
            👤 Leo
          </button>
          <button
            onClick={() => setActivePerson("eli")}
            className={`flex-1 py-3 px-5 rounded-xl font-mono font-bold text-sm tracking-wide transition-all duration-200 border border-white/20 cursor-pointer ${
              activePerson === "eli"
                ? "bg-[#FF6B4A] border-[#FF6B4A] text-white shadow-md scale-[1.02]"
                : "bg-white/5 hover:bg-white/10 text-[#FFF8EC]/80"
            }`}
          >
            👤 Eli
          </button>
        </div>

        {/* Category List */}
        <div className="p-6 md:p-8 space-y-6">
          {currentCategories.map((cat, catIdx) => {
            const checkedCount = cat.items.filter(it => 
              checkedItems.includes(`${activePerson}:${cat.title}:${it}`)
            ).length;
            const isCompleted = checkedCount === cat.items.length;

            return (
              <details key={catIdx} className="group border-b border-[#FFF8EC]/10 pb-4" open>
                <summary className="list-none flex items-center justify-between cursor-pointer focus:outline-none select-none py-1">
                  <div className="flex items-center gap-3">
                    <span className="text-lg md:text-xl">{cat.ico}</span>
                    <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#F2A23B] font-bold">
                      {cat.title}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ml-1 ${
                      isCompleted ? "bg-[#1FA79A] text-white" : "bg-white/10 text-white/70"
                    }`}>
                      {checkedCount}/{cat.items.length}
                    </span>
                  </div>
                  <span className="text-[#FFF8EC]/50 font-bold transition-transform duration-200 group-open:rotate-90">
                    ▶
                  </span>
                </summary>

                <ul className="mt-4 pl-2 space-y-1">
                  {cat.items.map((it, itemIdx) => {
                    const key = `${activePerson}:${cat.title}:${it}`;
                    const isChecked = checkedItems.includes(key);

                    return (
                      <li
                        key={itemIdx}
                        onClick={() => handleToggle(activePerson, cat.title, it)}
                        className={`flex items-start gap-3 p-2.5 rounded-lg transition-all duration-150 cursor-pointer hover:bg-white/5 ${
                          isChecked ? "opacity-40 line-through text-white/50" : "text-white/90"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className="mt-1 h-4 w-4 rounded border-white/25 text-[#FF6B4A] focus:ring-0 cursor-pointer"
                        />
                        <span className="text-sm md:text-base leading-relaxed select-none">
                          {it}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}

          {/* Packing footer note */}
          <div className="mt-6 border-l-4 border-[#F2A23B] bg-white/5 p-4 rounded-r-xl italic text-sm text-[#FFF8EC]/70 leading-relaxed">
            <span className="font-bold text-[#F2A23B] not-italic block mb-1">💡 Promemoria trasversale:</span>
            {PACK_NOTE}
          </div>
        </div>
      </div>
    </section>
  );
};
