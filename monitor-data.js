// ════════════════════════════════════════════════════════════════
// monitor-data.js  ·  Venezuela Dashboard  ·  PNUD
// ════════════════════════════════════════════════════════════════
//
// Datos del tab Monitor — actualización mensual.
// Este archivo es independiente de data.js (datos semanales).
//
// Qué actualizar mensualmente:
//   1. LATEST          →  id de la última semana cargada
//   2. SEMANAS[]       →  añadir nueva entrada al final
//   3. INDICADORES[]   →  actualizar historia[] de cada indicador
// ════════════════════════════════════════════════════════════════

// ── Dimensiones temáticas (estáticas) ───────────────────────────
const DIMS = [{"key": "Energético", "label": "Energético", "icon": "⚡", "color": "#0A97D9"}, {"key": "Económico", "label": "Económico", "icon": "📊", "color": "#FCC30B"}, {"key": "Político", "label": "Político", "icon": "🏛", "color": "#4C9F38"}, {"key": "Internacional", "label": "Internacional", "icon": "🌐", "color": "#9B59B6"}, {"key": "E1-Señales", "label": "Señales E1", "icon": "🟢", "color": "#4C9F38"}, {"key": "E2-Señales", "label": "Señales E2", "icon": "🔴", "color": "#E5243B"}, {"key": "E4-Señales", "label": "Señales E4", "icon": "🟡", "color": "#FCC30B"}];

// ── Escenarios (estáticos) ───────────────────────────────────────
const ESCS = ["E1", "E2", "E3", "E4"];

// ── Colores de semáforo (estáticos) ─────────────────────────────
var semColorMap = {green:'#00a651', yellow:'#fcc30b', red:'#e5243b'};
var semLabelMap = {green:'Verde', yellow:'Amarillo', red:'Rojo'};

// ── Labels de escenarios (estáticos) ────────────────────────────
var ICONS      = {'Energético':'⚡','Político':'🏛','Económico':'📊','Internacional':'🌐'};
var ESC_LABELS = {'E1':'E1 — Transición Política','E2':'E2 — Fragmentación','E3':'E3 — Continuidad Negociada','E4':'E4 — Resistencia Coercitiva'};
var ESC_COLORS = {'E1':'#56C02B','E2':'#E5243B','E3':'#0A97D9','E4':'#FCC30B'};

// ── Semana más reciente con datos completos ──────────────────────
var LATEST = 's6';

// ── Registro de semanas ──────────────────────────────────────────
var SEMANAS = [
  { id:'s1', label:'3–15 ene 2026',   short:'S1' },
  { id:'s2', label:'16–22 ene 2026',  short:'S2' },
  { id:'s3', label:'23–29 ene 2026',  short:'S3' },
  { id:'s4', label:'30 ene–5 feb',    short:'S4' },
  { id:'s5', label:'6–13 feb 2026',   short:'S5' },
  { id:'s6', label:'20–27 feb 2026',  short:'S6 ●' },
];

