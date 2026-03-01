// ══════════════════════════════════════════════════════════════════
// CONFLICTIVIDAD SOCIAL — VENEZUELA 2025
// Fuente: OVCS · Informe Anual 2025
// ══════════════════════════════════════════════════════════════════

// ── RESUMEN GENERAL ───────────────────────────────────────────────
var CONF_RESUMEN = {
  total:           2219,
  total_2024:      5226,
  variacion_pct:   -57,
  nota:            'Mínimo histórico en 14 años de monitoreo',
  total_desca:     1248,
  pct_desca:       56,
  total_dcp:       971,
  pct_dcp:         44,
  total_reprim:    55,
  pct_reprim:      2.5,
  total_combinadas:1069,
  vs_seg:          60,
  participacion_fem: 2119,
  pct_fem:         95,
  protestas_lab:   573,
  mes_pico:        'Enero',
  mes_pico_val:    401,
  mes_min:         'Diciembre',
  mes_min_val:     123,
  fuente:          'OVCS · Informe Anual 2025'
};

// ── PROTESTAS POR MES ─────────────────────────────────────────────
var CONF_MESES = [
  { mes:'Enero',      total:401, desca:96,  dcp:305, reprimidas:36, tipo_dominante:'DCP',   hecho:'Exigencia de transparencia electoral y rechazo a la juramentación presidencial. Colectivos paramilitares en 17 protestas.' },
  { mes:'Febrero',    total:170, desca:107, dcp:63,  reprimidas:0,  tipo_dominante:'DESCA',  hecho:'Ruta por la Justicia y la Libertad por parte de familiares de detenidos y activistas.' },
  { mes:'Marzo',      total:217, desca:130, dcp:87,  reprimidas:2,  tipo_dominante:'DESCA',  hecho:'Rechazo a las deportaciones de migrantes venezolanos desde EE.UU. hacia El Salvador.' },
  { mes:'Abril',      total:146, desca:95,  dcp:51,  reprimidas:3,  tipo_dominante:'DESCA',  hecho:'Movilizaciones de grupos políticos promoviendo participación o abstención en elecciones parlamentarias.' },
  { mes:'Mayo',       total:163, desca:119, dcp:44,  reprimidas:3,  tipo_dominante:'DESCA',  hecho:'Denuncias de restricciones al derecho a manifestar y elecciones de gobernadores y diputados.' },
  { mes:'Junio',      total:152, desca:91,  dcp:61,  reprimidas:6,  tipo_dominante:'DESCA',  hecho:'Declaración de persona non grata al Alto Comisionado de la ONU para los Derechos Humanos.' },
  { mes:'Julio',      total:144, desca:97,  dcp:47,  reprimidas:0,  tipo_dominante:'DESCA',  hecho:'Exigencia de aumento salarial real y rechazo a la política de bonos no salariales.' },
  { mes:'Agosto',     total:168, desca:75,  dcp:93,  reprimidas:1,  tipo_dominante:'DCP',    hecho:'Rechazo a sanciones internacionales y jornada de alistamiento militar.' },
  { mes:'Septiembre', total:187, desca:134, dcp:53,  reprimidas:0,  tipo_dominante:'DESCA',  hecho:'Ruta Global por la Justicia organizada por familiares de presos políticos.' },
  { mes:'Octubre',    total:186, desca:109, dcp:77,  reprimidas:3,  tipo_dominante:'DESCA',  hecho:'Vigilias por presos políticos y protestas contra abusos de cuerpos de seguridad.' },
  { mes:'Noviembre',  total:162, desca:121, dcp:41,  reprimidas:0,  tipo_dominante:'DESCA',  hecho:'Exigencia de aguinaldos suficientes y rechazo a la Constituyente Obrera.' },
  { mes:'Diciembre',  total:123, desca:74,  dcp:49,  reprimidas:1,  tipo_dominante:'DESCA',  hecho:'Reclamos por bajos aguinaldos y demandas de transportistas por tarifas.' }
];

