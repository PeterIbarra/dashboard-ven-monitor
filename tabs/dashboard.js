// ─── Tab: DASHBOARD ───────────────────────────────────────────────────
// HTML del tab
const DASHBOARD_HTML = `
<!-- TOP BAR -->
<div class="topbar">
  <div class="topbar-left">
    <div class="topbar-title">Dashboard Ejecutivo — Venezuela 2026</div>
    <div class="topbar-sub" data-i18n="org">PNUD · Análisis de contexto situacional</div>
  </div>
  <div class="week-selector">
    <label>Semana:</label>
    <button class="wk-btn" onclick="setWeek(0)">3–15 ene</button>
    <button class="wk-btn" onclick="setWeek(1)">16–22 ene</button>
    <button class="wk-btn" onclick="setWeek(2)">23–29 ene</button>
    <button class="wk-btn" onclick="setWeek(3)">30e–5f</button>
    <button class="wk-btn" onclick="setWeek(4)">6–13 feb</button>
    <button class="wk-btn active" onclick="setWeek(5)">13–20 feb ●</button>
    <button class="wk-btn draft" onclick="setWeek(6)">20–26 feb ○</button>
  </div>
  <div class="pnud-mark">PNUD Venezuela</div>
</div>

<div class="page">

  <!-- ESCENARIOS DOMINANTES -->
  <div class="hero" id="hero"></div>

  <!-- KPIs -->
  <div class="kpi-grid" id="kpi-grid"></div>

  <!-- FILA INFERIOR -->
  <div class="bottom-grid" id="bottom-grid"></div>

  <div class="dash-footer">
    <span id="footer-week" data-i18n="cutoff">Corte: semana 13–20 de febrero de 2026</span>
    <span data-i18n="internal">Uso interno · Equipo de análisis · PNUD Venezuela</span>
  </div>

</div>
`;

