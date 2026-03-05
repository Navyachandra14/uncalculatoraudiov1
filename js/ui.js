/* ══ UI MODULES ════════════════════════════════════════════════
   Toast     — small notification pop-up at bottom of screen
   App       — shows the main app, hides the landing screen
   Nav       — switches between Learn / Practice / Stats / Settings tabs
   ChapterList — renders the scrollable list of 19 chapters
   Stats     — renders the progress/accuracy numbers
   Settings  — sound toggle, timer toggle, reset button
═══════════════════════════════════════════════════════════ */
/* ─── TOAST ─────────────────────────────────────────────── */
const Toast = (function(){
  let t=null;
  const el=document.getElementById('toast');
  return {
    show(msg){ el.textContent=msg; el.classList.add('show'); clearTimeout(t); t=setTimeout(()=>el.classList.remove('show'),2600); }
  };
})();

/* ─── APP ────────────────────────────────────────────────── */
const App = {
  start(){
    document.getElementById('view-landing').classList.add('hidden');
    document.getElementById('view-app').classList.remove('hidden');
    Nav.go('learn');
  }
};

/* ─── NAV ────────────────────────────────────────────────── */
const Nav = (function(){
  let cur = 'learn';
  return {
    go(id){
      cur = id;
      // Hide all tabs
      document.querySelectorAll('.tab-pane').forEach(p => p.style.display='none');
      const pane = document.getElementById('tab-'+id);
      pane.style.display='block';
      pane.scrollTop=0;
      // Update nav buttons
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab===id);
      });
      // Init tab
      if(id==='learn')    ChapterList.render();
      if(id==='practice'){ Practice.init(); Race.showLobby(); PracticeNav.show('practice'); }
      if(id==='stats')    Stats.render();
      if(id !== 'practice') Race.stop();
    }
  };
})();

/* ─── CHAPTER LIST ───────────────────────────────────────── */
const ChapterList = {

  /* Same 6 categories as Practice — purely visual grouping.
     Unlock rules unchanged: chapters unlock sequentially ch01→ch19. */
  CATS: [
    { id:'everyday', icon:'🔢', name:'Everyday Math',   color:'#4F9EFF', chapters:['ch01','ch02','ch03'] },
    { id:'tricks',   icon:'🧮', name:'Number Tricks',   color:'#A855F7', chapters:['ch04','ch05','ch06'] },
    { id:'multiply', icon:'⚡', name:'Speed Multiply',  color:'#F59E0B', chapters:['ch07','ch08','ch09','ch10'] },
    { id:'divide',   icon:'➗', name:'Division Lab',    color:'#10B981', chapters:['ch11','ch12'] },
    { id:'squares',  icon:'🔲', name:'Square Powers',   color:'#EF4444', chapters:['ch13','ch14','ch15','ch16'] },
    { id:'realworld',icon:'💰', name:'Real World Math', color:'#F97316', chapters:['ch17','ch18','ch19'] },
  ],

  _currentCat: null,

  /* ── called by Nav when switching to Learn tab ── */
  render(){ this.renderCategories(); },

  /* ── back from chapter detail → category chapter list ── */
  backFromDetail(){
    document.getElementById('screen-detail').classList.add('hidden');
    document.getElementById('screen-list').classList.remove('hidden');
    if(this._currentCat) this._renderCategoryChapters(this._currentCat);
  },

  /* ── SCREEN 1: category grid ── */
  renderCategories(){
    document.getElementById('screen-detail').classList.add('hidden');
    document.getElementById('screen-list').classList.add('hidden');
    document.getElementById('screen-categories').classList.remove('hidden');

    const done  = S.done.length, total = CHAPTERS.length;
    document.getElementById('global-pbar').style.width = Math.round(done/total*100)+'%';

    const grid = document.getElementById('learn-cat-grid');
    grid.innerHTML = this.CATS.map(cat => {
      const chIdxs   = cat.chapters.map(id => CHAPTERS.findIndex(c=>c.id===id));
      const catDone  = cat.chapters.filter(id => S.done.includes(id)).length;
      const catTotal = cat.chapters.length;
      const pct      = Math.round(catDone/catTotal*100);

      // First chapter index in this cat — unlocked if prev global chapter done or i===0
      const firstIdx = chIdxs[0];
      const prevDone = firstIdx===0 ? true : S.done.includes(CHAPTERS[firstIdx-1].id);
      const catUnlocked = prevDone || S.devMode;
      const allDone = catDone === catTotal;

      const starsRow = cat.chapters.map(id => {
        const done = S.done.includes(id);
        return `<span style="font-size:.75rem;opacity:${done?1:.2}">✓</span>`;
      }).join('');

      return `
        <div class="cat-card ${catUnlocked?'':'cat-locked'}"
             onclick="${catUnlocked?`ChapterList._openCat('${cat.id}')`:''}"
             style="--cat-color:${cat.color}">
          <div class="cat-icon">${catUnlocked ? cat.icon : '🔒'}</div>
          <div class="cat-name">${cat.name}</div>
          <div class="cat-stars" style="color:${cat.color}">${catUnlocked ? starsRow : '<span style="font-size:.65rem;color:var(--text3)">Complete previous first</span>'}</div>
          ${catUnlocked ? `
            <div style="font-size:.65rem;color:var(--text3);margin-bottom:6px">${catDone}/${catTotal} complete</div>
            <div class="cat-bar-wrap"><div class="cat-bar" style="width:${pct}%;background:${cat.color}"></div></div>
          ` : ''}
        </div>`;
    }).join('');
  },

  /* ── SCREEN 2: chapters within a category ── */
  _openCat(catId){
    this._currentCat = this.CATS.find(c=>c.id===catId);
    document.getElementById('screen-categories').classList.add('hidden');
    document.getElementById('screen-list').classList.remove('hidden');
    this._renderCategoryChapters(this._currentCat);
  },

  _renderCategoryChapters(cat){
    // Update back button
    document.getElementById('back-to-cats-label').textContent = 'Categories';

    // Category header
    document.getElementById('cat-header-row').innerHTML = `
      <span style="font-size:1.8rem">${cat.icon}</span>
      <div>
        <div style="font-family:var(--font-head);font-size:1.1rem;font-weight:800;color:${cat.color}">${cat.name}</div>
        <div style="font-size:.72rem;color:var(--text3)">${cat.chapters.length} chapters</div>
      </div>`;

    // Back label for detail screen
    document.getElementById('back-to-cat-label').textContent = cat.name;

    const list = document.getElementById('chapter-list');
    list.innerHTML = '';

    cat.chapters.forEach((chId, i) => {
      const globalIdx = CHAPTERS.findIndex(c=>c.id===chId);
      const ch        = CHAPTERS[globalIdx];
      if(!ch) return;

      const prevId   = globalIdx > 0 ? CHAPTERS[globalIdx-1].id : null;
      const prevDone = prevId ? S.done.includes(prevId) : true;
      const unlocked = (globalIdx===0) || prevDone || S.devMode;
      const completed= S.done.includes(ch.id);
      const diff     = ch.difficulty.toLowerCase();

      const el = document.createElement('div');
      el.className = `ch-item diff-${diff} ${unlocked?'':'locked'} anim-up`;
      el.style.animationDelay = i*0.04+'s';
      el.innerHTML = `
        <div class="ch-num-col">
          <span class="ch-num" style="${completed?'background:'+cat.color+';color:#fff;border-color:'+cat.color:''}">${completed?'✓':String(globalIdx+1).padStart(2,'0')}</span>
        </div>
        <div class="ch-body">
          <div class="ch-title">${ch.title}</div>
          <div class="ch-sub">${ch.difficulty}</div>
        </div>
        <div class="ch-right">
          ${!unlocked ? '<span class="badge-lock">🔒</span>' : ''}
        </div>`;
      if(unlocked){
        el.onclick = () => Chapter.open(ch.id);
      }
      list.appendChild(el);
    });
  },

};

