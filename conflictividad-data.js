// ════════════════════════════════════════════════════════════════
// conflictividad-data.js  ·  Venezuela Dashboard  ·  PNUD
// ════════════════════════════════════════════════════════════════
//
// Datos del tab Conflictividad — actualización mensual.
// Fuente: OVCS · Informe Anual 2025
//
// Qué actualizar mensualmente:
//   1. CONF_RESUMEN       →  métricas del período
//   2. CONF_MESES[]       →  añadir mes nuevo al final
//   3. CONF_ESTADOS[]     →  actualizar si hay nuevos datos
//   4. CONF_DERECHOS[]    →  revisar si hay nueva edición
//   5. CONF_SERVICIOS[]   →  revisar si hay nueva edición
//   6. CONF_HISTORICO[]   →  añadir año nuevo cuando cierre
// ════════════════════════════════════════════════════════════════

// ── Resumen del período ──────────────────────────────────────────
const CONF_RESUMEN = {
  periodo:            '2025 (Enero — Diciembre)',
  fuente:             'OVCS · Informe Anual 2025',
  total:              2219,
  total_2024:         5226,
  total_desca:        1248,
  total_dcp:          971,
  total_reprim:       55,
  total_combinadas:   1069,   // protestas con múltiples demandas simultáneas
  total_vs_seguridad: 60,     // protestas frente a cuerpos de seguridad (19 estados)
  total_laborales:    573,
  total_laborales_2024: 1075,
  participacion_fem:  2119,   // protestas con participación femenina
  pct_fem:            95.5,
  promedio_diario:    6,
  promedio_diario_2024: 15,
  mes_pico:           'Enero',
  mes_pico_val:       401,
  mes_min:            'Diciembre',
  mes_min_val:        123,
  pct_desca:          56.2,
  pct_dcp:            43.8,
  pct_reprim:         2.5,
  nota_historica:     'Mínimo histórico en 14 años de monitoreo OVCS',
};

