/* ══ CHAPTER MODULE ════════════════════════════════════════════
   Concepts → Methods → Examples → Quiz (10 questions).
   Practice mode uses all 20 questions separately.
═══════════════════════════════════════════════════════════ */
const Chapter = (function(){
  let state = { id:null, data:null, step:0, qIdx:0, qCorrect:0, selection:null, advTimer:null };

  function open(id){
    const d=DATA[id];
    if(!d) return;
    state={id, data:d, step:0, qIdx:0, qCorrect:0, selection:null, advTimer:null};
    const meta=CHAPTERS.find(c=>c.id===id);
    document.getElementById('detail-title').textContent = meta.title;
    document.getElementById('detail-goal').textContent  = d.goal;
    document.getElementById('screen-list').classList.add('hidden');
    document.getElementById('screen-detail').classList.remove('hidden');
    document.getElementById('tab-learn').scrollTop=0;
    Voice.speak(id, 'intro');
    renderStep();
  }

  function backToList(){
    clearTimeout(state.advTimer);
    timerClear('quiz-timer-wrap');
    Hint.close();
    Voice.stop();
    ChapterList.backFromDetail();
  }

  function renderPills(){
    const labels=['Concepts','Methods','Examples','Quiz'];
    document.getElementById('step-pills').innerHTML=labels.map((l,i)=>{
      let cls='';
      if(i < state.step) cls='done';
      else if(i===state.step) cls='active';
      return `<span class="pill ${cls}">${l}</span>`;
    }).join('');
  }

  function renderStep(){
    renderPills();
    const d=state.data, s=state.step;
    const out=document.getElementById('step-content');
    if(s===0) renderConcepts(d, out);
    else if(s===1) renderMethods(d, out);
    else if(s===2) renderExamples(d, out);
    else renderQuiz(out);
  }

  function nextBtn(label, step){
    return `<div class="card-footer">
      <span class="step-label">Step ${step} of 4</span>
      <button class="btn btn-primary" onclick="Chapter._next()">${label} →</button>
    </div>`;
  }

  function renderConcepts(d, out){
    const items = d.concepts.map((c, i) => ({
      label:        'CONCEPT ' + (i+1),
      title:        c.name,
      text:         c.text,
      audioSection: i === 0 ? 'concepts' : null,
    }));
    Teach.start(state.id, items, out, 'Methods', ()=>Chapter._next());
  }

  function renderMethods(d, out){
    const items = [];

    // ── Card 1: visual diagram (optional) ──────────────────────
    const diagFn = DIAGRAMS[state.id];
    if (diagFn) {
      items.push({ label:'VISUAL', title:'See It', svg: diagFn(), isDiagram:true });
    }

    // ── One card per method, all steps of that method together ──
    const validMethods = d.methods.filter(m => m.steps.some(st => st.trim()));
    validMethods.forEach((m, mi) => {
      const stepsHtml = m.steps.filter(st => st.trim()).map((st, i) =>
        `<div class="method-step-row">
           <span class="teach-step-num">${i+1}</span>
           <span class="method-step-text">${st}</span>
         </div>`
      ).join('');

      items.push({
        label:        'METHOD ' + (validMethods.length > 1 ? (mi+1) + ' of ' + validMethods.length : ''),
        title:        m.name,
        text:         stepsHtml,
        audioSection: mi === 0 ? 'steps' : null,  // audio plays once on first method card
      });
    });

    Teach.start(state.id, items, out, 'Examples', ()=>Chapter._next());
  }

  function renderExamples(d, out){
    // ONE card per example — heading + ALL numbered steps together
    const items = d.examples.map((ex, ei) => {
      const stepsHtml = ex.steps.map((st, si) =>
        `<div class="method-step-row">
           <span class="teach-step-num">${si+1}</span>
           <span class="method-step-text">${st}</span>
         </div>`
      ).join('');

      return {
        label:        'EXAMPLE ' + (ei+1) + ' of ' + d.examples.length,
        title:        ex.hd,
        text:         stepsHtml,
        audioSection: ei === 0 ? 'examples' : null,
      };
    });
    Teach.start(state.id, items, out, 'Quiz', ()=>Chapter._next());
  }

  function renderQuiz(out){
    const d=state.data;
    const qs=(d.qs||[]).slice(0,10);   // 10 questions per chapter quiz
    if(!qs.length){ out.innerHTML='<p>No questions available.</p>'; return; }

    const q=qs[state.qIdx];
    const opts=makeOptions(q.a);
    const total=qs.length;
    const chId=state.id;

    out.innerHTML=`<div class="content-card anim-up">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <div class="card-label" style="margin-bottom:0">Quiz</div>
        <button class="hint-btn" onclick="Hint.open('${chId}')" aria-label="Hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Hint
        </button>
      </div>
      <div class="quiz-header">
        <span class="quiz-meta">Q ${state.qIdx+1} / ${total}</span>
        <span class="quiz-meta">${state.qCorrect} correct</span>
      </div>
      <div class="pbar-wrap" style="margin-bottom:8px"><div class="pbar-fill" style="width:${state.qIdx/total*100}%"></div></div>
      <div class="timer-wrap" id="quiz-timer-wrap">
        <div class="timer-top"><span class="timer-display" id="quiz-timer-display">60s</span></div>
        <div class="timer-bar-wrap"><div class="timer-bar-fill" id="quiz-timer-bar" style="width:100%"></div></div>
      </div>
      <div class="quiz-q">${q.q}</div>
      <div id="quiz-opts">
        ${opts.map((o,i)=>`<button class="quiz-option anim-up" style="animation-delay:${i*0.05}s"
          data-val="${encodeURIComponent(o)}">${o}</button>`).join('')}
      </div>
      <div class="submit-btn-wrap">
        <button id="quiz-submit" class="btn btn-primary btn-block" disabled onclick="Chapter._submit()">Submit Answer</button>
      </div>
    </div>`;

    document.querySelectorAll('#quiz-opts .quiz-option').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('#quiz-opts .quiz-option').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        state.selection=decodeURIComponent(btn.dataset.val);
        document.getElementById('quiz-submit').disabled=false;
      });
    });

    timerStart('quiz-timer-wrap','quiz-timer-display','quiz-timer-bar', 60, ()=>{
      if(!state.selection) state.selection='__timeout__';
      Chapter._submit();
    });
  }

  function _submit(){
    timerClear('quiz-timer-wrap');
    const qs=(state.data.qs||[]).slice(0,10);
    const q=qs[state.qIdx];
    const timedOut=(state.selection==='__timeout__');
    const correct=(!timedOut && state.selection===q.a);
    if(correct) state.qCorrect++;
    S.attempts++; if(correct) S.correct++;
    saveS();

    document.querySelectorAll('#quiz-opts .quiz-option').forEach(btn=>{
      btn.disabled=true;
      const v=decodeURIComponent(btn.dataset.val);
      if(v===q.a) btn.classList.add('correct');
      else if(btn.classList.contains('selected')&&!correct) btn.classList.add('wrong','anim-shake');
    });
    document.getElementById('quiz-submit').disabled=true;
    if(timedOut){const el=document.querySelector('.quiz-q'); if(el) el.style.borderColor='var(--red)';}
    vibrate(correct?'ok':'no');

    state.advTimer=setTimeout(()=>{
      state.selection=null; state.qIdx++;
      if(state.qIdx>=qs.length) _finish();
      else renderQuiz(document.getElementById('step-content'));
    }, timedOut?700:1400);
  }

  function _finish(){
    const qs=(state.data.qs||[]).slice(0,10);
    const total=qs.length;
    const pct=Math.round(state.qCorrect/total*100);
    const threshold=(state.data.pass||0.8)*100;
    const passed=pct>=threshold;

    if(passed && !S.done.includes(state.id)){
      S.done.push(state.id);
      saveS();
      vibrate('win');
    }

    const circ=2*Math.PI*46;
    const offset=circ-((pct/100)*circ);
    const col=passed?'var(--green)':'var(--red)';

    document.getElementById('step-content').innerHTML=`
      <div class="content-card">
        <div class="score-wrap anim-pop">
          <div class="score-ring-container">
            <svg width="120" height="120" viewBox="0 0 100 100">
              <circle class="score-ring-bg" cx="50" cy="50" r="46" fill="none" stroke="var(--border)" stroke-width="7"/>
              <circle cx="50" cy="50" r="46" fill="none" stroke="${col}" stroke-width="7"
                stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
                style="transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset 0.9s ease"/>
            </svg>
            <div class="score-number" style="color:${col}">${pct}%</div>
          </div>
          <div class="score-title">${passed?'🎉 Chapter Passed!':'Keep Going!'}</div>
          <div class="score-sub">${state.qCorrect} of ${total} correct — need ${threshold}% to pass</div>
          <button class="btn btn-block" style="margin-bottom:10px" onclick="Chapter._retry()">Try Again</button>
          ${passed?`<button class="btn btn-primary btn-block" onclick="Chapter.backToList()">Back to ${ChapterList._currentCat ? ChapterList._currentCat.name : 'Chapters'}</button>`:''}
        </div>
      </div>`;
  }

  function _retry(){
    state.qIdx=0; state.qCorrect=0; state.selection=null;
    clearTimeout(state.advTimer);
    renderQuiz(document.getElementById('step-content'));
    renderPills();
    document.getElementById('tab-learn').scrollTop=0;
  }

  function _next(){
    state.step++;
    renderStep();
    document.getElementById('tab-learn').scrollTop=0;
  }

  return { open, backToList, _next, _submit, _finish, _retry };
})();
