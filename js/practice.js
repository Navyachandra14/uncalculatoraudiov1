/* ══ PRACTICE MODULE — Candy Crush style ═══════════════════════
   6 categories → 5 levels each → 30 challenges total
   Questions from chapters grouped into categories.
   Progress saved as stars (0–3) per level.
════════════════════════════════════════════════════════════════ */
const Practice = (function(){

  /* ── CATEGORIES ─────────────────────────────────────────── */
  const CATS = [
    { id:'everyday', icon:'🔢', name:'Everyday Math',
      color:'#4F9EFF', chapters:['ch01','ch02','ch03'] },
    { id:'tricks',   icon:'🧮', name:'Number Tricks',
      color:'#A855F7', chapters:['ch04','ch05','ch06'] },
    { id:'multiply', icon:'⚡', name:'Speed Multiply',
      color:'#F59E0B', chapters:['ch07','ch08','ch09','ch10'] },
    { id:'divide',   icon:'➗', name:'Division Lab',
      color:'#10B981', chapters:['ch11','ch12'] },
    { id:'squares',  icon:'🔲', name:'Square Powers',
      color:'#EF4444', chapters:['ch13','ch14','ch15','ch16'] },
    { id:'realworld',icon:'💰', name:'Real World',
      color:'#F97316', chapters:['ch17','ch18','ch19'] },
  ];

  /* ── LEVEL SPECS ─────────────────────────────────────────── */
  const LV = [
    { n:1, name:'Starter',   icon:'🌱', qs:8,  timer:90, pass:.75,
      desc:'Warm up — 8 questions' },
    { n:2, name:'Practice',  icon:'🔥', qs:10, timer:60, pass:.70,
      desc:'Build the habit — 10 questions' },
    { n:3, name:'Speed',     icon:'⚡', qs:12, timer:45, pass:.75,
      desc:'Think faster — 12 questions' },
    { n:4, name:'Challenge', icon:'💪', qs:15, timer:30, pass:.73,
      desc:'Push limits — 15 questions' },
    { n:5, name:'Master',    icon:'👑', qs:20, timer:20, pass:.80,
      desc:'Prove mastery — 20 questions' },
  ];

  /* ── STATE ────────────────────────────────────────────────── */
  let _view    = 'grid';        // 'grid' | 'levels' | 'play' | 'result'
  let _cat     = null;          // current CATS entry
  let _lv      = null;          // current LV entry
  let _pool    = [];
  let _poolIdx = 0;
  let _score   = 0;
  let _total   = 0;
  let _qTimer  = null;
  let _secsLeft= 0;
  let _answered= false;
  let _current = null;

  /* ── PUBLIC: called by Nav when switching to practice tab ── */
  function init(){
    _view = 'grid';
    _render();
  }

  /* ── MAIN RENDER ROUTER ─────────────────────────────────── */
  function _render(){
    if(_view==='grid')   _renderGrid();
    else if(_view==='levels') _renderLevels();
    else if(_view==='play')   _renderPlay();
    else if(_view==='result') _renderResult();
  }

  /* ── HELPERS ─────────────────────────────────────────────── */
  function _getStars(catId, lvN){
    return (S.practiceStars && S.practiceStars[catId+'_'+lvN]) || 0;
  }
  function _setStars(catId, lvN, stars){
    if(!S.practiceStars) S.practiceStars = {};
    const key = catId+'_'+lvN;
    if((S.practiceStars[key]||0) < stars) S.practiceStars[key] = stars;
    saveS();
  }
  function _isLvUnlocked(cat, lvN){
    if(lvN === 1) return _isCatUnlocked(cat);
    return _getStars(cat.id, lvN-1) > 0;
  }
  function _isCatUnlocked(cat){
    if(S.devMode) return true;
    return cat.chapters.some(id => S.done.includes(id));
  }
  function _catProgress(cat){
    let total = 0;
    LV.forEach(lv => total += _getStars(cat.id, lv.n));
    return total; // max 15
  }
  function _buildPool(cat){
    const all = [];
    cat.chapters.forEach(id => {
      const d = DATA[id];
      if(d && d.qs) d.qs.forEach(q => all.push({...q, chId:id}));
    });
    return shuffle([...all]);
  }
  function _starsForScore(correct, total, passRate){
    const pct = correct/total;
    if(pct >= .95) return 3;
    if(pct >= .85) return 2;
    if(pct >= passRate) return 1;
    return 0;
  }
  function _starHtml(n, col){
    return [1,2,3].map(i =>
      `<span style="font-size:1.4rem;opacity:${i<=n?1:.2};filter:${i<=n?'none':'grayscale(1)'}">⭐</span>`
    ).join('');
  }

  /* ══ VIEW: CATEGORY GRID ═════════════════════════════════════ */
  function _renderGrid(){
    const body = document.getElementById('prac-body');
    if(!body) return;

    const totalStars = CATS.reduce((s,c) => s + _catProgress(c), 0);
    const maxStars   = CATS.length * LV.length * 3; // 90

    const cards = CATS.map(cat => {
      const unlocked = _isCatUnlocked(cat);
      const prog     = _catProgress(cat);
      const pct      = Math.round(prog / (LV.length*3) * 100);
      const starsRow = LV.map(lv => {
        const s = _getStars(cat.id, lv.n);
        return `<span style="font-size:.75rem;opacity:${s>0?1:.25}">⭐</span>`;
      }).join('');

      return `
        <div class="cat-card ${unlocked?'':'cat-locked'}"
             onclick="${unlocked?`Practice._openCat('${cat.id}')`:''}"
             style="--cat-color:${cat.color}">
          <div class="cat-icon">${unlocked ? cat.icon : '🔒'}</div>
          <div class="cat-name">${cat.name}</div>
          <div class="cat-stars">${unlocked ? starsRow : '<span style="font-size:.7rem;color:var(--text3)">Complete a lesson first</span>'}</div>
          ${unlocked ? `<div class="cat-bar-wrap"><div class="cat-bar" style="width:${pct}%;background:${cat.color}"></div></div>` : ''}
        </div>`;
    }).join('');

    body.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h1 class="page-title" style="margin-bottom:0">Practice</h1>
        <span style="font-family:var(--font-mono);font-size:.72rem;color:var(--text3)">
          ⭐ ${totalStars} / ${maxStars}
        </span>
      </div>
      <div class="cat-grid">${cards}</div>`;

    // hide old pbar
    const pw = document.getElementById('prac-pbar-wrap');
    if(pw) pw.style.display='none';
    const fb = document.getElementById('prac-feedback');
    if(fb) fb.style.display='none';
  }

  /* ══ VIEW: LEVEL SELECT ══════════════════════════════════════ */
  function _renderLevels(){
    const body = document.getElementById('prac-body');
    if(!body) return;

    const levels = LV.map((lv, i) => {
      const unlocked = _isLvUnlocked(_cat, lv.n);
      const stars    = _getStars(_cat.id, lv.n);
      const done     = stars > 0;

      return `
        <div class="lv-row ${unlocked?'':'lv-locked'}"
             onclick="${unlocked?`Practice._startLevel(${lv.n})`:''}"
             style="${done?'border-color:'+_cat.color+';background:'+_cat.color+'18':''}">
          <div class="lv-num" style="${done?'background:'+_cat.color:''}">
            ${done ? _starHtml(stars,'') : unlocked ? lv.icon : '🔒'}
          </div>
          <div class="lv-info">
            <div class="lv-name">${lv.name}</div>
            <div class="lv-desc">${lv.desc} · ${lv.timer}s/question</div>
          </div>
          ${done ? `<div style="font-size:.7rem;color:${_cat.color};font-weight:700">DONE</div>` :
            unlocked ? `<div style="font-size:.7rem;color:var(--text3)">PLAY</div>` :
            `<div style="font-size:.7rem;color:var(--text3)">LOCKED</div>`}
        </div>`;
    }).join('');

    body.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:18px">
        <button class="btn btn-ghost btn-sm" onclick="Practice._backToGrid()" style="padding:7px 12px">← Back</button>
        <span style="font-size:1.5rem">${_cat.icon}</span>
        <h1 class="page-title" style="margin-bottom:0;color:${_cat.color}">${_cat.name}</h1>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">${levels}</div>`;
  }

  /* ══ VIEW: PLAY ══════════════════════════════════════════════ */
  function _renderPlay(){
    const body = document.getElementById('prac-body');
    if(!body) return;

    if(_poolIdx >= _pool.length){
      _pool = shuffle([..._buildPool(_cat)]);
      _poolIdx = 0;
    }
    _current  = _pool[_poolIdx];
    _answered = false;

    const meta  = CHAPTERS.find(c => c.id === _current.chId);
    const opts  = makeOptions(_current.a);
    const pct   = _total/_lv.qs*100;

    body.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
        <button class="btn btn-ghost btn-sm" onclick="Practice._quitLevel()" style="padding:7px 10px;font-size:.75rem">✕ Quit</button>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:.7rem;color:var(--text3);font-weight:600">Q ${_total+1} / ${_lv.qs}</span>
            <span style="font-size:.7rem;color:var(--text3)">✓ ${_score}</span>
          </div>
          <div class="pbar-wrap" style="margin:0"><div class="pbar-fill" style="width:${pct}%;background:${_cat.color}"></div></div>
        </div>
      </div>

      <!-- per-question timer -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <span style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.1em">Time</span>
        <span id="lv-timer-disp" style="font-family:var(--font-mono);font-size:.8rem;font-weight:700;color:var(--text2)">${_lv.timer}s</span>
      </div>
      <div style="height:4px;background:var(--border);border-radius:100px;margin-bottom:14px;overflow:hidden">
        <div id="lv-timer-bar" style="height:100%;width:100%;background:${_cat.color};border-radius:100px;transition:width 1s linear,background .4s"></div>
      </div>

      <div class="content-card" style="padding-bottom:12px">
        <div class="prac-tag" style="margin-bottom:8px;color:${_cat.color};border-color:${_cat.color}40">
          ${_cat.icon} ${meta?meta.title:''}
        </div>
        <div class="prac-q">${_current.q}</div>
        <div id="lv-opts">
          ${opts.map((o,i)=>`
            <button class="quiz-option anim-up" style="animation-delay:${i*.04}s"
              data-val="${encodeURIComponent(o)}">${o}
            </button>`).join('')}
        </div>
      </div>`;

    document.querySelectorAll('#lv-opts .quiz-option').forEach(btn =>
      btn.addEventListener('click', () => _answer(btn)));

    _startQTimer();
  }

  function _startQTimer(){
    clearTimeout(_qTimer);
    _secsLeft = _lv.timer;
    _tickQTimer();
  }

  function _tickQTimer(){
    const disp = document.getElementById('lv-timer-disp');
    const bar  = document.getElementById('lv-timer-bar');
    if(disp) disp.textContent = _secsLeft + 's';
    if(disp) disp.style.color = _secsLeft<=5?'var(--red)':'var(--text2)';
    if(bar){
      const pct = _secsLeft/_lv.timer*100;
      bar.style.width = pct+'%';
      bar.style.background = _secsLeft<=5?'var(--red)':_secsLeft<=10?'var(--gold)':_cat.color;
    }
    if(_secsLeft<=0){ _timeout(); return; }
    _secsLeft--;
    _qTimer = setTimeout(_tickQTimer, 1000);
  }

  function _timeout(){
    if(_answered) return;
    _answered = true;
    _total++;
    document.querySelectorAll('#lv-opts .quiz-option').forEach(b => {
      b.disabled = true;
      if(decodeURIComponent(b.dataset.val) === _current.a) b.classList.add('correct');
    });
    vibrate('no');
    _advance();
  }

  function _answer(btn){
    if(_answered) return;
    _answered = true;
    clearTimeout(_qTimer);
    _total++;
    const val = decodeURIComponent(btn.dataset.val);
    const ok  = val === _current.a;
    if(ok) _score++;

    document.querySelectorAll('#lv-opts .quiz-option').forEach(b => {
      b.disabled = true;
      const v = decodeURIComponent(b.dataset.val);
      if(v === _current.a) b.classList.add('correct');
      else if(b===btn && !ok) b.classList.add('wrong','anim-shake');
    });
    vibrate(ok?'ok':'no');

    // Flash feedback on timer bar
    const bar = document.getElementById('lv-timer-bar');
    if(bar) bar.style.background = ok?'var(--mint)':'var(--red)';

    _advance();
  }

  function _advance(){
    _poolIdx++;
    setTimeout(()=>{
      if(_total >= _lv.qs){ _finishLevel(); }
      else { _renderPlay(); }
    }, 900);
  }

  /* ══ VIEW: RESULT ════════════════════════════════════════════ */
  function _finishLevel(){
    clearTimeout(_qTimer);
    _view = 'result';

    const stars    = _starsForScore(_score, _total, _lv.pass);
    const passed   = stars > 0;
    const pct      = Math.round(_score/_total*100);
    const prevBest = _getStars(_cat.id, _lv.n);

    if(stars > prevBest){
      _setStars(_cat.id, _lv.n, stars);
      vibrate('win');
    }

    const nextLv = LV.find(l => l.n === _lv.n + 1);
    const unlockMsg = (passed && nextLv && prevBest===0)
      ? `<div style="margin:12px 0;padding:10px 14px;border-radius:var(--radius-sm);background:${_cat.color}18;border:1px solid ${_cat.color}40;font-size:.82rem;color:${_cat.color};font-weight:600">
           🎉 Unlocked: ${nextLv.icon} ${nextLv.name}!
         </div>` : '';

    const body = document.getElementById('prac-body');
    if(!body) return;

    body.innerHTML = `
      <div class="content-card anim-pop" style="text-align:center;padding:28px 20px">
        <div style="font-size:2rem;margin-bottom:6px">${_cat.icon}</div>
        <div style="font-family:var(--font-head);font-size:1rem;font-weight:800;color:${_cat.color};margin-bottom:14px">
          ${_lv.icon} ${_lv.name}
        </div>
        <div style="display:flex;justify-content:center;gap:4px;margin-bottom:16px">
          ${_starHtml(stars, _cat.color)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px">
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px 8px">
            <div style="font-family:var(--font-mono);font-size:1.6rem;font-weight:700;color:var(--mint)">${_score}</div>
            <div style="font-size:.6rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:3px">Correct</div>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px 8px">
            <div style="font-family:var(--font-mono);font-size:1.6rem;font-weight:700;color:var(--blue)">${pct}%</div>
            <div style="font-size:.6rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:3px">Accuracy</div>
          </div>
        </div>
        ${unlockMsg}
        ${!passed ? `<div style="font-size:.8rem;color:var(--text2);margin-bottom:14px">Need ${Math.round(_lv.pass*100)}% to pass. You got ${pct}%. Try again!</div>` : ''}
        <button class="btn btn-primary btn-block" onclick="Practice._retry()" style="margin-bottom:8px">
          ${passed ? '▶ Play Again' : '↻ Try Again'}
        </button>
        <button class="btn btn-ghost btn-block" onclick="Practice._backToLevels()">
          Back to ${_cat.name}
        </button>
      </div>`;
  }

  /* ══ NAVIGATION ══════════════════════════════════════════════ */
  function _openCat(catId){
    _cat  = CATS.find(c => c.id === catId);
    _view = 'levels';
    _render();
  }
  function _startLevel(lvN){
    _lv     = LV.find(l => l.n === lvN);
    _pool   = _buildPool(_cat);
    _poolIdx= 0;
    _score  = 0;
    _total  = 0;
    _view   = 'play';
    _render();
  }
  function _retry(){
    _pool   = _buildPool(_cat);
    _poolIdx= 0;
    _score  = 0;
    _total  = 0;
    _view   = 'play';
    _render();
  }
  function _backToGrid(){
    clearTimeout(_qTimer);
    _view = 'grid';
    _render();
  }
  function _backToLevels(){
    clearTimeout(_qTimer);
    _view = 'levels';
    _render();
  }
  function _quitLevel(){
    clearTimeout(_qTimer);
    _view = 'levels';
    _render();
  }

  return { init, _openCat, _startLevel, _retry, _backToGrid, _backToLevels, _quitLevel };
})();
