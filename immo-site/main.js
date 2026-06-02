/**
 * main.js — SARL Bonestroo Immo
 * Homepage logic: filters, map, animated counters, testimonials carousel,
 * nav scroll, mobile menu, contact form.
 *
 * Depends on (loaded before this file):
 *   transitions.js  → navigateTo()
 *   data.js         → BIENS[]
 *   i18n.js         → setLang(), getLang(), t(), I18N
 *
 * NOTE: index.html already has its own embedded <script> block with BIENS
 * and I18N defined inline. This file provides the external complement for
 * any rebuild of index.html that externalises these dependencies.
 * When index.html embeds its own data/i18n, this file's renderBiens /
 * initMap functions duplicate the inline logic — that is intentional for
 * modularity if index.html is later refactored.
 */

'use strict';

// ─── State ───────────────────────────────────────────────────────────────────
let currentFilter  = 'tous';
let currentBudget  = Infinity;
let mapInstance    = null;
let mapMarkers     = [];
let carouselIndex  = 0;
let countersAnimated = false;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function placeholderSVG(type) {
  const color = (type === 'maison' || type === 'maison-villa') ? '#C4622D' : '#2B5FA6';
  const icon  = (type === 'maison' || type === 'maison-villa')
    ? '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/>'
    : '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>';
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 140">
      <rect width="200" height="140" fill="#E8DDD0"/>
      <rect x="60" y="30" width="80" height="80" rx="8" fill="${color}" opacity="0.15"/>
      <svg x="76" y="46" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>
    </svg>`
  )}`;
}

function hasSeaView(bien, lang) {
  const tags = bien.tags[lang] || bien.tags['fr'] || [];
  return tags.some(t => /mer|sea|zee/i.test(t));
}

// ─── Render property cards ───────────────────────────────────────────────────

function renderBiens() {
  const grid = document.getElementById('biens-grid');
  if (!grid) return;

  const lang   = getLang();
  const biens  = window.BIENS || (typeof BIENS !== 'undefined' ? BIENS : []);

  let filtered = biens.filter(b => {
    if (currentFilter === 'appartement' && b.type !== 'appartement') return false;
    if (currentFilter === 'maison'      && b.type !== 'maison' && b.type !== 'maison-villa') return false;
    if (currentFilter === 'vmer'        && !hasSeaView(b, lang)) return false;
    if (b.prixNum && b.prixNum > currentBudget) return false;
    return true;
  });

  // Update results counter
  const counter = document.getElementById('results-counter');
  if (counter) {
    counter.textContent = `${filtered.length} ${t('filtre_resultats')}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-biens">${t('no_biens')}</div>`;
    return;
  }

  grid.innerHTML = filtered.map((b, i) => {
    const photo = b.photos && b.photos[0]
      ? `<img src="${b.photos[0]}" alt="${b.localisation[lang]}" loading="lazy" />`
      : `<div class="bien-photo-placeholder"><img src="${placeholderSVG(b.type)}" alt="${b.localisation[lang]}" /></div>`;

    const tags = (b.tags[lang] || []).map(tg => `<span class="tag">${tg}</span>`).join('');

    return `<article class="bien-card reveal" style="transition-delay:${i * 80}ms"
        onclick="(typeof navigateTo === 'function') ? navigateTo('bien.html?id=${b.id}') : (window.location.href='bien.html?id=${b.id}')">
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

  // Staggered entrance via IntersectionObserver
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  grid.querySelectorAll('.bien-card.reveal').forEach(card => revealObserver.observe(card));
}

// ─── Filters ─────────────────────────────────────────────────────────────────

function initFilters() {
  const filtresEl = document.getElementById('filtres');
  if (!filtresEl) return;

  filtresEl.addEventListener('click', e => {
    const btn = e.target.closest('.filtre-btn');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    filtresEl.querySelectorAll('.filtre-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderBiens();
  });

  // Budget slider (optional element)
  const slider = document.getElementById('budget-slider');
  if (slider) {
    slider.addEventListener('input', () => {
      const val = parseInt(slider.value, 10);
      currentBudget = val === parseInt(slider.max, 10) ? Infinity : val;
      const label = document.getElementById('budget-label');
      if (label) label.textContent = currentBudget === Infinity ? '∞' : val.toLocaleString('fr-FR') + ' €';
      renderBiens();
    });
  }
}

// ─── Animated counters ────────────────────────────────────────────────────────

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

function animateCounter(el, target, duration) {
  if (!el) return;
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.round(easeOutQuart(progress) * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  const biens = window.BIENS || (typeof BIENS !== 'undefined' ? BIENS : []);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersAnimated) {
      countersAnimated = true;
      animateCounter(document.getElementById('stat-vendus'), 87,   1800);
      animateCounter(document.getElementById('stat-dispo'),  biens.length, 1400);
      animateCounter(document.getElementById('stat-annees'), 14,   1600);
      observer.disconnect();
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

// ─── Leaflet map ──────────────────────────────────────────────────────────────

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  mapInstance = L.map('map', {
    scrollWheelZoom: false,
    zoomControl:     true
  }).setView([43.7697, 7.4751], 11);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains:  'abcd',
    maxZoom:     19
  }).addTo(mapInstance);

  const biens = window.BIENS || (typeof BIENS !== 'undefined' ? BIENS : []);

  biens.forEach(bien => {
    const pillHtml = `<div class="map-marker-pill">${bien.prix}</div>`;
    const icon = L.divIcon({
      html:      pillHtml,
      className: '',
      iconAnchor:[40, 15],
      iconSize:  [80, 30]
    });

    const marker = L.marker([bien.lat, bien.lng], { icon })
      .addTo(mapInstance)
      .on('click', () => {
        if (typeof navigateTo === 'function') {
          navigateTo(`bien.html?id=${bien.id}`);
        } else {
          window.location.href = `bien.html?id=${bien.id}`;
        }
      });

    mapMarkers.push(marker);
  });
}

// ─── Testimonials carousel ───────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    text:   "L'équipe Bonestroo nous a trouvé notre appartement de rêve à Menton en seulement trois visites. Leur connaissance du marché local est impressionnante.",
    author: 'Marie & Thomas D.',
    lieu:   'Menton — Appartement 92 m²',
    stars:  5
  },
  {
    text:   "Exceptional service from start to finish. Willem and his team handled our villa purchase near Monaco with complete discretion and professionalism.",
    author: 'James & Sandra H.',
    lieu:   'Roquebrune-Cap-Martin — Villa',
    stars:  5
  },
  {
    text:   "Dankzij Bonestroo Immo vonden we snel ons tweede verblijf aan de Rivièra. Drietalige service, geen vertaalstress. Aanrader voor Nederlandstaligen!",
    author: 'Pieter & Els V.',
    lieu:   'Cap-d\'Ail — Appartement',
    stars:  5
  }
];

function initCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  if (!track) return;

  function renderSlide(i) {
    const t = TESTIMONIALS[i];
    const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    return `<div class="carousel-slide">
      <div class="testimonial-stars">${stars}</div>
      <blockquote class="testimonial-text">"${t.text}"</blockquote>
      <div class="testimonial-author">
        <div class="testimonial-name">${t.author}</div>
        <div class="testimonial-lieu">${t.lieu}</div>
      </div>
    </div>`;
  }

  track.innerHTML = TESTIMONIALS.map((_, i) => renderSlide(i)).join('');

  if (dotsEl) {
    dotsEl.innerHTML = TESTIMONIALS.map((_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" onclick="goToSlideCarousel(${i})" aria-label="Slide ${i+1}"></button>`
    ).join('');
  }

  updateCarousel();

  // Auto-advance every 6s
  setInterval(() => {
    goToSlideCarousel((carouselIndex + 1) % TESTIMONIALS.length);
  }, 6000);
}

function updateCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
  });
}

function goToSlideCarousel(i) {
  carouselIndex = i;
  updateCarousel();
}

function carouselPrev() { goToSlideCarousel((carouselIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); }
function carouselNext() { goToSlideCarousel((carouselIndex + 1) % TESTIMONIALS.length); }

// ─── Navigation scroll behaviour ─────────────────────────────────────────────

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

// ─── Mobile burger menu ───────────────────────────────────────────────────────

function initMobileMenu() {
  const burger = document.getElementById('burger-btn');
  const drawer = document.getElementById('nav-drawer');
  if (!burger || !drawer) return;

  burger.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on overlay click
  document.addEventListener('click', e => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && e.target !== burger) {
      drawer.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

// ─── Contact form ─────────────────────────────────────────────────────────────

function handleFormSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;
  form.style.display = 'none';
  success.classList.add('show');
  setTimeout(() => {
    success.classList.remove('show');
    form.style.display = '';
    form.reset();
  }, 4000);
}

// ─── Lang switcher ────────────────────────────────────────────────────────────

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang || btn.textContent.trim().toLowerCase();
      setLang(lang);
      // Re-render dynamic content
      renderBiens();
    });
  });

  // Listen for programmatic changes
  document.addEventListener('langchange', () => {
    renderBiens();
  });
}

// ─── Scroll helpers (called from HTML) ───────────────────────────────────────

function scrollToBiens() {
  const el = document.getElementById('biens');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language first
  setLang(getLang());

  initNavScroll();
  initMobileMenu();
  initFilters();
  renderBiens();
  initMap();
  initCounters();
  initCarousel();

  // Wire contact form (may already be wired via inline HTML onsubmit — idempotent)
  const form = document.getElementById('contact-form');
  if (form && !form.dataset.wired) {
    form.dataset.wired = '1';
    form.addEventListener('submit', handleFormSubmit);
  }
});

// Expose globals called from HTML
if (typeof window !== 'undefined') {
  window.renderBiens       = renderBiens;
  window.scrollToBiens     = scrollToBiens;
  window.scrollToContact   = scrollToContact;
  window.handleFormSubmit  = handleFormSubmit;
  window.carouselPrev      = carouselPrev;
  window.carouselNext      = carouselNext;
  window.goToSlideCarousel = goToSlideCarousel;
}
