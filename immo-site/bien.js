/**
 * bien.js — SARL Bonestroo Immo
 * Property detail page logic.
 *
 * Depends on (loaded before this file):
 *   transitions.js  → navigateTo()
 *   data.js         → BIENS[]
 *   i18n.js         → setLang(), getLang(), t(), I18N
 */

'use strict';

// ─── State ───────────────────────────────────────────────────────────────────
let currentBien    = null;
let galleryIndex   = 0;
let totalSlides    = 0;
let activeTab      = 'description';
let miniMap        = null;
let fsIndex        = 0;     // fullscreen gallery index
let fsOpen         = false;

// ─── Placeholder SVG ─────────────────────────────────────────────────────────
function placeholderSVG(type) {
  const color = (type === 'maison' || type === 'maison-villa') ? '#C4622D' : '#2B5FA6';
  const icon  = (type === 'maison' || type === 'maison-villa')
    ? '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/>'
    : '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>';
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#E8DDD0"/>
      <rect x="300" y="150" width="200" height="200" rx="16" fill="${color}" opacity="0.15"/>
      <svg x="340" y="190" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
    </svg>`
  )}`;
}

// ─── DPE badge color ──────────────────────────────────────────────────────────
function dpeBadgeStyle(grade) {
  const map = {
    A: { bg: '#009a44', color: '#fff' },
    B: { bg: '#50b848', color: '#fff' },
    C: { bg: '#b6cc2b', color: '#333' },
    D: { bg: '#f5d000', color: '#333' },
    E: { bg: '#f5a600', color: '#333' },
    F: { bg: '#e2401c', color: '#fff' },
    G: { bg: '#8b1a0f', color: '#fff' }
  };
  return map[grade] || { bg: '#aaa', color: '#fff' };
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

function renderGallery(bien) {
  const hero = document.getElementById('gallery-hero');
  if (!hero) return;

  const lang   = getLang();
  const photos = (bien.photos && bien.photos.length > 0) ? bien.photos : [null];
  totalSlides  = photos.length;
  galleryIndex = 0;

  const trackEl = hero.querySelector('#gallery-track');
  if (!trackEl) return;

  trackEl.innerHTML = photos.map((p, i) => `
    <div class="gh-slide" data-index="${i}">
      ${p
        ? `<img src="${p}" alt="${bien.localisation[lang]} — photo ${i + 1}" />`
        : `<img src="${placeholderSVG(bien.type)}" alt="${bien.localisation[lang]}" class="gh-placeholder" />`
      }
    </div>
  `).join('');

  // Dot navigation
  const dotsEl = hero.querySelector('#gh-dots');
  if (dotsEl) {
    dotsEl.innerHTML = photos.length > 1
      ? photos.map((_, i) => `<button class="gh-dot${i === 0 ? ' active' : ''}" onclick="ghGoTo(${i})" aria-label="Photo ${i+1}"></button>`).join('')
      : '';
  }

  // Arrow buttons
  const prevBtn = hero.querySelector('#gh-prev');
  const nextBtn = hero.querySelector('#gh-next');
  if (prevBtn) prevBtn.style.display = photos.length > 1 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = photos.length > 1 ? 'flex' : 'none';

  updateGallery();

  // Touch swipe
  let touchStartX = 0;
  trackEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  trackEl.addEventListener('touchend',   e => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 50) ghNav(deltaX < 0 ? 1 : -1);
  }, { passive: true });

  // Click on slide opens fullscreen
  trackEl.addEventListener('click', () => openFullscreen(galleryIndex));
}

function updateGallery() {
  const track = document.getElementById('gallery-track');
  if (!track) return;
  track.style.transform = `translateX(-${galleryIndex * 100}%)`;

  document.querySelectorAll('.gh-dot').forEach((d, i) => d.classList.toggle('active', i === galleryIndex));

  const counter = document.getElementById('gh-counter');
  if (counter) counter.textContent = `${galleryIndex + 1} ${t('galerie_counter')} ${totalSlides}`;
}

function ghNav(dir) {
  galleryIndex = (galleryIndex + dir + totalSlides) % totalSlides;
  updateGallery();
}

