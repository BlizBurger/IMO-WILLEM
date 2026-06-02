/**
 * transitions.js — SARL Bonestroo Immo
 * Page transition overlay system.
 * Provides a smooth fade-to-dark between pages.
 *
 * Usage (any page):
 *   <script src="transitions.js"></script>
 *   navigateTo('bien.html?id=3');
 */

'use strict';

// ─── Create overlay element ──────────────────────────────────────────────────

(function initTransitionOverlay() {
  // Avoid double-insert if script somehow loaded twice
  if (document.getElementById('page-transition')) return;

  const overlay = document.createElement('div');
  overlay.id = 'page-transition';

  Object.assign(overlay.style, {
    position:        'fixed',
    inset:           '0',
    background:      '#1C1612',
    zIndex:          '9999',
    opacity:         '1',           // start opaque — will animate to 0 on load
    pointerEvents:   'none',
    transition:      'opacity 0.35s ease'
  });

  // Insert as first child of body (or directly if body not ready yet)
  const insert = () => document.body.insertBefore(overlay, document.body.firstChild);
  if (document.body) {
    insert();
  } else {
    document.addEventListener('DOMContentLoaded', insert);
  }
})();

// ─── Reveal on page load ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('page-transition');
  if (!overlay) return;

  // Allow a single paint frame so the browser registers opacity:1 first
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.opacity = '0';
    });
  });
});

// ─── Navigate with fade-out ───────────────────────────────────────────────────

/**
 * Fades the page to dark then navigates to the given URL.
 * @param {string} url - Destination URL (relative or absolute)
 */
function navigateTo(url) {
  const overlay = document.getElementById('page-transition');
  if (!overlay) {
    window.location.href = url;
    return;
  }

  overlay.style.pointerEvents = 'all';
  overlay.style.opacity = '1';

  // Navigate after the transition completes
  overlay.addEventListener('transitionend', () => {
    window.location.href = url;
  }, { once: true });

  // Safety fallback in case transitionend never fires
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

// Expose globally
if (typeof window !== 'undefined') {
  window.navigateTo = navigateTo;
}
