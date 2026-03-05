/* ══ UTILITIES ═════════════════════════════════════════════════
   shuffle()      — Fisher-Yates array shuffle
   makeOptions()  — builds 4 quiz answer choices, correct always included
   playSound()    — Web Audio API tones (ok / no / win / slide)
   vibrate()      — haptic feedback wrapper (calls playSound too)
   timerStart()   — starts countdown timer bar in quiz
   timerClear()   — stops and hides the timer
═══════════════════════════════════════════════════════════ */
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}


/* ─── OPTIONS GENERATOR — correct answer ALWAYS present ───────────────
   Build 3 wrong distractors first, then add the correct answer,
   then shuffle all 4 together. slice() can never cut the right answer. */
function makeOptions(answer) {
  const a = String(answer).trim();
  function wrong3(pool) {
    const u = [...new Set(pool.filter(x => x !== a && x != null && x !== ''))];
    const p = shuffle(u).slice(0, 3);
    for (let i = 1; p.length < 3; i++) p.push(a + '?' + i);
    return p;
  }
  if (a === 'Correct' || a === 'Incorrect') return shuffle(['Correct','Incorrect']);
  if (a.includes(' wins')) {
    const pool = ['Tie','Neither wins','Equal'];
    const m = a.match(/(\d+)\/(\d+)/);
    if (m) pool.push(m[2]+'/'+m[1]+' wins');
    return shuffle([a].concat(wrong3(pool)));
  }
  const fr = a.match(/^(\d+)\/(\d+)(.*)$/);
  if (fr) {
    const n=+fr[1], d=+fr[2], sx=fr[3]||'';
    const mk=(x,y)=>x+'/'+y+sx;
    return shuffle([a].concat(wrong3([mk(n+1,d),mk(n,d+1),mk(n>1?n-1:n+2,d),mk(n,d>1?d-1:d+2),mk(d,n),mk(n+2,d),mk(n,d+2)])));
  }
  if (/\d%$/.test(a)) {
    const v = parseFloat(a);
    if (!isNaN(v)) {
      const dp = (a.slice(0,-1).split('.')[1]||'').length;
      const fp = x => x.toFixed(dp)+'%';
      return shuffle([a].concat(wrong3([fp(v+.5),fp(v-.5),fp(v+1.5),fp(v-1.5),fp(Math.round(v)),fp(v+2.5),fp(v-2.5)].filter(x=>parseFloat(x)>0))));
    }
  }
  const nm = a.match(/^(\$?)(\d+\.?\d*)(.*)$/);
  if (nm) {
    const pre=nm[1], v=parseFloat(nm[2]), sx=nm[3]||'';
    if (!isNaN(v) && v > 0) {
      const dp=(nm[2].split('.')[1]||'').length;
      const fmt=x=>pre+Math.max(.01,x).toFixed(dp)+sx;
      let d;
      if      (v>=10000) d=[100,-100,200,-200,500,-500];
      else if (v>=1000)  d=[10,-10,20,-20,100,-100];
      else if (v>=100)   d=[5,-5,10,-10,20,-20];
      else if (v>=10)    d=[1,-1,2,-2,5,-5];
      else if (dp>=2)    d=[.25,-.25,.5,-.5,1,-1];
      else if (dp===1)   d=[.1,-.1,.5,-.5,1,-1];
      else               d=[1,-1,2,-2,3,-3];
      const pool=[...new Set(d.map(x=>fmt(v+x)).filter(x=>x!==a&&parseFloat(x.replace(/[^0-9.]/g,''))>0))];
      return shuffle([a].concat(wrong3(pool)));
    }
  }
  return [a,'?','??','???'];
}


/* ─── SOUND + HAPTICS ───────────────────────────────────── */
let soundEnabled = true;
function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    function tone(f,s,dur,g,tp) {
      const o=ctx.createOscillator(), gn=ctx.createGain();
      o.connect(gn); gn.connect(ctx.destination);
      o.type=tp||'sine'; o.frequency.setValueAtTime(f,s);
      gn.gain.setValueAtTime(0,s);
      gn.gain.linearRampToValueAtTime(g,s+.01);
      gn.gain.exponentialRampToValueAtTime(.001,s+dur);
      o.start(s); o.stop(s+dur+.05);
    }
    const t = ctx.currentTime;
    if (type==='ok') {
      tone(659,t,.12,.18); tone(784,t+.10,.18,.14);
    } else if (type==='no') {
      tone(131,t,.09,.20,'sawtooth'); tone(117,t+.07,.14,.15,'sawtooth');
    } else if (type==='win') {
      tone(523,t,.10,.15); tone(659,t+.10,.10,.13); tone(784,t+.20,.25,.18);
    } else if (type==='slide') {
      const o=ctx.createOscillator(), gn=ctx.createGain(), fl=ctx.createBiquadFilter();
      fl.type='lowpass'; fl.frequency.setValueAtTime(900,t); fl.frequency.linearRampToValueAtTime(300,t+.18);
      o.connect(fl); fl.connect(gn); gn.connect(ctx.destination); o.type='sine';
      o.frequency.setValueAtTime(520,t); o.frequency.exponentialRampToValueAtTime(180,t+.18);
      gn.gain.setValueAtTime(0,t); gn.gain.linearRampToValueAtTime(.07,t+.03); gn.gain.exponentialRampToValueAtTime(.001,t+.18);
      o.start(t); o.stop(t+.22);
    }
    setTimeout(()=>{try{ctx.close();}catch(e){}},800);
  } catch(e) {}
}
function vibrate(type) {
  playSound(type);
  if (!navigator.vibrate) return;
  if (type==='ok')  navigator.vibrate(30);
  if (type==='no')  navigator.vibrate([40,25,40]);
  if (type==='win') navigator.vibrate([50,30,80]);
}

let timerEnabled=true;
let _timerIv=null;
const TIMER_SECS=60;

function timerStart(wrapId, displayId, barId, seconds, onExpire){
  timerClear(wrapId);
  const wrap=document.getElementById(wrapId);
  if(!wrap) return;
  if(!timerEnabled){ wrap.classList.remove('show'); return; }
  wrap.classList.add('show');
  let remaining=seconds;
  function tick(){
    const disp=document.getElementById(displayId);
    const bar=document.getElementById(barId);
    if(disp){ disp.textContent=remaining+'s'; disp.classList.toggle('danger',remaining<=10); }
    if(bar){ bar.style.width=(remaining/seconds*100)+'%'; bar.classList.toggle('danger',remaining<=10); }
  }
  tick();
  _timerIv=setInterval(()=>{
    remaining--;
    tick();
    if(remaining<=0){ clearInterval(_timerIv); _timerIv=null; if(onExpire) onExpire(); }
  },1000);
}

function timerClear(wrapId){
  clearInterval(_timerIv); _timerIv=null;
  if(wrapId){
    const wrap=document.getElementById(wrapId);
    if(wrap) wrap.classList.remove('show');
  }
}

