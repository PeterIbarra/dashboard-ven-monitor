// ─── Tab: MONITOR ───────────────────────────────────────────────────
// HTML del tab
const MONITOR_HTML = `
<div class="wrapper">

  <header>
    <div class="logo-block">
      <h1>Monitor de Señales Tempranas — Venezuela 2026</h1>
      <p>Tabla de monitoreo con semáforos de activación · Corte: 13–20 feb 2026</p>
    </div>
    <div class="badge">PNUD · Uso interno</div>
  </header>

  <div class="update-stamp">Última actualización: semana 13–20 de febrero de 2026 · Próxima revisión: 23–27 feb</div>

  <!-- Resumen ejecutivo -->
  <div class="exec-summary">
    <div class="exec-card green">
      <div class="exec-label">Señales en verde</div>
      <div class="exec-val">9</div>
      <div class="exec-desc">Indicadores que confirman continuidad del escenario dominante (E3)</div>
    </div>
    <div class="exec-card yellow">
      <div class="exec-label">Señales en amarillo</div>
      <div class="exec-val">8</div>
      <div class="exec-desc">Indicadores bajo monitoreo activo con riesgo de deterioro o cambio</div>
    </div>
    <div class="exec-card red">
      <div class="exec-label">Señales en rojo</div>
      <div class="exec-val">5</div>
      <div class="exec-desc">Indicadores que señalan fragilidad o activación de escenario adverso</div>
    </div>
    <div class="exec-card yellow">
      <div class="exec-label">Escenario dominante</div>
      <div class="exec-val" style="font-size:1.1rem; color: var(--e3)">E3 · 40%</div>
      <div class="exec-desc">Continuidad negociada. E1 (Transición) presiona con 35% y tendencia al alza</div>
    </div>
  </div>

  <!-- Leyenda + toggle -->
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.2rem;">
    <div class="legend-bar" style="margin-bottom:0">
      <div class="legend-item"><span class="dot green"></span> Verde — confirmado / estable</div>
      <div class="legend-item"><span class="dot yellow"></span> Amarillo — en monitoreo / ambiguo</div>
      <div class="legend-item"><span class="dot red"></span> Rojo — alerta / deterioro activo</div>
    </div>
    <div class="view-toggle">
      <button class="toggle-btn active" onclick="setView('tematica')">Por dimensión temática</button>
      <button class="toggle-btn" onclick="setView('escenario')">Por escenario</button>
    </div>
  </div>

  <!-- ══════════════════════════════════════════
       VISTA 1: POR DIMENSIÓN TEMÁTICA
  ══════════════════════════════════════════ -->
  <div id="view-tematica" class="view active">

    <!-- ENERGÉTICO -->
    <div class="dim-section">
      <div class="dim-header">
        <div class="dim-icon">⚡</div>
        <div class="dim-title" style="color:#E5243B">Sector Energético</div>
        <div class="dim-count">6 indicadores</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr>
            <th style="width:28%">Indicador</th>
            <th style="width:22%">Valor / Estado actual</th>
            <th style="width:12%">Semáforo</th>
            <th style="width:22%">Qué observar</th>
            <th style="width:16%">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Exportaciones de crudo</span><span class="ind-desc">Volumen semanal bajo licencias OFAC</span></td>
            <td class="ind-value" style="color:var(--green)">~800 kbd · ↑60.6%</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Sostenimiento >750 kbd. Caída por debajo de 600 kbd activaría alerta.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Crecimiento sostenido desde ene</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Ventas petroleras (ingresos)</span><span class="ind-desc">Acuerdos bajo GL49 y GL50/50A</span></td>
            <td class="ind-value" style="color:var(--green)">USD +1.000M · acuerdos USD 5.000M</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Flujo regular a banca privada en 30–45 días. Interrupción del ciclo = alerta roja.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Primer hito de ingresos verificado</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Licencias OFAC activas</span><span class="ind-desc">GL49, GL50/50A operativas</span></td>
            <td class="ind-value" style="color:var(--green)">Operativas · sin restricciones</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Cualquier modificación unilateral de EE. UU. o suspensión pasaría a rojo inmediato.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Estables desde feb 2026</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Producción Chevron</span><span class="ind-desc">Operaciones en campo bajo supervisión</span></td>
            <td class="ind-value" style="color:var(--yellow)">~250 kbd · capacidad subutilizada</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Phillips 66 puede procesar hasta 250 kbd V2LA. Necesita aumentar para cumplir metas 2026.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">En aumento pero por debajo del objetivo</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Infraestructura de refinación</span><span class="ind-desc">Capacidad operativa refinerías</span></td>
            <td class="ind-value" style="color:var(--red)">Muy por debajo capacidad histórica</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Necesidad estimada >USD 100.000M inversión. Sin mejoras en 6 meses = riesgo estructural.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Sin mejoras verificadas aún</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Taladros activos</span><span class="ind-desc">Capacidad de perforación disponible</span></td>
            <td class="ind-value" style="color:var(--red)">Escasez crítica de taladros</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Limitación estructural severa para alcanzar proyección 1.22–1.32 mbd en 2026.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Sin cambio desde ene</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- POLÍTICO-INSTITUCIONAL -->
    <div class="dim-section">
      <div class="dim-header">
        <div class="dim-icon">🏛</div>
        <div class="dim-title" style="color:#0A97D9">Político-Institucional</div>
        <div class="dim-count">6 indicadores</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr>
            <th style="width:28%">Indicador</th>
            <th style="width:22%">Valor / Estado actual</th>
            <th style="width:12%">Semáforo</th>
            <th style="width:22%">Qué observar</th>
            <th style="width:16%">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Ley de Amnistía</span><span class="ind-desc">Aprobación y aplicación legislativa</span></td>
            <td class="ind-value" style="color:var(--green)">Promulgada 19 feb 2026</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Aplicación sin medidas cautelares y liberaciones verificables = verde. Discrecionalidad o reversión = rojo.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Hito alcanzado esta semana</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Excarcelaciones verificadas</span><span class="ind-desc">Diferencia entre cifras oficiales y ONGs</span></td>
            <td class="ind-value" style="color:var(--yellow)">895 oficial vs 383 verificadas</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Brecha >50% entre cifras oficiales y ONGs persiste. Liberaciones con medidas cautelares = amarillo.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Brecha sin cerrar desde ene</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Cohesión civil-militar (FANB)</span><span class="ind-desc">Tensiones internas en cúpula militar</span></td>
            <td class="ind-value" style="color:var(--yellow)">Tensiones reportadas (El País)</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Reportes de demandas de "oxigenación". Padrino López 12 años. Cambios forzados = rojo.</span></td>
            <td><span class="trend-arrow down">↓</span><span class="trend-note">Señales de malestar en feb</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Reorganización del Ejecutivo</span><span class="ind-desc">Reestructuración ministerial en curso</span></td>
            <td class="ind-value" style="color:var(--green)">En proceso · CESPPA eliminada</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Reorganización como señal de adaptación institucional. Parálisis o reversión = amarillo.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Avanza según hoja de ruta</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Agenda electoral</span><span class="ind-desc">Presión por calendario electoral 2026</span></td>
            <td class="ind-value" style="color:var(--yellow)">2/3 exige elecciones este año</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Sin anuncio de calendario formal. Señales de EE. UU. sobre 9-10 meses. Variable crítica de las próximas semanas.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Presión creciente semana a semana</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Marcos restrictivos vigentes</span><span class="ind-desc">Ley contra el Odio, restricciones cívicas</span></td>
            <td class="ind-value" style="color:var(--red)">Sin reforma · activos</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Permanencia bloquea apertura real del espacio cívico. Reforma o derogación = señal verde fuerte hacia E1.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Sin cambios desde ene</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ECONÓMICO-SOCIAL -->
    <div class="dim-section">
      <div class="dim-header">
        <div class="dim-icon">📊</div>
        <div class="dim-title" style="color:#4C9F38">Económico-Social</div>
        <div class="dim-count">5 indicadores</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr>
            <th style="width:28%">Indicador</th>
            <th style="width:22%">Valor / Estado actual</th>
            <th style="width:12%">Semáforo</th>
            <th style="width:22%">Qué observar</th>
            <th style="width:16%">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Tipo de cambio / brecha cambiaria</span><span class="ind-desc">Estabilidad del bolívar frente al USD</span></td>
            <td class="ind-value" style="color:var(--yellow)">420–430 VEB/USD proyectado</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Estabilización depende de flujo de divisas petroleras. Volatilidad brusca = alerta. Reducción gradual de brecha = verde.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Relativa estabilidad reciente</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Inflación</span><span class="ind-desc">Proyección anual 2026</span></td>
            <td class="ind-value" style="color:var(--yellow)">~174% proyectado 2026</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Mejora vs 567% en 2025, pero aún tres dígitos. Descenso a <100% = verde. Aceleración = rojo.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Mejora significativa proyectada</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Ingresos de la población</span><span class="ind-desc">% con ingresos < USD 300 mensuales</span></td>
            <td class="ind-value" style="color:var(--red)">69.5% gana < USD 300</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Canasta básica USD 550+. Brecha crítica entre crecimiento macro y bienestar cotidiano. No se proyecta mejora en el corto plazo.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Sin mejoría verificada</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Sistema eléctrico</span><span class="ind-desc">Horas promedio sin suministro</span></td>
            <td class="ind-value" style="color:var(--red)">14.8h promedio sin suministro</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">52.6% de empresas evalúa negativamente el servicio. Deterioro adicional = escalada de conflictividad social.</span></td>
            <td><span class="trend-arrow flat">→</span><span class="trend-note">Sin mejoras estructurales</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Percepción de dirección del país</span><span class="ind-desc">Opinión pública (Atlantic Council)</span></td>
            <td class="ind-value" style="color:var(--green)">75% percibe dirección correcta</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Paciencia social condicionada a mejoras tangibles. Caída por debajo de 60% = señal de alerta para E3.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Optimismo sostenido desde ene</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- INTERNACIONAL -->
    <div class="dim-section">
      <div class="dim-header">
        <div class="dim-icon">🌐</div>
        <div class="dim-title" style="color:#FCC30B">Internacional y Geopolítico</div>
        <div class="dim-count">5 indicadores</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr>
            <th style="width:28%">Indicador</th>
            <th style="width:22%">Valor / Estado actual</th>
            <th style="width:12%">Semáforo</th>
            <th style="width:22%">Qué observar</th>
            <th style="width:16%">Tendencia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Cooperación EE. UU.–Venezuela</span><span class="ind-desc">SOUTHCOM, energía, seguridad</span></td>
            <td class="ind-value" style="color:var(--green)">SOUTHCOM en Caracas · activa</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Cooperación en narcotráfico, terrorismo, migración. Retiro o congelamiento = rojo inmediato para E3.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Se consolida semana a semana</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Sanciones UE</span><span class="ind-desc">Proceso de revisión de sanciones individuales</span></td>
            <td class="ind-value" style="color:var(--yellow)">España gestiona ante UE</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Requiere unanimidad de los 27. Proceso iniciado sobre Delcy Rodríguez. Resultado incierto.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Primera acción concreta desde ene</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Relación con China y Rusia</span><span class="ind-desc">Tensiones por giro hacia Occidente</span></td>
            <td class="ind-value" style="color:var(--yellow)">Tensiones crecientes · China activa</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">China rechaza sanciones unilaterales. Exportaciones a China cayeron 76%. Rusia marginalizada. Variable de riesgo geopolítico.</span></td>
            <td><span class="trend-arrow down">↓</span><span class="trend-note">Deterioro progresivo desde ene</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">FMI y reinserción financiera</span><span class="ind-desc">Disposición al diálogo formal</span></td>
            <td class="ind-value" style="color:var(--yellow)">FMI dispuesto si VE lo solicita</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Condicionado a solicitud formal del Estado venezolano. Reinserción plena depende de definiciones políticas más amplias.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Primera señal positiva del FMI</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Normalización diplomática</span><span class="ind-desc">Reapertura de canales bilaterales</span></td>
            <td class="ind-value" style="color:var(--green)">Encargada Laura Dogu activa</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Canal diplomático EE. UU.–Venezuela operativo. Retiro o downgrade diplomático = señal de deterioro.</span></td>
            <td><span class="trend-arrow up">↑</span><span class="trend-note">Normalización gradual en curso</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div><!-- fin view-tematica -->

  <!-- ══════════════════════════════════════════
       VISTA 2: POR ESCENARIO
  ══════════════════════════════════════════ -->
  <div id="view-escenario" class="view">

    <!-- E3: Continuidad negociada -->
    <div class="sc-section">
      <div class="sc-header" style="border-left: 3px solid var(--e3)">
        <div class="sc-num" style="color:var(--e3)">E3</div>
        <div class="sc-info">
          <div class="sc-name" style="color:var(--e3)">Continuidad negociada</div>
          <div class="sc-prob-row">
            <span class="sc-prob-val">40% · Alta — escenario dominante del período</span>
            <div class="sc-prob-bar"><div class="sc-prob-fill" style="width:40%; background:var(--e3)"></div></div>
          </div>
        </div>
        <div class="sc-status">Activo · Semana 13–20 feb</div>
      </div>
      <div class="alert-summary">
        <div class="alert-pill"><span class="dot green" style="width:8px;height:8px"></span> 5 señales confirmadas</div>
        <div class="alert-pill"><span class="dot yellow" style="width:8px;height:8px"></span> 3 en monitoreo</div>
        <div class="alert-pill"><span class="dot red" style="width:8px;height:8px"></span> 0 alertas activas</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr><th style="width:30%">Señal de activación</th><th style="width:24%">Estado actual</th><th style="width:13%">Semáforo</th><th style="width:33%">Lectura analítica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Exportaciones bajo licencias</span><span class="ind-desc">Flujo sostenido Chevron, traders, Europa</span></td>
            <td class="ind-value" style="color:var(--green)">~800 kbd · GL49+GL50 operativas</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Ancla del escenario. Confirma gobernanza petrolera bajo tutela externa.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Inyección de divisas a banca</span><span class="ind-desc">Ciclo 30–45 días hacia banca privada</span></td>
            <td class="ind-value" style="color:var(--green)">Ciclo en curso · acordado</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Mecanismo operativo clave. Interrupción del ciclo activaría deterioro rápido del escenario.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Excarcelaciones parciales</span><span class="ind-desc">Sin reformas políticas estructurales</span></td>
            <td class="ind-value" style="color:var(--yellow)">895 oficial · 383 verificadas</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Patrón de E3: apertura controlada y discrecional. Brecha sostenida confirma el escenario.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Discurso de estabilidad dominante</span><span class="ind-desc">Narrativa oficial centrada en estabilización</span></td>
            <td class="ind-value" style="color:var(--green)">75% percibe dirección correcta</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Legitimidad funcional activa. Paciencia social sostiene el escenario en ausencia de mejoras tangibles.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Cooperación SOUTHCOM</span><span class="ind-desc">Agenda de seguridad hemisférica</span></td>
            <td class="ind-value" style="color:var(--green)">Reunión en Caracas confirmada</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Presencia militar EE. UU. consolida el paraguas de estabilidad.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Brecha cambiaria bajo control</span><span class="ind-desc">Estabilidad relativa tipo de cambio</span></td>
            <td class="ind-value" style="color:var(--yellow)">420–430 VEB/USD · relativa estabilidad</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Estabilidad frágil. Depende del flujo petrolero. Volatilidad brusca = riesgo para E3.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Optimismo en opinión pública &gt;70%</span><span class="ind-desc">Encuesta Atlantic Council / Hinterlaces</span></td>
            <td class="ind-value" style="color:var(--yellow)">75% · economía priorizada 8:1</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Umbral de contención social activo pero frágil. Caída bajo 60% = erosión del E3.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Servicios mínimos operativos</span><span class="ind-desc">Electricidad, agua, transporte</span></td>
            <td class="ind-value" style="color:var(--green)">Operativos con afectaciones</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Umbral mínimo de gobernabilidad mantenido. Colapso eléctrico extendido = activación E4.</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- E1: Transición política -->
    <div class="sc-section">
      <div class="sc-header" style="border-left: 3px solid var(--e1)">
        <div class="sc-num" style="color:var(--e1)">E1</div>
        <div class="sc-info">
          <div class="sc-name" style="color:var(--e1)">Transición política pacífica</div>
          <div class="sc-prob-row">
            <span class="sc-prob-val">35% · Media — en espera, presión al alza</span>
            <div class="sc-prob-bar"><div class="sc-prob-fill" style="width:35%; background:var(--e1)"></div></div>
          </div>
        </div>
        <div class="sc-status">+30pp acumulado desde inicio</div>
      </div>
      <div class="alert-summary">
        <div class="alert-pill"><span class="dot green" style="width:8px;height:8px"></span> 1 señal confirmada</div>
        <div class="alert-pill"><span class="dot yellow" style="width:8px;height:8px"></span> 4 en monitoreo</div>
        <div class="alert-pill"><span class="dot red" style="width:8px;height:8px"></span> 2 ausentes / bloqueadas</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr><th style="width:30%">Señal de activación</th><th style="width:24%">Estado actual</th><th style="width:13%">Semáforo</th><th style="width:33%">Lectura analítica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Cambios normativos clave (Amnistía)</span><span class="ind-desc">Ley de Amnistía promulgada</span></td>
            <td class="ind-value" style="color:var(--green)">Promulgada 19 feb 2026</td>
            <td><span class="semaforo green">Verde</span></td>
            <td><span class="ind-desc">Primera señal estructural de apertura. Necesita aplicación plena para confirmar E1.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Fracturas internas visibles</span><span class="ind-desc">Reacomodo de élites / disidencia interna</span></td>
            <td class="ind-value" style="color:var(--yellow)">Tensiones FANB reportadas</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Señales de malestar en cúpula militar. Aún sin ruptura visible. Variable crítica a monitorear.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Reducción efectiva de coerción</span><span class="ind-desc">Liberación plena de presos políticos</span></td>
            <td class="ind-value" style="color:var(--yellow)">Parcial · con medidas cautelares</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Patrón de reversibilidad activo. Liberaciones sin cautelares sería señal de activación de E1.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Mayor rol multilateral</span><span class="ind-desc">ONU, UE, acompañamiento internacional</span></td>
            <td class="ind-value" style="color:var(--yellow)">FMI + España / UE en proceso</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Señales incipientes pero sin compromisos formales. Requiere involucramiento estructurado.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Anuncio formal de calendario electoral</span><span class="ind-desc">Elecciones presidenciales 2026</span></td>
            <td class="ind-value" style="color:var(--red)">Ausente · sin fecha anunciada</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Variable crítica. 2/3 de la población exige elecciones este año. Señal de EE. UU. sobre 9–10 meses. Sin anuncio = bloqueo de E1.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Reforma marcos restrictivos</span><span class="ind-desc">Ley contra el Odio, partidos, espacio cívico</span></td>
            <td class="ind-value" style="color:var(--red)">Sin reforma · activos</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Ausencia bloquea apertura política real. Derogación o reforma = activación fuerte de E1.</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- E2: Colapso -->
    <div class="sc-section">
      <div class="sc-header" style="border-left: 3px solid var(--e2)">
        <div class="sc-num" style="color:var(--e2)">E2</div>
        <div class="sc-info">
          <div class="sc-name" style="color:var(--e2)">Colapso y fragmentación</div>
          <div class="sc-prob-row">
            <span class="sc-prob-val">15% · Media contenida — en descenso desde ene</span>
            <div class="sc-prob-bar"><div class="sc-prob-fill" style="width:15%; background:var(--e2)"></div></div>
          </div>
        </div>
        <div class="sc-status">-30pp vs inicio (45%)</div>
      </div>
      <div class="alert-summary">
        <div class="alert-pill"><span class="dot green" style="width:8px;height:8px"></span> 0 señales activas</div>
        <div class="alert-pill"><span class="dot yellow" style="width:8px;height:8px"></span> 3 latentes</div>
        <div class="alert-pill"><span class="dot red" style="width:8px;height:8px"></span> 2 estructurales persistentes</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr><th style="width:30%">Señal de activación</th><th style="width:24%">Estado actual</th><th style="width:13%">Semáforo</th><th style="width:33%">Lectura analítica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Fallas en servicios críticos</span><span class="ind-desc">Electricidad, agua, salud</span></td>
            <td class="ind-value" style="color:var(--yellow)">14.8h sin electricidad promedio</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Deterioro estructural pero contenido. Colapso prolongado o nuevas fallas masivas = señal de E2.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Fractura de la FANB</span><span class="ind-desc">Quiebre institucional militar</span></td>
            <td class="ind-value" style="color:var(--yellow)">Tensiones · sin ruptura visible</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Malestar presente pero cohesión mantenida. Ruptura abierta activaría E2 o E4 de forma inmediata.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Shock económico no absorbido</span><span class="ind-desc">Crisis fiscal / monetaria descontrolada</span></td>
            <td class="ind-value" style="color:var(--yellow)">Inflación 174% · ingresos críticos</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Fragilidad social latente. Sin mejoras en ingresos, paciencia social se erosiona. Detonador potencial.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Violencia difusa / pérdida territorial</span><span class="ind-desc">Actores armados no estatales</span></td>
            <td class="ind-value" style="color:var(--red)">Zonas fronterizas activas</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Persistencia de actores armados en fronteras. Expansión a zonas urbanas = señal grave de E2.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Migración acelerada</span><span class="ind-desc">Flujos regionales de movilidad humana</span></td>
            <td class="ind-value" style="color:var(--red)">11% migraría · 57% se quedaría</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Expectativa migratoria bajó (era más alta). Pausa en migración, no reversión. Reactivación = señal de E2.</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- E4: Resistencia -->
    <div class="sc-section">
      <div class="sc-header" style="border-left: 3px solid var(--e4)">
        <div class="sc-num" style="color:var(--e4)">E4</div>
        <div class="sc-info">
          <div class="sc-name" style="color:var(--e4)">Resistencia y escalada coercitiva</div>
          <div class="sc-prob-row">
            <span class="sc-prob-val">10% · Baja — riesgo residual pero activo</span>
            <div class="sc-prob-bar"><div class="sc-prob-fill" style="width:10%; background:var(--e4)"></div></div>
          </div>
        </div>
        <div class="sc-status">Baja · sin señales dominantes</div>
      </div>
      <div class="alert-summary">
        <div class="alert-pill"><span class="dot green" style="width:8px;height:8px"></span> 0 señales activas</div>
        <div class="alert-pill"><span class="dot yellow" style="width:8px;height:8px"></span> 2 latentes</div>
        <div class="alert-pill"><span class="dot red" style="width:8px;height:8px"></span> 1 persistente</div>
      </div>
      <table class="indicator-table">
        <thead>
          <tr><th style="width:30%">Señal de activación</th><th style="width:24%">Estado actual</th><th style="width:13%">Semáforo</th><th style="width:33%">Lectura analítica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="ind-name">Militarización de funciones civiles</span><span class="ind-desc">Expansión del control militar interno</span></td>
            <td class="ind-value" style="color:var(--yellow)">Control preventivo activo</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Reestructuración de mandos intermedios en curso. Expansión a funciones civiles = señal de E4.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Discurso securitario endurecido</span><span class="ind-desc">Narrativa de resistencia / soberanismo</span></td>
            <td class="ind-value" style="color:var(--yellow)">Latente · contenido por cooperación EE. UU.</td>
            <td><span class="semaforo yellow">Amarillo</span></td>
            <td><span class="ind-desc">Recurso disponible. Activación discursiva ante presión opositora o exterior = señal de E4.</span></td>
          </tr>
          <tr>
            <td><span class="ind-name">Detenciones selectivas / nuevas</span><span class="ind-desc">Reversión del proceso de amnistía</span></td>
            <td class="ind-value" style="color:var(--red)">Marcos restrictivos activos · cautelares</td>
            <td><span class="semaforo red">Rojo</span></td>
            <td><span class="ind-desc">Aplicación discrecional y medidas cautelares son señal persistente de este escenario. Variable a vigilar.</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div><!-- fin view-escenario -->

  <div style="margin-top:2rem; padding-top:1rem; border-top:1px solid var(--border); font-size:0.58rem; color:var(--muted); display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5rem;">
    <span>Monitor de Señales Tempranas · Venezuela 2026 · PNUD — Uso interno del equipo de análisis</span>
    <span>Corte: semana 13–20 feb 2026 · Próxima actualización: 23–27 feb</span>
  </div>

</div>
`;

