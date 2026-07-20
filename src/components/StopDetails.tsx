import React, { useState } from "react";
import { StopItinerary, TransitSegment, HotelInfo, DayItinerary, Activity, SafetyNotice } from "../types";

interface StopDetailsProps {
  stop: StopItinerary;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

const ACCENT_STYLES = {
  gold: {
    solid: "#F2A23B",
    grad: "linear-gradient(135deg, #F2A23B, #DE7E1E)",
    badgeBg: "bg-[#F2A23B]/10",
    badgeText: "text-[#F2A23B]"
  },
  coral: {
    solid: "#FF6B4A",
    grad: "linear-gradient(135deg, #FF6B4A, #DE4E2E)",
    badgeBg: "bg-[#FF6B4A]/10",
    badgeText: "text-[#FF6B4A]"
  },
  jungle: {
    solid: "#15694F",
    grad: "linear-gradient(135deg, #1F8863, #0E4D3C)",
    badgeBg: "bg-[#15694F]/10",
    badgeText: "text-[#15694F]"
  },
  turquoise: {
    solid: "#1FA79A",
    grad: "linear-gradient(135deg, #2AC0B1, #127F74)",
    badgeBg: "bg-[#1FA79A]/10",
    badgeText: "text-[#1FA79A]"
  }
};

export const StopDetails: React.FC<StopDetailsProps> = ({
  stop,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    arrival: true,
    hotel: true,
    schedule: true,
    safety: true
  });
  const [activeModalActivity, setActiveModalActivity] = useState<Activity | null>(null);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCommonsImgUrl = (filename: string, width?: number) => {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}${
      width ? `?width=${width}` : ""
    }`;
  };

  const renderBoardingPass = (seg: TransitSegment, idx: number) => {
    return (
      <div key={idx} className="relative grid grid-cols-1 md:grid-cols-[1fr_120px] bg-white border-2 border-[#1B2B24] rounded-2xl overflow-visible shadow-sm">
        <div className="p-5 md:p-6 min-w-0">
          <div className="flex flex-wrap justify-between items-start gap-3">
            <div className="min-w-0">
              <span className="font-serif font-extrabold text-xl md:text-2xl text-[#0E4D3C] block break-words">
                {seg.route}
              </span>
              <span className="font-mono text-xs text-[#5B6E64] block mt-1">
                {seg.date}
              </span>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider bg-[#E9F3EC] text-[#0E4D3C] px-3 py-1.5 rounded-full font-bold">
              {seg.company}
            </span>
          </div>

          <div className="flex flex-wrap gap-6 mt-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5B6E64] block">Partenza</span>
              <span className="font-mono font-bold text-lg text-[#1B2B24] block mt-0.5">{seg.dep}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5B6E64] block">Arrivo</span>
              <span className="font-mono font-bold text-lg text-[#1B2B24] block mt-0.5">{seg.arr}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#5B6E64] block">Durata</span>
              <span className="font-mono font-bold text-lg text-[#1B2B24] block mt-0.5">{seg.duration}</span>
            </div>
          </div>

          {seg.note && (
            <p className="mt-4 text-xs text-[#5B6E64] border-t border-[#F7EDD9] pt-3 italic">
              {seg.note}
            </p>
          )}

          {seg.bookedVia && (
            <div className="mt-3 inline-flex flex-wrap items-center gap-1.5 bg-[#FFF8EC] border border-[#F7EDD9] rounded-full px-3.5 py-1 text-xs text-[#5B6E64]">
              🎟️ Prenotato con <b className="text-[#0E4D3C]">{seg.bookedVia}</b>
              {seg.bookingNote && <span className="opacity-75">· {seg.bookingNote}</span>}
            </div>
          )}
        </div>

        {/* Boarding Pass Stub */}
        <div className="border-t-2 md:border-t-0 md:border-l-2 border-dashed border-[#1B2B24] p-5 md:p-6 flex md:flex-col items-center justify-center gap-3 bg-[#FFF8EC] rounded-b-2xl md:rounded-b-none md:rounded-r-2xl min-w-[120px]">
          <span className="text-3xl">✈️</span>
          <span className="font-mono font-bold text-sm text-[#1B2B24] tracking-wide text-center uppercase break-all">
            {seg.flightNo}
          </span>
        </div>

        {/* Ticket Notch punches (Only visible on MD screens) */}
        <div className="hidden md:block absolute w-4.5 h-4.5 bg-[#FFF8EC] border-2 border-[#1B2B24] rounded-full -top-2.5 right-[110px]" style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)", transform: "rotate(180deg)" }} />
        <div className="hidden md:block absolute w-4.5 h-4.5 bg-[#FFF8EC] border-2 border-[#1B2B24] rounded-full -bottom-2.5 right-[110px]" style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }} />
      </div>
    );
  };

  const renderLuggageTag = (h: HotelInfo, idx: number) => {
    const mapLink = h.map
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.map)}`
      : "";