function ghGoTo(i) {
  galleryIndex = i;
  updateGallery();
}

// ─── Fullscreen overlay ───────────────────────────────────────────────────────

function openFullscreen(i) {
  if (!currentBien) return;
  const photos = (currentBien.photos && currentBien.photos.length > 0) ? currentBien.photos : [null];
  if (photos[0] === null) return; // no real photos — skip

  fsOpen  = true;
  fsIndex = i;

  let overlay = document.getElementById('fs-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'fs-overlay';
    overlay.innerHTML = `
      <button id="fs-close" onclick="closeFullscreen()" aria-label="Fermer">✕</button>
      <button id="fs-prev"  onclick="fsNav(-1)"         aria-label="Précédent">&#8592;</button>
      <button id="fs-next"  onclick="fsNav(1)"           aria-label="Suivant">&#8594;</button>
      <div id="fs-track"></div>
      <div id="fs-counter"></div>`;
    document.body.appendChild(overlay);
  }

  const lang = getLang();
  const fsTrack = document.getElementById('fs-track');
  fsTrack.innerHTML = photos.map((p, idx) =>
    `<div class="fs-slide" style="transform:translateX(${idx * 100}%)">
      ${p ? `<img src="${p}" alt="${currentBien.localisation[lang]} — ${idx + 1}" />` : ''}
    </div>`
  ).join('');

  updateFullscreen();
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
  fsOpen = false;
  const overlay = document.getElementById('fs-overlay');
  if (overlay) { overlay.classList.remove('open'); }
  document.body.style.overflow = '';
}

function fsNav(dir) {
  const photos = (currentBien.photos && currentBien.photos.length > 0) ? currentBien.photos : [null];
  fsIndex = (fsIndex + dir + photos.length) % photos.length;
  updateFullscreen();
}

function updateFullscreen() {
  document.querySelectorAll('.fs-slide').forEach((s, i) => {
    s.style.transform = `translateX(${(i - fsIndex) * 100}%)`;
  });
  const counter = document.getElementById('fs-counter');
  const photos  = (currentBien.photos && currentBien.photos.length > 0) ? currentBien.photos : [null];
  if (counter) counter.textContent = `${fsIndex + 1} / ${photos.length}`;
}

// ─── Info block (price, badge, location, stats) ──────────────────────────────

function renderInfo(bien) {
  const lang    = getLang();
  const statsL  = bien.stats[lang] || bien.stats.fr;
  const dpeKey  = Object.keys(statsL).find(k => k === 'DPE' || k === 'EPC');
  const dpeVal  = dpeKey ? statsL[dpeKey] : null;

  // Stats grid
  const statsHtml = `
    <div class="modal-stat">
      <div class="modal-stat-val">${bien.stats['m²']}</div>
      <div class="modal-stat-key">m²</div>
    </div>
    ${Object.entries(statsL).map(([k, v]) => {
      if (k === 'DPE' || k === 'EPC') {
        const style = dpeBadgeStyle(v);
        return `<div class="modal-stat">
          <div class="modal-stat-val dpe-badge" style="background:${style.bg};color:${style.color};">${v}</div>
          <div class="modal-stat-key">${t('dpe_label')}</div>
        </div>`;
      }
      return `<div class="modal-stat">
        <div class="modal-stat-val">${v}</div>
        <div class="modal-stat-key">${k}</div>
      </div>`;
    }).join('')}`;

  // Google Maps URL
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bien.adresseComplete || bien.localisation[lang])}`;

  // Render into page
  const priceEl = document.getElementById('bien-prix');
  if (priceEl) priceEl.textContent = bien.prix;

  const badgeEl = document.getElementById('bien-badge');
  if (badgeEl) {
    badgeEl.textContent  = bien.badge[lang];
    badgeEl.className    = `bien-badge ${bien.badgeClass === 'exclu' ? 'exclu' : ''}`;
  }

  const locEl = document.getElementById('bien-localisation');
  if (locEl) {
    locEl.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
      <a href="${gmapsUrl}" target="_blank" rel="noopener" data-i18n="bien_gmaps">${bien.adresseComplete || bien.localisation[lang]}</a>`;
  }

  const statsEl = document.getElementById('bien-stats');
  if (statsEl) statsEl.innerHTML = statsHtml;
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function initTabs(bien) {
  const tabs    = document.querySelectorAll('.bien-tab-btn');
  const panels  = document.querySelectorAll('.bien-tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t   => t.classList.toggle('active', t === tab));
      panels.forEach(p => p.classList.toggle('active', p.dataset.tab === target));
      activeTab = target;

      // Lazy-init localisation tab map
      if (target === 'localisation' && !miniMap) {
        initMiniMap(bien);
      }
    });
  });

  // Render tab content
  renderTabDescription(bien);
  renderTabCaracteristiques(bien);
  renderTabDistances(bien);
  renderTabVideo(bien);
}

