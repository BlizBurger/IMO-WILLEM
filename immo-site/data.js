/**
 * data.js — SARL Bonestroo Immo
 * Shared property data — used by index.html, bien.html, and all JS modules.
 * To add a property: copy one object, change all fields, add photos to /photos/
 */

'use strict';

const BIENS = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1 · Appartement — Menton Vieille Ville
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    type: 'appartement',
    badge: { fr: 'Nouveau', en: 'New', nl: 'Nieuw' },
    badgeClass: '',
    prix: '485 000 €',
    prixNum: 485000,
    localisation: {
      fr: 'Menton — Vieille Ville',
      en: 'Menton — Old Town',
      nl: 'Menton — Oude Stad'
    },
    adresseComplete: 'Rue Longue, 06500 Menton',
    lat: 43.7754,
    lng: 7.5019,
    tags: {
      fr: ['92 m²', '3 pièces', 'Vue mer', 'Terrasse'],
      en: ['92 m²', '3 rooms', 'Sea view', 'Terrace'],
      nl: ['92 m²', '3 kamers', 'Zeezicht', 'Terras']
    },
    photos: [
      /* 'photos/bien1_1.jpg', 'photos/bien1_2.jpg', 'photos/bien1_3.jpg' */
    ],
    video: null,
    stats: {
      'm²': 92,
      fr: { 'Pièces': 3, 'Étage': 4, 'DPE': 'B' },
      en: { 'Rooms': 3, 'Floor': 4, 'EPC': 'B' },
      nl: { 'Kamers': 3, 'Verdieping': 4, 'EPC': 'B' }
    },
    caracteristiques: {
      fr: [
        'Double vitrage sur toutes les ouvertures',
        'Cuisine entièrement équipée (Siemens)',
        'Parquet chêne massif dans les chambres',
        'Salle de bains avec balnéo',
        'Cave privative (12 m²)',
        'Exposition plein sud',
        'Digicode et interphone vidéo',
        'Gardien à temps partiel'
      ],
      en: [
        'Double glazing on all openings',
        'Fully equipped kitchen (Siemens)',
        'Solid oak parquet in bedrooms',
        'Bathroom with spa bath',
        'Private cellar (12 m²)',
        'Full south-facing aspect',
        'Digital lock and video intercom',
        'Part-time caretaker'
      ],
      nl: [
        'Dubbele beglazing op alle openingen',
        'Volledig uitgeruste keuken (Siemens)',
        'Massief eiken parket in de slaapkamers',
        'Badkamer met ligbad',
        'Privékelder (12 m²)',
        'Volledig op het zuiden',
        'Digitaal slot en video-intercom',
        'Deeltijdse conciërge'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Plage des Sablettes', distance: '8 min à pied' },
        { lieu: 'Marché couvert', distance: '4 min à pied' },
        { lieu: 'Gare SNCF Menton', distance: '12 min à pied' },
        { lieu: 'Frontière italienne', distance: '3 km' },
        { lieu: 'Monaco', distance: '12 km' }
      ],
      en: [
        { lieu: 'Sablettes Beach', distance: '8 min walk' },
        { lieu: 'Covered market', distance: '4 min walk' },
        { lieu: 'Menton SNCF station', distance: '12 min walk' },
        { lieu: 'Italian border', distance: '3 km' },
        { lieu: 'Monaco', distance: '12 km' }
      ],
      nl: [
        { lieu: 'Strand Sablettes', distance: '8 min te voet' },
        { lieu: 'Overdekte markt', distance: '4 min te voet' },
        { lieu: 'Station Menton', distance: '12 min te voet' },
        { lieu: 'Italiaanse grens', distance: '3 km' },
        { lieu: 'Monaco', distance: '12 km' }
      ]
    },
    description: {
      fr: [
        'Magnifique appartement au cœur de la vieille ville de Menton, niché dans un immeuble baroque du XVIIIe siècle entièrement rénové. Situé au quatrième étage avec ascenseur, ce bien offre une vue imprenable sur la mer Méditerranée et les toits colorés ocre et rose de la citadelle historique.',
        'L\'intérieur, réalisé avec des matériaux nobles, marie harmonieusement le charme de l\'ancien — voûtes en pierre, tomettes provençales dans l\'entrée — et le confort contemporain. La cuisine entièrement équipée s\'ouvre sur le séjour lumineux, dont les grandes fenêtres à meneau cadrent le panorama comme un tableau. La grande terrasse orientée plein sud (18 m²) est idéale pour les repas en plein air face à la Méditerranée.',
        'Le quartier de la vieille ville est l\'un des plus prisés de la Côte d\'Azur pour son authenticité et son atmosphère italo-provençale unique. À deux pas des meilleures tables de Menton, des galeries d\'art, du marché couvert et du bord de mer. Un investissement patrimonial exceptionnel autant qu\'un cadre de vie incomparable.'
      ],
      en: [
        'Magnificent apartment in the heart of Menton\'s old town, nestled within a fully renovated 18th-century Baroque building. Located on the fourth floor with lift, this property offers breathtaking views over the Mediterranean Sea and the iconic ochre and pink rooftops of the historic citadel.',
        'The interior, crafted with premium materials, harmoniously blends old-world charm — stone vaulting, Provençal terracotta tiles in the entrance — with contemporary comfort. The fully equipped kitchen opens onto a bright living room whose large mullioned windows frame the panorama like a painting. The large south-facing terrace (18 m²) is perfect for outdoor dining overlooking the Mediterranean.',
        'The old town quarter is one of the most sought-after on the Côte d\'Azur for its authenticity and unique Italo-Provençal atmosphere. Steps from Menton\'s finest restaurants, art galleries, the covered market and the seafront. An exceptional heritage investment and an incomparable living environment.'
      ],
      nl: [
        'Prachtig appartement in het hart van de oude stad van Menton, gelegen in een volledig gerenoveerd barokgebouw uit de 18e eeuw. Gelegen op de vierde verdieping met lift, biedt dit pand een adembenemend uitzicht op de Middellandse Zee en de iconische oker en roze daken van de historische citadel.',
        'Het interieur, uitgevoerd met hoogwaardige materialen, combineert op harmonieuze wijze de charme van vroeger — stenen gewelven, Provençaalse terracotta tegels in de ingang — met eigentijds comfort. De volledig uitgeruste keuken grenst aan de lichte woonkamer, waarvan de grote ramen het panorama als een schilderij omlijsten. Het grote terras op het zuiden (18 m²) is ideaal voor eten in de buitenlucht met uitzicht op de Middellandse Zee.',
        'De oude stadswijk is een van de meest gewilde aan de Côte d\'Azur vanwege zijn authenticiteit en unieke Italiaans-Provençaalse sfeer. Op een steenworp van de beste restaurants van Menton, kunstgalerijen, de overdekte markt en de kust. Een uitzonderlijke erfgoedinvestering én een onvergelijkbare leefomgeving.'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2 · Villa — Frontière Monaco
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    type: 'maison-villa',
    badge: { fr: 'Exclusivité', en: 'Exclusive', nl: 'Exclusief' },
    badgeClass: 'exclu',
    prix: '2 800 000 €',
    prixNum: 2800000,
    localisation: {
      fr: 'Roquebrune-Cap-Martin — Frontière Monaco',
      en: 'Roquebrune-Cap-Martin — Monaco Border',
      nl: 'Roquebrune-Cap-Martin — Grens Monaco'
    },
    adresseComplete: 'Chemin des Moulins, 06190 Roquebrune-Cap-Martin',
    lat: 43.7488,
    lng: 7.4365,
    tags: {
      fr: ['320 m²', '6 pièces', 'Vue mer', 'Piscine', 'Garage'],
      en: ['320 m²', '6 rooms', 'Sea view', 'Pool', 'Garage'],
      nl: ['320 m²', '6 kamers', 'Zeezicht', 'Zwembad', 'Garage']
    },
    photos: [],
    video: null,
    stats: {
      'm²': 320,
      fr: { 'Pièces': 6, 'Terrain': '1 200 m²', 'DPE': 'C' },
      en: { 'Rooms': 6, 'Land': '1 200 m²', 'EPC': 'C' },
      nl: { 'Kamers': 6, 'Grond': '1 200 m²', 'EPC': 'C' }
    },
    caracteristiques: {
      fr: [
        'Piscine à débordement (12 × 5 m) chauffée',
        'Vue mer et Monaco depuis tous les étages',
        'Cuisine professionnelle Bulthaup',
        'Suite parentale avec dressing et terrasse privée',
        'Home cinéma et salle de sport',
        'Double garage + 2 places extérieures',
        'Système domotique KNX intégral',
        'Jardin méditerranéen avec oliviers centenaires'
      ],
      en: [
        'Heated infinity pool (12 × 5 m)',
        'Sea and Monaco views from every floor',
        'Bulthaup professional kitchen',
        'Master suite with walk-in wardrobe and private terrace',
        'Home cinema and gym',
        'Double garage + 2 outdoor spaces',
        'Full KNX smart home system',
        'Mediterranean garden with century-old olive trees'
      ],
      nl: [
        'Verwarmd overloopzwembad (12 × 5 m)',
        'Zee- en Monaco-uitzicht vanaf elke verdieping',
        'Professionele Bulthaup keuken',
        'Mastersuite met inloopkast en privéterras',
        'Bioscoop en fitnessruimte',
        'Dubbele garage + 2 buitenparkeerplaatsen',
        'Volledig KNX domoticasysteem',
        'Mediterrane tuin met eeuwenoude olijfbomen'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Frontière Monaco', distance: '2 km' },
        { lieu: 'Plage du Buse', distance: '15 min à pied' },
        { lieu: 'Héliport Monaco', distance: '8 km' },
        { lieu: 'Aéroport Nice Côte d\'Azur', distance: '35 km' },
        { lieu: 'Gare TGV Monaco', distance: '6 km' }
      ],
      en: [
        { lieu: 'Monaco border', distance: '2 km' },
        { lieu: 'Buse Beach', distance: '15 min walk' },
        { lieu: 'Monaco Heliport', distance: '8 km' },
        { lieu: 'Nice Côte d\'Azur Airport', distance: '35 km' },
        { lieu: 'Monaco TGV station', distance: '6 km' }
      ],
      nl: [
        { lieu: 'Grens Monaco', distance: '2 km' },
        { lieu: 'Strand du Buse', distance: '15 min te voet' },
        { lieu: 'Heliport Monaco', distance: '8 km' },
        { lieu: 'Luchthaven Nice Côte d\'Azur', distance: '35 km' },
        { lieu: 'TGV-station Monaco', distance: '6 km' }
      ]
    },
    description: {
      fr: [
        'Villa d\'architecte d\'exception érigée sur les hauteurs de Roquebrune-Cap-Martin, à quelques minutes seulement de la frontière monégasque. Cette propriété exclusive de 320 m² habitables, implantée sur un terrain paysagé de 1 200 m², offre un panorama à couper le souffle sur la mer et la Principauté de Monaco.',
        'L\'architecture contemporaine joue avec les volumes et la lumière : larges ouvertures vitrées du sol au plafond, terrasses en cascades orientées plein sud, piscine à débordement qui se confond avec l\'horizon. L\'intérieur, dessiné par un décorateur de renom, marie le béton ciré, la pierre naturelle et le bois exotique dans une sobriété lumineuse. La cuisine Bulthaup, la suite parentale avec spa privatif et le home cinéma complètent une dotation de premier rang.',
        'Secteur hautement prisé, à la fois pour sa discrétion absolue, la qualité de ses infrastructures et la proximité immédiate de Monaco. Propriété idéale pour une clientèle internationale exigeante, en résidence principale ou secondaire. Exclusivité SARL Bonestroo.'
      ],
      en: [
        'Exceptional architect-designed villa perched on the heights of Roquebrune-Cap-Martin, just minutes from the Monegasque border. This exclusive 320 m² property, set within 1,200 m² of landscaped grounds, offers breathtaking panoramic views of the sea and the Principality of Monaco.',
        'Contemporary architecture plays with volumes and light: floor-to-ceiling glazed openings, cascading south-facing terraces, and an infinity pool that merges with the horizon. The interior, designed by a renowned decorator, combines polished concrete, natural stone and exotic wood in a luminous, minimalist aesthetic. The Bulthaup kitchen, master suite with private spa, and home cinema complete a top-tier specification.',
        'A highly sought-after area renowned for absolute discretion, excellent infrastructure, and immediate proximity to Monaco. Ideal for demanding international clients seeking a primary or secondary residence. Exclusive listing with SARL Bonestroo.'
      ],
      nl: [
        'Uitzonderlijke architectenvilla gelegen op de hoogten van Roquebrune-Cap-Martin, op slechts enkele minuten van de Monegaskische grens. Dit exclusieve pand van 320 m², gelegen op een aangelegde tuin van 1.200 m², biedt een adembenemend panoramisch uitzicht op de zee en het Vorstendom Monaco.',
        'De hedendaagse architectuur speelt met volumes en licht: vloer-tot-plafond glaswanden, cascaderende terrassen op het zuiden en een overloopzwembad dat opgaat in de horizon. Het interieur, ontworpen door een gerenommeerde designer, combineert gepolijst beton, natuursteen en exotisch hout in een lichte, minimalistische esthetiek. De Bulthaup keuken, mastersuite met privéspa en bioscoop completeren een eersteklas uitrusting.',
        'Een zeer gegeerde omgeving, bekend om absolute discretie, uitstekende infrastructuur en onmiddellijke nabijheid van Monaco. Ideaal voor veeleisende internationale klanten op zoek naar een hoofd- of tweede verblijf. Exclusief bij SARL Bonestroo.'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3 · Appartement — Roquebrune-Cap-Martin
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    type: 'appartement',
    badge: { fr: 'Vue mer', en: 'Sea view', nl: 'Zeezicht' },
    badgeClass: '',
    prix: '650 000 €',
    prixNum: 650000,
    localisation: {
      fr: 'Roquebrune-Cap-Martin',
      en: 'Roquebrune-Cap-Martin',
      nl: 'Roquebrune-Cap-Martin'
    },
    adresseComplete: 'Avenue Winston Churchill, 06190 Roquebrune-Cap-Martin',
    lat: 43.7622,
    lng: 7.4716,
    tags: {
      fr: ['118 m²', '4 pièces', 'Vue mer', 'Terrasse', 'Parking'],
      en: ['118 m²', '4 rooms', 'Sea view', 'Terrace', 'Parking'],
      nl: ['118 m²', '4 kamers', 'Zeezicht', 'Terras', 'Parkeerplaats']
    },
    photos: [],
    video: null,
    stats: {
      'm²': 118,
      fr: { 'Pièces': 4, 'Étage': 3, 'DPE': 'C' },
      en: { 'Rooms': 4, 'Floor': 3, 'EPC': 'C' },
      nl: { 'Kamers': 4, 'Verdieping': 3, 'EPC': 'C' }
    },
    caracteristiques: {
      fr: [
        'Grande terrasse (28 m²) face à la mer',
        'Séjour double avec baies vitrées coulissantes',
        'Cuisine américaine ouverte',
        '2 chambres + bureau',
        'Salle de bains et salle d\'eau',
        'Place de parking en sous-sol',
        'Cave privative',
        'Résidence sécurisée avec gardien'
      ],
      en: [
        'Large terrace (28 m²) facing the sea',
        'Double living room with sliding bay windows',
        'Open-plan American kitchen',
        '2 bedrooms + study',
        'Bathroom and shower room',
        'Underground parking space',
        'Private cellar',
        'Secure residence with caretaker'
      ],
      nl: [
        'Groot terras (28 m²) met zeezicht',
        'Dubbele woonkamer met schuifpuien',
        'Open Amerikaanse keuken',
        '2 slaapkamers + kantoor',
        'Badkamer en doucheruimte',
        'Ondergrondse parkeerplaats',
        'Privékelder',
        'Beveiligde residentie met conciërge'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Plage de Carnolès', distance: '10 min à pied' },
        { lieu: 'Village médiéval', distance: '20 min à pied' },
        { lieu: 'Monaco', distance: '8 km' },
        { lieu: 'Menton centre', distance: '5 km' },
        { lieu: 'Aéroport Nice', distance: '32 km' }
      ],
      en: [
        { lieu: 'Carnolès Beach', distance: '10 min walk' },
        { lieu: 'Medieval village', distance: '20 min walk' },
        { lieu: 'Monaco', distance: '8 km' },
        { lieu: 'Menton centre', distance: '5 km' },
        { lieu: 'Nice Airport', distance: '32 km' }
      ],
      nl: [
        { lieu: 'Strand Carnolès', distance: '10 min te voet' },
        { lieu: 'Middeleeuws dorp', distance: '20 min te voet' },
        { lieu: 'Monaco', distance: '8 km' },
        { lieu: 'Menton centrum', distance: '5 km' },
        { lieu: 'Luchthaven Nice', distance: '32 km' }
      ]
    },
    description: {
      fr: [
        'Superbe appartement de 118 m² dans une résidence de standing à Roquebrune-Cap-Martin, offrant une vue dégagée et directe sur la mer Méditerranée depuis le séjour et la grande terrasse. Situé au troisième étage d\'un immeuble bien entretenu des années 1980, le bien a été entièrement rénové en 2022.',
        'L\'agencement fonctionnel prévoit un vaste double séjour lumineux, une cuisine ouverte entièrement équipée, deux chambres et un bureau pouvant servir de troisième chambre. La grande terrasse de 28 m² exposée plein sud est le véritable atout de ce bien : on y profite du panorama maritime depuis le massif de l\'Estérel jusqu\'à la frontière italienne.',
        'Idéalement situé entre Monaco (8 km) et Menton (5 km), proche de la plage et des commerces, ce bien convient parfaitement en résidence principale ou secondaire. Parking en sous-sol et cave complètent la dotation. Excellent rapport qualité-prix dans un secteur très recherché de la Riviera.'
      ],
      en: [
        'Superb 118 m² apartment in a prestigious residence in Roquebrune-Cap-Martin, offering clear and direct views of the Mediterranean Sea from the living room and large terrace. Located on the third floor of a well-maintained 1980s building, the property was completely renovated in 2022.',
        'The functional layout includes a vast, bright double living room, a fully equipped open-plan kitchen, two bedrooms and a study that can serve as a third bedroom. The large 28 m² south-facing terrace is the true highlight: enjoy the maritime panorama stretching from the Massif de l\'Estérel to the Italian border.',
        'Ideally positioned between Monaco (8 km) and Menton (5 km), close to the beach and shops, this property is perfect as a primary or secondary residence. Underground parking and cellar complete the offering. Excellent value for money in a highly sought-after area of the Riviera.'
      ],
      nl: [
        'Prachtig appartement van 118 m² in een prestigieuze residentie in Roquebrune-Cap-Martin, met een vrij en direct uitzicht op de Middellandse Zee vanuit de woonkamer en het grote terras. Gelegen op de derde verdieping van een goed onderhouden gebouw uit de jaren 1980, volledig gerenoveerd in 2022.',
        'De functionele indeling omvat een ruime, lichte dubbele woonkamer, een volledig uitgeruste open keuken, twee slaapkamers en een kantoor dat als derde slaapkamer kan dienen. Het grote terras van 28 m² op het zuiden is het ware hoogtepunt: geniet van het maritieme panorama van het Massif de l\'Estérel tot aan de Italiaanse grens.',
        'Ideaal gelegen tussen Monaco (8 km) en Menton (5 km), vlak bij het strand en winkels. Perfect als hoofd- of tweede verblijf. Ondergrondse parkeerplaats en kelder vervolledigen het aanbod. Uitstekende prijs-kwaliteitverhouding in een zeer gegeerde omgeving aan de Riviera.'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4 · Maison — Èze Village
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    type: 'maison-villa',
    badge: { fr: 'Panorama', en: 'Panorama', nl: 'Panorama' },
    badgeClass: '',
    prix: '1 200 000 €',
    prixNum: 1200000,
    localisation: {
      fr: 'Èze Village',
      en: 'Èze Village',
      nl: 'Èze Village'
    },
    adresseComplete: 'Chemin de la Corniche, 06360 Èze',
    lat: 43.7277,
    lng: 7.3617,
    tags: {
      fr: ['180 m²', '5 pièces', 'Vue panoramique', 'Jardin', 'Terrasse'],
      en: ['180 m²', '5 rooms', 'Panoramic view', 'Garden', 'Terrace'],
      nl: ['180 m²', '5 kamers', 'Panoramisch uitzicht', 'Tuin', 'Terras']
    },
    photos: [],
    video: null,
    stats: {
      'm²': 180,
      fr: { 'Pièces': 5, 'Terrain': '600 m²', 'DPE': 'D' },
      en: { 'Rooms': 5, 'Land': '600 m²', 'EPC': 'D' },
      nl: { 'Kamers': 5, 'Grond': '600 m²', 'EPC': 'D' }
    },
    caracteristiques: {
      fr: [
        'Vue 270° mer, Cap Ferrat et Alpes',
        'Bastide en pierre restaurée avec goût',
        'Cuisine provençale avec piano de cuisson Lacanche',
        'Trois terrasses à différentes orientations',
        'Jardin arboré avec figuiers et citronniers',
        'Puits d\'origine restauré',
        'Cheminée en pierre dans le séjour',
        'Atelier / pool house aménageable'
      ],
      en: [
        '270° views of sea, Cap Ferrat and Alps',
        'Tastefully restored stone bastide',
        'Provençal kitchen with Lacanche range cooker',
        'Three terraces with different orientations',
        'Tree-filled garden with fig and lemon trees',
        'Restored original well',
        'Stone fireplace in living room',
        'Workshop / pool house suitable for conversion'
      ],
      nl: [
        '270° uitzicht op zee, Cap Ferrat en Alpen',
        'Smaakvolle gerestaureerde stenen bastide',
        'Provençaalse keuken met Lacanche fornuis',
        'Drie terrassen met verschillende oriëntaties',
        'Beboste tuin met vijgen- en citroenbomen',
        'Gerestaureerde originele put',
        'Stenen open haard in de woonkamer',
        'Atelier / poolhouse aanpasbaar'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Village médiéval d\'Èze', distance: '5 min à pied' },
        { lieu: 'Jardin exotique d\'Èze', distance: '8 min à pied' },
        { lieu: 'Plage d\'Èze-sur-Mer', distance: '15 min en voiture' },
        { lieu: 'Monaco', distance: '10 km' },
        { lieu: 'Nice Côte d\'Azur Aéroport', distance: '22 km' }
      ],
      en: [
        { lieu: 'Èze medieval village', distance: '5 min walk' },
        { lieu: 'Exotic Garden of Èze', distance: '8 min walk' },
        { lieu: 'Èze-sur-Mer beach', distance: '15 min drive' },
        { lieu: 'Monaco', distance: '10 km' },
        { lieu: 'Nice Côte d\'Azur Airport', distance: '22 km' }
      ],
      nl: [
        { lieu: 'Middeleeuws dorp Èze', distance: '5 min te voet' },
        { lieu: 'Exotische tuin van Èze', distance: '8 min te voet' },
        { lieu: 'Strand Èze-sur-Mer', distance: '15 min rijden' },
        { lieu: 'Monaco', distance: '10 km' },
        { lieu: 'Luchthaven Nice Côte d\'Azur', distance: '22 km' }
      ]
    },
    description: {
      fr: [
        'Magnifique bastide en pierre du XIXe siècle perchée à 350 mètres d\'altitude dans l\'arrière-pays niçois, à deux pas du célèbre village médiéval d\'Èze. Cette demeure de caractère de 180 m² profite d\'une vue panoramique à couper le souffle sur la mer Méditerranée, le Cap Ferrat et, par temps clair, les sommets enneigés des Alpes.',
        'Entièrement restaurée dans le respect de son cachet d\'origine, la bastide conserve ses voûtes en pierre, ses tomettes anciennes et sa cheminée monumentale, tout en intégrant un confort moderne : cuisine équipée Lacanche, double vitrage sur mesure, isolation thermique renforcée. Le jardin arboré de 600 m², planté de figuiers, d\'oliviers et de citronniers, offre une intimité totale avec plusieurs espaces de détente en terrasse.',
        'L\'environnement d\'Èze Village est unique en Méditerranée : classé parmi les plus beaux villages de France, il attire une clientèle internationale tout en préservant une atmosphère hors du temps. À seulement 10 km de Monaco et 22 km de l\'aéroport de Nice, cette propriété constitue une opportunité rare sur le marché de la Riviera.'
      ],
      en: [
        'Magnificent 19th-century stone bastide perched 350 metres above sea level in the Nice hinterland, a stone\'s throw from the famous medieval village of Èze. This characterful 180 m² home enjoys breathtaking panoramic views of the Mediterranean Sea, Cap Ferrat and, on clear days, the snow-capped Alpine peaks.',
        'Fully restored while respecting its original character, the bastide retains its stone vaulting, antique terracotta floor tiles and monumental fireplace, while incorporating modern comfort: Lacanche equipped kitchen, custom double glazing, enhanced thermal insulation. The 600 m² tree-filled garden, planted with fig, olive and lemon trees, offers complete privacy with several terrace relaxation areas.',
        'The environment of Èze Village is unique in the Mediterranean: classified among the Most Beautiful Villages of France, it attracts an international clientele while preserving a timeless atmosphere. Just 10 km from Monaco and 22 km from Nice Airport, this property represents a rare opportunity on the Riviera market.'
      ],
      nl: [
        'Prachtige 19e-eeuwse stenen bastide op 350 meter hoogte in het achterland van Nice, op een steenworp van het beroemde middeleeuwse dorp Èze. Dit karaktervolle pand van 180 m² geniet van een adembenemend panoramisch uitzicht op de Middellandse Zee, Cap Ferrat en, bij helder weer, de besneeuwde Alptoppen.',
        'Volledig gerestaureerd met respect voor de originele charme, behoudt de bastide zijn stenen gewelven, antieke terracotta vloertegels en monumentale open haard, terwijl modern comfort is geïntegreerd: Lacanche uitgeruste keuken, maatwerkdubbele beglazing, verbeterde thermische isolatie. De beboste tuin van 600 m², beplant met vijgen-, olijf- en citroenbomen, biedt volledige privacy met meerdere terrasgebieden.',
        'De omgeving van Èze Village is uniek in de Middellandse Zee: geclassificeerd als een van de Mooiste Dorpen van Frankrijk trekt het internationale klanten aan terwijl het een tijdloze sfeer behoudt. Op slechts 10 km van Monaco en 22 km van de luchthaven van Nice vertegenwoordigt dit pand een zeldzame kans op de Riviera-markt.'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5 · Appartement — Beaulieu-sur-Mer
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    type: 'appartement',
    badge: { fr: 'Coup de cœur', en: 'Staff pick', nl: 'Aanrader' },
    badgeClass: '',
    prix: '395 000 €',
    prixNum: 395000,
    localisation: {
      fr: 'Beaulieu-sur-Mer',
      en: 'Beaulieu-sur-Mer',
      nl: 'Beaulieu-sur-Mer'
    },
    adresseComplete: 'Boulevard Édouard Baudoin, 06310 Beaulieu-sur-Mer',
    lat: 43.7059,
    lng: 7.3314,
    tags: {
      fr: ['72 m²', '3 pièces', 'Balcon', 'Vue mer partielle'],
      en: ['72 m²', '3 rooms', 'Balcony', 'Partial sea view'],
      nl: ['72 m²', '3 kamers', 'Balkon', 'Gedeeltelijk zeezicht']
    },
    photos: [],
    video: null,
    stats: {
      'm²': 72,
      fr: { 'Pièces': 3, 'Étage': 2, 'DPE': 'C' },
      en: { 'Rooms': 3, 'Floor': 2, 'EPC': 'C' },
      nl: { 'Kamers': 3, 'Verdieping': 2, 'EPC': 'C' }
    },
    caracteristiques: {
      fr: [
        'Balcon avec vue partielle sur la mer',
        'Cuisine équipée moderne',
        'Parquet flottant dans le séjour',
        'Chambre parentale avec rangements intégrés',
        'Salle de bains refaite en 2021',
        'Résidence Art-Déco bien entretenue',
        'Local vélos sécurisé',
        'Proche plage de la Petite Afrique (3 min)'
      ],
      en: [
        'Balcony with partial sea view',
        'Modern fitted kitchen',
        'Floating parquet in living room',
        'Master bedroom with built-in storage',
        'Bathroom refitted in 2021',
        'Well-maintained Art Deco residence',
        'Secure bicycle storage',
        'Near Petite Afrique beach (3 min)'
      ],
      nl: [
        'Balkon met gedeeltelijk zeezicht',
        'Moderne uitgeruste keuken',
        'Zwevend parket in de woonkamer',
        'Hoofdslaapkamer met ingebouwde opbergruimte',
        'Badkamer vernieuwd in 2021',
        'Goed onderhouden Art Deco-residentie',
        'Beveiligde fietsenstalling',
        'Vlak bij strand Petite Afrique (3 min)'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Plage de la Petite Afrique', distance: '3 min à pied' },
        { lieu: 'Gare de Beaulieu-sur-Mer', distance: '6 min à pied' },
        { lieu: 'Port de plaisance', distance: '8 min à pied' },
        { lieu: 'Monaco', distance: '12 km' },
        { lieu: 'Nice', distance: '9 km' }
      ],
      en: [
        { lieu: 'Petite Afrique Beach', distance: '3 min walk' },
        { lieu: 'Beaulieu-sur-Mer station', distance: '6 min walk' },
        { lieu: 'Marina', distance: '8 min walk' },
        { lieu: 'Monaco', distance: '12 km' },
        { lieu: 'Nice', distance: '9 km' }
      ],
      nl: [
        { lieu: 'Strand Petite Afrique', distance: '3 min te voet' },
        { lieu: 'Station Beaulieu-sur-Mer', distance: '6 min te voet' },
        { lieu: 'Jachthaven', distance: '8 min te voet' },
        { lieu: 'Monaco', distance: '12 km' },
        { lieu: 'Nice', distance: '9 km' }
      ]
    },
    description: {
      fr: [
        'Charmant appartement de 72 m² au deuxième étage d\'une belle résidence Art-Déco des années 1930, idéalement située à Beaulieu-sur-Mer, l\'une des perles de la Côte d\'Azur. Beaulieu jouit d\'un microclimat exceptionnel — l\'un des plus chauds de France — et d\'une atmosphère Belle Époque préservée.',
        'L\'appartement, en très bon état général, a été partiellement rénové : nouvelle salle de bains, cuisine équipée récente, parquet flottant dans le séjour. Le balcon exposé sud-est offre une vue partielle sur la mer et sur les jardins de la résidence. La luminosité est remarquable tout au long de la journée.',
        'À trois minutes à pied de la célèbre plage de la Petite Afrique, proche des commerces, du port de plaisance et de la gare, ce bien constitue un investissement locatif à fort potentiel ou une résidence secondaire de charme. Secteur résidentiel calme, copropriété sérieuse et bien gérée.'
      ],
      en: [
        'Charming 72 m² apartment on the second floor of a beautiful 1930s Art Deco residence, ideally situated in Beaulieu-sur-Mer, one of the jewels of the Côte d\'Azur. Beaulieu enjoys an exceptional microclimate — one of the warmest in France — and a preserved Belle Époque atmosphere.',
        'The apartment, in very good overall condition, has been partially renovated: new bathroom, recent fitted kitchen, floating parquet in the living room. The south-east facing balcony offers a partial sea view and overlooks the residence\'s gardens. Remarkable natural light throughout the day.',
        'Three minutes walk from the famous Petite Afrique beach, close to shops, the marina and the railway station, this property represents a high-potential rental investment or a charming secondary residence. Quiet residential area, well-managed and serious co-ownership.'
      ],
      nl: [
        'Charmant appartement van 72 m² op de tweede verdieping van een mooie Art Deco-residentie uit de jaren 1930, ideaal gelegen in Beaulieu-sur-Mer, een van de parels van de Côte d\'Azur. Beaulieu geniet van een uitzonderlijk microklimaat — een van de warmste van Frankrijk — en een bewaard Belle Époque-sfeer.',
        'Het appartement, in zeer goede algemene staat, is gedeeltelijk gerenoveerd: nieuwe badkamer, recente uitgeruste keuken, zwevend parket in de woonkamer. Het zuidoost-gerichte balkon biedt gedeeltelijk zeezicht en kijkt uit op de tuinen van de residentie. Opmerkelijk natuurlijk licht gedurende de hele dag.',
        'Drie minuten te voet van het beroemde strand Petite Afrique, vlak bij winkels, de jachthaven en het treinstation. Dit pand biedt een sterk verhuurpotentieel of een charmant tweede verblijf. Rustige residentiële omgeving, goed beheerde en serieuze mede-eigendom.'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6 · Villa — Cap-d'Ail
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    type: 'maison-villa',
    badge: { fr: 'Exclusivité', en: 'Exclusive', nl: 'Exclusief' },
    badgeClass: 'exclu',
    prix: "3 500 000 €",
    prixNum: 3500000,
    localisation: {
      fr: "Cap-d'Ail",
      en: "Cap-d'Ail",
      nl: "Cap-d'Ail"
    },
    adresseComplete: "Avenue du 3 Septembre, 06320 Cap-d'Ail",
    lat: 43.7240,
    lng: 7.3942,
    tags: {
      fr: ['420 m²', '7 pièces', 'Vue mer', 'Piscine', 'Plage privée'],
      en: ['420 m²', '7 rooms', 'Sea view', 'Pool', 'Private beach'],
      nl: ['420 m²', '7 kamers', 'Zeezicht', 'Zwembad', 'Privéstrand']
    },
    photos: [],
    video: null,
    stats: {
      'm²': 420,
      fr: { 'Pièces': 7, 'Terrain': '2 500 m²', 'DPE': 'B' },
      en: { 'Rooms': 7, 'Land': '2 500 m²', 'EPC': 'B' },
      nl: { 'Kamers': 7, 'Grond': '2 500 m²', 'EPC': 'B' }
    },
    caracteristiques: {
      fr: [
        'Accès direct à la plage privée sur rochers',
        'Piscine chauffée (15 × 7 m) avec pool house',
        'Vue mer frontale et Monaco visible',
        'Cuisine Miele / Gaggenau haut de gamme',
        '4 suites parentales avec dressing',
        'Appartement gardien indépendant (55 m²)',
        'Ascenseur intérieur 4 niveaux',
        'Système solaire photovoltaïque (32 kWc)'
      ],
      en: [
        'Direct access to private rocky beach',
        'Heated pool (15 × 7 m) with pool house',
        'Direct sea view and Monaco visible',
        'Top-spec Miele / Gaggenau kitchen',
        '4 master suites with walk-in wardrobes',
        'Independent caretaker apartment (55 m²)',
        'Internal lift serving 4 floors',
        'Photovoltaic solar system (32 kWp)'
      ],
      nl: [
        'Directe toegang tot privé-rotsenstrand',
        'Verwarmd zwembad (15 × 7 m) met poolhouse',
        'Frontaal zeezicht en Monaco zichtbaar',
        'Topklasse Miele / Gaggenau keuken',
        '4 mastersuites met inloopkasten',
        'Onafhankelijk concierge-appartement (55 m²)',
        'Interne lift over 4 verdiepingen',
        'Fotovoltaïsch zonnesysteem (32 kWp)'
      ]
    },
    distances: {
      fr: [
        { lieu: 'Plage privée', distance: 'Accès direct' },
        { lieu: "Centre Cap-d'Ail", distance: '8 min à pied' },
        { lieu: 'Frontière Monaco', distance: '3 km' },
        { lieu: 'Héliport Monaco', distance: '12 km' },
        { lieu: 'Aéroport Nice', distance: '25 km' }
      ],
      en: [
        { lieu: 'Private beach', distance: 'Direct access' },
        { lieu: "Cap-d'Ail centre", distance: '8 min walk' },
        { lieu: 'Monaco border', distance: '3 km' },
        { lieu: 'Monaco Heliport', distance: '12 km' },
        { lieu: 'Nice Airport', distance: '25 km' }
      ],
      nl: [
        { lieu: 'Privéstrand', distance: 'Directe toegang' },
        { lieu: "Centrum Cap-d'Ail", distance: '8 min te voet' },
        { lieu: 'Grens Monaco', distance: '3 km' },
        { lieu: 'Heliport Monaco', distance: '12 km' },
        { lieu: 'Luchthaven Nice', distance: '25 km' }
      ]
    },
    description: {
      fr: [
        "Villa de prestige exceptionnelle implantée en première ligne de mer à Cap-d'Ail, avec accès direct à une plage privée sur rochers et vue imprenable sur la Méditerranée et le rocher de Monaco. Cette demeure d'exception de 420 m² développée sur quatre niveaux desservis par un ascenseur privatif se distingue par l'audace de son architecture et la qualité irréprochable de ses finitions.",
        "Chaque pièce est conçue pour maximiser le rapport avec la mer : les baies vitrées généreuses du séjour principal s'ouvrent de plain-pied sur la terrasse principale (80 m²) et la piscine chauffée, dont le débordement se confond avec l'horizon marin. Les quatre suites parentales, chacune dotée d'un dressing sur mesure et d'une salle de bains en marbre, offrent une intimité absolue. L'appartement indépendant du gardien (55 m²) complète l'ensemble.",
        "Cap-d'Ail est l'une des communes les plus exclusives de France métropolitaine, à mi-chemin entre Villefranche-sur-Mer et Monaco. Environnement sécurisé, proximité des plus grands événements de la Principauté, fiscalité avantageuse pour les non-résidents. Bien présenté en exclusivité par SARL Bonestroo."
      ],
      en: [
        "Exceptional prestige villa in a first-line seafront position in Cap-d'Ail, with direct access to a private rocky beach and breathtaking views of the Mediterranean and the Rock of Monaco. This extraordinary 420 m² residence, developed over four floors served by a private lift, is distinguished by the boldness of its architecture and the impeccable quality of its finishes.",
        "Every room is designed to maximise the connection with the sea: the generous bay windows of the main living room open directly onto the main terrace (80 m²) and the heated pool, whose infinity edge merges with the marine horizon. The four master suites, each with a bespoke walk-in wardrobe and marble bathroom, offer absolute privacy. The independent caretaker apartment (55 m²) completes the ensemble.",
        "Cap-d'Ail is one of the most exclusive municipalities in metropolitan France, halfway between Villefranche-sur-Mer and Monaco. Secure environment, proximity to the Principality's greatest events, advantageous taxation for non-residents. Exclusive listing with SARL Bonestroo."
      ],
      nl: [
        "Uitzonderlijke prestigevilla op de eerste zeelijn in Cap-d'Ail, met directe toegang tot een privé-rotsenstrand en adembenemend uitzicht op de Middellandse Zee en de rots van Monaco. Deze buitengewone woning van 420 m², verdeeld over vier verdiepingen bediend door een privélift, onderscheidt zich door de durf van de architectuur en de onberispelijke kwaliteit van de afwerking.",
        "Elke kamer is ontworpen om de verbinding met de zee te maximaliseren: de genereuze glazen pui van de hoofdwoonkamer opent op gelijkvloers niveau naar het hoofdterras (80 m²) en het verwarmde zwembad, waarvan de overloop opgaat in de zee-horizon. De vier mastersuites, elk voorzien van een maatwerk inloopkast en marmeren badkamer, bieden absolute privacy. Het onafhankelijke conciërge-appartement (55 m²) rondt het geheel af.",
        "Cap-d'Ail is een van de meest exclusieve gemeenten van het Franse moederland, halverwege Villefranche-sur-Mer en Monaco. Beveiligde omgeving, nabijheid van de grootste evenementen van het Vorstendom, voordelige belasting voor niet-ingezetenen. Exclusief bij SARL Bonestroo."
      ]
    }
  }
];

// Make globally available (for pages that load this file via <script>)
if (typeof window !== 'undefined') {
  window.BIENS = BIENS;
}