// ── DERECHOS MÁS EXIGIDOS ─────────────────────────────────────────
var CONF_DERECHOS = [
  { ranking:1, derecho:'Participación política', categoria:'DCP',   protestas:648, pct:29.2, desc:'Garantías electorales, pluralismo político y libertad de expresión. Enero fue el mes pico con 284 protestas.' },
  { ranking:2, derecho:'Derechos laborales',     categoria:'DESCA', protestas:573, pct:25.8, desc:'Salarios insuficientes (mínimo ~3 USD/mes), bonos no salariales, ausencia de negociación colectiva.' },
  { ranking:3, derecho:'Vivienda/hábitat',       categoria:'DESCA', protestas:556, pct:25.1, desc:'Crisis habitacional vinculada al colapso de servicios básicos.' },
  { ranking:4, derecho:'Justicia',               categoria:'DCP',   protestas:504, pct:22.7, desc:'Presos políticos, debido proceso, impunidad. Picos en enero, marzo y octubre.' },
  { ranking:5, derecho:'Servicios básicos',      categoria:'DESCA', protestas:275, pct:12.4, desc:'Electricidad, agua, aguas servidas, vialidad, desechos, gas, alumbrado.' },
  { ranking:6, derecho:'Salud',                  categoria:'DESCA', protestas:189, pct:8.5,  desc:'Hospitales sin insumos, infraestructura deteriorada, déficit de especialistas.' },
  { ranking:7, derecho:'Educación',              categoria:'DESCA', protestas:186, pct:8.4,  desc:'Planteles sin agua/electricidad, salarios docentes insuficientes, fuga de profesores.' },
  { ranking:8, derecho:'Seguridad social',       categoria:'DESCA', protestas:151, pct:6.8,  desc:'Jubilados y pensionados en indigencia. Pensiones no cubren necesidades básicas.' }
];

// ── SERVICIOS BÁSICOS ─────────────────────────────────────────────
var CONF_SERVICIOS = [
  { servicio:'Electricidad',      icono:'⚡', protestas:160, pct:58.2, problematica:'Fluctuaciones y racionamientos prolongados. Paraliza salud, educación y alimentación.' },
  { servicio:'Agua potable',      icono:'💧', protestas:98,  pct:35.6, problematica:'Familias pagan camiones cisterna. Riesgo sanitario por falta de mantenimiento.' },
  { servicio:'Aguas servidas',    icono:'🚰', protestas:88,  pct:32.0, problematica:'Desbordamientos que contaminan el entorno. Crisis se agrava en temporada de lluvias.' },
  { servicio:'Vialidad',          icono:'🛣️', protestas:85,  pct:30.9, problematica:'Huecos y falta de asfaltado. Afecta transporte de alimentos y emergencias médicas.' },
  { servicio:'Desechos sólidos',  icono:'🗑️', protestas:38,  pct:13.8, problematica:'Calles convertidas en vertederos. Quema de basura. Riesgo respiratorio.' },
  { servicio:'Combustible/gas',   icono:'⛽', protestas:29,  pct:10.5, problematica:'11 estados afectados. Impacto en pesca, agricultura y transporte.' },
  { servicio:'Gas doméstico',     icono:'🔥', protestas:16,  pct:5.8,  problematica:'Cilindros deteriorados. Familias usan leña o resistencias eléctricas.' },
  { servicio:'Alumbrado público', icono:'💡', protestas:11,  pct:4.0,  problematica:'Aumenta delincuencia y accidentes. Paraliza vida comercial nocturna.' }
];