function renderTabDescription(bien) {
  const el = document.getElementById('tab-content-description');
  if (!el) return;
  const lang  = getLang();
  const paras = Array.isArray(bien.description[lang]) ? bien.description[lang] : [bien.description[lang]];
  el.innerHTML = paras.map(p => `<p>${p}</p>`).join('');
}

function renderTabCaracteristiques(bien) {
  const el = document.getElementById('tab-content-caract');
  if (!el) return;
  const lang  = getLang();
  const items = (bien.caracteristiques && bien.caracteristiques[lang]) || [];
  el.innerHTML = items.map(item => `
    <li class="caract-item">
      <svg class="caract-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>${item}</span>
    </li>`).join('');
}

function renderTabDistances(bien) {
  const el = document.getElementById('tab-content-distances');
  if (!el) return;
  const lang  = getLang();
  const rows  = (bien.distances && bien.distances[lang]) || [];
  el.innerHTML = rows.map(r => `
    <tr>
      <td>${r.lieu}</td>
      <td class="distance-val">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        ${r.distance}
      </td>
    </tr>`).join('');
}

function renderTabVideo(bien) {
  const section = document.getElementById('tab-video-section');
  const el      = document.getElementById('tab-content-video');
  if (!section || !el) return;
  if (!bien.video) {
    section.style.display = 'none';
    return;
  }
  section.style.display = '';
  el.innerHTML = `<video controls playsinline>
    <source src="${bien.video}" type="video/mp4">
  </video>`;
}

// ─── Mini Leaflet map (localisation tab) ─────────────────────────────────────

function initMiniMap(bien) {
  const mapEl = document.getElementById('mini-map');
  if (!mapEl || typeof L === 'undefined') return;

  miniMap = L.map('mini-map', { scrollWheelZoom: false, zoomControl: true })
    .setView([bien.lat, bien.lng], 15);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(miniMap);

  const icon = L.divIcon({
    html:      `<div class="map-marker-pill">${bien.prix}</div>`,
    className: '',
    iconAnchor:[40, 15],
    iconSize:  [80, 30]
  });

  L.marker([bien.lat, bien.lng], { icon }).addTo(miniMap);
}

// ─── Similar properties ───────────────────────────────────────────────────────

function renderSimilaires(bien) {
  const grid = document.getElementById('similaires-grid');
  if (!grid) return;

  const biens  = window.BIENS || (typeof BIENS !== 'undefined' ? BIENS : []);
  const lang   = getLang();

  // City name (first word of localisation)
  const cityWord = (bien.localisation[lang] || '').split(/[\s—–\-]/)[0].toLowerCase();

  const similaires = biens
    .filter(b => {
      if (b.id === bien.id) return false;
      const sameType = b.type === bien.type;
      const sameCity = (b.localisation[lang] || '').toLowerCase().includes(cityWord);
      return sameType || sameCity;
    })
    .slice(0, 3);

  if (similaires.length === 0) {
    document.getElementById('similaires-section')?.style.setProperty('display', 'none');
    return;
  }

  grid.innerHTML = similaires.map(b => {
    const photo = b.photos && b.photos[0]
      ? `<img src="${b.photos[0]}" alt="${b.localisation[lang]}" loading="lazy" />`
      : `<div class="bien-photo-placeholder"><img src="${placeholderSVG(b.type)}" alt="${b.localisation[lang]}" /></div>`;
    const tags = (b.tags[lang] || []).map(tg => `<span class="tag">${tg}</span>`).join('');

    return `<article class="bien-card reveal" onclick="navigateTo('bien.html?id=${b.id}')">
      <div class="bien-photo">
        ${photo}
        <div class="bien-badge${b.badgeClass === 'exclu' ? ' exclu' : ''}">${b.badge[lang]}</div>
      </div>
      <div class="bien-body">
        <div class="bien-prix">${b.prix}</div>
        <div class="bien-loc">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${b.localisation[lang]}
        </div>
        <div class="bien-tags">${tags}</div>
      </div>
    </article>`;
  }).join('');

  // Reveal animation
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.bien-card.reveal').forEach(c => obs.observe(c));
}

