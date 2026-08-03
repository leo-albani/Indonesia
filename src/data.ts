import { StopItinerary, PackingCategory } from "./types";

export const STOPS_DATA: StopItinerary[] = [
  {
    id: 1,
    num: "01",
    name: "Jakarta",
    region: "Tangerang, Giava — porta d'ingresso",
    dates: "27 – 29 luglio",
    nights: 2,
    accent: "gold",
    arrival: {
      label: "Come si arriva · da Roma Fiumicino",
      segments: [
        {
          route: "Roma (FCO) → Jeddah (JED)",
          flightNo: "SV204",
          company: "Saudia · SkyTeam",
          date: "27 lug 2026",
          dep: "09:25",
          arr: "15:10",
          duration: "4h 45m",
          note: "Terminal 3 → Terminal 1",
          bookedVia: "Trip.com",
          bookingNote: "gestione (check-in, modifiche) diretta su sito/app Saudia"
        },
        {
          route: "Jeddah (JED) → Giacarta (CGK)",
          flightNo: "SV816",
          company: "Saudia · SkyTeam",
          date: "27–28 lug 2026",
          dep: "17:25",
          arr: "07:35 (+1)",
          duration: "10h 10m",
          note: "Scalo a Jeddah di circa 2h15 · Terminal 1 → Terminal 3",
          bookedVia: "Trip.com",
          bookingNote: "gestione diretta su sito/app Saudia"
        }
      ],
      footNote: "Bagaglio incluso: 1 collo x 23kg a testa. Classe Guest Basic. Atterraggio a Giacarta la mattina del 28/07, giorno di puro recupero dal volo."
    },
    hotel: {
      name: "FM7 Resort Hotel — Jakarta Airport",
      area: "Tangerang, a pochi minuti dall'aeroporto Soekarno–Hatta",
      checkin: "27 lug, dalle 14:00",
      checkout: "29 lug, entro le 12:00",
      nights: "2 notti",
      map: "FM7 Resort Hotel Jakarta Airport, Tangerang"
    },
    days: [
      {
        dd: "28 LUG",
        title: "Recupero dal volo",
        trailer: "Nessun programma: giorno per smaltire il jet-lag e la notte in aereo, prima di ripartire per Yogyakarta.",
        activities: [
          {
            name: "Relax in hotel",
            blurb: "Giornata libera senza impegni fissi — utile anche per procurarsi rupie in contanti e una SIM/eSIM locale.",
            map: null
          }
        ]
      }
    ],
    tips: "Prima tappa più che altro un hub di atterraggio: il grosso del viaggio comincia da Yogyakarta.",
    safety: [
      {
        lvl: "info",
        ico: "💏",
        t: "Effusioni in pubblico: massima cautela",
        b: "Jakarta è la capitale di un Paese a maggioranza musulmana ed è la tappa più formale del viaggio. La Farnesina segnala che le effusioni amorose in pubblico possono essere sanzionate: qui vale la regola più prudente di tutto il viaggio — mano nella mano va bene, nient'altro in pubblico."
      },
      {
        lvl: "critical",
        ico: "🐟",
        t: "Pesce locale: meglio evitarlo qui",
        b: "L'Agenzia Nucleare indonesiana ha rilevato tracce di contaminazione da <b>Cesio-137</b> da un impianto di rottami metallici nella zona di <b>Banten</b> (~70 km da Jakarta): potrebbero essere contaminati i prodotti ittici delle acque vicine. Tangerang è in provincia di Banten. Sono in corso decontaminazione e accertamenti — per due notti di recupero, meglio mangiare altro."
      },
      {
        lvl: "warn",
        ico: "📢",
        t: "Evitare qualsiasi assembramento",
        b: "Ad agosto–settembre 2025 ci sono state violente proteste nella capitale, con vittime. La Farnesina raccomanda di evitare manifestazioni, raduni studenteschi e comizi politici: possono diventare violenti all'improvviso."
      },
      {
        lvl: "warn",
        ico: "🚕",
        t: "Solo taxi registrati",
        b: "Usare solo compagnie riconosciute (<b>Bluebird</b>, Silverbird) o app. Se prenotate con l'app, controllate che l'autista corrisponda e condividete il viaggio. Diffidare di chi offre taxi per strada."
      },
      {
        lvl: "info",
        ico: "🛂",
        t: "Passaporto sempre con voi",
        b: "Ci sono stati casi di connazionali fermati e trattenuti in cella fino all'identificazione perché sprovvisti di documenti."
      }
    ]
  },
  {
    id: 2,
    num: "02",
    name: "Yogyakarta",
    region: "Giava centrale",
    dates: "29 – 31 luglio",
    nights: 2,
    accent: "coral",
    arrival: {
      label: "Come si arriva · da Jakarta",
      segments: [
        {
          route: "Jakarta (CGK) → Yogyakarta (JOG)",
          flightNo: "Volo interno",
          company: "—",
          date: "29 lug 2026",
          dep: "10:40",
          arr: "~11:50",
          duration: "1h 10m",
          note: "Volo diretto, tratta domestica",
          bookedVia: "Kiss&Fly"
        }
      ],
      footNote: "Tratta breve e diretta, giusto il tempo di spostarsi a Giava centrale."
    },
    hotel: {
      name: "Novotel Suites Yogyakarta Malioboro",
      area: "Sulla via Malioboro, cuore della città",
      checkin: "29 lug, dalle 14:00",
      checkout: "31 lug, entro le 12:00",
      nights: "2 notti",
      map: "Novotel Suites Yogyakarta Malioboro"
    },
    days: [
      {
        dd: "29 LUG",
        title: "Arrivo e primo contatto con Yogyakarta",
        trailer: "Arrivo a Yogyakarta, sistemazione in hotel, passeggiata e shopping nei mercati del batik, cena presto nella Malioboro pedonale.",
        activities: [
          {
            name: "1. PASSEGGIATA E SHOPPING BATIK",
            blurb: "Pomeriggio dedicato ai giri in centro e allo shopping tra i mercati del batik e le vie tradizionali di Yogyakarta.",
            map: "Pasar Beringharjo, Yogyakarta",
            images: [
              "Pasar Beringharjo.jpg",
              "Malioboro Street, Yogyakarta.JPG",
              "Tugu Yogyakarta.jpg"
            ],
            facts: [
              "Pasar Beringharjo & Jalan Malioboro: shopping tra botteghe e bancarelle alla ricerca di capi in batik (contrattazione benvenuta).",
              "Tugu Monument (15 min a piedi): il monumento simbolo della città.",
              "Pomeriggio rilassante senza musei per esplorare a ritmo leggero e fare acquisti."
            ]
          },
          {
            name: "2. CENA PRESTO",
            blurb: "Cena ad ora di cena presto lungo Malioboro Street pedonale (car-free), ideale per mangiare bene e andare a dormire presto prima dell'alba a Borobudur.",
            map: "Jalan Malioboro, Yogyakarta",
            images: [
              "Andong Atau Delman Malioboro.jpg"
            ],
            facts: [
              "Malioboro Street diventa pedonale (car-free) dalle 17:00 in poi.",
              "Cena dagli angkringan (chioschetti di street food) o nei ristorantini su Malioboro.",
              "Consigliato andare a dormire presto per la levataccia del giorno dopo (sveglia ore ~02:30 per Borobudur)."
            ]
          }
        ]
      },
      {
        dd: "30 LUG",
        title: "Borobudur all'alba e Prambanan",
        trailer: "Sveglia prestissimo per l'alba a Borobudur, rientro in hotel a metà mattina, pomeriggio e tramonto a Prambanan.",
        transfers: [
          {
            route: "Hotel → Tempio di Borobudur",
            flightNo: "🚗 ~42 km",
            company: "Trasferimento privato",
            date: "30 lug 2026",
            dep: "03:30",
            arr: "~04:30",
            duration: "1 - 1,5 ore",
            note: "Distanza ~42 km · 1-1,5 ore di guida in auto"
          },
          {
            route: "Hotel → Tempio di Prambanan",
            flightNo: "🚗 ~17 km",
            company: "Trasferimento privato",
            date: "30 lug 2026",
            dep: "14:00 - 14:30",
            arr: "~15:00",
            duration: "30 - 40 min",
            note: "Distanza ~17 km · 30-40 minuti di guida in auto"
          }
        ],
        activities: [
          {
            name: "1. BOROBUDUR ALL'ALBA",
            blurb: "Orario: sveglia ~02:30-03:00, partenza dall'hotel ~03:30, arrivo e registrazione ~04:30, alba dalla sommità del tempio ~05:40-05:45, esplorazione con calma fino alle 07:30, colazione leggera in loco ~07:30-08:00. Rientro in hotel: ~09:30-10:00.",
            map: "Borobudur Temple, Magelang, Indonesia",
            images: [
              "Borobudur, Java, Indonesia, 20220817 1058 8808.jpg",
              "Stupa Borobudur.jpg",
              "Borobudur Temple Compounds-111351.jpg"
            ],
            facts: [
              "Orario: sveglia ~02:30-03:00, partenza dall'hotel ~03:30, arrivo e registrazione ~04:30.",
              "Alba dalla sommità del tempio ~05:40-05:45 (orario indicativo, Yogyakarta è vicino all'equatore quindi varia pochissimo tutto l'anno).",
              "Esplorazione con calma fino alle 07:30, colazione leggera in loco ~07:30-08:00.",
              "Rientro in hotel: ~09:30-10:00.",
              "Curiosità: la visita all'alba offre luce radente e atmosfera nebbiosa sulle migliaia di stupa, spesso con il vulcano Merapi visibile sullo sfondo, e permette di evitare folla e calore rispetto alla visita diurna."
            ]
          },
          {
            name: "2. PRANZO (dopo il rientro, metà/tarda mattinata)",
            blurb: "Di nuovo su Malioboro o nei dintorni dell'hotel, con tempo per doccia/riposo prima.",
            map: "Novotel Suites Yogyakarta Malioboro",
            images: [
              "Malioboro Street, Yogyakarta.JPG"
            ],
            facts: [
              "Rientro in hotel a metà mattina (~09:30-10:00) dopo l'escursione a Borobudur.",
              "Tempo dedicato a doccia, riposo e pranzo con calma su Malioboro o nei dintorni dell'hotel."
            ]
          },
          {
            name: "3. PRAMBANAN NEL POMERIGGIO",
            blurb: "Partenza dall'hotel ~14:00-14:30, arrivo ~15:00. Esplorazione del complesso di templi indù (il più grande dell'Asia), con possibilità di godersi anche il tramonto in loco ~17:30-17:45.",
            map: "Prambanan Temple, Yogyakarta, Indonesia",
            images: [
              "Prambanan Complex 1.jpg",
              "Yogyakarta Indonesia Prambanan-temple-complex-02.jpg"
            ],
            facts: [
              "Partenza dall'hotel ~14:00-14:30, arrivo ~15:00.",
              "Esplorazione del complesso di templi indù (il più grande dell'Asia sud-orientale).",
              "Possibilità di godersi anche il tramonto in loco ~17:30-17:45."
            ]
          },
          {
            name: "4. CENA SERALE",
            blurb: "Rientro a Yogyakarta città in serata. Consigliata Gudeg Yu Djum, una delle gudeg house più storiche e famose della città, oppure di nuovo la zona Malioboro per restare comodi vicino all'hotel dopo una giornata lunga.",
            map: "Gudeg Yu Djum, Yogyakarta",
            images: [
              "Gudeg Jogja.jpg"
            ],
            facts: [
              "Rientro a Yogyakarta città in serata.",
              "Consigliata Gudeg Yu Djum, una delle gudeg house più storiche e famose della città.",
              "In alternativa, di nuovo la zona Malioboro per restare comodi vicino all'hotel dopo una giornata lunga."
            ]
          }
        ],
        tips: "Giornata fisicamente impegnativa (sveglia prestissimo + due siti in un giorno), consigliare di andare a letto presto la sera del 29 per gestire la levataccia."
      }
    ],
    tips: "Borobudur e Prambanan nello stesso giorno è la combinazione classica consigliata (alba sull'uno, tramonto sull'altro): giornata piena ma con un riposo nel mezzo, non due tappe di fila senza sosta.",
    safety: [
      {
        lvl: "warn",
        ico: "💏",
        t: "Effusioni in pubblico: la zona più rigida dopo Jakarta",
        b: "Giava è molto più conservatrice di Bali: qui l'attenzione va tenuta alta quanto a Jakarta. Spalle e ginocchia coperte anche fuori dai siti religiosi. Mano nella mano va bene, <b>baci e abbracci prolungati meglio riservarli alla stanza d'hotel</b>."
      },
      {
        lvl: "warn",
        ico: "🌋",
        t: "Merapi in eruzione, allerta 3 su 4",
        b: "Il vulcano che domina Yogyakarta è in eruzione con livello di allerta <b>3 ('Standby')</b>, confermato a inizio luglio 2026. La città non è a rischio e non è nel vostro itinerario — ma se vi propongono un 'Merapi lava tour', verificate prima le zone di allerta su <a href='https://magma.esdm.go.id' target='_blank' rel='noopener noreferrer'>magma.esdm.go.id</a>. Le nubi di cenere possono influire sugli orari dei voli."
      },
      {
        lvl: "info",
        ico: "🚐",
        t: "Transfer per l'alba: solo tramite hotel",
        b: "Partenza notturna per Borobudur: organizzatela con l'hotel o un'agenzia rinomata, mai con intermediari 'free lance'."
      }
    ]
  },
  {
    id: 3,
    num: "03",
    name: "Komodo",
    region: "Labuan Bajo, Flores",
    dates: "31 lug – 3 agosto",
    nights: 3,
    accent: "jungle",
    arrival: {
      label: "Come si arriva · da Yogyakarta",
      segments: [
        {
          route: "Yogyakarta (JOG) → Jakarta (CGK)",
          flightNo: "Volo 1",
          company: "—",
          date: "31 lug 2026",
          dep: "07:55",
          arr: "09:05",
          duration: "1h 10m",
          note: "Partenza da Yogyakarta per Jakarta",
          bookedVia: "Kiss&Fly"
        },
        {
          route: "Jakarta (CGK) → Labuan Bajo / Komodo (LBJ)",
          flightNo: "Volo 2",
          company: "—",
          date: "31 lug 2026",
          dep: "13:00",
          arr: "16:25",
          duration: "2h 25m",
          note: "Scalo a Jakarta di ~4 ore (cambio aereo)",
          bookedVia: "Kiss&Fly"
        }
      ],
      footNote: "2 voli nella stessa giornata: partenza alle 07:55 da Yogyakarta, arrivo alle 09:05 a Jakarta, circa 4 ore di scalo e volo per Labuan Bajo (13:00 – 16:25)."
    },
    hotel: {
      name: "Harbour Komodo Hotel",
      area: "Labuan Bajo, sul porto",
      checkin: "31 lug, dalle 14:00",
      checkout: "3 ago, entro le 11:00",
      nights: "3 notti",
      map: "Harbour Komodo Hotel, Labuan Bajo"
    },
    days: [
      {
        dd: "31 LUG",
        title: "Spostamento e arrivo a Labuan Bajo",
        trailer: "Giornata interamente dedicata ai due voli di trasferimento via Jakarta e al relax con cenetta serale a Labuan Bajo.",
        activities: [
          {
            name: "1. SPOSTAMENTO IN AEREO (Volo con scalo)",
            blurb: "Volo 1 JOG-CGK (07:55 - 09:05), scalo di circa 4 ore a Jakarta e Volo 2 CGK-LBJ (13:00 - 16:25).",
            map: null,
            facts: [
              "Partenza da Yogyakarta (JOG) ore 07:55 con arrivo a Jakarta (CGK) ore 09:05.",
              "Scalo di ~4 ore all'aeroporto di Jakarta per sgranchirsi e pranzare con calma.",
              "Ripartenza ore 13:00 per Labuan Bajo / Komodo (LBJ) con atterraggio alle 16:25.",
              "Trasferimento al porto / hotel (Harbour Komodo Hotel) all'arrivo."
            ]
          },
          {
            name: "2. CENETTA SERALE A LABUAN BAJO",
            blurb: "Check-in in hotel e cenetta serale nei ristorantini sul porto di Labuan Bajo per iniziare la tappa a Komodo.",
            map: "Labuan Bajo waterfront, Indonesia",
            images: [
              "Labuan Bajo waterfront.jpg",
              "Labuan Bajo sunset (Flores, Indonesia 2016).jpg"
            ],
            facts: [
              "Cenetta serale nei ristorantini di pesce o locali sul porto di Labuan Bajo.",
              "Passeggiata serale e relax per recuperare dal viaggio in aereo."
            ]
          }
        ]
      },
      {
        dd: "1 AGO",
        title: "Relax sul porto",
        trailer: "Giornata cuscinetto per godersi Komodo con calma, prima del tour impegnativo del giorno dopo.",
        activities: [
          {
            name: "Relax e tramonto sul lungomare",
            blurb: "Poco da fare apposta: Komodo (la cittadina di Labuan Bajo) si vive bene passeggiando sul porto al tramonto, tra barche a vela e ristorantini di pesce.",
            map: "Labuan Bajo waterfront, Indonesia",
            images: [
              "Labuan Bajo waterfront.jpg",
              "Labuan Bajo sunset (Flores, Indonesia 2016).jpg"
            ],
            facts: [
              "Fino a pochi decenni fa era un piccolo villaggio di pescatori, oggi è la porta d'accesso al Parco di Komodo.",
              "Ogni sera migliaia di volpi volanti (pipistrelli giganti) sorvolano l'isola di Kalong al tramonto, spettacolo visibile anche dal lungomare."
            ]
          }
        ]
      },
      {
        dd: "2 AGO",
        title: "Tour in barca a Komodo",
        trailer: "Giornata intera in barca nel Parco Nazionale: draghi di Komodo, snorkeling e isole da cartolina.",
        activities: [
          {
            name: "Tour Parco Nazionale di Komodo",
            blurb: "Escursione giornaliera in barca tra le isole del parco, con trekking guidato per avvistare i draghi di Komodo e soste snorkeling.",
            map: "Komodo National Park, Indonesia",
            images: [
              "Pulau Padar 1.jpg",
              "Pink Beach, Padar Island, Komodo National Park.jpg",
              "Komodo dragon (Varanus komodoensis).jpg"
            ],
            facts: [
              "Il drago di Komodo è la specie di lucertola vivente più grande al mondo, fino a 3 metri di lunghezza.",
              "Vive allo stato selvatico solo in questa manciata di isole indonesiane.",
              "L'isola di Padar è famosa per il punto panoramico con tre spiagge di colore diverso visibili insieme: rosa, bianca e nera."
            ]
          }
        ]
      }
    ],
    tips: "È il punto più remoto e più a est del viaggio: da qui si torna verso ovest per il resto dell'itinerario. Il tour in barca è l'attività principale — meglio confermarlo con qualche giorno d'anticipo.",
    safety: [
      {
        lvl: "info",
        ico: "💏",
        t: "Effusioni in pubblico: più tranquillo, ma restate discreti",
        b: "Flores è a maggioranza cattolica, l'atmosfera è più rilassata rispetto a Giava — ma Komodo (la cittadina di Labuan Bajo) resta un centro piccolo, non una zona da resort internazionali come Bali. Mano nella mano senza problemi, il resto meglio tenerlo per l'hotel."
      },
      {
        lvl: "critical",
        ico: "⚠️",
        t: "La tappa più delicata secondo la Farnesina",
        b: "A <b>Flores e Labuan Bajo</b> si registra un aumento di casi di molestie e stupri ai danni di turiste in solitaria. Massima cautela negli spostamenti e nelle frequentazioni, soprattutto di notte. In pratica: Eli non deve mai girare da sola la sera."
      },
      {
        lvl: "critical",
        ico: "⛵",
        t: "Il tour in barca: non prendete il più economico",
        b: "La Farnesina raccomanda estrema cautela nei collegamenti via mare per il <b>rischio di incidenti e affondamenti</b> dovuti alla scarsa affidabilità delle imbarcazioni locali e all'impreparazione degli equipaggi. Verificate la presenza dell'equipaggiamento di salvataggio e l'affidabilità dell'operatore prima di pagare."
      },
      {
        lvl: "warn",
        ico: "🦎",
        t: "Ranger obbligatorio — e prenotate il tour ORA, non lì",
        b: "La guida-ranger è <b>non negoziabile</b> su tutti i trekking: i draghi sono predatori apicali realmente pericolosi e ci sono stati incidenti con visitatori usciti dai sentieri. Con il ranger e le regole rispettate il rischio è minimo.<br><br>Dal 2026 è sparito solo <b>l'acquisto al cancello il giorno stesso</b>: prenotare tramite hotel o un operatore resta il modo normale di fare questo tour, voi non dovete toccare l'app SiORA — se ne occupa chi organizza il giro inserendo i vostri dati passaporto. Ma da aprile 2026 c'è un tetto di <b>1.000 visitatori al giorno</b> per l'intero parco, e luglio-agosto è alta stagione: gli slot possono esaurirsi con settimane d'anticipo. <b>Prenotate il tour del 2/08 online adesso</b> (o scrivete subito all'Harbour Komodo Hotel), non aspettate il check-in del 31/07 — resterebbe solo un giorno di margine."
      },
      {
        lvl: "warn",
        ico: "🌋",
        t: "Lewotobi: possibili ritardi sul volo del 3/08",
        b: "Il vulcano Lewotobi Laki-Laki è sulla vostra stessa isola (Flores), ma all'estremità est, lontano da Labuan Bajo. È in <b>eruzione continua da marzo 2026</b>, allerta livello 3, con pennacchi di cenere ancora ai primi di luglio. Ha già causato disagi ai voli da e per Bali e Flores: è un rischio di ritardo, non per la vostra incolumità."
      },
      {
        lvl: "info",
        ico: "🤿",
        t: "Se fate immersioni",
        b: "Le camere iperbariche in Indonesia sono <b>solo a Giava e Bali</b>, e i collegamenti tra isole possono richiedere ore di volo. Verificate che l'assicurazione copra gli infortuni da attività subacquea."
      }
    ]
  },
  {
    id: 4,
    num: "04",
    name: "Ubud",
    region: "Bali",
    dates: "3 – 8 agosto",
    nights: 5,
    accent: "turquoise",
    arrival: {
      label: "Come si arriva · da Labuan Bajo",
      segments: [
        {
          route: "Labuan Bajo (LBJ) → Bali (DPS)",
          flightNo: "Volo interno",
          company: "—",
          date: "3 ago 2026",
          dep: "13:05",
          arr: "14:20",
          duration: "1h 15m",
          note: "Volo diretto verso Bali",
          bookedVia: "Kiwi.com"
        }
      ],
      footNote: "Da qui inizia la parte più lunga e rilassata del viaggio: 5 notti a Ubud."
    },
    hotel: {
      name: "Sunari Villa",
      area: "Ubud",
      checkin: "3 ago, check-in flessibile dalle 02:00",
      checkout: "8 ago, entro le 12:00",
      nights: "5 notti",
      map: "Sunari Villa, Ubud, Bali"
    },
    days: [
      {
        dd: "4 AGO",
        title: "Ubud centro, tutto a piedi",
        trailer: "Passeggiata panoramica all'alba, palazzo reale, tempio del loto e foresta delle scimmie — tutto raggiungibile a piedi nel cuore di Ubud, cena con vista su un tempio nella giungla.",
        activities: [
          {
            name: "1. CAMPUHAN RIDGE WALK",
            blurb: "Da fare la mattina presto, prima del caldo. Passeggiata panoramica su cresta erbosa con vista sulla valle, circa 20 minuti fino a un piccolo villaggio con vista sulle risaie circostanti. Aperta 24 ore, gratuita.",
            map: "Campuhan Ridge Walk, Ubud, Bali",
            images: [
              "Man in the rice fields in Ubud Wokshots.jpg",
              "Bali rice terraces.JPG"
            ],
            facts: [
              "Passeggiata panoramica lungo la cresta erbosa tra le valli dei fiumi Wos e Cerik.",
              "Percorso aperto 24 ore su 24, ad accesso gratuito.",
              "Circa 20 minuti di camminata fino al piccolo villaggio di Bangkiang Sidem con vista panoramica sulle risaie."
            ]
          },
          {
            name: "2. UBUD PALACE (Puri Saren Agung)",
            blurb: "Il palazzo reale di Ubud, ingresso libero, architettura balinese tradizionale con cortili scolpiti.",
            map: "Ubud Palace, Bali",
            images: [
              "Puri Saren Agung, Ubud, Bali.jpg",
              "Ubud Palace 2019.jpg"
            ],
            facts: [
              "Il palazzo reale di Ubud, residenza della famiglia reale balinese, costruito all'inizio del XIX secolo.",
              "Ingresso libero: architettura balinese tradizionale con cortili finemente scolpiti e portali decorati.",
              "Nel cortile principale si tengono ogni sera spettacoli di danza tradizionale balinese."
            ]
          },
          {
            name: "3. PURA TAMAN SARASWATI",
            blurb: "Piccolo ma scenico tempio nel cuore di Ubud, dedicato alla dea della conoscenza, con laghetto di fiori di loto davanti all'ingresso.",
            map: "Pura Taman Saraswati, Ubud, Bali",
            images: [
              "Pura Taman Saraswati, Ubud, Bali.jpg"
            ],
            facts: [
              "Tempio dedicato a Dewi Saraswati, la dea indù balinese dell'arte, della saggezza e della conoscenza.",
              "Caratterizzato dal celebre e suggestivo laghetto ricoperto di fiori di loto rosa davanti al portale scolpito.",
              "Progettato dal rinomato maestro d'arte balinese I Gusti Nyoman Lempad."
            ]
          },
          {
            name: "4. MONKEY FOREST (Sacred Monkey Forest Sanctuary)",
            blurb: "Santuario con centinaia di macachi grigi in libertà, rovine di templi nella foresta. Attenzione: non portare cibo/buste visibili, non fissare negli occhi le scimmie, tenere stretti oggetti come occhiali/cappelli.",
            map: "Sacred Monkey Forest Sanctuary, Ubud, Bali",
            images: [
              "Sacred Monkey Forest Sanctuary (49818583783).jpg",
              "Monkey Forest Road, Ubud, Bali (15009558257).jpg"
            ],
            facts: [
              "Santuario naturale nel cuore di Ubud che ospita centinaia di macachi grigi dalla coda lunga in libertà.",
              "Immerso in una foresta secolare con tre templi indù del XIV secolo ancora attivi.",
              "Regole tassative: non portare cibo né buste visibili, non fissare le scimmie negli occhi e tenere ben saldi occhiali, cappelli e oggetti personali."
            ]
          },
          {
            name: "5. CENA: CANTINA ROOFTOP RESTAURANT",
            blurb: "Vista diretta su un tempio nella giungla dalla terrazza, consigliato prenotare in anticipo (molto richiesto), consiglio arrivare prima del tramonto per la luce migliore.",
            map: "Cantina Rooftop Restaurant, Ubud, Bali",
            images: [
              "Ubud jungle view.jpg"
            ],
            facts: [
              "Ristorante rooftop con vista diretta mozzafiato su un tempio immerso nella giungla di Ubud.",
              "Molto richiesto: raccomandato prenotare in anticipo.",
              "Consigliabile arrivare prima del tramonto per godersi la luce migliore sulla giungla."
            ]
          }
        ]
      },
      {
        dd: "5 AGO",
        title: "Anello nord (Tegalalang e Tampaksiring)",
        trailer: "Le terrazze di riso più famose di Bali, una sosta caffè tra le risaie, un santuario scavato nella roccia lungo un fiume, e una cascata nascosta nella giungla.",
        transfers: [
          {
            route: "Ubud → Anello Nord (Tegalalang, Tampaksiring, Kemenuh)",
            flightNo: "Auto Privata",
            company: "Driver locale con auto privata",
            date: "5 ago 2026",
            dep: "Mattina",
            arr: "Pomeriggio",
            duration: "Tour giornaliero",
            note: "Giro in auto privata con autista: partenza dall'hotel in mattinata. Le quattro tappe sono sulla stessa direttrice nord, con spostamenti brevi tra una e l'altra."
          }
        ],
        activities: [
          {
            name: "1. TEGALALANG RICE TERRACE",
            blurb: "Le terrazze di riso più famose e fotografate di Bali, valle verde a gradoni. Presenti altalene panoramiche e caffè con vista (a pagamento per le foto/altalene). Consigliata la mattina presto per meno folla.",
            map: "Tegalalang Rice Terrace, Bali",
            images: [
              "Bali rice terraces.JPG",
              "Rice fields of Bali.jpg"
            ],
            facts: [
              "Le terrazze di riso più iconiche di Bali, disposte a gradoni lungo la valle con sistema di irrigazione subak.",
              "Presenti altalene panoramiche e caffè con vista per scattare foto e rilassarsi.",
              "Consigliabile visitarle la mattina presto per evitare la calura e il grosso dei gruppi turistici."
            ]
          },
          {
            name: "2. BALI'AGRICULTURE (piantagione di caffè)",
            blurb: "Sosta in una piantagione con degustazione di tè e caffè locali, incluso il kopi luwak, vista sulle risaie circostanti.",
            map: "Bali Agriculture coffee plantation, Tegalalang",
            images: [
              "Coffee plantation in Bali.jpg"
            ],
            facts: [
              "Sosta in piantagione locale tra piante di caffè, cacao e spezie balinesi.",
              "Degustazione guidata di vari tipi di tè e caffè locali, incluso il celebre Kopi Luwak.",
              "Splendida vista aperta sulle risaie e sulla vegetazione circostante."
            ]
          },
          {
            name: "3. GUNUNG KAWI TAMPAKSIRING",
            blurb: "Complesso di santuari funerari scavati nella roccia lungo un fiume sacro, circondato da terrazze di riso, atmosfera suggestiva e meno affollata dei siti più turistici. Nota pratica: non comprare i sarong dai venditori lungo la strada, sono forniti gratuitamente all'ingresso.",
            map: "Gunung Kawi Tampaksiring, Bali",
            images: [
              "Bali.GunungKawi.jpg",
              "Gunung Kawi Rice Terrace Tampaksiring 1.jpg"
            ],
            facts: [
              "Complesso funerario dell'XI secolo con 10 imponenti santuari (candi) di 7 metri scavati nella parete rocciosa lungo il fiume Pakerisan.",
              "Atmosfera solenne e suggestiva, immersa tra risaie e giungla, meno affollata dei siti più turistici.",
              "Nota pratica: i sarong tradizionali obbligatori sono forniti gratuitamente all'ingresso (non serve acquistarli dai venditori di strada)."
            ]
          },
          {
            name: "4. UMA ANYAR WATERFALL",
            blurb: "Cascata nella giungla, meno battuta rispetto alle cascate più famose. Consigliato andarci la mattina presto per evitare la folla e godersela in tranquillità.",
            map: "Uma Anyar Waterfall, Kemenuh, Bali",
            images: [
              "Air Terjun Tegunungan waterfall.jpg",
              "Tegenungan Waterfall sideview.jpg"
            ],
            facts: [
              "Cascata immersa nella giungla balinese vicino a Kemenuh, ancora preservata dal turismo di massa.",
              "Ideale per un momento rinfrescante e tranquillo lontano dalla folla."
            ]
          }
        ]
      },
      {
        dd: "6 AGO",
        title: "Monte Batur all'alba + recupero",
        trailer: "Alba dalla cima di un vulcano attivo, poi una giornata di puro riposo dopo la levataccia.",
        activities: [
          {
            name: "1. MONTE BATUR — TREKKING ALL'ALBA",
            blurb: "Sveglia prestissimo (indicativamente 2:30-3:00), partenza al buio, trekking con guida obbligatoria per legge fino alla cima, alba spettacolare sopra le nuvole con vista su altri vulcani. Rientro in hotel a metà mattinata.",
            map: "Mount Batur, Kintamani, Bali",
            images: [
              "Mount of Batur sunrise.jpg",
              "Gunung Batur Kintamani Bali.jpg",
              "Mount Batur panorama.jpg"
            ],
            facts: [
              "Trekking notturno fino a 1.717 metri di quota per ammirare l'alba spettacolare sopra la caldera e il mare di nuvole.",
              "Guida locale accreditata obbligatoria per legge per l'intera ascensione.",
              "In vetta le temperature scendono a 10-15°C prima dell'alba: portate una felpa o una giacca leggera.",
              "⚠️ NOTA IMPORTANTE: Prenotare il tour con largo anticipo, idealmente non ridursi agli ultimi giorni — i tour popolari si esauriscono, specialmente in alta stagione."
            ]
          },
          {
            name: "2. POMERIGGIO DI RIPOSO",
            blurb: "Nessuna attività programmata, recupero dopo la sveglia notturna. Opzionale: classe leggera da The Yoga Barn per chi se la sente.",
            map: "The Yoga Barn, Ubud, Bali",
            images: [
              "Fleurs de Frangipanier (Île de la Réunion) (4125134278).jpg"
            ],
            facts: [
              "Rientro in hotel a metà mattina e pomeriggio interamente dedicato al riposo e al relax in villa.",
              "Opzionale per chi desidera fare attività leggera: classe di yoga o stretching da The Yoga Barn a Ubud."
            ]
          }
        ]
      },
      {
        dd: "7 AGO",
        title: "Rafting + anello sud",
        trailer: "Rapide sul fiume Ayung tra la giungla, poi un tempio-grotta e una delle cascate più spettacolari di Bali.",
        activities: [
          {
            name: "1. RAFTING SUL FIUME AYUNG (mattina)",
            blurb: "Circa 2-2,5 ore di rafting tra rapide e giungla lussureggiante lungo uno dei fiumi più famosi di Bali per questa attività. Non richiede esperienza pregressa. Portare vestiti comodi che si possono bagnare, scarpe adatte all'acqua, e denaro contante per eventuali extra.",
            map: "Ayung River Rafting, Ubud, Bali",
            images: [
              "White water rafting on Ayung River Bali.jpg",
              "Ayung River Bali.jpg"
            ],
            facts: [
              "Circa 2-2,5 ore di discesa lungo 10-12 km di fiume tra rapide divertenti (livello I-II), pareti rocciose scolpite e giungla lussureggiante.",
              "Non richiede esperienza pregressa: guida qualificata su ogni gommone e attrezzatura completa fornita.",
              "Consigliato: vestiti comodi che si bagnano, scarpe adatte all'acqua/scoglio e contanti per eventuali extra o mance."
            ]
          },
          {
            name: "2. GOA GAJAH (Elephant Cave)",
            blurb: "Tempio-grotta con ingresso scolpito, tappa breve ma suggestiva, vicina al fiume Ayung.",
            map: "Goa Gajah, Ubud, Bali",
            images: [
              "Goa Gajah 2019.jpg",
              "Goa Gajah sanctuary Bali.jpg"
            ],
            facts: [
              "Santuario storico risalente al IX secolo celebre per l'ingresso alla grotta scolpito con il volto demoniaco di un guardiano.",
              "All'interno si trovano nicchie di meditazione, altari e statue di Ganesha e Shiva.",
              "Tappa breve ma ricca di fascino e vicina al percorso del fiume Ayung."
            ]
          },
          {
            name: "3. CASCATA TEGENUNGAN",
            blurb: "Una delle cascate più spettacolari e famose di Bali, area balneabile ai piedi della cascata. Consigliate scarpe con buona aderenza per le scale/rocce bagnate, e andarci nel tardo pomeriggio per evitare il grosso della folla del mattino.",
            map: "Tegenungan Waterfall, Kemenuh, Bali",
            images: [
              "Air Terjun Tegunungan waterfall.jpg",
              "Tegenungan Waterfall sideview.jpg"
            ],
            facts: [
              "Una delle cascate più maestose e famose dell'isola, immersa in un gola verdeggiante.",
              "Ampia vasca naturale ai piedi del salto d'acqua per fare il bagno.",
              "Consigliate scarpe con buona aderenza per la gradinata e le rocce bagnate; ideale visitarla nel tardo pomeriggio per evitare il picco di folla mattutino."
            ]
          }
        ]
      }
    ],
    tips: "Rispetto al piano iniziale ho tolto Ulun Danu Bratan e Tanah Lot: entrambi ottimi in foto ma, secondo le recensioni recenti, vivibili solo primissima mattina, altrimenti diventano pullman di turisti e fila per lo scatto — soprattutto ad agosto. Ho tenuto Monkey Forest come richiesto e sostituito il resto con Sari Organic Walk, Gunung Kawi e Uma Anyar, meno battuti. Il Monte Batur va spostato liberamente su un altro giorno di questo blocco (o tolto) se non vi convince l'alzataccia.",
    safety: [
      {
        lvl: "info",
        ico: "💏",
        t: "Effusioni in pubblico: la zona più rilassata del viaggio",
        b: "Bali è a maggioranza indù ed è abituata da decenni a turismo occidentale: è la tappa dove più ci si può permettere qualche coccola in pubblico senza attirare attenzione, soprattutto nelle zone turistiche di Ubud. Restano fuori discussione solo i siti sacri e i templi, dove il rispetto conta di più."
      },
      {
        lvl: "critical",
        ico: "🐒",
        t: "Rabbia al Monkey Forest — regole precise",
        b: "A Bali molti animali sono affetti da rabbia (cani, gatti, scimmie) e ci sono stati decessi. La Farnesina sconsiglia vivamente il contatto fisico, <b>soprattutto con i primati del Tempio delle scimmie a Ubud</b>, che pur non aggressivi in alcuni casi hanno morso i visitatori. Sul posto: niente contatto visivo diretto, <b>non sorridete</b> (mostrare i denti è segno di aggressività), assicurate occhiali e cappelli, niente cibo né sacchetti di plastica/carta, mai toccarle — men che meno i cuccioli.<br><br><b>Se vi mordono o graffiano:</b> lavare la ferita con acqua corrente e sapone strofinando <b>almeno 15 minuti</b>, poi cure mediche immediate — il vaccino va fatto entro 24 ore, prima è meglio. Vale anche per un graffio leggero. Attenzione: per costo e scarsa disponibilità, il vaccino antirabbico è spesso difficile da trovare nelle strutture ospedaliere indonesiane — meglio le cliniche private per turisti di Ubud, che tengono in stock vaccino e immunoglobuline."
      },
      {
        lvl: "warn",
        ico: "🛵",
        t: "Grab sì, guidare da soli no",
        b: "A Bali c'è stato un <b>forte aumento degli incidenti con ciclomotori</b>, alcuni mortali — ma riguarda soprattutto i turisti che noleggiano uno scooter e lo guidano da soli, senza esperienza nel traffico locale (e senza patente internazionale spesso l'assicurazione del noleggio salta). Salire come passeggeri su un <b>Grab</b> guidato da un autista locale è tutta un'altra cosa: è la soluzione più raccomandata per spostarsi, con autista esperto e tracciato dall'app. Meglio ancora, quando possibile, l'auto: più comoda in due, e con autista per la giornata costa comunque poco."
      },
      {
        lvl: "warn",
        ico: "🌋",
        t: "Batur: guida obbligatoria e felpa",
        b: "La <b>guida registrata è obbligatoria per legge</b>: non si può salire da soli, l'obbligo è stato introdotto dopo l'aumento di infortuni e decessi sulle montagne. In vetta ci sono <b>10–15°C</b> prima dell'alba: sembra assurdo ai tropici, ma portate una felpa. Ultima eruzione nel 2000, vulcano monitorato: ogni segnale di attività porta alla cancellazione dei tour. Controllate comunque <a href='https://magma.esdm.go.id' target='_blank' rel='noopener noreferrer'>magma.esdm.go.id</a> prima di andare."
      },
      {
        lvl: "warn",
        ico: "🌙",
        t: "Cautela negli spostamenti notturni",
        b: "Continuano episodi di effrazione e furto nelle strutture turistiche. Preoccupante l'incremento di episodi di <b>violenza a scopo di rapina ai danni di donne straniere</b>, in alcuni casi con decesso della vittima. Rivolgersi solo a strutture e agenzie rinomate, evitare guide o intermediari 'free lance'."
      },
      {
        lvl: "info",
        ico: "🙏",
        t: "Nei templi (Batukaru, Gunung Kawi)",
        b: "Sarong e spalle coperte obbligatori — si noleggiano al cancello per IDR 10.000–20.000. La regola che conta di più: <b>mai calpestare i canang sari</b>, le offerte di fiori e incenso a terra ovunque. Calpestarle è offensivo sul serio: giratele. Le donne mestruate non entrano nelle aree sacre — è una convinzione balinese autentica, non una regola per turisti."
      }
    ]
  },
  {
    id: 5,
    num: "05",
    name: "Gili Air",
    region: "Isole Gili",
    dates: "8 – 12 agosto",
    nights: 4,
    accent: "coral",
    arrival: {
      label: "Come si arriva · da Bali",
      segments: [
        {
          route: "Padang Bai (Bali) → Gili Air",
          flightNo: "Traghetto AARN4304",
          company: "Wahana Virendra · Aluminium Fast Ferry",
          date: "8 ago 2026",
          dep: "08:30",
          arr: "10:30 (stimato)",
          duration: "2h",
          note: "Passeggeri: Leonardo Albani ed Elisabetta Fabretti",
          bookedVia: "12Go.asia"
        }
      ],
      footNote: "Check-in al porto almeno 60 minuti prima. Il traghetto fa tappa anche a Gili Trawangan prima di Gili Air. Tassa di sbarco/retribution fee da pagare in contanti al porto (IDR 10.000–20.000). Bagaglio fino a 20kg incluso."
    },
    hotel: {
      name: "Sandy Beach Bungalows",
      area: "Gili Air",
      checkin: "8 ago, dalle 12:00",
      checkout: "12 ago, entro le 11:00",
      nights: "4 notti",
      map: "Sandy Beach Bungalows, Gili Air"
    },
    days: [
      {
        dd: "9 AGO",
        title: "Giorno lento",
        trailer: "Nessun programma: tramonto e cena in riva al mare, il ritmo tipico delle Gili.",
        activities: [
          {
            name: "Relax, tramonto e cena",
            blurb: "Le Gili si vivono così: passeggiata in spiaggia, aperitivo al tramonto, cena a piedi nudi sulla sabbia.",
            map: "Gili Air beach, Indonesia",
            images: [
              "20160316145630 - Gili Air beach, West side, towards Lombok (25736339441).jpg",
              "Gili Trawangan (16788754758).jpg"
            ],
            facts: [
              "Sulle Gili sono vietati auto e moto: ci si sposta solo a piedi, in bici o con il cidomo, il carretto trainato da cavalli.",
              "Gili Air è la più orientale e meno frequentata delle tre isole Gili, di fronte alla costa di Lombok."
            ]
          }
        ]
      },
      {
        dd: "10 AGO",
        title: "In acqua con le tartarughe",
        trailer: "Uscita in mare per nuotare vicino alle tartarughe marine e alle statue sommerse.",
        activities: [
          {
            name: "Snorkeling con le tartarughe",
            blurb: "Uscita in barca o direttamente dalla spiaggia per nuotare vicino alle tartarughe marine e alle statue sommerse al largo dell'isola.",
            map: "Gili Air snorkeling spot, Indonesia",
            images: [
              "Green sea turtle (Chelonia mydas) - Indonesia 22.jpg"
            ],
            facts: [
              "Le tartarughe verdi che si incontrano qui si nutrono soprattutto delle praterie di posidonia sui fondali delle Gili.",
              "Le acque intorno alle Gili sono ricche di coralli e vita marina, tra le più abbondanti dell'arcipelago."
            ]
          }
        ]
      },
      {
        dd: "11 AGO",
        title: "Corso di cucina",
        trailer: "Giornata libera — buon momento per una lezione di cucina locale invece del solito giro in spiaggia.",
        activities: [
          {
            name: "Corso di cucina indonesiana",
            blurb: "Lezione pratica sull'isola: si imparano un paio di piatti tipici e poi ci si siede a mangiare il proprio lavoro.",
            map: "Gili Cooking Classes, Gili Air",
            images: [
              "Bali cuisine banner.jpg"
            ],
            facts: [
              "Molti piatti balinesi partono da una pasta di spezie base chiamata 'base genep', preparata pestando insieme una decina di ingredienti.",
              "La cucina balinese, a maggioranza indù, resta legata anche alle offerte religiose quotidiane."
            ]
          }
        ]
      }
    ],
    tips: "Niente auto o moto sulle Gili: ci si muove a piedi, in bici o coi carretti a cavallo (cidomo). Ottimo posto per rallentare dopo il ritmo intenso di Bali.",
    safety: [
      {
        lvl: "info",
        ico: "💏",
        t: "Effusioni in pubblico: più riservate che a Bali",
        b: "Le Gili appartengono culturalmente a Lombok, a maggioranza musulmana: nonostante l'atmosfera da vacanza nei locali sulla spiaggia, la comunità locale è più conservatrice di quella balinese. Mano nella mano tranquillamente, il resto meglio tenerlo lontano dagli occhi del villaggio."
      },
      {
        lvl: "critical",
        ico: "⛴️",
        t: "Il traghetto dell'8/08: controlli prima di salire",
        b: "Il settore dei fast boat indonesiani è <b>mal regolato</b>: nessuna autorità centrale impone standard, formazione del personale e ispezioni. Ci sono stati incidenti, alcuni mortali, per sovraccarico, mare grosso, guasti e scarsa vigilanza. Prima di salire: <b>individuate i giubbotti</b> (potrebbero non essercene per tutti), controllate che l'uscita d'emergenza vicina si apra — altrimenti sedetevi vicino alla porta principale — e se sentite <b>odore di benzina</b>, allerta massima. Nota stagionale: luglio e agosto sono mesi ventosi, tra i meno adatti alle traversate. Wahana Virendra è comunque tra gli operatori più noti sulla rotta."
      },
      {
        lvl: "critical",
        ico: "🍸",
        t: "Metanolo e spiking: le Gili sono citate per entrambi",
        b: "La Farnesina cita esplicitamente le <b>isole Gili</b> sia per l'avvelenamento da metanolo (decessi e danni permanenti: coma, cecità, danni al sistema nervoso) sia per i casi di <b>somministrazione di droghe a fini di stupro</b>. Bevete solo da bottiglie sigillate acquistate in locali autorizzati, mai lasciate un drink incustodito, mai accettatelo da sconosciuti."
      },
      {
        lvl: "info",
        ico: "🌊",
        t: "Il bagno va bene: l'acqua delle Gili è calma",
        b: "Buona notizia: l'acqua intorno a tutte e tre le Gili è generalmente <b>calma e limpida</b>, a differenza delle coste esposte di Bali e Lombok sud. Lo snorkeling con le tartarughe fatelo comunque con un'uscita organizzata, non a caso dalla spiaggia."
      },
      {
        lvl: "info",
        ico: "🏥",
        t: "Niente ospedale sull'isola",
        b: "Per qualsiasi cosa seria si torna a Lombok o a Bali. Portatevi il necessario: le farmacie sull'isola sono minime."
      }
    ]
  },
  {
    id: 6,
    num: "06",
    name: "Kuta Lombok",
    region: "Lombok sud",
    dates: "12 – 15 agosto",
    nights: 3,
    accent: "gold",
    arrival: {
      label: "Come si arriva · da Gili Air",
      segments: [
        {
          route: "Gili Air → Lombok → Kuta",
          flightNo: "Trasferimento",
          company: "Barca + auto",
          date: "12 ago 2026",
          dep: "—",
          arr: "—",
          duration: "~1–2h totali",
          note: "Barca fino al porto di Lombok, poi trasferimento in auto fino a Kuta Lombok"
        }
      ],
      footNote: "Orari e tariffe da confermare in loco — è il trasferimento più 'artigianale' del viaggio, tra barca e macchina."
    },
    hotel: {
      name: "Hyde Boutique Hotel",
      area: "Kuta Lombok",
      checkin: "12 ago, dalle 14:00",
      checkout: "15 ago, entro le 11:00",
      nights: "3 notti",
      map: "Hyde Boutique Hotel, Kuta Lombok"
    },
    days: [
      {
        dd: "13 AGO",
        title: "Tramonto a Bukit Merese",
        trailer: "Il tramonto più romantico del viaggio, su una collina erbosa sopra il mare.",
        activities: [
          {
            name: "Bukit Merese al tramonto",
            blurb: "Collina erbosa sopra la spiaggia di Kuta Lombok, tra le viste più belle di tutto il viaggio e ancora poco affollata.",
            map: "Bukit Merese, Kuta Lombok, Indonesia",
            images: [
              "Bukit Merese.jpg",
              "A Beach Near Merese Hill, Mandalika, Lombok.jpg"
            ],
            facts: [
              "La collina si trova tra le spiagge di Kuta e Tanjung Aan, sulla costa sud di Lombok.",
              "È diventata anche un punto di partenza per il parapendio, oltre che per il tramonto."
            ]
          }
        ]
      },
      {
        dd: "14 AGO",
        title: "Ultimo giorno libero",
        trailer: "Nessun programma fisso: spiaggia, onde e riposo prima del lungo rientro.",
        activities: [
          {
            name: "Spiaggia e mare",
            blurb: "Ultimo giorno pieno per godersi il mare del sud di Lombok, con l'anima più surf e meno affollata di Bali.",
            map: null
          }
        ]
      }
    ],
    tips: "Lombok sud ha un'anima da surf più che da folla: onde, colline verdi e spiagge meno affollate di Bali. Bukit Merese è da mettere in agenda al tramonto, non a metà giornata.",
    safety: [
      {
        lvl: "warn",
        ico: "💏",
        t: "Effusioni in pubblico: Lombok è più conservatrice di Bali",
        b: "La popolazione locale (Sasak) è a maggioranza musulmana e la cultura è più tradizionale che a Bali, pur essendo Kuta Lombok una zona di turismo surf. Mano nella mano ok, ma tenete il resto per la stanza — soprattutto fuori dalle zone più turistiche vicino alla spiaggia."
      },
      {
        lvl: "critical",
        ico: "🔦",
        t: "Criminalità in aumento, soprattutto di notte",
        b: "Su Lombok si sono verificati casi di <b>estorsione a mano armata (pistole e machete)</b> ai danni di turisti stranieri, oltre a furti di motorini a noleggio spesso privi di targa e non assicurati. La criminalità comune è in aumento. Massima prudenza nelle ore notturne, evitando località non illuminate. In caso di rapina, <b>non opporre resistenza</b>."
      },
      {
        lvl: "critical",
        ico: "🍸",
        t: "Metanolo: Lombok è tra le zone peggiori",
        b: "Sull'isola sono in <b>incremento i casi di stranieri vittima di avvelenamento da metanolo, con un numero significativo di decessi</b>. La Farnesina sconsiglia fortemente di consumare alcolici di dubbia provenienza. Solo bottiglie sigillate, etichette senza errori ortografici, niente Arak né cocktail artigianali."
      },
      {
        lvl: "warn",
        ico: "🌅",
        t: "Bukit Merese: fatevi aspettare",
        b: "È una collina isolata e si scende <b>col buio</b>. Andateci con un mezzo che vi aspetta sul posto — non fatevi trovare lì a piedi dopo il tramonto."
      },
      {
        lvl: "warn",
        ico: "🌊",
        t: "Dove fare il bagno e dove evitare",
        b: "Non è un divieto generale, ma zona per zona. <b>Ok per nuotare tranquilli:</b> Selong Belanak (tratto centrale), Mawun Beach e il lato est di Tanjung Aan — baie calme e poco profonde. <b>Da evitare con mare mosso:</b> il lato ovest di Tanjung Aan. Regola pratica ovunque: <b>bandiera rossa = non entrare</b>; acqua scura o schiumosa che si allontana dalla riva è un canale di risacca, da evitare. Se vi capita di finirci dentro, non nuotate contro corrente: lasciatevi portare e uscite nuotando parallelamente alla riva."
      }
    ]
  },
  {
    id: 7,
    num: "07",
    name: "Rientro",
    region: "Lombok → Jakarta → Jeddah → Roma",
    dates: "15 – 16 agosto",
    nights: 0,
    accent: "jungle",
    isReturn: true,
    legOut: {
      route: "Lombok (LOP) → Jakarta (CGK)",
      flightNo: "Volo interno",
      company: "—",
      date: "15 ago 2026",
      dep: "12:10",
      arr: "13:10",
      duration: "2h",
      note: "Ultima tratta domestica verso Giacarta (durata 2h per fuso -1h)",
      bookedVia: "Booking.com",
      bookingNote: "prenotato dall'account leoalbani@live.it"
    },
    legs: [
      {
        route: "Giacarta (CGK) → Jeddah (JED)",
        flightNo: "SV819",
        company: "Saudia · SkyTeam",
        date: "15 ago 2026",
        dep: "17:30",
        arr: "23:05",
        duration: "9h 35m",
        note: "Terminal 3 → Terminal 1",
        bookedVia: "Trip.com",
        bookingNote: "stesso biglietto A/R del volo Roma–Jakarta, gestione su sito/app Saudia"
      },
      {
        route: "Jeddah (JED) → Roma (FCO)",
        flightNo: "SV201",
        company: "Saudia · SkyTeam",
        date: "16 ago 2026",
        dep: "10:30",
        arr: "14:40",
        duration: "5h 10m",
        note: "Terminal 1 → Terminal 3",
        bookedVia: "Trip.com",
        bookingNote: "stesso biglietto A/R del volo Roma–Jakarta, gestione su sito/app Saudia"
      }
    ],
    transitHotel: {
      name: "Aerotel Jeddah — Airport Transit Hotel",
      area: "Zona transiti internazionali, Terminal 1, King Abdulaziz Intl Airport",
      checkin: "15 ago, 23:30",
      checkout: "16 ago, 09:30",
      nights: "~10 ore, camera Superior Double"
    },
    tips: "Lo scalo a Jeddah tra i due voli dura circa 11h25: da qui la scelta dell'hotel di transito Aerotel, comodo perché si trova già oltre i controlli di sicurezza dell'area transiti. Importante: da passeggeri in transito, non passare l'immigrazione all'arrivo — ci si rivolge direttamente ai banchi transiti della compagnia, altrimenti si rischia di non poter rientrare nell'area riservata senza carta d'imbarco valida.",
    safety: [
      {
        lvl: "critical",
        ico: "💏",
        t: "Effusioni in pubblico: qui è un altro Paese, regole diverse",
        b: "Attenzione: durante lo scalo siete su suolo <b>saudita</b>, non indonesiano. L'Arabia Saudita ha norme molto più rigide sulle effusioni in pubblico rispetto all'Indonesia. Nell'area transiti e in hotel il rischio pratico è bassissimo (poca gente, nessun controllo di questo tipo), ma è comunque il momento del viaggio in cui conviene essere più formali in assoluto."
      },
      {
        lvl: "critical",
        ico: "🛂",
        t: "A Jeddah: NON passare l'immigrazione",
        b: "L'Aerotel è <b>dentro l'area transiti internazionale</b> del Terminal 1. Da passeggeri in transito non dovete sdoganarvi: senza una carta d'imbarco valida non potreste più rientrare nell'area riservata. Se all'arrivo non avete la carta d'imbarco del volo successivo, o se i bagagli sono etichettati fino a Jeddah, rivolgetevi ai <b>banchi transiti della compagnia</b>. Per raggiungere l'hotel: controllo di sicurezza per passeggeri in transito, poi scala mobile al livello 2 delle Partenze Internazionali, accanto al Duty Free."
      },
      {
        lvl: "warn",
        ico: "🧳",
        t: "Cosa NON portare nel bagaglio in uscita",
        b: "È proibito acquistare, vendere o esportare qualsiasi <b>animale selvatico protetto o parti di esso</b>: se vi trovano con oggetti come i <b>coralli</b>, rischiate multa o pena detentiva. Attenzione anche ai souvenir 'naturali' venduti sulle spiagge."
      }
    ]
  }
];

