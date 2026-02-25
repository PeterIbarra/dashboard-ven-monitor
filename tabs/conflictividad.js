// ─── Tab: CONFLICTIVIDAD ───────────────────────────────────────────────────
// HTML del tab
const CONFLICTIVIDAD_HTML = `
<div class="kpi-strip">
  <div class="kpi-card red">
    <div class="kpi-label">Total de protestas</div>
    <div class="kpi-val">76</div>
    <div class="kpi-sub">Jul–ago 2025 · 29 eventos registrados</div>
  </div>
  <div class="kpi-card amber">
    <div class="kpi-label">Mes de mayor intensidad</div>
    <div class="kpi-val">45</div>
    <div class="kpi-sub">Julio 2025 · 59% del total del período</div>
  </div>
  <div class="kpi-card blue">
    <div class="kpi-label">Estado con más protestas</div>
    <div class="kpi-val">DC</div>
    <div class="kpi-sub">Distrito Capital · 42 protestas acumuladas</div>
  </div>
  <div class="kpi-card green">
    <div class="kpi-label">Exigencia principal</div>
    <div class="kpi-val" style="font-size:1.1rem;margin-top:0.3rem">Justicia</div>
    <div class="kpi-sub">15 eventos · seguida de vivienda (12) y laborales (11)</div>
  </div>
</div>

<div class="mapa-layout">
  <div class="map-wrap">
    <div class="section-title">Intensidad por estado · haz clic para ver detalle</div>

    <svg id="venezuela-map" viewBox="20 20 860 570" xmlns="http://www.w3.org/2000/svg">

      <!-- Relleno del Esequibo (zona reclamada) -->
      <path class="esequibo-fill" d="M 775.6,287.3 L 824.7,196.5 L 849.3,211.7 L 861.6,262.1 L 861.6,363.0 L 861.6,463.8 L 837.0,539.5 L 800.1,564.7 L 757.1,539.5 L 726.4,514.3 L 695.7,479.0 L 646.6,463.8 L 665.0,337.7 L 738.7,312.5 Z"/>

      <!-- Estados de Venezuela (paths generados de coordenadas reales) -->
      <path class="estado" data-id="Zulia" d="M 87.6,45.2 L 112.1,25.0 L 173.6,35.1 L 173.6,85.6 L 161.3,115.8 L 112.1,136.0 L 63.0,115.8 L 32.3,95.7 L 50.7,60.3 Z"/>
      <path class="estado" data-id="Falcón" d="M 173.6,35.1 L 222.7,45.2 L 259.6,60.3 L 296.4,85.6 L 271.9,110.8 L 247.3,120.9 L 210.4,120.9 L 161.3,115.8 L 173.6,85.6 Z"/>
      <path class="estado" data-id="Lara" d="M 161.3,115.8 L 210.4,120.9 L 247.3,120.9 L 271.9,110.8 L 296.4,120.9 L 308.7,136.0 L 296.4,171.3 L 247.3,176.3 L 222.7,161.2 L 204.3,146.1 L 185.9,136.0 L 173.6,125.9 Z"/>
      <path class="estado" data-id="Yaracuy" d="M 296.4,120.9 L 308.7,136.0 L 327.1,125.9 L 339.4,110.8 L 327.1,100.7 L 308.7,95.7 L 284.1,100.7 L 271.9,110.8 Z"/>
      <path class="estado" data-id="Carabobo" d="M 327.1,125.9 L 339.4,110.8 L 357.9,120.9 L 370.1,136.0 L 357.9,146.1 L 339.4,146.1 L 327.1,136.0 Z"/>
      <path class="estado" data-id="Aragua" d="M 370.1,120.9 L 394.7,105.7 L 419.3,115.8 L 431.6,125.9 L 419.3,141.0 L 388.6,146.1 L 370.1,136.0 Z"/>
      <path class="estado" data-id="La Guaira" d="M 394.7,100.7 L 419.3,90.6 L 431.6,90.6 L 431.6,105.7 L 419.3,110.8 L 394.7,105.7 Z"/>
      <path class="estado" data-id="Miranda" d="M 419.3,110.8 L 431.6,105.7 L 456.1,105.7 L 480.7,100.7 L 493.0,125.9 L 468.4,146.1 L 431.6,141.0 L 419.3,141.0 Z"/>
      <path class="estado" data-id="Distrito Capital" d="M 419.3,100.7 L 431.6,90.6 L 443.9,90.6 L 443.9,100.7 L 431.6,105.7 L 419.3,105.7 Z"/>
      <path class="estado" data-id="Anzoátegui" d="M 480.7,100.7 L 542.1,95.7 L 585.1,110.8 L 615.9,146.1 L 591.3,176.3 L 529.9,186.4 L 493.0,176.3 L 468.4,146.1 L 493.0,125.9 Z"/>
      <path class="estado" data-id="Sucre" d="M 585.1,110.8 L 615.9,95.7 L 677.3,90.6 L 708.0,110.8 L 708.0,136.0 L 665.0,146.1 L 615.9,146.1 Z"/>
      <path class="estado" data-id="Nueva Esparta" d="M 597.4,85.6 L 622.0,85.6 L 634.3,75.5 L 622.0,60.3 L 597.4,65.4 L 585.1,75.5 Z"/>
      <path class="estado" data-id="Monagas" d="M 615.9,146.1 L 665.0,146.1 L 708.0,136.0 L 720.3,161.2 L 708.0,186.4 L 652.7,186.4 L 615.9,186.4 Z"/>
      <path class="estado" data-id="Delta Amacuro" d="M 720.3,161.2 L 757.1,136.0 L 800.1,161.2 L 824.7,196.5 L 800.1,211.7 L 775.6,196.5 L 738.7,196.5 L 708.0,186.4 Z"/>
      <path class="estado" data-id="Bolívar" d="M 529.9,186.4 L 591.3,176.3 L 615.9,186.4 L 652.7,186.4 L 708.0,186.4 L 738.7,196.5 L 775.6,287.3 L 738.7,312.5 L 665.0,337.7 L 646.6,463.8 L 572.9,428.5 L 511.4,438.6 L 419.3,448.7 L 419.3,337.7 L 450.0,287.3 L 480.7,236.9 L 493.0,176.3 Z"/>
      <path class="estado" data-id="Amazonas" d="M 419.3,337.7 L 511.4,438.6 L 572.9,428.5 L 646.6,463.8 L 634.3,514.3 L 603.6,539.5 L 480.7,564.7 L 388.6,539.5 L 357.9,514.3 L 357.9,438.6 L 388.6,337.7 Z"/>
      <path class="estado" data-id="Apure" d="M 99.9,236.9 L 173.6,262.1 L 235.0,287.3 L 327.1,287.3 L 388.6,287.3 L 419.3,337.7 L 388.6,337.7 L 357.9,287.3 L 327.1,262.1 L 265.7,262.1 L 204.3,247.0 L 142.9,236.9 L 112.1,211.7 L 99.9,211.7 Z"/>
      <path class="estado" data-id="Barinas" d="M 142.9,161.2 L 161.3,136.0 L 185.9,136.0 L 204.3,146.1 L 222.7,161.2 L 222.7,186.4 L 247.3,176.3 L 265.7,196.5 L 235.0,236.9 L 173.6,262.1 L 99.9,236.9 L 112.1,186.4 L 142.9,171.3 Z"/>
      <path class="estado" data-id="Portuguesa" d="M 185.9,136.0 L 204.3,125.9 L 204.3,146.1 L 222.7,161.2 L 222.7,186.4 L 204.3,186.4 Z"/>
      <path class="estado" data-id="Cojedes" d="M 308.7,146.1 L 327.1,136.0 L 327.1,125.9 L 339.4,146.1 L 357.9,146.1 L 357.9,166.3 L 339.4,176.3 L 308.7,171.3 Z"/>
      <path class="estado" data-id="Guárico" d="M 419.3,141.0 L 468.4,146.1 L 493.0,176.3 L 529.9,186.4 L 493.0,211.7 L 450.0,236.9 L 388.6,262.1 L 357.9,287.3 L 357.9,166.3 L 357.9,146.1 L 339.4,146.1 L 339.4,176.3 L 308.7,171.3 L 308.7,146.1 L 327.1,136.0 L 419.3,141.0 Z"/>
      <path class="estado" data-id="Trujillo" d="M 204.3,146.1 L 204.3,125.9 L 222.7,115.8 L 247.3,120.9 L 247.3,136.0 L 222.7,161.2 L 204.3,161.2 Z"/>
      <path class="estado" data-id="Mérida" d="M 142.9,161.2 L 142.9,171.3 L 112.1,186.4 L 99.9,211.7 L 142.9,236.9 L 204.3,211.7 L 235.0,211.7 L 235.0,236.9 L 222.7,186.4 L 222.7,161.2 L 204.3,161.2 L 204.3,146.1 Z"/>
      <path class="estado" data-id="Táchira" d="M 99.9,211.7 L 99.9,236.9 L 112.1,262.1 L 142.9,262.1 L 173.6,262.1 L 142.9,236.9 L 112.1,186.4 L 142.9,171.3 Z"/>

      <!-- Línea del Esequibo (zona reclamada) - encima de todo -->
      <path class="esequibo" d="M 775.6,287.3 L 824.7,196.5 L 849.3,211.7 L 861.6,262.1 L 861.6,363.0 L 861.6,463.8 L 837.0,539.5 L 800.1,564.7 L 757.1,539.5 L 726.4,514.3 L 695.7,479.0 L 646.6,463.8 L 665.0,337.7 L 738.7,312.5 Z"/>

      <!-- Etiquetas — pointer-events: none -->
      <g class="map-label" style="pointer-events:none">
        <text x="100"  y="90"  font-family="Space Mono" font-size="8.5" fill="rgba(255,255,255,0.55)" text-anchor="middle">Zulia</text>
        <text x="230"  y="75"  font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.45)" text-anchor="middle">Falcón</text>
        <text x="225"  y="148" font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.45)" text-anchor="middle">Lara</text>
        <text x="312"  y="113" font-family="Space Mono" font-size="5.5" fill="rgba(255,255,255,0.4)"  text-anchor="middle">Yaracuy</text>
        <text x="349"  y="136" font-family="Space Mono" font-size="5"   fill="rgba(255,255,255,0.4)"  text-anchor="middle">Carab.</text>
        <text x="400"  y="130" font-family="Space Mono" font-size="5"   fill="rgba(255,255,255,0.4)"  text-anchor="middle">Aragua</text>
        <text x="413"  y="97"  font-family="Space Mono" font-size="4.5" fill="rgba(255,255,255,0.5)"  text-anchor="middle">LG</text>
        <text x="452"  y="124" font-family="Space Mono" font-size="5"   fill="rgba(255,255,255,0.4)"  text-anchor="middle">Miranda</text>
        <text x="432"  y="99"  font-family="Space Mono" font-size="5.5" fill="rgba(255,255,255,0.9)"  text-anchor="middle" font-weight="700">DC</text>
        <text x="540"  y="148" font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.45)" text-anchor="middle">Anzoátegui</text>
        <text x="655"  y="118" font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.45)" text-anchor="middle">Sucre</text>
        <text x="611"  y="73"  font-family="Space Mono" font-size="6"   fill="rgba(255,255,255,0.4)"  text-anchor="middle">N. Esparta</text>
        <text x="665"  y="165" font-family="Space Mono" font-size="5.5" fill="rgba(255,255,255,0.35)" text-anchor="middle">Monagas</text>
        <text x="757"  y="175" font-family="Space Mono" font-size="5.5" fill="rgba(255,255,255,0.35)" text-anchor="middle">D. Amacuro</text>
        <text x="575"  y="320" font-family="Space Mono" font-size="10"  fill="rgba(255,255,255,0.22)" text-anchor="middle">Bolívar</text>
        <text x="490"  y="490" font-family="Space Mono" font-size="8"   fill="rgba(255,255,255,0.22)" text-anchor="middle">Amazonas</text>
        <text x="240"  y="290" font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.25)" text-anchor="middle">Apure</text>
        <text x="185"  y="215" font-family="Space Mono" font-size="7"   fill="rgba(255,255,255,0.3)"  text-anchor="middle">Barinas</text>
        <text x="210"  y="168" font-family="Space Mono" font-size="5"   fill="rgba(255,255,255,0.3)"  text-anchor="middle">Port.</text>
        <text x="336"  y="162" font-family="Space Mono" font-size="5"   fill="rgba(255,255,255,0.3)"  text-anchor="middle">Cojedes</text>
        <text x="415"  y="240" font-family="Space Mono" font-size="7.5" fill="rgba(255,255,255,0.25)" text-anchor="middle">Guárico</text>
        <text x="226"  y="130" font-family="Space Mono" font-size="5.5" fill="rgba(255,255,255,0.35)" text-anchor="middle">Trujillo</text>
        <text x="165"  y="200" font-family="Space Mono" font-size="6"   fill="rgba(255,255,255,0.35)" text-anchor="middle">Mérida</text>
        <text x="122"  y="240" font-family="Space Mono" font-size="6"   fill="rgba(255,255,255,0.35)" text-anchor="middle">Táchira</text>
        <!-- Esequibo label -->
        <text x="810"  y="380" font-family="Space Mono" font-size="7.5" fill="rgba(255,190,30,0.5)"   text-anchor="middle" transform="rotate(90,810,380)">Esequibo</text>
        <text x="818"  y="395" font-family="Space Mono" font-size="5"   fill="rgba(255,190,30,0.4)"   text-anchor="middle" transform="rotate(90,818,395)">(zona reclamada)</text>
      </g>
    </svg>

    <div class="legend">
      <span>Sin datos</span>
      <div class="legend-scale" id="legend-scale"></div>
      <span>Alta intensidad</span>
      <div class="legend-extra">
        <div class="legend-dash"></div>
        <span style="color:rgba(255,190,30,0.6)">Esequibo rec.</span>
      </div>
    </div>
  </div>

  <div class="side-wrap">
    <div>
      <div class="section-title">Ranking por estado</div>
      <div id="ranking-list"></div>
    </div>
    <div id="detail-card" class="detail-card">
      <div class="section-title" id="detail-title"></div>
      <div id="detail-body"></div>
    </div>
  </div>
</div>

<div class="table-section">
  <div class="table-header">
    <div class="table-title">Registro de eventos · Jul–Ago 2025</div>
    <div class="filter-btns" id="filter-btns">
      <button class="filter-btn active" data-mes="todos">Todos</button>
      <button class="filter-btn" data-mes="julio">Julio</button>
      <button class="filter-btn" data-mes="agosto">Agosto</button>
    </div>
  </div>
  <table class="ev-table">
    <thead>
      <tr>
        <th style="width:80px">Fecha</th>
        <th style="width:38px;text-align:center">Nº</th>
        <th style="width:190px">Estados</th>
        <th style="width:210px">Exigencias</th>
        <th>Detalle</th>
      </tr>
    </thead>
    <tbody id="tabla-body"></tbody>
  </table>
</div>

<div class="footer-note">
  Fuente: Registro de Protestas y Conflictividad Social 2025 · PNUD Venezuela · Jul–Ago 2025
</div>

<div class="tooltip" id="tooltip"></div>
`;

