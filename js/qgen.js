/* ══ QUESTION GENERATOR ═════════════════════════════════════════
   Runs once at boot, expanding each chapter's question pool
   from 20 up to ~50 unique questions.
   All answers are computed — zero chance of typos.
   Called by boot.js after DATA is loaded.
════════════════════════════════════════════════════════════════ */
const QGen = (function(){

  function fmt(n){ return String(n); }
  function fmtMoney(n){ return '$' + (Number.isInteger(n) ? n : n.toFixed(2)); }
  function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a; }

  // Add questions to a chapter without duplicating existing ones
  function addToChapter(chId, newQs){
    const existing = DATA[chId].qs;
    const existingSet = new Set(existing.map(q => q.q));
    const fresh = newQs.filter(q => !existingSet.has(q.q));
    DATA[chId].qs = [...existing, ...shuffle(fresh)];
  }

  function generate(){

    // ── CH01: Adding prices (split dollar + cents) ────────────
    (function(){
      const qs = [];
      const pairs = [
        [1.99,3.50],[2.49,1.75],[4.99,2.25],[6.50,1.99],[3.75,4.25],
        [7.99,1.50],[2.75,5.50],[8.25,3.99],[1.49,6.75],[5.25,2.99],
        [3.99,3.99],[4.50,4.75],[2.25,7.25],[6.99,2.50],[1.75,8.50],
        [9.99,3.25],[5.75,4.99],[3.50,6.25],[7.25,2.75],[4.25,5.50],
        [11.50,3.99],[12.25,4.75],[8.99,5.50],[6.75,7.25],[9.50,4.25],
        [14.99,3.50],[7.50,8.75],[5.99,9.25],[13.25,6.50],[10.75,5.25],
    ];
      pairs.forEach(([a,b]) => {
        const sum = Math.round((a+b)*100)/100;
        qs.push({q:`${fmtMoney(a)} + ${fmtMoney(b)}`, a: fmtMoney(sum)});
      });
      addToChapter('ch01', qs);
    })();

    // ── CH02: Making change (from $10, $20, $50, $100) ────────
    (function(){
      const qs = [];
      const from100 = [15,22,37,48,63,71,84,92,28,44,56,67,73,81,95,
                       19,33,47,58,66,78,85,91,24,39,52,64,76,88,97];
      from100.forEach(spend => {
        const change = 100 - spend;
        qs.push({q:`$100 − $${spend}`, a: `$${change}`});
      });
      const from50 = [8,13,17,22,27,31,36,39,43,47,
                      9,14,18,23,28,32,37,41,44,48];
      from50.forEach(spend => {
        const change = 50 - spend;
        qs.push({q:`$50 − $${spend}`, a: `$${change}`});
      });
      addToChapter('ch02', qs);
    })();

    // ── CH03: ×2 ×4 ×8 ÷2 ÷4 ×5 ────────────────────────────
    (function(){
      const qs = [];
      [12,15,16,18,22,24,25,32,35,36,44,45,48,55,64,75,85,95,
       13,17,21,26,28,34,38,42,46,52,56,62,68,72,78,88].forEach(n => {
        qs.push({q:`${n} × 2`, a: fmt(n*2)});
        qs.push({q:`${n*2} ÷ 2`, a: fmt(n)});
      });
      [12,14,16,18,22,24,28,32,36,44,48,52,56,64,72,76,84,92,96].forEach(n => {
        qs.push({q:`${n} × 4`, a: fmt(n*4)});
        qs.push({q:`${n*4} ÷ 4`, a: fmt(n)});
      });
      [12,14,16,18,22,24,26,28,32,34,36,42,44,46,52,54,56,62].forEach(n => {
        qs.push({q:`${n} × 5`, a: fmt(n*5)});
      });
      addToChapter('ch03', qs);
    })();

    // ── CH04: Digital roots ───────────────────────────────────
    (function(){
      const qs = [];
      const root = n => { let r=n%9; return r===0&&n>0?9:r; };
      [47,58,63,74,85,96,123,234,345,456,567,678,789,891,
       1234,2345,3456,4567,5678,6789,7891,8912,9123,
       999,888,777,666,555,444,333,222,111,
       1999,2888,3777,4666,5555].forEach(n => {
        qs.push({q:`Digital root of ${n.toLocaleString()}`, a: fmt(root(n))});
      });
      addToChapter('ch04', qs);
    })();

    // ── CH05: × 11 ────────────────────────────────────────────
    (function(){
      const qs = [];
      for(let n=12; n<=99; n++){
        if(n%11===0) continue;
        const ans = n * 11;
        qs.push({q:`${n} × 11`, a: fmt(ans)});
      }
      addToChapter('ch05', qs);
    })();

    // ── CH06: × 15 and × 12 ──────────────────────────────────
    (function(){
      const qs = [];
      [4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,40,
       44,48,50,52,54,56,60,64,66,70,72,80].forEach(n => {
        qs.push({q:`${n} × 15`, a: fmt(n*15)});
        qs.push({q:`${n} × 12`, a: fmt(n*12)});
      });
      addToChapter('ch06', qs);
    })();

    // ── CH07: Near 100 below (cross-subtract) ────────────────
    (function(){
      const qs = [];
      const pairs = [];
      for(let a=91; a<=99; a++)
        for(let b=a; b<=99; b++)
          pairs.push([a,b]);
      shuffle(pairs).slice(0,50).forEach(([a,b]) => {
        qs.push({q:`${a} × ${b}`, a: fmt(a*b)});
      });
      addToChapter('ch07', qs);
    })();

    // ── CH08: Near 100 above (cross-add) ─────────────────────
    (function(){
      const qs = [];
      const pairs = [];
      for(let a=101; a<=115; a++)
        for(let b=a; b<=115; b++)
          pairs.push([a,b]);
      shuffle(pairs).slice(0,50).forEach(([a,b]) => {
        qs.push({q:`${a} × ${b}`, a: fmt(a*b)});
      });
      addToChapter('ch08', qs);
    })();

    // ── CH09: Split & merge (2-digit × 1-digit) ──────────────
    (function(){
      const qs = [];
      for(let a=21; a<=99; a++)
        for(let b=3; b<=9; b++)
          qs.push({q:`${a} × ${b}`, a: fmt(a*b)});
      addToChapter('ch09', shuffle(qs).slice(0,60));
    })();

    // ── CH10: Crisscross (2-digit × 2-digit) ─────────────────
    (function(){
      const qs = [];
      const pairs = [];
      for(let a=11; a<=39; a++)
        for(let b=a; b<=39; b++)
          if(a!==b) pairs.push([a,b]);
      shuffle(pairs).slice(0,60).forEach(([a,b]) => {
        qs.push({q:`${a} × ${b}`, a: fmt(a*b)});
      });
      addToChapter('ch10', qs);
    })();

    // ── CH11: Short division ──────────────────────────────────
    (function(){
      const qs = [];
      [[2,3],[3,4],[4,5],[6,7],[8,9]].forEach(([d1,d2]) => {
        for(let q=11; q<=50; q++){
          if(Number.isInteger(q/d1))
            qs.push({q:`${q*d1} ÷ ${d1}`, a: fmt(q)});
          if(Number.isInteger(q/d2))
            qs.push({q:`${q*d2} ÷ ${d2}`, a: fmt(q)});
        }
      });
      addToChapter('ch11', shuffle(qs).slice(0,60));
    })();

    // ── CH12: Smart division ──────────────────────────────────
    (function(){
      const qs = [];
      // ÷5 using double-then-÷10
      for(let n=3; n<=50; n++){
        qs.push({q:`${n*5} ÷ 5`, a: fmt(n)});
      }
      // ÷6 using halve-then-÷3
      for(let n=3; n<=30; n++){
        qs.push({q:`${n*6} ÷ 6`, a: fmt(n)});
      }
      // ÷ 7 approximation isn't clean, skip
      addToChapter('ch12', shuffle(qs).slice(0,50));
    })();

    // ── CH13: Squares ending in 5 ────────────────────────────
    (function(){
      const qs = [];
      for(let n=5; n<=145; n+=10){
        qs.push({q:`${n}²`, a: fmt(n*n)});
      }
      addToChapter('ch13', qs);
    })();

    // ── CH14: Squares near 50 ────────────────────────────────
    (function(){
      const qs = [];
      for(let n=41; n<=59; n++){
        if(n===50) continue;
        qs.push({q:`${n}²`, a: fmt(n*n)});
      }
      addToChapter('ch14', qs);
    })();

    // ── CH15: Duplex (2-digit squares) ───────────────────────
    (function(){
      const qs = [];
      for(let n=11; n<=99; n++){
        qs.push({q:`${n}²`, a: fmt(n*n)});
      }
      // Filter out those already covered by ch13 (ending in 5)
      const fresh = qs.filter(q => !q.q.endsWith('5²'));
      addToChapter('ch15', shuffle(fresh).slice(0,55));
    })();

    // ── CH16: Cube roots ─────────────────────────────────────
    (function(){
      const qs = [];
      for(let n=2; n<=20; n++){
        const cube = n*n*n;
        qs.push({q:`∛${cube.toLocaleString()}`, a: fmt(n)});
      }
      addToChapter('ch16', qs);
    })();

    // ── CH17: Fractions ──────────────────────────────────────
    (function(){
      const qs = [];
      const gcd = (a,b) => b===0?a:gcd(b,a%b);
      const simplify = (n,d) => { const g=gcd(Math.abs(n),d); return [n/g,d/g]; };
      const pairs = [[1,2,1,3],[1,3,1,4],[1,2,1,4],[2,3,1,4],[3,4,1,3],
                     [1,5,1,4],[2,5,1,3],[3,5,2,3],[1,6,1,4],[5,6,1,4],
                     [1,2,2,5],[3,4,2,5],[1,3,2,7],[4,5,1,6],[3,8,1,4]];
      pairs.forEach(([n1,d1,n2,d2]) => {
        const rn = n1*d2 + n2*d1, rd = d1*d2;
        const [sn,sd] = simplify(rn,rd);
        qs.push({q:`${n1}/${d1} + ${n2}/${d2}`, a:`${sn}/${sd}`});
        if(n1*d2 > n2*d1){
          const [dn,dd] = simplify(n1*d2-n2*d1, rd);
          qs.push({q:`${n1}/${d1} − ${n2}/${d2}`, a:`${dn}/${dd}`});
        }
      });
      addToChapter('ch17', qs);
    })();

    // ── CH18: Percentages ────────────────────────────────────
    (function(){
      const qs = [];
      [[10,50],[10,80],[10,120],[10,250],[10,500],
       [15,60],[15,80],[15,100],[15,200],[15,40],
       [20,45],[20,60],[20,85],[20,120],[20,250],
       [25,80],[25,120],[25,200],[25,60],[25,40],
       [5,80],[5,120],[5,200],[5,60],[5,40],
       [30,90],[30,120],[30,60],[30,200],[30,50]
      ].forEach(([pct,base]) => {
        const ans = Math.round(pct/100*base*100)/100;
        qs.push({q:`${pct}% of ${base}`, a: Number.isInteger(ans)?fmt(ans):ans.toFixed(2)});
      });
      addToChapter('ch18', qs);
    })();

    // ── CH19: Rule of 72 & compound growth ───────────────────
    (function(){
      const qs = [];
      [2,3,4,6,8,9,12,18,24,36,72].forEach(r => {
        const yrs = Math.round(72/r);
        qs.push({q:`Rule of 72: ${r}% → double in?`, a:`${yrs} years`});
      });
      [[4,2],[6,2],[8,2],[10,2],[12,3],[6,3],[4,3],[8,3]].forEach(([r,n]) => {
        const factor = Math.pow(1+r/100, n);
        const ans = (factor*100 - 100).toFixed(2);
        qs.push({q:`${r}% for ${n} year${n>1?'s':''} = ?% total growth`, a:`${ans}%`});
      });
      addToChapter('ch19', qs);
    })();

  }

  return { generate };
})();