export const PACK_LEO: PackingCategory[] = [
  {
    ico: "📄",
    title: "Documenti e soldi",
    items: [
      "Passaporto + fotocopia/foto di backup",
      "e-VOA stampato",
      "Polizza Heymondo stampata (HEY2203579) + numero assistenza salvato anche in rubrica",
      "QR Bali Tourist Levy salvato offline",
      "Conferme hotel di tutte le tappe, scaricate offline",
      "Conferma tour Komodo (Ceneast / GetYourGuide)",
      "Contanti in Rupie (tasse traghetto Gili, ingresso Parco Komodo, mance)",
      "Carta di credito/debito + una di riserva separata"
    ]
  },
  {
    ico: "💊",
    title: "Farmacia",
    items: [
      "Mesalazina — scorta per tutti i 20 giorni + margine, solo nel bagaglio a mano",
      "Bentelan",
      "Cefixoral",
      "Tachipirina 1000 / Paracetamolo",
      "Immodium",
      "Normix",
      "Sali reidratanti (Dicodral)",
      "Fermenti lattici",
      "Antistaminico",
      "Repellente zanzare con DEET o icaridina",
      "Disinfettante, cerotti, garze",
      "Gel mani",
      "SPF 50+, meglio reef-safe",
      "Melatonina"
    ]
  },
  {
    ico: "👕",
    title: "Vestiti — logica lavanderia (Ubud 4-5/8, Gili Air 8-9/8)",
    items: [
      "10 mutande",
      "3 costumi",
      "6-7 magliette leggere e traspiranti",
      "2 pantaloncini/bermuda + 1 pantalone leggero (templi)",
      "1 camicia leggera a maniche lunghe per la sera",
      "10 paia di calzini",
      "Intimo/pigiama leggero",
      "1 felpa leggera — solo per il Monte Batur",
      "Sarong leggero — telo mare + copertura templi"
    ]
  },
  {
    ico: "👟",
    title: "Scarpe",
    items: [
      "Sandali/scarpette da scoglio (Pink Beach, ingresso in acqua)",
      "Infradito o sandali comodi per la vita quotidiana"
    ]
  },
  {
    ico: "🎒",
    title: "Zaino da giornata",
    items: [
      "Powerbank",
      "Sacca stagna/dry bag piccola",
      "Cappellino + occhiali da sole"
    ]
  },
  {
    ico: "✈️",
    title: "Kit comfort volo",
    items: [
      "Cuscino da collo",
      "Mascherina per gli occhi",
      "Tappi per le orecchie o cuffie noise-cancelling",
      "Melatonina già nel bagaglio a mano"
    ]
  },
  {
    ico: "🔌",
    title: "Varie tecniche",
    items: [
      "Adattatore universale (Indonesia: prese C/F, 220V)",
      "Caricatori per cellulare",
      "Caricatore per smartwatch",
      "Sapone da bucato / bustina detersivo da viaggio",
      "Telo microfibra ad asciugatura rapida",
      "Lucchetto piccolo per zaino/trolley"
    ]
  }
];