// ── DISTRIBUCIÓN GEOGRÁFICA ───────────────────────────────────────
var CONF_ESTADOS = [
  { estado:'Anzoátegui',      protestas:214, reprimidas:1, combustible:2,  exigencias:'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado:'Táchira',         protestas:202, reprimidas:2, combustible:5,  exigencias:'Combustible y servicios básicos' },
  { estado:'Distrito Capital',protestas:201, reprimidas:9, combustible:0,  exigencias:'Dinámicas políticas y servicios básicos' },
  { estado:'Sucre',           protestas:181, reprimidas:5, combustible:7,  exigencias:'Desabastecimiento de combustible y servicios básicos' },
  { estado:'Bolívar',         protestas:166, reprimidas:3, combustible:0,  exigencias:'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado:'Lara',            protestas:166, reprimidas:2, combustible:2,  exigencias:'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado:'Falcón',          protestas:112, reprimidas:1, combustible:1,  exigencias:'Derechos fundamentales y servicios básicos' },
  { estado:'Mérida',          protestas:107, reprimidas:1, combustible:1,  exigencias:'Derechos fundamentales' },
  { estado:'Aragua',          protestas:102, reprimidas:7, combustible:1,  exigencias:'Derechos fundamentales y servicios básicos' },
  { estado:'Portuguesa',      protestas:98,  reprimidas:0, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Monagas',         protestas:95,  reprimidas:1, combustible:1,  exigencias:'Derechos fundamentales' },
  { estado:'Miranda',         protestas:90,  reprimidas:4, combustible:0,  exigencias:'Derechos fundamentales y servicios básicos' },
  { estado:'Carabobo',        protestas:88,  reprimidas:7, combustible:0,  exigencias:'Derechos fundamentales y servicios básicos' },
  { estado:'Nueva Esparta',   protestas:82,  reprimidas:2, combustible:6,  exigencias:'Suministro de combustible y servicios básicos' },
  { estado:'Zulia',           protestas:61,  reprimidas:2, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Cojedes',         protestas:52,  reprimidas:2, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Vargas',          protestas:51,  reprimidas:3, combustible:3,  exigencias:'Combustible y servicios básicos' },
  { estado:'Barinas',         protestas:34,  reprimidas:0, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Guárico',         protestas:31,  reprimidas:0, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Trujillo',        protestas:28,  reprimidas:1, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Yaracuy',         protestas:28,  reprimidas:0, combustible:0,  exigencias:'Derechos fundamentales' },
  { estado:'Delta Amacuro',   protestas:14,  reprimidas:2, combustible:0,  exigencias:'Servicios básicos y derechos fundamentales' },
  { estado:'Apure',           protestas:10,  reprimidas:0, combustible:0,  exigencias:'Servicios básicos, empleo y derechos fundamentales' },
  { estado:'Amazonas',        protestas:6,   reprimidas:0, combustible:0,  exigencias:'Servicios básicos, empleo y derechos fundamentales' }
];

// ── SERIE HISTÓRICA 2011-2025 ─────────────────────────────────────
var CONF_HISTORICO = [
  { anio:2011, protestas:5338,  variacion:null,  hito:'Inicio del monitoreo OVCS. Gobierno Chávez. Protestas por servicios básicos.', esActual:false },
  { anio:2012, protestas:5483,  variacion:145,   hito:'Año electoral. Reelección de Chávez. Demandas por servicios y seguridad.', esActual:false },
  { anio:2013, protestas:4410,  variacion:-1073, hito:'Muerte de Chávez. Maduro asume presidencia. Inicio crisis económica.', esActual:false },
  { anio:2014, protestas:9286,  variacion:4876,  hito:"Protestas masivas 'La Salida'. Represión con 43 muertos. Escasez generalizada.", esActual:false },
  { anio:2015, protestas:5851,  variacion:-3435, hito:'AN elegida con mayoría opositora. Crisis económica se profundiza.', esActual:false },
  { anio:2016, protestas:6917,  variacion:1066,  hito:'Referéndum revocatorio bloqueado. Hiperinflación inicia. Escasez grave.', esActual:false },
  { anio:2017, protestas:9787,  variacion:2870,  hito:'112 días de protestas continuas. Asamblea Constituyente. 125+ muertos.', esActual:false },
  { anio:2018, protestas:12715, variacion:2928,  hito:'Elecciones cuestionadas. Lanzamiento bolívar soberano. Éxodo masivo.', esActual:false },
  { anio:2019, protestas:16739, variacion:4024,  hito:'Pico histórico. Apagones nacionales. Guaidó proclamado presidente interino.', esActual:false },
  { anio:2020, protestas:9633,  variacion:-7106, hito:'Pandemia COVID-19. Cuarentena reduce protestas pero agrava crisis.', esActual:false },
  { anio:2021, protestas:6560,  variacion:-3073, hito:'Elecciones regionales. Oposición participa parcialmente. Crisis continúa.', esActual:false },
  { anio:2022, protestas:7032,  variacion:472,   hito:'Negociaciones en México. Levantamiento parcial de sanciones internacionales.', esActual:false },
  { anio:2023, protestas:6956,  variacion:-76,   hito:'Acuerdo de Barbados. Elecciones primarias opositoras.', esActual:false },
  { anio:2024, protestas:5226,  variacion:-1730, hito:"Elecciones presidenciales julio 28. Maduro reelegido en proceso cuestionado. 'Operación TunTun'.", esActual:false },
  { anio:2025, protestas:2219,  variacion:-3007, hito:'Mínimo histórico. Represión selectiva. Captura de Maduro por EE.UU. el 3 enero 2026.', esActual:true }
];
