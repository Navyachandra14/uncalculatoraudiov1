/* ══ HINT MODULE ═══════════════════════════════════════════════
   Bottom-sheet drawer that slides up during quiz or practice.
   Shows the chapter's methods (with numbered steps) and
   worked examples so the user can check the technique.
   Opened by the "Hint" button. Closed by tapping outside or ✕.
═══════════════════════════════════════════════════════════ */
/* ─── HINT MODULE ────────────────────────────────────────── */
const Hint = (function(){
  function open(chId){
    const d=DATA[chId]; const meta=CHAPTERS.find(c=>c.id===chId);
    if(!d) return;
    document.getElementById('hint-ch-name').textContent=(meta?meta.title:chId)+' — How It Works';
    let html='';
    if(d.methods&&d.methods.length){
      html+='<div class="hint-section"><span class="hint-section-label">Method</span>';
      d.methods.forEach(m=>{
        html+=`<div class="hint-method-name">${m.name}</div><ul class="hint-steps">`;
        m.steps.filter(s=>s.trim()).forEach((s,i)=>{ html+=`<li><span class="hint-dot">${i+1}</span><span>${s}</span></li>`; });
        html+='</ul>';
      });
      html+='</div>';
    }
    if(d.examples&&d.examples.length){
      html+='<div class="hint-section"><span class="hint-section-label">Worked Examples</span>';
      d.examples.forEach(ex=>{
        html+=`<div class="hint-ex"><div class="hint-ex-hd">${ex.hd}</div><ul class="hint-ex-steps">`;
        ex.steps.forEach(s=>{ html+=`<li>${s}</li>`; });
        html+='</ul></div>';
      });
      html+='</div>';
    }
    document.getElementById('hint-body').innerHTML=html;
    document.getElementById('hint-body').scrollTop=0;
    document.getElementById('hint-overlay').classList.add('open');
    playSound('slide');
  }
  function close(){
    document.getElementById('hint-overlay').classList.remove('open');
  }
  function closeIfOutside(e){
    if(e.target===document.getElementById('hint-overlay')) close();
  }
  return {open,close,closeIfOutside};
})();