export const PACK_ELI: PackingCategory[] = [
  {
    ico: "📄",
    title: "Documenti e soldi",
    items: [
      "Passaporto + fotocopia/foto di backup",
      "e-VOA stampato",
      "Polizza Heymondo stampata (HEY2203579) + numero assistenza salvato anche in rubrica",
      "QR Bali Tourist Levy salvato offline",
      "Conferme hotel di tutte le tappe, scaricate offline",
      "Conferma tour Komodo (Ceneast / GetYourGuide)",
      "Contanti in Rupie (tasse traghetto Gili, ingresso Parco Komodo, mance)",
      "Carta di credito/debito + una di riserva separata"
    ]
  },
  {
    ico: "💊",
    title: "Farmacia",
    items: [
      "Eventuali farmaci personali abituali, scorta per tutti i 20 giorni nel bagaglio a mano",
      "Sali reidratanti (Dicodral)",
      "Imodium, fermenti lattici",
      "Tachipirina / Paracetamolo",
      "Antistaminico",
      "Repellente zanzare con DEET o icaridina",
      "Disinfettante, cerotti, garze",
      "Gel mani",
      "SPF 50+, meglio reef-safe",
      "Melatonina"
    ]
  },
  {
    ico: "👕",
    title: "Vestiti — logica lavanderia (Ubud 4-5/8, Gili Air 8-9/8)",
    items: [
      "10 mutande",
      "3 reggiseni (uno da bagno a parte)",
      "3 bikini/costumi",
      "6-7 magliette leggere e traspiranti",
      "2 pantaloncini/shorts + 1 pantalone leggero (templi)",
      "1 vestito leggero per la sera",
      "10 paia di calzini",
      "Intimo/pigiama leggero",
      "1 felpa leggera — solo per il Monte Batur",
      "Sarong leggero — telo mare + copertura templi"
    ]
  },
  {
    ico: "👟",
    title: "Scarpe",
    items: [
      "Sandali/scarpette da scoglio (Pink Beach, ingresso in acqua)",
      "Infradito o sandali comodi per la vita quotidiana"
    ]
  },
  {
    ico: "🎒",
    title: "Zaino da giornata",
    items: [
      "Powerbank",
      "Sacca stagna/dry bag piccola",
      "Cappellino + occhiali da sole"
    ]
  },
  {
    ico: "✈️",
    title: "Kit comfort volo",
    items: [
      "Cuscino da collo",
      "Mascherina per gli occhi",
      "Tappi per le orecchie o cuffie noise-cancelling",
      "Melatonina già nel bagaglio a mano"
    ]
  },
  {
    ico: "🔌",
    title: "Varie tecniche",
    items: [
      "Adattatore universale (Indonesia: prese C/F, 220V)",
      "Caricatori per cellulare",
      "Caricatore per smartwatch",
      "Sapone da bucato / bustina detersivo da viaggio",
      "Telo microfibra ad asciugatura rapida",
      "Lucchetto piccolo per zaino/trolley",
      "Beauty essenziale (i prodotti pieni si comprano facilmente a Bali)"
    ]
  }
];

export const PACK_NOTE = "Da ricordare, non da mettere in valigia: mai toccare le scimmie al Monkey Forest (niente sorrisi, niente cibo in vista) · bandiera rossa = niente bagno, soprattutto a Lombok sud · solo bevande sigillate, niente Arak né cocktail artigianali · controllare i giubbotti di salvataggio appena si sale su traghetto o barca.";

export const HERO_PHOTOS_COMMONS = [
  "Borobudur, Java, Indonesia, 20220817 1058 8808.jpg",
  "Jatiluwih rice terraces.jpg",
  "Pulau Padar 1.jpg",
  "Mount of Batur sunrise.jpg",
  "20160316145630 - Gili Air beach, West side, towards Lombok (25736339441).jpg",
  "Bukit Merese.jpg"
];
