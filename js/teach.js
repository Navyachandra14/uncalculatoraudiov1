/* ══ TEACH MODULE ══════════════════════════════════════════════════════
   Interactive one-card-at-a-time lesson presenter.
   Receives a list of items from chapter.js and renders them one by one.
   Calls Voice.speak() once per section (not per card).
══════════════════════════════════════════════════════════════════════ */

const Teach = (function(){

  let _items = [], _pos = 0, _out = null, _nextLabel = '', _onDone = null;
  let _chId  = null;

  function start(chId, items, out, nextLabel, onDone){
    _chId      = chId;
    _items     = items;
    _pos       = 0;
    _out       = out;
    _nextLabel = nextLabel;
    _onDone    = onDone;
    render();
  }

  function render(){
    if (!_out) return;
    const item   = _items[_pos];
    const isLast = _pos === _items.length - 1;
    const total  = _items.length;

    /* ── card HTML ── */
    let itemHtml = '';
    if (item.isDiagram){
      itemHtml = `
        <div class="diagram-wrap anim-slide-in">
          <div class="diagram-label">📊  VISUAL</div>
          <div class="diagram-svg-wrap">${item.svg}</div>
        </div>`;
    } else {
      const numDot    = item.stepNum ? `<span class="teach-step-num">${item.stepNum}</span>` : '';
      const titleHtml = item.title
        ? `<div class="teach-text" style="font-weight:700;font-size:.95rem;margin-bottom:4px;color:var(--text)">${numDot}${item.title}</div>` : '';
      const textHtml  = item.text
        ? `<div class="teach-text" style="margin-top:${item.stepNum?'6px':'2px'}">${item.text}</div>` : '';
      itemHtml = `
        <div class="teach-item active anim-slide-in">
          <div class="teach-label">${item.label}</div>
          ${titleHtml}${textHtml}
        </div>`;
    }

    /* ── progress dots ── */
    const dots = _items.map((_,i) =>
      `<span style="display:inline-block;width:${i===_pos?14:6}px;height:6px;border-radius:3px;
        background:${i===_pos?'var(--blue)':i<_pos?'var(--border2)':'var(--border)'};
        transition:all .25s;margin:0 2px"></span>`
    ).join('');

    _out.innerHTML = `
      <div class="content-card anim-up" style="padding-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <div class="card-label" style="margin-bottom:0">${item.isDiagram ? 'Visual' : 'Lesson'}</div>
          <span class="teach-counter">${_pos+1} / ${total}</span>
        </div>
        ${itemHtml}
        <div class="teach-nav">
          <div style="display:flex;align-items:center;gap:4px">${dots}</div>
          <div style="display:flex;gap:8px;align-items:center">
            ${_pos > 0
              ? `<button class="btn btn-ghost btn-sm" onclick="Teach.prev()" style="padding:7px 12px">←</button>`
              : ''}
            ${isLast
              ? `<button class="btn btn-primary" onclick="Teach.done()">${_nextLabel} →</button>`
              : `<button class="btn btn-primary" onclick="Teach.next()" style="padding:8px 18px">
                  ${_pos === 0 && total > 1 ? 'Begin →' : 'Next →'}
                </button>`
            }
          </div>
        </div>
      </div>`;

    /* ── trigger audio — only on the FIRST card of each section ──
       item.audioSection is set by chapter.js only on the first card.
       This means the section audio plays once, then continues as the
       user taps through the remaining cards in that section.        */
    if (item.audioSection){
      Voice.speak(_chId, item.audioSection);
    }
  }

  function next(){ if (_pos < _items.length - 1){ _pos++; render(); } }
  function prev(){ if (_pos > 0){ _pos--; render(); } }
  function done(){ Voice.stop(); if (_onDone) _onDone(); }

  return { start, next, prev, done };

})();
