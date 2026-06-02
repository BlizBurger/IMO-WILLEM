/**
 * i18n.js — SARL Bonestroo Immo
 * Trilingual translation system: FR / EN / NL
 * Usage: t('key'), setLang('fr'|'en'|'nl'), getLang()
 */

'use strict';

const I18N = {
  fr: {
    // ── Navigation ──────────────────────────────────────────────────────────
    nav_logo:          'Bonestroo',
    nav_logo_em:       'Immo',
    nav_accueil:       'Accueil',
    nav_biens:         'Biens',
    nav_carte:         'Carte',
    nav_contact:       'Contact',
    nav_mentions:      'Mentions légales',

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero_eyebrow:      'Agence immobilière — Riviera',
    hero_title_1:      'Votre bien idéal',
    hero_title_2:      'sur la Riviera',
    hero_subtitle:     'Appartements, maisons et villas avec vue mer. Un service personnalisé, une connaissance intime du territoire.',
    hero_cta1:         'Voir les biens',
    hero_cta2:         'Nous contacter',

    // ── Stats hero ───────────────────────────────────────────────────────────
    stat_vendus:       'Biens vendus',
    stat_dispo:        'Disponibles',
    stat_annees:       "Années d'expérience",

    // ── Section biens ────────────────────────────────────────────────────────
    biens_eyebrow:     'Notre sélection',
    biens_title_em:    'Biens',
    biens_title:       'disponibles',

    // ── Filtres ──────────────────────────────────────────────────────────────
    filtre_tous:       'Tous',
    filtre_appart:     'Appartements',
    filtre_maison:     'Maisons & Villas',
    filtre_vmer:       'Vue mer',
    filtre_budget:     'Budget max',
    filtre_resultats:  'bien(s) trouvé(s)',

    // ── Cards ─────────────────────────────────────────────────────────────────
    card_contact:      'Nous contacter',
    card_details:      'Voir le détail',

    // ── Carte ────────────────────────────────────────────────────────────────
    carte_eyebrow:     'Localisation',
    carte_title:       'Les biens sur la',
    carte_title_em:    'carte',

    // ── Pourquoi nous ────────────────────────────────────────────────────────
    why_eyebrow:       'Notre différence',
    why_title:         'Pourquoi choisir',
    why_title_em:      'Bonestroo Immo',
    why_f1_title:      'Connaissance du terrain',
    why_f1_desc:       'Plus de 14 ans d\'expérience exclusive sur la Riviera franco-italienne. Chaque quartier n\'a aucun secret pour nous.',
    why_f2_title:      'Service multilingue',
    why_f2_desc:       'Français, anglais, néerlandais : nous accompagnons une clientèle internationale avec la même qualité de service.',
    why_f3_title:      'Discrétion & Excellence',
    why_f3_desc:       'Off-market, exclusivités, transactions confidentielles. Votre projet mérite la plus haute attention.',

    // ── Témoignages ──────────────────────────────────────────────────────────
    temoignages_eyebrow: 'Ils nous font confiance',
    temoignages_title:   'Ce que disent',
    temoignages_title_em:'nos clients',

    // ── Contact ──────────────────────────────────────────────────────────────
    contact_eyebrow:    'Parlons-en',
    contact_title_em:   'Contactez',
    contact_title:      "l'agence",
    contact_info_title: 'Votre projet, notre expertise',
    contact_info_desc:  "Une question sur un bien, une estimation, ou simplement envie d'en savoir plus ? Notre équipe vous répond dans les plus brefs délais.",

    // ── Formulaire ───────────────────────────────────────────────────────────
    form_nom:           'Nom',
    form_nom_ph:        'Votre nom',
    form_email:         'Email',
    form_email_ph:      'votre@email.com',
    form_tel:           'Téléphone',
    form_tel_ph:        '+33 6 XX XX XX XX',
    form_interet:       'Intérêt',
    form_interet_0:     'Sélectionnez...',
    form_interet_1:     'Achat',
    form_interet_2:     'Vente / Estimation',
    form_interet_3:     'Renseignements',
    form_message:       'Message',
    form_msg_ph:        'Votre message...',
    form_submit:        'Envoyer le message',
    form_success_title: 'Message envoyé !',
    form_success_desc:  'Nous vous recontactons très prochainement.',

    // ── Footer ───────────────────────────────────────────────────────────────
    footer_carte:       'Carte professionnelle N° XXXXX',
    footer_mention:     '© 2025 SARL Bonestroo — Tous droits réservés',

    // ── Modal / actions ──────────────────────────────────────────────────────
    modal_appel:        'Appeler',
    modal_whatsapp:     'WhatsApp',
    modal_email:        'Email',
    no_biens:           'Aucun bien dans cette catégorie.',

    // ── bien.html — général ──────────────────────────────────────────────────
    bien_retour:        '← Retour aux biens',
    bien_contact_call:  'Appeler',
    bien_contact_wa:    'WhatsApp',
    bien_contact_email: 'Email',
    bien_gmaps:         'Voir sur Google Maps',

    // ── bien.html — onglets ──────────────────────────────────────────────────
    tab_description:    'Description',
    tab_caract:         'Caractéristiques',
    tab_localisation:   'Localisation',
    tab_video:          'Vidéo',

    // ── bien.html — sections ─────────────────────────────────────────────────
    similaires_title:   'Biens similaires',
    similaires_eyebrow: 'Vous aimerez aussi',
    distances_title:    'Distances & accès',
    caract_title:       'Caractéristiques',
    galerie_counter:    'sur',       // "X sur Y"
    dpe_label:          'DPE',

    // ── mentions-legales.html ────────────────────────────────────────────────
    ml_title:           'Mentions légales',
    ml_editeur:         'Éditeur du site',
    ml_activite:        'Activité réglementée — Loi Hoguet',
    ml_directeur:       'Directeur de la publication',
    ml_hebergeur:       'Hébergement',
    ml_pi:              'Propriété intellectuelle',
    ml_mediation:       'Médiation à la consommation',
    ml_rgpd:            'Protection des données (RGPD)',
    ml_cookies:         'Cookies'
  },

  // ─────────────────────────────────────────────────────────────────────────
  en: {
    nav_logo:          'Bonestroo',
    nav_logo_em:       'Immo',
    nav_accueil:       'Home',
    nav_biens:         'Properties',
    nav_carte:         'Map',
    nav_contact:       'Contact',
    nav_mentions:      'Legal notice',

    hero_eyebrow:      'Real estate agency — Riviera',
    hero_title_1:      'Your ideal property',
    hero_title_2:      'on the Riviera',
    hero_subtitle:     'Apartments, houses and villas with sea views. A personalised service and an intimate knowledge of the area.',
    hero_cta1:         'See properties',
    hero_cta2:         'Contact us',

    stat_vendus:       'Properties sold',
    stat_dispo:        'Available',
    stat_annees:       'Years of experience',

    biens_eyebrow:     'Our selection',
    biens_title_em:    'Properties',
    biens_title:       'available',

    filtre_tous:       'All',
    filtre_appart:     'Apartments',
    filtre_maison:     'Houses & Villas',
    filtre_vmer:       'Sea view',
    filtre_budget:     'Max budget',
    filtre_resultats:  'property / properties found',

    card_contact:      'Contact us',
    card_details:      'View details',

    carte_eyebrow:     'Location',
    carte_title:       'Properties on the',
    carte_title_em:    'map',

    why_eyebrow:       'Our difference',
    why_title:         'Why choose',
    why_title_em:      'Bonestroo Immo',
    why_f1_title:      'Local expertise',
    why_f1_desc:       'Over 14 years of exclusive experience on the Franco-Italian Riviera. We know every neighbourhood inside out.',
    why_f2_title:      'Multilingual service',
    why_f2_desc:       'French, English, Dutch: we assist international clients with the same high standard of service.',
    why_f3_title:      'Discretion & Excellence',
    why_f3_desc:       'Off-market deals, exclusive listings, confidential transactions. Your project deserves the highest attention.',

    temoignages_eyebrow: 'They trust us',
    temoignages_title:   'What our',
    temoignages_title_em:'clients say',

    contact_eyebrow:    "Let's talk",
    contact_title_em:   'Contact',
    contact_title:      'the agency',
    contact_info_title: 'Your project, our expertise',
    contact_info_desc:  'A question about a property, a valuation, or simply want to know more? Our team will get back to you as soon as possible.',

    form_nom:           'Name',
    form_nom_ph:        'Your name',
    form_email:         'Email',
    form_email_ph:      'your@email.com',
    form_tel:           'Phone',
    form_tel_ph:        '+33 6 XX XX XX XX',
    form_interet:       'Interest',
    form_interet_0:     'Select...',
    form_interet_1:     'Purchase',
    form_interet_2:     'Sale / Valuation',
    form_interet_3:     'Information',
    form_message:       'Message',
    form_msg_ph:        'Your message...',
    form_submit:        'Send message',
    form_success_title: 'Message sent!',
    form_success_desc:  'We will get back to you very soon.',

    footer_carte:       'Professional card N° XXXXX',
    footer_mention:     '© 2025 SARL Bonestroo — All rights reserved',

    modal_appel:        'Call',
    modal_whatsapp:     'WhatsApp',
    modal_email:        'Email',
    no_biens:           'No properties in this category.',

    bien_retour:        '← Back to listings',
    bien_contact_call:  'Call',
    bien_contact_wa:    'WhatsApp',
    bien_contact_email: 'Email',
    bien_gmaps:         'View on Google Maps',

    tab_description:    'Description',
    tab_caract:         'Features',
    tab_localisation:   'Location',
    tab_video:          'Video',

    similaires_title:   'Similar properties',
    similaires_eyebrow: 'You might also like',
    distances_title:    'Distances & access',
    caract_title:       'Features',
    galerie_counter:    'of',
    dpe_label:          'EPC',

    ml_title:           'Legal notice',
    ml_editeur:         'Website publisher',
    ml_activite:        'Regulated activity — Hoguet Act',
    ml_directeur:       'Publication director',
    ml_hebergeur:       'Hosting',
    ml_pi:              'Intellectual property',
    ml_mediation:       'Consumer mediation',
    ml_rgpd:            'Data protection (GDPR)',
    ml_cookies:         'Cookies'
  },

  // ─────────────────────────────────────────────────────────────────────────
  nl: {
    nav_logo:          'Bonestroo',
    nav_logo_em:       'Immo',
    nav_accueil:       'Home',
    nav_biens:         'Woningen',
    nav_carte:         'Kaart',
    nav_contact:       'Contact',
    nav_mentions:      'Juridische vermeldingen',

    hero_eyebrow:      'Vastgoedkantoor — Rivièra',
    hero_title_1:      'Uw ideale woning',
    hero_title_2:      'aan de Rivièra',
    hero_subtitle:     "Appartementen, huizen en villa's met zeezicht. Persoonlijke service en grondige kennis van de regio.",
    hero_cta1:         'Bekijk woningen',
    hero_cta2:         'Neem contact op',

    stat_vendus:       'Verkochte woningen',
    stat_dispo:        'Beschikbaar',
    stat_annees:       'Jaar ervaring',

    biens_eyebrow:     'Onze selectie',
    biens_title_em:    'Woningen',
    biens_title:       'beschikbaar',

    filtre_tous:       'Alle',
    filtre_appart:     'Appartementen',
    filtre_maison:     "Huizen & Villa's",
    filtre_vmer:       'Zeezicht',
    filtre_budget:     'Max budget',
    filtre_resultats:  'woning(en) gevonden',

    card_contact:      'Neem contact op',
    card_details:      'Bekijk details',

    carte_eyebrow:     'Locatie',
    carte_title:       'Woningen op de',
    carte_title_em:    'kaart',

    why_eyebrow:       'Ons verschil',
    why_title:         'Waarom kiezen voor',
    why_title_em:      'Bonestroo Immo',
    why_f1_title:      'Lokale expertise',
    why_f1_desc:       'Meer dan 14 jaar exclusieve ervaring aan de Frans-Italiaanse Rivièra. We kennen elke buurt als onze broekzak.',
    why_f2_title:      'Meertalige service',
    why_f2_desc:       'Frans, Engels, Nederlands: wij begeleiden internationale klanten met dezelfde hoge kwaliteit van dienstverlening.',
    why_f3_title:      'Discretie & Excellence',
    why_f3_desc:       'Off-market deals, exclusieve aanbiedingen, vertrouwelijke transacties. Uw project verdient de hoogste aandacht.',

    temoignages_eyebrow: 'Ze vertrouwen ons',
    temoignages_title:   'Wat onze',
    temoignages_title_em:'klanten zeggen',

    contact_eyebrow:    'Laten we praten',
    contact_title_em:   'Contacteer',
    contact_title:      'het kantoor',
    contact_info_title: 'Uw project, onze expertise',
    contact_info_desc:  'Een vraag over een woning, een schatting, of gewoon meer weten? Ons team antwoordt zo snel mogelijk.',

    form_nom:           'Naam',
    form_nom_ph:        'Uw naam',
    form_email:         'E-mail',
    form_email_ph:      'uw@email.com',
    form_tel:           'Telefoon',
    form_tel_ph:        '+33 6 XX XX XX XX',
    form_interet:       'Interesse',
    form_interet_0:     'Selecteer...',
    form_interet_1:     'Aankoop',
    form_interet_2:     'Verkoop / Schatting',
    form_interet_3:     'Informatie',
    form_message:       'Bericht',
    form_msg_ph:        'Uw bericht...',
    form_submit:        'Bericht versturen',
    form_success_title: 'Bericht verzonden!',
    form_success_desc:  'We nemen zeer binnenkort contact met u op.',

    footer_carte:       'Beroepskaart N° XXXXX',
    footer_mention:     '© 2025 SARL Bonestroo — Alle rechten voorbehouden',

    modal_appel:        'Bellen',
    modal_whatsapp:     'WhatsApp',
    modal_email:        'E-mail',
    no_biens:           'Geen woningen in deze categorie.',

    bien_retour:        '← Terug naar woningen',
    bien_contact_call:  'Bellen',
    bien_contact_wa:    'WhatsApp',
    bien_contact_email: 'E-mail',
    bien_gmaps:         'Bekijk op Google Maps',

    tab_description:    'Beschrijving',
    tab_caract:         'Kenmerken',
    tab_localisation:   'Locatie',
    tab_video:          'Video',

    similaires_title:   'Vergelijkbare woningen',
    similaires_eyebrow: 'Misschien ook interessant',
    distances_title:    'Afstanden & toegang',
    caract_title:       'Kenmerken',
    galerie_counter:    'van',
    dpe_label:          'EPC',

    ml_title:           'Juridische vermeldingen',
    ml_editeur:         'Website-uitgever',
    ml_activite:        'Gereglementeerde activiteit — Hoguet-wet',
    ml_directeur:       'Publicatieverantwoordelijke',
    ml_hebergeur:       'Hosting',
    ml_pi:              'Intellectuele eigendom',
    ml_mediation:       'Consumentenmediation',
    ml_rgpd:            'Gegevensbescherming (AVG)',
    ml_cookies:         'Cookies'
  }
};

