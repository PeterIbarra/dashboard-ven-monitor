// ════════════════════════════════════════════════════════════════
// data.js  ·  Venezuela Dashboard  ·  PNUD
// ════════════════════════════════════════════════════════════════
//
// ÚNICO ARCHIVO A ACTUALIZAR CADA SEMANA.
// index.html NO se toca salvo cambios de diseño.
//
// Qué actualizar cada semana:
//   1. CURRENT_WEEK_INDEX          →  +1
//   2. CURRENT_SITREP_LABEL        →  nueva fecha semana actual
//   3. PREV_SITREP_LABEL           →  nueva fecha semana anterior
//   4. weeks[]                     →  añadir objeto al final (Matriz)
//   5. WEEKS_DASHBOARD[]           →  añadir objeto al final (Dashboard)
//   6. SEMANAS[] + INDICADORES[]   →  añadir entradas (Monitor)
// ════════════════════════════════════════════════════════════════

// ── CONFIGURACIÓN SEMANAL (actualizar aquí cada semana) ──────────
const CURRENT_WEEK_INDEX   = 6;
const CURRENT_SITREP_LABEL = "20 — 27 feb 2026 · Semana 7";
const PREV_SITREP_LABEL    = "13 — 20 feb 2026 · Semana 6";

// ════════════════════════════════════════════════════════════════
// MATRIZ DE ESCENARIOS
// Añadir nuevo objeto al final de weeks[] cada semana.
// ════════════════════════════════════════════════════════════════

const scenarios = [
  { id: 1, name: 'Transición política pacífica', short: 'Transición', color: '#4C9F38', bg: 'rgba(76,159,56,0.15)' },
  { id: 2, name: 'Colapso y fragmentación', short: 'Colapso', color: '#E5243B', bg: 'rgba(229,36,59,0.15)' },
  { id: 3, name: 'Continuidad negociada', short: 'Continuidad', color: '#0A97D9', bg: 'rgba(10,151,217,0.15)' },
  { id: 4, name: 'Resistencia y escalada coercitiva', short: 'Resistencia', color: '#FCC30B', bg: 'rgba(252,195,11,0.15)' },
];

