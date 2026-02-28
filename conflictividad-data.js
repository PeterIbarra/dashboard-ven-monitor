@@ -0,0 +1,135 @@
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
// ════════════════════════════════════════════════════════════════

// ── Resumen del período ──────────────────────────────────────────
const CONF_RESUMEN = {
  periodo:       '2025 (Enero — Diciembre)',
  fuente:        'OVCS · Informe Anual 2025',
  total:         2219,
  total_desca:   1248,
  total_dcp:     971,
  total_reprim:  55,
  mes_pico:      'Enero',
  mes_pico_val:  401,
  mes_min:       'Diciembre',
  mes_min_val:   123,
  pct_desca:     56.2,
  pct_dcp:       43.8,
  pct_reprim:    2.5,
};

// ── Datos mensuales ───────────────────────────────────────────────
// tipo: 'DESCA' = Derechos Económicos, Sociales, Culturales y Ambientales
//       'DCP'   = Derechos Civiles y Políticos
const CONF_MESES = [
  {
    id: 'm01', mes: 'Enero', num: 1,
    total: 401, desca: 96, dcp: 305, reprimidas: 36,
    motivo: 'Exigencia de transparencia electoral y rechazo a la juramentación presidencial.',
    tipo_dominante: 'DCP',
  },
  {
    id: 'm02', mes: 'Febrero', num: 2,
    total: 170, desca: 107, dcp: 63, reprimidas: 0,
    motivo: 'Ruta por la Justicia y la Libertad por parte de familiares de detenidos y activistas.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm03', mes: 'Marzo', num: 3,
    total: 217, desca: 130, dcp: 87, reprimidas: 2,
    motivo: 'Rechazo a las deportaciones de migrantes venezolanos desde EE. UU. hacia El Salvador.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm04', mes: 'Abril', num: 4,
    total: 146, desca: 95, dcp: 51, reprimidas: 3,
    motivo: 'Movilizaciones de grupos políticos promoviendo participación o abstención en parlamentarias.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm05', mes: 'Mayo', num: 5,
    total: 163, desca: 119, dcp: 44, reprimidas: 3,
    motivo: 'Denuncias de restricciones al derecho a manifestar y elecciones de gobernadores/diputados.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm06', mes: 'Junio', num: 6,
    total: 152, desca: 91, dcp: 61, reprimidas: 6,
    motivo: 'Declaración de persona non grata al Alto Comisionado de la ONU para los DD. HH.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm07', mes: 'Julio', num: 7,
    total: 144, desca: 97, dcp: 47, reprimidas: 0,
    motivo: 'Exigencia de aumento salarial real y rechazo a la política de bonos.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm08', mes: 'Agosto', num: 8,
    total: 168, desca: 75, dcp: 93, reprimidas: 1,
    motivo: 'Rechazo a sanciones internacionales y jornada de alistamiento militar.',
    tipo_dominante: 'DCP',
  },
  {
    id: 'm09', mes: 'Septiembre', num: 9,
    total: 187, desca: 134, dcp: 53, reprimidas: 0,
    motivo: 'Ruta Global por la Justicia organizada por familiares de presos políticos.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm10', mes: 'Octubre', num: 10,
    total: 186, desca: 109, dcp: 77, reprimidas: 3,
    motivo: 'Vigilias por presos políticos y protestas contra abusos de cuerpos de seguridad.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm11', mes: 'Noviembre', num: 11,
    total: 162, desca: 121, dcp: 41, reprimidas: 0,
    motivo: 'Exigencia de aguinaldos suficientes y rechazo a la Constituyente Obrera.',
    tipo_dominante: 'DESCA',
  },
  {
    id: 'm12', mes: 'Diciembre', num: 12,
    total: 123, desca: 74, dcp: 49, reprimidas: 1,
    motivo: 'Reclamos por bajos aguinaldos y demandas de transportistas por tarifas.',
    tipo_dominante: 'DESCA',
  },
];

// ── Distribución geográfica ───────────────────────────────────────
const CONF_ESTADOS = [
  { estado: 'Anzoátegui',      protestas: 214, reprimidas: 1, combustible: 2, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Táchira',         protestas: 202, reprimidas: 2, combustible: 5, exigencias: 'Combustible y servicios básicos' },
  { estado: 'Distrito Capital',protestas: 201, reprimidas: 9, combustible: 0, exigencias: 'Dinámicas políticas y servicios básicos' },
  { estado: 'Sucre',           protestas: 181, reprimidas: 5, combustible: 7, exigencias: 'Desabastecimiento de combustible y servicios básicos' },
  { estado: 'Bolívar',         protestas: 166, reprimidas: 3, combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Lara',            protestas: 166, reprimidas: 2, combustible: 2, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Falcón',          protestas: 112, reprimidas: 1, combustible: 1, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Mérida',          protestas: 107, reprimidas: 1, combustible: 1, exigencias: 'Derechos fundamentales' },
  { estado: 'Aragua',          protestas: 102, reprimidas: 7, combustible: 1, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Portuguesa',      protestas:  98, reprimidas: 0, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Monagas',         protestas:  95, reprimidas: 1, combustible: 1, exigencias: 'Derechos fundamentales' },
  { estado: 'Miranda',         protestas:  90, reprimidas: 4, combustible: 0, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Carabobo',        protestas:  88, reprimidas: 7, combustible: 0, exigencias: 'Derechos fundamentales y servicios básicos' },
  { estado: 'Nueva Esparta',   protestas:  82, reprimidas: 2, combustible: 6, exigencias: 'Suministro regular de combustible y servicios básicos' },
  { estado: 'Zulia',           protestas:  61, reprimidas: 2, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Cojedes',         protestas:  52, reprimidas: 2, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Vargas',          protestas:  51, reprimidas: 3, combustible: 3, exigencias: 'Combustible y servicios básicos' },
  { estado: 'Barinas',         protestas:  34, reprimidas: 0, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Guárico',         protestas:  31, reprimidas: 0, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Trujillo',        protestas:  28, reprimidas: 1, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Yaracuy',         protestas:  28, reprimidas: 0, combustible: 0, exigencias: 'Derechos fundamentales' },
  { estado: 'Delta Amacuro',   protestas:  14, reprimidas: 2, combustible: 0, exigencias: 'Servicios básicos y acceso a derechos fundamentales' },
  { estado: 'Apure',           protestas:  10, reprimidas: 0, combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
  { estado: 'Amazonas',        protestas:   6, reprimidas: 0, combustible: 0, exigencias: 'Servicios básicos, empleo y acceso a derechos fundamentales' },
];
