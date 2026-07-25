import React, { useState, useEffect } from "react";

// Helper functions
const mapLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const commonsImg = (filename: string, width?: number) => 
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}${width ? '?width=' + width : ''}`;

// Accent colors
const ACCENTS: { [key: string]: { solid: string; dark: string; grad: string } } = {
  gold:      { solid: '#F2A23B', dark: '#0E4D3C', grad: 'linear-gradient(135deg,#F2A23B,#DE7E1E)' },
  coral:     { solid: '#FF6B4A', dark: '#0E4D3C', grad: 'linear-gradient(135deg,#FF6B4A,#DE4E2E)' },
  jungle:    { solid: '#15694F', dark: '#0E4D3C', grad: 'linear-gradient(135deg,#1F8863,#0E4D3C)' },
  turquoise: { solid: '#1FA79A', dark: '#0E4D3C', grad: 'linear-gradient(135deg,#2AC0B1,#127F74)' },
};

// Stops Data
const stops = [
  {
    id: 1, num: '01', name: 'Jakarta', region: 'Tangerang, Giava — porta d\'ingresso',
    dates: '27 – 29 luglio', nights: 2, accent: 'gold',
    arrival: {
      label: 'Come si arriva · da Roma Fiumicino',
      segments: [
        { route: 'Roma (FCO) → Jeddah (JED)', flightNo: 'SV204', company: 'Saudia · SkyTeam', date: '27 lug 2026', dep: '09:25', arr: '15:10', duration: '4h 45m', note: 'Terminal 3 → Terminal 1', bookedVia: 'Trip.com', bookingNote: 'gestione (check-in, modifiche) diretta su sito/app Saudia' },
        { route: 'Jeddah (JED) → Giacarta (CGK)', flightNo: 'SV816', company: 'Saudia · SkyTeam', date: '27–28 lug 2026', dep: '17:25', arr: '07:35 (+1)', duration: '10h 10m', note: 'Scalo a Jeddah di circa 2h15 · Terminal 1 → Terminal 3', bookedVia: 'Trip.com', bookingNote: 'gestione diretta su sito/app Saudia' }
      ],
      footNote: 'Bagaglio incluso: 1 collo x 23kg a testa. Classe Guest Basic. Atterraggio a Giacarta la mattina del 28/07, giorno di puro recupero dal volo.'
    },
    hotel: { name: 'FM7 Resort Hotel — Jakarta Airport', area: 'Tangerang, a pochi minuti dall\'aeroporto Soekarno–Hatta', checkin: '27 lug, dalle 14:00', checkout: '29 lug, entro le 12:00', nights: '2 notti', map: 'FM7 Resort Hotel Jakarta Airport, Tangerang' },
    days: [
      {
        dd: '28 LUG', title: 'Recupero dal volo', trailer: 'Nessun programma: giorno per smaltire il jet-lag e la notte in aereo, prima di ripartire per Yogyakarta.',
        activities: [
          { name: 'Relax in hotel', blurb: 'Giornata libera senza impegni fissi — utile anche per procurarsi rupie in contanti e una SIM/eSIM locale.', map: null }
        ]
      }
    ],
    tips: 'Prima tappa più che altro un hub di atterraggio: il grosso del viaggio comincia da Yogyakarta.',
    safety: [
      { lvl: 'info', ico: '💏', t: 'Effusioni in pubblico: massima cautela', b: 'Jakarta è la capitale di un Paese a maggioranza musulmana ed è la tappa più formale del viaggio. La Farnesina segnala che le effusioni amorose in pubblico possono essere sanzionate: qui vale la regola più prudente di tutto il viaggio — mano nella mano va bene, nient\'altro in pubblico.' },
      { lvl: 'critical', ico: '🐟', t: 'Pesce locale: meglio evitarlo qui', b: 'L\'Agenzia Nucleare indonesiana ha rilevato tracce di contaminazione da <b>Cesio-137</b> da un impianto di rottami metallici nella zona di <b>Banten</b> (~70 km da Jakarta): potrebbero essere contaminati i prodotti ittici delle acque vicine. Tangerang è in provincia di Banten. Sono in corso decontaminazione e accertamenti — per due notti di recupero, meglio mangiare altro.' },
      { lvl: 'warn', ico: '📢', t: 'Evitare qualsiasi assembramento', b: 'Ad agosto–settembre 2025 ci sono state violente proteste nella capitale, con vittime. La Farnesina raccomanda di evitare manifestazioni, raduni studenteschi e comizi politici: possono diventare violenti all\'improvviso.' },
      { lvl: 'warn', ico: '🚕', t: 'Solo taxi registrati', b: 'Usare solo compagnie riconosciute (<b>Bluebird</b>, Silverbird) o app. Se prenotate con l\'app, controllate che l\'autista corrisponda e condividete il viaggio. Diffidare di chi offre taxi per strada.' },
      { lvl: 'info', ico: '🛂', t: 'Passaporto sempre con voi', b: 'Ci sono stati casi di connazionali fermati e trattenuti in cella fino all\'identificazione perché sprovvisti di documenti.' }
    ]
  },
  {
    id: 2, num: '02', name: 'Yogyakarta', region: 'Giava centrale',
    dates: '29 – 31 luglio', nights: 2, accent: 'coral',
    arrival: {
      label: 'Come si arriva · da Jakarta',
      segments: [
        { route: 'Jakarta (CGK) → Yogyakarta (JOG)', flightNo: 'Volo interno', company: '—', date: '29 lug 2026', dep: '11:30', arr: '~12:50', duration: '1h 20m', note: 'Volo diretto, tratta domestica', bookedVia: 'Kiss&Fly' }
      ],
      footNote: 'Tratta breve e diretta, giusto il tempo di spostarsi a Giava centrale.'
    },
    hotel: { name: 'Novotel Suites Yogyakarta Malioboro', area: 'Sulla via Malioboro, cuore della città', checkin: '29 lug, dalle 14:00', checkout: '31 lug, entro le 12:00', nights: '2 notti', map: 'Novotel Suites Yogyakarta Malioboro' },
    days: [
      {
        dd: '29 LUG', title: 'Arrivo e primo giro', trailer: 'Pomeriggio leggero per ambientarsi, con una passeggiata serale sulla via più viva della città.',
        activities: [
          {
            name: 'Passeggiata su Jl. Malioboro', blurb: 'La via principale dello shopping e della vita serale di Yogyakarta, tra bancarelle, street food e batik.', map: 'Jalan Malioboro, Yogyakarta',
            images: ['Andong Atau Delman Malioboro.jpg'],
            facts: ['La strada è stata riconosciuta patrimonio culturale UNESCO nel 2023.', 'Segue un asse simbolico nord-sud che collega il Kraton (palazzo del sultano) al monte Merapi.', 'Di sera i marciapiedi si riempiono di "lesehan", ristorantini a terra su stuoie.']
          }
        ]
      },
      {
        dd: '30 LUG', title: 'Borobudur e Prambanan', trailer: 'Il giorno clou di Yogyakarta: alba al tempio buddista più grande del mondo, pausa nelle ore calde, tramonto al complesso induista di Prambanan.',
        activities: [
          {
            name: 'Borobudur all\'alba', blurb: 'Il più grande tempio buddista al mondo: da vivere alle prime luci per luce migliore, meno caldo e meno folla — è lo standard consigliato per questo sito.', map: 'Borobudur Temple, Magelang, Indonesia',
            images: ['Borobudur, Java, Indonesia, 20220817 1058 8808.jpg', 'Stupa Borobudur.jpg', 'Borobudur Temple Compounds-111351.jpg'],
            facts: ['Costruito tra il 750 e l\'850 d.C. dalla dinastia Sailendra, è il più grande monumento buddista al mondo.', 'Visto dall\'alto disegna un mandala: nove piattaforme, sei quadrate e tre circolari.', 'Abbandonato tra il XIV e il XV secolo, fu riscoperto solo nel 1814.']
          },
          { name: 'Pausa a metà giornata', blurb: 'Rientro in hotel nelle ore più calde: la combinazione funziona bene proprio perché lascia un buco di riposo tra i due siti.', map: null },
          {
            name: 'Prambanan al tramonto', blurb: 'Il complesso induista più grande dell\'Indonesia, spettacolare quando il sole basso illumina le guglie appuntite.', map: 'Prambanan Temple, Yogyakarta, Indonesia',
            images: ['Prambanan Complex 1.jpg', 'Yogyakarta Indonesia Prambanan-temple-complex-02.jpg'],
            facts: ['Costruito intorno all\'850 d.C., è dedicato alla Trimurti: Brahma, Vishnu e Shiva.', 'È il più grande tempio induista d\'Indonesia e il secondo nel Sud-est asiatico.', 'Danneggiato da un terremoto nel 2006, oggi resta un luogo di culto attivo durante le festività indù.']
          }
        ]
      }
    ],
    tips: 'Borobudur e Prambanan nello stesso giorno è la combinazione classica consigliata (alba sull\'uno, tramonto sull\'altro): giornata piena ma con un riposo nel mezzo, non due tappe di fila senza sosta.',
    safety: [
      { lvl: 'warn', ico: '💏', t: 'Effusioni in pubblico: la zona più rigida dopo Jakarta', b: 'Giava è molto più conservatrice di Bali: qui l\'attenzione va tenuta alta quanto a Jakarta. Spalle e ginocchia coperte anche fuori dai siti religiosi. Mano nella mano va bene, <b>baci e abbracci prolungati meglio riservarli alla stanza d\'hotel</b>.' },
      { lvl: 'warn', ico: '🌋', t: 'Merapi in eruzione, allerta 3 su 4', b: 'Il vulcano che domina Yogyakarta è in eruzione con livello di allerta <b>3 ("Standby")</b>, confermato a inizio luglio 2026. La città non è a rischio e non è nel vostro itinerario — ma se vi propongono un "Merapi lava tour", verificate prima le zone di allerta su <a href="https://magma.esdm.go.id" target="_blank" rel="noopener">magma.esdm.go.id</a>. Le nubi di cenere possono influire sugli orari dei voli.' },
      { lvl: 'info', ico: '🚐', t: 'Transfer per l\'alba: solo tramite hotel', b: 'Partenza notturna per Borobudur: organizzatela con l\'hotel o un\'agenzia rinomata, mai con intermediari "free lance".' }
    ]
  },
  {
    id: 3, num: '03', name: 'Komodo', region: 'Labuan Bajo, Flores',
    dates: '31 lug – 3 agosto', nights: 3, accent: 'jungle',
    arrival: {
      label: 'Come si arriva · da Yogyakarta',
      segments: [
        { route: 'Yogyakarta (JOG) → Labuan Bajo (LBJ)', flightNo: 'Volo interno', company: '—', date: '31 lug 2026', dep: '15:30', arr: '~17:00', duration: '1h 30m', note: 'Volo diretto verso Komodo', bookedVia: 'Kiss&Fly' }
      ],
      footNote: 'Tratta interna diretta verso l\'estremo est dell\'itinerario, prima di tornare verso ovest.'
    },
    hotel: { name: 'Harbour Komodo Hotel', area: 'Labuan Bajo, sul porto', checkin: '31 lug, dalle 14:00', checkout: '3 ago, entro le 11:00', nights: '3 notti', map: 'Harbour Komodo Hotel, Labuan Bajo' },
    days: [
      {
        dd: '1 AGO', title: 'Relax sul porto', trailer: 'Giornata cuscinetto per godersi Komodo con calma, prima del tour impegnativo del giorno dopo.',
        activities: [
          {
            name: 'Relax e tramonto sul lungomare', blurb: 'Poco da fare apposta: Komodo (la cittadina di Labuan Bajo) si vive bene passeggiando sul porto al tramonto, tra barche a vela e ristorantini di pesce.', map: 'Labuan Bajo waterfront, Indonesia',
            images: ['Labuan Bajo waterfront.jpg', 'Labuan Bajo sunset (Flores, Indonesia 2016).jpg'],
            facts: ['Fino a pochi decenni fa era un piccolo villaggio di pescatori, oggi è la porta d\'accesso al Parco di Komodo.', 'Ogni sera migliaia di volpi volanti (pipistrelli giganti) sorvolano l\'isola di Kalong al tramonto, spettacolo visibile anche dal lungomare.']
          }
        ]
      },
      {
        dd: '2 AGO', title: 'Tour in barca a Komodo', trailer: 'Giornata intera in barca nel Parco Nazionale: draghi di Komodo, snorkeling e isole da cartolina.',
        activities: [
          {
            name: 'Tour Parco Nazionale di Komodo', blurb: 'Escursione giornaliera in barca tra le isole del parco, con trekking guidato per avvistare i draghi di Komodo e soste snorkeling.', map: 'Komodo National Park, Indonesia',
            images: ['Pulau Padar 1.jpg', 'Pink Beach, Padar Island, Komodo National Park.jpg', 'Komodo dragon (Varanus komodoensis).jpg'],
            facts: ['Il drago di Komodo è la specie di lucertola vivente più grande al mondo, fino a 3 metri di lunghezza.', 'Vive allo stato selvatico solo in questa manciata di isole indonesiane.', 'L\'isola di Padar è famosa per il punto panoramico con tre spiagge di colore diverso visibili insieme: rosa, bianca e nera.']
          }
        ]
      }
    ],
    tips: 'È il punto più remoto e più a est del viaggio: da qui si torna verso ovest per il resto dell\'itinerario. Il tour in barca è l\'attività principale — meglio confermarlo con qualche giorno d\'anticipo.',
    safety: [
      { lvl: 'info', ico: '💏', t: 'Effusioni in pubblico: più tranquillo, ma restate discreti', b: 'Flores è a maggioranza cattolica, l\'atmosfera è più rilassata rispetto a Giava — ma Komodo (la cittadina di Labuan Bajo) resta un centro piccolo, non una zona da resort internazionali como Bali. Mano nella mano senza problemi, il resto meglio tenerlo per l\'hotel.' },
      { lvl: 'critical', ico: '⚠️', t: 'La tappa più delicata secondo la Farnesina', b: 'A <b>Flores e Labuan Bajo</b> si registra un aumento di casi di molestie e stupri ai danni di turiste in solitaria. Massima cautela negli spostamenti e nelle frequentazioni, soprattutto di notte. In pratica: Eli non deve mai girare da sola la sera.' },
      { lvl: 'critical', ico: '⛵', t: 'Il tour in barca: non prendete il più economico', b: 'La Farnesina raccomanda estrema cautela nei collegamenti via mare per il <b>rischio di incidenti e affondamenti</b> dovuti alla scarsa affidabilità delle imbarcazioni locali e all\'impreparazione degli equipaggi. Verificate la presenza dell\'equipaggiamento di salvataggio e l\'affidabilità dell\'operatore prima di pagare.' },
      { lvl: 'warn', ico: '🦎', t: 'Ranger obbligatorio — e prenotate il tour ORA, non lì', b: 'La guida-ranger è <b>non negoziabile</b> su tutti i trekking: i draghi sono predatori apicali realmente pericolosi e ci sono stati incidenti con visitatori usciti dai sentieri. Con il ranger e le regole rispettate il rischio è minimo.<br><br>Dal 2026 è sparito solo <b>l\'acquisto al cancello il giorno stesso</b>: prenotare tramite hotel o un operatore resta il modo normale di fare questo tour, voi non dovete toccare l\'app SiORA — se ne occupa chi organizza il giro inserendo i vostri dati passaporto. Ma da aprile 2026 c\'è un tetto di <b>1.000 visitatori al giorno</b> per l\'intero parco, e luglio-agosto è alta stagione: gli slot possono esaurirsi con settimane d\'anticipo. <b>Prenotate il tour del 2/08 online adesso</b> (o scrivete subito all\'Harbour Komodo Hotel), non aspettate il check-in del 31/07 — resterebbe solo un giorno di margine.' },
      { lvl: 'warn', ico: '🌋', t: 'Lewotobi: possibili ritardi sul volo del 3/08', b: 'Il vulcano Lewotobi Laki-Laki è sulla vostra stessa isola (Flores), ma all\'estremità est, lontano da Labuan Bajo. È in <b>eruzione continua da marzo 2026</b>, allerta livello 3, con pennacchi di cenere ancora ai primi di luglio. Ha già causato disagi ai voli da e per Bali e Flores: è un rischio di ritardo, non per la vostra incolumità.' },
      { lvl: 'info', ico: '🤿', t: 'Se fate immersioni', b: 'Le camere iperbariche in Indonesia sono <b>solo a Giava e Bali</b>, e i collegamenti tra isole possono richiedere ore di volo. Verificate che l\'assicurazione copra gli infortuni da attività subacquea.' }
    ]
  },
  {
    id: 4, num: '04', name: 'Ubud', region: 'Bali',
    dates: '3 – 8 agosto', nights: 5, accent: 'turquoise',
    arrival: {
      label: 'Come si arriva · da Labuan Bajo',
      segments: [
        { route: 'Labuan Bajo (LBJ) → Bali (DPS)', flightNo: 'Volo interno', company: '—', date: '3 ago 2026', dep: '17:30', arr: '~18:45', duration: '1h 15m', note: 'Volo diretto verso Bali', bookedVia: 'Kiwi.com' }
      ],
      footNote: 'Da qui inizia la parte più lunga e rilassata del viaggio: 5 notti a Ubud.'
    },
    hotel: { name: 'Sunari Villa', area: 'Ubud', checkin: '3 ago, check-in flessibile dalle 02:00', checkout: '8 ago, entro le 12:00', nights: '5 notti', map: 'Sunari Villa, Ubud, Bali' },
    days: [
      {
        dd: '4 AGO', title: 'A piedi tra risaie e sentieri', trailer: 'Giorno di adattamento senza fretta: due passeggiate panoramiche collegate tra loro e un massaggio per scaricare la tensione del volo.',
        activities: [
          {
            name: 'Campuhan Ridge Walk', blurb: 'Cresta erbosa panoramica appena fuori dal centro di Ubud, ideale al mattino presto quando la luce è più dolce e c\'è meno gente.', map: 'Campuhan Ridge Walk, Ubud, Bali',
            images: ['Man in the rice fields in Ubud Wokshots.jpg', 'Bali rice terraces.JPG'],
            facts: ['"Campuhan" significa "dove si incontrano due fiumi" in balinese.', 'Segna il punto in cui il sacerdote indù Rsi Markandeya fondò il primo tempio di Ubud.', 'Il sistema di irrigazione a risaie della zona, il subak, è patrimonio UNESCO dal 2012.']
          },
          {
            name: 'Sari Organic Walk', blurb: 'Il sentiero prosegue tra le risaie: molto meno battuto dei classici punti fotografici di Ubud, quasi sempre tranquillo.', map: 'Sari Organic Walk, Ubud, Bali',
            images: ['Bali Rice Terrace.JPG', 'Rice fields of Bali.jpg'],
            facts: ['Il sentiero attraversa risaie ancora coltivate, con qualche caffè-fattoria lungo il percorso.', 'Meno pubblicizzato del Campuhan Ridge Walk, resta uno dei modi più tranquilli per vedere le risaie da vicino.']
          },
          {
            name: 'Massaggio balinese', blurb: 'Un\'ora–un\'ora e mezza di massaggio tradizionale: tanti piccoli spa a conduzione familiare in centro a Ubud, prezzi onesti.', map: 'balinese massage spa Ubud',
            images: ['Fleurs de Frangipanier (Île de la Réunion) (4125134278).jpg'],
            facts: ['Il massaggio balinese unisce influenze indiane, cinesi e del sud-est asiatico.', 'Combina agopressione, stone massage e oli essenziali, spesso a base di frangipane e cocco.']
          }
        ]
      },
      {
        dd: '5 AGO', title: 'Risaie UNESCO e tempio di montagna', trailer: 'Giornata verso nord-ovest, tra le risaie più belle di Bali e un tempio nella foresta ancora poco turistico.',
        activities: [
          {
            name: 'Jatiluwih', blurb: 'Risaie a terrazza patrimonio UNESCO, tra le più belle di Bali e ancora relativamente tranquille rispetto a quelle vicino Ubud.', map: 'Jatiluwih Rice Terraces, Bali',
            images: ['Jatiluwih rice terraces.jpg', 'Rice fields at Jatiluwih. Bali, Indonesia.JPG'],
            facts: ['Il nome significa più o meno "veramente meraviglioso" in balinese.', 'Fa parte del sito UNESCO "Paesaggio culturale di Bali" insieme al sistema subak, riconosciuto nel 2012.', 'Si coltivano ancora varietà di riso balinese tradizionale, più lente ma più pregiate di quelle moderne.']
          },
          {
            name: 'Pura Luhur Batukaru', blurb: 'Tempio immerso nella foresta pluviale ai piedi del monte Batukaru, quasi sempre avvolto in un silenzio quasi mistico.', map: 'Pura Luhur Batukaru, Bali',
            images: ['Batukaru pilgrims Bali.jpg'],
            facts: ['È uno dei sei grandi templi direzionali sacri di Bali (Sad Kahyangan).', 'Si trova ai piedi del monte Batukaru, la seconda vetta più alta dell\'isola.']
          }
        ]
      },
      {
        dd: '6 AGO', title: 'Alba al Monte Batur', trailer: 'Sveglia nel cuore della notte per il trekking fino in vetta e l\'alba sul vulcano — poi giornata di puro recupero.',
        activities: [
          {
            name: 'Alba al Monte Batur', blurb: 'Trekking notturno con guida obbligatoria (partenza verso le 2:00–2:30) fino in vetta per l\'alba sul vulcano: faticoso ma vissuto, non solo fotografato.', map: 'Mount Batur, Kintamani, Bali',
            images: ['Mount of Batur sunrise.jpg', 'Gunung Batur Kintamani Bali.jpg', 'Mount Batur panorama.jpg'],
            facts: ['È un vulcano attivo di 1.717 metri, l\'ultima eruzione registrata risale al 1999-2000.', 'Sorge al centro di una doppia caldera che racchiude anche un lago.', 'La prima eruzione documentata risale al 1804.']
          },
          { name: 'Riposo pomeridiano', blurb: 'Rientro in hotel a metà mattina: il resto della giornata va lasciato libero per recuperare il sonno perso nella notte.', map: null },
          {
            name: 'Monkey Forest', blurb: 'Riserva naturale nel cuore di Ubud con centinaia di macachi: attività leggera, adatta al tardo pomeriggio dopo una notte in bianco.', map: 'Sacred Monkey Forest Sanctuary, Ubud, Bali',
            images: ['Sacred Monkey Forest Sanctuary (49818583783).jpg', 'Monkey Forest Road, Ubud, Bali (15009558257).jpg'],
            facts: ['Il nome ufficiale è Mandala Wisata Wenara Wana ("foresta sacra delle scimmie").', 'Ospita diverse centinaia di macachi dalla coda lunga in libertà.', 'Non è solo un parco: al suo interno si trovano tre templi indù ancora attivi.']
          }
        ]
      },
      {
        dd: '7 AGO', title: 'Storia e natura a est', trailer: 'Ultimo giorno pieno a Ubud, lontano dai grandi bus turistici: santuari rupestri antichi e una cascata poco nota.',
        activities: [
          {
            name: 'Gunung Kawi Tampaksiring', blurb: 'Santuari rupestri dell\'XI secolo scavato nella roccia lungo un fiume, raggiungibili con una breve scalinata tra le risaie: spesso semivuoto.', map: 'Gunung Kawi Tampaksiring, Bali',
            images: ['Bali.GunungKawi.jpg', 'Gunung Kawi Rice Terrace Tampaksiring 1.jpg'],
            facts: ['Conosciuto come la "Valle dei Re", risale all\'XI secolo.', 'Dieci santuari (candi) sono scavati direttamente in nicchie di 7 metri nella roccia, lungo il fiume Pakerisan.', 'Si ritiene siano dedicati al re Anak Wungsu e alle sue regine.']
          },
          {
            name: 'Uma Anyar Waterfall', blurb: 'Cascata meno nota vicino Kemenuh, alternativa tranquilla alle cascate più affollate della zona (come Tegenungan).', map: 'Uma Anyar Waterfall, Kemenuh, Bali',
            images: ['Air Terjun Tegunungan waterfall.jpg', 'Tegenungan Waterfall sideview.jpg'],
            facts: ['La zona di Kemenuh è attraversata dal fiume Petanu, tra i più lunghi di Bali (circa 47 km), che nasce alle pendici del monte Batur.', 'La comunità locale considera l\'area sacra, adatta a meditazione e preghiera.']
          }
        ]
      }
    ],
    tips: 'Rispetto al piano iniziale ho tolto Ulun Danu Bratan e Tanah Lot: entrambi ottimi in foto ma, secondo le recensioni recenti, vivibili solo primissima mattina, altrimenti diventano pullman di turisti e fila per lo scatto — soprattutto ad agosto. Ho tenuto Monkey Forest come richiesto e sostituito il resto con Sari Organic Walk, Gunung Kawi e Uma Anyar, meno battuti. Il Monte Batur va spostato liberamente su un altro giorno di questo blocco (o tolto) se non vi convince l\'alzataccia.',
    safety: [
      { lvl: 'info', ico: '💏', t: 'Effusioni in pubblico: la zona più rilassata del viaggio', b: 'Bali è a maggioranza indù ed è abituata da decenni a turismo occidentale: è la tappa dove più ci si può permettere qualche coccola in pubblico senza attirare attenzione, soprattutto nelle zone turistiche di Ubud. Restano fuori discussione solo i siti sacri e i templi, dove il rispetto conta di più.' },
      { lvl: 'critical', ico: '🐒', t: 'Rabbia al Monkey Forest — regole precise', b: 'A Bali molti animali sono affetti da rabbia (cani, gatti, scimmie) e ci sono stati decessi. La Farnesina sconsiglia vivamente il contatto fisico, <b>soprattutto con i primati del Tempio delle scimmie a Ubud</b>, che pur non aggressivi in alcuni casi hanno morso i visitatori. Sul posto: niente contatto visivo diretto, <b>non sorridete</b> (mostrare i denti è segno di aggressività), assicurate occhiali e cappelli, niente cibo né sacchetti di plastica/carta, mai toccarle — men che meno i cuccioli.<br><br><b>Se vi mordono o graffiano:</b> lavare la ferita con acqua corrente e sapone strofinando <b>almeno 15 minuti</b>, poi cure mediche immediate — il vaccino va fatto entro 24 ore, prima è meglio. Vale anche per un graffio leggero. Attenzione: per costo e scarsa disponibilità, il vaccino antirabbico è spesso difficile da trovare nelle strutture ospedaliere indonesiane — meglio le cliniche private per turisti di Ubud, che tengono in stock vaccino e immunoglobuline.' },
      { lvl: 'warn', ico: '🛵', t: 'Grab sì, guidare da soli no', b: 'A Bali c\'è stato un <b>forte aumento degli incidenti con ciclomotori</b>, alcuni mortali — ma riguarda soprattutto i turisti che noleggiano uno scooter e lo guidano da soli, senza esperienza nel traffico locale (e senza patente internazionale spesso l\'assicurazione del noleggio salta). Salire come passeggeri su un <b>Grab</b> guidato da un autista locale è tutta un\'altra cosa: è la soluzione più raccomandata per spostarsi, con autista esperto e tracciato dall\'app. Meglio ancora, quando possibile, l\'auto: più comoda in due, e con autista per la giornata costa comunque poco.' },
      { lvl: 'warn', ico: '🌋', t: 'Batur: guida obbligatoria e felpa', b: 'La <b>guida registrata è obbligatoria per legge</b>: non si può salire da soli, l\'obbligo è stato introdotto dopo l\'aumento di infortuni e decessi sulle montagne. In vetta ci sono <b>10–15°C</b> prima dell\'alba: sembra assurdo ai tropici, ma portate una felpa. Ultima eruzione nel 2000, vulcano monitorato: ogni segnale di attività porta alla cancellazione dei tour. Controllate comunque <a href="https://magma.esdm.go.id" target="_blank" rel="noopener">magma.esdm.go.id</a> prima di andare.' },
      { lvl: 'warn', ico: '🌙', t: 'Cautela negli spostamenti notturni', b: 'Continuano episodi di effrazione e furto nelle strutture turistiche. Preoccupante l\'incremento di episodi di <b>violenza a scopo di rapina ai danni di donne straniere</b>, in alcuni casi con decesso della vittima. Rivolgersi solo a strutture e agenzie rinomate, evitare guide o intermediari "free lance".' },
      { lvl: 'info', ico: '🙏', t: 'Nei templi (Batukaru, Gunung Kawi)', b: 'Sarong e spalle coperte obbligatori — si noleggiano al cancello per IDR 10.000–20.000. La regola che conta di più: <b>mai calpestare i canang sari</b>, le offerte di fiori e incenso a terra ovunque. Calpestarle è offensivo sul serio: giratele. Le donne mestruate non entrano nelle aree sacre — è una convinzione balinese autentica, non una regola per turisti.' }
    ]
  },
  {
    id: 5, num: '05', name: 'Gili Air', region: 'Isole Gili',
    dates: '8 – 12 agosto', nights: 4, accent: 'coral',
    arrival: {
      label: 'Come si arriva · da Bali',
      segments: [
        { route: 'Padang Bai (Bali) → Gili Air', flightNo: 'Traghetto AARN4304', company: 'Wahana Virendra · Aluminium Fast Ferry', date: '8 ago 2026', dep: '08:30', arr: '10:30 (stimato)', duration: '2h', note: 'Passeggeri: Leonardo Albani ed Elisabetta Fabretti', bookedVia: '12Go.asia' }
      ],
      footNote: 'Check-in al porto almeno 60 minuti prima. Il traghetto fa tappa anche a Gili Trawangan prima di Gili Air. Tassa di sbarco/retribution fee da pagare in contanti al porto (IDR 10.000–20.000). Bagaglio fino a 20kg incluso.'
    },
    hotel: { name: 'Sandy Beach Bungalows', area: 'Gili Air', checkin: '8 ago, dalle 12:00', checkout: '12 ago, entro le 11:00', nights: '4 notti', map: 'Sandy Beach Bungalows, Gili Air' },
    days: [
      {
        dd: '9 AGO', title: 'Giorno lento', trailer: 'Nessun programma: tramonto e cena in riva al mare, il ritmo tipico delle Gili.',
        activities: [
          {
            name: 'Relax, tramonto e cena', blurb: 'Le Gili si vivono così: passeggiata in spiaggia, aperitivo al tramonto, cena a piedi nudi sulla sabbia.', map: 'Gili Air beach, Indonesia',
            images: ['20160316145630 - Gili Air beach, West side, towards Lombok (25736339441).jpg', 'Gili Trawangan (16788754758).jpg'],
            facts: ['Sulle Gili sono vietati auto e moto: ci si sposta solo a piedi, in bici o con il cidomo, il carretto trainato da cavalli.', 'Gili Air è la più orientale e meno frequentata delle tre isole Gili, di fronte alla costa di Lombok.']
          }
        ]
      },
      {
        dd: '10 AGO', title: 'In acqua con le tartarughe', trailer: 'Uscita in mare per nuotare vicino alle tartarughe marine e alle statue sommerse.',
        activities: [
          {
            name: 'Snorkeling con le tartarughe', blurb: 'Uscita in barca o direttamente dalla spiaggia per nuotare vicino alle tartarughe marine e alle statue sommerse al largo dell\'isola.', map: 'Gili Air snorkeling spot, Indonesia',
            images: ['Green sea turtle (Chelonia mydas) - Indonesia 22.jpg'],
            facts: ['Le tartarughe verdi che si incontrano qui si nutrono soprattutto delle praterie di posidonia sui fondali delle Gili.', 'Le acque intorno alle Gili sono ricche di coralli e vita marina, tra le più abbondanti dell\'arcipelago.']
          }
        ]
      },
      {
        dd: '11 AGO', title: 'Corso di cucina', trailer: 'Giornata libera — buon momento per una lezione di cucina locale invece del solito giro in spiaggia.',
        activities: [
          {
            name: 'Corso di cucina indonesiana', blurb: 'Lezione pratica sull\'isola: si imparano un paio di piatti tipici e poi ci si siede a mangiare il proprio lavoro.', map: 'Gili Cooking Classes, Gili Air',
            images: ['Bali cuisine banner.jpg'],
            facts: ['Molti piatti balinesi partono da una pasta di spezie base chiamata "base genep", preparata pestando insieme una decina di ingredienti.', 'La cucina balinese, a maggioranza indù, resta legata anche alle offerte religiose quotidiane.']
          }
        ]
      }
    ],
    tips: 'Niente auto o moto sulle Gili: ci si muove a piedi, in bici o coi carretti a cavallo (cidomo). Ottimo posto per rallentare dopo il ritmo intenso di Bali.',
    safety: [
      { lvl: 'info', ico: '💏', t: 'Effusioni in pubblico: più riservate che a Bali', b: 'Le Gili appartengono culturalmente a Lombok, a maggioranza musulmana: nonostante l\'atmosfera da vacanza nei locali sulla spiaggia, la comunità locale è più conservatrice di quella balinese. Mano nella mano tranquillamente, il resto meglio tenerlo lontano dagli occhi del villaggio.' },
      { lvl: 'critical', ico: '⛴️', t: 'Il traghetto dell\'8/08: controlli prima di salire', b: 'Il settore dei fast boat indonesiani è <b>mal regolato</b>: nessuna autorità centrale impone standard, formazione del personale e ispezioni. Ci sono stati incidenti, alcuni mortali, per sovraccarico, mare grosso, guasti e scarsa vigilanza. Prima di salire: <b>individuate i giubbotti</b> (potrebbero non essercene per tutti), controllate che l\'uscita d\'emergenza vicina si apra — altrimenti sedetevi vicino alla porta principale — e se sentite <b>odore di benzina</b>, allerta massima. Nota stagionale: luglio e agosto sono mesi ventosi, tra i meno adatti alle traversate. Wahana Virendra è comunque tra gli operatori più noti sulla rotta.' },
      { lvl: 'critical', ico: '🍸', t: 'Metanolo e spiking: le Gili sono citate per entrambi', b: 'La Farnesina cita esplicitamente le <b>isole Gili</b> sia per l\'avvelenamento da metanolo (decessi e danni permanenti: coma, cecità, danni al sistema nervoso) sia per i casi di <b>somministrazione di droghe a fini di stupro</b>. Bevete solo da bottiglie sigillate acquistate in locali autorizzati, mai lasciate un drink incustodito, mai accettatelo da sconosciuti.' },
      { lvl: 'info', ico: '🌊', t: 'Il bagno va bene: l\'acqua delle Gili è calma', b: 'Buona notizia: l\'acqua intorno a tutte e tre le Gili è generalmente <b>calma e limpida</b>, a differenza delle coste esposte di Bali e Lombok sud. Lo snorkeling con le tartarughe fatelo comunque con un\'uscita organizzata, non a caso dalla spiaggia.' },
      { lvl: 'info', ico: '🏥', t: 'Niente ospedale sull\'isola', b: 'Per qualsiasi cosa seria si torna a Lombok o a Bali. Portatevi il necessario: le farmacie sull\'isola sono minime.' }
    ]
  },
  {
    id: 6, num: '06', name: 'Kuta Lombok', region: 'Lombok sud',
    dates: '12 – 15 agosto', nights: 3, accent: 'gold',
    arrival: {
      label: 'Come si arriva · da Gili Air',
      segments: [
        { route: 'Gili Air → Lombok → Kuta', flightNo: 'Trasferimento', company: 'Barca + auto', date: '12 ago 2026', dep: '—', arr: '—', duration: '~1–2h totali', note: 'Barca fino al porto di Lombok, poi trasferimento in auto fino a Kuta Lombok' }
      ],
      footNote: 'Orari e tariffe da confermare in loco — è il trasferimento più \'artigianale\' del viaggio, tra barca e macchina.'
    },
    hotel: { name: 'Hyde Boutique Hotel', area: 'Kuta Lombok', checkin: '12 ago, dalle 14:00', checkout: '15 ago, entro le 11:00', nights: '3 notti', map: 'Hyde Boutique Hotel, Kuta Lombok' },
    days: [
      {
        dd: '13 AGO', title: 'Tramonto a Bukit Merese', trailer: 'Il tramonto più romantico del viaggio, su una collina erbosa sopra il mare.',
        activities: [
          {
            name: 'Bukit Merese al tramonto', blurb: 'Collina erbosa sopra la spiaggia di Kuta Lombok, tra le viste più belle di tutto il viaggio e ancora poco affollata.', map: 'Bukit Merese, Kuta Lombok, Indonesia',
            images: ['Bukit Merese.jpg', 'A Beach Near Merese Hill, Mandalika, Lombok.jpg'],
            facts: ['La collina si trova tra le spiagge di Kuta e Tanjung Aan, sulla costa sud di Lombok.', 'È diventata anche un punto di partenza per il parapendio, oltre che per il tramonto.']
          }
        ]
      },
      {
        dd: '14 AGO', title: 'Ultimo giorno libero', trailer: 'Nessun programma fisso: spiaggia, onde e riposo prima del lungo rientro.',
        activities: [
          { name: 'Giornata libera', blurb: 'Ultimo giorno pieno per godersi il mare del sud di Lombok, con l\'anima più surf e meno affollata di Bali.', map: null }
        ]
      }
    ],
    tips: 'Lombok sud ha un\'anima da surf più che da folla: onde, colline verdi e spiagge meno affollate di Bali. Bukit Merese è da mettere in agenda al tramonto, non a metà giornata.',
    safety: [
      { lvl: 'warn', ico: '💏', t: 'Effusioni in pubblico: Lombok è più conservatrice di Bali', b: 'La popolazione locale (Sasak) è a maggioranza musulmana e la cultura è più tradizionale che a Bali, pur essendo Kuta Lombok una zona di turismo surf. Mano nella mano ok, ma tenete il resto per la stanza — soprattutto fuori dalle zone più turistiche vicino alla spiaggia.' },
      { lvl: 'critical', ico: '🔦', t: 'Criminalità in aumento, soprattutto di notte', b: 'Su Lombok si sono verificati casi di <b>estorsione a mano armata (pistole e machete)</b> ai danni di turisti stranieri, oltre a furti di motorini a noleggio spesso privi di targa e non assicurati. La criminalità comune è in aumento. Massima prudenza nelle ore notturne, evitando località non illuminate. In caso di rapina, <b>non opporre resistenza</b>.' },
      { lvl: 'critical', ico: '🍸', t: 'Metanolo: Lombok è tra le zone peggiori', b: 'Sull\'isola sono in <b>incremento i casi di stranieri vittima di avvelenamento da metanolo, con un numero significativo di decessi</b>. La Farnesina sconsiglia fortemente di consumare alcolici di dubbia provenienza. Solo bottiglie sigillate, etichette senza errori ortografici, niente Arak né cocktail artigianali.' },
      { lvl: 'warn', ico: '🌅', t: 'Bukit Merese: fatevi aspettare', b: 'È una collina isolata e si scende <b>col buio</b>. Andateci con un mezzo che vi aspetta sul posto — non fatevi trovare lì a piedi dopo il tramonto.' },
      { lvl: 'warn', ico: '🌊', t: 'Dove fare il bagno e dove evitare', b: 'Non è un divieto generale, ma zona per zona. <b>Ok per nuotare tranquilli:</b> Selong Belanak (tratto centrale), Mawun Beach e il lato est di Tanjung Aan — baie calme e poco profonde. <b>Da evitare con mare mosso:</b> il lato ovest di Tanjung Aan. Regola pratica ovunque: <b>bandiera rossa = non entrare</b>; acqua scura o schiumosa che si allontana dalla riva è un canale di risacca, da evitare. Se vi capita di finirci dentro, non nuotate contro corrente: lasciatevi portare e uscite nuotando parallelamente alla riva.' }
    ]
  },
  {
    id: 7, num: '07', name: 'Rientro', region: 'Lombok → Jakarta → Jeddah → Roma',
    dates: '15 – 16 agosto', nights: 0, accent: 'jungle',
    isReturn: true,
    legOut: { route: 'Lombok (LOP) → Jakarta (CGK)', flightNo: 'Volo interno', company: '—', date: '15 ago 2026', dep: '12:10', arr: '~14:10', duration: '2h', note: 'Ultima tratta domestica, verso l\'hub di Giacarta', bookedVia: 'Booking.com', bookingNote: 'prenotato dall\'account leoalbani@live.it' },
    legs: [
      { route: 'Giacarta (CGK) → Jeddah (JED)', flightNo: 'SV819', company: 'Saudia · SkyTeam', date: '15 ago 2026', dep: '17:30', arr: '23:05', duration: '9h 35m', note: 'Terminal 3 → Terminal 1', bookedVia: 'Trip.com', bookingNote: 'stesso biglietto A/R del volo Roma–Jakarta, gestione su sito/app Saudia' },
      { route: 'Jeddah (JED) → Roma (FCO)', flightNo: 'SV201', company: 'Saudia · SkyTeam', date: '16 ago 2026', dep: '10:30', arr: '14:40', duration: '5h 10m', note: 'Terminal 1 → Terminal 3', bookedVia: 'Trip.com', bookingNote: 'stesso biglietto A/R del volo Roma–Jakarta, gestione su sito/app Saudia' }
    ],
    transitHotel: { name: 'Aerotel Jeddah — Airport Transit Hotel', area: 'Zona transiti internazionali, Terminal 1, King Abdulaziz Intl Airport', checkin: '15 ago, 23:30', checkout: '16 ago, 09:30', nights: '~10 ore, camera Superior Double' },
    tips: 'Lo scalo a Jeddah tra i due voli dura circa 11h25: da qui la scelta dell\'hotel di transito Aerotel, comodo perché si trova già oltre i controlli di sicurezza dell\'area transiti. Importante: da passeggeri in transito, <b>non</b> passare l\'immigrazione all\'arrivo — ci si rivolge direttamente ai banchi transiti della compagnia, altrimenti si rischia di non poter rientrare nell\'area riservata senza carta d\'imbarco valida.',
    safety: [
      { lvl: 'critical', ico: '💏', t: 'Effusioni in pubblico: qui è un altro Paese, regole diverse', b: 'Attenzione: durante lo scalo siete su suolo <b>saudita</b>, non indonesiano. L\'Arabia Saudita ha norme molto più rigide sulle effusioni in pubblico rispetto all\'Indonesia. Nell\'area transiti e in hotel il rischio pratico è bassissimo (poca gente, nessun controllo di questo tipo), ma è comunque il momento del viaggio in cui conviene essere più formali in assoluto.' },
      { lvl: 'critical', ico: '🛂', t: 'A Jeddah: NON passare l\'immigrazione', b: 'L\'Aerotel è <b>dentro l\'area transiti internazionale</b> del Terminal 1. Da passeggeri in transito non dovete sdoganarvi: senza una carta d\'imbarco valida non potreste più rientrare nell\'area riservata. Se all\'arrivo non avete la carta d\'imbarco del volo successivo, o se i bagagli sono etichettati fino a Jeddah, rivolgetevi ai <b>banchi transiti della compagnia</b>. Per raggiungere l\'hotel: controllo di sicurezza per passeggeri in transito, poi scala mobile al livello 2 delle Partenze Internazionali, accanto al Duty Free.' },
      { lvl: 'warn', ico: '🧳', t: 'Cosa NON portare nel bagaglio in uscita', b: 'È proibito acquistare, vendere o esportare qualsiasi <b>animale selvatico protetto o parti di esso</b>: se vi trovano con oggetti come i <b>coralli</b>, rischiate multa o pena detentiva. Attenzione anche ai souvenir "naturali" venduti sulle spiagge.' }
    ]
  }
];

const HERO_PHOTOS = [
  'Borobudur, Java, Indonesia, 20220817 1058 8808.jpg',
  'Jatiluwih rice terraces.jpg',
  'Pulau Padar 1.jpg',
  'Mount of Batur sunrise.jpg',
  '20160316145630 - Gili Air beach, West side, towards Lombok (25736339441).jpg',
  'Bukit Merese.jpg'
];

// Packing lists
const PACK_LEO = [
  { ico: '📄', title: 'Documenti e soldi', items: [
    'Passaporto + fotocopia/foto di backup',
    'e-VOA stampato',
    'Polizza Heymondo stampata (HEY2203579) + numero assistenza salvato anche in rubrica',
    'QR Bali Tourist Levy salvato offline',
    'Conferme hotel di tutte le tappe, scaricate offline',
    'Conferma tour Komodo (Ceneast / GetYourGuide)',
    'Contanti in Rupie (tasse traghetto Gili, ingresso Parco Komodo, mance)',
    'Carta di credito/debito + una di riserva separata',
    'Marsupio/pouch da nascondere sotto i vestiti per le tappe più a rischio'
  ]},
  { ico: '💊', title: 'Farmacia', items: [
    'Mesalazina — scorta per tutti i 20 giorni + margine, solo nel bagaglio a mano',
    'Bentelan',
    'Cefixoral',
    'Tachipirina 1000',
    'Immodium',
    'Normix',
    'Sali reidratanti (Dicodral)',
    'Fermenti lattici',
    'Paracetamolo + ibuprofene',
    'Antistaminico',
    'Repellente zanzare con DEET o icaridina',
    'Disinfettante, cerotti, garze',
    'Gel mani',
    'SPF 50+, meglio reef-safe',
    'Melatonina + eventuale sonnifero prescritto dal medico, con foglietto/ricetta'
  ]},
  { ico: '👕', title: 'Vestiti — logica lavanderia (Ubud 4-5/8, Gili Air 8-9/8)', items: [
    '8 mutande',
    '3 costumi',
    '6-7 magliette leggere e traspiranti',
    '2 pantaloncini/bermuda + 1 pantalone leggero (templi)',
    '1 camicia leggera a maniche lunghe per la sera',
    '4-5 paia di calzini',
    'Intimo/pigiama leggero',
    '1 felpa leggera — solo per il Monte Batur',
    'Sarong leggero — telo mare + copertura templi'
  ]},
  { ico: '👟', title: 'Scarpe', items: [
    'Scarpe da trekking/chiuse robuste (Padar, Batur, Gunung Kawi, Batukaru)',
    'Sandali/scarpette da scoglio (Pink Beach, ingresso in acqua)',
    'Infradito o sandali comodi per la vita quotidiana'
  ]},
  { ico: '🎒', title: 'Zaino da giornata', items: [
    'Powerbank',
    'Torcia frontale/headlamp — per la salita al Batur nel buio',
    'Sacca stagna/dry bag piccola',
    'Cappellino + occhiali da sole',
    'Bottiglia d\'acqua riutilizzabile'
  ]},
  { ico: '✈️', title: 'Kit comfort volo', items: [
    'Cuscino da collo',
    'Mascherina per gli occhi',
    'Tappi per le orecchie o cuffie noise-cancelling',
    'Calze a compressione',
    'Melatonina/sonnifero già nel bagaglio a mano'
  ]},
  { ico: '🔌', title: 'Varie tecniche', items: [
    'Adattatore universale (Indonesia: prese C/F, 220V)',
    'Sapone da bucato / bustina detersivo da viaggio',
    'Telo microfibra ad asciugatura rapida',
    'Lucchetto piccolo per zaino/trolley'
  ]}
];

const PACK_ELI = [
  { ico: '📄', title: 'Documenti e soldi', items: [
    'Passaporto + fotocopia/foto di backup',
    'e-VOA stampato',
    'Polizza Heymondo stampata (HEY2203579) + numero assistenza salvato anche in rubrica',
    'QR Bali Tourist Levy salvato offline',
    'Conferme hotel di tutte le tappe, scaricate offline',
    'Conferma tour Komodo (Ceneast / GetYourGuide)',
    'Contanti in Rupie (tasse traghetto Gili, ingresso Parco Komodo, mance)',
    'Carta di credito/debito + una di riserva separata',
    'Marsupio/pouch da nascondere sotto i vestiti per le tappe più a rischio'
  ]},
  { ico: '💊', title: 'Farmacia', items: [
    'Eventuali farmaci personali abituali, scorta per tutti i 20 giorni nel bagaglio a mano',
    'Sali reidratanti (Dicodral)',
    'Imodium, fermenti lattici',
    'Paracetamolo + ibuprofene',
    'Antistaminico',
    'Repellente zanzare con DEET o icaridina',
    'Disinfettante, cerotti, garze',
    'Gel mani',
    'SPF 50+, meglio reef-safe',
    'Melatonina — utile per il volo lungo Jeddah-Giacarta'
  ]},
  { ico: '👕', title: 'Vestiti — logica lavanderia (Ubud 4-5/8, Gili Air 8-9/8)', items: [
    '8 slip/mutande',
    '3 reggiseni (uno da bagno a parte)',
    '3 bikini/costumi',
    '6-7 magliette leggere e traspiranti',
    '2 pantaloncini/shorts + 1 pantalone leggero (templi)',
    '1 vestito leggero per la sera',
    '4-5 paia di calzini',
    'Intimo/pigiama leggero',
    '1 felpa leggera — solo per il Monte Batur',
    'Sarong leggero — telo mare + copertura templi'
  ]},
  { ico: '👟', title: 'Scarpe', items: [
    'Scarpe da trekking/chiuse robuste (Padar, Batur, Gunung Kawi, Batukaru)',
    'Sandali/scarpette da scoglio (Pink Beach, ingresso in acqua)',
    'Infradito o sandali comodi per la vita quotidiana'
  ]},
  { ico: '🎒', title: 'Zaino da giornata', items: [
    'Powerbank',
    'Torcia frontale/headlamp — per la salita al Batur nel buio',
    'Sacca stagna/dry bag piccola',
    'Cappellino + occhiali da sole',
    'Bottiglia d\'acqua riutilizzabile'
  ]},
  { ico: '✈️', title: 'Kit comfort volo', items: [
    'Cuscino da collo',
    'Mascherina per gli occhi',
    'Tappi per le orecchie o cuffie noise-cancelling',
    'Calze a compressione',
    'Melatonina già nel bagaglio a mano'
  ]},
  { ico: '🔌', title: 'Varie tecniche', items: [
    'Adattatore universale (Indonesia: prese C/F, 220V)',
    'Sapone da bucato / bustina detersivo da viaggio',
    'Telo microfibra ad asciugatura rapida',
    'Lucchetto piccolo per zaino/trolley',
    'Beauty essenziale (i prodotti pieni si comprano facilmente a Bali)'
  ]}
];

const PACK_NOTE = 'Da ricordare, non da mettere in valigia: mai toccare le scimmie al Monkey Forest (niente sorrisi, niente cibo in vista) · bandiera rossa = niente bagno, soprattutto a Lombok sud · solo bevande sigillate, niente Arak né cocktail artigianali · controllare i giubbotti di salvataggio appena si sale su traghetto o barca.';

const TIMELINE_STEPS: Array<
  | {
      type: 'stop';
      data: {
        id: number;
        num: string;
        name: string;
        region: string;
        dates: string;
        nights: string;
        badge: string;
        accent: string;
      };
    }
  | {
      type: 'transition';
      data: {
        date: string;
        icon: string;
        title: string;
        mode: string;
        route: string;
        details: string;
      };
    }
> = [
  {
    type: 'transition',
    data: {
      date: '27 – 28 Luglio',
      icon: '✈️',
      title: 'Volo di Andata dall\'Italia',
      mode: 'Volo internazionale (Saudia)',
      route: 'Roma (FCO) ➔ Jeddah (JED) ➔ Jakarta (CGK)',
      details: 'Partenza 27/07 ore 09:25 da Roma. Scalo a Jeddah (2h15). Atterraggio a Jakarta il 28/07 ore 07:35 am.'
    }
  },
  {
    type: 'stop',
    data: {
      id: 1,
      num: '01',
      name: 'Jakarta',
      region: 'Giava Ovest',
      dates: '27 – 29 luglio',
      nights: '2 notti',
      badge: 'Atterraggio & Recupero jet-lag',
      accent: 'gold'
    }
  },
  {
    type: 'transition',
    data: {
      date: '29 Luglio',
      icon: '✈️',
      title: 'Giorno di Spostamento',
      mode: 'Volo interno',
      route: 'Jakarta (CGK) ➔ Yogyakarta (JOG)',
      details: 'Partenza ore 11:30 · Durata 1h 20m (Spostamento da Giava ovest a Giava centrale)'
    }
  },
  {
    type: 'stop',
    data: {
      id: 2,
      num: '02',
      name: 'Yogyakarta',
      region: 'Giava Centrale',
      dates: '29 – 31 luglio',
      nights: '2 notti',
      badge: 'Templi UNESCO (Borobudur & Prambanan)',
      accent: 'coral'
    }
  },
  {
    type: 'transition',
    data: {
      date: '31 Luglio',
      icon: '✈️',
      title: 'Giorno di Spostamento (2 Voli)',
      mode: '2 Voli interni (Scalo Jakarta)',
      route: 'Yogyakarta (JOG) ➔ Jakarta (CGK) ➔ Labuan Bajo / Komodo (LBJ)',
      details: '1° Volo JOG-CGK (07:55 - 09:05) · Scalo ~4h a Jakarta · 2° Volo CGK-LBJ (13:00 - 16:25)'
    }
  },
  {
    type: 'stop',
    data: {
      id: 3,
      num: '03',
      name: 'Komodo',
      region: 'Labuan Bajo, Flores',
      dates: '31 luglio – 3 agosto',
      nights: '3 notti',
      badge: 'Parco Nazionale, Draghi & Mare',
      accent: 'jungle'
    }
  },
  {
    type: 'transition',
    data: {
      date: '3 Agosto',
      icon: '✈️',
      title: 'Giorno di Spostamento',
      mode: 'Volo interno + Auto',
      route: 'Labuan Bajo (LBJ) ➔ Bali Denpasar (DPS) ➔ Ubud',
      details: 'Partenza ore 17:30 · Volo 1h 15m + Transfer in auto dall\'aeroporto di Denpasar a Ubud'
    }
  },
  {
    type: 'stop',
    data: {
      id: 4,
      num: '04',
      name: 'Ubud',
      region: 'Bali',
      dates: '3 – 8 agosto',
      nights: '5 notti',
      badge: 'Risaie UNESCO, Vulcano Batur & Natura',
      accent: 'turquoise'
    }
  },
  {
    type: 'transition',
    data: {
      date: '8 Agosto',
      icon: '⛴️',
      title: 'Giorno di Spostamento',
      mode: 'Fast Ferry (Traghetto)',
      route: 'Bali (Padang Bai) ➔ Gili Air',
      details: 'Fast Ferry Wahana Virendra · Partenza ore 08:30 da Padang Bai · Durata ~2 ore via mare'
    }
  },
  {
    type: 'stop',
    data: {
      id: 5,
      num: '05',
      name: 'Gili Air',
      region: 'Isole Gili',
      dates: '8 – 12 agosto',
      nights: '4 notti',
      badge: 'Mare, Tartarughe, Relax & Cucina',
      accent: 'coral'
    }
  },
  {
    type: 'transition',
    data: {
      date: '12 Agosto',
      icon: '⛵',
      title: 'Giorno di Spostamento',
      mode: 'Barca locale + Auto',
      route: 'Gili Air ➔ Porto di Lombok ➔ Kuta Lombok',
      details: 'Barca locale fino al porto di Lombok (~20m) + Transfer in auto fino a Kuta Lombok (~1h 30m)'
    }
  },
  {
    type: 'stop',
    data: {
      id: 6,
      num: '06',
      name: 'Kuta Lombok',
      region: 'Lombok Sud',
      dates: '12 – 15 agosto',
      nights: '3 notti',
      badge: 'Spiagge, Surf & Tramonto a Bukit Merese',
      accent: 'gold'
    }
  },
  {
    type: 'transition',
    data: {
      date: '15 – 16 Agosto',
      icon: '✈️',
      title: 'Voli di Rientro',
      mode: 'Volo interno + Voli internazionali (Saudia)',
      route: 'Kuta Lombok ➔ Aeroporto Lombok (LOP) ➔ Jakarta ➔ Jeddah ➔ Roma',
      details: 'Volo LOP-CGK + Volo Saudia CGK-JED-FCO con notte in transit hotel Aerotel Jeddah. Arrivo a FCO il 16/08 ore 14:40.'
    }
  },
  {
    type: 'stop',
    data: {
      id: 7,
      num: '07',
      name: 'Rientro a Roma',
      region: 'Italia (FCO)',
      dates: '16 agosto',
      nights: 'Arrivo a FCO ore 14:40',
      badge: 'Fine del viaggio',
      accent: 'jungle'
    }
  }
];

// CALENDAR DAILY DATA
const CALENDAR_DAYS = [
  { id: 0, dateNum: '27 LUG', dayNum: 27, month: 'Luglio', dayName: 'Lun', fullDate: '27 Luglio', stopId: 1, stopName: 'Jakarta', accent: 'gold', activity: 'Partenza da Roma FCO (09:25) ➔ Scalo a Jeddah', shortLabel: '✈️ Partenza Roma & Scalo Jeddah', isTransition: true, transIcon: '✈️', transDetail: 'Volo Saudia SV204 (09:25) Roma-Jeddah + SV816 Jeddah-Jakarta' },
  { id: 1, dateNum: '28 LUG', dayNum: 28, month: 'Luglio', dayName: 'Mar', fullDate: '28 Luglio', stopId: 1, stopName: 'Jakarta', accent: 'gold', activity: 'Arrivo a Giacarta CGK (07:35) & recupero jet-lag in hotel', shortLabel: 'Arrivo CGK & Hotel', isTransition: false },
  { id: 2, dateNum: '29 LUG', dayNum: 29, month: 'Luglio', dayName: 'Mer', fullDate: '29 Luglio', stopId: 2, stopName: 'Yogyakarta', accent: 'coral', activity: 'Volo Giacarta ➔ Yogyakarta (11:30 - 12:50)', shortLabel: '✈️ Volo CGK ➔ JOG', isTransition: true, transIcon: '✈️', transDetail: 'Volo interno CGK ➔ JOG + Transfer in hotel' },
  { id: 3, dateNum: '30 LUG', dayNum: 30, month: 'Luglio', dayName: 'Gio', fullDate: '30 Luglio', stopId: 2, stopName: 'Yogyakarta', accent: 'coral', activity: 'Templi UNESCO Borobudur & Prambanan', shortLabel: 'Borobudur & Prambanan', isTransition: false },
  { id: 4, dateNum: '31 LUG', dayNum: 31, month: 'Luglio', dayName: 'Ven', fullDate: '31 Luglio', stopId: 3, stopName: 'Komodo', accent: 'jungle', activity: 'Volo 1 JOG-CGK (07:55) + Scalo ~4h + Volo 2 CGK-LBJ (13:00)', shortLabel: '✈️ 2 Voli via CGK per LBJ', isTransition: true, transIcon: '✈️', transDetail: '2 Voli interni via Jakarta per Labuan Bajo / Komodo (arrivo 16:25)' },
  { id: 5, dateNum: '1 AGO', dayNum: 1, month: 'Agosto', dayName: 'Sab', fullDate: '1 Agosto', stopId: 3, stopName: 'Komodo', accent: 'jungle', activity: 'Parco Nazionale Komodo: Isola di Komodo, Draghi & Pink Beach', shortLabel: 'Parco Komodo & Draghi', isTransition: false },
  { id: 6, dateNum: '2 AGO', dayNum: 2, month: 'Agosto', dayName: 'Dom', fullDate: '2 Agosto', stopId: 3, stopName: 'Komodo', accent: 'jungle', activity: 'Escursione in barca, Snorkeling Padar & Manta Point', shortLabel: 'Snorkeling Padar & Mante', isTransition: false },
  { id: 7, dateNum: '3 AGO', dayNum: 3, month: 'Agosto', dayName: 'Lun', fullDate: '3 Agosto', stopId: 4, stopName: 'Ubud', accent: 'turquoise', activity: 'Volo Labuan Bajo ➔ Bali (17:30 - 18:45) + Transfer Ubud', shortLabel: '✈️ Volo LBJ ➔ Bali', isTransition: true, transIcon: '✈️', transDetail: 'Volo per Bali (DPS) + Transfer auto fino ad Ubud' },
  { id: 8, dateNum: '4 AGO', dayNum: 4, month: 'Agosto', dayName: 'Mar', fullDate: '4 Agosto', stopId: 4, stopName: 'Ubud', accent: 'turquoise', activity: 'Risaie di Tegallalang & Sacred Monkey Forest', shortLabel: 'Risaie & Monkey Forest', isTransition: false },
  { id: 9, dateNum: '5 AGO', dayNum: 5, month: 'Agosto', dayName: 'Mer', fullDate: '5 Agosto', stopId: 4, stopName: 'Ubud', accent: 'turquoise', activity: 'Trekking all\'alba sul Vulcano Batur e Sorgenti Termali', shortLabel: 'Vulcano Batur Sunrise', isTransition: false },
  { id: 10, dateNum: '6 AGO', dayNum: 6, month: 'Agosto', dayName: 'Gio', fullDate: '6 Agosto', stopId: 4, stopName: 'Ubud', accent: 'turquoise', activity: 'Tempio di Tirta Empul & Cascata Tukad Cepung', shortLabel: 'Tempio Tirta Empul', isTransition: false },
  { id: 11, dateNum: '7 AGO', dayNum: 7, month: 'Agosto', dayName: 'Ven', fullDate: '7 Agosto', stopId: 4, stopName: 'Ubud', accent: 'turquoise', activity: 'Relax, Mercato artigianale, Yoga & Massaggio balinese', shortLabel: 'Relax & Massaggi', isTransition: false },
  { id: 12, dateNum: '8 AGO', dayNum: 8, month: 'Agosto', dayName: 'Sab', fullDate: '8 Agosto', stopId: 5, stopName: 'Gili Air', accent: 'gold', activity: 'Fast Ferry Padang Bai ➔ Gili Air (08:30)', shortLabel: '⛴️ Fast Ferry Padang Bai', isTransition: true, transIcon: '⛴️', transDetail: 'Transfer porto Padang Bai + Fast Ferry per Gili Air (~2 ore)' },
  { id: 13, dateNum: '9 AGO', dayNum: 9, month: 'Agosto', dayName: 'Dom', fullDate: '9 Agosto', stopId: 5, stopName: 'Gili Air', accent: 'gold', activity: 'Snorkeling con le tartarughe & Barriera Corallina', shortLabel: 'Snorkeling Tartarughe', isTransition: false },
  { id: 14, dateNum: '10 AGO', dayNum: 10, month: 'Agosto', dayName: 'Lun', fullDate: '10 Agosto', stopId: 5, stopName: 'Gili Air', accent: 'gold', activity: 'Giro dell\'isola in bicicletta & Tramonto sul mare', shortLabel: 'Giro Bici & Sunset', isTransition: false },
  { id: 15, dateNum: '11 AGO', dayNum: 11, month: 'Agosto', dayName: 'Mar', fullDate: '11 Agosto', stopId: 5, stopName: 'Gili Air', accent: 'gold', activity: 'Sunset Spot, Aperitivo in spiaggia & Relax totale', shortLabel: 'Sunset Beach Relax', isTransition: false },
  { id: 16, dateNum: '12 AGO', dayNum: 12, month: 'Agosto', dayName: 'Mer', fullDate: '12 Agosto', stopId: 6, stopName: 'Kuta Lombok', accent: 'coral', activity: 'Barca locale per Lombok + Auto fino a Kuta Lombok', shortLabel: '⛵ Barca per Lombok', isTransition: true, transIcon: '⛵', transDetail: 'Barca per Bangsal (~20m) + Transfer auto per Kuta Lombok (~1h30m)' },
  { id: 17, dateNum: '13 AGO', dayNum: 13, month: 'Agosto', dayName: 'Gio', fullDate: '13 Agosto', stopId: 6, stopName: 'Kuta Lombok', accent: 'coral', activity: 'Spiagge di Mawun, Selong Belanak & Lezione di Surf', shortLabel: 'Spiagge Mawun & Surf', isTransition: false },
  { id: 18, dateNum: '14 AGO', dayNum: 14, month: 'Agosto', dayName: 'Ven', fullDate: '14 Agosto', stopId: 6, stopName: 'Kuta Lombok', accent: 'coral', activity: 'Relax in spiaggia & Tramonto a Bukit Merese', shortLabel: 'Bukit Merese Sunset', isTransition: false },
  { id: 19, dateNum: '15 AGO', dayNum: 15, month: 'Agosto', dayName: 'Sab', fullDate: '15 Agosto', stopId: 7, stopName: 'Rientro', accent: 'jungle', activity: 'Volo Lombok ➔ Jakarta ➔ Jeddah (Notte in transit hotel)', shortLabel: '✈️ Volo LOP-CGK-JED', isTransition: true, transIcon: '✈️', transDetail: 'Partenza da Lombok LOP ore 13:40, scalo Jakarta & volo notturno' },
  { id: 20, dateNum: '16 AGO', dayNum: 16, month: 'Agosto', dayName: 'Dom', fullDate: '16 Agosto', stopId: 7, stopName: 'Rientro', accent: 'jungle', activity: 'Volo Jeddah ➔ Roma FCO (Arrivo ore 14:40)', shortLabel: '✈️ Volo JED-FCO & Arrivo', isTransition: false }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'itinerario' | 'briefing' | 'valigia'>('itinerario');
  const [activeStopId, setActiveStopId] = useState<number>(1);
  const [activePack, setActivePack] = useState<'leo' | 'eli'>('leo');
  const [activeActivity, setActiveActivity] = useState<any | null>(null);
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [itineraryViewMode, setItineraryViewMode] = useState<'simplified' | 'all'>('simplified');
  const [selectedCalDay, setSelectedCalDay] = useState<any>(CALENDAR_DAYS[0]);

  const activeStop = (stops.find((s) => s.id === activeStopId) || stops[0]) as any;

  const handleSelectStop = (id: number, scroll: boolean) => {
    setActiveTab('itinerario');
    setActiveStopId(id);
    if (scroll) {
      setTimeout(() => {
        const el = document.getElementById('detailSection');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setCheckedItems(prev => ({ ...prev, [key]: checked }));
  };

  const closeActivityModal = () => setActiveActivity(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeActivityModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {activeTab === 'itinerario' && (
        <header className="hero">
          <div className="wrap hero-inner">
            <span className="hero-eyebrow">✈ 27 lug — 16 ago 2026</span>
            <h1>Indonesia<br /><em>il giro dell'arcipelago</em></h1>
            <p className="sub">Da Giava a Komodo, da Bali alle Gili, fino a Lombok. Venti giorni, sette tappe, un unico grande giro ad anello nell'arcipelago. Clicca una tappa sulla mappa per aprire i dettagli.</p>
            <div className="hero-stats">
              <div className="hstat"><div className="n">20</div><div className="l">Giorni</div></div>
              <div className="hstat"><div className="n">7</div><div className="l">Tappe</div></div>
              <div className="hstat"><div className="n">6</div><div className="l">Voli</div></div>
              <div className="hstat"><div className="n">1</div><div className="l">Traghetto</div></div>
              <div className="hstat"><div className="n">2</div><div className="l">Viaggiatori</div></div>
            </div>
            <div className="hero-photos" id="heroPhotos">
              {HERO_PHOTOS.map((f, idx) => (
                <img key={idx} src={commonsImg(f, 400)} alt="Indonesia" loading="lazy" />
              ))}
            </div>
          </div>
        </header>
      )}

      <main className="wrap">
        {activeTab === 'itinerario' && (
          <>
            {/* VIEW MODE SELECTOR (2 VISTE) */}
            <div className="view-mode-bar" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              margin: '28px 0 24px',
              flexWrap: 'wrap'
            }}>
              <button 
                type="button"
                className={`mode-btn ${itineraryViewMode === 'simplified' ? 'active' : ''}`}
                onClick={() => setItineraryViewMode('simplified')}
              >
                📅 Calendario Giornaliero (Vista Semplificata)
              </button>
              <button 
                type="button"
                className={`mode-btn ${itineraryViewMode === 'all' ? 'active' : ''}`}
                onClick={() => setItineraryViewMode('all')}
              >
                👁️ Vista Dettagliata Completa
              </button>
            </div>

            {/* CALENDAR SECTION */}
            <section className="calendar-section" style={{ marginBottom: '40px', marginTop: '10px' }}>
              <div className="section-head text-center" style={{ marginBottom: '20px' }}>
                <span className="eyebrow" style={{ color: 'var(--coral-deep)', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  📅 CALENDARIO GIORNALIERO (27 LUG – 16 AGO 2026)
                </span>
                <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 'clamp(24px, 3.8vw, 34px)', color: 'var(--ink)', margin: '8px 0 6px' }}>
                  Dove saremo giorno per giorno
                </h2>
                <p style={{ color: 'var(--ink-soft)', maxWidth: '640px', margin: '0 auto', fontSize: '14.5px', lineHeight: 1.55 }}>
                  Griglia classica giorno per giorno. Clicca su una qualsiasi data per visualizzare subito il programma della giornata e aprire la tappa nei dettagli.
                </p>
              </div>

              {/* CLASSIC MONTH GRID CALENDAR */}
              <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
                  {/* MESE DI LUGLIO 2026 */}
                  <div className="month-calendar-box">
                    <div className="month-title">
                      <span>JUL 2026 · Luglio</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-soft)' }}>27 — 31 Luglio (5 Giorni)</span>
                    </div>

                    <div className="calendar-grid-wrapper">
                      <div className="calendar-grid">
                        {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((h, i) => (
                          <div key={i} className="cal-header-cell">{h}</div>
                        ))}

                        {/* July 27 to 31 */}
                        {CALENDAR_DAYS.filter(d => d.month === 'Luglio').map((d) => {
                          const isSelected = selectedCalDay?.id === d.id;
                          return (
                            <div 
                              key={d.id}
                              className={`cal-grid-day ${d.isTransition ? 'is-trans' : ''} ${isSelected ? 'selected' : ''}`}
                              onClick={() => {
                                setSelectedCalDay(d);
                                setActiveStopId(d.stopId);
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span className="cal-day-num">{d.dayNum}</span>
                                {d.isTransition && <span style={{ fontSize: '12px' }}>{d.transIcon}</span>}
                              </div>

                              <span className="cal-day-stop-tag" style={{ background: ACCENTS[d.accent].solid }}>
                                📍 {d.stopName}
                              </span>

                              <div className="cal-day-short-label">
                                {d.shortLabel}
                              </div>
                            </div>
                          );
                        })}

                        {/* Empty cells for Saturday and Sunday in July */}
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                      </div>
                    </div>
                  </div>

                  {/* MESE DI AGOSTO 2026 */}
                  <div className="month-calendar-box">
                    <div className="month-title">
                      <span>AGO 2026 · Agosto</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-soft)' }}>1 — 16 Agosto (16 Giorni)</span>
                    </div>

                    <div className="calendar-grid-wrapper">
                      <div className="calendar-grid">
                        {['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'].map((h, i) => (
                          <div key={i} className="cal-header-cell">{h}</div>
                        ))}

                        {/* 5 empty padding cells before 1st August (Saturday) */}
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>

                        {/* August 1 to 16 */}
                        {CALENDAR_DAYS.filter(d => d.month === 'Agosto').map((d) => {
                          const isSelected = selectedCalDay?.id === d.id;
                          return (
                            <div 
                              key={d.id}
                              className={`cal-grid-day ${d.isTransition ? 'is-trans' : ''} ${isSelected ? 'selected' : ''}`}
                              onClick={() => {
                                setSelectedCalDay(d);
                                setActiveStopId(d.stopId);
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span className="cal-day-num">{d.dayNum}</span>
                                {d.isTransition && <span style={{ fontSize: '12px' }}>{d.transIcon}</span>}
                              </div>

                              <span className="cal-day-stop-tag" style={{ background: ACCENTS[d.accent].solid }}>
                                📍 {d.stopName}
                              </span>

                              <div className="cal-day-short-label">
                                {d.shortLabel}
                              </div>
                            </div>
                          );
                        })}

                        {/* 5 empty padding cells to complete row */}
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                        <div className="cal-grid-day empty"></div>
                      </div>
                    </div>
                  </div>

                  {/* SELECTED DAY PREVIEW CARD */}
                  {selectedCalDay && (
                    <div className="selected-day-detail-card">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{
                            background: 'var(--sand)',
                            border: '1px solid var(--sand-deep)',
                            padding: '6px 14px',
                            borderRadius: '10px',
                            fontWeight: 800,
                            fontSize: '15px',
                            color: 'var(--jungle-deep)'
                          }}>
                            📅 {selectedCalDay.dayName} {selectedCalDay.fullDate}
                          </span>

                          <span className="cal-stop-badge" style={{ background: ACCENTS[selectedCalDay.accent].solid, fontSize: '13px', padding: '4px 12px' }}>
                            📍 Tappa {selectedCalDay.stopId}: {selectedCalDay.stopName}
                          </span>

                          {selectedCalDay.isTransition && (
                            <span className="cal-trans-pill">
                              {selectedCalDay.transIcon} SPOSTAMENTO
                            </span>
                          )}
                        </div>

                        <button 
                          type="button"
                          className="mode-btn"
                          style={{ background: 'var(--jungle-deep)', color: '#fff', border: 'none', padding: '8px 16px', fontSize: '13px' }}
                          onClick={() => handleSelectStop(selectedCalDay.stopId, true)}
                        >
                          Apri i dettagli della Tappa {selectedCalDay.stopId} ({selectedCalDay.stopName}) ➔
                        </button>
                      </div>

                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                        {selectedCalDay.activity}
                      </div>

                      {selectedCalDay.isTransition && selectedCalDay.transDetail && (
                        <div style={{
                          background: 'linear-gradient(135deg, rgba(255, 248, 235, 0.95) 0%, rgba(255, 243, 218, 0.98) 100%)',
                          border: '1.5px dashed var(--gold-deep)',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          marginTop: '10px',
                          fontSize: '13.5px',
                          color: 'var(--ink)'
                        }}>
                          <b>Dettaglio Spostamento:</b> {selectedCalDay.transDetail}
                        </div>
                      )}
                    </div>
                  )}
                </div>
            </section>

            {/* MAP SECTION (solo in vista completa) */}
            {(itineraryViewMode === 'all') && (
              <section className="map-section">
                <div className="section-head">
                  <span className="eyebrow">La rotta</span>
                  <h2>Un anello attraverso l'arcipelago</h2>
                  <p>Da Giacarta si vola fino a Komodo, poi si torna indietro passando per Bali, le Gili e Lombok, prima del rientro via Giacarta e Jeddah. Le distanze non sono in scala — è più una cartolina che una mappa.</p>
                </div>

          <div className="map-scroll">
            <svg id="mapSvg" viewBox="0 0 1220 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#CFEFEA" />
                  <stop offset="55%" stopColor="#A9E0D9" />
                  <stop offset="100%" stopColor="#7FC9C4" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="1220" height="500" fill="url(#seaGrad)" opacity="0.55" />

              {/* graticule */}
              <line className="graticule" x1="0" y1="130" x2="1220" y2="130" />
              <line className="graticule" x1="0" y1="330" x2="1220" y2="330" />
              <line className="graticule" x1="300" y1="0" x2="300" y2="500" />
              <line className="graticule" x1="700" y1="0" x2="700" y2="500" />
              <line className="graticule" x1="1000" y1="0" x2="1000" y2="500" />

              {/* sun */}
              <circle cx="1130" cy="65" r="48" fill="#FFDFA0" opacity="0.65" />
              <circle cx="1130" cy="65" r="31" fill="#FFC15E" opacity="0.8" />

              {/* sea labels */}
              <text x="330" y="95" className="sea-label">Laut Jawa</text>
              <text x="470" y="460" className="sea-label">Oceano Indiano</text>
              <text x="466" y="222" className="sea-label" fontSize="9.5">Selat Lombok</text>

              {/* ISLANDS */}
              {/* Java */}
              <path className="island" fill="#2E8B63" d="M75,222 C82,203 98,192 122,195 C142,197 150,183 175,186 C200,189 208,203 232,200 C256,197 270,208 294,206 C314,204 332,213 336,229 C339,244 323,254 303,251 C283,248 274,259 249,255 C224,251 213,241 188,245 C163,249 149,239 127,243 C105,247 84,244 78,231 C76,228 74,225 75,222 Z" />
              <path className="island-shade" fill="#0E4D3C" d="M90,238 C120,250 180,252 230,248 C275,244 310,240 330,232 C325,246 300,254 270,254 C230,255 170,257 130,250 C105,246 92,244 90,238 Z" />

              {/* Bali */}
              <path className="island" fill="#2E8B63" d="M406,233 C412,220 430,214 445,219 C459,224 466,238 460,251 C456,259 448,262 440,266 C432,270 424,274 417,270 C411,267 411,259 403,254 C393,248 391,236 398,229 C400,227 403,230 406,233 Z" />
              <path className="island" fill="#2E8B63" d="M438,264 C444,268 452,272 452,281 C452,288 445,292 439,288 C433,284 431,275 434,268 C435,266 436,264 438,264 Z" />

              {/* Lombok */}
              <path className="island" fill="#2E8B63" d="M492,231 C503,219 524,218 536,229 C546,238 548,251 540,262 C535,269 528,270 522,276 C515,283 505,283 500,275 C496,269 498,262 490,257 C481,251 480,240 486,233 C488,231 490,230 492,231 Z" />

              {/* Gili islands */}
              <circle className="island" cx="502" cy="199" r="4.4" fill="#3AA377" />
              <circle className="island" cx="514" cy="191" r="3.3" fill="#3AA377" />
              <circle className="island" cx="490" cy="192" r="2.7" fill="#3AA377" />

              {/* Sumbawa */}
              <path className="island island-muted" fill="#3AA377" d="M572,252 C584,236 606,233 618,245 C625,253 620,262 610,265 C625,266 648,262 665,270 C685,279 708,275 718,262 C724,253 717,241 703,239 C684,236 664,244 648,239 C633,234 618,239 604,235 C591,231 578,238 572,252 Z" />

              {/* Komodo */}
              <path className="island" fill="#1F8863" d="M742,278 C749,269 762,269 767,278 C770,285 765,291 756,290 C748,289 739,285 742,278 Z" />
              <path className="island" fill="#1F8863" d="M772,296 C779,289 791,290 794,298 C796,304 789,309 781,307 C775,305 769,301 772,296 Z" />

              {/* Flores */}
              <path className="island" fill="#2E8B63" d="M812,272 C820,257 842,253 860,259 C878,265 888,253 908,256 C930,259 940,248 962,252 C985,256 995,246 1018,251 C1038,255 1052,249 1066,259 C1078,267 1076,281 1064,286 C1048,292 1032,285 1014,290 C990,296 972,289 950,293 C925,297 906,290 886,294 C862,299 844,292 826,296 C814,299 805,290 807,279 C808,276 810,274 812,272 Z" />

              {/* island labels */}
              <text x="155" y="167" className="pin-label" fontSize="12.5" opacity="0.55" fontStyle="italic">Giava</text>
              <text x="960" y="315" className="pin-label" fontSize="12.5" opacity="0.55" fontStyle="italic">Flores</text>
              <text x="418" y="290" className="pin-label" fontSize="12" opacity="0.55" fontStyle="italic">Bali</text>
              <text x="497" y="298" className="pin-label" fontSize="12" opacity="0.55" fontStyle="italic">Lombok</text>
              <text x="628" y="285" className="pin-label" fontSize="11" opacity="0.4" fontStyle="italic">Sumbawa</text>

              {/* VOLCANOES */}
              <g transform="translate(212,178)">
                <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
                <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
                <text x="0" y="18" textAnchor="middle" className="volcano-label">Merapi</text>
              </g>
              <g transform="translate(432,214)">
                <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
                <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
                <text x="0" y="18" textAnchor="middle" className="volcano-label">Agung / Batur</text>
              </g>
              <g transform="translate(524,245)">
                <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.85" />
                <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
                <text x="18" y="4" textAnchor="start" className="volcano-label">Rinjani</text>
              </g>
              <g transform="translate(1005,270)">
                <path d="M-8,7 L0,-9 L8,7 Z" fill="#8B4A3A" opacity="0.9" />
                <circle cx="0" cy="-9" r="1.8" fill="#E85D3D" />
                <text x="0" y="18" textAnchor="middle" className="volcano-label">Lewotobi</text>
              </g>

              {/* ROUTE ARCS */}
              <path className="route-arc outbound" d="M50,55 Q70,150 140,215" />
              <path className="route-arc outbound" d="M140,215 Q197,185 255,215" />
              <path className="route-arc outbound" d="M255,215 Q507,140 760,282" />
              <path className="route-arc outbound" d="M760,282 Q594,180 428,242" />
              <path className="route-arc outbound" d="M428,242 Q464,195 500,205" />
              <path className="route-arc outbound" d="M500,205 Q540,237 516,270" />
              <path className="route-arc retour" d="M516,270 Q328,150 140,215" />
              <path className="route-arc retour" d="M140,215 Q70,150 50,55" />

              {/* mode markers */}
              <text x="62" y="128" className="mode-tag">✈️</text>
              <text x="188" y="182" className="mode-tag">✈️</text>
              <text x="497" y="150" className="mode-tag">✈️</text>
              <text x="586" y="190" className="mode-tag">✈️</text>
              <text x="456" y="205" className="mode-tag" fontSize="13">⛴️</text>
              <text x="528" y="240" className="mode-tag" fontSize="13">🚤</text>
              <text x="318" y="160" className="mode-tag">✈️</text>

              {/* roma tag */}
              <g>
                <ellipse cx="50" cy="72" rx="11" ry="3.5" fill="#000" opacity="0.15" />
                <circle cx="50" cy="55" r="20" fill="#0E4D3C" stroke="#FFF8EC" strokeWidth="2" />
                <text x="50" y="59" textAnchor="middle" className="pin-num">ROM</text>
              </g>

              {/* compass */}
              <g className="compass" transform="translate(48,455)">
                <path d="M0,14 L0,-14 M-6,-8 L0,-14 L6,-8" fill="none" />
                <text x="0" y="-20" textAnchor="middle">N</text>
              </g>

              {/* PINS */}
              {stops.map((s) => {
                const isActive = activeStopId === s.id;
                // Custom coordinates for each pin based on stop id
                let cx = 0, cy = 0, rx = 10, ry = 3.2, labelY = 245, showRing = true;
                if (s.id === 1) { cx = 140; cy = 215; }
                if (s.id === 2) { cx = 255; cy = 215; }
                if (s.id === 3) { cx = 760; cy = 282; cy = 282; ry = 3.2; labelY = 255; }
                if (s.id === 4) { cx = 428; cy = 242; labelY = 216; }
                if (s.id === 5) { cx = 500; cy = 205; rx = 9; ry = 2.8; labelY = 180; }
                if (s.id === 6) { cx = 516; cy = 270; labelY = 274; }
                if (s.id === 7) { cx = 50; cy = 55; showRing = false; }

                if (s.id === 7) {
                  return (
                    <g key={s.id} className={`pin-group ${isActive ? 'active' : ''}`} onClick={() => handleSelectStop(s.id, true)} tabIndex={0}>
                      <circle className="pin-ring" cx="50" cy="55" r="26" fill="none" stroke="#0E4D3C" strokeWidth="3" style={{ opacity: isActive ? 1 : 0 }} />
                    </g>
                  );
                }

                return (
                  <g key={s.id} className={`pin-group ${isActive ? 'active' : ''}`} onClick={() => handleSelectStop(s.id, true)} tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter') handleSelectStop(s.id, true); }}
                  >
                    <ellipse className="pin-shadow" cx={cx} cy={cy + 16} rx={rx} ry={ry} fill="#000" opacity="0.18" />
                    <circle className="pin-ring" cx={cx} cy={cy} r="19" fill="none" stroke={ACCENTS[s.accent].solid} strokeWidth="3" style={{ opacity: isActive ? 1 : 0 }} />
                    <circle className="pin-circle" cx={cx} cy={cy} r="13" fill={ACCENTS[s.accent].solid} stroke="#fff" strokeWidth="2.5" />
                    <text x={cx} y={cy + 4} textAnchor="middle" className="pin-num">{s.id}</text>
                    <text x={s.id === 6 ? cx + 46 : cx} y={labelY} textAnchor="middle" className="pin-label">{s.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>
          <div className="map-hint"><span className="dot"></span> Tocca un punto sulla mappa (o una tappa qui sotto) per aprire i dettagli</div>

          {/* CHIPS */}
          <div className="chip-row">
            {stops.map((s) => (
              <div key={s.id} className={`chip ${activeStopId === s.id ? 'active' : ''}`} onClick={() => handleSelectStop(s.id, true)}>
                <span className="dotnum" style={{ background: ACCENTS[s.accent].solid }}>{s.id}</span> {s.name}
              </div>
            ))}
          </div>
        </section>
      )}

        {/* DETAIL PANEL */}
        <section className="detail-section" id="detailSection">
          <div className="detail-card">
            <div className="detail-head" style={{ background: ACCENTS[activeStop.accent].grad }}>
              <div className="num">Tappa {activeStop.num} / 07</div>
              <h3>{activeStop.name}</h3>
              <div className="region">{activeStop.region}</div>
              <div className="detail-meta">
                <div className="m">Date<b>{activeStop.dates}</b></div>
                <div className="m">Notti<b>{activeStop.nights || '—'}</b></div>
              </div>
            </div>

            <div className="detail-body">
              {/* Voli / Trasferimento Accordion */}
              {!activeStop.isReturn ? (
                <>
                  <details className="section-acc">
                    <summary>
                      <span className="ico">✈️</span>
                      <span>{activeStop.arrival.label}</span>
                      <span className="line"></span>
                      <span className="toggle">+</span>
                    </summary>
                    <div className="section-body">
                      <div className="pass-row">
                        {activeStop.arrival.segments.map((seg, idx) => (
                          <div className="boarding-pass" key={idx}>
                            <div className="bp-main">
                              <div className="bp-top">
                                <div className="bp-route">{seg.route}<small>{seg.date}</small></div>
                                <div className="bp-company">{seg.company}</div>
                              </div>
                              <div className="bp-times">
                                <div><div className="t-label">Partenza</div><div className="t-val">{seg.dep}</div></div>
                                <div><div className="t-label">Arrivo</div><div className="t-val">{seg.arr}</div></div>
                                <div><div className="t-label">Durata</div><div className="t-val">{seg.duration}</div></div>
                              </div>
                              {seg.note && <div className="bp-note" dangerouslySetInnerHTML={{ __html: seg.note }} />}
                              {seg.bookedVia && (
                                <div className="bp-booking">
                                  🎫 Prenotato con <b>{seg.bookedVia}</b>{seg.bookingNote ? ' · ' + seg.bookingNote : ''}
                                </div>
                              )}
                            </div>
                            <div className="bp-stub">
                              <div className="plane">✈️</div>
                              <div className="flightno">{seg.flightNo}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {activeStop.arrival.footNote && (
                        <div className="bp-note" style={{ marginTop: '10px' }}>{activeStop.arrival.footNote}</div>
                      )}
                    </div>
                  </details>

                  {/* Hotel Accordion */}
                  <details className="section-acc">
                    <summary>
                      <span className="ico">🏨</span>
                      <span>Dove si dorme</span>
                      <span className="line"></span>
                      <span className="toggle">+</span>
                    </summary>
                    <div className="section-body">
                      <div className="tag-wrap">
                        <div className="luggage-tag">
                          <div className="tt-hotel">{activeStop.hotel.name}</div>
                          <div className="tt-area">{activeStop.hotel.area}</div>
                          <div className="tt-grid">
                            <div><div className="lab">Check-in</div><div className="val">{activeStop.hotel.checkin}</div></div>
                            <div><div className="lab">Check-out</div><div className="val">{activeStop.hotel.checkout}</div></div>
                            <div><div className="lab">Durata</div><div className="val">{activeStop.hotel.nights}</div></div>
                          </div>
                          {activeStop.hotel.map && (
                            <a className="tt-dir" href={mapLink(activeStop.hotel.map)} target="_blank" rel="noopener noreferrer">
                              📍 Indicazioni
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </details>

                  {/* Days/Activities Accordion */}
                  {activeStop.days && activeStop.days.length > 0 && (
                    <details className="section-acc">
                      <summary>
                        <span className="ico">🗺️</span>
                        <span>Cosa fare</span>
                        <span className="line"></span>
                        <span className="toggle">+</span>
                      </summary>
                      <div className="section-body">
                        <div className="day-list">
                          {activeStop.days.map((day, dIdx) => (
                            <div className="day-item" key={dIdx}>
                              <div className="day-head">
                                <div className="dd">{day.dd}</div>
                                <div className="dt">{day.title}</div>
                              </div>
                              <details className="trailer">
                                <summary>Anteprima della giornata</summary>
                                <p>{day.trailer}</p>
                              </details>
                              <div className="activity-list">
                                {day.activities.map((act, aIdx) => {
                                  const clickable = !!(act.images || act.facts);
                                  const dirBtn = act.map ? (
                                    <a className="dir-btn" href={mapLink(act.map)} target="_blank" rel="noopener noreferrer" title={`Indicazioni · ${act.name}`} onClick={(e) => e.stopPropagation()}>📍</a>
                                  ) : null;

                                  if (!clickable) {
                                    return (
                                      <div className="activity-plain" key={aIdx}>
                                        <div className="a-text">
                                          <div className="a-name">{act.name}</div>
                                          <div className="a-blurb">{act.blurb}</div>
                                        </div>
                                        {dirBtn}
                                      </div>
                                    );
                                  }

                                  const thumb = (act.images && act.images[0]) ? (
                                    <img className="activity-thumb" src={commonsImg(act.images[0], 400)} alt={act.name} loading="lazy" />
                                  ) : null;

                                  return (
                                    <div className="activity-card" key={aIdx} onClick={() => setActiveActivity(act)}>
                                      {thumb}
                                      <div className="a-body">
                                        <div className="a-text">
                                          <div className="a-name">{act.name}</div>
                                          <div className="a-blurb">{act.blurb}</div>
                                          <div className="a-hint">🔎 Foto e curiosità</div>
                                        </div>
                                        {dirBtn}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  )}
                </>
              ) : (
                <>
                  {/* Return Segment */}
                  <details className="section-acc">
                    <summary>
                      <span className="ico">✈️</span>
                      <span>Come si parte</span>
                      <span className="line"></span>
                      <span className="toggle">+</span>
                    </summary>
                    <div className="section-body">
                      <div className="pass-row">
                        {activeStop.legOut && (
                          <div className="boarding-pass">
                            <div className="bp-main">
                              <div className="bp-top">
                                <div className="bp-route">{activeStop.legOut.route}<small>{activeStop.legOut.date}</small></div>
                                <div className="bp-company">{activeStop.legOut.company}</div>
                              </div>
                              <div className="bp-times">
                                <div><div className="t-label">Partenza</div><div className="t-val">{activeStop.legOut.dep}</div></div>
                                <div><div className="t-label">Arrivo</div><div className="t-val">{activeStop.legOut.arr}</div></div>
                                <div><div className="t-label">Durata</div><div className="t-val">{activeStop.legOut.duration}</div></div>
                              </div>
                              {activeStop.legOut.note && <div className="bp-note" dangerouslySetInnerHTML={{ __html: activeStop.legOut.note }} />}
                              {activeStop.legOut.bookedVia && (
                                <div className="bp-booking">
                                  🎫 Prenotato con <b>{activeStop.legOut.bookedVia}</b>{activeStop.legOut.bookingNote ? ' · ' + activeStop.legOut.bookingNote : ''}
                                </div>
                              )}
                            </div>
                            <div className="bp-stub">
                              <div className="plane">✈️</div>
                              <div className="flightno">{activeStop.legOut.flightNo}</div>
                            </div>
                          </div>
                        )}
                        <div style={{ margin: '16px 0 4px', fontFamily: 'Space Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--ink-soft)' }}>
                          Rientro internazionale · via Jeddah
                        </div>
                        {activeStop.legs && activeStop.legs.map((leg, idx) => (
                          <div className="boarding-pass" key={idx}>
                            <div className="bp-main">
                              <div className="bp-top">
                                <div className="bp-route">{leg.route}<small>{leg.date}</small></div>
                                <div className="bp-company">{leg.company}</div>
                              </div>
                              <div className="bp-times">
                                <div><div className="t-label">Partenza</div><div className="t-val">{leg.dep}</div></div>
                                <div><div className="t-label">Arrivo</div><div className="t-val">{leg.arr}</div></div>
                                <div><div className="t-label">Durata</div><div className="t-val">{leg.duration}</div></div>
                              </div>
                              {leg.note && <div className="bp-note" dangerouslySetInnerHTML={{ __html: leg.note }} />}
                              {leg.bookedVia && (
                                <div className="bp-booking">
                                  🎫 Prenotato con <b>{leg.bookedVia}</b>{leg.bookingNote ? ' · ' + leg.bookingNote : ''}
                                </div>
                              )}
                            </div>
                            <div className="bp-stub">
                              <div className="plane">✈️</div>
                              <div className="flightno">{leg.flightNo}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>

                  {/* Transit Hotel Accordion */}
                  <details className="section-acc">
                    <summary>
                      <span className="ico">🏨</span>
                      <span>Dove si dorme · scalo a Jeddah</span>
                      <span className="line"></span>
                      <span className="toggle">+</span>
                    </summary>
                    <div className="section-body">
                      <div className="tag-wrap">
                        <div className="luggage-tag">
                          <div className="tt-hotel">{activeStop.transitHotel?.name}</div>
                          <div className="tt-area">{activeStop.transitHotel?.area}</div>
                          <div className="tt-grid">
                            <div><div className="lab">Check-in</div><div className="val">{activeStop.transitHotel?.checkin}</div></div>
                            <div><div className="lab">Check-out</div><div className="val">{activeStop.transitHotel?.checkout}</div></div>
                            <div><div className="lab">Durata</div><div className="val">{activeStop.transitHotel?.nights}</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </>
              )}

              {/* Safety Accordion */}
              {activeStop.safety && activeStop.safety.length > 0 && (
                <details className="section-acc">
                  <summary>
                    <span className="ico">🛡️</span>
                    <span>Accortezze</span>
                    <span className="line"></span>
                    <span className="toggle">+</span>
                  </summary>
                  <div className="section-body">
                    <div className="safety-list">
                      {activeStop.safety.map((safe, idx) => {
                        const cls = safe.lvl === 'critical' ? 'critical' : (safe.lvl === 'info' ? 'info' : '');
                        return (
                          <div className={`safety-item ${cls}`} key={idx}>
                            <div className="s-ico">{safe.ico}</div>
                            <div className="s-text">
                              <div className="s-title">{safe.t}</div>
                              <div className="s-body" dangerouslySetInnerHTML={{ __html: safe.b }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ marginTop: '12px' }}>
                      <a className="briefing-jump" href="#briefingSection" onClick={(e) => { e.preventDefault(); setActiveTab('briefing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>📋 Apri il briefing generale</a>
                    </div>
                  </div>
                </details>
              )}

              {activeStop.tips && (
                <div className="tip-box"><b>Nota pratica.</b> {activeStop.tips}</div>
              )}

              {/* Prev / Next stop navigation buttons */}
              <div className="detail-nav">
                {activeStopId > 1 ? (
                  <div className="navbtn prev" onClick={() => handleSelectStop(activeStopId - 1, true)}>
                    <span className="arrow">←</span>
                    <div>
                      <div className="lbl">Tappa precedente</div>
                      <div className="nm">{stops.find(x => x.id === activeStopId - 1)?.name}</div>
                    </div>
                  </div>
                ) : <div />}
                {activeStopId < stops.length ? (
                  <div className="navbtn next" onClick={() => handleSelectStop(activeStopId + 1, true)}>
                    <span className="arrow">→</span>
                    <div>
                      <div className="lbl">Tappa successiva</div>
                      <div className="nm">{stops.find(x => x.id === activeStopId + 1)?.name}</div>
                    </div>
                  </div>
                ) : <div />}
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {activeTab === 'briefing' && (
          <section className="briefing-section" id="briefingSection">
            <div className="section-head text-center" style={{ marginBottom: '32px' }}>
              <span className="eyebrow" style={{ color: 'var(--coral-deep)', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>🛡️ Briefing generale</span>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--ink)', margin: '8px 0 6px' }}>Prima di partire, e una volta là</h2>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '600px', margin: '0 auto', fontSize: '14px', lineHeight: 1.55 }}>
                Documenti, farmacia da viaggio, regole di comportamento e numeri utili. Fonte principale: scheda Indonesia di <b>viaggiaresicuri.it</b> (Unità di Crisi, Ministero degli Esteri), integrata con fonti sanitarie e allerte vulcaniche aggiornate.
              </p>
            </div>
            <div className="briefing-body">
              <details className="acc">
                  <summary><span className="ico">📄</span> Documenti e ingresso<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <p className="warn"><b>La trappola più insidiosa:</b> ci sono stati casi di turisti <b>italiani respinti</b> perché l'immigrazione ha contestato l'integrità del libretto del passaporto. Controllate <b>oggi</b> entrambi i passaporti: nessuno strappo o taglio, <b>nessuna scollatura</b> (soprattutto vicino alla copertina), pagina con foto e dati perfectly leggibile, nessun segno o macchia su foto e codice a barre, nessuna pagina rimossa.</p>
                    <ul>
                      <li><b>Passaporto:</b> almeno <b>6 mesi</b> di validità residua e <b>due pagine bianche</b>. Requisito tassativo, nessuna eccezione.</li>
                      <li><b>e-VOA (visto):</b> online su <a href="https://evisa.imigrasi.go.id" target="_blank" rel="noopener noreferrer">evisa.imigrasi.go.id</a> circa una settimana prima della partenza. IDR 500.000, valido 30 giorni (voi ne state 20). Serve anche un biglietto di ritorno o proseguimento.</li>
                      <li><b>Dichiarazione doganale elettronica:</b> da compilare <b>non prima di 3 giorni</b> dall'arrivo su <a href="https://allindonesia.imigrasi.go.id" target="_blank" rel="noopener noreferrer">allindonesia.imigrasi.go.id</a></li>
                      <li><b>Tassa turistica Bali:</b> IDR 150.000 a testa, dovuta anche arrivando dal resto dell'Indonesia — vale per voi il 3/08 da Labuan Bajo. Si paga su <a href="https://lovebali.baliprov.go.id" target="_blank" rel="noopener noreferrer">lovebali.baliprov.go.id</a>, si riceve un QR: salvatelo offline. <b>Spegnete la VPN e gli ad-blocker</b>, o il portale fallisce. L'unico dominio ufficiale finisce in <b>.go.id</b>: esistono cloni che fanno pagare il doppio.</li>
                      <li><b>Registrate il viaggio</b> su <a href="https://www.dovesiamonelmondo.it" target="_blank" rel="noopener noreferrer">dovesiamonelmondo.it</a> o con l'app <b>Viaggiare Sicuri</b>, e segnalate la presenza a consolare.jakarta@esteri.it con generalità, periodo e recapiti.</li>
                      <li>Portate <b>sempre il passaporto</b> con voi: ci sono stati fermi in cella fino a identificazione per chi ne era sprovvisto.</li>
                    </ul>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">💊</span> Farmacia da viaggio<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <p>La logica: alle Gili e a Komodo le farmacie sono poche e voi cambiate isola ogni pochi giorni. Quello che vi serve per gestire eventuali imprevisti durante il viaggio:</p>
                    <table className="kit-table">
                      <tbody>
                        <tr><td>Sali reidratanti</td><td>Il più importante: contro il Bali belly il rischio vero è la disidratazione, non la diarrea in sé</td></tr>
                        <tr><td>Loperamide (Imodium)</td><td>Sintomatico, per quando dovete prendere un volo o il traghetto</td></tr>
                        <tr><td>Fermenti lattici</td><td>Aiutano a riequilibrare la flora intestinale durante il viaggio</td></tr>
                        <tr><td>Paracetamolo + ibuprofene</td><td>Febbre, dolori, post-Batur</td></tr>
                        <tr><td>Antistaminico</td><td>Punture e reazioni</td></tr>
                        <tr><td>Repellente (DEET/icaridina)</td><td>La dengue è endemica: è la difesa principale</td></tr>
                        <tr><td>Disinfettante, cerotti, garze</td><td>Ferite da corallo e scogli alle Gili</td></tr>
                        <tr><td>Gel mani alcolico</td><td>Prevenzione diretta</td></tr>
                        <tr><td>SPF 50+</td><td>Sole equatoriale</td></tr>
                        <tr><td>Antibiotico</td><td>Solo se ve lo prescrive il vostro medico prima di partire, per i casi seri</td></tr>
                      </tbody>
                    </table>
                    <p className="warn"><b>Farmaci vietati:</b> in Indonesia molti farmaci da prescrizione come <b>codeina, sonniferi e trattamenti per l'ADHD sono illegali</b>. Per <b>ansiolitici e benzodiazepine</b> serve un documento ufficiale con prescrizione e dosaggio <b>in inglese</b>. Se qualcuno di voi due li usa abitualmente, portate quel documento.</p>
                    <p><b>Malaria — merita una telefonata alla ASL.</b> Viaggiare Sicuri elenca come endemiche le province orientali e <b>Lombok</b>: due delle vostre tappe. Ma le Gili e le zone turistiche come Kuta Lombok sono considerate a rischio molto basso, e per Komodo e Flores la maggior parte dei viaggiatori non prende profilassi (Komodo è secca quasi tutto l'anno, pochissime zanzare). Le fonti divergono: il CDC classifica le Gili come "nessun rischio", altri database specialistici consigliano le pastiglie. <b>Portate l'itinerario preciso a un centro di medicina dei viaggi</b> e fatevelo dire da loro.</p>
                    <p><b>Rabbia.</b> A Bali il vaccino antirabbico post-esposizione è spesso difficile da reperire negli ospedali per costo e scarsa disponibilità — le cliniche private di Ubud lo tengono in stock. Vedi le accortezze della tappa di Ubud per cosa fare in caso di morso o graffio.</p>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">💧</span> Acqua e cibo<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <ul>
                      <li>Solo <b>acqua in bottiglia sigillata</b>, mai dal rubinetto — <b>anche per lavarvi i denti</b>.</li>
                      <li><b>Niente ghiaccio</b>, a meno che i cubetti non siano <b>bucati al centro</b>: significa che è industriale, prodotto con acqua filtrata.</li>
                      <li>Lavare frutta e verdura con disinfettanti (amuchina o bicarbonato, reperibili in loco). Meglio evitare crudo, buffet scoperti e frutta non sbucciata.</li>
                      <li>Come scegliere dove mangiare: locali con <b>buon ricambio di clienti</b>, cucina visibile, cibo cotto al momento e servito caldo.</li>
                    </ul>
                    <p><b>Se arriva il Bali belly:</b> riposo, idratazione con sali, dieta leggera (riso in bianco, banane, zuppe). Ma con <b>febbre alta, sangue nelle feci o sintomi oltre le 48 ore</b> → medico.</p>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">🙏</span> Comportamento<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <p><b>Effusioni in pubblico.</b> La Farnesina è esplicita: le effusioni amorose in pubblico possono essere sanzionate. Parliamo di buon senso, non di rinunciare a tenersi per mano — ma baci e abbracci prolungati vanno tenuti per gli spazi privati. Il livello di tolleranza cambia molto da zona a zona: trovate la nota specifica dentro ogni tappa.</p>
                    <p><b>Nei templi:</b> sarong e spalle coperte (noleggio al cancello, IDR 10.000–20.000). <b>Mai calpestare i canang sari</b>, le offerte di fiori a terra: giratele. Donne mestruate fuori dalle aree sacre.</p>
                    <p><b>Regole ufficiali di Bali</b> (Circolare del Governatore SE n. 7/2025): vietato arrampicarsi su alberi sacri o monumenti, foto inappropriate o nude nei siti religiosi, gettare rifiuti in laghi/fiumi/mare, plastica monouso, comportamenti aggressivi verso locali o altri turisti. C'è una task force apposita: le violazioni gravi portano a <b>deportazione e blacklist</b>, non ad avvertimenti.</p>
                    <p><b>Soldi:</b> cambiare solo presso money changer autorizzati e <b>ricontare i contanti davanti all'operatore prima di uscire</b> — le frodi sulla somma sono frequenti. Mai perdere di vista la carta di credito: le clonazioni sono in aumento.</p>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">⚠️</span> I tre rischi trasversali<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <p><b>🍸 Metanolo — il più serio.</b> In Indonesia si registrano <b>decessi e danni permanenti</b> (coma, convulsioni, cecità, danni al sistema nervoso) da alcolici contenenti metanolo per distillazione inadeguata. I casi si sono verificati in bar, negozi e hotel proprio nelle zone turistiche di <b>Bali, Lombok e Gili</b> — tutte vostre tappe. Bande criminali producono repliche contraffatte di marche famose. Le bevande interessate: l'<b>Arak</b> (liquore di riso o zucchero di palma), cocktail e superalcolici contraffatti — e l'Arak viene spesso usato nei locali per allungare i superalcolici.<br />
                    <b>Regole:</b> solo locali autorizzati, mai bevande artigianali, sigilli intatti, etichette senza errori ortografici. <b>Sintomi:</b> confusione, vertigini, sonnolenza o forte stanchezza, vomito, <b>alterazioni della vista</b> (visione offuscata, difficoltà con le luci intense), dolori addominali e muscolari. <b>In pratica: birra in bottiglia sigillata, e lasciate perdere i cocktail nei baretti economici.</b></p>
                    <p><b>🥤 Spiking.</b> Segnalati casi di somministrazione di droghe a fini di stupro a <b>Bali, Lombok e Gili</b>. Attenzione durante la preparazione delle bevande, mai lasciarle incustodite, mai accettarle da sconosciuti.</p>
                    <p><b>🛵 Scippi e sicurezza notturna.</b> Borseggi condotti <b>da uomini in motorino ai danni di donne straniere</b> nelle ore serali, vicino ai locali notturni. Taxi solo di compagnie registrate (Bluebird, Silverbird); con le app, verificare che l'autista corrisponda e condividere il viaggio. <b>In caso di rapina, non opporre resistenza.</b></p>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">🏥</span> Assicurazione e sanità<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <p className="warn">Gli stranieri in Indonesia <b>non godono di alcuna forma di assistenza sanitaria pubblica</b>. E — indipendentemente dalla gravità delle condizioni del paziente — <b>l'assistenza non viene erogata senza previo pagamento o garanzia dell'assicurazione</b>.</p>
                    <ul>
                      <li>Il livello delle strutture pubbliche non è paragonabile agli standard occidentali.</li>
                      <li>I costi in clinica privata sono elevatissimi: <b>alcuni interventi superano i 100.000 euro</b>.</li>
                      <li>Nelle zone remote l'evacuazione medica può costare <b>decine di migliaia di euro</b>.</li>
                      <li>Per emergenze gravi è consigliabile rivolgersi alle strutture di <b>Singapore</b> (voli frequenti, meno di 2 ore).</li>
                      <li>Camere iperbariche solo a <b>Giava e Bali</b>.</li>
                    </ul>
                    <p><b>Verificate che la polizza copra:</b> evacuazione e rimpatrio sanitario, trekking su vulcano, attività in mare, ed eventuali <b>eventi vulcanici</b> — molte polizze standard li escludono.</p>
                  </div>
                </details>

                <details className="acc">
                  <summary><span className="ico">📞</span> Numeri e contatti utili<span className="chev">▸</span></summary>
                  <div className="acc-body">
                    <div className="emergency-grid">
                      <div className="emg"><span className="n">119</span><span className="l">Emergenze sanitarie</span></div>
                      <div className="emg"><span className="n">110</span><span className="l">Polizia</span></div>
                      <div className="emg"><span className="n">113</span><span className="l">Vigili del fuoco</span></div>
                    </div>
                    <p><b>Ambasciata d'Italia a Jakarta</b><br />Jalan Diponegoro 45, Menteng — tel. +62 21 319 374 45<br />consolare.jakarta@esteri.it</p>
                    <p><b>Cellulare emergenze</b> (solo emergenze reali: incidenti, arresti, calamità)<br />Dall'Indonesia: <b>08151811344</b> — dall'Italia: +62 815 181 1344<br />Attivo negli orari di chiusura dell'ambasciata: lun–gio 18:30–22:00, ven 15:30–22:00, sabato/domenica/festivi 08:30–22:00.</p>
                    <p className="warn">Il <b>Consolato Onorario a Bali è attualmente vacante</b>: il riferimento per tutta l'Indonesia è Jakarta.</p>
                    <p><b>Vulcani in tempo reale:</b> <a href="https://magma.esdm.go.id" target="_blank" rel="noopener noreferrer">magma.esdm.go.id</a><br />
                    <b>Scheda paese aggiornata:</b> <a href="https://www.viaggiaresicuri.it/find-country/country/IDN" target="_blank" rel="noopener noreferrer">viaggiaresicuri.it</a></p>
                    <p>Se subite comportamenti scorretti da parte di rappresentanti delle Autorità locali, segnalatelo subito a consolare.jakarta@esteri.it indicando la stazione di Polizia e possibilmente il nome dell'agente: sono stati riferiti casi di <b>richieste improprie di denaro</b>, presentate come costi amministrativi, per ricevere denunce di furto o aggressione — anche a Bali e Lombok.</p>
                  </div>
                </details>
            </div>
          </section>
        )}

        {activeTab === 'valigia' && (
          <section className="briefing-section" id="valigiaSection">
            <div className="section-head text-center" style={{ marginBottom: '28px' }}>
              <span className="eyebrow" style={{ color: 'var(--coral-deep)', fontWeight: 700, fontSize: '11.5px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>🎒 La valigia</span>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--ink)', margin: '8px 0 6px' }}>Gestione Bagagli e Valigia</h2>
            </div>

            {/* GESTIONE BAGAGLI */}
            <div className="baggage-alert" style={{
              background: 'var(--paper)',
              border: '1px solid var(--sand-deep)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '28px',
              color: 'var(--ink)',
              boxShadow: '0 4px 18px rgba(14, 77, 60, 0.05)'
            }}>
              <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--jungle-deep)', fontWeight: '700', fontSize: '17px' }}>
                🧳 Gestione Bagagli
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                <div style={{ background: 'var(--sand)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--sand-deep)', fontSize: '13.5px' }}>
                  <b style={{ color: 'var(--jungle-deep)', display: 'block', marginBottom: '4px', fontSize: '14px' }}>Roma – Jakarta</b>
                  <span style={{ color: 'var(--ink-soft)' }}>7 kg cabina e 23 kg stiva</span>
                </div>
                <div style={{ background: 'var(--sand)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--sand-deep)', fontSize: '13.5px' }}>
                  <b style={{ color: 'var(--jungle-deep)', display: 'block', marginBottom: '4px', fontSize: '14px' }}>Jakarta – Yogyakarta</b>
                  <span style={{ color: 'var(--ink-soft)' }}>7 kg cabina e 20 kg stiva</span>
                </div>
                <div style={{ background: 'var(--sand)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--sand-deep)', fontSize: '13.5px' }}>
                  <b style={{ color: 'var(--jungle-deep)', display: 'block', marginBottom: '4px', fontSize: '14px' }}>Yogyakarta – Komodo (2 voli)</b>
                  <span style={{ color: 'var(--ink-soft)' }}>7 kg cabina e 20 kg stiva</span>
                </div>
                <div style={{ background: 'var(--sand)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--sand-deep)', fontSize: '13.5px' }}>
                  <b style={{ color: 'var(--jungle-deep)', display: 'block', marginBottom: '4px', fontSize: '14px' }}>Komodo – Bali</b>
                  <span style={{ color: 'var(--ink-soft)' }}>7 kg cabina e 15 kg stiva</span>
                </div>
                <div style={{ background: 'var(--sand)', padding: '12px 14px', borderRadius: '12px', border: '1px solid var(--sand-deep)', fontSize: '13.5px' }}>
                  <b style={{ color: 'var(--jungle-deep)', display: 'block', marginBottom: '4px', fontSize: '14px' }}>Lombok – Jakarta</b>
                  <span style={{ color: 'var(--ink-soft)' }}>7 kg cabina e 15 kg stiva</span>
                </div>
              </div>
              <div style={{ background: 'rgba(14, 77, 60, 0.06)', padding: '14px 18px', borderRadius: '12px', borderLeft: '4px solid var(--jungle)', color: 'var(--ink)', fontSize: '14px', lineHeight: '1.6' }}>
                💡 <b>Scelta ottimale per il viaggio:</b> Un <b>trolley da massimo 15 kg</b> (da imbarcare in stiva per rispettare tutte le tratte) + uno <b>zainone da massimo 7 kg</b> da portare in cappelliera.
              </div>
            </div>

            <div className="pack-toggle" style={{ marginBottom: '20px' }}>
              <button id="packBtnLeo" className={activePack === 'leo' ? 'active' : ''} onClick={() => setActivePack('leo')}>👤 Valigia Leo</button>
              <button id="packBtnEli" className={activePack === 'eli' ? 'active' : ''} onClick={() => setActivePack('eli')}>👤 Valigia Eli</button>
            </div>

            <div className="briefing-body">
                {(activePack === 'leo' ? PACK_LEO : PACK_ELI).map((cat, cIdx) => (
                  <details className="acc" key={cIdx} open>
                    <summary>
                      <span className="ico">{cat.ico}</span> {cat.title}
                      <span className="chev">▸</span>
                    </summary>
                    <div className="acc-body">
                      <ul className="pack-list">
                        {cat.items.map((it, iIdx) => {
                          const itemKey = `${activePack}-${cIdx}-${iIdx}`;
                          const isChecked = !!checkedItems[itemKey];
                          return (
                            <li key={iIdx} className={isChecked ? 'checked' : ''}>
                              <input 
                                type="checkbox" 
                                checked={isChecked}
                                onChange={(e) => handleCheckboxChange(itemKey, e.target.checked)} 
                              /> 
                              <span>{it}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </details>
                ))}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer>
        Fatto con <span className="heart">♥</span> per Leo &amp; Eli — buon viaggio nell'arcipelago.
      </footer>

      {/* BOTTOM NAVIGATION BAR */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <button 
            className={`nav-tab-item ${activeTab === 'itinerario' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('itinerario');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="nav-tab-icon">🗺️</span>
            <span className="nav-tab-label">Itinerario</span>
          </button>
          <button 
            className={`nav-tab-item ${activeTab === 'briefing' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('briefing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="nav-tab-icon">📋</span>
            <span className="nav-tab-label">Briefing</span>
          </button>
          <button 
            className={`nav-tab-item ${activeTab === 'valigia' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('valigia');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="nav-tab-icon">🎒</span>
            <span className="nav-tab-label">Valigia</span>
          </button>
        </div>
      </nav>

      {/* DETAILED PHOTO MODAL */}
      {activeActivity && (
        <div className="modal-overlay open" onClick={closeActivityModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeActivityModal}>✕</button>
            {activeActivity.images && activeActivity.images.length > 0 && (
              <div className="modal-gallery">
                {activeActivity.images.map((img: string, idx: number) => (
                  <img key={idx} src={commonsImg(img, 700)} alt={activeActivity.name} loading="lazy" />
                ))}
              </div>
            )}
            {activeActivity.images && activeActivity.images.length > 1 && (
              <div className="modal-gallery-hint">← scorri per altre foto →</div>
            )}
            <div className="modal-body">
              <div className="modal-eyebrow">Approfondimento</div>
              <div className="modal-title">{activeActivity.name}</div>
              <div className="modal-blurb">{activeActivity.blurb}</div>
              {activeActivity.facts && activeActivity.facts.length > 0 && (
                <ul className="modal-facts">
                  {activeActivity.facts.map((fact: string, idx: number) => (
                    <li key={idx}>{fact}</li>
                  ))}
                </ul>
              )}
              {activeActivity.map && (
                <a className="tt-dir" href={mapLink(activeActivity.map)} target="_blank" rel="noopener noreferrer">
                  📍 Indicazioni
                </a>
              )}
              {activeActivity.images && <div className="modal-credit">Foto: Wikimedia Commons</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
