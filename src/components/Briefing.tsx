import React, { useState } from "react";

export const Briefing: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section id="briefingSection" className="mt-12">
      <div className="bg-[#0E4D3C] text-[#FFF8EC] rounded-3xl overflow-hidden shadow-xl border border-[#15694F]">
        <div className="p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-16 w-48 h-48 bg-[#F2A23B] opacity-15 rounded-full pointer-events-none" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#F2A23B] font-bold">
            🛡️ Briefing generale
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-2">
            Prima di partire, e una volta là
          </h2>
          <p className="text-sm md:text-base text-[#FFF8EC]/75 max-w-2xl leading-relaxed">
            Documenti, farmacia da viaggio, regole di comportamento e numeri utili.
            Fonte principale: scheda Indonesia di <b>viaggiaresicuri.it</b> (Unità di Crisi, Ministero degli Esteri),
            integrata con fonti sanitarie e allerte vulcaniche aggiornate.
          </p>
        </div>

        <div className="px-4 md:px-8 pb-8 space-y-3">
          {/* Section 1: Documenti */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("docs")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">📄</span> Documenti e ingresso
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "docs" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "docs" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-3">
                <div className="border-l-4 border-[#FF6B4A] bg-[#FF6B4A]/10 p-3 rounded-r-lg text-[#FFD8CE]">
                  <b>La trappola più insidiosa:</b> ci sono stati casi di turisti <b>italiani respinti</b> perché l'immigrazione ha contestato l'integrità del libretto del passaporto. Controllate <b>oggi</b> entrambi i passaporti: nessuno strappo o taglio, <b>nessuna scollatura</b> (soprattutto vicino alla copertina), pagina con foto e dati perfettamente leggibile, nessun segno o macchia su foto e codice a barre, nessuna pagina rimossa.
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Passaporto:</b> almeno <b>6 mesi</b> di validità residua e <b>due pagine bianche</b>. Requisito tassativo, nessuna eccezione.</li>
                  <li><b>e-VOA (visto):</b> online su <a href="https://evisa.imigrasi.go.id" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">evisa.imigrasi.go.id</a> circa una settimana prima della partenza. IDR 500.000, valido 30 giorni. Serve anche un biglietto di ritorno o proseguimento.</li>
                  <li><b>Dichiarazione doganale elettronica:</b> da compilare <b>non prima di 3 giorni</b> dall'arrivo su <a href="https://allindonesia.imigrasi.go.id" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">allindonesia.imigrasi.go.id</a></li>
                  <li><b>Tassa turistica Bali:</b> IDR 150.000 a testa, dovuta anche arrivando dal resto dell'Indonesia — vale per voi il 3/08 da Labuan Bajo. Si paga su <a href="https://lovebali.baliprov.go.id" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">lovebali.baliprov.go.id</a>, si riceve un QR: salvatelo offline. <b>Spegnete la VPN e gli ad-blocker</b>, o il portale fallisce. L'unico dominio ufficiale finisce in <b>.go.id</b>: esistono cloni che fanno pagare il doppio.</li>
                  <li><b>Registrate il viaggio</b> su <a href="https://www.dovesiamonelmondo.it" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">dovesiamonelmondo.it</a> o con l'app <b>Viaggiare Sicuri</b>, e segnalate la presenza a consolare.jakarta@esteri.it con generalità, periodo e recapiti.</li>
                  <li>Portate <b>sempre il passaporto</b> con voi: ci sono stati fermi in cella fino a identificazione per chi ne era sprovvisto.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 2: Farmacia */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("pharmacy")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">💊</span> Farmacia da viaggio
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "pharmacy" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "pharmacy" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-3">
                <p>La logica: alle Gili e a Komodo le farmacie sono poche e voi cambiate isola ogni pochi giorni. Quello che vi serve per gestire eventuali imprevisti:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs md:text-sm my-2 text-left">
                    <thead>
                      <tr className="border-b border-[#FFF8EC]/20 text-[#F2A23B]">
                        <th className="py-2 pr-4 font-bold">Farmaco/Sussidio</th>
                        <th className="py-2 font-bold">Utilizzo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#FFF8EC]/10">
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Sali reidratanti</td><td className="py-2">Il più importante: contro il Bali belly il rischio vero è la disidratazione, non la diarrea in sé</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Loperamide (Imodium)</td><td className="py-2">Sintomatico, per quando dovete prendere un volo o il traghetto</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Fermenti lattici</td><td className="py-2">Aiutano a riequilibrare la flora intestinale durante il viaggio</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Paracetamolo + ibuprofen</td><td className="py-2">Febbre, dolori, post-Batur</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Antistaminico</td><td className="py-2">Punture e reazioni allergiche</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Repellente (DEET/icaridina)</td><td className="py-2">La dengue è endemica: è la difesa principale</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Disinfettante, cerotti, garze</td><td className="py-2">Ferite da corallo e scogli alle Gili</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Gel mani alcolico</td><td className="py-2">Prevenzione diretta</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">SPF 50+</td><td className="py-2">Sole equatoriale indonesiano</td></tr>
                      <tr><td className="py-2 pr-4 font-bold text-[#FFF8EC]">Antibiotico</td><td className="py-2">Solo se prescritto preventivamente dal vostro medico, per i casi seri</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="border-l-4 border-[#FF6B4A] bg-[#FF6B4A]/10 p-3 rounded-r-lg text-[#FFD8CE] my-3">
                  <b>Farmaci vietati:</b> in Indonesia molti farmaci da prescrizione come <b>codeina, sonniferi e trattamenti per l'ADHD sono illegali</b>. Per <b>ansiolitici e benzodiazepine</b> serve un documento ufficiale con prescrizione e dosaggio <b>in inglese</b>. Se qualcuno di voi due li usa abitualmente, portate quel documento.
                </div>

                <p><b>Malaria — merita una telefonata alla ASL.</b> Viaggiare Sicuri elenca come endemiche le province orientali e <b>Lombok</b>: due delle vostre tappe. Ma le Gili e le zone turistiche come Kuta Lombok sono considerate a rischio molto basso, e per Komodo e Flores la maggior parte dei viaggiatori non prende profilassi (Komodo è secca quasi tutto l'anno, pochissime zanzare). Le fonti divergono: il CDC classifica le Gili come 'nessun rischio', altri database specialistici consigliano le pastiglie. <b>Portate l'itinerario preciso a un centro di medicina dei viaggi</b> e fatevelo dire da loro.</p>
                <p><b>Rabbia.</b> A Bali il vaccino antirabbico post-esposizione è spesso difficile da reperire negli ospedali per costo e scarsa disponibilità — le cliniche private di Ubud lo tengono in stock. Vedi le accortezze della tappa di Ubud per cosa fare in caso di morso o graffio.</p>
              </div>
            )}
          </div>

          {/* Section 3: Acqua e Cibo */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("food")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">💧</span> Acqua e cibo
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "food" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "food" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Solo <b>acqua in bottiglia sigillata</b>, mai dal rubinetto — <b>anche per lavarvi i denti</b>.</li>
                  <li><b>Niente ghiaccio</b>, a meno che i cubetti non siano <b>bucati al centro</b>: significa che è industriale, prodotto con acqua filtrata.</li>
                  <li>Lavare frutta e verdura con disinfettanti (amuchina o bicarbonato, reperibili in loco). Meglio evitare crudo, buffet scoperti e frutta non sbucciata.</li>
                  <li>Come scegliere dove mangiare: locali con <b>buon ricambio di clienti</b>, cucina visibile, cibo cotto al momento e servito caldo.</li>
                </ul>
                <div className="border-l-4 border-[#1FA79A] bg-[#1FA79A]/10 p-3 rounded-r-lg text-[#DFF4F1]">
                  <b>Se arriva il Bali belly:</b> riposo, idratazione profonda con sali minerali, dieta leggera (riso in bianco, banane, zuppe). Ma con <b>febbre alta, sangue nelle feci o sintomi oltre le 48 ore</b> → contattare subito un medico o l'assistenza Heymondo.
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Comportamento */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("behavior")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">🙏</span> Regole di comportamento
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "behavior" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "behavior" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-3">
                <p><b>Effusioni in pubblico.</b> La Farnesina è esplicita: le effusioni amorose in pubblico possono essere sanzionate. Parliamo di buon senso, non di rinunciare a tenersi per mano — ma baci e abbracci prolungati vanno tenuti per gli spazi privati. Il livello di tolleranza cambia molto da zona a zona: trovate la nota specifica dentro ogni tappa.</p>
                <p><b>Nei templi:</b> sarong e spalle coperte (noleggio o vendita al cancello per IDR 10.000–20.000). <b>Mai calpestare i canang sari</b>, le offerte di fiori a terra: girateci intorno. Donne durante il ciclo fuori dalle aree sacre (convinzione locale molto sentita).</p>
                <p><b>Regole ufficiali di Bali</b> (Circolare del Governatore SE n. 7/2025): vietato arrampicarsi su alberi sacri o monumenti, scattare foto inappropriate o nude nei siti religiosi, gettare rifiuti in laghi/fiumi/mare, plastica monouso, comportamenti aggressivi verso locali o altri turisti. C'è una task force apposita: le violazioni gravi portano a <b>deportazione immediata e blacklist</b>, non ad avvertimenti o scuse.</p>
                <p><b>Soldi:</b> cambiare solo presso money changer autorizzati con sigilli ufficiali, e <b>ricontare i contanti davanti all'operatore prima di uscire</b> — le frodi di destrezza sono frequenti. Mai perdere di vista la carta di credito per evitare clonazioni.</p>
              </div>
            )}
          </div>

          {/* Section 5: I tre rischi */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("risks")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">⚠️</span> I tre rischi trasversali
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "risks" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "risks" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-4">
                <div>
                  <h4 className="font-bold text-[#FF6B4A]">🍸 1. Metanolo — il più serio</h4>
                  <p className="mt-1">
                    In Indonesia si registrano <b>decessi e danni permanenti</b> (coma, convulsioni, cecità, danni al sistema nervoso) da alcolici contenenti metanolo per distillazione inadeguata o contraffazione. I casi si sono verificati proprio nelle zone turistiche di <b>Bali, Lombok e Gili</b> — tutte vostre tappe. Bande criminali producono repliche contraffatte di marche famose. Le bevande interessate: l'<b>Arak</b> (liquore di riso o zucchero di palma), cocktail e superalcolici contraffatti (l'Arak viene spesso usato nei locali per allungare i superalcolici per risparmiare).
                    <br />
                    <b>Regole pratiche:</b> ordinate solo in locali e hotel rinomati, consumate bevande con sigilli intatti, controllate le etichette per errori ortografici. <b>Sintomi di avvelenamento:</b> confusione, vertigini, sonnolenza o forte stanchezza, vomito, <b>alterazioni della vista</b> (visione offuscata, difficoltà con le luci intense), dolori addominali e muscolari. <b>In sostanza: bevete birra (Bintang) in bottiglia sigillata aperta davanti a voi, e lasciate perdere i cocktail nei baretti economici.</b>
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#FF6B4A]">🥤 2. Spiking (Droghe da stupro)</h4>
                  <p className="mt-1">
                    Segnalati casi di somministrazione involontaria di sostanze stupefacenti a fini di rapina o stupro a <b>Bali, Lombok e Gili</b>. Attenzione durante la preparazione delle bevande, non lasciate mai i drink incustoditi e non accettateli da sconosciuti.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#FF6B4A]">🛵 3. Scippi e sicurezza notturna</h4>
                  <p className="mt-1">
                    Borseggi condotti <b>da uomini in motorino ai danni di donne straniere</b> nelle ore serali, specialmente vicino ai locali notturni di Bali e Lombok sud. Prendete solo taxi di compagnie registrate (Bluebird) o usate app ufficiali (Grab, Gojek) verificando targa e autista. <b>In caso di rapina, non opporre mai resistenza fisica.</b>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 6: Assicurazione */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("insurance")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">🏥</span> Assicurazione e sanità
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "insurance" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "insurance" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-3">
                <div className="border-l-4 border-[#FF6B4A] bg-[#FF6B4A]/10 p-3 rounded-r-lg text-[#FFD8CE]">
                  Gli stranieri in Indonesia <b>non godono di alcuna forma di assistenza sanitaria pubblica</b>. E — indipendentemente dalla gravità delle condizioni del paziente — <b>l'assistenza privata non viene erogata senza previo pagamento anticipato o garanzia scritta della polizza</b>.
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Il livello delle strutture pubbliche non è paragonabile agli standard occidentali.</li>
                  <li>I costi in clinica privata per turisti sono elevatissimi: <b>alcuni interventi superano i 100.000 euro</b>.</li>
                  <li>Nelle zone remote l'evacuazione medica d'urgenza può costare <b>decine di migliaia di euro</b>.</li>
                  <li>Per emergenze salvavita o chirurgie gravi è altamente consigliabile rivolgersi alle strutture d'eccellenza di <b>Singapore</b> (voli frequenti, meno di 2 ore).</li>
                  <li>Camere iperbariche solo a <b>Giava e Bali</b>.</li>
                </ul>
                <p><b>La vostra polizza Heymondo (HEY2203579) è eccellente:</b> copre evacuazione, rimpatrio e spese dirette. Ricordatevi di contattare la centrale operativa prima di effettuare pagamenti o visite, tranne per emergenze assolute dove l'ospedale deve contattarla.</p>
              </div>
            )}
          </div>

          {/* Section 7: Numeri Utili */}
          <div className="rounded-xl overflow-hidden bg-[#FFF8EC]/5 border border-[#FFF8EC]/10">
            <button
              onClick={() => toggleSection("contacts")}
              className="w-full text-left p-4 md:p-5 font-bold text-base md:text-lg flex items-center justify-between hover:bg-[#FFF8EC]/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">📞</span> Numeri e contatti utili
              </span>
              <span className={`text-[#F2A23B] transition-transform duration-200 ${openSection === "contacts" ? "rotate-90" : ""}`}>
                ▶
              </span>
            </button>
            {openSection === "contacts" && (
              <div className="p-5 border-t border-[#FFF8EC]/10 text-sm leading-relaxed text-[#FFF8EC]/85 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#FFF8EC]/10 p-3 rounded-lg text-center">
                    <span className="font-mono text-xl font-bold text-[#F2A23B]">119</span>
                    <p className="text-[11px] uppercase mt-1 text-[#FFF8EC]/70">Emergenze Sanitarie</p>
                  </div>
                  <div className="bg-[#FFF8EC]/10 p-3 rounded-lg text-center">
                    <span className="font-mono text-xl font-bold text-[#F2A23B]">110</span>
                    <p className="text-[11px] uppercase mt-1 text-[#FFF8EC]/70">Polizia</p>
                  </div>
                  <div className="bg-[#FFF8EC]/10 p-3 rounded-lg text-center">
                    <span className="font-mono text-xl font-bold text-[#F2A23B]">113</span>
                    <p className="text-[11px] uppercase mt-1 text-[#FFF8EC]/70">Vigili del Fuoco</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p>
                    <b>Ambasciata d'Italia a Jakarta</b>
                    <br />
                    Jalan Diponegoro 45, Menteng — tel. +62 21 319 374 45
                    <br />
                    Email: <a href="mailto:consolare.jakarta@esteri.it" className="underline text-[#8FE3D6]">consolare.jakarta@esteri.it</a>
                  </p>
                  <p className="border-l-4 border-[#FF6B4A] bg-[#FF6B4A]/10 p-3 rounded-r-lg text-[#FFD8CE]">
                    <b>Cellulare di emergenza dell'Ambasciata</b> (solo emergenze reali: incidenti, arresti, calamità):
                    <br />
                    Dall'Indonesia: <b>08151811344</b> — dall'Italia: +62 815 181 1344
                    <br />
                    Attivo negli orari di chiusura: lun–gio 18:30–22:00, ven 15:30–22:00, sab/dom/festivi 08:30–22:00.
                  </p>
                  <p className="text-xs text-[#FFF8EC]/60">
                    *Il <b>Consolato Onorario a Bali è attualmente vacante</b>: l'unico riferimento istituzionale per l'intera Indonesia è l'Ambasciata a Jakarta.
                  </p>
                  <p>
                    <b>Monitoraggio vulcani in tempo reale:</b> <a href="https://magma.esdm.go.id" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">magma.esdm.go.id</a>
                    <br />
                    <b>Scheda paese Viaggiare Sicuri:</b> <a href="https://www.viaggiaresicuri.it/find-country/country/IDN" target="_blank" rel="noopener noreferrer" className="underline text-[#8FE3D6]">viaggiaresicuri.it</a>
                  </p>
                  <p className="text-xs italic text-[#FFF8EC]/70 border-t border-[#FFF8EC]/10 pt-2">
                    In caso di richieste improprie di denaro da parte di agenti locali (segnalati rari casi per la registrazione di denunce a Bali/Lombok), segnalare subito l'accaduto via email a Jakarta indicando distretto e targa dell'agente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
