/* ══ STATE ════════════════════════════════════════════════════
   Persistent user data: completed chapters, quiz attempts,
   accuracy score, and dev mode flag.
   Saved to localStorage on every change.
   Dev mode: tap the title 7 times to unlock all chapters.
═══════════════════════════════════════════════════════════ */
/* ─── STATE ─────────────────────────────────────────────── */
const KEY = 'uncalc_v2';
let S = { devMode:false, done:[], attempts:0, correct:0, raceBest:0, practiceStars:{} };

function loadS() {
  try { const r=localStorage.getItem(KEY); if(r) S={...S,...JSON.parse(r)}; } catch(e){}
}
function saveS() { try { localStorage.setItem(KEY,JSON.stringify(S)); } catch(e){} }

/* ─── HIDDEN DEV MODE — 7 taps on title ─────────────────── */
(function(){
  let taps=0, timer=null;
  document.getElementById('landing-title-tap').addEventListener('click',()=>{
    taps++;
    clearTimeout(timer);
    timer=setTimeout(()=>{ taps=0; },3000);
    if(taps>=7){
      taps=0;
      S.devMode=!S.devMode;
      saveS();
      Toast.show(S.devMode ? '🔓 Dev Mode ON — all chapters unlocked' : '🔒 Dev Mode OFF');
    }
  });
})();
