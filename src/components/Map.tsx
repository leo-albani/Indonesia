import React from "react";

interface MapProps {
  activeStopId: number;
  onSelectStop: (id: number) => void;
}

export const Map: React.FC<MapProps> = ({ activeStopId, onSelectStop }) => {
  return (
    <div className="bg-gradient-to-b from-[#FCE7C8] via-[#FBDCB0] to-[#9FDCD6] rounded-3xl shadow-lg border border-[#F7EDD9] overflow-x-auto relative select-none">
      <svg
        id="mapSvg"
        viewBox="0 0 1220 500"
        xmlns="http://www.w3.org/2000/svg"
        className="block min-w-[980px] w-full h-auto"
      >
        <defs>
          <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CFEFEA" />
            <stop offset="55%" stopColor="#A9E0D9" />
            <stop offset="100%" stopColor="#7FC9C4" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1220" height="500" fill="url(#seaGrad)" opacity="0.55" />

        {/* Graticule lines */}
        <line x1="0" y1="130" x2="1220" y2="130" stroke="#0E4D3C" strokeWidth="1" strokeDasharray="2 6" opacity="0.07" />
        <line x1="0" y1="330" x2="1220" y2="330" stroke="#0E4D3C" strokeWidth="1" strokeDasharray="2 6" opacity="0.07" />
        <line x1="300" y1="0" x2="300" y2="500" stroke="#0E4D3C" strokeWidth="1" strokeDasharray="2 6" opacity="0.07" />
        <line x1="700" y1="0" x2="700" y2="500" stroke="#0E4D3C" strokeWidth="1" strokeDasharray="2 6" opacity="0.07" />
        <line x1="1000" y1="0" x2="1000" y2="500" stroke="#0E4D3C" strokeWidth="1" strokeDasharray="2 6" opacity="0.07" />

        {/* Sun illustration */}
        <circle cx="1130" cy="65" r="48" fill="#FFDFA0" opacity="0.65" />
        <circle cx="1130" cy="65" r="31" fill="#FFC15E" opacity="0.8" />

        {/* Sea labels */}
        <text x="330" y="95" className="font-serif italic text-xs fill-[#0B4A44] opacity-40 tracking-wider">Laut Jawa</text>
        <text x="470" y="460" className="font-serif italic text-xs fill-[#0B4A44] opacity-40 tracking-wider">Oceano Indiano</text>
        <text x="466" y="222" className="font-sans text-[9.5px] fill-[#0B4A44] opacity-40 tracking-wider">Selat Lombok</text>

        {/* ============ ISLANDS ============ */}
        {/* Java */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#2E8B63"
          d="M75,222 C82,203 98,192 122,195 C142,197 150,183 175,186 C200,189 208,203 232,200 C256,197 270,208 294,206 C314,204 332,213 336,229 C339,244 323,254 303,251 C283,248 274,259 249,255 C224,251 213,241 188,245 C163,249 149,239 127,243 C105,247 84,244 78,231 C76,228 74,225 75,222 Z"
        />
        <path
          className="opacity-15"
          fill="#0E4D3C"
          d="M90,238 C120,250 180,252 230,248 C275,244 310,240 330,232 C325,246 300,254 270,254 C230,255 170,257 130,250 C105,246 92,244 90,238 Z"
        />

        {/* Bali */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#2E8B63"
          d="M406,233 C412,220 430,214 445,219 C459,224 466,238 460,251 C456,259 448,262 440,266 C432,270 424,274 417,270 C411,267 411,259 403,254 C393,248 391,236 398,229 C400,227 403,230 406,233 Z"
        />
        {/* Bukit Peninsula */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#2E8B63"
          d="M438,264 C444,268 452,272 452,281 C452,288 445,292 439,288 C433,284 431,275 434,268 C435,266 436,264 438,264 Z"
        />

        {/* Lombok */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#2E8B63"
          d="M492,231 C503,219 524,218 536,229 C546,238 548,251 540,262 C535,269 528,270 522,276 C515,283 505,283 500,275 C496,269 498,262 490,257 C481,251 480,240 486,233 C488,231 490,230 492,231 Z"
        />

        {/* Gili Islands (3 dots) */}
        <circle cx="502" cy="199" r="4.4" fill="#3AA377" className="opacity-95" />
        <circle cx="514" cy="191" r="3.3" fill="#3AA377" className="opacity-95" />
        <circle cx="490" cy="192" r="2.7" fill="#3AA377" className="opacity-95" />

        {/* Sumbawa (Muted island) */}
        <path
          className="transition-opacity duration-200 opacity-55"
          fill="#3AA377"
          d="M572,252 C584,236 606,233 618,245 C625,253 620,262 610,265 C625,266 648,262 665,270 C685,279 708,275 718,262 C724,253 717,241 703,239 C684,236 664,244 648,239 C633,234 618,239 604,235 C591,231 578,238 572,252 Z"
        />

        {/* Komodo & Rinca */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#1F8863"
          d="M742,278 C749,269 762,269 767,278 C770,285 765,291 756,290 C748,289 739,285 742,278 Z"
        />
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#1F8863"
          d="M772,296 C779,289 791,290 794,298 C796,304 789,309 781,307 C775,305 769,301 772,296 Z"
        />

        {/* Flores */}
        <path
          className="transition-opacity duration-200 opacity-95"
          fill="#2E8B63"
          d="M812,272 C820,257 842,253 860,259 C878,265 888,253 908,256 C930,259 940,248 962,252 C985,256 995,246 1018,251 C1038,255 1052,249 1066,259 C1078,267 1076,281 1064,286 C1048,292 1032,285 1014,290 C990,296 972,289 950,293 C925,297 906,290 886,294 C862,299 844,292 826,296 C814,299 805,290 807,279 C808,276 810,274 812,272 Z"
        />

        {/* Island text labels */}
        <text x="155" y="167" className="font-serif italic font-bold text-[12.5px] fill-[#1B2B24] opacity-55 select-none pointer-events-none">Giava</text>
        <text x="960" y="315" className="font-serif italic font-bold text-[12.5px] fill-[#1B2B24] opacity-55 select-none pointer-events-none">Flores</text>
        <text x="418" y="290" className="font-serif italic font-bold text-xs fill-[#1B2B24] opacity-55 select-none pointer-events-none">Bali</text>
        <text x="497" y="298" className="font-serif italic font-bold text-xs fill-[#1B2B24] opacity-55 select-none pointer-events-none">Lombok</text>
        <text x="628" y="285" className="font-serif italic font-bold text-[11px] fill-[#1B2B24] opacity-40 select-none pointer-events-none">Sumbawa</text>

        {/* ============ VOLCANOES ============ */}
        {/* Merapi */}
        <g transform="translate(212,178)">
          <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
          <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
          <text x="0" y="18" textAnchor="middle" className="font-mono text-[9px] fill-[#8B4A3A] opacity-75 italic">Merapi</text>
        </g>
        {/* Agung/Batur */}
        <g transform="translate(432,214)">
          <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
          <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
          <text x="0" y="18" textAnchor="middle" className="font-mono text-[9px] fill-[#8B4A3A] opacity-75 italic">Agung / Batur</text>
        </g>
        {/* Rinjani */}
        <g transform="translate(524,245)">
          <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
          <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
          <text x="18" y="4" textAnchor="start" className="font-mono text-[9px] fill-[#8B4A3A] opacity-75 italic">Rinjani</text>
        </g>
        {/* Lewotobi */}
        <g transform="translate(1005,270)">
          <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.9" />
          <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
          <text x="0" y="18" textAnchor="middle" className="font-mono text-[9px] fill-[#8B4A3A] opacity-75 italic">Lewotobi</text>
        </g>

        {/* ============ ROUTE ARCS ============ */}
        <path d="M50,55 Q70,150 140,215" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M140,215 Q197,185 255,215" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M255,215 Q507,140 760,282" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M760,282 Q594,180 428,242" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M428,242 Q464,195 500,205" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M500,205 Q540,237 516,270" fill="none" stroke="#0E4D3C" strokeWidth="2" strokeDasharray="1 7" opacity="0.5" strokeLinecap="round" />
        <path d="M516,270 Q328,150 140,215" fill="none" stroke="#DE4E2E" strokeWidth="2" strokeDasharray="1 7" opacity="0.55" strokeLinecap="round" />
        <path d="M140,215 Q70,150 50,55" fill="none" stroke="#DE4E2E" strokeWidth="2" strokeDasharray="1 7" opacity="0.55" strokeLinecap="round" />

        {/* Transit Emojis */}
        <text x="62" y="128" className="text-base">✈️</text>
        <text x="188" y="182" className="text-base">✈️</text>
        <text x="497" y="150" className="text-base">✈️</text>
        <text x="586" y="190" className="text-base">✈️</text>
        <text x="456" y="205" className="text-[13px]"> Ferry ⛴️</text>
        <text x="528" y="240" className="text-[13px]"> Boat 🚤</text>
        <text x="318" y="160" className="text-base">✈️</text>

        {/* Roma Marker */}
        <g>
          <ellipse cx="50" cy="72" rx="11" ry="3.5" fill="#000" opacity="0.15" />
          <circle cx="50" cy="55" r="20" fill="#0E4D3C" stroke="#FFF8EC" strokeWidth="2" />
          <text x="50" y="59" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white">ROM</text>
        </g>

        {/* Compass */}
        <g className="opacity-60" transform="translate(48,455)">
          <path d="M0,14 L0,-14 M-6,-8 L0,-14 L6,-8" fill="none" stroke="#0E4D3C" strokeWidth="1.5" />
          <text x="0" y="-20" textAnchor="middle" className="font-mono font-bold text-[11px] fill-[#0E4D3C]">N</text>
        </g>

        {/* ============ PINS ============ */}
        {/* STOP 1: Jakarta */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(1)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(1)}>
          <ellipse cx="140" cy="231" rx="10" ry="3.2" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="140"
            cy="215"
            r="19"
            fill="none"
            stroke="#F2A23B"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="140"
            cy="215"
            r="13"
            fill="#F2A23B"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="140" y="219" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white pointer-events-none">1</text>
          <text x="140" y="245" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Jakarta</text>
        </g>

        {/* STOP 2: Yogyakarta */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(2)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(2)}>
          <ellipse cx="255" cy="231" rx="10" ry="3.2" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="255"
            cy="215"
            r="19"
            fill="none"
            stroke="#FF6B4A"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 2 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="255"
            cy="215"
            r="13"
            fill="#FF6B4A"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="255" y="219" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white pointer-events-none">2</text>
          <text x="255" y="245" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Yogyakarta</text>
        </g>

        {/* STOP 3: Komodo */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(3)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(3)}>
          <ellipse cx="760" cy="298" rx="10" ry="3.2" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="760"
            cy="282"
            r="19"
            fill="none"
            stroke="#15694F"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 3 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="760"
            cy="282"
            r="13"
            fill="#15694F"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="760" y="286" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white pointer-events-none">3</text>
          <text x="760" y="255" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Komodo</text>
        </g>

        {/* STOP 4: Ubud */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(4)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(4)}>
          <ellipse cx="428" cy="258" rx="10" ry="3.2" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="428"
            cy="242"
            r="19"
            fill="none"
            stroke="#1FA79A"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 4 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="428"
            cy="242"
            r="13"
            fill="#1FA79A"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="428" y="246" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white pointer-events-none">4</text>
          <text x="428" y="216" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Ubud</text>
        </g>

        {/* STOP 5: Gili Air */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(5)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(5)}>
          <ellipse cx="500" cy="219" rx="9" ry="2.8" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="500"
            cy="205"
            r="16"
            fill="none"
            stroke="#FF6B4A"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 5 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="500"
            cy="205"
            r="11"
            fill="#FF6B4A"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="500" y="209" textAnchor="middle" className="font-mono font-bold text-[10px] fill-white pointer-events-none">5</text>
          <text x="500" y="180" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Gili Air</text>
        </g>

        {/* STOP 6: Kuta Lombok */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(6)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(6)}>
          <ellipse cx="516" cy="286" rx="10" ry="3.2" fill="#000" opacity="0.18" className="blur-[0.5px]" />
          <circle
            cx="516"
            cy="270"
            r="19"
            fill="none"
            stroke="#F2A23B"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 6 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
          <circle
            cx="516"
            cy="270"
            r="13"
            fill="#F2A23B"
            stroke="#fff"
            strokeWidth="2.5"
            className="transition-transform duration-200 origin-center group-hover:scale-110 active:scale-95"
            style={{ transformBox: "fill-box" }}
          />
          <text x="516" y="274" textAnchor="middle" className="font-mono font-bold text-[11px] fill-white pointer-events-none">6</text>
          <text x="562" y="274" textAnchor="middle" className="font-sans font-bold text-[12.5px] fill-[#1B2B24] stroke-[#FFF8EC] stroke-width-[4px] stroke-linejoin-round paint-order-stroke select-none pointer-events-none">Kuta Lombok</text>
        </g>

        {/* STOP 7: Rientro (Glowing circle around ROM and map connections) */}
        <g className="group cursor-pointer" onClick={() => onSelectStop(7)} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onSelectStop(7)}>
          <circle
            cx="50"
            cy="55"
            r="26"
            fill="none"
            stroke="#0E4D3C"
            strokeWidth="3"
            className={`transition-opacity duration-200 ${activeStopId === 7 ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
          />
        </g>
      </svg>
    </div>
  );
};
