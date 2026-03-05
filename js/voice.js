/* ══ VOICE MODULE ══════════════════════════════════════════════════════
   4-file-per-chapter audio system.

   FILE NAMING — drop these into the audio/ folder as you generate them:
   ─────────────────────────────────────────────────────────────────────
   audio/ch01_intro.mp3       ← hook that plays when chapter opens
   audio/ch01_concepts.mp3    ← all concepts narrated as one flowing piece
   audio/ch01_steps.mp3       ← all method steps narrated as one piece
   audio/ch01_examples.mp3    ← all worked examples narrated as one piece

   Repeat for ch02 → ch19. That's 76 files total.

   HOW PLAYBACK WORKS:
   ─────────────────────────────────────────────────────────────────────
   • intro     → plays once when the chapter opens
   • concepts  → plays when the user reaches the first concept card
   • steps     → plays when the user reaches the first method/step card
   • examples  → plays when the user reaches the first example card
   • diagram   → no dedicated audio (diagram is visual — keep it silent)

   The audio runs alongside the cards. The user taps through at their
   own pace while the narration plays. It doesn't stop between cards.
   This is intentional — it feels like a teacher talking while you read.

   FALLBACK:
   ─────────────────────────────────────────────────────────────────────
   If a file doesn't exist yet for a chapter, the app silently skips.
   No errors. No robotic TTS. Just silence until you add the file.
   This lets you launch with ch01 complete and add chapters over time.

   ELEVENLABS RECOMMENDED SETTINGS:
   ─────────────────────────────────────────────────────────────────────
   Model:      Eleven Multilingual v2
   Stability:  0.45  (lower = more natural expression)
   Similarity: 0.80
   Style:      0.20  (subtle warmth without overdoing it)
   Speed:      0.90  (slightly slower than default — easier to follow)
   Format:     MP3, 128kbps
══════════════════════════════════════════════════════════════════════ */

const Voice = (function(){

  /* ── STATE ─────────────────────────────────────────────────────── */
  let enabled  = false;
  let _current = null;   // currently playing Audio object
  let _lastKey = null;   // prevents replaying the same file on re-render

  /* ══ AUDIO FILE REGISTRY ════════════════════════════════════════
     Add a line here for each chapter as you generate the audio.
     Format:  chXX: ['intro','concepts','steps','examples']
     Leave out any type you haven't recorded yet — the app skips it.
  ════════════════════════════════════════════════════════════════ */
  const READY = {
    ch01: ['intro', 'concepts', 'steps', 'examples'],
    ch02: ['intro', 'concepts', 'steps', 'examples'],
    ch03: ['intro', 'concepts', 'steps', 'examples'],
    ch04: ['intro', 'concepts', 'steps', 'examples'],
    ch05: ['intro', 'concepts', 'steps', 'examples'],
    ch06: ['intro', 'concepts', 'steps', 'examples'],
    ch07: ['intro', 'concepts', 'steps', 'examples'],
    ch08: ['intro', 'concepts', 'steps', 'examples'],
    ch09: ['intro', 'concepts', 'steps', 'examples'],
    ch10: ['intro', 'concepts', 'steps', 'examples'],
    ch11: ['intro', 'concepts', 'steps', 'examples'],
    ch12: ['intro', 'concepts', 'steps', 'examples'],
    ch13: ['intro', 'concepts', 'steps', 'examples'],
    ch14: ['intro', 'concepts', 'steps', 'examples'],
    ch15: ['intro', 'concepts', 'steps', 'examples'],
    ch16: ['intro', 'concepts', 'steps', 'examples'],
    ch17: ['intro', 'concepts', 'steps', 'examples'],
    ch18: ['intro', 'concepts', 'steps', 'examples'],
    ch19: ['intro', 'concepts', 'steps', 'examples'],
  };

  /* ── PUBLIC: toggle voice on/off ────────────────────────────── */
  function toggle(){
    enabled = !enabled;
    if (!enabled) stop();
    _updateBtn();
    Toast.show(enabled ? '🎙 Voice On' : '🔇 Voice Off');
  }

  /* ── PUBLIC: speak(chId, type) ──────────────────────────────────
     chId  e.g. 'ch01'
     type  'intro' | 'concepts' | 'steps' | 'examples'

     Called by chapter.js at the right moment.
     The 'diagram' type is intentionally silent.
  ─────────────────────────────────────────────────────────────── */
  function speak(chId, type){
    if (!enabled) return;
    if (type === 'diagram') return;   // visual card — no audio

    const chReady = READY[chId] || [];
    if (!chReady.includes(type)) return;  // file not recorded yet

    const key = `${chId}_${type}`;
    if (key === _lastKey && _current && !_current.paused) return; // already playing

    stop();
    _lastKey = key;
    _playMp3(`audio/${key}.mp3`);
  }

  /* ── PUBLIC: stop ───────────────────────────────────────────── */
  function stop(){
    if (_current){
      _current.pause();
      _current.currentTime = 0;
      _current = null;
    }
    _lastKey = null;
    _setSpeaking(false);
  }

  /* ── PRIVATE: play an MP3 ───────────────────────────────────── */
  function _playMp3(src){
    const audio = new Audio(src);
    audio.volume = 1.0;
    _current = audio;
    _setSpeaking(true);
    audio.onended = () => { _current = null; _setSpeaking(false); };
    audio.onerror = () => { _current = null; _setSpeaking(false); };
    audio.play().catch(() => { _current = null; _setSpeaking(false); });
  }

  /* ── PRIVATE: update voice button UI ───────────────────────── */
  function _setSpeaking(isSpeaking){
    const btn = document.getElementById('voice-btn');
    if (!btn) return;
    const isOn = enabled && isSpeaking;
    btn.classList.toggle('speaking', isOn);
    const dot = btn.querySelector('.voice-dot');
    if (dot) dot.style.display = isOn ? 'inline-block' : 'none';
  }

  function _updateBtn(){
    const btn = document.getElementById('voice-btn');
    if (!btn) return;
    btn.style.borderColor = enabled ? 'var(--blue)' : '';
    btn.style.color       = enabled ? 'var(--blue)' : '';
    _setSpeaking(false);
  }

  function isEnabled(){ return enabled; }

  return { toggle, speak, stop, isEnabled };

})();
