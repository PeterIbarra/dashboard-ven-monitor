// ─────────────────────────────────────────────────────────────────────
// SEMANAS.JS · Fuente única de datos · Venezuela Monitor 2026
// ⭐ SOLO ESTE ARCHIVO SE ACTUALIZA CADA SEMANA
// ─────────────────────────────────────────────────────────────────────

const META = {
  semana_actual: 5,
  label: '13–20 feb 2026',
  generado: '2026-02-25'
};

const scenarios = [
  { id: 1, name: 'Transición política pacífica', short: 'Transición', color: '#4C9F38', bg: 'rgba(76,159,56,0.15)' },
  { id: 2, name: 'Colapso y fragmentación', short: 'Colapso', color: '#E5243B', bg: 'rgba(229,36,59,0.15)' },
  { id: 3, name: 'Continuidad negociada', short: 'Continuidad', color: '#0A97D9', bg: 'rgba(10,151,217,0.15)' },
  { id: 4, name: 'Resistencia y escalada coercitiva', short: 'Resistencia', color: '#FCC30B', bg: 'rgba(252,195,11,0.15)' },
];

const weeks = [
  {
    label: '03–15 ene',
    shortLabel: '3–15E',
    probs: [
      { sc: 1, label: 'Muy baja', value: 5, drivers: ['Captura de Maduro: punto de inflexión sin ruptura formal del orden interno', 'Continuidad institucional condicionada avalada por TSJ y respaldada por EE.UU.', 'Estado de Conmoción Exterior activo; control militar preservado', '79% opinión favorable hacia Delcy Rodríguez (Hinterlaces)'], signals: ['Reanudación progresiva exportaciones petroleras', 'Excarcelaciones graduales (101 confirmadas, 14 periodistas)', 'Reapertura embajadas EE.UU.–Venezuela', 'Orden ejecutiva Trump para proteger ingresos petroleros venezolanos'] },
      { sc: 2, label: 'Alta (dominante)', value: 45, drivers: ['Operativo del 3 de enero: captura de Maduro por fuerzas estadounidenses', 'Estado de Conmoción Exterior activo; interrupción casi total de exportaciones', 'Alta opacidad sobre víctimas, bajas y detenidos del operativo', 'Restricciones a prensa extranjera, detenciones temporales y deportaciones'], signals: ['Interrupción casi total de exportaciones petroleras (días iniciales)', 'Restricciones a prensa extranjera y detenciones de periodistas', 'Fallecimientos bajo custodia del Estado reportados', 'Entorno de alta fragilidad e incertidumbre institucional'] },
      { sc: 3, label: 'Media', value: 40, drivers: ['Alta opacidad sobre víctimas del operativo del 3 de enero', 'Restricciones a prensa extranjera y detenciones temporales de periodistas', 'Narrativa soberanista como escudo frente a presión internacional'], signals: ['Reversión de excarcelaciones o nuevas detenciones masivas', 'Endurecimiento del discurso securitario', 'Ruptura de cooperación energética con EE.UU.'] },
      { sc: 4, label: 'Baja', value: 10, drivers: ['Ruptura de cohesión civil-militar post-operativo 3 ene', 'Interrupción casi total de exportaciones petroleras (días iniciales)', 'Choques exógenos severos en período de máxima fragilidad'], signals: ['Reactivación de operativos de represión masiva', 'Colapso del esquema energético supervisado', 'Escalada rápida de conflictividad territorial'] },
    ],
    points: [{ sc: 1, x: 90, y: 340 }, { sc: 2, x: 88, y: 92 }, { sc: 3, x: 430, y: 355 }, { sc: 4, x: 415, y: 92 }],
    active: 2, activeXY: { x: 240, y: 270 },
    trendSc: 3,
    trendDrivers: ['Estabilización post-operativo: continuidad institucional bajo tutela EE.UU.', 'Exportaciones petroleras reactivándose; orden ejecutiva Trump protege ingresos', 'Excarcelaciones graduales (101 confirmadas) señalan distensión selectiva'],
    moveReason: null
  },
  {
    label: '16–22 ene',
    shortLabel: '16–22E',
    // Estabilización incipiente. Doble canal EE.UU. Cohesión civil-militar preservada.
    // E3 sube: LG-46 en proceso, fusiones ministeriales. E2 baja mucho: colapso contenido.
    // E4 sube levemente: control preventivo, reestructuración mandos sin ruptura.
    moveReason: 'Doble canal EE.UU. estabiliza el esquema. E3 emerge como dominante por LG-46 y fusiones ministeriales.',
    probs: [
      { sc: 1, label: 'Baja', value: 15, drivers: ['Validación externa explícita de EE.UU. al Ejecutivo interino', 'Doble canal estratégico: reconocimiento a Delcy + interlocución con MCM', 'Esquema petrolero-financiero supervisado con divisas llegando a banca privada', '47% aprobación interna a operación EE.UU.; 51.6% prefiere MCM (ATLAS/Bloomberg)'], signals: ['Reducción brecha cambiaria por canalización de divisas', 'Avance licencias OFAC y mayor flexibilidad para empresas estadounidenses', 'Excarcelaciones de alto perfil (coexistiendo con nuevas detenciones)', 'Fusiones ministeriales y agenda legislativa hidrocarburos'] },
      { sc: 2, label: 'Media', value: 25, drivers: ['51.6% prefiere MCM frente a Delcy Rodríguez (ATLAS/Bloomberg)', 'Presión por redistribución efectiva del ingreso petrolero', 'Movilización opositora internacional activa'], signals: ['Declaraciones EE.UU. vinculando licencias a hitos políticos verificables', 'Expansión real del espacio cívico y mediático', 'Discusión pública de garantías y cronogramas electorales'] },
      { sc: 3, label: 'Alta (dominante)', value: 50, drivers: ['Ambivalencia persistente en DDHH (liberaciones + nuevas detenciones)', 'Control preventivo con reestructuración de mandos intermedios', 'Percepción de opacidad y fragilidad institucional'], signals: ['Ralentización licencias petroleras', 'Reversión de excarcelaciones verificables', 'Restricciones adicionales al espacio cívico'] },
      { sc: 4, label: 'Baja', value: 10, drivers: ['Ruptura cohesión civil-militar', 'Colapso del esquema petrolero supervisado'], signals: ['Interrupción abrupta exportaciones', 'Quiebre del apoyo a operación estadounidense'] },
    ],
    points: [{ sc: 1, x: 88, y: 338 }, { sc: 2, x: 86, y: 90 }, { sc: 3, x: 428, y: 352 }, { sc: 4, x: 408, y: 88 }],
    active: 3, activeXY: { x: 140, y: 345 },
    trendSc: 3,
    trendDrivers: ['LG-46 OFAC operativa: cooperación energética bilateral consolidada', 'Reforma Ley de Hidrocarburos: cambio estructural más profundo en 50 años', 'Doble canal EE.UU.: reconocimiento a Delcy + interlocución con MCM'],
    moveReason: 'LG-46 emitida, reforma Hidrocarburos y reapertura aérea consolidan E3. Riesgo de colapso se desvanece.',
  },
  {
    label: '23–29 ene',
    shortLabel: '23–29E',
    // Consolidación fuerte: LG-46 emitida, reforma Hidrocarburos, reapertura espacio aéreo.
    // E3 sube más. E2 baja: colapso ya muy improbable. E1 sube levemente: reunión Rubio-MCM.
    probs: [
      { sc: 1, label: 'Baja-media', value: 20, drivers: ['Reunión Rubio–MCM en Washington (doble canal EE.UU.)', 'Presión social por expectativas materiales (salarios, servicios)', 'Alta legitimidad opositora (Machado, Guanipa, González)'], signals: ['Declaraciones EE.UU. vinculando licencias a hitos políticos', 'Liberaciones masivas y verificables de presos políticos', 'Discusión pública de garantías electorales'] },
      { sc: 2, label: 'Baja', value: 10, drivers: ['Exclusión deliberada de reformas electorales en agenda legislativa', 'Señales oficiales que descartan elecciones en el corto plazo', 'Suspensión de procedimientos del sistema de partidos'], signals: ['Suspensión o reversión de licencias energéticas', 'Reversión excarcelaciones o nuevas detenciones', 'Endurecimiento discurso securitario y soberanista'] },
      { sc: 3, label: 'Alta (dominante)', value: 60, drivers: ['Licencia General 46 OFAC: hito operativo en cooperación energética bilateral', 'Reapertura espacio aéreo EE.UU.-Venezuela (Trump–Rodríguez directo)', 'Reforma Ley Orgánica Hidrocarburos: cambio más profundo en 50 años', 'Nafta pesada de EE.UU. reactiva producción Faja del Orinoco'], signals: ['Implementación efectiva Licencia General 46', 'Incremento sostenido exportaciones crudo y gas', 'Reanudación vuelos comerciales (American Airlines)', 'Subastas de divisas periódicas'] },
      { sc: 4, label: 'Baja', value: 10, drivers: ['Ruptura cohesión civil-militar', 'Colapso del esquema energético supervisado'], signals: ['Interrupción abrupta exportaciones petroleras', 'Retiro de empresas y traders internacionales'] },
    ],
    points: [{ sc: 1, x: 86, y: 335 }, { sc: 2, x: 84, y: 88 }, { sc: 3, x: 425, y: 348 }, { sc: 4, x: 410, y: 88 }],
    active: 3, activeXY: { x: 118, y: 320 },
    trendSc: 1,
    trendDrivers: ['MCM con 78.3% intención de voto (Meganalisis): base electoral opositora sólida', 'Reunión Rubio–MCM en Washington activa doble canal hacia transición', 'Ley de Amnistía en primera discusión: apertura política institucionalizada'],
    moveReason: 'Amnistía 1ª discusión y cierre del Helicoide empujan hacia más cambio institucional. MCM con 78% refuerza presión hacia E1.',
  },
  {
    label: '30 ene–05 feb',
    shortLabel: '30E–5F',
    // Amnistía 1a discusión, cierre Helicoide, excarcelaciones parciales con brecha.
    // E3 baja un poco por ambigüedad. E1 sube: MCM con 78.3% intención voto, ofensiva diplomática.
    // E4 sube: 93.5% rechaza transición chavista, tensiones internas.
    probs: [
      { sc: 1, label: 'Media', value: 30, drivers: ['Presión social acumulada (93.5% rechaza transición chavista)', 'MCM con 78.3% intención de voto (Meganalisis)', 'Ofensiva diplomática de alto perfil: 14 jefes de Estado europeos'], signals: ['Anuncio formal de calendario electoral', 'Liberaciones amplias de presos políticos', 'Observación internacional estructurada'] },
      { sc: 2, label: 'Muy baja', value: 5, drivers: ['Ruptura cohesión civil-militar', 'Colapso del esquema petrolero', 'Choques exógenos severos'], signals: ['Interrupción exportaciones petroleras', 'Escalada rápida de protestas', 'Deterioro acelerado de servicios básicos'] },
      { sc: 3, label: 'Alta (dominante)', value: 50, drivers: ['Tutela externa EE.UU. sobre flujos energéticos', 'Hoja de ruta Trump-Rubio: estabilización → recuperación → transición', 'Sector petrolero como eje del equilibrio; bonos soberanos al alza'], signals: ['Incremento exportaciones (~800k bpd)', 'Excarcelaciones parciales y verificables', 'Avance Ley de Amnistía'] },
      { sc: 4, label: 'Media', value: 15, drivers: ['FANB reafirma lealtad al Proyecto Bolivariano (4 de febrero)', 'Jorge Rodríguez descarta elecciones inmediatas', 'Discrecionalidad en aplicación de amnistía'], signals: ['Reversión o congelamiento excarcelaciones', 'Incremento detenciones selectivas', 'Endurecimiento discurso securitario'] },
    ],
    points: [{ sc: 1, x: 100, y: 100 }, { sc: 2, x: 400, y: 90 }, { sc: 3, x: 115, y: 340 }, { sc: 4, x: 420, y: 360 }],
    active: 3, activeXY: { x: 108, y: 310 },
    trendSc: 1,
    trendDrivers: ['93.5% rechaza transición chavista: presión social máxima hacia cambio real', 'MCM con 78.3% intención de voto: mandato popular claro hacia transición', 'Ofensiva diplomática europea (14 jefes de Estado) refuerza presión hacia elecciones'],
    moveReason: 'Amnistía diferida (arts. 7-13) y patrón cautelar en excarcelaciones frenan el avance. E4 sube por discrecionalidad judicial.',
  },
  {
    label: '06–13 feb',
    shortLabel: '6–13F',
    // Amnistía 2a discusión diferida (arts.7-13). Patrón excarcelaciones+medidas cautelares.
    // Visita Chris Wright. Tensiones Rusia/China. 80% cree país va bien (Hinterlaces).
    // E3 sigue dominante pero E4 sube por discrecionalidad judicial.
    probs: [
      { sc: 1, label: 'Media', value: 30, drivers: ['Brecha narrativa excarcelaciones: cifras oficiales (897) vs. ONG (430)', 'Presión sociedad civil y familiares de detenidos', 'Base electoral opositora sólida: 67% votaría MCM (Financial Times)'], signals: ['Eliminación medidas cautelares y libertades plenas', 'Inclusión sustantiva ONG en Ley de Amnistía', 'Declaraciones formales sobre calendario electoral'] },
      { sc: 2, label: 'Muy baja', value: 5, drivers: ['Tensiones geopolíticas con Rusia y China por exclusión energética', 'Dependencia crítica del entendimiento bilateral con EE.UU.'], signals: ['Suspensión cooperación energética', 'Escalada diplomática con actores excluidos'] },
      { sc: 3, label: 'Alta (dominante)', value: 45, drivers: ['Cooperación energética OFAC consolidada (lic. 46A, 49, 50)', 'Visita Chris Wright: agenda energética de largo plazo', 'Petróleo como ancla macroeconómica; EIA proyecta 1.1-1.2 mbd a mediados 2026'], signals: ['Segunda discusión Ley de Amnistía', 'Incremento exportaciones y envío 50M barriles a Houston', 'Excarcelaciones adicionales bajo esquema de licencias'] },
      { sc: 4, label: 'Media', value: 20, drivers: ['Diferimiento artículos sensibles 7-13 de la Ley de Amnistía', 'Patrón excarcelaciones + medidas cautelares (Guanipa, Rocha, Superlano)', 'Tensiones geopolíticas con Rusia y China crecientes'], signals: ['Suspensión o reversión de excarcelaciones', 'Fricciones regulatorias OFAC', 'Endurecimiento discurso oficial frente a oposición'] },
    ],
    points: [{ sc: 1, x: 110, y: 105 }, { sc: 2, x: 410, y: 85 }, { sc: 3, x: 105, y: 345 }, { sc: 4, x: 415, y: 355 }],
    active: 3, activeXY: { x: 100, y: 288 },
    trendSc: 1,
    trendDrivers: ['Amnistía aprobada en segunda discusión: apertura política concreta', 'GL49+GL50/50A operativas bajo supervisión financiera EE.UU.', '67% votaría MCM (Financial Times): ventana electoral se abre'],
    moveReason: 'GL49+GL50/50A operativas y Amnistía aprobada empujan hacia mayor cambio. SOUTHCOM en Caracas y 75% percibe dirección correcta.',
  },
  {
    label: '13–20 feb',
    shortLabel: '13–20F',
    // Fuente: Matriz de Escenarios Semanal 13-20 feb 2026 (docx).
    // GL49+GL50/50A operativas bajo supervisión financiera EE.UU. Amnistía aprobada.
    // 75% percibe dirección correcta. 66% apoya supervisión petrolera EE.UU.
    // E3 dominante (Alta). E1 y E4 suben por presión electoral y brecha social.
    probs: [
      { sc: 1, label: 'Media', value: 35, drivers: ['Dos tercios exige elecciones presidenciales este año', '52% favorabilidad liderazgo opositor; 75% imagen desfavorable Delcy Rodríguez', 'Más del 90% respalda demandas EE.UU. de elecciones y liberación de presos políticos', 'Propuesta elecciones 9–10 meses; presión UE y eventual canal FMI', 'Amnistía como instrumento de apertura política; 2/3 se opone a control militar chavista'], signals: ['Anuncio formal de calendario electoral', 'Eliminación de medidas cautelares y libertades plenas', 'Reforma de marcos restrictivos (ley contra el odio)', 'Observación internacional estructurada', 'Reducción de la percepción de inseguridad (actualmente 58% considera que ha empeorado)'] },
      { sc: 2, label: 'Media (contenida)', value: 15, drivers: ['Inflación en tres dígitos (≈166–174%)', '69,5% con ingresos < USD 300; canasta básica > USD 550', 'Crédito interno equivalente a 2,8% del PIB', 'Sistema eléctrico estructuralmente deteriorado', 'Brecha entre alto optimismo político (75%) y baja capacidad del ingreso real', '62% prioriza costo de vida; 44% salud; 35% empleo'], signals: ['Presión cambiaria persistente', 'Deterioro rápido en percepción económica', 'Movilizaciones gremiales o universitarias', 'Retraso en transferencia efectiva de ingresos petroleros', 'Caída abrupta del indicador de dirección correcta del país'] },
      { sc: 3, label: 'Alta (dominante)', value: 40, drivers: ['GL49 y GL50/50A operativas bajo supervisión financiera estadounidense', 'Ventas petroleras > USD 1.000M y acuerdos de corto plazo por USD 5.000M', 'Canalización de regalías e impuestos a fondos custodiados (Foreign Government Deposit Funds)', 'Aprobación definitiva de la Ley de Amnistía; reorganización administrativa del Ejecutivo', 'PIB 2026 proyectado entre 10,4% y 15,2%; 75% percibe dirección correcta', '66% apoya supervisión estadounidense sobre venta de petróleo; economía 8:1 vs agenda democrática', '37% aprueba desempeño de Delcy Rodríguez bajo presión de EE.UU.'], signals: ['Incremento sostenido de exportaciones hacia EE.UU.', 'Flujo regular de divisas a la banca en 30–45 días', 'Reducción gradual de brecha cambiaria', 'Aplicación técnica y progresiva de la Ley de Amnistía', 'Continuidad en cooperación de seguridad (SOUTHCOM)'] },
      { sc: 4, label: 'Media-baja', value: 10, drivers: ['Tensiones reportadas dentro de la FANB por continuidad de la cúpula', 'Concentración de poder en eje político civil', 'Aplicación discrecional de la Ley de Amnistía', 'Dependencia crítica del entendimiento bilateral con EE.UU.', '58% percibe que la seguridad ha empeorado desde el 3 de enero', 'Principal preocupación en seguridad vinculada al aparato represivo estatal y paraestatal', '43% apoyaría despliegue de tropas estadounidenses (sociedad dividida en soberanía-seguridad)'], signals: ['Suspensión o ralentización de excarcelaciones', 'Discurso oficial endurecido frente a oposición', 'Cambios militares orientados a cierre corporativo', 'Fricciones regulatorias en cooperación energética', 'Aumento de desaprobación en mediciones de gestión gubernamental'] },
    ],
    points: [{ sc: 1, x: 105, y: 100 }, { sc: 2, x: 405, y: 380 }, { sc: 3, x: 95, y: 270 }, { sc: 4, x: 420, y: 360 }],
    active: 3, activeXY: { x: 95, y: 260 },
    trendSc: 1,
    trendDrivers: ['Dos tercios exige elecciones presidenciales este año: demanda política insoslayable', 'Más del 90% respalda demandas EE.UU. de elecciones y liberación de presos', '52% favorabilidad liderazgo opositor vs 75% imagen desfavorable de Delcy Rodríguez', 'Propuesta elecciones en 9–10 meses: ventana de transición concreta abierta', 'Amnistía como instrumento de apertura; presión UE y eventual canal FMI'],
    moveReason: 'E3 dominante: GL49/50A operativas, supervisión EE.UU. consolidada, 75% optimismo. E1 sostenida por presión electoral. E4 latente por tensiones FANB y deterioro de seguridad.'
  },
];