    return (
      <div
        key={idx}
        className="relative bg-gradient-to-br from-[#F7B95C] to-[#EF9A2E] text-[#402504] rounded-2xl p-6 pl-10 md:pl-12 shadow-md flex-1 min-w-[280px] border border-[#EF9A2E]"
      >
        {/* Hole Punch */}
        <div className="absolute left-3.5 top-6.5 w-4.5 h-4.5 bg-[#FFF8EC] border-2 border-[#402504] rounded-full" />

        <h4 className="font-serif font-extrabold text-xl md:text-2xl leading-tight">
          {h.name}
        </h4>
        <p className="text-xs md:text-sm text-[#402504]/80 font-medium mt-1">
          📍 {h.area}
        </p>

        <div className="grid grid-cols-3 gap-3 mt-5 border-t border-[#402504]/20 pt-4">
          <div>
            <span className="text-[9px] uppercase font-mono tracking-wider opacity-75">Check-in</span>
            <span className="font-mono font-bold text-xs md:text-sm block mt-0.5">{h.checkin}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase font-mono tracking-wider opacity-75">Check-out</span>
            <span className="font-mono font-bold text-xs md:text-sm block mt-0.5">{h.checkout}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase font-mono tracking-wider opacity-75">Durata</span>
            <span className="font-mono font-bold text-xs md:text-sm block mt-0.5">{h.nights}</span>
          </div>
        </div>

        {h.extra && (
          <p className="mt-4 text-xs opacity-90 border-t border-dashed border-[#402504]/20 pt-3">
            {h.extra}
          </p>
        )}

        {mapLink && (
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 font-mono text-xs font-bold border border-[#402504]/40 hover:bg-[#402504]/10 rounded-full px-4 py-1.5 transition-all duration-150"
          >
            📍 Indicazioni stradali
          </a>
        )}
      </div>
    );
  };