// ── Datos mensuales ───────────────────────────────────────────────
// tipo: 'DESCA' = Derechos Económicos, Sociales, Culturales y Ambientales
//       'DCP'   = Derechos Civiles y Políticos
const CONF_MESES = [
  {
    id: 'm01', mes: 'Enero', num: 1,
    total: 401, desca: 96, dcp: 305, reprimidas: 36,
    motivo: 'Exigencia de transparencia electoral y rechazo a la juramentación presidencial.',
    hecho_destacado: 'Oposición rechaza juramentación Maduro; colectivos paramilitares en 17 protestas',
    tipo_dominante: 'DCP',
  },
  {
    id: 'm02', mes: 'Febrero', num: 2,
    total: 170, desca: 107, dcp: 63, reprimidas: 0,
    motivo: 'Ruta por la Justicia y la Libertad por parte de familiares de detenidos y activistas.',
    hecho_destacado: "'Ruta por la Justicia y la Libertad' por familiares de presos políticos",
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm03', mes: 'Marzo', num: 3,
    total: 217, desca: 130, dcp: 87, reprimidas: 2,
    motivo: 'Rechazo a las deportaciones de migrantes venezolanos desde EE. UU. hacia El Salvador.',
    hecho_destacado: 'Protestas masivas vs. deportaciones de venezolanos al CECOT en El Salvador',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm04', mes: 'Abril', num: 4,
    total: 146, desca: 95, dcp: 51, reprimidas: 3,
    motivo: 'Movilizaciones de grupos políticos promoviendo participación o abstención en parlamentarias.',
    hecho_destacado: 'Movilizaciones pro participación en elecciones parlamentarias de mayo',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm05', mes: 'Mayo', num: 5,
    total: 163, desca: 119, dcp: 44, reprimidas: 3,
    motivo: 'Denuncias de restricciones al derecho a manifestar y elecciones de gobernadores/diputados.',
    hecho_destacado: 'Denuncias de restricciones policiales; elecciones gobernadores y AN',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm06', mes: 'Junio', num: 6,
    total: 152, desca: 91, dcp: 61, reprimidas: 6,
    motivo: 'Declaración de persona non grata al Alto Comisionado de la ONU para los DD. HH.',
    hecho_destacado: 'AN declara persona non grata al Alto Comisionado ONU DDHH Volker Türk',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm07', mes: 'Julio', num: 7,
    total: 144, desca: 97, dcp: 47, reprimidas: 0,
    motivo: 'Exigencia de aumento salarial real y rechazo a la política de bonos.',
    hecho_destacado: 'Trabajadores exigen aumento salarial real; rechazan política de bonos',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm08', mes: 'Agosto', num: 8,
    total: 168, desca: 75, dcp: 93, reprimidas: 1,
    motivo: 'Rechazo a sanciones internacionales y jornada de alistamiento militar.',
    hecho_destacado: "Manifestaciones pro-gobierno vs. sanciones; jornada 'Yo me alisto al tricolor'",
    tipo_dominante: 'DCP',
  },
  {
    id: 'm09', mes: 'Septiembre', num: 9,
    total: 187, desca: 134, dcp: 53, reprimidas: 0,
    motivo: 'Ruta Global por la Justicia organizada por familiares de presos políticos.',
    hecho_destacado: "'Ruta Global por la Justicia' en embajadas y sedes diplomáticas",
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm10', mes: 'Octubre', num: 10,
    total: 186, desca: 109, dcp: 77, reprimidas: 3,
    motivo: 'Vigilias por presos políticos y protestas contra abusos de cuerpos de seguridad.',
    hecho_destacado: 'Vigilias de familiares de presos políticos; 11 protestas vs. cuerpos de seguridad',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm11', mes: 'Noviembre', num: 11,
    total: 162, desca: 121, dcp: 41, reprimidas: 0,
    motivo: 'Exigencia de aguinaldos suficientes y rechazo a la Constituyente Obrera.',
    hecho_destacado: 'Trabajadores exigen aguinaldos; rechazo a Constituyente Obrera',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm12', mes: 'Diciembre', num: 12,
    total: 123, desca: 74, dcp: 49, reprimidas: 1,
    motivo: 'Reclamos por bajos aguinaldos y demandas de transportistas por tarifas.',
    hecho_destacado: 'Protestas por aguinaldos fraccionados; transportistas vs. tarifas y extorsión policial',
    tipo_dominante: 'DESCA',
  },
];

// ── Derechos más exigidos ─────────────────────────────────────────
const CONF_DERECHOS = [
  {
    ranking: 1,
    derecho: 'Participación política',
    categoria: 'DCP',
    protestas: 648,
    pct: 29.2,
    descripcion: 'Exigencia de garantías electorales, pluralismo político y libertad de expresión. Enero fue el mes pico con 284 protestas.',
  },
  {
    ranking: 2,
    derecho: 'Derechos laborales',
    categoria: 'DESCA',
    protestas: 573,
    pct: 25.8,
    descripcion: 'Salarios insuficientes (mínimo ~3 USD/mes), bonos no salariales, ausencia de negociación colectiva.',
  },
  {
    ranking: 3,
    derecho: 'Vivienda y hábitat',
    categoria: 'DESCA',
    protestas: 556,
    pct: 25.1,
    descripcion: 'Crisis habitacional vinculada al colapso de servicios básicos: electricidad, agua, aguas servidas, vialidad.',
  },
  {
    ranking: 4,
    derecho: 'Justicia',
    categoria: 'DCP',
    protestas: 504,
    pct: 22.7,
    descripcion: 'Presos políticos, debido proceso, impunidad. Picos en enero, marzo y octubre.',
  },
  {
    ranking: 5,
    derecho: 'Servicios básicos',
    categoria: 'DESCA',
    protestas: 275,
    pct: 12.4,
    descripcion: 'Electricidad, agua, aguas servidas, vialidad, desechos, gas, alumbrado público.',
  },
  {
    ranking: 6,
    derecho: 'Salud',
    categoria: 'DESCA',
    protestas: 189,
    pct: 8.5,
    descripcion: 'Hospitales sin insumos, infraestructura deteriorada, déficit de especialistas. Sistema de pago indirecto.',
  },
  {
    ranking: 7,
    derecho: 'Educación',
    categoria: 'DESCA',
    protestas: 186,
    pct: 8.4,
    descripcion: 'Planteles sin agua/electricidad, salarios docentes insuficientes, fuga de profesores. Picos en septiembre (26) y febrero (23).',
  },
  {
    ranking: 8,
    derecho: 'Seguridad social',
    categoria: 'DESCA',
    protestas: 151,
    pct: 6.8,
    descripcion: 'Jubilados y pensionados en situación de indigencia. Pensiones no cubren necesidades básicas diarias.',
  },
];