// ─── Core functions ──────────────────────────────────────────────────────────

/**
 * Returns the currently active language code.
 * Priority: localStorage > browser language > 'fr'
 */
function getLang() {
  const stored = localStorage.getItem('lang');
  if (stored && I18N[stored]) return stored;
  const browser = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  return I18N[browser] ? browser : 'fr';
}

/**
 * Returns the translation for a given key in the active language.
 * Falls back to French, then to the key itself.
 */
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || key;
}

/**
 * Applies a language to the entire document:
 * - Updates all [data-i18n] text nodes
 * - Updates all [data-i18n-placeholder] placeholder attributes
 * - Updates all [data-i18n-href] href attributes
 * - Saves to localStorage
 * - Dispatches 'langchange' event
 */
function setLang(lang) {
  if (!I18N[lang]) return;

  localStorage.setItem('lang', lang);

  // Highlight the active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang || btn.textContent.trim().toLowerCase() === lang);
  });

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang][key] || I18N.fr[key];
    if (val !== undefined) el.textContent = val;
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = I18N[lang][key] || I18N.fr[key];
    if (val !== undefined) el.placeholder = val;
  });

  // href attributes (e.g. mailto: or tel: links that vary by language)
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.getAttribute('data-i18n-href');
    const val = I18N[lang][key] || I18N.fr[key];
    if (val !== undefined) el.href = val;
  });

  // Update <html lang>
  document.documentElement.lang = lang;

  // Notify other modules
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

// Expose globally
if (typeof window !== 'undefined') {
  window.I18N    = I18N;
  window.getLang = getLang;
  window.setLang = setLang;
  window.t       = t;
}
