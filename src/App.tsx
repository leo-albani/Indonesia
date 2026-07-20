import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { STOPS_DATA } from "./data";
import { Map } from "./components/Map";
import { StopDetails } from "./components/StopDetails";
import { Briefing } from "./components/Briefing";
import { PackingList } from "./components/PackingList";

export default function App() {
  const [activeTab, setActiveTab] = useState<"itinerary" | "packing" | "briefing">("itinerary");
  const [activeStopId, setActiveStopId] = useState<number>(1);
  const [countdownText, setCountdownText] = useState<string>("");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState<boolean>(false);
  const [showIosTip, setShowIosTip] = useState<boolean>(false);

  // Countdown calculations
  useEffect(() => {
    const targetDate = new Date("2026-07-25T06:00:00+08:00").getTime(); // Departure time approximate

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdownText("In viaggio! 🇮🇩✈️");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setCountdownText(`Partenza in ${days}g ${hours}o ⏳`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  // Listen for installation trigger
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect iOS
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    if (isIos && !isStandalone) {
      setShowIosTip(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const activeStop = STOPS_DATA.find((s) => s.id === activeStopId) || STOPS_DATA[0];

  const handlePrevStop = () => {
    if (activeStopId > 1) {
      setActiveStopId(activeStopId - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextStop = () => {
    if (activeStopId < STOPS_DATA.length) {
      setActiveStopId(activeStopId + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EC] text-[#1B2B24] font-sans pb-28">
      {/* Top Header Panel */}
      <header className="sticky top-0 z-40 bg-[#FFF8EC]/95 backdrop-blur-md border-b border-[#F7EDD9] py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0E4D3C] text-[#FFF8EC] font-serif font-extrabold flex items-center justify-center text-lg shadow-sm border border-[#15694F]">
            ID
          </div>
          <div>
            <h1 className="font-serif font-extrabold text-lg md:text-xl text-[#0E4D3C] tracking-tight leading-none">
              Indonesia 2026
            </h1>
            <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-[#FF6B4A] block mt-1">
              Leo & Eli Itinerary
            </span>
          </div>
        </div>

        {/* Live Trip Tracker Badge */}
        <div className="bg-[#FFF1DC] border border-[#FCDCB0] text-[#BC7012] font-mono text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
          {countdownText}
        </div>
      </header>

      {/* Hero Header Section */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-6">
        <div className="bg-gradient-to-r from-[#0E4D3C] to-[#15694F] text-[#FFF8EC] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg border border-[#15694F]">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#F2A23B] opacity-10 rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F2A23B] font-extrabold">
              🎒 25 Luglio - 11 Agosto 2026
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight">
              La Grande Avventura
            </h2>
            <p className="text-sm md:text-base text-[#FFF8EC]/80 leading-relaxed font-serif italic">
              "Dai templi di Giava ai draghi di Komodo, fino alla quiete delle Gili e al surf di Kuta Lombok. Tutto quello che ci serve, salvato offline in tasca."
            </p>
          </div>
        </div>
      </div>

      {/* Main Dynamic View Area */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "itinerary" && (
            <motion.div
              key="itinerary-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Interactive Vector Map */}
              <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                  <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#5B6E64] font-extrabold">
                    🗺️ Mappa interattiva delle tappe
                  </span>
                  <span className="text-xs text-[#5B6E64]/80 italic">
                    Tocca una tappa per visualizzare i dettagli
                  </span>
                </div>
                <Map
                  activeStopId={activeStopId}
                  onSelectStop={(id) => {
                    setActiveStopId(id);
                    // Smooth scroll down to stop details if on small screens
                    const detailsEl = document.getElementById("selectedStopDetails");
                    if (detailsEl) {
                      detailsEl.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
              </div>

              {/* Selected Stop detailed Schedule */}
              <div id="selectedStopDetails" className="scroll-mt-6">
                <StopDetails
                  stop={activeStop}
                  onPrev={handlePrevStop}
                  onNext={handleNextStop}
                  hasPrev={activeStopId > 1}
                  hasNext={activeStopId < STOPS_DATA.length}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "packing" && (
            <motion.div
              key="packing-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <PackingList />
            </motion.div>
          )}

          {activeTab === "briefing" && (
            <motion.div
              key="briefing-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Briefing />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* PWA Android Install Banner */}
      {showInstallBanner && (
        <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white border-2 border-[#0E4D3C] text-[#1B2B24] rounded-2xl p-4 shadow-2xl z-50 animate-bounce flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📲</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-[#0E4D3C]">Installa l'App offline!</h4>
              <p className="text-xs text-[#5B6E64] mt-0.5">Accedi all'itinerario, alle mappe e alla valigia anche senza internet durante i voli o sulle isole.</p>
            </div>
            <button onClick={() => setShowInstallBanner(false)} className="text-xs font-bold text-[#5B6E64] p-1">
              ✕
            </button>
          </div>
          <button
            onClick={handleInstallClick}
            className="w-full bg-[#0E4D3C] hover:bg-[#15694F] text-white text-xs font-mono font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Aggiungi alla schermata home
          </button>
        </div>
      )}

      {/* iOS Install Prompt Helper banner */}
      {showIosTip && (
        <div className="fixed bottom-24 left-4 right-4 bg-[#0E4D3C] border border-[#15694F] text-white rounded-2xl p-4 shadow-2xl z-50 flex flex-col gap-2.5 animate-slide-up">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#F2A23B] font-bold">📲 Installa su iPhone / Safari</span>
            <button onClick={() => setShowIosTip(false)} className="text-xs font-bold text-white/70 p-0.5">✕</button>
          </div>
          <p className="text-xs text-[#FFF8EC]/90 leading-relaxed">
            Per salvare l'app sul tuo iPhone ed usarla 100% offline: premi il pulsante di condivisione <span className="font-bold text-[#F2A23B]">Condividi 📤</span> in basso su Safari, poi seleziona <span className="font-bold text-[#F2A23B]">Aggiungi alla schermata Home ➕</span>.
          </p>
        </div>
      )}

      {/* Sticky Bottom Navigation Bar (Optimized for Mobile thumb accessibility) */}
      <nav className="fixed bottom-0 inset-x-0 bg-[#FFF8EC]/90 backdrop-blur-md border-t border-[#F7EDD9] py-3.5 px-6 md:px-12 z-40 flex justify-around max-w-5xl mx-auto rounded-t-3xl shadow-lg">
        <button
          onClick={() => setActiveTab("itinerary")}
          className={`flex flex-col items-center gap-1.5 transition-all duration-150 cursor-pointer ${
            activeTab === "itinerary" ? "text-[#0E4D3C] font-extrabold scale-105" : "text-[#5B6E64]/75 hover:text-[#0E4D3C]"
          }`}
        >
          <span className="text-xl md:text-2xl">🗺️</span>
          <span className="text-[10px] md:text-xs font-mono tracking-wide uppercase">Itinerario</span>
        </button>

        <button
          onClick={() => setActiveTab("packing")}
          className={`flex flex-col items-center gap-1.5 transition-all duration-150 cursor-pointer ${
            activeTab === "packing" ? "text-[#0E4D3C] font-extrabold scale-105" : "text-[#5B6E64]/75 hover:text-[#0E4D3C]"
          }`}
        >
          <span className="text-xl md:text-2xl">🎒</span>
          <span className="text-[10px] md:text-xs font-mono tracking-wide uppercase">Valigia</span>
        </button>

        <button
          onClick={() => setActiveTab("briefing")}
          className={`flex flex-col items-center gap-1.5 transition-all duration-150 cursor-pointer ${
            activeTab === "briefing" ? "text-[#0E4D3C] font-extrabold scale-105" : "text-[#5B6E64]/75 hover:text-[#0E4D3C]"
          }`}
        >
          <span className="text-xl md:text-2xl">🛡️</span>
          <span className="text-[10px] md:text-xs font-mono tracking-wide uppercase">Briefing</span>
        </button>
      </nav>
    </div>
  );
}