// ── Servicios básicos ─────────────────────────────────────────────
const CONF_SERVICIOS = [
  {
    servicio: 'Electricidad',
    protestas: 160,
    pct: 58.2,
    problematica: 'Fluctuaciones y racionamientos prolongados. Comunidades compran generadores. Paraliza salud, educación y cadena alimentaria.',
    icono: '⚡',
  },
  {
    servicio: 'Agua potable',
    protestas: 98,
    pct: 35.6,
    problematica: 'Familias pagan camiones cisterna o usan quebradas. Riesgo sanitario por falta de mantenimiento en estaciones de bombeo.',
    icono: '💧',
  },
  {
    servicio: 'Aguas servidas',
    protestas: 88,
    pct: 32.0,
    problematica: 'Desbordamientos que contaminan el entorno. Crisis se agrava en temporada de lluvias. Riesgo de enfermedades infecciosas.',
    icono: '🚰',
  },
  {
    servicio: 'Vialidad',
    protestas: 85,
    pct: 30.9,
    problematica: 'Huecos y falta de asfaltado. Afecta transporte de alimentos y traslado de emergencias médicas. Vecinos cierran calles para exigir reparaciones.',
    icono: '🛣️',
  },
  {
    servicio: 'Desechos sólidos',
    protestas: 38,
    pct: 13.8,
    problematica: 'Calles convertidas en vertederos. Quema de basura como alternativa. Riesgo respiratorio y de incendios.',
    icono: '🗑️',
  },
  {
    servicio: 'Combustible / gasolina',
    protestas: 29,
    pct: 10.5,
    problematica: '11 estados afectados. Impacto en pesca, agricultura y transporte. Sucre (7), Nueva Esparta (6) y Táchira (5) lideran.',
    icono: '⛽',
  },
  {
    servicio: 'Gas doméstico',
    protestas: 16,
    pct: 5.8,
    problematica: 'Cilindros deteriorados con fugas. Familias usan leña o resistencias eléctricas. Normalización de la precariedad.',
    icono: '🔥',
  },
  {
    servicio: 'Alumbrado público',
    protestas: 11,
    pct: 4.0,
    problematica: 'Ausencia de mantenimiento aumenta delincuencia y accidentes de tránsito. Paraliza vida comercial nocturna.',
    icono: '💡',
  },
];