  const renderActivityCard = (act: Activity, idx: number) => {
    const isClickable = !!(act.images || act.facts);
    const googleMapLink = act.map
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.map)}`
      : "";

    if (!isClickable) {
      return (
        <div key={idx} className="flex gap-4 p-4 rounded-xl border border-dashed border-[#0E4D3C]/20 bg-white/40">
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-base text-[#1B2B24]">{act.name}</h5>
            <p className="text-xs md:text-sm text-[#5B6E64] mt-1 leading-relaxed">{act.blurb}</p>
          </div>
          {googleMapLink && (
            <a
              href={googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF8EC] border border-[#0E4D3C]/20 text-[#0E4D3C] text-sm hover:bg-[#0E4D3C] hover:text-white transition-all duration-150 self-center"
              title="Mappa"
            >
              📍
            </a>
          )}
        </div>
      );
    }

    return (
      <div
        key={idx}
        onClick={() => setActiveModalActivity(act)}
        className="flex flex-col sm:flex-row bg-white border border-[#0E4D3C]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all duration-200"
      >
        {act.images && act.images[0] && (
          <img
            src={getCommonsImgUrl(act.images[0], 350)}
            alt={act.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full sm:w-32 h-36 sm:h-auto object-cover bg-[#E9F3EC] shrink-0"
          />
        )}
        <div className="p-4 flex-1 flex gap-4 min-w-0">
          <div className="flex-1 min-w-0">
            <h5 className="font-bold text-base text-[#1B2B24] group-hover:text-[#0E4D3C] transition-colors">
              {act.name}
            </h5>
            <p className="text-xs md:text-sm text-[#5B6E64] mt-1 leading-relaxed line-clamp-2 md:line-clamp-3">
              {act.blurb}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FF6B4A] bg-[#FF6B4A]/10 px-2.5 py-1 rounded-full">
              🔎 Foto & curiosità
            </span>
          </div>

          {googleMapLink && (
            <a
              href={googleMapLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF8EC] border border-[#0E4D3C]/20 text-[#0E4D3C] text-sm hover:bg-[#0E4D3C] hover:text-white transition-all duration-150 self-center"
              title="Apri in Google Maps"
            >
              📍
            </a>
          )}
        </div>
      </div>
    );
  };

  const renderDayItem = (day: DayItinerary, idx: number) => {
    return (
      <div key={idx} className="bg-[#E9F3EC]/55 border border-[#0E4D3C]/5 rounded-2xl p-4 md:p-5 space-y-4 shadow-sm">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-mono font-bold text-xs bg-white text-[#0E4D3C] border border-[#0E4D3C]/10 px-3 py-1.5 rounded-lg shadow-sm">
            {day.dd}
          </span>
          <span className="font-bold text-base md:text-lg text-[#1B2B24]">
            {day.title}
          </span>
        </div>

        <details className="group border-l-2 border-[#F2A23B] pl-4.5 py-1 text-sm text-[#5B6E64] leading-relaxed">
          <summary className="list-none flex items-center gap-1.5 cursor-pointer font-mono font-bold text-[10.5px] uppercase tracking-wider text-[#0E4D3C]/70 hover:text-[#0E4D3C] select-none">
            <span className="transition-transform duration-150 group-open:rotate-90">▶</span> Anteprima della giornata
          </summary>
          <p className="mt-2 text-xs md:text-sm leading-relaxed italic">{day.trailer}</p>
        </details>

        <div className="space-y-3 pt-1">
          {day.activities.map(renderActivityCard)}
        </div>
      </div>
    );
  };

  const renderSafetyNotice = (saf: SafetyNotice, idx: number) => {
    const borderColors = {
      critical: "border-l-4 border-l-[#FF6B4A] bg-[#FFF6F3] text-[#DE4E2E]",
      warn: "border-l-4 border-l-[#F2A23B] bg-[#FFFDF7] text-[#1B2B24]",
      info: "border-l-4 border-l-[#1FA79A] bg-[#F7FCFB] text-[#1B2B24]"
    };

    return (
      <div key={idx} className={`p-4 rounded-xl border border-[#F7EDD9] ${borderColors[saf.lvl]} flex gap-3.5 items-start`}>
        <span className="text-xl leading-none mt-0.5 select-none">{saf.ico}</span>
        <div className="min-w-0">
          <h6 className={`font-bold text-sm ${saf.lvl === "critical" ? "text-[#DE4E2E]" : "text-[#1B2B24]"}`}>
            {saf.t}
          </h6>
          <p
            className="text-xs md:text-sm text-[#5B6E64] mt-1 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: saf.b }}
          />
        </div>
      </div>
    );
  };

  const style = ACCENT_STYLES[stop.accent];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-[#F7EDD9]">
      {/* Header */}
      <div className="p-8 md:p-10 text-white relative overflow-hidden" style={{ background: style.grad }}>
        <div className="absolute -right-10 -top-10 w-44 h-44 bg-white/5 rounded-full pointer-events-none" />
        <span className="font-serif italic font-bold text-sm md:text-base opacity-85 uppercase tracking-wide">
          Tappa {stop.num} / 07
        </span>
        <h3 className="font-serif text-3xl md:text-5xl font-extrabold mt-2 tracking-tight">
          {stop.name}
        </h3>
        <p className="text-sm md:text-base opacity-85 mt-1 font-medium font-sans">
          {stop.region}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-xs">
            <span className="text-[10px] uppercase font-mono tracking-wider opacity-75">Date</span>
            <b className="block font-mono text-sm mt-0.5">{stop.dates}</b>
          </div>
          <div className="bg-white/15 border border-white/20 rounded-xl px-4 py-2.5 backdrop-blur-xs">
            <span className="text-[10px] uppercase font-mono tracking-wider opacity-75">Notti</span>
            <b className="block font-mono text-sm mt-0.5">{stop.nights || "—"}</b>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 md:p-10 space-y-6">
        {/* Arrival (Ferry/Flight Passes) */}
        {!stop.isReturn && stop.arrival && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.arrival}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("arrival"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">✈️</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  {stop.arrival.label}
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-4">
                {stop.arrival.segments.map((seg, idx) => renderBoardingPass(seg, idx))}
              </div>
              {stop.arrival.footNote && (
                <p className="text-xs md:text-sm text-[#5B6E64] italic pl-1 leading-relaxed">
                  {stop.arrival.footNote}
                </p>
              )}
            </div>
          </details>
        )}

        {/* Departure for Return Stop */}
        {stop.isReturn && stop.legOut && stop.legs && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.arrival}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("arrival"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">✈️</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  Come si parte & voli di rientro
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="space-y-5 pt-4">
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-[#5B6E64]">Volo domestico</span>
                {renderBoardingPass(stop.legOut, 99)}
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-[#5B6E64]">Rientro internazionale · via Jeddah</span>
                {stop.legs.map((seg, idx) => renderBoardingPass(seg, idx))}
              </div>
            </div>
          </details>
        )}

        {/* Hotel Info */}
        {!stop.isReturn && stop.hotel && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.hotel}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("hotel"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🏨</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  Dove si dorme
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="pt-4 flex flex-wrap gap-4">
              {renderLuggageTag(stop.hotel, 0)}
            </div>
          </details>
        )}

        {/* Transit Hotel for Return */}
        {stop.isReturn && stop.transitHotel && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.hotel}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("hotel"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🏨</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  Dove si dorme · scalo a Jeddah
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="pt-4 flex flex-wrap gap-4">
              {renderLuggageTag(stop.transitHotel, 0)}
            </div>
          </details>
        )}

        {/* Schedule */}
        {stop.days && stop.days.length > 0 && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.schedule}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("schedule"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🗺️</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  Cosa fare
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="space-y-4 pt-4">
              {stop.days.map((day, idx) => renderDayItem(day, idx))}
            </div>
          </details>
        )}

        {/* Practical tips bar */}
        {stop.tips && (
          <div className="border-l-4 border-[#1FA79A] bg-[#DFF4F1]/40 p-4 rounded-r-2xl text-xs md:text-sm text-[#0B4A44] leading-relaxed">
            <b className="text-[#1FA79A]">Nota pratica.</b> {stop.tips}
          </div>
        )}

        {/* Safety Accortezze */}
        {stop.safety && stop.safety.length > 0 && (
          <details className="group border-b border-[#F7EDD9] pb-5" open={openSections.safety}>
            <summary
              onClick={(e) => { e.preventDefault(); toggleSection("safety"); }}
              className="list-none flex items-center justify-between cursor-pointer py-1.5 select-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🛡️</span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#0E4D3C] font-bold">
                  Accortezze di tappa
                </span>
              </div>
              <span className="text-[#0E4D3C] font-extrabold transition-transform duration-200 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="space-y-3 pt-4">
              {stop.safety.map((saf, idx) => renderSafetyNotice(saf, idx))}
            </div>
          </details>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-between items-center gap-4 pt-4">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`flex-1 py-3.5 px-5 rounded-xl border border-[#F7EDD9] bg-white flex items-center gap-2 text-left cursor-pointer transition-all ${
              hasPrev
                ? "hover:border-[#0E4D3C] hover:bg-[#E9F3EC]/20"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <span className="text-[#FF6B4A] font-bold text-lg">←</span>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#5B6E64] block">Tappa Precedente</span>
              <span className="font-bold text-xs md:text-sm text-[#1B2B24] block mt-0.5">Indietro</span>
            </div>
          </button>

          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`flex-1 py-3.5 px-5 rounded-xl border border-[#F7EDD9] bg-white flex items-center justify-end gap-2 text-right cursor-pointer transition-all ${
              hasNext
                ? "hover:border-[#0E4D3C] hover:bg-[#E9F3EC]/20"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#5B6E64] block">Tappa Successiva</span>
              <span className="font-bold text-xs md:text-sm text-[#1B2B24] block mt-0.5">Avanti</span>
            </div>
            <span className="text-[#FF6B4A] font-bold text-lg">→</span>
          </button>
        </div>
      </div>

      {/* Activity detailed view Modal popup */}
      {activeModalActivity && (
        <div
          onClick={() => setActiveModalActivity(null)}
          className="fixed inset-0 bg-[#0B3F31]/75 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#F7EDD9]"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalActivity(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/45 hover:bg-black/65 text-white font-bold flex items-center justify-center cursor-pointer transition-colors z-10"
            >
              ✕
            </button>

            {/* Photo Slideshow / Gallery */}
            {activeModalActivity.images && activeModalActivity.images.length > 0 && (
              <div className="bg-[#E9F3EC]">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
                  {activeModalActivity.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={getCommonsImgUrl(img, 700)}
                      alt={activeModalActivity.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-64 md:h-80 object-cover snap-start shrink-0"
                    />
                  ))}
                </div>
                {activeModalActivity.images.length > 1 && (
                  <div className="text-center font-mono text-[10px] text-[#5B6E64] py-1.5 border-t border-[#F7EDD9]">
                    ← scorri di lato per vedere altre foto →
                  </div>
                )}
              </div>
            )}

            <div className="p-6 md:p-8 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF6B4A] bg-[#FF6B4A]/10 px-2.5 py-1 rounded-full font-bold">
                Approfondimento e Curiosità
              </span>
              <h4 className="font-serif font-extrabold text-2xl text-[#0E4D3C] tracking-tight">
                {activeModalActivity.name}
              </h4>
              <p className="text-sm text-[#5B6E64] leading-relaxed">
                {activeModalActivity.blurb}
              </p>

              {activeModalActivity.facts && activeModalActivity.facts.length > 0 && (
                <div className="space-y-2.5 border-t border-[#F7EDD9] pt-4 mt-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#5B6E64]/80 block font-bold">
                    💡 Lo Sapevi Che?
                  </span>
                  <ul className="space-y-2">
                    {activeModalActivity.facts.map((fact, factIdx) => (
                      <li key={factIdx} className="text-xs md:text-sm text-[#1B2B24] flex gap-2.5 items-start leading-relaxed">
                        <span className="text-[#F2A23B] mt-0.5">✦</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeModalActivity.map && (
                <div className="pt-4 border-t border-[#F7EDD9]">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeModalActivity.map)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-[#0E4D3C] text-white hover:bg-[#15694F] rounded-full px-5 py-2 transition-all duration-150 shadow-sm"
                  >
                    📍 Trova su Google Maps
                  </a>
                </div>
              )}

              {activeModalActivity.images && (
                <div className="text-[10px] text-[#5B6E64]/60 text-right">
                  Fonte foto: Wikimedia Commons
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