// JS de render del tab
function init_conflictividad() {
  // Insertar HTML si el panel está vacío
  const panel = document.getElementById('panel-conflictividad');
  if (panel && !panel.dataset.loaded) {
    panel.innerHTML = CONFLICTIVIDAD_HTML;
    panel.dataset.loaded = 'true';
    // Ejecutar lógica del tab
    (function() {

const ESTADOS = {
  'Zulia':            { val:6,  exig:['Personas detenidas','Justicia'],                              eventos:['Concentración frente a Nunciatura Apostólica — presos políticos','Estudiantes UCV — consejero universitario detenido'] },
  'Falcón':           { val:17, exig:['Vivienda','Justicia'],                                        eventos:['Familiares pescadores detenidos La Guaira','Vecinos de Boconó defienden propiedad ante desalojo','Familiares piden justicia tras accidente de tránsito'] },
  'Lara':             { val:19, exig:['Derechos laborales','Educación','Justicia'],                  eventos:['Docentes exigen reincorporación y salarios','Estudiantes UCV por consejero detenido','Jubilados exigen contratación colectiva La Guaira'] },
  'Yaracuy':          { val:1,  exig:['Justicia','Personas detenidas'],                              eventos:['Comité de Madres frente al TSJ'] },
  'Carabobo':         { val:9,  exig:['Justicia','Laborales'],                                       eventos:['Familiares — accidente de tráfico en Falcón','Trabajadores de Papeles de Venezuela exigen mejoras salariales'] },
  'Aragua':           { val:8,  exig:['Laborales','Seguridad social','Vivienda'],                    eventos:['Jubilados docentes exigen reivindicaciones laborales','Jubilados exigen reivindicaciones a la Gobernación','Afectados por Lago de Valencia — vivienda'] },
  'La Guaira':        { val:29, exig:['Justicia','Laborales','Vivienda','Agua'],                     eventos:['Familiares pescadores detenidos — libertad inmediata','Jubilados exigen contratación colectiva','Vecinos exigen agua a Hidrocapital'] },
  'Miranda':          { val:1,  exig:['Justicia','Personas detenidas'],                              eventos:['Activistas ONU Caracas denuncian agresiones durante vigilia'] },
  'Distrito Capital': { val:42, exig:['Justicia','Personas detenidas','Laborales','Part. política'], eventos:['SNTP exige libertad para periodistas detenidos','Comité de Madres — vigilia detenidos post-electoral','Concentración frente a Nunciatura Apostólica','Estudiantes UCV — consejero universitario','Vigilia frente al TSJ','Denuncian agresiones en vigilia TSJ','Trabajadores exigen salarios dignos','Movimiento madres heroínas — niños deportados'] },
  'Anzoátegui':       { val:16, exig:['Laborales','Justicia','Vivienda'],                            eventos:['Familiares pescadores detenidos','Comité de Madres — vigilia electoral','Vecinos Barcelona — servicio eléctrico'] },
  'Sucre':            { val:32, exig:['Laborales','Justicia','Vivienda','Derechos laborales'],       eventos:['Jubilados de Araya — Corposucre','Familiares pescadores detenidos','Transportistas vs PNB','Vecinos exigen agua a Hidrocapital'] },
  'Nueva Esparta':    { val:16, exig:['Vivienda','Laborales','Justicia'],                            eventos:['Afectados por Lago de Valencia — vivienda','Familiares pescadores detenidos La Guaira','Paro UNEP — bono vacacional'] },
  'Monagas':          { val:1,  exig:['Vivienda','Justicia'],                                        eventos:['Jubilados La Guaira — contratación colectiva'] },
  'Delta Amacuro':    { val:0,  exig:[], eventos:[] },
  'Bolívar':          { val:3,  exig:['Laborales','Vivienda'],                                       eventos:['Paro UNEP Antonio José de Sucre — bono vacacional','Ciudadana afectada inundaciones — reubicación'] },
  'Amazonas':         { val:0,  exig:[], eventos:[] },
  'Apure':            { val:4,  exig:['Vivienda','Participación política'],                          eventos:['Trabajadores Caracas exigen salarios dignos'] },
  'Barinas':          { val:0,  exig:[], eventos:[] },
  'Portuguesa':       { val:0,  exig:[], eventos:[] },
  'Cojedes':          { val:0,  exig:[], eventos:[] },
  'Guárico':          { val:1,  exig:['Derechos NNA','Vivienda'],                                    eventos:['Exigen respeto derechos NNA hijos de migrantes deportados'] },
  'Trujillo':         { val:11, exig:['Laborales','Vivienda'],                                       eventos:['Familiares pescadores detenidos La Guaira','Vecinos de Boconó — desalojo','Jubilados La Guaira — contratación colectiva'] },
  'Mérida':           { val:9,  exig:['Vivienda','Educación'],                                       eventos:['Habitantes del páramo — inundaciones río','Jubilados La Guaira — contratación colectiva'] },
  'Táchira':          { val:6,  exig:['Justicia','Libre tránsito'],                                  eventos:['Estafa La Venezolana — Ministerio Público','Apertura frontera — Walter Márquez'] },
};

const EVENTOS = [
  { fecha:'02/07', mes:'julio',  estados:'Aragua, Lara, Portuguesa', n:3, exig:'Derechos laborales; Derecho a la vida; Derecho a la vivienda', detalle:'Docentes en Lara exigieron reincorporación y reivindicaciones salariales' },
  { fecha:'03/07', mes:'julio',  estados:'Anzoátegui, Carabobo, Falcón, Lara, La Guaira', n:5, exig:'Derechos laborales; Derecho a la justicia; Derecho a la vivienda', detalle:'Familiares y pescadores en La Guaira exigen justicia por detención de 8 pescadores' },
  { fecha:'04/07', mes:'julio',  estados:'Distrito Capital, Sucre', n:2, exig:'Justicia; Laborales', detalle:'SNTP exigió libertad para periodistas detenidos en Caracas' },
  { fecha:'07/07', mes:'julio',  estados:'Sucre', n:1, exig:'Laborales; Seguridad social; Alimentación', detalle:'Jubilados de Araya denuncian incumplimiento de contratos de Corposucre' },
  { fecha:'08/07', mes:'julio',  estados:'Anzoátegui, La Guaira, Nueva Esparta, Sucre, Trujillo', n:5, exig:'Laborales; Derecho a la propiedad privada; Vivienda; Justicia', detalle:'Familiares de pescadores detenidos exigen su libertad inmediata en La Guaira' },
  { fecha:'09/07', mes:'julio',  estados:'Nueva Esparta, Aragua', n:2, exig:'Vivienda; Educación', detalle:'Vecinos de Aragua afectados por Lago de Valencia exigen soluciones de vivienda' },
  { fecha:'10/07', mes:'julio',  estados:'Sucre, Distrito Capital, Guárico, Nueva Esparta, La Guaira', n:7, exig:'Vivienda; Agua; Educación; Laborales; Justicia; Derechos NNA; Personas detenidas', detalle:'En Caracas exigieron respeto a los derechos de NNA hijos de migrantes deportados en EE.UU.' },
  { fecha:'11/07', mes:'julio',  estados:'Aragua', n:1, exig:'Laborales; Seguridad social', detalle:'Jubilados docentes exigen reivindicaciones laborales en Aragua' },
  { fecha:'12/07', mes:'julio',  estados:'Bolívar, Nueva Esparta', n:2, exig:'Laborales; Vivienda', detalle:'Obreros de la UNEP Antonio José de Sucre iniciaron paro por bono vacacional en Bolívar' },
  { fecha:'16/07', mes:'julio',  estados:'Anzoátegui, Distrito Capital, Sucre', n:5, exig:'Justicia; Manifestación pacífica; Personas detenidas; Laborales', detalle:'Comité de Madres por la Verdad realiza vigilia por libertad de detenidos post-electoral en Caracas' },
  { fecha:'18/07', mes:'julio',  estados:'Distrito Capital, Zulia', n:2, exig:'Personas detenidas; Justicia', detalle:'Familiares se concentraron frente a la Nunciatura Apostólica exigiendo justicia para presos políticos' },
  { fecha:'21/07', mes:'julio',  estados:'Aragua', n:1, exig:'Seguridad social; Laborales', detalle:'Jubilados de Aragua exigen reivindicaciones a la Gobernación' },
  { fecha:'22/07', mes:'julio',  estados:'Mérida', n:1, exig:'Vivienda', detalle:'Habitantes del páramo exigen intervención por inundaciones del río' },
  { fecha:'23/07', mes:'julio',  estados:'Lara, Zulia, Distrito Capital', n:3, exig:'Laborales; Personas detenidas; Justicia', detalle:'Estudiantes UCV protestaron por detención de consejero universitario' },
  { fecha:'25/07', mes:'julio',  estados:'Sucre, La Guaira', n:2, exig:'Derechos laborales; Educación', detalle:'Transportistas en Sucre denuncian irregularidades de la PNB y exigen reactivación de mesas de trabajo' },
  { fecha:'30/07', mes:'julio',  estados:'Anzoátegui', n:1, exig:'Vivienda', detalle:'Vecinos de Barcelona protestaron por restitución de servicio eléctrico' },
  { fecha:'31/07', mes:'julio',  estados:'Distrito Capital, Táchira', n:2, exig:'Justicia', detalle:'Afectados por estafa del concesionario La Venezolana exigen justicia en el Ministerio Público' },
  { fecha:'05/08', mes:'agosto', estados:'Distrito Capital, Táchira, Yaracuy', n:3, exig:'Justicia; Personas detenidas', detalle:'Comité de Madres se concentra frente al TSJ' },
  { fecha:'06/08', mes:'agosto', estados:'Distrito Capital', n:1, exig:'Justicia; Manifestación pacífica; Personas detenidas', detalle:'Denuncian agresiones en vigilia frente al TSJ' },
  { fecha:'08/08', mes:'agosto', estados:'Miranda', n:1, exig:'Justicia; Personas detenidas; Derecho a defender derechos', detalle:'Activistas en ONU Caracas denuncian agresiones durante vigilia' },
  { fecha:'14/08', mes:'agosto', estados:'Falcón, Trujillo', n:2, exig:'Vivienda', detalle:'Vecinos de Boconó defienden propiedad ante desalojo' },
  { fecha:'15/08', mes:'agosto', estados:'Apure, Distrito Capital, Trujillo', n:4, exig:'Vivienda; Participación política; Laborales; Justicia', detalle:'Trabajadores en Caracas exigen salarios dignos' },
  { fecha:'18/08', mes:'agosto', estados:'Distrito Capital, Falcón, Lara, Mérida, Monagas, Sucre, La Guaira', n:8, exig:'Vivienda; Seguridad ciudadana; Justicia; Participación política; Salud; Alimentación', detalle:'Jubilados en La Guaira exigen cumplimiento de contratación colectiva' },
  { fecha:'19/08', mes:'agosto', estados:'Distrito Capital, Táchira', n:3, exig:'Libre tránsito; Libertad política', detalle:'Walter Márquez exige apertura total de frontera' },
  { fecha:'20/08', mes:'agosto', estados:'Distrito Capital', n:2, exig:'Participación política; Justicia', detalle:'Movimiento de madres heroínas exige retorno de niños deportados' },
  { fecha:'21/08', mes:'agosto', estados:'Bolívar', n:1, exig:'Vivienda; Salud', detalle:'Ciudadana afectada por inundaciones exige reubicación' },
  { fecha:'26/08', mes:'agosto', estados:'Sucre, La Guaira', n:2, exig:'Vivienda; Agua; Laborales; Seguridad social', detalle:'Vecinos en La Guaira exigen agua frente a Hidrocapital' },
  { fecha:'28/08', mes:'agosto', estados:'Carabobo, Falcón', n:2, exig:'Vivienda; Justicia', detalle:'Familiares en Falcón piden justicia tras accidente de tránsito' },
  { fecha:'29/08', mes:'agosto', estados:'Carabobo', n:2, exig:'Justicia; Contra cuerpos de seguridad; Laboral', detalle:'Trabajadores de Papeles de Venezuela exigen mejoras salariales' },
];

const MAX_VAL = 42;

function getColor(val) {
  if (!val) return '#1a2535';
  const t = Math.pow(val / MAX_VAL, 0.5);
  if (t < 0.15) return '#1e3a5f';
  if (t < 0.30) return '#1d4e8a';
  if (t < 0.45) return '#1d6fa0';
  if (t < 0.60) return '#c47a15';
  if (t < 0.75) return '#d9440d';
  return '#ef4444';
}

// Colorear estados
document.querySelectorAll('.estado').forEach(el => {
  const id = el.dataset.id;
  const d = ESTADOS[id];
  el.style.fill = d ? getColor(d.val) : '#1a2535';
});

// Leyenda
const scale = document.getElementById('legend-scale');
['#1a2535','#1e3a5f','#1d4e8a','#1d6fa0','#c47a15','#d9440d','#ef4444'].forEach(c => {
  scale.innerHTML += `<div class="legend-step" style="background:${c}"></div>`;
});

// Tooltip
const tooltip = document.getElementById('tooltip');

document.querySelectorAll('.estado').forEach(el => {
  const id = el.dataset.id;
  const d = ESTADOS[id] || { val:0, exig:[], eventos:[] };
  const color = getColor(d.val);

  el.addEventListener('mousemove', e => {
    tooltip.innerHTML = `
      <div class="tt-name" style="color:${color}">${id}</div>
      <div class="tt-count" style="color:${color}">${d.val}</div>
      <div class="tt-lbl">protestas</div>
      ${d.exig.length ? '<div style="margin-top:0.4rem;font-size:0.55rem;color:#64748b">' + d.exig.slice(0,3).join(' · ') + '</div>' : '<div style="margin-top:0.4rem;font-size:0.55rem;color:#64748b">Sin eventos en el período</div>'}
    `;
    tooltip.style.left = (e.clientX + 14) + 'px';
    tooltip.style.top  = (e.clientY - 10) + 'px';
    tooltip.classList.add('vis');
  });

  el.addEventListener('mouseleave', () => tooltip.classList.remove('vis'));

  el.addEventListener('click', () => {
    document.querySelectorAll('.estado').forEach(e => e.classList.remove('sel'));
    el.classList.add('sel');
    const card  = document.getElementById('detail-card');
    const title = document.getElementById('detail-title');
    const body  = document.getElementById('detail-body');
    title.textContent = id;
    title.style.color = color;
    const evHtml = d.eventos.length
      ? d.eventos.map(ev => `<div class="detail-ev">› ${ev}</div>`).join('')
      : '<div class="detail-ev" style="color:#64748b">Sin eventos registrados en el período</div>';
    body.innerHTML = `
      <div style="display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.6rem">
        <span class="detail-val" style="color:${color}">${d.val}</span>
        <span style="font-size:0.52rem;color:#64748b;text-transform:uppercase;letter-spacing:0.1em">protestas</span>
      </div>
      ${evHtml}
    `;
    card.style.display = 'block';
    card.style.borderColor = color + '55';
  });
});

// Ranking
const ranked = Object.entries(ESTADOS).filter(([,d])=>d.val>0).sort((a,b)=>b[1].val-a[1].val);
const rankList = document.getElementById('ranking-list');
ranked.forEach(([nombre, d], i) => {
  const color = getColor(d.val);
  const row = document.createElement('div');
  row.className = 'rank-row';
  row.innerHTML = `
    <div class="rank-num">${i+1}</div>
    <div class="rank-name">${nombre}</div>
    <div class="rank-bar-wrap"><div class="rank-bar" style="width:${(d.val/MAX_VAL)*100}%;background:${color}"></div></div>
    <div class="rank-val" style="color:${color}">${d.val}</div>
  `;
  row.addEventListener('click', () => {
    const el = document.querySelector(`.estado[data-id="${nombre}"]`);
    if (el) el.dispatchEvent(new MouseEvent('click'));
  });
  rankList.appendChild(row);
});

// Tabla
function getTagClass(ex) {
  const e = ex.toLowerCase();
  if (e.includes('justicia') || e.includes('derechos')) return 'justicia';
  if (e.includes('laboral') || e.includes('seguridad social')) return 'laboral';
  if (e.includes('vivienda') || e.includes('agua')) return 'vivienda';
  if (e.includes('detenid') || e.includes('preso') || e.includes('libertad')) return 'detenidos';
  return 'other';
}

function renderTabla(mes) {
  const tbody = document.getElementById('tabla-body');
  const filtered = mes === 'todos' ? EVENTOS : EVENTOS.filter(d => d.mes === mes);
  tbody.innerHTML = filtered.map(d => {
    const tags = d.exig.split(';').slice(0,4).map(e =>
      `<span class="tag ${getTagClass(e.trim())}">${e.trim()}</span>`
    ).join('');
    return `<tr>
      <td class="td-fecha">${d.fecha}</td>
      <td class="td-num">${d.n}</td>
      <td style="font-size:0.6rem;color:#64748b">${d.estados}</td>
      <td>${tags}</td>
      <td style="font-size:0.62rem;color:var(--text)">${d.detalle}</td>
    </tr>`;
  }).join('');
}

document.getElementById('filter-btns').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTabla(btn.dataset.mes);
});

renderTabla('todos');

    })();
  }
}
