/* Renders header, footer and page content from assets/data.js */
(function () {
  const L = window.LAB, root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) {}
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- icons (lucide-style paths) ---------- */
  const P = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    brief: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    board: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>',
    chev: '<path d="m6 9 6 6 6-6"/>', menu: '<path d="M4 6h16M4 12h16M4 18h16"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
    ext: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
    filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>', back: '<path d="m15 18-6-6 6-6"/>', heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/>',
    car: '<path d="M19 17h2v-4l-2.7-5.4A2 2 0 0 0 16.5 6h-9a2 2 0 0 0-1.8 1.1L3 13v4h2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M3 13h18M9.5 17h5"/>',
    cross: '<path d="M9 2v7H2M15 2v7h7M9 22v-7H2M15 22v-7h7"/><circle cx="12" cy="12" r="1.5"/>',
    arm: '<path d="M4 6h16"/><path d="M12 6v4l5 4v4"/><circle cx="12" cy="10" r="1.5"/><circle cx="17" cy="14" r="1.5"/><path d="M14 18h6M14 18v3M20 18v3"/><ellipse cx="5" cy="4" rx="3" ry="1"/><ellipse cx="19" cy="4" rx="3" ry="1"/>',
    network: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M10.8 7.2 6.2 16.8M13.2 7.2l4.6 9.6M7.5 19h9"/>',
    wing: '<path d="M12 6v14"/><path d="M12 8C9 3 4 3 2 5c2 3 6 5 10 5M12 8c3-5 8-5 10-3-2 3-6 5-10 5"/><path d="M12 12c-3 1-6 4-7 7 3 0 6-2 7-4M12 12c3 1 6 4 7 7-3 0-6-2-7-4"/>',
  };
  const I = (n, cls = 'i') => `<svg class="${cls}" viewBox="0 0 24 24">${P[n] || ''}</svg>`;

  /* ---------- header ---------- */
  const page = document.body.dataset.page;
  const NAV = [
    ['people', 'People', 'users', 'people.html', [['Professor', 'people.html#professor'], ['Members', 'people.html#members'], ['Alumni', 'people.html#alumni']]],
    ['research', 'Research', 'book', 'research.html', RESEARCH.map(r => [r.title, 'research.html#' + r.id])],
    ['projects', 'Projects', 'brief', 'projects.html', [['Ongoing', 'projects.html#ongoing'], ['Completed', 'projects.html#completed']]],
    ['publications', 'Publications', 'cap', 'publications.html', [['All Publications', 'publications.html#all'], ['International Journal', 'publications.html#ij'], ['International Conference', 'publications.html#ic'], ['Domestic Journal', 'publications.html#dj'], ['Domestic Conference', 'publications.html#dc']]],
    ['board', 'Board', 'board', 'board.html', [['News', 'board.html#news'], ['Research Equipment', 'board.html#equipment']]],
    ['contact', 'Contact', 'mail', 'contact.html', null],
  ];
  const hdr = $('#hdr');
  hdr.className = 'hdr' + (page === 'home' ? '' : ' always');
  hdr.innerHTML = `<div class="wrap"><a class="brand" href="index.html">${L.short} <span>LAB</span></a>
    <div style="display:flex;align-items:center;gap:6px">
    <ul class="menu" id="menu">${NAV.map(([k, t, ic, h, sub]) => `<li><a href="${h}" class="${k === page ? 'on' : ''}">${I(ic)}${t}${sub ? I('chev', 'i chev') : ''}</a>
      ${sub ? `<ul class="dd">${sub.map(([a, b]) => `<li><a href="${b}">${esc(a)}</a></li>`).join('')}</ul>` : ''}</li>`).join('')}</ul>
    <button class="ibtn" id="theme" aria-label="Toggle theme"></button>
    <button class="ibtn burger" id="burger" aria-label="Menu">${I('menu')}</button></div></div>`;
  const setThemeIcon = () => { $('#theme').innerHTML = I(root.dataset.theme === 'dark' ? 'sun' : 'moon'); };
  setThemeIcon();
  $('#theme').onclick = () => { root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {} setThemeIcon(); };
  $('#burger').onclick = () => { const m = $('#menu'); m.classList.toggle('open'); $('#burger').innerHTML = I(m.classList.contains('open') ? 'x' : 'menu'); };
  $('#menu').addEventListener('click', e => { if (e.target.closest('.dd a')) { $('#menu').classList.remove('open'); $('#burger').innerHTML = I('menu'); } });
  if (page === 'home') { const f = () => hdr.classList.toggle('solid', scrollY > 40); addEventListener('scroll', f); f(); }

  /* ---------- footer ---------- */
  $('#ftr').className = 'ftr';
  $('#ftr').innerHTML = `<div class="wrap"><div class="flogo side">${L.short} <span>LAB</span></div>
    <div class="mid"><b>${esc(L.name)}</b><div class="ln"><span>${I('pin')}${esc(L.address)}</span><span>${I('mail')}<a href="mailto:${L.email}">${L.email}</a></span><span>${I('cap')}<a href="${L.scholar}" target="_blank" rel="noopener">Google Scholar</a></span></div>
    <div class="cp">© ${new Date().getFullYear()} ${L.short} Lab. All rights reserved.</div></div><div class="flogo side" style="visibility:hidden">${L.short} <span>LAB</span></div></div>`;

  /* ---------- illustrations ---------- */
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


  /* ---------- tabs helper (hash-driven) ---------- */
  function tabs(el, items, render, def) {
    const pick = () => { const h = location.hash.slice(1); return items.some(i => i[0] === h) ? h : def; };
    const draw = () => {
      const cur = pick();
      el.innerHTML = items.map(([k, t, ic]) => `<button data-k="${k}" class="${k === cur ? 'on' : ''}">${ic ? I(ic) : ''}${esc(t)}</button>`).join('');
      render(cur);
    };
    el.onclick = e => { const b = e.target.closest('button'); if (b) { history.replaceState(null, '', '#' + b.dataset.k); draw(); } };
    addEventListener('hashchange', draw); draw();
  }
  const title = (t, sub) => `<div class="title fade"><h1>${t}</h1>${sub ? `<p>${sub}</p>` : ''}<div class="bar"></div></div>`;

  /* ---------- pages ---------- */
  const R = {
    home() {
      $('#areas').innerHTML = RESEARCH.map(r => `<a class="card fade" href="research.html#${r.id}"><div class="ico">${I(r.icon)}</div><h3>${esc(r.title)}</h3><p>${esc(r.short)}</p></a>`).join('');
      $('#hero-p').textContent = L.tagline;
      const posts = [...POSTS].filter(p => p.board === 'news').sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
      $('#latest').innerHTML = posts.map(p => `<tr class="link" data-href="board.html?post=${POSTS.indexOf(p)}"><td>${esc(p.title)}</td><td class="mut">${I('cal')}${p.date}</td></tr>`).join('');
    },
    people() {
      const box = $('#content'), P0 = PROFESSOR;
      tabs($('#tabs'), [['professor', 'Professor', 'user'], ['members', 'Members', 'users'], ['alumni', 'Alumni', 'cap']], k => {
        if (k === 'professor') box.innerHTML = `<div class="prof"><div class="prof-top">
          <div class="photo">${P0.photo ? `<img src="${P0.photo}" alt="${esc(P0.name)}">` : P0.initials}</div>
          <div style="flex:1;min-width:260px"><h2>${esc(P0.name)} <small>${esc(P0.native)}</small></h2><div class="role">${esc(P0.title)}</div>
            <div class="contact-line"><span class="c">${I('mail')}</span><a href="mailto:${P0.email}" style="color:inherit">${P0.email}</a></div>
            <div class="contact-line"><span class="c">${I('phone')}</span>${esc(P0.phone)}</div>
            <div class="contact-line"><span class="c">${I('pin')}</span>${esc(P0.office)}</div>
            <div class="pills">${P0.links.map(([t, h]) => `<a class="pill" href="${h}" target="_blank" rel="noopener">${t}</a>`).join('')}</div></div></div>
          <div class="blk"><div class="blk-h"><span class="c">${I('book')}</span><h3>Research Interests</h3></div><ul class="dots">${P0.interests.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
          <div class="blk"><div class="blk-h"><span class="c">${I('cap')}</span><h3>Education</h3></div><div class="edu">${P0.education.map(([d, y, m, n]) => `<div class="edu-it"><div class="h"><b>${d}</b><span class="yr">${y}</span></div><div>${esc(m)}</div>${n ? `<div class="note">${esc(n)}</div>` : ''}</div>`).join('')}</div></div>
          <div class="blk"><div class="blk-h"><span class="c">${I('brief')}</span><h3>Employment</h3></div><div class="emp">${P0.employment.map(([d, t]) => `<div><span class="d">${d}</span><span>${esc(t)}</span></div>`).join('')}</div></div></div>`;
        else {
          const list = k === 'members' ? MEMBERS : ALUMNI;
          box.innerHTML = list.length ? `<div class="members">${list.map(m => `<div class="card member"><div class="av">${m.photo ? `<img src="${m.photo}" alt="">` : esc(m.name.split(' ').map(w => w[0]).join('').slice(0, 2))}</div><h3>${esc(m.name)}</h3><div class="r">${esc(m.role || (m.degree + ' ' + m.year))}</div><p>${esc(m.area || m.now || '')}</p>${m.email ? `<p><a href="mailto:${m.email}">${m.email}</a></p>` : ''}</div>`).join('')}</div>`
            : `<div class="empty">${k === 'members' ? `Positions for M.S./Ph.D. students and undergraduate researchers are open from January 2027. <a href="contact.html">Details</a>` : 'To be updated.'}</div>`;
        }
      }, 'professor');
    },
    research() {
      const box = $('#content');
      tabs($('#tabs'), RESEARCH.map(r => [r.id, r.title]), k => {
        const r = RESEARCH.find(x => x.id === k);
        box.innerHTML = `<div class="rpanel"><div class="fig">${ART[r.art].replace("slice", "meet")}</div><div class="body"><h2>${esc(r.title)}</h2>
          <h4>Overview</h4><p>${esc(r.overview)}</p>${r.topics.map(([h, t]) => `<h4>${esc(h)}</h4><p>${esc(t)}</p>`).join('')}</div></div>`;
      }, RESEARCH[0].id);
    },
    projects() {
      const box = $('#content');
      tabs($('#tabs'), [['ongoing', 'Ongoing', 'layers'], ['completed', 'Completed', 'brief']], k => {
        const list = PROJECTS.filter(p => p.status === k);
        box.innerHTML = list.length ? `<table class="tbl"><thead><tr><th>Project Name</th><th>Content</th><th>Funding Agency</th><th>Period</th></tr></thead><tbody>${list.map(p => `<tr><td><b>${esc(p.name)}</b></td><td class="mut" style="white-space:normal">${esc(p.content || '-')}</td><td>${esc(p.agency)}</td><td class="mut">${esc(p.period)}</td></tr>`).join('')}</tbody></table>` : '<div class="empty">To be updated.</div>';
      }, 'ongoing');
    },
    publications() {
      const box = $('#content'), sel = $('#year'), T = { ij: 'Int. Journal', ic: 'Int. Conference', dj: 'Dom. Journal', dc: 'Dom. Conference' };
      const years = [...new Set(PUBS.map(p => p.y))].sort((a, b) => b - a);
      sel.innerHTML = '<option value="">All years</option>' + years.map(y => `<option>${y}</option>`).join('');
      $('#stats').innerHTML = [['Total', PUBS.length], ...Object.entries(T).map(([k, t]) => [t, PUBS.filter(p => p.type === k).length])].map(([t, n]) => `<div class="stat"><b>${n}</b><span>${t}</span></div>`).join('');
      let cur = 'all';
      const draw = () => {
        const list = PUBS.filter(p => (cur === 'all' || p.type === cur) && (!sel.value || p.y == sel.value));
        const ys = [...new Set(list.map(p => p.y))].sort((a, b) => b - a);
        box.innerHTML = ys.length ? ys.map(y => `<div class="yr-h"><b>${y}</b></div>` + list.filter(p => p.y === y).map(p => `<div class="pub"><span class="d">${I('file')}</span><div><div class="t">${esc(p.title)}<span class="badge">${T[p.type]}</span></div><div class="a">${esc(p.authors).replace('K. H. Nguyen', '<b style="color:var(--ink)">K. H. Nguyen</b>')}</div><div class="v">${esc(p.venue)}</div></div>${p.link ? `<a class="x tagx" href="${p.link}" target="_blank" rel="noopener">DOI ${I('ext')}</a>` : ''}</div>`).join('')).join('') : '<div class="empty">No publications.</div>';
      };
      tabs($('#tabs'), [['all', 'All', 'layers'], ['ij', 'Int. Journal', 'globe'], ['ic', 'Int. Conference', 'globe'], ['dj', 'Dom. Journal', 'pin'], ['dc', 'Dom. Conference', 'pin']], k => { cur = k; draw(); }, 'all');
      sel.onchange = draw;
    },
    board() {
      const box = $('#content'), q = new URLSearchParams(location.search).get('post');
      if (q !== null && POSTS[q]) {
        const p = POSTS[q];
        $('#tabs').style.display = 'none';
        box.innerHTML = `<article class="post"><h2>${esc(p.title)}</h2><div class="meta"><span>${I('user')}${esc(p.author)}</span><span>${I('cal')}${p.date}</span></div><div>${p.body}</div></article>
          <p style="margin-top:24px"><a class="btn ghost" href="board.html#${p.board}">${I('back')}Back to list</a></p>`;
        return;
      }
      tabs($('#tabs'), [['news', 'News', 'msg'], ['equipment', 'Research Equipment', 'tool']], k => {
        const list = POSTS.map((p, i) => ({ ...p, i })).filter(p => p.board === k).sort((a, b) => b.date.localeCompare(a.date));
        box.innerHTML = list.length ? `<table class="tbl"><thead><tr><th class="no">No.</th><th>Title</th><th>Author</th><th>Date</th></tr></thead><tbody>${list.map((p, n) => `<tr class="link" data-href="board.html?post=${p.i}"><td class="no">${list.length - n}</td><td>${esc(p.title)}</td><td class="mut">${I('user')}${esc(p.author)}</td><td class="mut">${I('cal')}${p.date}</td></tr>`).join('')}</tbody></table>` : '<div class="empty">No posts yet.</div>';
      }, 'news');
    },
    contact() {},
  };
  (R[page] || (() => {}))();
  document.addEventListener('click', e => { const tr = e.target.closest('tr[data-href]'); if (tr) location.href = tr.dataset.href; });

  /* ---------- reveal ---------- */
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: .1 }) : null;
  document.querySelectorAll('.fade').forEach(el => io ? io.observe(el) : el.classList.add('show'));

  /* ---------- hero animation: roads with cars + cooperating drones ---------- */
  const cv = $('#hero-canvas');
  if (cv && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = cv.getContext('2d'); let W, H, D, roads, cars, drones;
    const init = () => {
      D = devicePixelRatio || 1; W = cv.width = cv.offsetWidth * D; H = cv.height = cv.offsetHeight * D;
      const g = 260 * D; roads = [];
      for (let x = g / 2; x < W; x += g) roads.push({ v: 1, p: x });
      for (let y = g / 2; y < H; y += g) roads.push({ v: 0, p: y });
      cars = Array.from({ length: 26 }, () => { const r = roads[Math.random() * roads.length | 0]; return { r, t: Math.random() * (r.v ? H : W), s: (Math.random() < .5 ? -1 : 1) * (0.6 + Math.random()) * D }; });
      drones = Array.from({ length: 9 }, (_, i) => ({ a: i / 9 * 6.28, r: (90 + (i % 3) * 50) * D }));
    };
    let T = 0;
    const step = () => {
      T += .004; ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(100,140,200,.10)'; ctx.lineWidth = 18 * D;
      roads.forEach(r => { ctx.beginPath(); r.v ? (ctx.moveTo(r.p, 0), ctx.lineTo(r.p, H)) : (ctx.moveTo(0, r.p), ctx.lineTo(W, r.p)); ctx.stroke(); });
      ctx.strokeStyle = 'rgba(148,163,184,.12)'; ctx.lineWidth = D; ctx.setLineDash([8 * D, 10 * D]);
      roads.forEach(r => { ctx.beginPath(); r.v ? (ctx.moveTo(r.p, 0), ctx.lineTo(r.p, H)) : (ctx.moveTo(0, r.p), ctx.lineTo(W, r.p)); ctx.stroke(); });
      ctx.setLineDash([]);
      cars.forEach(c => {
        const L = c.r.v ? H : W; c.t = (c.t + c.s + L) % L;
        const off = (c.s > 0 ? 4 : -4) * D, x = c.r.v ? c.r.p + off : c.t, y = c.r.v ? c.t : c.r.p + off;
        ctx.fillStyle = 'rgba(96,165,250,.55)'; const w = (c.r.v ? 6 : 12) * D, h = (c.r.v ? 12 : 6) * D; ctx.fillRect(x - w / 2, y - h / 2, w, h);
        ctx.fillStyle = 'rgba(96,165,250,.08)'; ctx.beginPath(); ctx.arc(x, y, 16 * D, 0, 7); ctx.fill();
      });
      const cx = W * .5, cy = H * .5, pts = drones.map((d, i) => [cx + Math.cos(d.a + T * (i % 2 ? 1 : -1)) * d.r * 2.2, cy + Math.sin(d.a + T * (i % 2 ? 1 : -1)) * d.r * 1.2]);
      ctx.strokeStyle = 'rgba(129,140,248,.18)'; ctx.lineWidth = D;
      pts.forEach((a, i) => pts.forEach((b, j) => { if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 260 * D) { ctx.beginPath(); ctx.moveTo(...a); ctx.lineTo(...b); ctx.stroke(); } }));
      pts.forEach(([x, y]) => { ctx.strokeStyle = 'rgba(167,139,250,.6)'; ctx.lineWidth = 1.5 * D; ctx.beginPath(); ctx.moveTo(x - 7 * D, y - 7 * D); ctx.lineTo(x + 7 * D, y + 7 * D); ctx.moveTo(x + 7 * D, y - 7 * D); ctx.lineTo(x - 7 * D, y + 7 * D); ctx.stroke();
        [[-7, -7], [7, 7], [7, -7], [-7, 7]].forEach(([u, v]) => { ctx.beginPath(); ctx.arc(x + u * D, y + v * D, 3.5 * D, 0, 7); ctx.stroke(); }); });
      requestAnimationFrame(step);
    };
    init(); addEventListener('resize', init); step();
  }
})();