/* ─── STATS ──────────────────────────────────────────────── */
const Stats = {
  render(){
    const done=S.done.length, total=CHAPTERS.length;
    const pct=Math.round(done/total*100);
    const acc=S.attempts>0?Math.round(S.correct/S.attempts*100)+'%':'—';
    document.getElementById('s-done').textContent=done;
    document.getElementById('s-pct').textContent=pct+'%';
    document.getElementById('s-acc').textContent=acc;
    document.getElementById('s-att').textContent=S.attempts;
    document.getElementById('stats-pbar').style.width=pct+'%';
  }
};

/* ─── SETTINGS ───────────────────────────────────────────── */
const Settings = {
  initiateReset(){ document.getElementById('reset-confirm').classList.remove('hidden'); },
  cancelReset()  { document.getElementById('reset-confirm').classList.add('hidden'); },
  confirmReset() { try{localStorage.removeItem(KEY);}catch(e){} location.reload(); },
  toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) btn.textContent = soundEnabled ? 'On' : 'Off';
    if (soundEnabled) playSound('ok');
    Toast.show(soundEnabled ? '🔊 Sound On' : '🔇 Sound Off');
  },
  toggleTimer() {
    timerEnabled = !timerEnabled;
    const btn = document.getElementById('timer-toggle-btn');
    if (btn) btn.textContent = timerEnabled ? 'On' : 'Off';
    Toast.show(timerEnabled ? '⏱ Timer On' : '⏱ Timer Off');
  }
};

/* ─── PRACTICE / RACE MODE SWITCHER ─────────────────────────── */
const PracticeNav = {
  show(mode){
    document.getElementById('mode-practice').style.display = mode==='practice' ? 'block' : 'none';
    document.getElementById('mode-race').style.display      = mode==='race'     ? 'block' : 'none';
    document.getElementById('mode-btn-practice').classList.toggle('active', mode==='practice');
    document.getElementById('mode-btn-race').classList.toggle('active', mode==='race');
    if(mode==='race') Race.showLobby();
  }
};