// ════════════════════════════════════════════════════════════════
// INDICADORES — actualizar historia[] mensualmente
// formato historia: [semana_id, semaforo, tendencia, valor_corto]
//   semaforo: 'green' | 'yellow' | 'red'
//   tendencia: 'up' | 'down' | 'stable'
// ════════════════════════════════════════════════════════════════
var INDICADORES = [

  // ── SECTOR ENERGÉTICO ──────────────────────────────────
  { dim:'Energético', esc:'E3', nombre:'Exportaciones de crudo',
    desc:'Volumen semanal bajo licencias OFAC',
    umbral:'Sostenimiento >750 kbd. Caída <600 kbd activa alerta.',
    historia:[
      ['s1','green','up','~500 kbd'],
      ['s2','green','up','~620 kbd'],
      ['s3','green','up','~700 kbd'],
      ['s4','green','up','~740 kbd'],
      ['s5','green','up','~770 kbd'],
      ['s6','green','up','~800 kbd ↑60.6%'],
    ]},
  { dim:'Energético', esc:'E3', nombre:'Ventas petroleras (ingresos)',
    desc:'Acuerdos bajo GL49 y GL50/50A',
    umbral:'Flujo regular a banca PDVSA. Interrupción >2 sem activa E2.',
    historia:[
      ['s1','yellow','flat','En negociación'],
      ['s2','yellow','up','Acuerdos Vitol/Trafigura'],
      ['s3','green','up','Proy. USD 3-4B'],
      ['s4','green','up','Contratos activos'],
      ['s5','green','up','India + EE.UU.'],
      ['s6','green','up','Proy. USD 6.000M'],
    ]},
  { dim:'Energético', esc:'E3', nombre:'Licencias OFAC activas',
    desc:'GL49, GL50, GL50A — cobertura operativa',
    umbral:'Revocación activa E2/E4. FAQ 1238 ahora incluye Cuba condicionado.',
    historia:[
      ['s1','green','flat','GL49 activa'],
      ['s2','green','flat','GL49 + GL50'],
      ['s3','green','flat','Sin cambios'],
      ['s4','green','flat','Sin cambios'],
      ['s5','green','flat','GL50/50A vigentes'],
      ['s6','green','flat','FAQ 1238 Cuba'],
    ]},
  { dim:'Energético', esc:'E3', nombre:'Producción Chevron',
    desc:'Operaciones directas en bloques venezolanos',
    umbral:'Expansión confirma E3. Suspensión reactiva E2.',
    historia:[
      ['s1','yellow','flat','Operación básica'],
      ['s2','yellow','up','Autorización ampliada'],
      ['s3','green','up','Incremento confirmado'],
      ['s4','green','up','Ampliación activa'],
      ['s5','yellow','flat','Revisión 19 contratos'],
      ['s6','yellow','up','Expansión anunciada'],
    ]},
  { dim:'Energético', esc:'E2', nombre:'Infraestructura de refinación',
    desc:'Capacidad operativa refinerías nacionales',
    umbral:'Operación <25% capacidad instalada. Mantenimiento diferido.',
    historia:[
      ['s1','red','flat','<20% capacidad'],
      ['s2','red','flat','Sin mejora'],
      ['s3','red','flat','Mantenimiento pendiente'],
      ['s4','red','flat','Exportación compensa'],
      ['s5','red','flat','Crítica pero estable'],
      ['s6','red','flat','Sin cambio'],
    ]},
  { dim:'Energético', esc:'E2', nombre:'Taladros activos',
    desc:'Operaciones de perforación nuevas',
    umbral:'<30 taladros activos. Recuperación <5% anual vs 2014.',
    historia:[
      ['s1','red','flat','Bajo histórico'],
      ['s2','red','flat','Sin variación'],
      ['s3','red','flat','Sin variación'],
      ['s4','red','flat','Sin variación'],
      ['s5','red','flat','Sin variación'],
      ['s6','red','flat','Sin variación'],
    ]},

  // ── POLÍTICO-INSTITUCIONAL ────────────────────────────
  { dim:'Político', esc:'E3', nombre:'Ley de Amnistía',
    desc:'Operativización y verificación independiente',
    umbral:'Brecha oficial vs. verificado. >50% sin verificar activa E4.',
    historia:[
      ['s1','yellow','flat','Anunciada'],
      ['s2','yellow','up','Aprobada AN'],
      ['s3','yellow','up','Primeras excarcelaciones'],
      ['s4','green','up','Comisión operativa'],
      ['s5','green','up','1.200+ beneficiados'],
      ['s6','green','up','4.203 solicitudes · 568 verificados'],
    ]},
  { dim:'Político', esc:'E3', nombre:'Excarcelaciones verificadas',
    desc:'Foro Penal: presos políticos activos',
    umbral:'Ritmo <20/sem o reversión de excarcelaciones activa E4.',
    historia:[
      ['s1','yellow','flat','0 verificadas'],
      ['s2','yellow','up','12 verificadas'],
      ['s3','yellow','up','45 verificadas'],
      ['s4','yellow','up','78 verificadas'],
      ['s5','yellow','up','108 verificadas'],
      ['s6','yellow','flat','126 verificadas · 568 activos'],
    ]},
  { dim:'Político', esc:'E4', nombre:'Cohesión civil-militar (FANB)',
    desc:'Señales de fractura o lealtad institucional',
    umbral:'Fractura visible = E4/E2 inmediato.',
    historia:[
      ['s1','yellow','flat','Sin señales fractura'],
      ['s2','yellow','flat','Sin señales fractura'],
      ['s3','yellow','flat','Ajustes menores'],
      ['s4','yellow','down','Presión cooperación EE.UU.'],
      ['s5','yellow','down','Cubanos retirándose'],
      ['s6','yellow','down','Cubanos salen · reconfig. SOUTHCOM'],
    ]},
  { dim:'Político', esc:'E3', nombre:'Reorganización del Ejecutivo',
    desc:'Capacidad de gestión institucional',
    umbral:'Reconfiguración técnica → E1. Política → E4.',
    historia:[
      ['s1','yellow','flat','Maduro removido'],
      ['s2','yellow','up','Delcy consolida'],
      ['s3','green','up','Gabinete activo'],
      ['s4','green','up','Estructura operativa'],
      ['s5','green','up','Cancillería reestructurada'],
      ['s6','green','up','Poder Ciudadano: renuncias/encargados'],
    ]},
  { dim:'Político', esc:'E1', nombre:'Agenda electoral',
    desc:'Calendario y compromisos electorales concretos',
    umbral:'Anuncio formal de fecha = E1 gana probabilidad.',
    historia:[
      ['s1','red','flat','Sin agenda'],
      ['s2','red','flat','Sin agenda'],
      ['s3','yellow','flat','Señales vagas'],
      ['s4','yellow','up','Rubio: legitimación req.'],
      ['s5','yellow','up','Presión EE.UU. activa'],
      ['s6','yellow','up','Rubio reitera exigencia electoral'],
    ]},
  { dim:'Político', esc:'E4', nombre:'Marcos restrictivos vigentes',
    desc:'Leyes de odio, terrorismo, delitos de expresión',
    umbral:'Activación contra oposición = E4. Derogación = E1.',
    historia:[
      ['s1','red','flat','Ley Odio vigente'],
      ['s2','red','flat','Sin cambio'],
      ['s3','red','flat','Sin cambio'],
      ['s4','red','flat','Sin cambio'],
      ['s5','red','flat','Sin cambio'],
      ['s6','red','flat','Stalin González exige derogar Ley Odio'],
    ]},

  // ── ECONÓMICO-SOCIAL ──────────────────────────────────
  { dim:'Económico', esc:'E2', nombre:'Tipo de cambio / brecha cambiaria',
    desc:'Diferencial BCV vs. mercado paralelo',
    umbral:'Brecha >55% activa E2. <30% fortalece E3.',
    historia:[
      ['s1','green','flat','~15%'],
      ['s2','green','flat','~18%'],
      ['s3','yellow','down','~28%'],
      ['s4','yellow','down','~35%'],
      ['s5','yellow','down','~46%'],
      ['s6','yellow','down','52,6% · 631 vs 414 Bs/$'],
    ]},
  { dim:'Económico', esc:'E2', nombre:'Inflación',
    desc:'Tasa mensual proyectada',
    umbral:'Retorno a inflación >30% mensual activa E2.',
    historia:[
      ['s1','yellow','flat','~12% mensual'],
      ['s2','yellow','flat','~10% mensual'],
      ['s3','yellow','up','~8% mensual'],
      ['s4','yellow','up','Desacelerando'],
      ['s5','yellow','up','~6% proyectado'],
      ['s6','yellow','up','FMI: tres dígitos anual'],
    ]},
  { dim:'Económico', esc:'E2', nombre:'Ingresos de la población',
    desc:'Salario mínimo y poder adquisitivo real',
    umbral:'47 meses sin ajuste. Ingreso ~USD 270 vs canasta USD 550.',
    historia:[
      ['s1','red','flat','Sin ajuste'],
      ['s2','red','flat','Sin ajuste'],
      ['s3','red','flat','Sin ajuste'],
      ['s4','red','flat','Sin ajuste'],
      ['s5','red','flat','47 meses sin ajuste'],
      ['s6','red','flat','Ajuste prometido · aún no ejecutado'],
    ]},
  { dim:'Económico', esc:'E2', nombre:'Sistema eléctrico',
    desc:'Disponibilidad y frecuencia de cortes',
    umbral:'Cortes >4h/día en zonas urbanas activa presión social.',
    historia:[
      ['s1','red','flat','Cortes frecuentes'],
      ['s2','red','flat','Sin mejora'],
      ['s3','red','flat','Sin mejora'],
      ['s4','red','flat','Sin mejora'],
      ['s5','red','flat','Crítico'],
      ['s6','red','flat','Crítico · sin inversión visible'],
    ]},
  { dim:'Económico', esc:'E3', nombre:'Percepción de dirección del país',
    desc:'Encuestas de opinión pública',
    umbral:'>60% percepción positiva sostiene E3.',
    historia:[
      ['s1','yellow','flat','~35% positivo'],
      ['s2','yellow','up','~40% positivo'],
      ['s3','yellow','up','~44% positivo'],
      ['s4','green','up','~48% positivo'],
      ['s5','green','up','~50% positivo'],
      ['s6','green','up','51,5% "mejor que con Maduro"'],
    ]},

  // ── INTERNACIONAL Y GEOPOLÍTICO ───────────────────────
  { dim:'Internacional', esc:'E3', nombre:'Cooperación EE. UU.–Venezuela',
    desc:'Nivel operativo de acuerdos bilaterales',
    umbral:'Ruptura = E4/E2. Profundización = E1.',
    historia:[
      ['s1','yellow','up','Negociaciones iniciales'],
      ['s2','yellow','up','Petróleo fluye'],
      ['s3','green','up','SOUTHCOM reunión'],
      ['s4','green','up','Visitas técnicas'],
      ['s5','green','up','Plan 3 fases anunciado'],
      ['s6','green','up','Trump "nuevo amigo" · 71K kg médicos'],
    ]},
  { dim:'Internacional', esc:'E3', nombre:'Sanciones UE',
    desc:'Estado de sanciones europeas y perspectivas de levantamiento',
    umbral:'Levantamiento parcial fortalece E3. Ampliación activa E4.',
    historia:[
      ['s1','red','flat','Sanciones plenas'],
      ['s2','red','flat','Sin cambio'],
      ['s3','red','flat','Sin cambio'],
      ['s4','yellow','up','Señales apertura'],
      ['s5','yellow','up','Diálogo con España'],
      ['s6','yellow','up','España propone levantar sanciones a Delcy'],
    ]},
  { dim:'Internacional', esc:'E3', nombre:'Relación con China y Rusia',
    desc:'Balanza estratégica en contexto de acercamiento EE.UU.',
    umbral:'Ruptura con China/Rusia por presión EE.UU. fragiliza E3.',
    historia:[
      ['s1','green','flat','Alineación plena'],
      ['s2','green','flat','Sin cambio'],
      ['s3','green','down','Señales tensión'],
      ['s4','yellow','down','Rebalanceo activo'],
      ['s5','yellow','down','Reducción presencia rusa'],
      ['s6','yellow','down','Cuba retira asesores · reconf. estratégica'],
    ]},
  { dim:'Internacional', esc:'E1', nombre:'FMI y reinserción financiera',
    desc:'Diálogo con IFIs y acceso a mercados internacionales',
    umbral:'Acuerdo FMI = E1 clave. "Intensa Fragilidad" sostiene E2.',
    historia:[
      ['s1','red','flat','Fragmentación total'],
      ['s2','red','flat','Sin diálogo'],
      ['s3','red','flat','Sin diálogo'],
      ['s4','yellow','up','Señales apertura'],
      ['s5','yellow','up','Reuniones técnicas'],
      ['s6','yellow','up','FMI: "Intensa Fragilidad" · deuda >180%'],
    ]},
  { dim:'Internacional', esc:'E3', nombre:'Normalización diplomática',
    desc:'Reapertura embajadas y relaciones bilaterales',
    umbral:'Reapertura embajada EE.UU. = E1/E3 consolidado.',
    historia:[
      ['s1','yellow','flat','Limitada'],
      ['s2','yellow','up','Señales apertura'],
      ['s3','green','up','Múltiples contactos'],
      ['s4','green','up','Visitas ministros'],
      ['s5','green','up','Cancillería reestructurada'],
      ['s6','green','up','Tajani (Italia) · Petro-Delcy 14 mar'],
    ]},

  // ── SEÑALES POR ESCENARIO (E1/E2/E3/E4) ─────────────
  { dim:'E1-Señales', esc:'E1', nombre:'Exportaciones bajo licencias',
    desc:'Flujo sostenido como ancla de E3 → E1',
    umbral:'Flujo regular >750 kbd = transición viable.',
    historia:[
      ['s6','green','flat','~800 kbd sostenido'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Inyección de divisas a banca',
    desc:'Flujo de divisas petroleras al sistema bancario',
    umbral:'Entrada regular = estabilización E3.',
    historia:[
      ['s6','green','flat','Subastas BCV USD 70M/sem'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Excarcelaciones parciales',
    desc:'Avance verificable del proceso de amnistía',
    umbral:'<20 excarcelaciones verificadas/sem = proceso estancado.',
    historia:[
      ['s6','yellow','flat','126 verificadas acumuladas'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Discurso de estabilidad dominante',
    desc:'Narrativa oficial de transición y apertura',
    umbral:'Discurso incoherente con hechos activa E4.',
    historia:[
      ['s6','green','flat','Trump "nuevo amigo"'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Cooperación SOUTHCOM',
    desc:'Plan de tres fases · asistencia técnica militar',
    umbral:'Suspensión = retroceso a E4.',
    historia:[
      ['s6','green','flat','Plan 3 fases activo'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Brecha cambiaria bajo control',
    desc:'Diferencial BCV-paralelo sostenible',
    umbral:'Brecha >55% activa E2.',
    historia:[
      ['s6','yellow','flat','52,6% — límite umbral'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Optimismo en opinión pública >70%',
    desc:'Percepción positiva de dirección del país',
    umbral:'51,5% actual — aún insuficiente para consolidar E1.',
    historia:[
      ['s6','yellow','flat','51,5% actual'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Servicios mínimos operativos',
    desc:'Electricidad, agua, transporte en centros urbanos',
    umbral:'Colapso de servicios activa E2.',
    historia:[
      ['s6','green','flat','Operativos (deficitarios)'],
    ]},
  { dim:'E1-Señales', esc:'E1', nombre:'Cambios normativos clave (Amnistía)',
    desc:'Reforma o derogación de marcos restrictivos',
    umbral:'Derogación Ley Odio + próximos pasos = E1.',
    historia:[
      ['s6','green','flat','Amnistía operativa'],
    ]},
  { dim:'E2-Señales', esc:'E2', nombre:'Fracturas internas visibles',
    desc:'Tensiones en élite gubernamental o FANB',
    umbral:'Fractura pública = E2/E4 inmediato.',
    historia:[
      ['s6','yellow','flat','Renuncias Poder Ciudadano — ambiguo'],
    ]},
  { dim:'E2-Señales', esc:'E2', nombre:'Reducción efectiva de coerción',
    desc:'Casos de represión o actos intimidatorios',
    umbral:'Caso Magalli Meda — coerción paralela activa.',
    historia:[
      ['s6','yellow','flat','Caso Magalli Meda (16 armados)'],
    ]},
  { dim:'E2-Señales', esc:'E3', nombre:'Mayor rol multilateral',
    desc:'Presencia en foros y organismos internacionales',
    umbral:'Reingreso activo = E3/E1.',
    historia:[
      ['s6','yellow','flat','Señales pero sin reingreso formal'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Anuncio formal de calendario electoral',
    desc:'Compromisos electorales verificables',
    umbral:'Ausencia sostenida consolida E4.',
    historia:[
      ['s6','red','flat','Sin fecha · Rubio exige'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Reforma marcos restrictivos',
    desc:'Derogación o reforma de Ley del Odio y similares',
    umbral:'Sin reforma = E4 latente.',
    historia:[
      ['s6','red','flat','Sin reforma · Stalin exige'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Fallas en servicios críticos',
    desc:'Deterioro eléctrico, agua, salud',
    umbral:'Colapso urbano = E2.',
    historia:[
      ['s6','yellow','flat','Deficitario pero controlado'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Fractura de la FANB',
    desc:'Señales de insubordinación o división institucional',
    umbral:'Fractura pública = E4/E2.',
    historia:[
      ['s6','yellow','flat','Presión SOUTHCOM · Cuba sale'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Shock económico no absorbido',
    desc:'Crisis cambiaria o energética abrupta',
    umbral:'Brecha >60% + corte exportaciones = E2.',
    historia:[
      ['s6','yellow','flat','Brecha 52,6% · riesgo latente'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Violencia difusa / pérdida territorial',
    desc:'Grupos armados, FARC, ELN, colectivos',
    umbral:'Expansión grupos irregulares activa E4.',
    historia:[
      ['s6','red','flat','ELN/colectivos activos'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Migración acelerada',
    desc:'Flujos migratorios como barómetro de deterioro',
    umbral:'Retorno migrantes = E3. Aceleración = E2/E4.',
    historia:[
      ['s6','red','flat','Flujo continúa'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Militarización de funciones civiles',
    desc:'FANB en funciones de gobierno y economía',
    umbral:'Expansión militar = E4 consolidado.',
    historia:[
      ['s6','yellow','flat','Parcial · bajo monitoreo'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Discurso securitario endurecido',
    desc:'Retórica de amenaza y enemigo interno',
    umbral:'Regreso discurso securitario = E4.',
    historia:[
      ['s6','yellow','flat','Paralelo a discurso apertura'],
    ]},
  { dim:'E4-Señales', esc:'E4', nombre:'Detenciones selectivas / nuevas',
    desc:'Nuevas detenciones de perfil político',
    umbral:'Detenciones mientras amnistía activa = E4.',
    historia:[
      ['s6','red','flat','Caso Magalli Meda · vigilancia activa'],
    ]},
];