const weeks = [
  {
    label: '03–15 ene',
    lectura: 'El período del 3 al 15 de enero de 2026 es el de mayor concentración de riesgo sistémico del ciclo. El operativo estadounidense del 3 de enero que resultó en la captura de Nicolás Maduro bajo el Estado de Conmoción Exterior no produjo el colapso institucional que algunos vectores anticipaban, pero sí generó la zona de mayor fragilidad e incertidumbre del período analizado. Las exportaciones petroleras se interrumpieron casi totalmente en los días iniciales, el control marítimo estadounidense se intensificó con la intercepción de superpetroleros —incluido el M/T Sophia—, y la opacidad informativa sobre víctimas, bajas y detenidos del operativo fue prácticamente total. El Ministerio Público reportó al menos una muerte bajo custodia (Edilson José Torres Fernández, 52 años), y 14 periodistas fueron temporalmente detenidos o deportados.<br><br>Sin embargo, tres mecanismos de contención activados simultáneamente desde Washington impidieron que ese riesgo se materializara en ruptura: primero, la continuidad institucional fue avalada por el Tribunal Supremo de Justicia y respaldada de forma explícita por la Casa Blanca, con Trump priorizando la estabilidad sobre una transición inmediata y comparando el riesgo de vacío de poder con el caso iraquí. Segundo, la orden ejecutiva para proteger los ingresos petroleros venezolanos retenidos en cuentas del Tesoro estadounidense operó como señal de que el flujo energético sería el eje del nuevo equilibrio, no un instrumento de colapso. Tercero, la excarcelación de al menos 101 personas, incluyendo 14 periodistas, funcionó como gesto de distensión dosificado que redujo la presión internacional sin implicar apertura política estructural.<br><br>Entre el 10 y el 15 de enero el esquema comenzó a tomar forma operativa. El BCV recibió USD 500 millones producto de la primera venta de crudo bajo el nuevo esquema, depositados en el Qatar National Bank con JP Morgan como corresponsal; USD 330 millones de ese total fueron distribuidos a cinco bancos privados —Bancamiga, Banesco, Mercantil, Provincial y BNC— para agroalimentación, salud e infraestructura. La brecha cambiaria se redujo un 34% en pocos días, el USDT cayó más de un 15% en una jornada y la volatilidad comenzó a ceder. Chevron, Shell, Repsol y ENI anunciaron intenciones de inversión bajo licencias supervisadas. El mecanismo de cuentas escrow —con distribución de 20–30% hacia el Estado venezolano y retención del resto bajo supervisión estadounidense— quedó establecido como arquitectura financiera del nuevo modelo.<br><br>La reunión de Trump con María Corina Machado el 15 de enero en la Casa Blanca activó el doble canal que estructurará las semanas siguientes: reconocimiento funcional a Delcy Rodríguez como interlocutora operativa, e interlocución política paralela con la oposición sin transferirle control del proceso. El 79% de imagen favorable a Delcy Rodríguez en Hinterlaces confirmó que la base interna del Ejecutivo interino se mantenía intacta, alejando el riesgo de ruptura civil-militar inmediata. La razón por la que E2 domina el mapa de esta semana con 45% no es que el colapso esté ocurriendo, sino que es la semana de mayor exposición al riesgo: el sistema está en su punto de máxima fragilidad antes de que los mecanismos de contención se consoliden.',
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
    lectura: 'La semana del 16 al 22 de enero marca el punto de inflexión decisivo del ciclo: el tránsito desde la fragilidad máxima hacia la estabilización incipiente. Tres hitos ocurren en siete días y cambian estructuralmente el mapa de riesgos. La visita a Caracas del Director de la CIA John Ratcliffe —primer alto funcionario del gabinete estadounidense en pisar Venezuela tras la operación del 3 de enero— establece que el vínculo bilateral tiene profundidad de inteligencia, no solo económica. La Licencia General 46 de la OFAC crea por primera vez un marco normativo claro para la cooperación energética bilateral: autoriza a empresas estadounidenses trabajar directamente con PDVSA para producción, exportación, refinación y comercialización de crudo, manteniendo formalmente el régimen de sanciones pero vaciándolo de efecto práctico en el sector petrolero. Y la reapertura del espacio aéreo —acordada directamente entre Trump y Delcy Rodríguez— normaliza el vínculo a nivel cotidiano y simbólico.<br><br>El Ejecutivo interino despliega una agenda legislativa y administrativa de alcance histórico. La reforma parcial de la Ley Orgánica de Hidrocarburos —aprobada en primera discusión por mayoría calificada— representa el cambio estructural más profundo en el sector petrolero venezolano en 50 años. Se fusionan los ministerios de Industrias y Comercio, se reestructuran 28 cargos intermedios de la FANB manteniendo intacta la cúpula estratégica —señal de control preventivo sin ruptura— y se propone un portal público de ingresos petroleros como narrativa de transparencia. USD 300 millones se colocan a través de la banca privada con tasas de subasta entre 380 y 420 Bs/USD, y el BCV publica por primera vez desde agosto de 2024 un tipo de cambio oficial. Nicolás Maduro Guerra, diputado e hijo del líder detenido, declara públicamente que Venezuela debería restablecer relaciones con EE.UU. e incluso con Israel: una señal generacional interna que habla de la profundidad del reordenamiento.<br><br>La clave analítica de esta semana es el doble canal estratégico que Washington consolida —no es una contradicción sino un diseño: reconocer a Delcy Rodríguez como interlocutora funcional para energía, economía y seguridad, mientras se mantiene interlocución política con MCM sin trasladarle control del proceso. Las revelaciones de Reuters sobre contactos previos al operativo del 3 de enero con Diosdado Cabello —que los rechazó— muestran que el diseño del esquema tiene capas de profundidad que el análisis superficial no captura. Emiratos Árabes Unidos intensifica contactos y explora inversiones energéticas a través de ADNOC/XRG, coordinadas con Washington, ampliando el perímetro del esquema más allá de actores puramente estadounidenses.<br><br>E3 sube a 50% dominante porque el acoplamiento energético-financiero ya tiene mecanismos concretos funcionando. E2 cae a 25% porque el riesgo de colapso se desvanece al regularizarse las exportaciones. E1 se instala en 15%: el 51.6% de preferencia por MCM y el 47% de aprobación interna a la operación del 3 de enero coexisten porque la ciudadanía prioriza resultados económicos sobre definiciones políticas, y esa priorización es precisamente lo que sostiene E3 y mantiene E1 como presión latente sin fuerza dominante.',
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
    lectura: 'La semana del 23 al 29 de enero consolida E3 con su probabilidad más alta del ciclo hasta ese momento —60%— porque es la semana en que el esquema de estabilización deja de ser promesa y se convierte en mecanismo operativo verificable. La LG-46 ya está efectiva y Vitol carga aproximadamente 460.000 barriles de nafta pesada desde Houston hacia Venezuela, reactivando la producción de crudos extrapesados de la Faja del Orinoco que depende de diluyentes para ser transportable. Las exportaciones supervisadas de crudo Merey, fueloil y GLP hacia EE.UU. y el Caribe se incrementan de forma sostenida. Trump ordena al secretario de Transporte y a las autoridades militares habilitar vuelos comerciales, con American Airlines como primera operadora. El Ejecutivo confirma además la primera exportación venezolana de gas natural —un nuevo vector energético hasta entonces ausente.<br><br>El análisis situacional de la semana identifica tres dinámicas convergentes que explican la solidez de E3: estabilización operativa del Estado bajo autoridad interina reconocida internamente; ampliación controlada de la normalización energética y de conectividad bajo supervisión externa; y persistencia de una transición política administrada, diferida e incierta, cuyo desenlace permanece condicionado por factores exógenos. La agenda legislativa avanza con la segunda discusión y aprobación de la reforma a la Ley Orgánica de Hidrocarburos, completando el cambio normativo más profundo del sector en cinco décadas. Washington maneja un esquema de doble carril: en el plano público reconoce a Delcy Rodríguez para actividad petrolera, económica, migración y presos; en paralelo evalúa escenarios de contingencia ante un eventual colapso, incluyendo la posibilidad de un consejo tecnocrático temporal de competencias limitadas —dato que muestra que la apuesta por E3 no excluye la planificación para E4.<br><br>Al mismo tiempo, esta semana activa con fuerza el vector hacia E1. La reunión Rubio–MCM en Washington institucionaliza el doble canal hacia la transición. La Ley de Amnistía entra en primera discusión en la Asamblea Nacional, con un proceso de consulta nacional acelerado. El 78.3% de intención de voto por MCM en Meganalisis y la alta legitimidad de Guanipa y González Urrutia configuran la base opositora más sólida del ciclo. Sin embargo, Washington es explícito en sus reservas sobre el regreso inmediato de MCM: la Casa Blanca evita fijar calendarios o garantías explícitas, percibiendo ese retorno como factor potencial de desestabilización que podría interferir con la normalización gradual. Marco Rubio defiende ante el Senado que sin medios libres ni oposición plena no hay elecciones libres, y compara el proceso venezolano con la transición española post-Franco: "los cambios profundos requieren tiempo".<br><br>E2 cae a 10% porque sin interrupción del esquema petrolero-financiero el riesgo de fragmentación está estructuralmente contenido. E4 se mantiene en 10% como riesgo latente: los mensajes que descartan elecciones en el corto plazo y la suspensión de procedimientos vinculados al sistema de partidos revelan que el control político interno no se ha relajado, solo se ha reconfigurado bajo una nueva arquitectura.',
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
    lectura: 'La semana del 30 de enero al 5 de febrero introduce la primera tensión sistémica del ciclo de estabilización. E3 cede levemente a 50%, E1 sube a 30% y E4 gana terreno hasta 15%, reflejando que el esquema de continuidad negociada empieza a absorber presiones que no puede resolver con el repertorio de gestos que ha venido desplegando. La contradicción central del período es entre la aceleración de la normalización energético-diplomática con EE.UU. —ampliación de licencias OFAC incluyendo GL47 para diluyentes y extensión hasta marzo de 2026 de la licencia que protege a Citgo, llegada de la encargada Laura Dogu, bonos soberanos al alza— y la resistencia del Ejecutivo a las aperturas políticas que esa misma lógica de acoplamiento comienza a demandar como condición de sostenibilidad.<br><br>En el plano político-institucional, los gestos de distensión son deliberadamente reversibles. La aprobación en primera discusión de la Ley de Amnistía coexiste con excarcelaciones parciales con brecha verificable entre anuncios oficiales y liberaciones confirmadas. El cierre de El Helicoide como centro policial es presentado como señal de apertura, pero las organizaciones de derechos humanos documentan 949 personas detenidas por motivos políticos al 21 de enero. La FANB reafirma el 4 de febrero su lealtad al Proyecto Bolivariano, y Jorge Rodríguez descarta públicamente elecciones inmediatas vinculando cualquier retorno de opositores al cumplimiento de la Ley de Amnistía —que aún no ha sido aprobada en segunda discusión. El Ejecutivo activa un Programa de Paz y Convivencia Democrática con encuentros encabezados por Jorge Rodríguez con representantes de sectores políticos y sociales, ejerciendo control sobre el ritmo y el formato del proceso.<br><br>La presión que empuja E1 al 30% es de doble origen. Interna: el 93.5% de rechazo ciudadano a una transición chavista y el 78.3% de intención de voto por MCM representan una demanda política que el esquema de E3 no puede ignorar indefinidamente. MCM despliega una ofensiva diplomática de alto perfil, afirmando que la transición democrática es inevitable y no depende de concesiones del oficialismo, y dejando abierta la posibilidad de contactos condicionados a un cronograma claro. Externa: 14 jefes de Estado europeos presionan activamente hacia un cronograma electoral, y Trump propone públicamente reunir en un mismo espacio a representantes del chavismo y la oposición —señal de que la dimensión política del proceso está siendo gestionada activamente desde Washington.<br><br>E4 sube a 15% por acumulación de señales de control discrecional. El aplazamiento del proceso judicial contra Maduro en tribunales estadounidenses —de marzo 17 a marzo 26— es leído como flexibilidad táctica bilateral, pero también como señal de que los mecanismos de presión están siendo administrados. Los casos de Álex Saab y Raúl Gorrín —con versiones contradictorias sobre cooperación con autoridades estadounidenses— revelan zonas de opacidad dentro del propio esquema. La estabilidad macroeconómica emergente sigue percibida como altamente dependiente de factores exógenos: el alza de bonos soberanos y la trayectoria hacia 800K bpd confirman que el acoplamiento energético es el eje del sistema, y que mientras ese eje se mantenga, E4 permanece latente y no dominante.',
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
    lectura: 'La semana del 6 al 13 de febrero es la de mayor ambigüedad estructural del ciclo. E3 continúa dominante al 45%, pero la distancia sobre E1 se reduce (30%) y E4 sube a 20%, configurando el mapa más distribuido hasta ese momento. Tres dinámicas operan simultáneamente en direcciones que no convergen. La visita del secretario de Energía Chris Wright consolida la cooperación de largo plazo: GL49, GL46A, GL48 y GL50 están operativas, autorizando operaciones de BP, Chevron, Eni, Repsol y Shell con PDVSA bajo condiciones estrictas —contratos bajo ley estadounidense, pagos canalizados a fondos controlados por EE.UU., exclusión de actores de Rusia, Irán, China, Cuba y Corea del Norte, reportes periódicos al Departamento del Tesoro—. Repsol obtiene autorización para extraer crudo. El anuncio del envío de 50 millones de barriles hacia Houston confirma escala real, no simbólica. La EIA proyecta retorno a 1.1–1.2 millones de barriles diarios hacia mediados de 2026. El sector energético se confirma como ancla macroeconómica.<br><br>Pero la Ley de Amnistía revela sus límites esta misma semana. La segunda discusión es diferida para los artículos 7 al 13 —los más sensibles, que regulan el alcance personal y procedimental— después de consultas con 16 universidades y organizaciones como Foro Penal, PROVEA, CLIPPVDE y Acceso a la Justicia, cuyos aportes las organizaciones civiles denuncian que no fueron incorporados efectivamente. El patrón de excarcelaciones con medidas cautelares —Guanipa, Rocha y Superlano— genera percepción de reversibilidad y discrecionalidad. La brecha entre 897 liberaciones oficiales y aproximadamente 430 verificadas por ONG mantiene activa la disputa narrativa. El House Foreign Affairs Committee en EE.UU. eleva presión pública usando el caso Guanipa como referencia, elevando el costo político en Washington ante eventuales retrocesos.<br><br>E4 sube a 20% por señales específicas de control discrecional. Delcy Rodríguez reafirma en NBC News la legitimidad formal de Maduro pese a su detención, mientras ejerce conducción interina —un equilibrio retórico que procura preservar continuidad sin obstaculizar la cooperación externa, pero que revela la fragilidad del marco político subyacente. Las tensiones geopolíticas con Rusia —que denuncia "discriminación" en el nuevo marco energético— y China —que prioriza la recuperación de deuda de entre USD 10.000 y 20.000 millones— añaden vectores exógenos que podrían activar fricciones regulatorias si escalan. El diferimiento de los artículos 7–13 de la Ley de Amnistía y el patrón cautelar replican la lógica de control centralizado que caracteriza E4 en miniatura, dentro del esquema de E3 dominante.<br><br>El vector de tendencia apunta hacia E1. El 67% que votaría por MCM (Financial Times) y el 75% que percibe el país en dirección correcta configuran la base de demanda política más intensa del ciclo hasta este momento. La encargada Dogu instala la hoja de ruta de tres fases —estabilización, recuperación, transición— con ambigüedad deliberada sobre plazos electorales, pero dejando establecido que la tercera fase existe en el diseño. La aprobación en segunda discusión de la Ley de Amnistía —el hito anticipado para la semana siguiente— será el indicador más claro de si E3 puede sostenerse sin ceder espacio a E1 o si el mapa se reconfigura.',
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
    lectura: 'La semana del 13 al 20 de febrero es la de mayor densidad analítica del ciclo. El mapa de probabilidades alcanza su distribución más equilibrada: E3 dominante al 40%, E1 en 35%, E2 contenido al 15%, E4 en 10%. Este reequilibrio no refleja inestabilidad sino maduración: cuatro fuerzas estructurales operan simultáneamente con intensidades comparables, y el modelo híbrido venezolano llega a su expresión más elaborada.<br><br>El eje energético-financiero alcanza su nivel de mayor profundidad institucional. Las GL49 y GL50/50A plenamente operativas con condiciones detalladas: contratos bajo ley estadounidense, regalías e impuestos federales depositados en el Foreign Government Deposit Funds controlado por EE.UU., exclusión de actores de Rusia, Irán, China, Cuba y Corea del Norte. Las ventas de crudo superan USD 1.000 millones y los acuerdos de corto plazo alcanzan USD 5.000 millones, según Wright. La visita del General Francis L. Donovan del SOUTHCOM a Caracas —con reuniones con Delcy Rodríguez, Vladimir Padrino López y Diosdado Cabello— confirma que la cooperación de seguridad tiene profundidad institucional: la agenda cubre narcotráfico, terrorismo y flujos migratorios. La aprobación definitiva de la Ley de Amnistía el 19 de febrero —con incorporación del artículo 16 sobre reincidencia y procedimientos para beneficiarios en el exterior— añade el componente político-institucional al modelo. La UCAB proyecta crecimiento del PIB entre 10.4% y 15.2% para 2026 impulsado por el repunte petrolero.<br><br>La presión hacia E1 es la más intensa del ciclo. Dos tercios de la población exige elecciones presidenciales este año. El 52% tiene imagen favorable del liderazgo opositor, frente a un 75% de imagen desfavorable de Delcy Rodríguez. Más del 90% respalda las demandas de EE.UU. sobre elecciones y liberación de presos políticos. MCM propone un proceso electoral en 9–10 meses con voto manual, registro actualizado, observación total y fin de la represión. Chris Wright comenta que ella "es realista sobre los cambios que deben ocurrir primero", sugiriendo que Washington ve la propuesta como hoja de ruta condicionada, no plazo fijo. España anuncia ante la UE una solicitud formal para levantar sanciones sobre Delcy Rodríguez —requeriría unanimidad de los 27—, abriendo una presión europea hacia la legitimación. El FMI declara disposición a establecer contactos formales si Venezuela lo solicita.<br><br>E2 (15%) no está extinguido: refleja la brecha estructural entre el optimismo político —75% percibe el país en dirección correcta— y la fragilidad económica real. El sistema eléctrico registra 14.8 horas promedio de cortes. El 69.5% tiene ingresos por debajo de USD 300 mientras la canasta básica supera USD 550. La inflación permanece en tres dígitos. El 62% prioriza el costo de vida, el 44% la salud, el 35% el empleo. Si el ingreso petrolero no se traduce en bienestar tangible, esa brecha es el vector de activación del deterioro acelerado. E4 (10%) se mantiene por las tensiones reportadas en la FANB: Padrino López acumula cerca de 12 años como ministro de Defensa, hay solicitudes de retiro crecientes incluso entre generales, malestar interno por falta de rendición de cuentas tras la operación del 3 de enero, y un reporte de El País que documenta frustración económica, desmoralización y sobredimensionamiento del alto mando frente a la tropa. La eventual salida de Padrino sería un movimiento de alto impacto en la arquitectura de poder vigente, donde el eje Rodríguez–Cabello concentraría control efectivo.',
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
  {
    label: '20–27 feb',
    lectura: 'La semana del 20 al 27 de febrero consolida E3 en su nivel más alto del ciclo —50%— a través del hecho simbólico más significativo del período completo: Donald Trump califica a Venezuela como "nuevo amigo y socio" en el discurso del Estado de la Unión ante el Congreso, con Enrique Márquez —dirigente opositor y ex preso político— presente en el hemiciclo. La coexistencia de ambas referencias en el mismo acto condensa en un gesto la lógica del doble canal que ha estructurado toda la relación bilateral desde enero: reconocimiento al Ejecutivo interino y visibilidad opositora simultáneos. Trump afirma haber recibido "más de 80 millones de barriles de petróleo" y declara que "se abrió una brecha para un futuro brillante". Las exportaciones se sitúan alrededor de 800.000 barriles diarios, Vitol y Trafigura tienen tres buques fletados para marzo, refinerías indias incrementan compras usando VLCC de hasta 2 millones de barriles de capacidad, y la proyección de ingresos alcanza USD 6.000 millones en los próximos meses. Eni negocia compensación de USD 3.000 millones en crudo. Shell avanza proyectos gasíferos. El General Donovan anuncia su regreso para liderar el plan de tres fases y entrega una segunda remesa de asistencia médica que eleva el total a 71.000 kg.<br><br>La amnistía pasa de aprobada a operativa. La Comisión Especial de Seguimiento reporta 4.203 solicitudes procesadas y 3.231 libertades plenas en el primer corte —179 personas privadas de libertad y 3.052 con medidas cautelares—. El Poder Ciudadano se reconfigura: renuncian Tarek William Saab como Fiscal General y Alfredo Ruiz como Defensor del Pueblo, con designaciones encargadas y un plazo de 30 días para titulares definitivos. Colombia activa el canal diplomático con la reunión Petro–Delcy prevista para el 14 de marzo en Cúcuta. España propone ante la UE levantar sanciones individuales sobre Delcy Rodríguez, lo que requeriría unanimidad de los 27 miembros. La presión estadounidense sobre la alianza con Cuba se intensifica: se reporta salida de asesores de seguridad, agentes de inteligencia y médicos cubanos por presión de Washington para desmontar esa alianza.<br><br>Sin embargo, el mapa no es de consolidación lineal sino de consolidación con tensiones no resueltas. E1 baja a 30% porque no hay compromisos electorales concretos: Marco Rubio afirma explícitamente que la legitimación electoral es requisito para inversión y reconstrucción, pero el Ejecutivo no anuncia calendario. La disputa de cifras sobre amnistía es aguda: Foro Penal registra 568 presos políticos activos verificados al 25 de febrero, frente a 4.151 beneficiados oficiales; más de 11.000 personas permanecen bajo medidas restrictivas vigentes. La concentración territorial de excarcelaciones —135 de 179 en el Distrito Capital— abre cuestionamientos sobre equidad y criterios. El caso Magalli Meda —irrupción de 16 hombres armados en 6 camionetas en la vivienda de una dirigente opositora, con destrucción de pertenencias y carteles de incautación— es la señal más perturbadora de la semana: revela que la coerción paralela al discurso de reconciliación no ha sido desmantelada.<br><br>La brecha cambiaria supera el 52.6% —631.68 Bs/$ de mercado frente a 414.05 Bs/$ oficial—, con el salario mínimo sin cambios por más de 47 meses y el Ejecutivo descartando dolarización formal. El 51.5% percibe el país mejor que el año anterior, pero el 62% sigue priorizando el costo de vida y el 56.7% señala la corrupción como principal problema nacional. E2 contenido al 10% no está extinguido: el ingreso petrolero proyectado debe materializarse en estabilidad cambiaria tangible para que el optimismo no se erosione. E4 se sostiene en 10% por las designaciones encargadas en el Poder Ciudadano —que podrían consolidar control sin pluralismo real— y por el caso Meda, que recuerda que el aparato coercitivo paralelo sigue operativo bajo el discurso de reconciliación.',
    shortLabel: '20–27F',
    // Fuente: Análisis de Contexto Situacional + Matriz Semanal 20–27 feb 2026.
    // E3 sube a dominante alta (50%): Trump "nuevo amigo y socio", 800K bpd, amnistía operativa.
    // E1 baja (30%): sin calendario electoral, Rubio condiciona. E2 contenido (10%).
    // E4 latente (10%): caso Magalli Meda revela coerción paralela.
    moveReason: 'E3 se consolida como dominante al 50%: acoplamiento EE.UU. sin precedentes, expansión petrolera y operativización de amnistía. E1 baja por ausencia de compromisos electorales concretos.',
    probs: [
      { sc: 1, label: 'Media', value: 30, drivers: ['Marco Rubio: legitimación electoral como requisito para inversión y reconstrucción', '60,3% considera el país "algo" o "mucho más democrático" — base de expectativa', 'España propone ante UE retirar sanciones a Delcy Rodríguez — apertura europea condicionada', 'Apertura a "medidas de gracia" para casos excluidos de amnistía', 'Disputa de cifras sobre amnistía: 568 presos verificados vs 4.151 oficiales — presión de transparencia'], signals: ['Anuncio formal de reformas institucionales adicionales (Poder Ciudadano, sistema electoral)', 'Publicación transparente de listados consolidados de beneficiarios de amnistía', 'Calendario electoral o compromisos verificables comunicados públicamente', 'Reunión Petro-Delcy (14 marzo, Cúcuta) con declaración política conjunta', 'Designaciones definitivas en Poder Ciudadano con perfil técnico'] },
      { sc: 2, label: 'Media (contenida)', value: 10, drivers: ['Brecha cambiaria 52,6% (↑6,5 pp semanal); mercado 631,68 Bs/$ vs BCV 414,05 Bs/$', 'Salario mínimo sin cambios por más de 47 meses; canasta básica ~USD 550 vs ingreso ~USD 270', '>90% volumen cripto en stablecoins (USDT); Venezuela puesto 18 adopción cripto global', 'FMI: deuda >180% del PIB, inflación tres dígitos, debilidad institucional persistente', 'Corrupción señalada por 56,7% como principal problema nacional'], signals: ['Persistencia de brecha cambiaria >55% sin intervención eficaz del BCV', 'Deterioro en próximas mediciones de aprobación (actualmente 37% vs 44,3% desaprobación)', 'Movilizaciones gremiales por salario mínimo o incumplimiento de ajustes prometidos', 'Retraso en materialización de ingresos petroleros proyectados (USD 6.000 millones)', 'Fractura en la relación con EE.UU. o suspensión de licencias OFAC'] },
      { sc: 3, label: 'Alta (dominante)', value: 50, drivers: ['Trump calificó a Venezuela como "nuevo amigo y socio" en el Estado de la Unión; Enrique Márquez en hemiciclo', 'Exportaciones ~800.000 bpd; Vitol y Trafigura 3 buques marzo; proyección USD 6.000 millones', 'Amnistía operativa: 4.203 solicitudes; 3.231 libertades plenas (1er corte)', 'SOUTHCOM (Donovan) anuncia regreso para liderar plan de tres fases; 71.000 kg asistencia médica', '62,4% valora positivamente aumento de influencia estadounidense; 51,5% percibe país mejor', '37% aprueba a Delcy Rodríguez — pero 80M barriles de petróleo consolidan esquema energético', 'Eni: compensación USD 3B en crudo; Shell: proyectos gasíferos; Colombia: reunión Petro-Delcy 14 marzo'], signals: ['Flujo sostenido de exportaciones hacia India y EE.UU. (Valero, Phillips 66, Citgo)', 'Continuidad del plan de tres fases SOUTHCOM; segunda visita de Donovan', 'Ampliación verificable de excarcelaciones con listas públicas consolidadas', 'Estabilización o reducción progresiva de brecha cambiaria (actualmente >50%)', 'Designaciones definitivas en el Poder Ciudadano dentro del plazo de 30 días'] },
      { sc: 4, label: 'Media-baja', value: 10, drivers: ['Concentración territorial de excarcelaciones: 135 de 179 en Caracas (inequidad geográfica)', 'Caso Magalli Meda: 16 hombres armados, 6 camionetas — coerción activa paralela al discurso', 'Más de 11.000 personas aún bajo medidas restrictivas vigentes (Foro Penal)', 'Reacomodo Poder Ciudadano con designaciones encargadas — posible concentración de control', 'Destitución embajadora en Nicaragua (menos de 1 mes) sin explicación — tensiones diplomáticas'], signals: ['Ralentización o suspensión de excarcelaciones sin justificación pública', 'Incremento de operativos contra líderes opositores o sociedad civil', 'Discurso oficial más confrontativo (Cabello, retórica anti-imperialista)', 'Designaciones definitivas en Poder Ciudadano que consoliden control sin pluralismo', 'Mayor presión cambiaria o conflictividad social'] },
    ],
    points: [{ sc: 1, x: 90, y: 310 }, { sc: 2, x: 90, y: 90 }, { sc: 3, x: 420, y: 340 }, { sc: 4, x: 410, y: 90 }],
    active: 3, activeXY: { x: 220, y: 250 },
    trendSc: 3,
    trendDrivers: ['Trump "nuevo amigo y socio": acoplamiento operativo EE.UU.–Venezuela sin precedentes recientes', 'Exportaciones ~800K bpd + proyección USD 6B consolidan ancla energética del Escenario 3', 'Amnistía operativa (4.203 solicitudes) refuerza narrativa de reconciliación como pilar del modelo'],
  },

];

// ════════════════════════════════════════════════════════════════
// DASHBOARD
// Añadir nuevo objeto al final de WEEKS_DASHBOARD[] cada semana.
// ════════════════════════════════════════════════════════════════

const WEEKS_DASHBOARD = [
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
    label: '20–27 feb 2026', short: '20–27F',
    scenarios: [
      { id:1, name:'Transición política pacífica', prob:30, trend:'down' },
      { id:2, name:'Colapso y fragmentación',      prob:10, trend:'flat' },
      { id:3, name:'Continuidad negociada',         prob:50, trend:'up'   },
      { id:4, name:'Resistencia coercitiva',        prob:10, trend:'flat' },
    ],
    kpis: {
      energia: { exportaciones:'~800 kbd · VLCC + India/EE.UU.', ingresos:'Proy. USD 6.000M próx. meses', licencias:'GL49+GL50/50A · FAQ 1238 Cuba', tipo_cambio:'Mdo 631,68 / BCV 414,05 Bs/$' },
      economico: { inflacion:'3 dígitos · FMI "Intensa Fragilidad"', ingresos_pob:'Canasta USD 550 vs ingreso ~USD 270', electricidad:'Sin datos nuevos', pib:'Ancla petrolera · ajuste salarial anunciado' },
      opinion: { direccion:'51,5% país mejor que con Maduro', elecciones:'Rubio: elecciones = requisito inversión', favorabilidad_mcm:'MCM +28 imagen neta', aprobacion_eeuu:'62,4% valora influencia EE.UU.' },
    },
    semaforos: { verde:6, amarillo:7, rojo:5 },
    tensiones: [
      { nivel:'green',  texto:'<strong>Amnistía operativa:</strong> 4.203 solicitudes; 3.231 libertades plenas. Trump: Venezuela "nuevo amigo y socio" (Estado de la Unión).' },
      { nivel:'green',  texto:'<strong>Petróleo:</strong> ~800K bpd. Vitol/Trafigura 3 buques marzo. Eni USD 3B compensación. Shell: proyectos gasíferos.' },
      { nivel:'yellow', texto:'<strong>Brecha cambiaria:</strong> 52,6% (25 feb) ↑6,5 pp. Mercado 631,68 vs BCV 414,05 Bs/$. 47 meses sin ajuste salarial.' },
      { nivel:'yellow', texto:'<strong>Poder Ciudadano:</strong> Renuncias Saab/Ruiz. Designaciones encargadas. Plazo 30 días para titulares definitivos.' },
      { nivel:'red',    texto:'<strong>Agenda electoral:</strong> Rubio: legitimación electoral = requisito inversión. Sin calendario. Caso Magalli Meda: coerción paralela.' },
    ],
    matrixXY: { x:0.163, y:0.475 },
    draft: false
  },
];

// ════════════════════════════════════════════════════════════════
// MONITOR DE SEÑALES
// Añadir nueva entrada en SEMANAS[] y nueva fila en cada
// INDICADORES[n].historia cada semana.
// ════════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// DATOS: semanas definidas
// ══════════════════════════════════════════════════════════════
var SEMANAS = [
  { id:'s1', label:'3–15 ene 2026',   short:'S1' },
  { id:'s2', label:'16–22 ene 2026',  short:'S2' },
  { id:'s3', label:'23–29 ene 2026',  short:'S3' },
  { id:'s4', label:'30 ene–5 feb',    short:'S4' },
  { id:'s5', label:'6–13 feb 2026',   short:'S5' },
  { id:'s6', label:'20–27 feb 2026',  short:'S6 ●' },
];
var LATEST = 's6';

// ══════════════════════════════════════════════════════════════
// DATOS: indicadores con historial
// formato historia: [semana_id, semaforo, tendencia, valor_corto]
// ══════════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════════════════════

var semColorMap = {green:'#00a651', yellow:'#fcc30b', red:'#e5243b'};
var semLabelMap = {green:'Verde', yellow:'Amarillo', red:'Rojo'};
