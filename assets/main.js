/* Shared header, footer, illustrations and small interactions */
(function () {
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}

  const page = document.body.dataset.page || 'home';
  const LOGO = `<svg viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b5fff"/><stop offset="1" stop-color="#00b3a4"/></linearGradient></defs><rect width="40" height="40" rx="10" fill="url(#lg)"/><path d="M8 28 L20 9 L32 28" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 22h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="20" cy="9" r="2.6" fill="#ffb347"/></svg>`;
  const links = [
    ['home', 'index.html', 'Home'],
    ['research', 'research.html', 'Research'],
    ['people', 'people.html', 'People'],
    ['publications', 'publications.html', 'Publications'],
    ['join', 'join.html', 'Join Us'],
  ];
  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `<div class="wrap nav">
      <a class="logo" href="index.html">${LOGO}<span>Intelligent Autonomous Systems Lab</span></a>
      <div style="display:flex;gap:8px;align-items:center">
        <ul class="nav-links" id="nav-links">${links.map(([k, h, t]) => `<li><a href="${h}" class="${k === page ? 'active' : ''}">${t}</a></li>`).join('')}</ul>
        <button class="icon-btn" id="theme-btn" aria-label="Toggle dark mode">◐</button>
        <button class="icon-btn menu-btn" id="menu-btn" aria-label="Menu">☰</button>
      </div></div>`;
    document.getElementById('menu-btn').onclick = () => document.getElementById('nav-links').classList.toggle('open');
    document.getElementById('theme-btn').onclick = () => {
      const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    };
  }
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `<div class="wrap"><div class="foot">
      <div><a class="logo" href="index.html" style="color:#fff">${LOGO}<span>Intelligent Autonomous Systems Lab</span></a>
        <p style="margin-top:12px;max-width:420px">Control, estimation and coordination for autonomous ground and aerial vehicles — from self-driving cars to bio-inspired flapping-wing drones.</p></div>
      <div><h4>Explore</h4><ul>${links.map(([, h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><h4>Contact</h4><ul>
        <li><a href="mailto:khanhhieutdh@gmail.com">khanhhieutdh@gmail.com</a></li>
        <li><a href="https://scholar.google.com/citations?user=rVbKC80AAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a></li>
        <li>Ho Chi Minh City University of Technology (HCMUT)<br>VNU-HCM, Ho Chi Minh City, Vietnam</li></ul></div>
      </div><div class="copy">© ${new Date().getFullYear()} Intelligent Autonomous Systems Lab. All rights reserved.</div></div>`;
  }

  /* ---------- Illustrations (inline SVG, drawn on dark backgrounds) ---------- */
  const C = { t: '#2fd3c3', b: '#5b9bff', o: '#ffb347', w: '#e7edf7', d: '#3a4f75' };
  const quad = (x, y, s = 1, col = C.w) => `<g transform="translate(${x} ${y}) scale(${s})">
    <line x1="-26" y1="0" x2="26" y2="0" stroke="${col}" stroke-width="4" stroke-linecap="round"/>
    <rect x="-10" y="-7" width="20" height="12" rx="4" fill="${col}"/>
    <ellipse cx="-26" cy="-6" rx="16" ry="3" fill="${C.t}" opacity=".85"/><ellipse cx="26" cy="-6" rx="16" ry="3" fill="${C.t}" opacity=".85"/>
    <line x1="-26" y1="-6" x2="-26" y2="0" stroke="${col}" stroke-width="3"/><line x1="26" y1="-6" x2="26" y2="0" stroke="${col}" stroke-width="3"/></g>`;
  const car = (x, y, r = 0, col = C.b) => `<g transform="translate(${x} ${y}) rotate(${r})">
    <rect x="-13" y="-22" width="26" height="44" rx="7" fill="${col}"/><rect x="-10" y="-12" width="20" height="10" rx="2" fill="#0b1830" opacity=".7"/>
    <rect x="-10" y="8" width="20" height="7" rx="2" fill="#0b1830" opacity=".7"/></g>`;
  const ART = {
    av: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"><rect width="400" height="300" fill="none"/>
      <path d="M120 300 L180 0 M280 300 L220 0" stroke="${C.d}" stroke-width="3"/><path d="M200 300 L200 0" stroke="${C.w}" stroke-width="3" stroke-dasharray="16 16" opacity=".5"/>
      ${[40, 70, 100, 130].map((r, i) => `<path d="M${165 - r} ${190 - r * .9} A${r} ${r} 0 0 1 ${165 + r} ${190 - r * .9}" fill="none" stroke="${C.t}" stroke-width="2" opacity="${.8 - i * .17}"/>`).join('')}
      <path d="M165 190 L120 80 L210 80 Z" fill="${C.t}" opacity=".12"/>
      ${car(165, 200, 0, C.b)}${car(235, 90, 0, '#7a8aa8')}
      <rect x="225" y="62" width="22" height="55" fill="none" stroke="${C.o}" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="252" y="70" fill="${C.o}" font-size="11" font-family="monospace">car 0.97</text></svg>`,
    intersection: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect x="150" y="0" width="100" height="300" fill="#0a1426"/><rect x="0" y="100" width="400" height="100" fill="#0a1426"/>
      <path d="M200 0V100M200 200V300M0 150H150M250 150H400" stroke="${C.w}" stroke-width="2" stroke-dasharray="10 10" opacity=".45"/>
      <rect x="150" y="100" width="100" height="100" fill="${C.t}" opacity=".08" stroke="${C.t}" stroke-dasharray="5 5"/>
      <path d="M225 290 C225 200 225 175 400 175" fill="none" stroke="${C.o}" stroke-width="2.5" stroke-dasharray="6 5"/>
      <path d="M175 10 C175 110 175 125 0 125" fill="none" stroke="${C.t}" stroke-width="2.5" stroke-dasharray="6 5"/>
      <path d="M10 175 H390" fill="none" stroke="${C.b}" stroke-width="2.5" stroke-dasharray="6 5"/>
      ${car(225, 255, 0, C.o)}${car(175, 45, 180, C.t)}${car(60, 175, 90, C.b)}${car(340, 125, -90, '#7a8aa8')}
      <circle cx="200" cy="150" r="18" fill="#0b1830" stroke="${C.w}" stroke-width="2"/><path d="M193 150h14M200 143v14" stroke="${C.w}" stroke-width="2"/>
      ${[[225, 255], [175, 45], [60, 175], [340, 125]].map(([x, y]) => `<line x1="${x}" y1="${y}" x2="200" y2="150" stroke="${C.w}" stroke-width="1" opacity=".35" stroke-dasharray="2 4"/>`).join('')}</svg>`,
    manip: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      ${quad(200, 90, 2.1)}
      <path d="M200 102 L200 140 L245 180 L245 205" fill="none" stroke="${C.o}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="200" cy="140" r="7" fill="${C.w}"/><circle cx="245" cy="180" r="7" fill="${C.w}"/>
      <path d="M232 205 h26 M232 205 v16 M258 205 v16" stroke="${C.w}" stroke-width="5" stroke-linecap="round"/>
      <rect x="235" y="215" width="20" height="20" rx="3" fill="${C.t}"/>
      <path d="M80 270 H330" stroke="${C.d}" stroke-width="3"/>
      <path d="M150 60 q-20 -20 0 -40 M250 60 q20 -20 0 -40" stroke="${C.t}" fill="none" stroke-width="2" opacity=".5"/></svg>`,
    swarm: (() => {
      const P = [[90, 80], [200, 55], [310, 85], [130, 170], [270, 170], [200, 245], [60, 240], [340, 240]];
      const E = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5], [3, 6], [4, 7], [5, 6], [5, 7]];
      return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        ${E.map(([a, b]) => `<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="${C.t}" stroke-width="1.5" stroke-dasharray="4 4" opacity=".6"/>`).join('')}
        ${P.map(([x, y], i) => quad(x, y, .75, i === 1 ? C.o : C.w)).join('')}
        <circle cx="200" cy="55" r="34" fill="none" stroke="${C.o}" stroke-width="1.5" opacity=".6"/></svg>`;
    })(),
    bio: `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <g opacity=".35"><path d="M200 140 C150 60 70 50 40 80 C80 110 150 130 200 150Z" fill="${C.t}"/><path d="M200 140 C250 60 330 50 360 80 C320 110 250 130 200 150Z" fill="${C.t}"/></g>
      <path d="M200 145 C150 190 70 210 45 190 C80 160 150 150 200 150Z" fill="${C.b}" opacity=".9"/>
      <path d="M200 145 C250 190 330 210 355 190 C320 160 250 150 200 150Z" fill="${C.b}" opacity=".9"/>
      <path d="M60 85 Q30 140 50 190 M340 85 Q370 140 350 190" fill="none" stroke="${C.o}" stroke-width="2" stroke-dasharray="5 5"/>
      <rect x="190" y="120" width="20" height="70" rx="8" fill="${C.w}"/>
      <circle cx="200" cy="125" r="6" fill="${C.o}"/>
      <text x="20" y="285" fill="${C.t}" font-size="12" font-family="monospace">tailless flapping-wing MAV · T-S fuzzy control</text></svg>`,
  };
  document.querySelectorAll('[data-art]').forEach(el => { el.innerHTML = ART[el.dataset.art] || ''; });

  /* reveal on scroll */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  /* hero: animated network of agents (vehicles & drones) */
  const cv = document.getElementById('hero-canvas');
  if (cv && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = cv.getContext('2d');
    let W, H, pts;
    const init = () => {
      W = cv.width = cv.offsetWidth * devicePixelRatio; H = cv.height = cv.offsetHeight * devicePixelRatio;
      const n = Math.min(70, Math.floor(W * H / 22000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .5 * devicePixelRatio, vy: (Math.random() - .5) * .5 * devicePixelRatio }));
    };
    const step = () => {
      ctx.clearRect(0, 0, W, H);
      const R = 140 * devicePixelRatio;
      for (const p of pts) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1; }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < R) { ctx.strokeStyle = `rgba(47,211,195,${(1 - d / R) * .45})`; ctx.lineWidth = devicePixelRatio; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      ctx.fillStyle = '#9cc3ff';
      for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 2.2 * devicePixelRatio, 0, 7); ctx.fill(); }
      requestAnimationFrame(step);
    };
    init(); addEventListener('resize', init); step();
  }

  /* publication filter */
  document.querySelectorAll('.filter button').forEach(btn => btn.onclick = () => {
    document.querySelectorAll('.filter button').forEach(b => b.classList.toggle('on', b === btn));
    const f = btn.dataset.f;
    document.querySelectorAll('.pub').forEach(li => li.style.display = (f === 'all' || li.dataset.type === f) ? '' : 'none');
  });
})();
