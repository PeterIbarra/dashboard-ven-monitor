// ─── Tab: MATRIZ ───────────────────────────────────────────────────
// HTML del tab
const MATRIZ_HTML = `
<div class="wrapper">
  <header>
    <div class="logo-block">
      <h1>Matriz de Escenarios — Venezuela 2026</h1>
      <p>Análisis de probabilidad semanal · PNUD Venezuela</p>
    </div>
    <div class="pnud-badge">PNUD · Análisis de contexto</div>
  </header>

  <!-- Week selector -->
  <div class="week-nav">
    <label>Semana:</label>
    <button class="week-btn" data-week="0" onclick="setWeek(0)">03–15 ene</button>
    <button class="week-btn" data-week="1" onclick="setWeek(1)">16–22 ene</button>
    <button class="week-btn" data-week="2" onclick="setWeek(2)">23–29 ene</button>
    <button class="week-btn" data-week="3" onclick="setWeek(3)">30 ene–05 feb</button>
    <button class="week-btn" data-week="4" onclick="setWeek(4)">06–13 feb</button>
    <button class="week-btn active" data-week="5" onclick="setWeek(5)">13–20 feb ●</button>
    <div style="margin-left:auto; display:flex; align-items:center; gap:0.8rem;">
      <div class="legend-item"><span class="legend-dot" style="background:var(--accent);opacity:0.4; border:1px dashed var(--accent);"></span> Trayectoria previa</div>
      <div class="legend-item"><span class="legend-dot" style="background:var(--accent);"></span> Semana activa</div>
    </div>
  </div>

  <div class="main-grid">
    <!-- Matrix -->
    <div class="matrix-container">
      <div class="matrix-axes">
        <div class="axis-top">+ Grado de cambio institucional</div>
        <div class="matrix-row">
          <div class="axis-left">Grado de cambio institucional</div>
          <div class="matrix-svg-wrapper">
            <svg id="matrix-svg" viewBox="0 0 560 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <!-- Quadrant fills -->
              <rect x="0" y="0" width="280" height="240" fill="rgba(76,159,56,0.06)"/>
              <rect x="280" y="0" width="280" height="240" fill="rgba(229,36,59,0.06)"/>
              <rect x="0" y="240" width="280" height="240" fill="rgba(10,151,217,0.06)"/>
              <rect x="280" y="240" width="280" height="240" fill="rgba(252,195,11,0.06)"/>

              <!-- Axis lines -->
              <line x1="280" y1="0" x2="280" y2="480" stroke="#0e2540" stroke-width="1.5"/>
              <line x1="0" y1="240" x2="560" y2="240" stroke="#0e2540" stroke-width="1.5"/>

              <!-- Quadrant labels -->
              <text x="14" y="22" font-family="Syne" font-size="9" fill="#64748b" letter-spacing="1">CAMBIO SIN VIOLENCIA</text>
              <text x="286" y="22" font-family="Syne" font-size="9" fill="#64748b" letter-spacing="1">CAMBIO CAÓTICO Y VIOLENTO</text>
              <text x="14" y="470" font-family="Syne" font-size="9" fill="#64748b" letter-spacing="1">ESTABILIDAD SIN TRANSFORMACIÓN</text>
              <text x="286" y="470" font-family="Syne" font-size="9" fill="#64748b" letter-spacing="1">VIOLENCIA SIN CAMBIO</text>

              <!-- Scenario labels -->
              <text x="20" y="75" font-family="Syne" font-size="10.5" font-weight="700" fill="#4C9F38">E1: Transición política pacífica</text>
              <text x="296" y="75" font-family="Syne" font-size="10.5" font-weight="700" fill="#E5243B">E2: Colapso y fragmentación</text>
              <text x="20" y="380" font-family="Syne" font-size="10.5" font-weight="700" fill="#0A97D9">E3: Continuidad negociada</text>
              <text x="290" y="380" font-family="Syne" font-size="10.5" font-weight="700" fill="#FCC30B">E4: Resistencia coercitiva</text>

              <!-- Grid faint -->
              <line x1="140" y1="0" x2="140" y2="480" stroke="#0e2540" stroke-width="0.5" stroke-dasharray="3 4" opacity="0.4"/>
              <line x1="420" y1="0" x2="420" y2="480" stroke="#0e2540" stroke-width="0.5" stroke-dasharray="3 4" opacity="0.4"/>
              <line x1="0" y1="120" x2="560" y2="120" stroke="#0e2540" stroke-width="0.5" stroke-dasharray="3 4" opacity="0.4"/>
              <line x1="0" y1="360" x2="560" y2="360" stroke="#0e2540" stroke-width="0.5" stroke-dasharray="3 4" opacity="0.4"/>

              <!-- Trail path (previous weeks) -->
              <g id="trail-paths"></g>

              <!-- Current week point -->
              <g id="current-point"></g>

              <!-- Hover targets (invisible) -->
              <g id="hover-targets"></g>
            </svg>
            <div class="tooltip" id="tooltip"></div>
          </div>
        </div>
        <div class="axis-bottom">– Grado de violencia →</div>
      </div>



      <!-- Movement panel -->
      <div class="movement-panel" id="movement-panel"></div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
      <!-- filled by JS -->
    </div>
  </div>
</div>
`;

