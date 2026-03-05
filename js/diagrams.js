/* ══ DIAGRAMS ══════════════════════════════════════════════════
   One SVG infographic per chapter, drawn in pure code.
   Each function returns an HTML string with <svg> + caption.
   Called by the Teach module when rendering the Methods step.
═══════════════════════════════════════════════════════════ */
/* ─── VISUAL DIAGRAMS — one per chapter, SVG drawn in code ────────────
   Colors: mint=#00e5a0 blue=#4da6ff gold=#ffd166 red=#ff6b6b
   text=#e8f4fd text2=#7ba3cc bg=#0e1e35 surface=#0e1e35      */
const DIAGRAMS = {

ch01: () => `<svg viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="18" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">THE TWO BUCKETS</text>
  <rect x="16" y="28" width="128" height="90" rx="8" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="80" y="45" text-anchor="middle" fill="#ffd166" font-size="10" font-weight="700" font-family="sans-serif">DOLLARS</text>
  <text x="80" y="72" text-anchor="middle" fill="#e8f4fd" font-size="20" font-weight="700" font-family="monospace">$12</text>
  <text x="80" y="93" text-anchor="middle" fill="#7ba3cc" font-size="17" font-family="monospace">+ $4</text>
  <line x1="36" y1="101" x2="124" y2="101" stroke="#264d80" stroke-width="1"/>
  <text x="80" y="115" text-anchor="middle" fill="#00e5a0" font-size="20" font-weight="800" font-family="monospace">$16</text>
  <rect x="176" y="28" width="128" height="90" rx="8" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="240" y="45" text-anchor="middle" fill="#ffd166" font-size="10" font-weight="700" font-family="sans-serif">CENTS</text>
  <text x="240" y="72" text-anchor="middle" fill="#e8f4fd" font-size="20" font-weight="700" font-family="monospace">50¢</text>
  <text x="240" y="93" text-anchor="middle" fill="#7ba3cc" font-size="17" font-family="monospace">+75¢</text>
  <line x1="196" y1="101" x2="284" y2="101" stroke="#264d80" stroke-width="1"/>
  <text x="240" y="115" text-anchor="middle" fill="#00e5a0" font-size="20" font-weight="800" font-family="monospace">$1.25</text>
  <path d="M80,121 Q80,146 160,146 Q240,146 240,121" fill="none" stroke="#4da6ff" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="160" y="157" text-anchor="middle" fill="#4da6ff" font-size="12" font-weight="700" font-family="monospace">$16 + $1.25 = $17.25 ✓</text>
</svg>
<div class="diagram-caption">Split every amount into Dollars + Cents. Add each bucket separately. Merge at the end.</div>`,

ch02: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="16" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">ALL FROM 9, LAST FROM 10</text>
  <text x="160" y="46" text-anchor="middle" fill="#e8f4fd" font-size="26" font-weight="700" font-family="monospace" letter-spacing="12">3 5 7 5</text>
  <line x1="70" y1="55" x2="70" y2="75" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="117" y1="55" x2="117" y2="75" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="164" y1="55" x2="164" y2="75" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="211" y1="55" x2="211" y2="75" stroke="#ff6b6b" stroke-width="2"/>
  <text x="70" y="91" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="monospace">9−3</text>
  <text x="117" y="91" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="monospace">9−5</text>
  <text x="164" y="91" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="monospace">9−7</text>
  <text x="211" y="91" text-anchor="middle" fill="#ff6b6b" font-size="11" font-family="monospace">10−5</text>
  <text x="160" y="120" text-anchor="middle" fill="#00e5a0" font-size="26" font-weight="700" font-family="monospace" letter-spacing="12">6 4 2 5</text>
  <rect x="40" y="133" width="240" height="18" rx="4" fill="#0d2240"/>
  <text x="160" y="146" text-anchor="middle" fill="#ffd166" font-size="11" font-weight="700" font-family="sans-serif">Change from $100 = $64.25 ✓</text>
</svg>
<div class="diagram-caption">Each digit is subtracted from 9. Only the very last digit is subtracted from 10. The result is your exact change.</div>`,

ch03: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="16" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">THE DOUBLING CHAIN</text>
  <circle cx="36" cy="68" r="20" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="36" y="74" text-anchor="middle" fill="#7ba3cc" font-size="15" font-weight="700" font-family="monospace">1</text>
  <line x1="56" y1="68" x2="78" y2="68" stroke="#4da6ff" stroke-width="1.5"/>
  <text x="67" y="61" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">×2</text>
  <circle cx="98" cy="68" r="20" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="98" y="74" text-anchor="middle" fill="#e8f4fd" font-size="15" font-weight="700" font-family="monospace">2</text>
  <line x1="118" y1="68" x2="140" y2="68" stroke="#4da6ff" stroke-width="1.5"/>
  <text x="129" y="61" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">×2</text>
  <circle cx="160" cy="68" r="20" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="160" y="74" text-anchor="middle" fill="#e8f4fd" font-size="15" font-weight="700" font-family="monospace">4</text>
  <line x1="180" y1="68" x2="202" y2="68" stroke="#4da6ff" stroke-width="1.5"/>
  <text x="191" y="61" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">×2</text>
  <circle cx="222" cy="68" r="20" fill="#0d2240" stroke="#00e5a0" stroke-width="2"/>
  <text x="222" y="74" text-anchor="middle" fill="#00e5a0" font-size="15" font-weight="700" font-family="monospace">8</text>
  <text x="268" y="62" fill="#7ba3cc" font-size="10" font-family="sans-serif">×4</text>
  <text x="268" y="76" fill="#7ba3cc" font-size="10" font-family="sans-serif">×8</text>
  <rect x="16" y="106" width="290" height="40" rx="7" fill="#0d2240" stroke="#ffd166" stroke-width="1"/>
  <text x="55" y="122" fill="#ffd166" font-size="10" font-weight="700" font-family="sans-serif">×5 trick:</text>
  <text x="160" y="122" text-anchor="middle" fill="#e8f4fd" font-size="10" font-family="sans-serif">multiply by 10, then halve</text>
  <text x="160" y="138" text-anchor="middle" fill="#00e5a0" font-size="11" font-weight="600" font-family="monospace">48 × 5  →  480 ÷ 2  =  240</text>
</svg>
<div class="diagram-caption">×4 = double-double. ×8 = double-double-double. ×5 = ×10 then halve. Your brain finds these much easier than times tables.</div>`,

ch04: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="16" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">DIGITAL ROOT — COLLAPSE TO ONE DIGIT</text>
  <text x="160" y="50" text-anchor="middle" fill="#e8f4fd" font-size="28" font-weight="700" font-family="monospace" letter-spacing="6">1  4  4</text>
  <text x="160" y="68" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">↓ sum all digits</text>
  <rect x="108" y="73" width="104" height="26" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="160" y="91" text-anchor="middle" fill="#e8f4fd" font-size="14" font-weight="700" font-family="monospace">1+4+4 = 9</text>
  <text x="160" y="108" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">↓ already single digit</text>
  <circle cx="160" cy="134" r="17" fill="#0d2240" stroke="#00e5a0" stroke-width="2"/>
  <text x="160" y="140" text-anchor="middle" fill="#00e5a0" font-size="18" font-weight="800" font-family="monospace">9</text>
  <text x="196" y="138" fill="#ffd166" font-size="10" font-family="sans-serif">Digital Root ✓</text>
</svg>
<div class="diagram-caption">Add all digits together. If the result is still more than one digit, add again. Use this to instantly verify any multiplication by checking both sides give the same root.</div>`,

ch05: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="16" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">MAGIC 11 — SPLIT · ADD · SANDWICH</text>
  <text x="160" y="20" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif">45 × 11</text>
  <text x="72" y="58" text-anchor="middle" fill="#e8f4fd" font-size="30" font-weight="700" font-family="monospace">4</text>
  <text x="160" y="58" text-anchor="middle" fill="#264d80" font-size="28" font-family="monospace">_</text>
  <text x="248" y="58" text-anchor="middle" fill="#e8f4fd" font-size="30" font-weight="700" font-family="monospace">5</text>
  <path d="M72,64 C72,86 138,86 160,80" fill="none" stroke="#4da6ff" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M248,64 C248,86 182,86 160,80" fill="none" stroke="#4da6ff" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="160" y="78" text-anchor="middle" fill="#4da6ff" font-size="9" font-family="sans-serif">4+5</text>
  <text x="72" y="122" text-anchor="middle" fill="#e8f4fd" font-size="30" font-weight="700" font-family="monospace">4</text>
  <circle cx="160" cy="113" r="16" fill="#0d2240" stroke="#ffd166" stroke-width="1.5"/>
  <text x="160" y="119" text-anchor="middle" fill="#ffd166" font-size="17" font-weight="700" font-family="monospace">9</text>
  <text x="248" y="122" text-anchor="middle" fill="#e8f4fd" font-size="30" font-weight="700" font-family="monospace">5</text>
  <text x="160" y="148" text-anchor="middle" fill="#00e5a0" font-size="18" font-weight="800" font-family="monospace">= 495 ✓</text>
</svg>
<div class="diagram-caption">Split the two-digit number. Sum the digits and place the sum in the middle. When the sum is ≥10, carry the 1 to the left digit.</div>`,

ch06: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="16" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">×12 AND ×15 DECOMPOSED</text>
  <rect x="16" y="26" width="290" height="56" rx="8" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="36" y="50" fill="#ffd166" font-size="13" font-weight="700" font-family="monospace">×12</text>
  <text x="80" y="50" fill="#7ba3cc" font-size="11" font-family="sans-serif">=</text>
  <text x="100" y="50" fill="#e8f4fd" font-size="13" font-family="monospace">×10</text>
  <text x="148" y="50" fill="#7ba3cc" font-size="11" font-family="sans-serif">+</text>
  <text x="163" y="50" fill="#e8f4fd" font-size="13" font-family="monospace">×2</text>
  <text x="100" y="72" fill="#00e5a0" font-size="12" font-family="monospace">8×12: 80 + 16 = 96 ✓</text>
  <rect x="16" y="92" width="290" height="56" rx="8" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="36" y="116" fill="#ffd166" font-size="13" font-weight="700" font-family="monospace">×15</text>
  <text x="80" y="116" fill="#7ba3cc" font-size="11" font-family="sans-serif">=</text>
  <text x="100" y="116" fill="#e8f4fd" font-size="13" font-family="monospace">×10</text>
  <text x="148" y="116" fill="#7ba3cc" font-size="11" font-family="sans-serif">+</text>
  <text x="163" y="116" fill="#e8f4fd" font-size="13" font-family="monospace">½×10</text>
  <text x="100" y="138" fill="#00e5a0" font-size="12" font-family="monospace">6×15: 60 + 30 = 90 ✓</text>
</svg>
<div class="diagram-caption">Never memorise ×12 or ×15 directly. Break them down: ×12 = ×10 + ×2. ×15 = ×10 + half of ×10.</div>`,

ch07: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">BASE 100 (BELOW) — 97 × 94</text>
  <line x1="20" y1="72" x2="300" y2="72" stroke="#264d80" stroke-width="2"/>
  <circle cx="280" cy="72" r="7" fill="#4da6ff"/>
  <text x="280" y="58" text-anchor="middle" fill="#4da6ff" font-size="12" font-weight="700" font-family="monospace">100</text>
  <circle cx="170" cy="72" r="6" fill="#ffd166"/>
  <text x="170" y="58" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700" font-family="monospace">97</text>
  <text x="226" y="86" text-anchor="middle" fill="#ffd166" font-size="9" font-family="sans-serif">deficit −3</text>
  <circle cx="80" cy="72" r="6" fill="#ff6b6b"/>
  <text x="80" y="58" text-anchor="middle" fill="#ff6b6b" font-size="12" font-weight="700" font-family="monospace">94</text>
  <text x="122" y="86" text-anchor="middle" fill="#ff6b6b" font-size="9" font-family="sans-serif">deficit −6</text>
  <rect x="16" y="100" width="290" height="50" rx="7" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="160" y="118" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">Cross-subtract:  97 − 6 = <tspan fill="#00e5a0" font-weight="700">91</tspan></text>
  <text x="160" y="134" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">Multiply deficits:  3 × 6 = <tspan fill="#ffd166" font-weight="700">18</tspan></text>
  <text x="160" y="148" text-anchor="middle" fill="#00e5a0" font-size="12" font-weight="700" font-family="monospace">9100 − 18 = 9082 ✓</text>
</svg>
<div class="diagram-caption">Find how far each number is below 100. Cross-subtract to get the first two digits. Multiply the two deficits for the last two digits.</div>`,

ch08: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">BASE 100 (ABOVE) — 103 × 106</text>
  <line x1="20" y1="72" x2="300" y2="72" stroke="#264d80" stroke-width="2"/>
  <circle cx="40" cy="72" r="7" fill="#4da6ff"/>
  <text x="40" y="58" text-anchor="middle" fill="#4da6ff" font-size="12" font-weight="700" font-family="monospace">100</text>
  <circle cx="140" cy="72" r="6" fill="#ffd166"/>
  <text x="140" y="58" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700" font-family="monospace">103</text>
  <text x="90" y="86" text-anchor="middle" fill="#ffd166" font-size="9" font-family="sans-serif">surplus +3</text>
  <circle cx="230" cy="72" r="6" fill="#00e5a0"/>
  <text x="230" y="58" text-anchor="middle" fill="#00e5a0" font-size="12" font-weight="700" font-family="monospace">106</text>
  <text x="184" y="86" text-anchor="middle" fill="#00e5a0" font-size="9" font-family="sans-serif">surplus +6</text>
  <rect x="16" y="100" width="290" height="50" rx="7" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="160" y="118" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">Cross-add:  103 + 6 = <tspan fill="#00e5a0" font-weight="700">109</tspan></text>
  <text x="160" y="134" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">Multiply surpluses:  3 × 6 = <tspan fill="#ffd166" font-weight="700">18</tspan></text>
  <text x="160" y="148" text-anchor="middle" fill="#00e5a0" font-size="12" font-weight="700" font-family="monospace">10900 + 18 = 10918 ✓</text>
</svg>
<div class="diagram-caption">Find how far each number is above 100. Cross-add for the first part. Multiply the two surpluses for the last two digits.</div>`,

ch09: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">LEFT-RIGHT SPLIT — 32 × 4</text>
  <text x="160" y="52" text-anchor="middle" fill="#e8f4fd" font-size="26" font-weight="700" font-family="monospace">32 × 4</text>
  <line x1="80" y1="68" x2="80" y2="86" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="240" y1="68" x2="240" y2="86" stroke="#ffd166" stroke-width="1.5"/>
  <rect x="20" y="90" width="120" height="32" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="80" y="111" text-anchor="middle" fill="#4da6ff" font-size="13" font-family="monospace">30 × 4 = 120</text>
  <rect x="180" y="90" width="120" height="32" rx="6" fill="#0d2240" stroke="#ffd166" stroke-width="1"/>
  <text x="240" y="111" text-anchor="middle" fill="#ffd166" font-size="13" font-family="monospace">2 × 4 = 8</text>
  <path d="M80,122 Q80,142 160,142 Q240,142 240,122" fill="none" stroke="#00e5a0" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="160" y="153" text-anchor="middle" fill="#00e5a0" font-size="14" font-weight="700" font-family="monospace">120 + 8 = 128 ✓</text>
</svg>
<div class="diagram-caption">Split the two-digit number at the tens digit. Multiply each part by the single digit. Add the two results.</div>`,

ch10: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">VERTICALLY &amp; CROSSWISE — 12 × 13</text>
  <text x="80" y="50" text-anchor="middle" fill="#e8f4fd" font-size="22" font-weight="700" font-family="monospace">1 2</text>
  <text x="240" y="50" text-anchor="middle" fill="#e8f4fd" font-size="22" font-weight="700" font-family="monospace">1 3</text>
  <line x1="64" y1="52" x2="224" y2="52" stroke="#264d80" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="60" y="80" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="sans-serif">Left ×</text>
  <text x="160" y="80" text-anchor="middle" fill="#ffd166" font-size="11" font-family="sans-serif">Cross ×</text>
  <text x="262" y="80" text-anchor="middle" fill="#ff6b6b" font-size="11" font-family="sans-serif">Right ×</text>
  <text x="60" y="98" text-anchor="middle" fill="#4da6ff" font-size="16" font-weight="700" font-family="monospace">1×1</text>
  <text x="160" y="98" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="700" font-family="monospace">1×3+2×1</text>
  <text x="262" y="98" text-anchor="middle" fill="#ff6b6b" font-size="16" font-weight="700" font-family="monospace">2×3</text>
  <text x="60" y="116" text-anchor="middle" fill="#4da6ff" font-size="13" font-family="monospace">= 1</text>
  <text x="160" y="116" text-anchor="middle" fill="#ffd166" font-size="13" font-family="monospace">= 5</text>
  <text x="262" y="116" text-anchor="middle" fill="#ff6b6b" font-size="13" font-family="monospace">= 6</text>
  <text x="160" y="145" text-anchor="middle" fill="#00e5a0" font-size="16" font-weight="800" font-family="monospace">1 | 5 | 6  =  156 ✓</text>
</svg>
<div class="diagram-caption">Three columns: Left digits ×, Right digits ×, then Cross-multiply both ways and add. Carry any tens into the next column.</div>`,

ch11: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">SHORT DIVISION — 96 ÷ 4</text>
  <text x="160" y="46" text-anchor="middle" fill="#e8f4fd" font-size="22" font-weight="700" font-family="monospace">96 ÷ 4</text>
  <line x1="80" y1="60" x2="80" y2="78" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="240" y1="60" x2="240" y2="78" stroke="#ffd166" stroke-width="1.5"/>
  <rect x="20" y="82" width="120" height="32" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="80" y="103" text-anchor="middle" fill="#4da6ff" font-size="13" font-family="monospace">80 ÷ 4 = 20</text>
  <rect x="180" y="82" width="120" height="32" rx="6" fill="#0d2240" stroke="#ffd166" stroke-width="1"/>
  <text x="240" y="103" text-anchor="middle" fill="#ffd166" font-size="13" font-family="monospace">16 ÷ 4 = 4</text>
  <path d="M80,114 Q80,134 160,134 Q240,134 240,114" fill="none" stroke="#00e5a0" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="160" y="148" text-anchor="middle" fill="#00e5a0" font-size="16" font-weight="700" font-family="monospace">20 + 4 = 24 ✓</text>
</svg>
<div class="diagram-caption">Chunk the dividend into two "friendly" numbers that are both divisible. Divide each chunk. Add the results.</div>`,

ch12: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">TEAM SPLIT — $85 ÷ 5</text>
  <rect x="110" y="24" width="100" height="30" rx="6" fill="#0d2240" stroke="#ffd166" stroke-width="1.5"/>
  <text x="160" y="44" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="700" font-family="monospace">$85</text>
  <line x1="160" y1="54" x2="160" y2="70" stroke="#4da6ff" stroke-width="1.5"/>
  <text x="196" y="67" fill="#4da6ff" font-size="10" font-family="sans-serif">÷ 5 trick</text>
  <rect x="85" y="74" width="150" height="30" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="160" y="94" text-anchor="middle" fill="#4da6ff" font-size="12" font-family="monospace">×2 then ÷10</text>
  <line x1="160" y1="104" x2="160" y2="118" stroke="#4da6ff" stroke-width="1.5"/>
  <text x="220" y="115" fill="#7ba3cc" font-size="10" font-family="sans-serif">85 × 2 = 170</text>
  <rect x="85" y="122" width="150" height="28" rx="6" fill="#0d2240" stroke="#00e5a0" stroke-width="1.5"/>
  <text x="160" y="141" text-anchor="middle" fill="#00e5a0" font-size="15" font-weight="700" font-family="monospace">170 ÷ 10 = $17</text>
</svg>
<div class="diagram-caption">To divide by 5: double the number, then divide by 10 (just shift the decimal). Works instantly every time.</div>`,

ch13: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">INSTANT SQUARES — 35²</text>
  <text x="160" y="48" text-anchor="middle" fill="#e8f4fd" font-size="26" font-weight="700" font-family="monospace">35²</text>
  <line x1="100" y1="58" x2="78" y2="76" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="220" y1="58" x2="242" y2="76" stroke="#ffd166" stroke-width="1.5"/>
  <rect x="16" y="80" width="110" height="32" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="71" y="101" text-anchor="middle" fill="#4da6ff" font-size="13" font-family="monospace">3 × (3+1)</text>
  <rect x="194" y="80" width="110" height="32" rx="6" fill="#0d2240" stroke="#ffd166" stroke-width="1"/>
  <text x="249" y="101" text-anchor="middle" fill="#ffd166" font-size="13" font-family="monospace">always 25</text>
  <line x1="71" y1="112" x2="71" y2="126" stroke="#4da6ff" stroke-width="1.5"/>
  <line x1="249" y1="112" x2="249" y2="126" stroke="#ffd166" stroke-width="1.5"/>
  <text x="71" y="140" text-anchor="middle" fill="#4da6ff" font-size="16" font-weight="700" font-family="monospace">12</text>
  <text x="160" y="140" text-anchor="middle" fill="#7ba3cc" font-size="14" font-family="monospace">|</text>
  <text x="249" y="140" text-anchor="middle" fill="#ffd166" font-size="16" font-weight="700" font-family="monospace">25</text>
  <text x="160" y="154" text-anchor="middle" fill="#00e5a0" font-size="13" font-weight="700" font-family="monospace">= 1225 ✓</text>
</svg>
<div class="diagram-caption">For any number ending in 5: multiply the leading digit(s) by itself plus 1. Then append 25. Done.</div>`,

ch14: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">THE PIVOT — 47² (NEAR 50)</text>
  <line x1="20" y1="70" x2="300" y2="70" stroke="#264d80" stroke-width="2"/>
  <circle cx="160" cy="70" r="7" fill="#4da6ff"/>
  <text x="160" y="56" text-anchor="middle" fill="#4da6ff" font-size="12" font-weight="700" font-family="monospace">50</text>
  <circle cx="88" cy="70" r="6" fill="#ffd166"/>
  <text x="88" y="56" text-anchor="middle" fill="#ffd166" font-size="12" font-weight="700" font-family="monospace">47</text>
  <path d="M88,70 L160,70" stroke="#ffd166" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="124" y="84" text-anchor="middle" fill="#ffd166" font-size="9" font-family="sans-serif">−3 from 50</text>
  <rect x="16" y="100" width="290" height="50" rx="7" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="160" y="118" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">50² = 2500 · diff = 3</text>
  <text x="160" y="134" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif"><tspan fill="#4da6ff">2500</tspan> − (3×100) + <tspan fill="#ffd166">3²</tspan> = 2500−300+9</text>
  <text x="160" y="148" text-anchor="middle" fill="#00e5a0" font-size="13" font-weight="700" font-family="monospace">= 2209 ✓</text>
</svg>
<div class="diagram-caption">For numbers near 50: use 50²=2500 as your anchor. Subtract (diff×100) then add diff². Works within ±15 of 50.</div>`,

ch15: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">DUPLEX DRIVE — 23²</text>
  <text x="160" y="46" text-anchor="middle" fill="#e8f4fd" font-size="24" font-weight="700" font-family="monospace">2 3</text>
  <rect x="16" y="56" width="88" height="70" rx="6" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="60" y="72" text-anchor="middle" fill="#4da6ff" font-size="9" font-weight="700" font-family="sans-serif">LEFT</text>
  <text x="60" y="90" text-anchor="middle" fill="#e8f4fd" font-size="13" font-family="monospace">2×2</text>
  <text x="60" y="110" text-anchor="middle" fill="#4da6ff" font-size="18" font-weight="700" font-family="monospace">4</text>
  <rect x="116" y="56" width="88" height="70" rx="6" fill="#0d2240" stroke="#ffd166" stroke-width="1"/>
  <text x="160" y="72" text-anchor="middle" fill="#ffd166" font-size="9" font-weight="700" font-family="sans-serif">MIDDLE</text>
  <text x="160" y="90" text-anchor="middle" fill="#e8f4fd" font-size="13" font-family="monospace">2×2×3</text>
  <text x="160" y="110" text-anchor="middle" fill="#ffd166" font-size="18" font-weight="700" font-family="monospace">12</text>
  <rect x="216" y="56" width="88" height="70" rx="6" fill="#0d2240" stroke="#ff6b6b" stroke-width="1"/>
  <text x="260" y="72" text-anchor="middle" fill="#ff6b6b" font-size="9" font-weight="700" font-family="sans-serif">RIGHT</text>
  <text x="260" y="90" text-anchor="middle" fill="#e8f4fd" font-size="13" font-family="monospace">3×3</text>
  <text x="260" y="110" text-anchor="middle" fill="#ff6b6b" font-size="18" font-weight="700" font-family="monospace">9</text>
  <text x="160" y="142" text-anchor="middle" fill="#00e5a0" font-size="14" font-weight="700" font-family="monospace">4 | 12 | 9 → carry → 529 ✓</text>
</svg>
<div class="diagram-caption">L = left digit squared. M = 2 × left × right. R = right digit squared. Write right-to-left, carry the tens.</div>`,

ch16: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">CUBE ROOT HACK — ∛54872</text>
  <rect x="16" y="24" width="290" height="60" rx="7" fill="#0d2240" stroke="#1e3a5f" stroke-width="1"/>
  <text x="30" y="42" fill="#7ba3cc" font-size="9" font-weight="600" font-family="sans-serif">Units digit lookup:</text>
  <text x="30" y="58" fill="#e8f4fd" font-size="10" font-family="monospace">1³→1  2³→8  3³→7  4³→4  5³→5</text>
  <text x="30" y="72" fill="#e8f4fd" font-size="10" font-family="monospace">6³→6  7³→3  8³→2  9³→9  0³→0</text>
  <rect x="16" y="94" width="290" height="56" rx="7" fill="#0d2240" stroke="#4da6ff" stroke-width="1"/>
  <text x="160" y="110" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif">54,<tspan fill="#ffd166">872</tspan> — units digit <tspan fill="#ffd166">2</tspan> → answer ends in <tspan fill="#ffd166" font-weight="700">8</tspan></text>
  <text x="160" y="126" text-anchor="middle" fill="#e8f4fd" font-size="11" font-family="sans-serif"><tspan fill="#4da6ff">54</tspan>,872 — <tspan fill="#4da6ff">3³=27 &lt; 54 &lt; 64=4³</tspan> → tens = <tspan fill="#4da6ff" font-weight="700">3</tspan></text>
  <text x="160" y="144" text-anchor="middle" fill="#00e5a0" font-size="14" font-weight="700" font-family="monospace">∛54872 = 38 ✓</text>
</svg>
<div class="diagram-caption">Step 1: Look at the last 3 digits — the units digit tells you the answer's units digit via the lookup table. Step 2: Drop the last 3 digits and find which perfect cube it sits between for the tens digit.</div>`,

ch17: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">BUTTERFLY METHOD — ¼ + ⅕</text>
  <text x="80" y="50" text-anchor="middle" fill="#e8f4fd" font-size="24" font-weight="700" font-family="monospace">1/4</text>
  <text x="160" y="50" text-anchor="middle" fill="#7ba3cc" font-size="20" font-family="sans-serif">+</text>
  <text x="240" y="50" text-anchor="middle" fill="#e8f4fd" font-size="24" font-weight="700" font-family="monospace">1/5</text>
  <path d="M60,52 C60,90 160,100 160,100 C160,100 260,90 260,52" fill="none" stroke="#4da6ff" stroke-width="1.5" opacity=".7"/>
  <path d="M100,52 C100,90 160,100 160,100 C160,100 220,90 220,52" fill="none" stroke="#ffd166" stroke-width="1.5" opacity=".7"/>
  <text x="80" y="108" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="monospace">1×5=5</text>
  <text x="240" y="108" text-anchor="middle" fill="#4da6ff" font-size="11" font-family="monospace">1×4=4</text>
  <text x="160" y="124" text-anchor="middle" fill="#ffd166" font-size="11" font-family="monospace">4×5=20</text>
  <text x="160" y="147" text-anchor="middle" fill="#00e5a0" font-size="15" font-weight="700" font-family="monospace">(5+4)/20 = 9/20 ✓</text>
</svg>
<div class="diagram-caption">Cross-multiply to get the numerators. Multiply the denominators for the new denominator. Add the cross-products for the new numerator.</div>`,

ch18: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">PERCENTAGE TRIANGLE</text>
  <polygon points="160,28 36,130 284,130" fill="#0d2240" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="160" y="56" text-anchor="middle" fill="#ffd166" font-size="14" font-weight="700" font-family="sans-serif">PART</text>
  <line x1="98" y1="79" x2="222" y2="79" stroke="#264d80" stroke-width="1.5"/>
  <text x="80" y="112" text-anchor="middle" fill="#4da6ff" font-size="13" font-weight="700" font-family="sans-serif">RATE</text>
  <text x="240" y="112" text-anchor="middle" fill="#00e5a0" font-size="13" font-weight="700" font-family="sans-serif">WHOLE</text>
  <text x="160" y="148" text-anchor="middle" fill="#e8f4fd" font-size="10" font-family="sans-serif">Cover what you need: Part = Rate × Whole</text>
</svg>
<div class="diagram-caption">Cover the value you want to find. The remaining two values show the operation. To find RATE: Part ÷ Whole. To find WHOLE: Part ÷ Rate.</div>`,

ch19: () => `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">
  <text x="160" y="14" text-anchor="middle" fill="#7ba3cc" font-size="10" font-family="sans-serif" font-weight="600" letter-spacing="1">RULE OF 72 — YEARS TO DOUBLE</text>
  ${[
    [3,24],[4,18],[6,12],[8,9],[9,8],[12,6],[18,4],[24,3],[36,2],[72,1]
  ].map(([rate,yrs],i) => {
    const x = 20 + i*28; const barH = yrs*4; const y = 128-barH;
    const col = yrs>12?'#ff6b6b':yrs>6?'#ffd166':'#00e5a0';
    return `<rect x="${x}" y="${y}" width="22" height="${barH}" rx="3" fill="${col}" opacity=".85"/>
    <text x="${x+11}" y="142" text-anchor="middle" fill="#7ba3cc" font-size="8" font-family="monospace">${rate}%</text>
    <text x="${x+11}" y="${y-3}" text-anchor="middle" fill="${col}" font-size="8" font-weight="700" font-family="monospace">${yrs}y</text>`;
  }).join('')}
  <line x1="16" y1="128" x2="304" y2="128" stroke="#264d80" stroke-width="1"/>
</svg>
<div class="diagram-caption">72 ÷ interest rate = years to double your money. At 6% it takes 12 years. At 12% just 6 years. Doubling time halves when rate doubles.</div>`,

};