// ── Distribución geográfica ───────────────────────────────────────
const CONF_ESTADOS = [
  { estado: 'Anzoátegui',       protestas: 214, reprimidas: 1,  combustible: 2, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Táchira',          protestas: 202, reprimidas: 2,  combustible: 5, exigencias: 'Combustible y servicios básicos' },
  { estado: 'Distrito Capital', protestas: 201, reprimidas: 9,  combustible: 0, exigencias: 'Dinámicas políticas y servicios básicos' },
  { estado: 'Sucre',            protestas: 181, reprimidas: 5,  combustible: 7, exigencias: 'Desabastecimiento de combustible y servicios básicos' },
  { estado: 'Bolívar',          protestas: 166, reprimidas: 3,  combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Lara',             protestas: 166, reprimidas: 2,  combustible: 2, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Falcón',           protestas: 112, reprimidas: 1,  combustible: 1, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Mérida',           protestas: 107, reprimidas: 1,  combustible: 1, exigencias: 'Derechos fundamentales' },
  { estado: 'Aragua',           protestas: 102, reprimidas: 7,  combustible: 1, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Portuguesa',       protestas:  98, reprimidas: 0,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Monagas',          protestas:  95, reprimidas: 1,  combustible: 1, exigencias: 'Derechos fundamentales' },
  { estado: 'Miranda',          protestas:  90, reprimidas: 4,  combustible: 0, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Carabobo',         protestas:  88, reprimidas: 7,  combustible: 0, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Nueva Esparta',    protestas:  82, reprimidas: 2,  combustible: 6, exigencias: 'Suministro regular de combustible y servicios básicos' },
  { estado: 'Zulia',            protestas:  61, reprimidas: 2,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Cojedes',          protestas:  52, reprimidas: 2,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Vargas',           protestas:  51, reprimidas: 3,  combustible: 3, exigencias: 'Combustible y servicios básicos' },
  { estado: 'Barinas',          protestas:  34, reprimidas: 0,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Guárico',          protestas:  31, reprimidas: 0,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Trujillo',         protestas:  28, reprimidas: 1,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Yaracuy',          protestas:  28, reprimidas: 0,  combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Delta Amacuro',    protestas:  14, reprimidas: 2,  combustible: 0, exigencias: 'Servicios básicos y acceso a derechos fundamentales' },
  { estado: 'Apure',            protestas:  10, reprimidas: 0,  combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Amazonas',         protestas:   6, reprimidas: 0,  combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
];

// ── Serie histórica 2011–2025 ─────────────────────────────────────
const CONF_HISTORICO = [
  { anio: 2011, protestas: 5338,  variacion: null, hito: 'Inicio del monitoreo OVCS. Gobierno Chávez. Protestas por servicios básicos.' },
  { anio: 2012, protestas: 5483,  variacion: +145, hito: 'Año electoral. Reelección de Chávez. Demandas por servicios y seguridad.' },
  { anio: 2013, protestas: 4410,  variacion: -1073, hito: 'Muerte de Chávez. Maduro asume presidencia. Inicio crisis económica.' },
  { anio: 2014, protestas: 9286,  variacion: +4876, hito: "Protestas masivas 'La Salida'. Represión con 43 muertos. Escasez generalizada." },
  { anio: 2015, protestas: 5851,  variacion: -3435, hito: 'AN elegida con mayoría opositora. Crisis económica se profundiza.' },
  { anio: 2016, protestas: 6917,  variacion: +1066, hito: 'Referéndum revocatorio bloqueado. Hiperinflación inicia. Escasez grave.' },
  { anio: 2017, protestas: 9787,  variacion: +2870, hito: '112 días de protestas continuas. Asamblea Constituyente. 125+ muertos.' },
  { anio: 2018, protestas: 12715, variacion: +2928, hito: 'Elecciones cuestionadas. Bolívar soberano. Éxodo masivo.' },
  { anio: 2019, protestas: 16739, variacion: +4024, hito: 'Pico histórico. Apagones nacionales. Guaidó proclamado presidente interino.' },
  { anio: 2020, protestas: 9633,  variacion: -7106, hito: 'Pandemia COVID-19. Cuarentena reduce protestas pero agrava crisis.' },
  { anio: 2021, protestas: 6560,  variacion: -3073, hito: 'Elecciones regionales. Oposición participa parcialmente. Crisis continúa.' },
  { anio: 2022, protestas: 7032,  variacion: +472,  hito: 'Negociaciones en México. Levantamiento parcial de sanciones.' },
  { anio: 2023, protestas: 6956,  variacion: -76,   hito: 'Acuerdo de Barbados. Elecciones primarias opositoras.' },
  { anio: 2024, protestas: 5226,  variacion: -1730, hito: "Elecciones presidenciales 28 jul. Maduro reelegido en proceso cuestionado. 'Operación TunTun'." },
  { anio: 2025, protestas: 2219,  variacion: -3007, hito: 'Mínimo histórico 14 años. Represión selectiva. Captura de Maduro por EE.UU. el 3 enero 2026.', esActual: true },
];