// ─── Mobile sticky contact bar ────────────────────────────────────────────────

function renderStickyBar(bien) {
  const bar = document.getElementById('sticky-contact-bar');
  if (!bar) return;

  bar.querySelector('#sticky-call')?.addEventListener('click',  () => window.location.href = 'tel:+33493XXXXXX');
  bar.querySelector('#sticky-wa')?.addEventListener('click',    () => window.open(`https://wa.me/33493XXXXXX?text=${encodeURIComponent('Bonjour, je suis intéressé par ' + bien.prix)}`, '_blank'));
  bar.querySelector('#sticky-email')?.addEventListener('click', () => window.location.href = `mailto:contact@bonestroo-immo.fr?subject=${encodeURIComponent('Demande – ' + (bien.localisation[getLang()])  )}`);
}

// ─── Lang switcher (bien.html) ────────────────────────────────────────────────

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang || btn.textContent.trim().toLowerCase();
      setLang(lang);
      // Re-render all dynamic parts with new language
      if (currentBien) {
        renderInfo(currentBien);
        renderTabDescription(currentBien);
        renderTabCaracteristiques(currentBien);
        renderTabDistances(currentBien);
        renderSimilaires(currentBien);
      }
    });
  });
}

// ─── Nav scroll ──────────────────────────────────────────────────────────────

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Error state ─────────────────────────────────────────────────────────────

function showError() {
  const main = document.getElementById('bien-main');
  if (main) {
    main.innerHTML = `
      <div style="text-align:center;padding:120px 24px;">
        <h2 style="font-family:'Cormorant Garamond',serif;font-size:36px;margin-bottom:16px;">Bien introuvable</h2>
        <p style="color:#5C4F44;margin-bottom:32px;">Le bien demandé n'existe pas ou a été retiré.</p>
        <button class="btn-primary" onclick="navigateTo('index.html')">← Retour aux biens</button>
      </div>`;
  }
}

// ─── Keyboard navigation ──────────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (fsOpen) {
    if (e.key === 'ArrowLeft')  fsNav(-1);
    if (e.key === 'ArrowRight') fsNav(1);
    if (e.key === 'Escape')     closeFullscreen();
  } else {
    if (e.key === 'ArrowLeft')  ghNav(-1);
    if (e.key === 'ArrowRight') ghNav(1);
  }
});

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  setLang(getLang());

  initNavScroll();
  initLangSwitcher();

  // Get id from URL
  const params = new URLSearchParams(window.location.search);
  const id     = parseInt(params.get('id'), 10);

  const biens = window.BIENS || (typeof BIENS !== 'undefined' ? BIENS : []);
  const bien  = biens.find(b => b.id === id);

  if (!bien) {
    showError();
    return;
  }

  currentBien = bien;

  // Set page title
  document.title = `${bien.prix} — ${(bien.localisation[getLang()] || bien.localisation.fr)} | Bonestroo Immo`;

  renderGallery(bien);
  renderInfo(bien);
  initTabs(bien);
  renderSimilaires(bien);
  renderStickyBar(bien);

  // Back button
  const backBtn = document.getElementById('btn-retour');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (history.length > 1) history.back();
      else navigateTo('index.html');
    });
  }
});

// Expose for HTML event attributes
if (typeof window !== 'undefined') {
  window.ghNav          = ghNav;
  window.ghGoTo         = ghGoTo;
  window.openFullscreen = openFullscreen;
  window.closeFullscreen= closeFullscreen;
  window.fsNav          = fsNav;
}