// JS de render del tab
function init_dashboard() {
  // Insertar HTML si el panel está vacío
  const panel = document.getElementById('panel-dashboard');
  if (panel && !panel.dataset.loaded) {
    panel.innerHTML = DASHBOARD_HTML;
    panel.dataset.loaded = 'true';
    // Ejecutar lógica del tab
    (function() {


// ══════════════════════════════════════════
// TRADUCCIONES ES / EN
// ══════════════════════════════════════════
var LANG = 'es';
const T = {
  es: {
    title: 'Dashboard Ejecutivo — Venezuela 2026',
    org: 'PNUD · Análisis de contexto situacional',
    cutoff: 'Corte: semana 13–20 de febrero de 2026',
    internal: 'Uso interno · Equipo de análisis · PNUD Venezuela',
    week_lbl: 'Semana:',
    prev_traj: 'Trayectoria previa', active_wk: 'Semana activa',
    // Secciones KPI
    sec_energy: 'Sector Energético', sec_econ: 'Económico y Social',
    sec_opinion: 'Opinión Pública', sec_politics: 'Dimensión Política',
    sec_security: 'Seguridad',
    // KPI names
    exports: 'Exportaciones de crudo', income_agr: 'Ingresos / Acuerdos',
    ofac_lic: 'Licencias OFAC activas', exchange: 'Tipo de cambio (VEB/USD)',
    inflation: 'Inflación proyectada 2026', pop_income: 'Ingresos población',
    electricity: 'Sistema eléctrico', gdp: 'Crecimiento PIB 2026',
    country_dir: 'Percepción dirección país', electoral_dem: 'Demanda electoral',
    mcm_fav: 'Favorabilidad MCM / liderazgo', us_backing: 'Respaldo demandas EE.UU.',
    // Política
    amnesty: 'Amnistía', dual_channel: 'Doble canal EE.UU.', electoral_ag: 'Agenda electoral',
    ddhh: 'DDHH', fanb: 'FANB', elections_date: 'Elecciones',
    // Seguridad
    sec_perc: 'Percepción seguridad', armed_groups: 'Grupos armados', borders: 'Fronteras',
    // Semáforos
    sig_green: 'Verde', sig_yellow: 'Amarillo', sig_red: 'Rojo',
    sig_green_desc: 'señales positivas', sig_yellow_desc: 'en monitoreo', sig_red_desc: 'alertas activas',
    // Matriz mini
    matrix_title: 'Posición en la matriz · Trayectoria',
    // Escenarios
    sc_names: ['Transición política pacífica','Colapso y fragmentación','Continuidad negociada','Resistencia y escalada coercitiva'],
    sc_shorts: ['Transición','Colapso','Continuidad','Resistencia'],
    dominant: 'Dominante',
    // Movimiento
    current_wk: 'Semana actual', next_wk: 'Semana siguiente', trend_lbl: 'Tendencia',
    // Semanas
    weeks_short: ['3–15 ene','16–22 ene','23–29 ene','30e–5f','6–13 feb','13–20 feb ●','20–26 feb ○'],
    // Tensiones
    tensions_title: 'Tensiones activas',
    // Probabilidad labels
    prob_labels: ['Muy baja','Baja','Baja-media','Media','Media (contenida)','Alta (dominante)','Alta','Muy alta'],
  },
  en: {
    title: 'Executive Dashboard — Venezuela 2026',
    org: 'UNDP · Situational Context Analysis',
    cutoff: 'Cut-off: week of February 13–20, 2026',
    internal: 'Internal use · Analysis team · UNDP Venezuela',
    week_lbl: 'Week:',
    prev_traj: 'Previous trajectory', active_wk: 'Active week',
    // KPI sections
    sec_energy: 'Energy Sector', sec_econ: 'Economic & Social',
    sec_opinion: 'Public Opinion', sec_politics: 'Political Dimension',
    sec_security: 'Security',
    // KPI names
    exports: 'Crude oil exports', income_agr: 'Revenue / Agreements',
    ofac_lic: 'Active OFAC Licenses', exchange: 'Exchange rate (VEB/USD)',
    inflation: 'Projected inflation 2026', pop_income: 'Population income',
    electricity: 'Power grid', gdp: 'GDP growth 2026',
    country_dir: 'Country direction perception', electoral_dem: 'Electoral demand',
    mcm_fav: 'MCM / opposition favorability', us_backing: 'Support for U.S. demands',
    // Politics
    amnesty: 'Amnesty Law', dual_channel: 'U.S. dual channel', electoral_ag: 'Electoral agenda',
    ddhh: 'Human rights', fanb: 'FANB', elections_date: 'Elections',
    // Security
    sec_perc: 'Security perception', armed_groups: 'Armed groups', borders: 'Borders',
    // Signals
    sig_green: 'Green', sig_yellow: 'Yellow', sig_red: 'Red',
    sig_green_desc: 'positive signals', sig_yellow_desc: 'under monitoring', sig_red_desc: 'active alerts',
    // Matrix mini
    matrix_title: 'Matrix position · Trajectory',
    // Scenarios
    sc_names: ['Peaceful political transition','Collapse and fragmentation','Negotiated continuity','Coercive escalation'],
    sc_shorts: ['Transition','Collapse','Continuity','Resistance'],
    dominant: 'Dominant',
    // Movement
    current_wk: 'Current week', next_wk: 'Following week', trend_lbl: 'Trend',
    // Weeks
    weeks_short: ['Jan 3–15','Jan 16–22','Jan 23–29','Jan 30–Feb 5','Feb 6–13','Feb 13–20 ●','Feb 20–26 ○'],
    // Tensions
    tensions_title: 'Active tensions',
    // Probability labels
    prob_labels: ['Very low','Low','Low-medium','Medium','Medium (contained)','High (dominant)','High','Very high'],
  }
};
function t(key) { return (T[LANG] || T.es)[key] || key; }

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const SC_COLORS = { 1:'#0A97D9', 2:'#4C9F38', 3:'#E5243B', 4:'#FCC30B' };
const SC_CLASS  = { 1:'e1', 2:'e2', 3:'e3', 4:'e4' };

let currentWeek = 5;

function setWeek(w) {
  currentWeek = w;
  document.querySelectorAll('.wk-btn').forEach((b,i) => {
    b.classList.toggle('active', i === w);
  });
  render();
}

function getDelta(scId, weekIdx) {
  if (weekIdx === 0) return null;
  const cur  = WEEKS[weekIdx].scenarios.find(s => s.id === scId).prob;
  const prev = WEEKS[weekIdx-1].scenarios.find(s => s.id === scId).prob;
  return cur - prev;
}

function render() {
  renderHero();
  renderKPIs();
  renderBottom();
  document.getElementById('footer-week').textContent = 'Corte: ' + WEEKS[currentWeek].label;
}

// ── HERO: 4 tarjetas de escenarios ──
function renderHero() {
  const wk = WEEKS[currentWeek];
  const dom = wk.scenarios.reduce((a,b) => a.prob > b.prob ? a : b);
  const hero = document.getElementById('hero');

  hero.innerHTML = wk.scenarios.map(sc => {
    const delta = getDelta(sc.id, currentWeek);
    const deltaHtml = delta !== null
      ? `<span class="sc-prob-delta" style="color:${delta > 0 ? 'var(--green)' : delta < 0 ? 'var(--red)' : 'var(--muted)'}">${delta > 0 ? '▲' : delta < 0 ? '▼' : '—'}${Math.abs(delta)}pp</span>`
      : '';
    const isDom = sc.id === dom.id;
    const domTag = isDom ? `<span class="dominant-tag" style="background:${SC_COLORS[sc.id]}22; color:${SC_COLORS[sc.id]}; border:1px solid ${SC_COLORS[sc.id]}44">Dominante</span>` : '';

    return `
      <div class="sc-hero-card ${SC_CLASS[sc.id]} ${isDom ? 'dominant' : ''}">
        <div class="sc-label">
          <span>Escenario ${sc.id}</span>${domTag}
        </div>
        <div class="sc-name" style="color:${SC_COLORS[sc.id]}">${sc.name}</div>
        <div class="sc-prob-row">
          <div class="sc-prob-val" style="color:${SC_COLORS[sc.id]}">${sc.prob}%</div>
          ${deltaHtml}
        </div>
        <div class="sc-bar"><div class="sc-bar-fill" style="width:${sc.prob}%; background:${SC_COLORS[sc.id]}"></div></div>
        <div class="sc-trend-label" style="color:${sc.trend==='up'?'var(--green)':sc.trend==='down'?'var(--red)':'var(--muted)'}">
          ${sc.trend==='up'?'↑ Al alza':sc.trend==='down'?'↓ A la baja':'→ Estable'}
        </div>
      </div>
    `;
  }).join('');
}

// ── KPIs ──
function renderKPIs() {
  const wk = WEEKS[currentWeek];
  const k = wk.kpis;
  const grid = document.getElementById('kpi-grid');

  const isPending = v => v === '[Por completar]';
  const cls = (v, good, warn, bad) => isPending(v) ? 'neutral' : good ? 'green' : warn ? 'yellow' : bad ? 'red' : 'neutral';

  grid.innerHTML = `
    <!-- ENERGY -->
    <div class="kpi-section">
      <div class="kpi-section-title"><span>⚡</span> ${t('sec_energy')}</div>
      <div class="kpi-row">
        <div class="kpi-name">${t('exports')}</div>
        <div class="kpi-val green">${k.energia.exportaciones}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('income_agr')}</div>
        <div class="kpi-val green">${k.energia.ingresos}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('ofac_lic')}</div>
        <div class="kpi-val blue">${k.energia.licencias}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('exchange')}</div>
        <div class="kpi-val yellow">${k.energia.tipo_cambio}</div>
      </div>
    </div>

    <!-- ECONOMIC -->
    <div class="kpi-section">
      <div class="kpi-section-title"><span>📊</span> ${t('sec_econ')}</div>
      <div class="kpi-row">
        <div class="kpi-name">${t('inflation')}</div>
        <div class="kpi-val yellow">${k.economico.inflacion}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('pop_income')}</div>
        <div class="kpi-val red">${k.economico.ingresos_pob}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('electricity')}</div>
        <div class="kpi-val red">${k.economico.electricidad}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('gdp')}</div>
        <div class="kpi-val green">${k.economico.pib}</div>
      </div>
    </div>

    <!-- OPINION -->
    <div class="kpi-section">
      <div class="kpi-section-title"><span>🗳</span> ${t('sec_opinion')}</div>
      <div class="kpi-row">
        <div class="kpi-name">${t('country_dir')}</div>
        <div class="kpi-val green">${k.opinion.direccion}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('electoral_dem')}</div>
        <div class="kpi-val yellow">${k.opinion.elecciones}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('mcm_fav')}</div>
        <div class="kpi-val blue">${k.opinion.favorabilidad_mcm}</div>
      </div>
      <div class="kpi-row">
        <div class="kpi-name">${t('us_backing')}</div>
        <div class="kpi-val green">${k.opinion.aprobacion_eeuu}</div>
      </div>
    </div>
  `;
}

// ── BOTTOM: Semáforos + Mini-matriz + Tensiones ──
function renderBottom() {
  const wk = WEEKS[currentWeek];
  const bg = document.getElementById('bottom-grid');
  const total = wk.semaforos.verde + wk.semaforos.amarillo + wk.semaforos.rojo || 1;

  // Mini-matriz SVG con trayectoria
  const W = 260, H = 180;
  const padL = 18, padR = 10, padT = 14, padB = 14;
  const cW = W - padL - padR, cH = H - padT - padB;

  // Cuadrantes
  const quads = [
    { x:0,    y:0,    w:cW/2, h:cH/2, color:'rgba(76,159,56,0.06)',   label:'E1' },
    { x:cW/2, y:0,    w:cW/2, h:cH/2, color:'rgba(229,36,59,0.06)',   label:'E2' },
    { x:0,    y:cH/2, w:cW/2, h:cH/2, color:'rgba(10,151,217,0.06)',  label:'E3' },
    { x:cW/2, y:cH/2, w:cW/2, h:cH/2, color:'rgba(252,195,11,0.06)', label:'E4' },
  ];

  const qSvg = quads.map(q => `
    <rect x="${padL+q.x}" y="${padT+q.y}" width="${q.w}" height="${q.h}" fill="${q.color}"/>
    <text x="${padL+q.x+4}" y="${padT+q.y+11}" font-family="DM Mono" font-size="7" fill="rgba(255,255,255,0.15)" letter-spacing="1">${q.label}</text>
  `).join('');

  // Ejes
  const axes = `
    <line x1="${padL}" y1="${padT+cH/2}" x2="${padL+cW}" y2="${padT+cH/2}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="${padL+cW/2}" y1="${padT}" x2="${padL+cW/2}" y2="${padT+cH}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  `;

  // Trayectoria (semanas 0..currentWeek)
  const trail = WEEKS.slice(0, currentWeek + 1).map((w, i) => {
    const px = padL + w.matrixXY.x * cW;
    const py = padT + (1 - w.matrixXY.y) * cH;
    return { px, py, i };
  });

  let trailSvg = '';
  for (let i = 1; i < trail.length; i++) {
    const a = trail[i-1], b = trail[i];
    const opacity = 0.15 + (i / trail.length) * 0.5;
    trailSvg += `<line x1="${a.px}" y1="${a.py}" x2="${b.px}" y2="${b.py}" stroke="#0A97D9" stroke-width="1.5" opacity="${opacity}" stroke-dasharray="3 2"/>`;
  }

  // Puntos históricos
  const dots = trail.slice(0, -1).map(t =>
    `<circle cx="${t.px}" cy="${t.py}" r="3" fill="#0A97D9" opacity="0.3"/>`
  ).join('');

  // Punto activo
  const cur = trail[trail.length - 1];
  const activeDot = `
    <circle cx="${cur.px}" cy="${cur.py}" r="7" fill="#0A97D9" opacity="0.12"/>
    <circle cx="${cur.px}" cy="${cur.py}" r="4.5" fill="#0A97D9" opacity="0.9"/>
  `;

  // Flecha de tendencia — color del trendSc de esta semana
  const trendScColors = {0:'#0A97D9',1:'#0A97D9',2:'#4C9F38',3:'#4C9F38',4:'#4C9F38',5:'#4C9F38',6:'#4C9F38'};
  const arrowColor = trendScColors[currentWeek] || '#0A97D9';
  let arrowSvg = '';
  if (currentWeek > 0) {
    const prev = trail[trail.length - 2];
    const dx = (cur.px - prev.px) * 1.8;
    const dy = (cur.py - prev.py) * 1.8;
    const mag = Math.sqrt(dx*dx + dy*dy);
    if (mag > 1) {
      const nx = dx/mag * Math.min(mag, 14);
      const ny = dy/mag * Math.min(mag, 14);
      arrowSvg = `<line x1="${cur.px}" y1="${cur.py}" x2="${cur.px+nx}" y2="${cur.py+ny}" stroke="${arrowColor}" stroke-width="1.5" opacity="0.8" marker-end="url(#arr)"/>`;
    }
  }

  const miniMatrix = `
    <svg id="mini-matrix" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="${arrowColor}" opacity="0.7"/>
        </marker>
      </defs>
      ${qSvg}${axes}${trailSvg}${dots}${activeDot}${arrowSvg}
      <text x="${padL}" y="${H-2}" font-family="DM Mono" font-size="6" fill="rgba(255,255,255,0.2)" letter-spacing="1">VIOLENCIA →</text>
      <text x="2" y="${padT+8}" font-family="DM Mono" font-size="6" fill="rgba(255,255,255,0.2)" letter-spacing="1" transform="rotate(-90,8,${padT+cH/2})">CAMBIO ↑</text>
    </svg>
  `;

  // Tensiones
  const tensiones = wk.tensiones.map(t => `
    <div class="tension-item">
      <div class="tension-dot" style="background:${t.nivel==='green'?'var(--green)':t.nivel==='yellow'?'var(--yellow)':'var(--red)'}; box-shadow:0 0 4px ${t.nivel==='green'?'var(--green)':t.nivel==='yellow'?'var(--yellow)':'var(--red)'}"></div>
      <div class="tension-text">${t.texto}</div>
    </div>
  `).join('');

  bg.innerHTML = `
    <!-- Semáforos -->
    <div class="bottom-card">
      <div class="kpi-section-title" style="border-bottom:1px solid var(--border); padding-bottom:0.5rem; margin-bottom:0.9rem">
        <span>🚦</span> Resumen de señales
      </div>
      <div class="semaforo-summary">
        <div class="sem-row">
          <div class="sem-count" style="color:var(--green)">${wk.semaforos.verde}</div>
          <div class="sem-label" style="color:var(--green)">Verde</div>
          <div class="sem-bar-wrap"><div class="sem-bar-fill" style="width:${(wk.semaforos.verde/total)*100}%; background:var(--green)"></div></div>
        </div>
        <div class="sem-row">
          <div class="sem-count" style="color:var(--yellow)">${wk.semaforos.amarillo}</div>
          <div class="sem-label" style="color:var(--yellow)">Amarillo</div>
          <div class="sem-bar-wrap"><div class="sem-bar-fill" style="width:${(wk.semaforos.amarillo/total)*100}%; background:var(--yellow)"></div></div>
        </div>
        <div class="sem-row">
          <div class="sem-count" style="color:var(--red)">${wk.semaforos.rojo}</div>
          <div class="sem-label" style="color:var(--red)">Rojo</div>
          <div class="sem-bar-wrap"><div class="sem-bar-fill" style="width:${(wk.semaforos.rojo/total)*100}%; background:var(--red)"></div></div>
        </div>
      </div>
    </div>

    <!-- Mini-matriz -->
    <div class="bottom-card">
      <div class="kpi-section-title" style="border-bottom:1px solid var(--border); padding-bottom:0.5rem; margin-bottom:0.9rem">
        <span>📍</span> Posición en la matriz · trayectoria
      </div>
      ${miniMatrix}
    </div>

    <!-- Tensiones -->
    <div class="bottom-card">
      <div class="kpi-section-title" style="border-bottom:1px solid var(--border); padding-bottom:0.5rem; margin-bottom:0.9rem">
        <span>⚠</span> Tensiones clave · FANB · Excarcelaciones
      </div>
      ${tensiones}
    </div>
  `;
}

// Init
render();

// ── i18n: recibir idioma del unified ──────────────────────────────────────
function applyLang(lang) {
  LANG = lang;
  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
  });
  // Re-render para que las funciones usen t() con el nuevo idioma
  render();
  // Actualizar week buttons
  document.querySelectorAll('.week-btn').forEach(function(btn, i) {
    var ws = T[lang].weeks_short;
    if (ws && ws[i] !== undefined) btn.textContent = ws[i];
  });
}

window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'setLang') applyLang(e.data.lang);
});

    })();
  }
}
