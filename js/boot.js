/* ══ BOOT ══════════════════════════════════════════════════════
   Runs once when the page fully loads.
   Loads saved user state from localStorage.
   Registers the service worker (enables offline / PWA mode).
═══════════════════════════════════════════════════════════ */
/* ─── BOOT ───────────────────────────────────────────────── */
window.addEventListener('load', ()=>{
  loadS();
  QGen.generate();  // expand question pools to ~50 per chapter
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js').catch(()=>{}); }
});
