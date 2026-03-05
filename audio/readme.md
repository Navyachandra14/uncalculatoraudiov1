# Audio Files — 4-File-Per-Chapter System

## Naming Convention (76 files total for all 19 chapters)

  ch01_intro.mp3       ← hook narration when chapter opens
  ch01_concepts.mp3    ← all concepts narrated as one flowing piece
  ch01_steps.mp3       ← all method steps narrated as one piece
  ch01_examples.mp3    ← all worked examples narrated as one piece

Repeat for ch02 → ch19.

## ElevenLabs Recommended Settings
  Model:      Eleven Multilingual v2
  Stability:  0.45  (lower = more natural expression, less robotic)
  Similarity: 0.80
  Style:      0.20
  Speed:      0.90  (slightly slower, easier to follow maths explanations)
  Format:     MP3, 128kbps

## Activating a chapter's audio
Open js/voice.js and add a line to the READY object:

  const READY = {
    ch01: ['intro', 'concepts', 'steps', 'examples'],   ← done
    ch02: ['intro', 'concepts', 'steps', 'examples'],   ← add when ready
    ...
  };

## How playback works
  - intro    → plays once when user opens the chapter
  - concepts → plays when user reaches the first concept card,
               continues playing as they tap through all cards
  - steps    → plays when user reaches the first step card
  - examples → plays when user reaches the first example card
  - diagram  → silent (visual card, no audio needed)

## Scripts
All narration scripts are in: uncalculator_voiceover_scripts.docx
Each chapter has an INTRO, CONCEPTS, METHOD STEPS, and WORKED EXAMPLES
section — each section maps directly to one audio file.
