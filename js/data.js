/* ══ DATA ═════════════════════════════════════════════════════
   CHAPTERS  — list of all 19 chapters (id, title, difficulty)
   DATA      — full content for each chapter:
               goal, concepts, methods, examples, questions
═══════════════════════════════════════════════════════════ */
const CHAPTERS = [
  {id:"ch01",title:"The Low Battery Nightmare",difficulty:"Easy"},
  {id:"ch02",title:"The Human Register",difficulty:"Easy"},
  {id:"ch03",title:"The Power of Two",difficulty:"Medium"},
  {id:"ch04",title:"The Checksum",difficulty:"Medium"},
  {id:"ch05",title:"The Magic 11",difficulty:"Hard"},
  {id:"ch06",title:"The Dozen & The Tip",difficulty:"Hard"},
  {id:"ch07",title:"The Discount Hunter",difficulty:"Hard"},
  {id:"ch08",title:"The Growth Hacker",difficulty:"Hard"},
  {id:"ch09",title:"The Daily Rate",difficulty:"Hard"},
  {id:"ch10",title:"The Universal Key",difficulty:"Hard"},
  {id:"ch11",title:"The Unit Cost",difficulty:"Hard"},
  {id:"ch12",title:"The Team Split",difficulty:"Hard"},
  {id:"ch13",title:"Instant Squares",difficulty:"Hard"},
  {id:"ch14",title:"The Pivot",difficulty:"Hard"},
  {id:"ch15",title:"The Duplex Drive",difficulty:"Hard"},
  {id:"ch16",title:"The Cube Root Hack",difficulty:"Hard"},
  {id:"ch17",title:"The Equity Split",difficulty:"Hard"},
  {id:"ch18",title:"The Reverse Audit",difficulty:"Hard"},
  {id:"ch19",title:"The Trader's Compound",difficulty:"Hard"}
];

