/* ══ MATH RACE MODULE ══════════════════════════════════════════
   3-minute race: answer as many questions as possible.
   No per-question timer — the 3 min IS the pressure.
   Questions from all unlocked chapters, shuffled.
═══════════════════════════════════════════════════════════ */
const Race = (function(){

  const RACE_SECONDS = 180; // 3 minutes
  let _timer = null;
  let _secsLeft = RACE_SECONDS;
  let _score = 0;
  let _total = 0;
  let _pool = [];
  let _poolIdx = 0;
  let _running = false;
  let _answered = false;

  /* ── render the race lobby / start screen ── */
  function showLobby(){
    const best = S.raceBest || 0;
    document.getElementById('race-body').innerHTML = `
      <div class="content-card anim-up" style="text-align:center;padding:32px 20px;">
        <div style="font-size:3rem;margin-bottom:12px">🏁</div>
        <div style="font-family:var(--font-head);font-size:1.5rem;font-weight:800;margin-bottom:6px">
          3-Minute Math Race
        </div>
        <div style="color:var(--text2);font-size:.88rem;line-height:1.7;margin-bottom:8px;max-width:240px;margin-left:auto;margin-right:auto">
          Answer as many questions as you can before time runs out.
          Questions from all your unlocked chapters.
        </div>
        ${best > 0 ? `<div style="font-family:var(--font-mono);font-size:.8rem;color:var(--gold);margin-bottom:20px">
          🏆 Personal best: <strong>${best}</strong> correct
        </div>` : '<div style="margin-bottom:20px"></div>'}
        <button class="btn btn-primary btn-block" style="max-width:240px;margin:0 auto" onclick="Race.start()">
          Start Race →
        </button>
      </div>`;
    document.getElementById('race-timer-bar-wrap').style.display = 'none';
    document.getElementById('race-header-row').style.display = 'none';
  }

  /* ── start the race ── */
  function start(){
    const src = S.devMode ? CHAPTERS.map(c=>c.id) : S.done;
    const pool = [];
    src.forEach(id => {
      const d = DATA[id];
      if(d && d.qs) d.qs.forEach(q => pool.push({...q, chId:id}));
    });

    if(!pool.length){
      document.getElementById('race-body').innerHTML = `
        <div class="empty-prac">
          <div class="empty-icon">📚</div>
          <div class="empty-title">No Questions Yet</div>
          <div class="empty-desc">Complete at least one chapter in Learn first.</div>
          <button class="btn btn-primary" onclick="Nav.go('learn')">Go to Learn →</button>
        </div>`;
      return;
    }

    _pool = shuffle([...pool]);
    _poolIdx = 0;
    _secsLeft = RACE_SECONDS;
    _score = 0;
    _total = 0;
    _running = true;
    _answered = false;

    document.getElementById('race-timer-bar-wrap').style.display = 'block';
    document.getElementById('race-header-row').style.display = 'flex';
    _updateHeader();
    _tick();
    _showQ();
  }

  /* ── countdown tick ── */
  function _tick(){
    clearTimeout(_timer);
    _updateTimerBar();
    if(_secsLeft <= 0){ _finish(); return; }
    _secsLeft--;
    _timer = setTimeout(_tick, 1000);
  }

  /* ── show next question ── */
  function _showQ(){
    if(!_running) return;
    _answered = false;
    if(_poolIdx >= _pool.length){
      // reshuffled pool
      _pool = shuffle([..._pool]);
      _poolIdx = 0;
    }
    const q = _pool[_poolIdx];
    const opts = makeOptions(q.a);
    const meta = CHAPTERS.find(c => c.id === q.chId);

    document.getElementById('race-body').innerHTML = `
      <div class="content-card anim-up" style="padding-bottom:10px">
        <div class="prac-tag" style="margin-bottom:10px">
          ⚡ ${meta ? meta.title : 'Practice'}
        </div>
        <div class="quiz-q" style="font-size:1.1rem;margin-bottom:14px">${q.q}</div>
        <div id="race-opts">
          ${opts.map((o,i) => `
            <button class="quiz-option anim-up" style="animation-delay:${i*.04}s"
              data-val="${encodeURIComponent(o)}">${o}
            </button>`).join('')}
        </div>
      </div>`;

    document.querySelectorAll('#race-opts .quiz-option').forEach(btn => {
      btn.addEventListener('click', () => _answer(btn, q));
    });
  }

  /* ── handle answer ── */
  function _answer(btn, q){
    if(_answered || !_running) return;
    _answered = true;
    _total++;
    const val = decodeURIComponent(btn.dataset.val);
    const ok = (val === q.a);
    if(ok){ _score++; }
    _updateHeader();

    document.querySelectorAll('#race-opts .quiz-option').forEach(b => {
      b.disabled = true;
      const v = decodeURIComponent(b.dataset.val);
      if(v === q.a) b.classList.add('correct');
      else if(b === btn && !ok) b.classList.add('wrong', 'anim-shake');
    });
    vibrate(ok ? 'ok' : 'no');

    _poolIdx++;
    setTimeout(() => { playSound('slide'); setTimeout(_showQ, 60); }, ok ? 550 : 900);
  }

  /* ── update score/time header ── */
  function _updateHeader(){
    const el = document.getElementById('race-score-display');
    if(el) el.textContent = `✓ ${_score}  ·  ${_total - _score > 0 ? '✗ '+(_total-_score)+'  ·  ' : ''}${_total} answered`;
  }

  /* ── update countdown bar ── */
  function _updateTimerBar(){
    const pct = (_secsLeft / RACE_SECONDS) * 100;
    const bar = document.getElementById('race-timer-bar');
    const disp = document.getElementById('race-timer-display');
    if(bar){
      bar.style.width = pct + '%';
      bar.style.background = _secsLeft <= 30 ? 'var(--red)' : _secsLeft <= 60 ? 'var(--gold)' : 'var(--mint)';
    }
    if(disp){
      const m = Math.floor(_secsLeft/60);
      const s = String(_secsLeft%60).padStart(2,'0');
      disp.textContent = m + ':' + s;
      disp.style.color = _secsLeft <= 30 ? 'var(--red)' : 'var(--text2)';
    }
  }

  /* ── race over ── */
  function _finish(){
    _running = false;
    clearTimeout(_timer);
    vibrate('win');

    const best = S.raceBest || 0;
    const newBest = _score > best;
    if(newBest){ S.raceBest = _score; saveS(); }

    const acc = _total > 0 ? Math.round(_score/_total*100) : 0;
    document.getElementById('race-timer-bar-wrap').style.display = 'none';
    document.getElementById('race-header-row').style.display = 'none';

    document.getElementById('race-body').innerHTML = `
      <div class="content-card anim-pop" style="text-align:center;padding:28px 20px">
        <div style="font-size:2.6rem;margin-bottom:10px">${newBest ? '🏆' : '🏁'}</div>
        <div style="font-family:var(--font-head);font-size:1.4rem;font-weight:800;margin-bottom:4px">
          ${newBest ? 'New Personal Best!' : 'Race Complete!'}
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:20px 0">
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 8px">
            <div style="font-family:var(--font-mono);font-size:1.8rem;font-weight:700;color:var(--mint)">${_score}</div>
            <div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:4px">Correct</div>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 8px">
            <div style="font-family:var(--font-mono);font-size:1.8rem;font-weight:700;color:var(--blue)">${_total}</div>
            <div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:4px">Attempted</div>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px 8px">
            <div style="font-family:var(--font-mono);font-size:1.8rem;font-weight:700;color:var(--gold)">${acc}%</div>
            <div style="font-size:.65rem;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-top:4px">Accuracy</div>
          </div>
        </div>

        <div style="font-family:var(--font-mono);font-size:.8rem;color:var(--text3);margin-bottom:20px">
          Best ever: <span style="color:var(--gold)">${S.raceBest || 0}</span> correct in 3 min
        </div>

        <button class="btn btn-primary btn-block" onclick="Race.start()" style="margin-bottom:10px">
          Race Again →
        </button>
        <button class="btn btn-ghost btn-block" onclick="Race.showLobby()">Back</button>
      </div>`;
  }

  function stop(){
    _running = false;
    clearTimeout(_timer);
  }

  return { start, showLobby, stop };
})();