// JS de render del tab
function init_monitor() {
  // Insertar HTML si el panel está vacío
  const panel = document.getElementById('panel-monitor');
  if (panel && !panel.dataset.loaded) {
    panel.innerHTML = MONITOR_HTML;
    panel.dataset.loaded = 'true';
    // Ejecutar lógica del tab
    (function() {

var LANG_MON = 'es';
var MON_T = {
  es: {
    title: 'Monitor de Señales Tempranas — Venezuela 2026',
    subtitle: 'Tabla de monitoreo con semáforos de activación · Corte: 13–20 feb 2026',
    internal: 'PNUD · Uso interno',
    green_label: 'Señales en verde', yellow_label: 'Señales en amarillo', red_label: 'Señales en rojo',
    green_desc: 'Indicadores que confirman continuidad del escenario dominante (E3)',
    yellow_desc: 'Indicadores bajo monitoreo activo con riesgo de deterioro o cambio',
    red_desc: 'Indicadores que señalan fragilidad o activación de escenario adverso',
    dom_sc: 'Escenario dominante',
    by_theme: 'Por dimensión temática', by_scenario: 'Por escenario',
    energy: 'Sector Energético', politics: 'Político-Institucional',
    economy: 'Económico-Social', security: 'Seguridad',
    intl: 'Internacional', social: 'Cohesión Social',
    indicator: 'Indicador', status: 'Valor / Estado actual', signal: 'Semáforo',
    what_obs: 'Qué observar', threshold: 'Umbral de alerta',
    green_s: 'Verde — confirmado / estable',
    yellow_s: 'Amarillo — en monitoreo / ambiguo',
    red_s: 'Rojo — alerta / deterioro activo',
  },
  en: {
    title: 'Early Warning Monitor — Venezuela 2026',
    subtitle: 'Monitoring table with activation signals · Cut-off: Feb 13–20, 2026',
    internal: 'UNDP · Internal use',
    green_label: 'Green signals', yellow_label: 'Yellow signals', red_label: 'Red signals',
    green_desc: 'Indicators confirming continuity of dominant scenario (E3)',
    yellow_desc: 'Indicators under active monitoring with risk of change',
    red_desc: 'Indicators signaling fragility or activation of adverse scenario',
    dom_sc: 'Dominant scenario',
    by_theme: 'By thematic dimension', by_scenario: 'By scenario',
    energy: 'Energy Sector', politics: 'Political-Institutional',
    economy: 'Economic-Social', security: 'Security',
    intl: 'International', social: 'Social Cohesion',
    indicator: 'Indicator', status: 'Value / Current status', signal: 'Signal',
    what_obs: 'What to observe', threshold: 'Alert threshold',
    green_s: 'Green — confirmed / stable',
    yellow_s: 'Yellow — under monitoring / ambiguous',
    red_s: 'Red — alert / active deterioration',
  }
};
window.addEventListener('message', function(e) {
  if (!e.data || e.data.type !== 'setLang') return;
  LANG_MON = e.data.lang;
  var lang = e.data.lang;
  var T = MON_T[lang] || MON_T.es;
  var maps = [
    ['Monitor de Señales Tempranas — Venezuela 2026', T.title],
    ['Tabla de monitoreo con semáforos de activación · Corte: 13–20 feb 2026', T.subtitle],
    ['PNUD · Uso interno', T.internal],
    ['Señales en verde', T.green_label], ['Señales en amarillo', T.yellow_label], ['Señales en rojo', T.red_label],
    ['Indicadores que confirman continuidad del escenario dominante (E3)', T.green_desc],
    ['Indicadores bajo monitoreo activo con riesgo de deterioro o cambio', T.yellow_desc],
    ['Indicadores que señalan fragilidad o activación de escenario adverso', T.red_desc],
    ['Escenario dominante', T.dom_sc],
    ['Por dimensión temática', T.by_theme], ['Por escenario', T.by_scenario],
    ['Sector Energético', T.energy], ['Político-Institucional', T.politics],
    ['Económico-Social', T.economy], ['Seguridad', T.security],
    ['Internacional', T.intl], ['Cohesión Social', T.social],
    ['Indicador', T.indicator], ['Valor / Estado actual', T.status],
    ['Qué observar', T.what_obs], ['Umbral de alerta', T.threshold],
    ['Verde — confirmado / estable', T.green_s],
    ['Amarillo — en monitoreo / ambiguo', T.yellow_s],
    ['Rojo — alerta / deterioro activo', T.red_s],
  ];
  function walkText(node) {
    if (node.nodeType === 3) {
      var txt = node.textContent.trim();
      maps.forEach(function(m) { if (txt === m[0]) node.textContent = m[1]; });
    } else if (node.childNodes) { node.childNodes.forEach(walkText); }
  }
  walkText(document.body);
  // Re-render si existe
  if (typeof render === 'function') render();
});

    })();
  }
}