const DATA = {
"ch01":{
  goal:"Stop doing math like a calculator. Start doing it like a human.",
  concepts:[
    {name:"The Stacking Method",text:"Column Addition — write numbers vertically, work Right to Left. Perfect for paper. Terrible for your brain under pressure."},
    {name:"Cognitive Load",text:"When stressed, working memory shuts down. The moment you try to 'carry the one', you forget the original numbers."},
    {name:"Left-to-Right Processing",text:"We read Left to Right. We say numbers Left to Right. We should calculate Left to Right."},
    {name:"The Two Buckets",text:"Split everything into two buckets: The Big Stuff (Dollars) and The Small Stuff (Cents)."}
  ],
  methods:[
    {name:"The Uncalculator Way",steps:[
      "Split into two buckets — Dollars and Cents.",
      "Step 1 — Big Stuff: Ignore the cents. Add all dollar amounts. Park that number in your head.",
      "Step 2 — Small Stuff: Now add all the cents.",
      "Step 3 — Merge: Combine your Dollar total and your Cents total for the final answer."
    ]}
  ],
  examples:[
    {hd:"$3.99 + $2.75",steps:["Dollars: 3 + 2 = 5","Cents: 99 + 75 = 174 → $1.74","5 + 1.74 = <strong>$6.74</strong>"]},
    {hd:"$1.90 + $1.50 + $1.05",steps:["Dollars: 1 + 1 + 1 = 3","Cents: 90 + 50 + 5 = 145 → $1.45","3 + 1.45 = <strong>$4.45</strong>"]},
    {hd:"$12.50 + $4.75",steps:["Dollars: 12 + 4 = 16","Cents: 50 + 75 = 125 → $1.25","16 + 1.25 = <strong>$17.25</strong>"]}
  ],
  qs:[
    {q:"$2.20 + $1.30",a:"$3.50"},{q:"$5.10 + $3.40",a:"$8.50"},
    {q:"$4.25 + $2.50",a:"$6.75"},{q:"$10.50 + $3.25",a:"$13.75"},
    {q:"$6.99 + $2.01",a:"$9.00"},{q:"$7.50 + $4.50",a:"$12.00"},
    {q:"$12.30 + $1.60",a:"$13.90"},{q:"$8.75 + $5.25",a:"$14.00"},
    {q:"$3.45 + $2.45",a:"$5.90"},{q:"$15.10 + $4.95",a:"$20.05"},
    {q:"$3.75 + $2.25",a:"$6.00"},{q:"$8.50 + $1.75",a:"$10.25"},
    {q:"$11.99 + $3.01",a:"$15.00"},{q:"$5.60 + $4.40",a:"$10.00"},
    {q:"$9.25 + $6.75",a:"$16.00"},{q:"$2.80 + $3.20",a:"$6.00"},
    {q:"$14.50 + $5.50",a:"$20.00"},{q:"$7.99 + $8.01",a:"$16.00"},
    {q:"$4.35 + $3.65",a:"$8.00"},{q:"$6.50 + $2.75",a:"$9.25"}
  ],pass:0.8
},
"ch02":{
  goal:"Become the Human Register. Never lose money at a checkout again.",
  concepts:[
    {name:"The Short-Change Anxiety",text:"The fear of doing subtraction in public — people risk losing money rather than risk looking stupid."},
    {name:"Borrowing (The Old Way)",text:"The school method: visualise a changing whiteboard, cross out numbers, carry values. Creates immediate brain fog."},
    {name:"All From 9, Last From 10",text:"A rule from Vedic Mathematics. Subtract every digit from 9, and the very last digit from 10. This finds the complement instantly."},
    {name:"Complement",text:"Finding what you need to ADD to make the number whole. Instead of 'take away', think 'what completes this?'"}
  ],
  methods:[
    {name:"All From 9, Last From 10 (Powers of 10)",steps:[
      "Look at the number you're subtracting.",
      "Subtract each digit (left to right) from 9.",
      "Subtract the very last digit from 10.",
      "The result is your change."
    ]},
    {name:"Real World ($50 or any non-power of 10)",steps:[
      "Step 1 — Safe Cash: Subtract cost dollars from bill. Reduce result by 1 (for coins).",
      "Step 2 — Magic Cents: Apply 'All From 9, Last From 10' to just the cents.",
      "Step 3 — Merge: Safe Cash + Magic Cents = your change."
    ]}
  ],
  examples:[
    {hd:"$100 − $35.75",steps:["3 from 9 = 6","5 from 9 = 4","7 from 9 = 2","5 from 10 = 5","Change = <strong>$64.25</strong>"]},
    {hd:"$1,000 − $458",steps:["4 from 9 = 5","5 from 9 = 4","8 from 10 = 2","Change = <strong>$542</strong>"]},
    {hd:"$50 − $25.65",steps:["$50 − $25 = $25, then −1 = $24 (whole part)","Cents: 6 from 9 = 3, 5 from 10 = 5 → $0.35","$24 + $0.35 = <strong>$24.35</strong>"]}
  ],
  qs:[
    {q:"Change from $100 — Spend $23.45",a:"$76.55"},{q:"Change from $100 — Spend $71.80",a:"$28.20"},
    {q:"Change from $100 — Spend $54.12",a:"$45.88"},{q:"Change from $100 — Spend $88.88",a:"$11.12"},
    {q:"Change from $100 — Spend $13.05",a:"$86.95"},{q:"Change from $50 — Spend $12.55",a:"$37.45"},
    {q:"Change from $50 — Spend $25.25",a:"$24.75"},{q:"Change from $50 — Spend $9.40",a:"$40.60"},
    {q:"Change from $50 — Spend $31.15",a:"$18.85"},{q:"Change from $50 — Spend $44.65",a:"$5.35"},
    {q:"Change from $100 — Spend $42.30",a:"$57.70"},{q:"Change from $100 — Spend $67.45",a:"$32.55"},
    {q:"Change from $100 — Spend $9.80",a:"$90.20"},{q:"Change from $100 — Spend $35.60",a:"$64.40"},
    {q:"Change from $100 — Spend $82.15",a:"$17.85"},{q:"Change from $50 — Spend $18.70",a:"$31.30"},
    {q:"Change from $50 — Spend $36.85",a:"$13.15"},{q:"Change from $50 — Spend $7.25",a:"$42.75"},
    {q:"Change from $50 — Spend $22.40",a:"$27.60"},{q:"Change from $50 — Spend $41.90",a:"$8.10"}
  ],pass:0.8
},
"ch03":{
  goal:"You rarely need to multiply. Most of the time, you just need to Double.",
  concepts:[
    {name:"The Double-Double Rule",text:"The brain is wired for symmetry. We're naturally good at doubling or halving. Exploit this to hack the multiplication tables."},
    {name:"The Half-Half Rule",text:"Division is the arch-enemy of the adult brain. But 'halving' is friendly and fast."},
    {name:"The ×5 Trick",text:"5 is just 10 divided by 2. To multiply by 5: multiply by 10, then halve."}
  ],
  methods:[
    {name:"Doubling (Multiplication)",steps:["× 2: Simply double it.","× 4: Double, then double again.","× 8: Double, double, then double once more."]},
    {name:"Halving (Division)",steps:["÷ 2: Halve it.","÷ 4: Halve, then halve again."]},
    {name:"Multiplying by 5",steps:["Add a zero (multiply by 10).","Halve the result."]}
  ],
  examples:[
    {hd:"$5.50 × 4",steps:["× 2: 5.50 → 11.00","× 2: 11.00 → <strong>$22.00</strong>"]},
    {hd:"$64.80 ÷ 4",steps:["÷ 2: 64.80 → 32.40","÷ 2: 32.40 → <strong>$16.20</strong>"]},
    {hd:"$44 × 5",steps:["× 10: 44 → 440","÷ 2: 440 → <strong>$220</strong>"]},
    {hd:"$65 × 8",steps:["× 2: 65 → 130","× 2: 130 → 260","× 2: 260 → <strong>$520</strong>"]}
  ],
  qs:[
    {q:"$15 × 4",a:"60"},{q:"$2.50 × 4",a:"10"},{q:"$12 × 8",a:"96"},
    {q:"$1.25 × 8",a:"10"},{q:"$35 × 4",a:"140"},{q:"Split $88 by 4",a:"22"},
    {q:"Split $36.40 by 4",a:"9.10"},{q:"25% of $800",a:"200"},
    {q:"18 × 5",a:"90"},{q:"64 × 5",a:"320"},{q:"$4.20 × 5",a:"21"},
    {q:"$8 × 4",a:"32"},{q:"$6.25 × 4",a:"25"},{q:"$3.75 × 8",a:"30"},
    {q:"Split $56 by 4",a:"14"},{q:"Split $120 by 4",a:"30"},
    {q:"25% of $200",a:"50"},{q:"25% of $60",a:"15"},
    {q:"14 × 5",a:"70"},{q:"48 × 5",a:"240"}
  ],pass:0.8
},
"ch04":{
  goal:"Trust your brain — because you now have a way to verify it.",
  concepts:[
    {name:"Digital Root",text:"Every number has a single-digit DNA. Find it by adding all its digits together, then repeating until one digit remains."},
    {name:"The Ghost of 9",text:"In the world of Digital Roots, 9 equals 0. It vanishes. If you see a 9, or digits that sum to 9 — cross them out immediately."},
    {name:"The Audit Rule",text:"The Digital Root of your inputs (after the operation) must match the Digital Root of your answer. If they don't, there's an error."}
  ],
  methods:[
    {name:"Finding a Digital Root",steps:["Add all the digits together.","If the result has two digits, add those together.","Repeat until one digit remains."]},
    {name:"Cast Out Nines (Speed Hack)",steps:["Spot a 9? Ignore it (cross it out).","See digits that sum to 9? Cross them both out.","Add whatever digits are left."]},
    {name:"How to Audit Your Math",steps:["Find the Digital Root of each input number.","Apply the operation (+ or ×) to those roots — this is your Checksum.","Find the Digital Root of your answer.","Checksum must equal Answer's Root. If not — error!"]}
  ],
  examples:[
    {hd:"34 × 51 = 1,734 — is it right?",steps:["Root(34): 3+4 = 7","Root(51): 5+1 = 6","Checksum: 7×6 = 42 → 4+2 = 6","Root(1734): 1+7+3+4 = 15 → 1+5 = 6","6 = 6 → <strong>Correct ✓</strong>"]},
    {hd:"34 × 51 = 1,634 — is it right?",steps:["Root(1634): 1+6+3+4 = 14 → 1+4 = 5","Checksum = 6","5 ≠ 6 → <strong>Error detected ✗</strong>"]}
  ],
  qs:[
    {q:"Digital Root of 18",a:"9"},{q:"Digital Root of 9999",a:"9"},{q:"Digital Root of 452",a:"2"},
    {q:"Digital Root of 3168",a:"9"},{q:"Digital Root of 12345678",a:"9"},
    {q:"Audit: 22 × 11 = 242",a:"Correct"},{q:"Audit: 31 × 12 = 362",a:"Incorrect"},
    {q:"Audit: 15 × 15 = 225",a:"Correct"},{q:"Audit: 123 + 45 = 158",a:"Incorrect"},
    {q:"Audit: 44 × 4 = 176",a:"Correct"},
    {q:"Digital Root of 27",a:"9"},{q:"Digital Root of 144",a:"9"},
    {q:"Digital Root of 256",a:"4"},{q:"Digital Root of 1234",a:"1"},
    {q:"Digital Root of 555",a:"6"},{q:"Digital Root of 81",a:"9"},
    {q:"Digital Root of 37",a:"1"},{q:"Digital Root of 99",a:"9"},
    {q:"Digital Root of 1001",a:"2"},{q:"Digital Root of 7777",a:"1"}
  ],pass:0.8
},
"ch05":{
  goal:"Stop feeling bad at math. After this chapter, you'll feel like a wizard.",
  concepts:[
    {name:"How 11 Works",text:"11 is just a separator. It takes a number, pulls it apart, and stuffs the sum of its digits in the middle."},
    {name:"The Overstuffed Sandwich",text:"Sometimes the two digits add up to more than 9. You can't fit a double-digit number in a single gap — so the 'filling' spills over to the left."},
    {name:"Why This Works",text:"11 = 10 + 1. Multiplying by 11 means (Number × 10) + (Number × 1). You are literally adding the two digits in the middle column."}
  ],
  methods:[
    {name:"Split, Add, Sandwich",steps:["Step 1 — Split: Pull the two digits apart. Leave a gap in the middle.","Step 2 — Add: Add the two digits together.","Step 3 — Sandwich: Put that sum in the gap."]},
    {name:"Overstuffed Sandwich (When Sum > 9)",steps:["Split the digits apart.","Add the two digits — if sum > 9, keep only the right digit in the middle.","Add 1 to the left digit (carry it)."]}
  ],
  examples:[
    {hd:"35 × 11",steps:["Split: 3 _ 5","Middle: 3+5 = 8","<strong>= 385</strong>"]},
    {hd:"48 × 11",steps:["Split: 4 _ 8","Middle: 4+8 = 12  →  keep 2, carry 1","Left digit: 4+1 = 5","<strong>= 528</strong>"]},
    {hd:"$2,400 × 1.1  (tax buffer)",steps:["Treat as 24 × 11","Split: 2 _ 4, middle: 2+4 = 6 → 264","Restore zeros: <strong>$2,640</strong>"]}
  ],
  qs:[
    {q:"23 × 11",a:"253"},{q:"45 × 11",a:"495"},{q:"18 × 11",a:"198"},
    {q:"61 × 11",a:"671"},{q:"81 × 11",a:"891"},{q:"49 × 11",a:"539"},
    {q:"85 × 11",a:"935"},{q:"57 × 11",a:"627"},{q:"77 × 11",a:"847"},
    {q:"99 × 11",a:"1089"},
    {q:"31 × 11",a:"341"},{q:"52 × 11",a:"572"},{q:"64 × 11",a:"704"},
    {q:"36 × 11",a:"396"},{q:"72 × 11",a:"792"},{q:"28 × 11",a:"308"},
    {q:"53 × 11",a:"583"},{q:"67 × 11",a:"737"},{q:"29 × 11",a:"319"},
    {q:"94 × 11",a:"1034"}
  ],pass:0.8
},
"ch06":{
  goal:"Calculate tips, yearly costs, and any × 12 or × 15 problem in seconds.",
  concepts:[
    {name:"Social Pressure Cooker",text:"The anxiety of calculating a bill or tip while others are watching. This chapter eliminates that anxiety permanently."},
    {name:"Gatekeeper Numbers",text:"12 and 15 show up everywhere — months, dozens, tipping. Master these two and you unlock a huge part of real-world math."},
    {name:"The Uncalculator Way",text:"Break any number into pieces you already like: 10, 2, and Half. Then reassemble."}
  ],
  methods:[
    {name:"× 15 (The Tip) — Step + Half-Step",steps:["Multiply by 10 (add a zero or shift the decimal).","Take half of that result.","Add them together."]},
    {name:"× 12 (The Dozen) — Shift + Double",steps:["Multiply by 10 (shift decimal or add zero).","Double the original number.","Add the two results together."]}
  ],
  examples:[
    {hd:"15% of $80",steps:["10%: 80 × 0.1 = 8","5%: 8 ÷ 2 = 4","8 + 4 = <strong>$12</strong>"]},
    {hd:"$60 × 15",steps:["× 10: 600","× 5: 600 ÷ 2 = 300","600 + 300 = <strong>$900</strong>"]},
    {hd:"$14 × 12",steps:["× 10: 140","× 2: 28","140 + 28 = <strong>$168</strong>"]},
    {hd:"$40 × 12",steps:["× 10: 400","× 2: 80","400 + 80 = <strong>$480</strong>"]}
  ],
  qs:[
    {q:"$12/month × 12",a:"144"},{q:"$21 × 12",a:"252"},{q:"$32 × 12",a:"384"},
    {q:"$1.50 × 12",a:"18"},{q:"$50 × 12",a:"600"},{q:"15% tip on $40",a:"6"},
    {q:"15% tip on $60",a:"9"},{q:"15% tip on $24",a:"3.60"},
    {q:"15% tip on $18",a:"2.70"},{q:"15% tip on $120",a:"18"},
    {q:"18 items × $15",a:"270"},{q:"40 hrs × $15/hr",a:"600"},
    {q:"$8/month × 12",a:"96"},{q:"$45 × 12",a:"540"},
    {q:"$15 × 12",a:"180"},{q:"$2.50 × 12",a:"30"},
    {q:"$75 × 12",a:"900"},{q:"15% tip on $80",a:"12"},
    {q:"15% tip on $200",a:"30"},{q:"24 items × $15",a:"360"}
  ],pass:0.8
},
"ch07":{
  goal:"Multiply big numbers close to 100 using Gaps, not traditional multiplication.",
  concepts:[
    {name:"The Wholesale Panic",text:"The anxiety from trying to multiply numbers like 96 × 95 using the school method. The Cognitive Load is overwhelming."},
    {name:"Mind the Gap",text:"Instead of looking at the big number, look at the gap between that number and 100. These small 'gap' numbers are much easier to work with."},
    {name:"The Single Digit Trap",text:"If the right side (gap × gap) is a single digit, you MUST give it a zero partner (e.g., 6 becomes 06) because Base 100 has two zeros."}
  ],
  methods:[
    {name:"Cross-Subtract & Multiply",steps:[
      "Find the Gap: How far is each number from 100?",
      "Left Side (Cross-Subtract): Take one number and subtract the other's gap.",
      "Right Side (Multiply Gaps): Multiply the two small gap numbers together.",
      "Merge: Left Side followed by Right Side = the answer."
    ]}
  ],
  examples:[
    {hd:"96 × 95",steps:["Gaps: 96−100 = −4,  95−100 = −5","Left: 96−5 = 91","Right: 4×5 = 20","<strong>= 9,120</strong>"]},
    {hd:"98 × 97",steps:["Gaps: −2 and −3","Left: 98−3 = 95","Right: 2×3 = 6  →  write as 06","<strong>= 9,506</strong>"]},
    {hd:"93 × 94",steps:["Gaps: −7 and −6","Left: 93−6 = 87","Right: 7×6 = 42","<strong>= 8,742</strong>"]}
  ],
  qs:[
    {q:"91 × 99",a:"9009"},{q:"96 × 96",a:"9216"},{q:"95 × 95",a:"9025"},
    {q:"98 × 92",a:"9016"},{q:"97 × 93",a:"9021"},{q:"94 × 98",a:"9212"},
    {q:"89 × 98",a:"8722"},{q:"99 × 99",a:"9801"},{q:"88 × 99",a:"8712"},
    {q:"92 × 99",a:"9108"},
    {q:"97 × 94",a:"9118"},{q:"93 × 93",a:"8649"},{q:"92 × 96",a:"8832"},
    {q:"91 × 97",a:"8827"},{q:"94 × 94",a:"8836"},{q:"95 × 98",a:"9310"},
    {q:"90 × 99",a:"8910"},{q:"96 × 93",a:"8928"},{q:"98 × 98",a:"9604"},
    {q:"87 × 98",a:"8526"}
  ],pass:0.8
},
"ch08":{
  goal:"Calculate numbers above 100 (Surplus Numbers) using Cross-Add & Multiply.",
  concepts:[
    {name:"Surplus Numbers",text:"Numbers above 100. Instead of finding the gap DOWN to 100, you find the surplus UP from 100. The method flips from subtract to add."},
    {name:"The Overachiever (Carrying)",text:"Base 100 only allows two digits on the Right Side. If multiplying surpluses gives three digits, carry the hundreds digit to the Left Side."},
    {name:"The Mixed Market",text:"When one number is above 100 and one is below, you multiply one positive and one negative deviation — giving a negative Right Side. Subtract instead of adding."}
  ],
  methods:[
    {name:"Cross-Add & Multiply (Both Above 100)",steps:[
      "Find the Surplus: How much MORE than 100 is each number?",
      "Left Side (Cross-Add): Take one number and ADD the other's surplus.",
      "Right Side (Multiply Surpluses): Multiply the two small surplus numbers.",
      "Merge: Left Side + Right Side = answer."
    ]},
    {name:"Mixed Market (One Above, One Below 100)",steps:[
      "Find deviations: one is + (surplus), one is − (gap).",
      "Cross-Calculate: Add or subtract diagonally.",
      "Multiply deviations: positive × negative = negative.",
      "Convert Left Side to hundreds, then subtract the negative result."
    ]}
  ],
  examples:[
    {hd:"103 × 104",steps:["Surplus: +3 and +4","Left: 103+4 = 107","Right: 3×4 = 12","<strong>= 10,712</strong>"]},
    {hd:"106 × 108",steps:["Surplus: +6 and +8","Left: 106+8 = 114","Right: 6×8 = 48","<strong>= 11,448</strong>"]},
    {hd:"112 × 112",steps:["Surplus: +12 and +12","Left: 112+12 = 124","Right: 12×12 = 144  →  keep 44, carry 1","Left: 124+1 = 125","<strong>= 12,544</strong>"]},
    {hd:"104 × 98",steps:["Surplus: +4,  deficit: −2","Left: 104−2 = 102","Right: 4×(−2) = −8","10,200 − 8 = <strong>10,192</strong>"]}
  ],
  qs:[
    {q:"102 × 103",a:"10506"},{q:"105 × 105",a:"11025"},{q:"101 × 109",a:"11009"},
    {q:"107 × 106",a:"11342"},{q:"108 × 109",a:"11772"},{q:"104 × 104",a:"10816"},
    {q:"110 × 105",a:"11550"},{q:"112 × 102",a:"11424"},{q:"111 × 111",a:"12321"},
    {q:"115 × 105",a:"12075"},
    {q:"101 × 104",a:"10504"},{q:"103 × 106",a:"10918"},{q:"102 × 108",a:"11016"},
    {q:"104 × 107",a:"11128"},{q:"109 × 103",a:"11227"},{q:"113 × 104",a:"11752"},
    {q:"106 × 109",a:"11554"},{q:"108 × 103",a:"11124"},{q:"114 × 103",a:"11742"},
    {q:"107 × 107",a:"11449"}
  ],pass:0.8
},
"ch09":{
  goal:"Master one-digit × two-digit problems: daily rates, tickets, subscriptions.",
  concepts:[
    {name:"The Gig Economy Grind",text:"The most common adult maths problem: one-digit × two-digit (freelance rates, gas mileage, ticket prices). This is what you face daily."},
    {name:"Left-to-Right Calculation",text:"Calculate the big numbers first, small numbers second. This mirrors how we speak ('three hundred AND one') and prevents the brain freeze of Right-to-Left."}
  ],
  methods:[
    {name:"Split & Merge (Divide and Conquer)",steps:[
      "Split: Break the two-digit number into Tens and Units.",
      "Big Part: Multiply by the Tens number first. Park this result.",
      "Small Part: Multiply by the Units number.",
      "Merge: Add Parked + Small."
    ]},
    {name:"Round Up Variation (for 8s and 9s)",steps:[
      "Round UP to the nearest ten.",
      "Multiply the rounded number.",
      "Calculate the Excess (difference × second number).",
      "Subtract the Excess from the big result."
    ]}
  ],
  examples:[
    {hd:"43 × 7",steps:["Split: 40 + 3","40×7 = 280","3×7 = 21","280 + 21 = <strong>301</strong>"]},
    {hd:"54 × 6",steps:["Split: 50 + 4","50×6 = 300","4×6 = 24","300 + 24 = <strong>324</strong>"]},
    {hd:"39 × 6",steps:["Round up: 40×6 = 240","Correction: 1×6 = 6","240 − 6 = <strong>234</strong>"]}
  ],
  qs:[
    {q:"32 × 4",a:"128"},{q:"43 × 5",a:"215"},{q:"64 × 3",a:"192"},
    {q:"24 × 6",a:"144"},{q:"52 × 7",a:"364"},{q:"72 × 5",a:"360"},
    {q:"83 × 3",a:"249"},{q:"61 × 8",a:"488"},{q:"93 × 3",a:"279"},
    {q:"55 × 6",a:"330"},{q:"19 × 6",a:"114"},{q:"39 × 4",a:"156"},
    {q:"28 × 5",a:"140"},
    {q:"41 × 6",a:"246"},{q:"73 × 4",a:"292"},{q:"62 × 7",a:"434"},
    {q:"53 × 8",a:"424"},{q:"84 × 5",a:"420"},{q:"76 × 4",a:"304"},
    {q:"29 × 7",a:"203"}
  ],pass:0.8
},
"ch10":{
  goal:"Solve 'ugly' multiplication problems using the I-X-I (Vertically and Crosswise) method.",
  concepts:[
    {name:"The Ugly Number Problem",text:"Some numbers are just ugly — not near 100, not even, and hard to work with (e.g., 23 × 41). The school staircase method is slow and error-prone."},
    {name:"The I-X-I Method",text:"From Vedic Mathematics: 'Vertically and Crosswise.' A three-beat pattern: Left Vertical → Cross → Right Vertical. It replaces the entire school staircase."},
    {name:"The Carry",text:"When the middle result (the Cross) is bigger than 9, write the units digit in the middle and carry the tens digit to the left."}
  ],
  methods:[
    {name:"The I-X-I Pattern",steps:[
      "Visualise the two numbers stacked vertically.",
      "Left Vertical (I): Multiply the left-column digits together.",
      "The Cross (X): Multiply diagonally (both ways) and add the results.",
      "Right Vertical (I): Multiply the right-column digits together.",
      "Read left to right. Handle any carries right to left."
    ]}
  ],
  examples:[
    {hd:"21 × 32",steps:["Left: 2×3 = 6","Cross: (2×2)+(1×3) = 4+3 = 7","Right: 1×2 = 2","<strong>= 672</strong>"]},
    {hd:"31 × 14",steps:["Left: 3×1 = 3","Cross: (3×4)+(1×1) = 12+1 = 13  →  write 3, carry 1","Left: 3+1 = 4","Right: 1×4 = 4","<strong>= 434</strong>"]},
    {hd:"23 × 12",steps:["Left: 2×1 = 2","Cross: (2×2)+(3×1) = 4+3 = 7","Right: 3×2 = 6","<strong>= 276</strong>"]}
  ],
  qs:[
    {q:"12 × 13",a:"156"},{q:"21 × 41",a:"861"},{q:"22 × 31",a:"682"},
    {q:"11 × 24",a:"264"},{q:"32 × 21",a:"672"},{q:"14 × 23",a:"322"},
    {q:"24 × 21",a:"504"},{q:"32 × 14",a:"448"},{q:"41 × 13",a:"533"},
    {q:"51 × 12",a:"612"},
    {q:"13 × 21",a:"273"},{q:"22 × 13",a:"286"},{q:"31 × 23",a:"713"},
    {q:"11 × 33",a:"363"},{q:"42 × 21",a:"882"},{q:"23 × 32",a:"736"},
    {q:"14 × 31",a:"434"},{q:"21 × 33",a:"693"},{q:"43 × 11",a:"473"},
    {q:"34 × 12",a:"408"}
  ],pass:0.8
},
"ch11":{
  goal:"Survive the Best Value Trap. Calculate unit prices faster than the shelf label.",
  concepts:[
    {name:"The Best Value Trap",text:"Supermarkets count on you not being able to do unit price maths in your head. They put bright yellow SALE stickers on bigger bottles even when the unit price is higher."},
    {name:"Short Division vs Long Division",text:"Long division is an architectural drawing. Short division is a quick sketch. You only need the sketch to make a buying decision."}
  ],
  methods:[
    {name:"The Carry-Over Whisper",steps:[
      "Divide from Left to Right (like reading).",
      "Divide the first digit. Write down the result.",
      "If there's a remainder, 'whisper' it to the front of the next digit.",
      "Repeat for each digit."
    ]}
  ],
  examples:[
    {hd:"84 ÷ 2",steps:["8 ÷ 2 = 4","4 ÷ 2 = 2","<strong>= 42</strong>"]},
    {hd:"52 ÷ 4",steps:["5 ÷ 4 = 1 r1","Carry 1 → 12","12 ÷ 4 = 3","<strong>= 13</strong>"]},
    {hd:"$7.50 ÷ 3",steps:["7 ÷ 3 = 2 r1","Carry 1 → 15,  15 ÷ 3 = 5","0 ÷ 3 = 0","<strong>= $2.50</strong>"]},
    {hd:"$9 / 60 oz  vs  $12 / 100 oz",steps:["A: 900¢ ÷ 60 = 15¢/oz","B: 1200¢ ÷ 100 = 12¢/oz","<strong>B wins</strong>"]}
  ],
  qs:[
    {q:"72 ÷ 3",a:"24"},{q:"96 ÷ 4",a:"24"},{q:"56 ÷ 2",a:"28"},
    {q:"45 ÷ 3",a:"15"},{q:"65 ÷ 5",a:"13"},{q:"132 ÷ 4",a:"33"},
    {q:"156 ÷ 6",a:"26"},{q:"432 ÷ 2",a:"216"},{q:"91 ÷ 7",a:"13"},
    {q:"144 ÷ 6",a:"24"},
    {q:"84 ÷ 4",a:"21"},{q:"75 ÷ 3",a:"25"},{q:"108 ÷ 4",a:"27"},
    {q:"63 ÷ 3",a:"21"},{q:"76 ÷ 4",a:"19"},{q:"195 ÷ 3",a:"65"},
    {q:"168 ÷ 8",a:"21"},{q:"225 ÷ 5",a:"45"},{q:"112 ÷ 7",a:"16"},
    {q:"136 ÷ 8",a:"17"}
  ],pass:0.8
},
"ch12":{
  goal:"Drop the number in the group chat before they even unlock their screens.",
  concepts:[
    {name:"The Group Venmo Nightmare",text:"Your brain hates dividing by 6. But you don't HAVE to divide by 6 if you can divide by 3 instead."},
    {name:"Technique 1 — The Shrink Ray",text:"Division is just a fraction. If both numbers are even, you can cut them both in half first — shrinking the problem to something friendlier."},
    {name:"Technique 2 — The Double Up",text:"Dividing by 5 is awkward. But dividing by 10 is effortless. So: double the number, then divide by 10."}
  ],
  methods:[
    {name:"The Shrink Ray (Reduce the Fraction)",steps:["Check if both numbers are even.","Halve both: cut numerator and denominator in half.","Solve the new, smaller problem using Short Division."]},
    {name:"The Double Up (Dividing by 5)",steps:["Double the number.","Divide by 10 (move decimal one spot left)."]},
    {name:"The Anchor (Rough Split)",steps:["Find the nearest easy multiple of the divisor.","Subtract from total to find the leftover.","Estimate the leftover divided by the divisor.","Add anchor result + leftover estimate."]}
  ],
  examples:[
    {hd:"$258 ÷ 6",steps:["Halve both: 258÷2=129,  6÷2=3","129 ÷ 3 = <strong>$43</strong>"]},
    {hd:"$62 ÷ 5",steps:["× 2: 62×2 = 124","÷ 10: 124 → <strong>$12.40</strong>"]},
    {hd:"$150 ÷ 7",steps:["Anchor: 7×20 = 140","Remainder: 150−140 = 10","10 ÷ 7 ≈ 1.43","<strong>≈ $21.43</strong>"]}
  ],
  qs:[
    {q:"$84 ÷ 4",a:"21"},{q:"$128 ÷ 4",a:"32"},{q:"$248 ÷ 8",a:"31"},
    {q:"$64 ÷ 4",a:"16"},{q:"$180 ÷ 6",a:"30"},{q:"$45 ÷ 5",a:"9"},
    {q:"$120 ÷ 5",a:"24"},{q:"$32 ÷ 5",a:"6.4"},{q:"$21 ÷ 5",a:"4.2"},
    {q:"$150 ÷ 5",a:"30"},
    {q:"$96 ÷ 4",a:"24"},{q:"$176 ÷ 8",a:"22"},{q:"$336 ÷ 6",a:"56"},
    {q:"$72 ÷ 4",a:"18"},{q:"$200 ÷ 8",a:"25"},{q:"$75 ÷ 5",a:"15"},
    {q:"$85 ÷ 5",a:"17"},{q:"$95 ÷ 5",a:"19"},{q:"$110 ÷ 5",a:"22"},
    {q:"$48 ÷ 4",a:"12"}
  ],pass:0.8
},
"ch13":{
  goal:"Square any number ending in 5 — instantly, every time.",
  concepts:[
    {name:"The Tail of 25",text:"Universal law: if a number ends in 5, its square ALWAYS ends in 25. No exceptions. So half your answer is already written for you."},
    {name:"Estimating with Squares",text:"Knowing your ×5 squares lets you estimate squares of nearby numbers. For example, 34×36 is just 35² minus 1."}
  ],
  methods:[
    {name:"One More Than the Before",steps:[
      "The Back Half: Number ends in 5, so write down 25.",
      "The Front Half: Take the digit(s) before the 5. Multiply by the next number up (digit + 1).",
      "Merge: Put the front result in front of 25."
    ]}
  ],
  examples:[
    {hd:"35²",steps:["Back: 25","Front: 3×4 = 12","<strong>= 1,225</strong>"]},
    {hd:"65²",steps:["Back: 25","Front: 6×7 = 42","<strong>= 4,225</strong>"]},
    {hd:"95²",steps:["Back: 25","Front: 9×10 = 90","<strong>= 9,025</strong>"]},
    {hd:"115²",steps:["Back: 25","Front: 11×12 = 132","<strong>= 13,225</strong>"]}
  ],
  qs:[
    {q:"15²",a:"225"},{q:"25²",a:"625"},{q:"45²",a:"2025"},
    {q:"55²",a:"3025"},{q:"75²",a:"5625"},{q:"85²",a:"7225"},
    {q:"105²",a:"11025"},{q:"3.5²",a:"12.25"},{q:"6.5²",a:"42.25"},
    {q:"95²",a:"9025"},
    {q:"4.5²",a:"20.25"},{q:"7.5²",a:"56.25"},{q:"8.5²",a:"72.25"},
    {q:"1.5²",a:"2.25"},{q:"125²",a:"15625"},{q:"145²",a:"21025"},
    {q:"165²",a:"27225"},{q:"175²",a:"30625"},{q:"195²",a:"38025"},
    {q:"205²",a:"42025"}
  ],pass:0.8
},
"ch14":{
  goal:"Calculate exact squares of numbers near 50 using 25 as your pivot point.",
  concepts:[
    {name:"The Almost Half Problem",text:"When squaring numbers near 50, rounding to 50² helps but isn't precise enough. The Base 100 method has gaps too large. We need a base of 50."},
    {name:"The Golden Number 25",text:"50² = 2500. So 25 is our Century Anchor. All our Left Side calculations revolve around 25 as the pivot."},
    {name:"Why It Clears Brain Fog",text:"You turn a complex multiplication into simple addition. Instead of '48 times 48', you just do '25 minus 2'. Cognitive load drops to almost nothing."}
  ],
  methods:[
    {name:"The Pivot Rule",steps:[
      "Deviation: How far is the number from 50? (Below = negative, above = positive.)",
      "Left Side (Pivot): Take 25 and add or subtract the deviation.",
      "Right Side (Square): Square the deviation. Write as two digits (e.g., 4 → 04). If 3 digits, carry hundreds to Left.",
      "Merge: Combine Left and Right."
    ]}
  ],
  examples:[
    {hd:"48²",steps:["Pivot 50,  gap = −2","Left: 25 − 2 = 23","Right: 2² = 04","<strong>= 2,304</strong>"]},
    {hd:"53²",steps:["Pivot 50,  gap = +3","Left: 25 + 3 = 28","Right: 3² = 09","<strong>= 2,809</strong>"]},
    {hd:"62²",steps:["Pivot 50,  gap = +12","Left: 25 + 12 = 37","Right: 12² = 144  →  keep 44, carry 1","Left: 37+1 = 38","<strong>= 3,844</strong>"]}
  ],
  qs:[
    {q:"49²",a:"2401"},{q:"51²",a:"2601"},{q:"46²",a:"2116"},
    {q:"54²",a:"2916"},{q:"55²",a:"3025"},{q:"41²",a:"1681"},
    {q:"39²",a:"1521"},{q:"61²",a:"3721"},{q:"38²",a:"1444"},
    {q:"59²",a:"3481"},
    {q:"47²",a:"2209"},{q:"53²",a:"2809"},{q:"44²",a:"1936"},
    {q:"56²",a:"3136"},{q:"57²",a:"3249"},{q:"63²",a:"3969"},
    {q:"37²",a:"1369"},{q:"42²",a:"1764"},{q:"58²",a:"3364"},
    {q:"45²",a:"2025"}
  ],pass:0.8
},
"ch15":{
  goal:"Square numbers in 'No Man's Land' — not near 50, not near 100, not ending in 5.",
  concepts:[
    {name:"No Man's Land",text:"Numbers like 83 or 27: too far from 50 for the Pivot, too far from 100 for the Base method, and don't end in 5. We need a universal tool."},
    {name:"The Cognitive Map (L|M|R)",text:"The formula (a+b)² = a²+2ab+b² gives us three distinct zones: Left (a²), Middle (2ab), Right (b²). Building them separately prevents working memory overload."},
    {name:"The Golden Rule",text:"Middle and Right zones can only hold ONE digit each. Any extras must be carried to the left."}
  ],
  methods:[
    {name:"The Duplex Drive",steps:[
      "Left Zone: Square the tens digit (a²).",
      "Right Zone: Square the units digit (b²).",
      "Middle Zone: Multiply the two digits and Double (2ab).",
      "Clean Up (right to left): Middle and Right can only hold one digit each. Carry extras left."
    ]}
  ],
  examples:[
    {hd:"32²",steps:["L: 3² = 9   M: 2×(3×2) = 12   R: 2² = 4","Map: 9 | 12 | 4","R=4,  M: keep 2 carry 1,  L: 9+1 = 10","<strong>= 1,024</strong>"]},
    {hd:"83²",steps:["L: 8² = 64   M: 2×(8×3) = 48   R: 3² = 9","Map: 64 | 48 | 9","R=9,  M: keep 8 carry 4,  L: 64+4 = 68","<strong>= 6,889</strong>"]},
    {hd:"74²",steps:["L: 7² = 49   M: 2×(7×4) = 56   R: 4² = 16","Map: 49 | 56 | 16","R: keep 6 carry 1,  M: 57 keep 7 carry 5,  L: 49+5 = 54","<strong>= 5,476</strong>"]}
  ],
  qs:[
    {q:"21²",a:"441"},{q:"31²",a:"961"},{q:"13²",a:"169"},
    {q:"22²",a:"484"},{q:"41²",a:"1681"},{q:"34²",a:"1156"},
    {q:"43²",a:"1849"},{q:"62²",a:"3844"},{q:"81²",a:"6561"},
    {q:"52²",a:"2704"},{q:"26²",a:"676"},{q:"38²",a:"1444"},
    {q:"72²",a:"5184"},
    {q:"23²",a:"529"},{q:"33²",a:"1089"},{q:"44²",a:"1936"},
    {q:"71²",a:"5041"},{q:"82²",a:"6724"},{q:"64²",a:"4096"},
    {q:"73²",a:"5329"}
  ],pass:0.8
},
"ch16":{
  goal:"Find the cube root of any perfect cube mentally in under 10 seconds.",
  concepts:[
    {name:"The Cognitive Trap",text:"Your brain assumes that because a number is huge (19,000+), the mental math must be equally huge. It's not. You only need to look at two things."},
    {name:"The Cheat Code — The Endings",text:"You don't need to memorise big numbers. Just watch the last digit of the cube. It's DNA evidence that never lies."},
    {name:"The Copycats",text:"Most digits are loyal: 1³ ends in 1, 4³ ends in 4, 5³ ends in 5, 6³ ends in 6, 9³ ends in 9. Same digit in, same digit out."},
    {name:"The Flippers",text:"2, 3, 7, 8 flip to their partner-to-10: 2↔8, 3↔7. If the cube ends in 2, the root ends in 8. If it ends in 7, the root ends in 3."}
  ],
  methods:[
    {name:"Slash and Solve",steps:[
      "Step 1 — The Tail: Look at the last digit. Apply Copycat or Flipper rule to get the units digit of the answer.",
      "Step 2 — The Slash: Cross out the last THREE digits entirely.",
      "Step 3 — The Head: Find the largest cube that fits in the remaining number.",
      "Step 4 — Merge: Head digit + Tail digit = answer."
    ]}
  ],
  examples:[
    {hd:"∛19,683",steps:["Last digit 3  →  answer ends in 7","Right chunk: 683  →  left: 19","2³=8  <  19  <  27=3³  →  tens digit = 2","<strong>= 27</strong>"]},
    {hd:"∛175,616",steps:["Last digit 6  →  answer ends in 6","Right chunk: 616  →  left: 175","5³=125  <  175  <  216=6³  →  tens digit = 5","<strong>= 56</strong>"]},
    {hd:"∛32,768",steps:["Last digit 8  →  answer ends in 2","Right chunk: 768  →  left: 32","3³=27  <  32  <  64=4³  →  tens digit = 3","<strong>= 32</strong>"]}
  ],
  qs:[
    {q:"Cube root of 13,824",a:"24"},{q:"Cube root of 54,872",a:"38"},
    {q:"Cube root of 9,261",a:"21"},{q:"Cube root of 42,875",a:"35"},
    {q:"Cube root of 103,823",a:"47"},{q:"Cube root of 117,649",a:"49"},
    {q:"Cube root of 24,389",a:"29"},{q:"Cube root of 59,319",a:"39"},
    {q:"Cube root of 148,877",a:"53"},{q:"Cube root of 970,299",a:"99"},
    {q:"Cube root of 10,648",a:"22"},{q:"Cube root of 17,576",a:"26"},
    {q:"Cube root of 29,791",a:"31"},{q:"Cube root of 35,937",a:"33"},
    {q:"Cube root of 46,656",a:"36"},{q:"Cube root of 68,921",a:"41"},
    {q:"Cube root of 79,507",a:"43"},{q:"Cube root of 97,336",a:"46"},
    {q:"Cube root of 140,608",a:"52"},{q:"Cube root of 185,193",a:"57"}
  ],pass:0.8
},
"ch17":{
  goal:"Add, subtract, and compare fractions instantly — without finding common denominators.",
  concepts:[
    {name:"The Cognitive Trap",text:"Highly intelligent adults freeze when they see fractions. The brain is wired for whole numbers. A fraction is a ratio — and adding two different ratios requires matching their grids, which overloads working memory."},
    {name:"The Fix",text:"Stop trying to visualise the grids. Use the Butterfly Method — a pattern that automates the process and never fails."},
    {name:"Under the Hood",text:"The Butterfly is algebra in disguise. It calculates (ad+bc)/bd automatically, guaranteeing the denominator is compatible with both fractions."}
  ],
  methods:[
    {name:"The Butterfly Method",steps:[
      "Wings (Cross-Multiply Up): Draw an X between the fractions. Left Wing = bottom-right × top-left. Right Wing = bottom-left × top-right.",
      "Body (Operate on the Wings): Add wings for addition, subtract for subtraction. This is your new top number (numerator).",
      "Tail (Multiply the Bottoms): Multiply the two denominators straight across. This is your new bottom number (denominator)."
    ]}
  ],
  examples:[
    {hd:"1/3 + 2/5",steps:["Left wing: 5×1 = 5","Right wing: 3×2 = 6","Numerator: 5+6 = 11","Denominator: 3×5 = 15","<strong>= 11/15</strong>"]},
    {hd:"5/8  vs  7/11",steps:["5×11 = 55","7×8 = 56","56 > 55  →  <strong>7/11 is larger</strong>"]},
    {hd:"3/4 − 1/3",steps:["Left wing: 3×3 = 9","Right wing: 1×4 = 4","Numerator: 9−4 = 5","Denominator: 4×3 = 12","<strong>= 5/12</strong>"]}
  ],
  qs:[
    {q:"1/4 + 1/5",a:"9/20"},{q:"1/2 + 1/3",a:"5/6"},{q:"2/3 + 1/4",a:"11/12"},
    {q:"3/5 + 1/2",a:"11/10"},{q:"1/6 + 1/7",a:"13/42"},
    {q:"Compare: 2/3 vs 3/4",a:"3/4 wins"},{q:"Compare: 4/7 vs 5/9",a:"4/7 wins"},
    {q:"Compare: 5/8 vs 6/10",a:"5/8 wins"},{q:"Compare: 1/3 vs 3/10",a:"1/3 wins"},
    {q:"Compare: 7/12 vs 4/7",a:"7/12 wins"},
    {q:"1/3 + 1/4",a:"7/12"},{q:"2/5 + 1/3",a:"11/15"},
    {q:"1/4 + 2/7",a:"15/28"},{q:"3/7 + 1/5",a:"22/35"},
    {q:"1/2 + 1/5",a:"7/10"},
    {q:"Compare: 3/5 vs 5/8",a:"5/8 wins"},{q:"Compare: 2/5 vs 3/8",a:"2/5 wins"},
    {q:"Compare: 3/8 vs 4/11",a:"3/8 wins"},{q:"Compare: 5/7 vs 6/8",a:"6/8 wins"},
    {q:"Compare: 7/10 vs 5/7",a:"5/7 wins"}
  ],pass:0.8
},
"ch18":{
  goal:"Reverse-engineer percentages to find original prices — and spot the Base Rate Fallacy.",
  concepts:[
    {name:"The Base Rate Fallacy",text:"Our brains latch onto the visible number (the final price) and treat it as the base. But percentages are shapeshifters — their value depends on what they're attached to. Adding 10% and subtracting 10% do NOT cancel out."},
    {name:"The LEGO Blocks",text:"Build any percentage from two blocks: the 10% block (move decimal left once) and the 1% block (move decimal left twice). Then assemble."},
    {name:"The Unitary Rule",text:"To reverse a percentage: view the price as stacked equal piles. Find the value of one pile. Scale up to find the whole."}
  ],
  methods:[
    {name:"The Build (Constructing Percentages)",steps:[
      "Find the 10% block: move the decimal one place left.",
      "Find the 1% block: move the decimal two places left.",
      "Double or halve blocks to reach your target percentage.",
      "Assemble: add or subtract your blocks."
    ]},
    {name:"The Reverse Audit (Finding the Original Price)",steps:[
      "Define the Parts: what percentage did you actually pay? Convert to a fraction.",
      "Find One Part: divide the price by the numerator.",
      "Scale Up: multiply by the denominator to find 100%."
    ]}
  ],
  examples:[
    {hd:"18% of $240",steps:["10% = 24","20% = 48","2% = 4.80","18% = 48 − 4.80 = <strong>$43.20</strong>"]},
    {hd:"$88 includes 10% tax — pre-tax?",steps:["$88 = 110% = 11 parts","1 part = 88 ÷ 11 = 8","100% = 10 × 8 = <strong>$80</strong>"]},
    {hd:"$60 after 25% off — original price?",steps:["Paid = 75% = 3 parts","1 part = 60 ÷ 3 = 20","4 parts = 20 × 4 = <strong>$80</strong>"]}
  ],
  qs:[
    {q:"15% of $60",a:"9"},{q:"20% of $85",a:"17"},{q:"2% of $450",a:"9"},
    {q:"60% of $50",a:"30"},{q:"11% of $200",a:"22"},
    {q:"$55 is 110% of what?",a:"50"},{q:"$90 is 75% of what?",a:"120"},
    {q:"$30 is 50% of what?",a:"60"},{q:"$120 is 120% of what?",a:"100"},
    {q:"Paid $16 with 20% discount — original price?",a:"20"},
    {q:"12% of $150",a:"18"},{q:"25% of $120",a:"30"},
    {q:"35% of $60",a:"21"},{q:"8% of $250",a:"20"},
    {q:"110% of $75",a:"82.50"},
    {q:"$36 is 90% of what?",a:"40"},{q:"$48 is 80% of what?",a:"60"},
    {q:"$35 is 70% of what?",a:"50"},
    {q:"Paid $42 with 30% discount — original price?",a:"60"},
    {q:"Paid $25 with 50% discount — original price?",a:"50"}
  ],pass:0.8
},
"ch19":{
  goal:"Understand compound interest exponentially — not linearly — using the Rule of 72.",
  concepts:[
    {name:"The Cognitive Trap",text:"Our brains think linearly (3+3=6) but compound interest is exponential (3→9→27). We underestimate how fast interest grows — both for savings and debt."},
    {name:"The Golden Swap",text:"Memorise this benchmark: at 7% returns, money doubles every ~10 years. At 10% returns, money doubles every ~7 years."},
    {name:"Why 72?",text:"Pure maths uses 69.3, but 72 is the friendly version. It divides cleanly by 1,2,3,4,6,8,9,12,18,24, and 36. We trade less than 1% accuracy for massive speed."}
  ],
  methods:[
    {name:"The Rule of 72",steps:[
      "Identify the annual interest rate.",
      "Divide 72 by that rate.",
      "The result = years to double your money (or debt)."
    ]},
    {name:"Two-Year Compound Sprint",steps:[
      "Use the Base Method (Chapter 8) to square the rate factor.",
      "Example for 8%: square 108.",
      "Surplus is +8. Cross-Add: 108+8=116. Multiply surpluses: 8×8=64.",
      "Result: 16.64% total growth over 2 years."
    ]}
  ],
  examples:[
    {hd:"3.5% savings  vs  12% investment  (24 years)",steps:["3.5%: 72 ÷ 3.5 ≈ 20 yrs to double  →  1× in 24 yrs  →  $20k","12%:  72 ÷ 12  =  6 yrs to double  →  4× in 24 yrs  →  $160k","<strong>Same money, 8.5% difference = 8× the wealth</strong>"]},
    {hd:"Credit card: 24% APR on $2,000",steps:["72 ÷ 24 = 3 years to double","Yr 3: $4,000   Yr 6: $8,000","<strong>$2,000 laptop costs $8,000</strong>"]},
    {hd:"8% return for 2 years",steps:["108² using cross-add method","Left: 108+8 = 116,  Right: 8×8 = 64","<strong>= 116.64%  →  +16.64%</strong>"]}
  ],
  qs:[
    {q:"Rule of 72: Rate 6% — years to double?",a:"12"},{q:"Rule of 72: Rate 8% — years to double?",a:"9"},
    {q:"Rule of 72: Rate 9% — years to double?",a:"8"},{q:"Rule of 72: Rate 12% — years to double?",a:"6"},
    {q:"Rule of 72: Rate 18% — years to double?",a:"4"},
    {q:"2-year compound: 6% per year",a:"12.36%"},{q:"2-year compound: 9% per year",a:"18.81%"},
    {q:"2-year compound: 12% per year",a:"25.44%"},{q:"2-year compound: 5% per year",a:"10.25%"},
    {q:"2-year compound: 10% per year",a:"21%"},
    {q:"Rule of 72: Rate 3% — years to double?",a:"24"},
    {q:"Rule of 72: Rate 4% — years to double?",a:"18"},
    {q:"Rule of 72: Rate 24% — years to double?",a:"3"},
    {q:"Rule of 72: Rate 36% — years to double?",a:"2"},
    {q:"Rule of 72: Rate 72% — years to double?",a:"1"},
    {q:"2-year compound: 3% per year",a:"6.09%"},{q:"2-year compound: 4% per year",a:"8.16%"},
    {q:"2-year compound: 7% per year",a:"14.49%"},{q:"2-year compound: 8% per year",a:"16.64%"},
    {q:"2-year compound: 15% per year",a:"32.25%"}
  ],pass:0.8
}
};