const WEEKS = [
  {
    label: '3–15 ene 2026', short: '3–15E',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:5,  trend:'flat' },
      { id:2, name:'Colapso y fragmentación',      prob:45, trend:'flat' },
      { id:3, name:'Continuidad negociada',         prob:40, trend:'flat' },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'flat' },
    ],
    kpis: {
      energia: { exportaciones:'Interrumpidas', ingresos:'—', licencias:'En proceso', tipo_cambio:'—' },
      economico: { inflacion:'567% (2025)', ingresos_pob:'< USD 300 mayoría', electricidad:'Sin datos', pib:'—' },
      opinion: { direccion:'—', elecciones:'93.5% rechaza transición chavista', favorabilidad_mcm:'—', aprobacion_eeuu:'47%' },
    },
    semaforos: { verde:2, amarillo:4, rojo:7 },
    tensiones: [
      { nivel:'red',    texto:'<strong>Operativo 3 ene:</strong> Captura de Maduro. Alta fragilidad institucional.' },
      { nivel:'red',    texto:'<strong>Exportaciones:</strong> Interrupción casi total primeros días.' },
      { nivel:'yellow', texto:'<strong>Excarcelaciones:</strong> 101 confirmadas, 14 periodistas.' },
    ],
    matrixXY: { x:0.429, y:0.438 },
    draft: false
  },
  {
    label: '16–22 ene 2026', short: '16–22E',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:15, trend:'up' },
      { id:2, name:'Colapso y fragmentación',      prob:25, trend:'down' },
      { id:3, name:'Continuidad negociada',         prob:50, trend:'up' },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'flat' },
    ],
    kpis: {
      energia: { exportaciones:'En recuperación', ingresos:'Divisas a banca', licencias:'LG-46 en proceso', tipo_cambio:'Relativa estabilidad' },
      economico: { inflacion:'Alta (tres dígitos)', ingresos_pob:'< USD 300 mayoría', electricidad:'Sin datos', pib:'—' },
      opinion: { direccion:'—', elecciones:'—', favorabilidad_mcm:'51.6% prefiere MCM', aprobacion_eeuu:'47%' },
    },
    semaforos: { verde:3, amarillo:5, rojo:5 },
    tensiones: [
      { nivel:'yellow', texto:'<strong>Doble canal EE.UU.:</strong> Reconocimiento a Delcy + interlocución con MCM.' },
      { nivel:'yellow', texto:'<strong>DDHH:</strong> Excarcelaciones + nuevas detenciones simultáneas.' },
      { nivel:'green',  texto:'<strong>Divisas:</strong> Flujo hacia banca privada iniciado.' },
    ],
    matrixXY: { x:0.25,  y:0.281 },
    draft: false
  },
  {
    label: '23–29 ene 2026', short: '23–29E',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:20, trend:'up' },
      { id:2, name:'Colapso y fragmentación',      prob:10, trend:'down' },
      { id:3, name:'Continuidad negociada',         prob:60, trend:'up' },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'flat' },
    ],
    kpis: {
      energia: { exportaciones:'~800 kbd (+60.6%)', ingresos:'Divisas regulares', licencias:'LG-46 emitida', tipo_cambio:'Estabilizando' },
      economico: { inflacion:'Alta (tres dígitos)', ingresos_pob:'< USD 300 mayoría', electricidad:'Afectaciones', pib:'Proyección al alza' },
      opinion: { direccion:'—', elecciones:'Reunión Rubio–MCM', favorabilidad_mcm:'78% intención voto', aprobacion_eeuu:'—' },
    },
    semaforos: { verde:5, amarillo:5, rojo:3 },
    tensiones: [
      { nivel:'green',  texto:'<strong>LG-46:</strong> Licencia OFAC emitida — hito operativo clave.' },
      { nivel:'green',  texto:'<strong>Reforma Hidrocarburos:</strong> Cambio más profundo en 50 años.' },
      { nivel:'yellow', texto:'<strong>Agenda electoral:</strong> Sin fechas anunciadas. Presión opositora activa.' },
    ],
    matrixXY: { x:0.211, y:0.333 },
    draft: false
  },
  {
    label: '30 ene–5 feb', short: '30E–5F',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:30, trend:'up' },
      { id:2, name:'Colapso y fragmentación',      prob:5,  trend:'down' },
      { id:3, name:'Continuidad negociada',         prob:50, trend:'down' },
      { id:4, name:'Resistencia coercitiva',        prob:15, trend:'up' },
    ],
    kpis: {
      energia: { exportaciones:'~800 kbd', ingresos:'USD >800M acumulado', licencias:'LG-46 operativa', tipo_cambio:'420–430 VEB/USD' },
      economico: { inflacion:'~200% proyectado', ingresos_pob:'69.5% < USD 300', electricidad:'Deterioro continuo', pib:'10.4–15.2% proyectado' },
      opinion: { direccion:'—', elecciones:'93.5% rechaza transición chavista', favorabilidad_mcm:'78.3%', aprobacion_eeuu:'—' },
    },
    semaforos: { verde:5, amarillo:5, rojo:3 },
    tensiones: [
      { nivel:'yellow', texto:'<strong>Amnistía 1ª discusión:</strong> Arts. 7–13 diferidos.' },
      { nivel:'yellow', texto:'<strong>Excarcelaciones:</strong> Patrón con medidas cautelares (Guanipa, Rocha).' },
      { nivel:'red',    texto:'<strong>FANB:</strong> Reafirma lealtad al Proyecto Bolivariano (4 feb).' },
    ],
    matrixXY: { x:0.193, y:0.354 },
    draft: false
  },
  {
    label: '6–13 feb 2026', short: '6–13F',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:30, trend:'flat' },
      { id:2, name:'Colapso y fragmentación',      prob:5,  trend:'flat' },
      { id:3, name:'Continuidad negociada',         prob:45, trend:'down' },
      { id:4, name:'Resistencia coercitiva',        prob:20, trend:'up' },
    ],
    kpis: {
      energia: { exportaciones:'~800 kbd · EE.UU. destino ppal.', ingresos:'USD >1.000M', licencias:'GL49, GL50/50A operativas', tipo_cambio:'420–430 VEB/USD' },
      economico: { inflacion:'174% proyectado 2026', ingresos_pob:'69.5% < USD 300', electricidad:'14.8h sin suministro', pib:'10.4–15.2% proyectado' },
      opinion: { direccion:'80% (Hinterlaces)', elecciones:'67% votaría MCM (FT)', favorabilidad_mcm:'Alta', aprobacion_eeuu:'>90% respalda demandas EE.UU.' },
    },
    semaforos: { verde:6, amarillo:6, rojo:4 },
    tensiones: [
      { nivel:'yellow', texto:'<strong>Amnistía 2ª discusión:</strong> Diferida arts. 7–13.' },
      { nivel:'red',    texto:'<strong>Excarcelaciones:</strong> 897 oficial vs 430 ONG — brecha >50%.' },
      { nivel:'yellow', texto:'<strong>Visita Chris Wright:</strong> Agenda energética de largo plazo.' },
    ],
    matrixXY: { x:0.179, y:0.400 },
    draft: false
  },
  {
    label: '13–20 feb 2026', short: '13–20F',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:35, trend:'up' },
      { id:2, name:'Colapso y fragmentación',      prob:15, trend:'flat' },
      { id:3, name:'Continuidad negociada',         prob:40, trend:'down' },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'down' },
    ],
    kpis: {
      energia: { exportaciones:'~800 kbd · ↑60.6%', ingresos:'USD >1.000M · acuerdos USD 5.000M', licencias:'GL49+GL50/50A plenas', tipo_cambio:'420–430 VEB/USD' },
      economico: { inflacion:'174% proy. (vs 567% en 2025)', ingresos_pob:'69.5% < USD 300 (canasta USD 550)', electricidad:'14.8h sin suministro promedio', pib:'10.4–15.2% proyectado 2026' },
      opinion: { direccion:'75% percibe dirección correcta', elecciones:'2/3 exige elecciones este año', favorabilidad_mcm:'52% favorabilidad · 75% Delcy desfav.', aprobacion_eeuu:'>90% respalda demandas EE.UU.' },
    },
    semaforos: { verde:9, amarillo:8, rojo:5 },
    tensiones: [
      { nivel:'green',  texto:'<strong>Ley de Amnistía:</strong> Promulgada 19 feb. Hito normativo alcanzado.' },
      { nivel:'yellow', texto:'<strong>FANB:</strong> Tensiones reportadas. Demandas de "oxigenación". Padrino López 12 años.' },
      { nivel:'yellow', texto:'<strong>Excarcelaciones:</strong> 895 oficial vs 383 verificadas — brecha sin cerrar.' },
      { nivel:'red',    texto:'<strong>Agenda electoral:</strong> Sin fecha. 2/3 exige elecciones. Señal EE.UU.: 9–10 meses.' },
    ],
    matrixXY: { x:0.170, y:0.458 },
    draft: false
  },
  {
    label: '20–26 feb 2026', short: '20–26F',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:35, trend:'flat' },
      { id:2, name:'Colapso y fragmentación',      prob:15, trend:'flat' },
      { id:3, name:'Continuidad negociada',         prob:40, trend:'flat' },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'flat' },
    ],
    kpis: {
      energia: { exportaciones:'[Por completar]', ingresos:'[Por completar]', licencias:'[Por completar]', tipo_cambio:'[Por completar]' },
      economico: { inflacion:'[Por completar]', ingresos_pob:'[Por completar]', electricidad:'[Por completar]', pib:'[Por completar]' },
      opinion: { direccion:'[Por completar]', elecciones:'[Por completar]', favorabilidad_mcm:'[Por completar]', aprobacion_eeuu:'[Por completar]' },
    },
    semaforos: { verde:0, amarillo:0, rojo:0 },
    tensiones: [
      { nivel:'yellow', texto:'<strong>Plantilla:</strong> Datos pendientes de completar para esta semana.' },
    ],
    matrixXY: { x:0.170, y:0.458 },
    draft: true
  },
];

const SC_COLORS = { 1:'#0A97D9', 2:'#4C9F38', 3:'#E5243B', 4:'#FCC30B' };
const SC_CLASS  = { 1:'e1', 2:'e2', 3:'e3', 4:'e4' };