// JS de render del tab
function init_matriz() {
  // Insertar HTML si el panel está vacío
  const panel = document.getElementById('panel-matriz');
  if (panel && !panel.dataset.loaded) {
    panel.innerHTML = MATRIZ_HTML;
    panel.dataset.loaded = 'true';
    // Ejecutar lógica del tab
    (function() {

// ============================================================
// DATA: Probabilidades y posiciones en la matriz
// Coordenadas: x = violencia (0=mín, 560=máx), y = cambio (0=máx, 480=mín)
// ============================================================
let currentWeek = 5;
let selectedSc = 3;

function setWeek(w) {
  currentWeek = w;
  document.querySelectorAll('.week-btn').forEach((b, i) => {
    b.classList.remove('active', 'trail-1', 'trail-2');
    if (i === w) b.classList.add('active');
    else if (i === w - 1) b.classList.add('trail-1');
    else if (i < w) b.classList.add('trail-2');
  });
  render();
}

function getProbValue(scId, weekIdx) {
  return weeks[weekIdx].probs.find(p => p.sc === scId).value;
}

function getPointFor(scId, weekIdx) {
  return weeks[weekIdx].points.find(p => p.sc === scId);
}

function render() {
  renderMatrix();
  renderSidebar();
  renderMovementPanel();
}

function renderMovementPanel() {
  const panel = document.getElementById('movement-panel');
  const wk = weeks[currentWeek];
  const nextWk = weeks[currentWeek + 1] || null;

  // Current dominant scenario
  const curDom = wk.probs.reduce((a, b) => a.value > b.value ? a : b);
  const curSc = scenarios.find(s => s.id === curDom.sc);

  if (!nextWk) {
    panel.innerHTML = `<div class="mp-last-week">Esta es la semana más reciente registrada. Actualiza la matriz para añadir una nueva semana.</div>`;
    return;
  }

  // Next dominant scenario
  const nextDom = nextWk.probs.reduce((a, b) => a.value > b.value ? a : b);
  const nextSc = scenarios.find(s => s.id === nextDom.sc);

  // Delta for current scenario between weeks
  const curProbNext = nextWk.probs.find(p => p.sc === curDom.sc);
  const delta = curProbNext ? curProbNext.value - curDom.value : 0;
  const deltaClass = delta > 0 ? 'up' : delta < 0 ? 'down' : 'same';
  const deltaIcon = delta > 0 ? '▲' : delta < 0 ? '▼' : '—';
  const deltaLabel = delta !== 0 ? `${deltaIcon} ${Math.abs(delta)}pp` : '— sin cambio';

  // Next scenario drivers (top 3) and signals (top 3)
  const nextDrivers = nextDom.drivers.slice(0, 3).map(d => `<div class="mp-item">${d}</div>`).join('');
  const nextSignals = nextDom.signals.slice(0, 3).map(s => `<div class="mp-item">${s}</div>`).join('');
  const curDrivers = curDom.drivers.slice(0, 3).map(d => `<div class="mp-item">${d}</div>`).join('');
  const curSignals = curDom.signals.slice(0, 3).map(s => `<div class="mp-item">${s}</div>`).join('');

  const movingTo = curDom.sc !== nextDom.sc
    ? `<span style="color:${nextSc.color}">→ E${nextSc.id}: ${nextSc.name}</span>`
    : `<span style="color:${curSc.color}">→ Se mantiene en E${curSc.id}</span>`;

  const reasonHtml = nextWk.moveReason ? `
    <div style="font-size:0.62rem; color:#94a3b8; text-align:center; padding:0 0.5rem; margin-top:0.5rem; line-height:1.5; font-style:italic;">
      "${nextWk.moveReason}"
    </div>` : '';

  panel.innerHTML = `
    <div class="mp-block current">
      <div class="mp-tag" style="color:${curSc.color}">● Semana actual · ${wk.label}</div>
      <div class="mp-name" style="color:${curSc.color}">E${curSc.id}: ${curSc.name}</div>
      <div class="mp-prob">${curDom.label} · ${curDom.value}%</div>
      <div class="mp-delta ${deltaClass}">${deltaIcon} ${Math.abs(delta)}pp hacia semana siguiente</div>
      <div class="mp-section-title" style="color:${curSc.color}">Drivers estructurales</div>
      ${curDrivers}
      <div class="mp-section-title">Señales de activación</div>
      ${curSignals}
    </div>
    <div class="mp-arrow">
      <div style="font-size:1.5rem;">→</div>
      <span>tendencia</span>
      <div style="font-size:0.65rem; text-align:center; margin-top:0.3rem;">${movingTo}</div>
      ${reasonHtml}
    </div>
    <div class="mp-block next">
      <div class="mp-tag" style="color:${nextSc.color}">◎ Semana siguiente · ${nextWk.label}</div>
      <div class="mp-name" style="color:${nextSc.color}">E${nextSc.id}: ${nextSc.name}</div>
      <div class="mp-prob">${nextDom.label} · ${nextDom.value}%</div>
      <div class="mp-section-title" style="color:${nextSc.color}">Drivers que lo empujan</div>
      ${nextDrivers}
      <div class="mp-section-title">Señales a observar</div>
      ${nextSignals}
    </div>
  `;
}

function renderMatrix() {
  const svg = document.getElementById('matrix-svg');
  const trail = document.getElementById('trail-paths');
  const current = document.getElementById('current-point');
  const hover = document.getElementById('hover-targets');

  trail.innerHTML = '';
  current.innerHTML = '';
  hover.innerHTML = '';

  const wk = weeks[currentWeek];

  // ── Definir escenario dominante PRIMERO ──────────────────────────────────
  const dominantProb = wk.probs.reduce((a, b) => a.value > b.value ? a : b);
  const dominantSc = scenarios.find(s => s.id === dominantProb.sc);
  const pt = wk.activeXY;
  const r = 13;

  // ── HISTÓRICO DE DESPLAZAMIENTO ──────────────────────────────────────────
  if (currentWeek > 0) {
    const pathPoints = [];
    for (let i = 0; i <= currentWeek; i++) {
      pathPoints.push(weeks[i].activeXY);
    }

    // Segmentos con opacidad creciente
    for (let i = 0; i < pathPoints.length - 1; i++) {
      const p1 = pathPoints[i];
      const p2 = pathPoints[i + 1];
      const alpha = 0.2 + (i / (pathPoints.length - 1)) * 0.5;
      const segSc = scenarios.find(s => s.id === weeks[i + 1].probs.reduce((a, b) => a.value > b.value ? a : b).sc);

      const seg = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      seg.setAttribute('x1', p1.x); seg.setAttribute('y1', p1.y);
      seg.setAttribute('x2', p2.x); seg.setAttribute('y2', p2.y);
      seg.setAttribute('stroke', segSc.color);
      seg.setAttribute('stroke-width', '1.5');
      seg.setAttribute('stroke-dasharray', '5 3');
      seg.setAttribute('opacity', alpha);
      trail.appendChild(seg);

      // Flecha al final del último segmento — color del escenario dominante
      if (i === pathPoints.length - 2) {
        const arrowPoly = document.querySelector('#arrowhead polygon');
        if (arrowPoly) arrowPoly.setAttribute('fill', dominantSc.color);
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        arrow.setAttribute('x1', p1.x); arrow.setAttribute('y1', p1.y);
        arrow.setAttribute('x2', p2.x); arrow.setAttribute('y2', p2.y);
        arrow.setAttribute('stroke', dominantSc.color);
        arrow.setAttribute('stroke-width', '2');
        arrow.setAttribute('opacity', '0.9');
        arrow.setAttribute('marker-end', 'url(#arrowhead)');
        trail.appendChild(arrow);
      }
    }

    // Puntos fantasma de semanas anteriores
    for (let i = 0; i < currentWeek; i++) {
      const ghost = weeks[i].activeXY;
      const ghostSc = scenarios.find(s => s.id === weeks[i].probs.reduce((a, b) => a.value > b.value ? a : b).sc);
      const alpha = 0.15 + (i / currentWeek) * 0.35;

      const gc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      gc.setAttribute('cx', ghost.x); gc.setAttribute('cy', ghost.y);
      gc.setAttribute('r', 7);
      gc.setAttribute('fill', ghostSc.color);
      gc.setAttribute('opacity', alpha);
      trail.appendChild(gc);

      const ghostHover = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ghostHover.setAttribute('cx', ghost.x); ghostHover.setAttribute('cy', ghost.y);
      ghostHover.setAttribute('r', 16);
      ghostHover.setAttribute('fill', 'transparent');
      ghostHover.style.cursor = 'pointer';
      const ghostProb = weeks[i].probs.reduce((a, b) => a.value > b.value ? a : b);
      ghostHover.addEventListener('mouseenter', () => showTooltip(null, ghostSc, ghostProb, ghost, weeks[i].label));
      ghostHover.addEventListener('mouseleave', hideTooltip);
      hover.appendChild(ghostHover);

      const gl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      gl.setAttribute('x', ghost.x);
      gl.setAttribute('y', ghost.y - 12);
      gl.setAttribute('text-anchor', 'middle');
      gl.setAttribute('font-family', 'Space Mono');
      gl.setAttribute('font-size', '6.5');
      gl.setAttribute('fill', ghostSc.color);
      gl.setAttribute('opacity', alpha + 0.1);
      gl.textContent = weeks[i].shortLabel;
      trail.appendChild(gl);
    }
  }

  // Calcular dirección de proyección futura basada en las últimas 2 semanas
  let driftX = 0, driftY = 0;
  if (currentWeek >= 1) {
    const prev = weeks[currentWeek - 1].activeXY;
    const curr = weeks[currentWeek].activeXY;
    driftX = (curr.x - prev.x) * 0.45;
    driftY = (curr.y - prev.y) * 0.45;
    const maxDrift = 26;
    const mag = Math.sqrt(driftX * driftX + driftY * driftY);
    if (mag > maxDrift) { driftX = (driftX / mag) * maxDrift; driftY = (driftY / mag) * maxDrift; }
  }

  // ID único para la animación
  const animId = `drift-${currentWeek}`;

  // Crear grupo para contener punto + animación
  const dotGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

  // Outer glow ring (estática)
  const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ring.setAttribute('cx', pt.x); ring.setAttribute('cy', pt.y);
  ring.setAttribute('r', r + 6);
  ring.setAttribute('fill', 'none');
  ring.setAttribute('stroke', dominantSc.color);
  ring.setAttribute('stroke-width', '1');
  ring.setAttribute('opacity', '0.3');
  current.appendChild(ring);

  // Punto que se mueve en la dirección proyectada
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', '0'); dot.setAttribute('cy', '0');
  dot.setAttribute('r', r);
  dot.setAttribute('fill', dominantSc.color);
  dot.setAttribute('opacity', '0.9');
  dot.setAttribute('filter', 'url(#glow)');

  // Animación de traslación direccional
  const anim = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  anim.setAttribute('attributeName', 'transform');
  anim.setAttribute('type', 'translate');
  anim.setAttribute('values', `${pt.x},${pt.y}; ${pt.x + driftX},${pt.y + driftY}; ${pt.x},${pt.y}`);
  anim.setAttribute('dur', '3s');
  anim.setAttribute('repeatCount', 'indefinite');
  anim.setAttribute('calcMode', 'spline');
  anim.setAttribute('keySplines', '0.4 0 0.6 1; 0.4 0 0.6 1');
  dot.appendChild(anim);
  dotGroup.appendChild(dot);

  // Etiqueta animada junto al punto
  const probLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  probLabel.setAttribute('x', '0'); probLabel.setAttribute('y', '4');
  probLabel.setAttribute('text-anchor', 'middle');
  probLabel.setAttribute('font-family', 'Space Mono');
  probLabel.setAttribute('font-size', '8');
  probLabel.setAttribute('font-weight', '700');
  probLabel.setAttribute('fill', '#060c14');
  probLabel.textContent = 'E' + dominantSc.id;
  const animLabel = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  animLabel.setAttribute('attributeName', 'transform');
  animLabel.setAttribute('type', 'translate');
  animLabel.setAttribute('values', `${pt.x},${pt.y}; ${pt.x + driftX},${pt.y + driftY}; ${pt.x},${pt.y}`);
  animLabel.setAttribute('dur', '3s');
  animLabel.setAttribute('repeatCount', 'indefinite');
  animLabel.setAttribute('calcMode', 'spline');
  animLabel.setAttribute('keySplines', '0.4 0 0.6 1; 0.4 0 0.6 1');
  probLabel.appendChild(animLabel);
  dotGroup.appendChild(probLabel);

  // ── FLECHA DE TENDENCIA — apunta hacia el escenario con mayor momentum ──
  // Lógica: el escenario destino es el que más ha SUBIDO en las últimas 2 semanas.
  // Si hay empate o solo 1 semana, usar el segundo más alto en probabilidad actual.
  // Esto captura "E3 dominante pero E1 subiendo" → flecha apunta a E1.

  // Escenario destino de la flecha: definido analíticamente en los datos de la semana
  const destSc   = scenarios.find(s => s.id === (wk.trendSc || dominantSc.id));
  const destProb = wk.probs.find(p => p.sc === destSc.id);
  const trendDrivers = wk.trendDrivers || destProb.drivers || [];

  if (driftX !== 0 || driftY !== 0) {
    const ax1 = pt.x + (driftX > 0 ? r : -r) * 0.6;
    const ay1 = pt.y + (driftY > 0 ? r : -r) * 0.6;
    const ax2 = pt.x + driftX * 2.8;
    const ay2 = pt.y + driftY * 2.8;

    const arrowPoly = document.querySelector('#arrowhead polygon');
    if (arrowPoly) arrowPoly.setAttribute('fill', destSc.color);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrow.setAttribute('x1', ax1); arrow.setAttribute('y1', ay1);
    arrow.setAttribute('x2', ax2); arrow.setAttribute('y2', ay2);
    arrow.setAttribute('stroke', destSc.color);
    arrow.setAttribute('stroke-width', '2.5');
    arrow.setAttribute('stroke-dasharray', '4 3');
    arrow.setAttribute('opacity', '0.85');
    arrow.setAttribute('marker-end', 'url(#arrowhead)');
    current.appendChild(arrow);

    // Etiqueta: nombre del escenario destino
    const isSameSc = destSc.id === dominantSc.id;
    const tLbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    tLbl.setAttribute('x', pt.x + driftX * 3.4);
    tLbl.setAttribute('y', pt.y + driftY * 3.4 - 5);
    tLbl.setAttribute('text-anchor', driftX >= 0 ? 'start' : 'end');
    tLbl.setAttribute('font-family', 'Space Mono');
    tLbl.setAttribute('font-size', '6.5');
    tLbl.setAttribute('fill', destSc.color);
    tLbl.setAttribute('opacity', '0.9');
    tLbl.setAttribute('letter-spacing', '0.08em');
    tLbl.textContent = isSameSc ? `→ E${destSc.id}` : `↑ E${destSc.id}`;
    current.appendChild(tLbl);

    // Hover target sobre la flecha
    const arrowHover = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    arrowHover.setAttribute('x1', ax1); arrowHover.setAttribute('y1', ay1);
    arrowHover.setAttribute('x2', ax2); arrowHover.setAttribute('y2', ay2);
    arrowHover.setAttribute('stroke', 'transparent');
    arrowHover.setAttribute('stroke-width', '22');
    arrowHover.style.cursor = 'pointer';
    arrowHover.addEventListener('mouseenter', () => {
      showArrowTooltip(destSc, destProb, trendDrivers, { x: ax2, y: ay2 }, isSameSc);
    });
    arrowHover.addEventListener('mouseleave', hideTooltip);
    hover.appendChild(arrowHover);
  }

  current.appendChild(dotGroup);

  // Hover target (fijo en posición base)
  const ht = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  ht.setAttribute('cx', pt.x); ht.setAttribute('cy', pt.y);
  ht.setAttribute('r', r + 10);
  ht.setAttribute('fill', 'transparent');
  ht.style.cursor = 'pointer';
  ht.addEventListener('mouseenter', (e) => showTooltip(e, dominantSc, dominantProb, pt, wk.label));
  ht.addEventListener('mouseleave', hideTooltip);
  ht.addEventListener('click', () => { selectedSc = dominantSc.id; render(); renderSidebar(); });
  hover.appendChild(ht);

}

const svgEl = document.getElementById('matrix-svg');
// Add arrowhead marker
const defs = svgEl.querySelector('defs');
const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
marker.setAttribute('id', 'arrowhead');
marker.setAttribute('markerWidth', '8');
marker.setAttribute('markerHeight', '6');
marker.setAttribute('refX', '7');
marker.setAttribute('refY', '3');
marker.setAttribute('orient', 'auto');
const path = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
path.setAttribute('points', '0 0, 8 3, 0 6');
path.setAttribute('fill', '#0A97D9');
path.setAttribute('opacity', '0.6');
marker.appendChild(path);
defs.appendChild(marker);

function showTooltip(e, sc, prob, pt, weekLabel) {
  const tooltip = document.getElementById('tooltip');
  const rect = document.getElementById('matrix-svg').getBoundingClientRect();
  const svgW = rect.width;
  const svgH = rect.height;
  const scaleX = svgW / 560;
  const scaleY = svgH / 480;
  let tx = pt.x * scaleX + 18;
  let ty = pt.y * scaleY + 18;
  if (tx + 270 > svgW) tx = pt.x * scaleX - 275;
  if (ty + 300 > svgH) ty = pt.y * scaleY - 305;

  const driversHtml = (prob.drivers || []).slice(0, 3).map(d =>
    `<div class="tt-item">· ${d}</div>`).join('');
  const signalsHtml = (prob.signals || []).slice(0, 3).map(s =>
    `<div class="tt-item">· ${s}</div>`).join('');

  // Si es el punto activo (sin weekLabel), mostrar qué drivers están moviendo
  let pushHtml = '';
  if (!weekLabel) {
    const nextWk = weeks[currentWeek + 1] || null;
    if (nextWk) {
      const nextDom = nextWk.probs.reduce((a, b) => a.value > b.value ? a : b);
      const nextSc = scenarios.find(s => s.id === nextDom.sc);
      const pushDrivers = (nextDom.drivers || []).slice(0, 3);
      if (pushDrivers.length > 0) {
        const pushItems = pushDrivers.map(d => `<div class="tt-item tt-push">→ ${d}</div>`).join('');
        pushHtml = `
          <div class="tt-section tt-push-section">
            <div class="tt-section-title" style="color:${nextSc.color}">
              ⟶ Empujando hacia E${nextSc.id}: ${nextSc.short}
            </div>
            ${pushItems}
          </div>`;
      }
    } else if (prob.drivers && prob.drivers.length > 0) {
      // Última semana: mostrar drivers actuales como los que sostienen el escenario
      const sustainItems = (prob.drivers || []).slice(0, 3).map(d =>
        `<div class="tt-item tt-push">· ${d}</div>`).join('');
      pushHtml = `
        <div class="tt-section tt-push-section">
          <div class="tt-section-title" style="color:${sc.color}">
            ⟶ Sosteniendo este escenario
          </div>
          ${sustainItems}
        </div>`;
    }
  }

  tooltip.innerHTML = `
    <div class="tt-header">
      <div>
        ${weekLabel ? `<div class="tt-week">${weekLabel}</div>` : ''}
        <div class="tt-title" style="color:${sc.color}">E${sc.id}: ${sc.name}</div>
        <div class="tt-prob">${prob.label}</div>
      </div>
    </div>
    <div class="tt-section">
      <div class="tt-section-title" style="color:${sc.color}">Drivers estructurales</div>
      ${driversHtml}
    </div>
    <div class="tt-section">
      <div class="tt-section-title" style="color:var(--muted)">Señales de activación</div>
      ${signalsHtml}
    </div>
    ${pushHtml}
  `;
  tooltip.style.left = tx + 'px';
  tooltip.style.top = ty + 'px';
  tooltip.classList.add('visible');
}

function showArrowTooltip(sc, prob, drivers, pt, isSame) {
  const tooltip = document.getElementById('tooltip');
  const rect = document.getElementById('matrix-svg').getBoundingClientRect();
  const svgW = rect.width;
  const svgH = rect.height;
  const scaleX = svgW / 560;
  const scaleY = svgH / 480;
  let tx = pt.x * scaleX + 18;
  let ty = pt.y * scaleY + 18;
  if (tx + 270 > svgW) tx = pt.x * scaleX - 275;
  if (ty + 260 > svgH) ty = pt.y * scaleY - 265;

  const driversHtml = (drivers || []).slice(0, 5).map(d =>
    `<div class="tt-item">› ${d}</div>`).join('');
  const headerLabel = isSame ? '→ CONSOLIDANDO' : '↑ PRESIÓN HACIA TRANSICIÓN';

  tooltip.innerHTML = `
    <div class="tt-header">
      <div>
        <div class="tt-week" style="color:${sc.color}; font-weight:700; letter-spacing:0.12em;">${headerLabel}</div>
        <div class="tt-title" style="color:${sc.color}">E${sc.id}: ${sc.name}</div>
        <div class="tt-prob">${prob.value}% · ${prob.label}</div>
      </div>
    </div>
    <div class="tt-section">
      <div class="tt-section-title" style="color:${sc.color}">Factores que empujan en esta dirección</div>
      ${driversHtml}
    </div>
  `;
  tooltip.style.left = tx + 'px';
  tooltip.style.top = ty + 'px';
  tooltip.classList.add('visible');
}

function hideTooltip() {
  document.getElementById('tooltip').classList.remove('visible');
}

function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  const wk = weeks[currentWeek];
  
  sidebar.innerHTML = '';

  wk.probs.forEach(prob => {
    const sc = scenarios.find(s => s.id === prob.sc);
    const card = document.createElement('div');
    card.className = 'scenario-card' + (sc.id === selectedSc ? ' active' : '');
    card.style.borderLeftWidth = '3px';
    card.style.borderLeftColor = sc.color;
    card.innerHTML = `
      <div class="sc-num" style="color:${sc.color}">Escenario ${sc.id}</div>
      <div class="sc-name">${sc.name}</div>
      <div class="prob-bar-wrap">
        <div class="prob-label">
          <span>${prob.label}</span>
          <span style="color:${sc.color}">${prob.value}%</span>
        </div>
        <div class="prob-bar">
          <div class="prob-fill" style="width:${prob.value}%; background:${sc.color};"></div>
        </div>
      </div>
    `;
    card.onclick = () => { selectedSc = sc.id; render(); };
    sidebar.appendChild(card);
  });

  // Detail panel
  const selProb = wk.probs.find(p => p.sc === selectedSc);
  const selSc = scenarios.find(s => s.id === selectedSc);
  if (selProb) {
    const detail = document.createElement('div');
    detail.className = 'detail-panel';
    detail.innerHTML = `
      <h3 style="color:${selSc.color}">E${selSc.id} — ${selSc.name}</h3>
      <div class="detail-section">
        <div class="ds-title">Drivers estructurales</div>
        <ul>${selProb.drivers.map(d => `<li>${d}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <div class="ds-title">Señales de activación</div>
        <ul>${selProb.signals.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    `;
    sidebar.appendChild(detail);
  }
}



// Init
render();


// ── Soporte de traducción ES/EN via postMessage ───────────────────────────
var LANG = 'es';
var T = {
  es: {
    title:       'Matriz de Escenarios — Venezuela 2026',
    subtitle:    'Análisis de probabilidad semanal · PNUD Venezuela',
    badge:       'PNUD · Análisis de contexto',
    week_label:  'Semana:',
    legend_prev: 'Trayectoria previa',
    legend_act:  'Semana activa',
    drivers:     'Drivers estructurales',
    signals:     'Señales de activación',
    axis_change: '+ Grado de cambio institucional',
    axis_viol:   '– Grado de violencia →',
    q1: 'CAMBIO SIN VIOLENCIA',
    q2: 'CAMBIO CAÓTICO Y VIOLENTO',
    q3: 'ESTABILIDAD SIN TRANSFORMACIÓN',
    q4: 'VIOLENCIA SIN CAMBIO',
    e1: 'E1: Transición política pacífica',
    e2: 'E2: Colapso y fragmentación',
    e3: 'E3: Continuidad negociada',
    e4: 'E4: Resistencia coercitiva',
    trend_pushing: '↑ PRESIÓN HACIA TRANSICIÓN',
    trend_hold:    '→ CONSOLIDANDO',
    trend_factors: 'Factores que empujan en esta dirección',
    week_btns: ['03–15 ene','16–22 ene','23–29 ene','30 ene–05 feb','06–13 feb','13–20 feb ●'],
  },
  en: {
    title:       'Scenario Matrix — Venezuela 2026',
    subtitle:    'Weekly probability analysis · UNDP Venezuela',
    badge:       'UNDP · Context Analysis',
    week_label:  'Week:',
    legend_prev: 'Previous trajectory',
    legend_act:  'Active week',
    drivers:     'Structural drivers',
    signals:     'Activation signals',
    axis_change: '+ Degree of institutional change',
    axis_viol:   '– Degree of violence →',
    q1: 'CHANGE WITHOUT VIOLENCE',
    q2: 'CHAOTIC & VIOLENT CHANGE',
    q3: 'STABILITY WITHOUT TRANSFORMATION',
    q4: 'VIOLENCE WITHOUT CHANGE',
    e1: 'E1: Peaceful political transition',
    e2: 'E2: Collapse and fragmentation',
    e3: 'E3: Negotiated continuity',
    e4: 'E4: Coercive resistance',
    trend_pushing: '↑ PRESSURE TOWARD TRANSITION',
    trend_hold:    '→ CONSOLIDATING',
    trend_factors: 'Factors driving this direction',
    week_btns: ['Jan 3–15','Jan 16–22','Jan 23–29','Jan 30–Feb 5','Feb 6–13','Feb 13–20 ●'],
  }
};

function applyLang(lang) {
  LANG = lang;
  var t = T[lang];
  // Header
  var h1 = document.querySelector('.logo-block h1');
  if (h1) h1.textContent = t.title;
  var p = document.querySelector('.logo-block p');
  if (p) p.textContent = t.subtitle;
  var badge = document.querySelector('.pnud-badge');
  if (badge) badge.textContent = t.badge;
  // Axis labels
  var axTop = document.querySelector('.axis-top');
  if (axTop) axTop.childNodes[axTop.childNodes.length-1].textContent = ' ' + t.axis_change + ' ';
  var axBot = document.querySelector('.axis-bottom');
  if (axBot) axBot.childNodes[axBot.childNodes.length-1].textContent = ' ' + t.axis_viol + ' ';
  // Week nav label
  var wLabel = document.querySelector('.week-nav label');
  if (wLabel) wLabel.textContent = t.week_label;
  // Week buttons
  var btns = document.querySelectorAll('.week-btn');
  btns.forEach(function(b, i) { if (t.week_btns[i]) b.textContent = t.week_btns[i]; });
  // Legend
  var legendItems = document.querySelectorAll('.legend-item');
  if (legendItems[0]) legendItems[0].childNodes[legendItems[0].childNodes.length-1].textContent = ' ' + t.legend_prev;
  if (legendItems[1]) legendItems[1].childNodes[legendItems[1].childNodes.length-1].textContent = ' ' + t.legend_act;
  // SVG labels
  var svgTexts = document.querySelectorAll('#matrix-svg text');
  svgTexts.forEach(function(el) {
    var txt = el.textContent.trim();
    if (txt === 'CAMBIO SIN VIOLENCIA' || txt === 'CHANGE WITHOUT VIOLENCE') el.textContent = t.q1;
    else if (txt.includes('CAÓTICO') || txt.includes('CHAOTIC')) el.textContent = t.q2;
    else if (txt.includes('ESTABILIDAD') || txt.includes('STABILITY')) el.textContent = t.q3;
    else if (txt.includes('VIOLENCIA SIN') || txt.includes('VIOLENCE WITHOUT')) el.textContent = t.q4;
    else if (txt.startsWith('E1:')) el.textContent = t.e1;
    else if (txt.startsWith('E2:')) el.textContent = t.e2;
    else if (txt.startsWith('E3:')) el.textContent = t.e3;
    else if (txt.startsWith('E4:')) el.textContent = t.e4;
  });
  // Re-render para actualizar tooltip labels
  render();
}

window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'setLang') applyLang(e.data.lang);
});


    })();
  }
}
