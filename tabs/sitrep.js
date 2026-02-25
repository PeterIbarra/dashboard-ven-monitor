// ─── Tab: SITREP ───────────────────────────────────────────────────
// HTML del tab
const SITREP_HTML = `
<div class="page">

  <!-- ══════════════════════════════════════════
       HEADER
  ═══════════════════════════════════════════ -->
  <header class="header">
    <div class="header-meta">
      <span>Venezuela</span>
      <span>13 — 20 de febrero, 2026</span>
      <span>Hora de corte: 11:00 AM</span>
      <span>Análisis de Contexto Situacional</span>
    </div>
    <h1>Análisis de Contexto<br><em>Situacional</em></h1>
    <p class="header-subtitle" style="font-family:'IBM Plex Mono',monospace; font-size:12px; letter-spacing:0.1em; color:#009edb; text-transform:uppercase; margin-top:12px;">13 de febrero — 20 de febrero de 2026</p>

    <div class="header-bar">
      <div class="header-stat">
        <div class="stat-value c-green">75%</div>
        <div class="stat-label">Considera país en dirección correcta</div>
      </div>
      <div class="header-stat">
        <div class="stat-value c-amber">+200 kb/d</div>
        <div class="stat-label">Producción adicional proyectada 2026</div>
      </div>
      <div class="header-stat">
        <div class="stat-value c-blue">USD 22,7B</div>
        <div class="stat-label">Ingresos petroleros proyectados</div>
      </div>
      <div class="header-stat">
        <div class="stat-value c-red">58%</div>
        <div class="stat-label">Percibe deterioro de seguridad desde 3-ene</div>
      </div>
    </div>
  </header>

  <!-- ══════════════════════════════════════════
       01. BILATERAL EE.UU. — VENEZUELA
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">01</span>
      <h2>Marco Bilateral EE.UU. — Venezuela</h2>
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="card-accent-left" style="background:var(--blue)"></div>
        <div class="card-tag tag-blue">GL 50 / 50A — OFAC</div>
        <h3>Licencia General 50</h3>
        <p>Autoriza operaciones petroleras y gasíferas de <strong>BP, Chevron, Eni, Repsol y Shell</strong> con PdVSA. Contratos bajo ley estadounidense; regalías e impuestos canalizados al <em>Foreign Government Deposit Funds</em> controlado por EE.UU.</p>
      </div>
      <div class="card">
        <div class="card-accent-left" style="background:var(--amber)"></div>
        <div class="card-tag tag-amber">GL 49 — OFAC</div>
        <h3>Licencia General 49</h3>
        <p>Autoriza negociar contratos contingentes para exploración, desarrollo, producción y <em>joint ventures</em>. Ejecución sujeta a autorización OFAC adicional. Excluye actores de Rusia, Irán, China, Cuba y Corea del Norte.</p>
      </div>
      <div class="card">
        <div class="card-accent-left" style="background:var(--green)"></div>
        <div class="card-tag tag-green">SOUTHCOM</div>
        <h3>Cooperación en Seguridad</h3>
        <p>Visita del General Francis L. Donovan a Caracas. Reuniones con Delcy Rodríguez, Vladimir Padrino López y Diosdado Cabello. Agenda: narcotráfico, terrorismo y flujos migratorios.</p>
      </div>
    </div>

    <div class="highlight-quote">
      "Las ventas de crudo venezolano gestionadas bajo el nuevo marco han superado los <strong>USD 1.000 millones</strong>, con acuerdos de corto plazo por alrededor de <strong>USD 5.000 millones</strong>."
      <span class="quote-attr">— Chris Wright, Secretario de Energía de EE.UU.</span>
    </div>

    <div class="callout">
      <div class="callout-bar" style="background:var(--amber)"></div>
      <div class="callout-body">
        <div class="callout-title" style="color:var(--amber)">Horizonte Electoral — Postura EE.UU.</div>
        <div class="callout-text">Chris Wright sobre la propuesta de elecciones en 9–10 meses: <em>"Creo que ella es realista sobre los cambios que deben ocurrir primero para llegar a ese punto…"</em> — indicando que la consolidación de cambios institucionales antecede al calendario electoral.</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       02. SECTOR ENERGÉTICO
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">02</span>
      <h2>Sector Energético y Petroleum</h2>
    </div>

    <div class="grid-4" style="margin-bottom:16px;">
      <div class="card">
        <div class="big-num c-green">1.233</div>
        <div class="big-label">kb/d producción promedio estimada 2026</div>
      </div>
      <div class="card">
        <div class="big-num c-amber">35%</div>
        <div class="big-label">Capacidad de refinerías actualmente operativa</div>
      </div>
      <div class="card">
        <div class="big-num c-blue">63%</div>
        <div class="big-label">Exportaciones estimadas hacia EE.UU. en 2026 (vs. 76% China 2025)</div>
      </div>
      <div class="card">
        <div class="big-num c-red">2–4</div>
        <div class="big-label">Taladros activos (vs. 100+ históricos)</div>
      </div>
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th>Indicador</th>
          <th>2025</th>
          <th>2026 proyectado</th>
          <th>Variación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ingresos petroleros</td>
          <td>USD 12,2B</td>
          <td style="color:var(--green)">USD 22,7B</td>
          <td><span class="badge" style="background:var(--green-dim);color:var(--green)">+86%</span></td>
        </tr>
        <tr>
          <td>Exportaciones</td>
          <td>—</td>
          <td style="color:var(--green)">+230 kb/d</td>
          <td><span class="badge" style="background:var(--green-dim);color:var(--green)">+26%</span></td>
        </tr>
        <tr>
          <td>Capacidad refinería (Paraguaná)</td>
          <td>20–25% cap.</td>
          <td style="color:var(--amber)">287.000 bpd (5 de 9 unidades)</td>
          <td><span class="badge" style="background:var(--amber-dim);color:var(--amber)">↑ parcial</span></td>
        </tr>
        <tr>
          <td>Participación Chevron en incremento</td>
          <td colspan="2">Más del 80% del aumento reciente de producción</td>
          <td><span class="badge" style="background:var(--blue-dim);color:var(--blue)">dominante</span></td>
        </tr>
        <tr>
          <td>Inversión requerida (10 años)</td>
          <td colspan="2">+ USD 100.000 millones para alcanzar 3–4 Mbpd</td>
          <td><span class="badge" style="background:var(--red-dim);color:var(--red)">crítico</span></td>
        </tr>
      </tbody>
    </table>

    <div class="callout" style="margin-top:16px;">
      <div class="callout-bar" style="background:var(--blue)"></div>
      <div class="callout-body">
        <div class="callout-title" style="color:var(--blue)">Proyecto Dragon — Shell</div>
        <div class="callout-text">Reservas estimadas de <strong>4,5 trillones de pies cúbicos</strong> de gas. Horizonte de producción: ~3 años. Exportación vía Atlantic LNG (Trinidad y Tobago). Maurel & Prom incorporada en GL 50A con equipos movilizados para expansión operativa.</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       03. DINÁMICA MACROECONÓMICA
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">03</span>
      <h2>Dinámica Macroeconómica</h2>
    </div>

    <div class="grid-2">
      <div>
        <div class="grid-2" style="margin-bottom:12px;">
          <div class="card">
            <div class="card-tag tag-green">PIB 2026</div>
            <div class="big-num c-green" style="font-size:42px;">10,4%–15,2%</div>
            <div class="big-label">Crecimiento proyectado (UCAB / Ecoanalítica)</div>
          </div>
          <div class="card">
            <div class="card-tag tag-red">Inflación 2026</div>
            <div class="big-num c-red" style="font-size:42px;">~174%</div>
            <div class="big-label">Estimado vs. 565% en 2025</div>
          </div>
        </div>
        <div class="card">
          <div class="card-tag tag-amber">Tipo de cambio proyectado</div>
          <div style="display:flex; gap:24px; margin-top:8px; flex-wrap:wrap;">
            <div>
              <div style="font-family:'Cormorant Garamond',serif; font-size:30px; color:var(--text);">Bs. 791</div>
              <div class="big-label">Dólar oficial</div>
            </div>
            <div>
              <div style="font-family:'Cormorant Garamond',serif; font-size:30px; color:var(--amber);">Bs. 890</div>
              <div class="big-label">Paralelo (cierre 2026)</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card" style="height:100%; min-height:200px;">
          <div class="card-tag tag-red">Fragilidad Estructural</div>
          <ul class="bullet-list" style="font-size:13px;">
            <li>69,5% de la población con ingresos inferiores a <strong>USD 300</strong></li>
            <li>Canasta básica: <strong>USD 550</strong> (Caracas USD 622)</li>
            <li>Ingreso promedio: USD 256,65 — brecha de ~USD 165</li>
            <li>Crédito interno: apenas <strong>2,8% del PIB</strong></li>
            <li>47% del gasto público canalizado vía bonos indexados</li>
            <li>Promedio nacional sin electricidad: <strong>14,8 horas/día</strong> (Zulia USD 79,6 de gasto adicional)</li>
            <li>52,8% de empresas evalúa negativamente servicio eléctrico</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="risk-banner" style="margin-top:16px;">
      <div class="risk-icon">⚠</div>
      <div class="risk-text"><strong>Riesgo macroeconómico principal:</strong> La brecha cambiaria como vector estructural de inestabilidad. La estabilización depende de la regularidad del flujo de divisas derivado de las licencias OFAC. Impacto esperado en banca: 30–45 días si el flujo se consolida (Asdrúbal Oliveros).</div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       04. LEY DE AMNISTÍA
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">04</span>
      <h2>Ley de Amnistía para la Convivencia Democrática</h2>
    </div>

    <div class="callout" style="margin-bottom:20px;">
      <div class="callout-bar" style="background:var(--green)"></div>
      <div class="callout-body">
        <div class="callout-title" style="color:var(--green)">Promulgada el 19 de febrero de 2026</div>
        <div class="callout-text">Cobertura temporal: 1° de enero de 1999 hasta entrada en vigencia (26+ años declarados). Excarcelaciones reportadas: <strong>448</strong> desde el 8 de enero — <strong>626</strong> personas aún detenidas según datos de oposición.</div>
      </div>
    </div>

    <div class="amnesty-grid">
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 6</div></div>
        <div><div class="amnesty-dim">Ámbito Temporal</div><div class="amnesty-desc">1° enero 1999 — entrada en vigor. Cobertura declarada de 26+ años.</div></div>
      </div>
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 8</div></div>
        <div><div class="amnesty-dim">Hechos Amnistiados</div><div class="amnesty-desc">Eventos políticos: 2002, 2014, 2017, 2019, 2023, elecciones 2024–2025. Lista taxativa cerrada.</div></div>
      </div>
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 9</div></div>
        <div><div class="amnesty-dim">Delitos Excluidos</div><div class="amnesty-desc">Lesa humanidad, DDHH graves, homicidio intencional, narcotráfico, corrupción, rebelión militar.</div></div>
      </div>
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 10</div></div>
        <div><div class="amnesty-dim">Efectos Jurídicos</div><div class="amnesty-desc">Extinción de acciones penales, civiles y disciplinarias. Incluye solicitudes de extradición. Opera de pleno derecho.</div></div>
      </div>
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 16</div></div>
        <div><div class="amnesty-dim">No Reincidencia</div><div class="amnesty-desc">Nuevos delitos posteriores a la entrada en vigor no quedan cubiertos. Evita efecto permanente de inmunidad.</div></div>
      </div>
      <div class="amnesty-row">
        <div><div class="amnesty-art">Art. 7</div></div>
        <div><div class="amnesty-dim">Beneficiarios Exterior</div><div class="amnesty-desc">Trámite posible mediante abogado o apoderado para personas fuera del país.</div></div>
      </div>
    </div>

    <div class="risk-banner" style="background:linear-gradient(135deg,var(--amber-dim),transparent); border-color:rgba(232,164,64,0.2); margin-top:16px;">
      <div class="risk-icon" style="color:var(--amber); font-size:20px; font-family:'IBM Plex Mono',monospace;">CRÍTICA</div>
      <div class="risk-text"><strong>Sectores de oposición y sociedad civil señalan:</strong> De los 26+ años declarados, sólo ~20 meses quedan efectivamente cubiertos (amnistía por hitos, no continua). Alta delimitación contextual genera potencial litigiosidad. Functiona como amnistía fragmentada por episodios, no como "general y plena" según denominación oficial.</div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       05. ACTORES CLAVE
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">05</span>
      <h2>Dinámicas por Actor</h2>
    </div>

    <div class="actor-grid">
      <div class="actor-card">
        <div class="actor-name">Gobierno Interino</div>
        <div class="actor-title">Ejecutivo — Delcy Rodríguez</div>
        <ul class="bullet-list">
          <li>Reorganización del Ministerio del Despacho de la Presidencia (Gacetas 6.984–6.985)</li>
          <li>Supresión del CESPPA y Misión Jóvenes de la Patria</li>
          <li>Transferencia del CNCC a Ministerio del Interior</li>
          <li>Posible viaje a Colombia para reunión con Petro</li>
          <li>Reiteración sobre Acuerdo de Ginebra 1966 / Esequibo</li>
        </ul>
      </div>
      <div class="actor-card">
        <div class="actor-name">Fuerzas Armadas</div>
        <div class="actor-title">FANB — Tensiones Internas</div>
        <ul class="bullet-list">
          <li>Reportaje EL PAÍS: malestar por continuidad de cúpula</li>
          <li>Padrino López: ~12 años en el cargo — demanda de "oxigenación"</li>
          <li>Aumento de solicitudes de retiro, incluso generales</li>
          <li>Desmoralización post-operativo 3 de enero</li>
          <li>Eventual salida = movimiento de alto impacto político</li>
        </ul>
      </div>
      <div class="actor-card">
        <div class="actor-name">Oposición</div>
        <div class="actor-title">MCM — Guanipa</div>
        <ul class="bullet-list">
          <li>Elecciones libres en 9–10 meses con voto manual, observación total</li>
          <li>52% favorabilidad para María Corina Machado</li>
          <li>Guanipa libre; demanda liberación total y retorno de exiliados</li>
          <li>Crítica al alcance de la Ley de Amnistía</li>
          <li>Referencia a continuidad de centros de detención</li>
        </ul>
      </div>
      <div class="actor-card">
        <div class="actor-name">Comunidad Internacional</div>
        <div class="actor-title">España / UE</div>
        <ul class="bullet-list">
          <li>España presentará solicitud ante UE para levantar sanciones sobre Delcy Rodríguez</li>
          <li>Requiere unanimidad de Estados miembros</li>
          <li>China: cooperación bilateral, crítica a sanciones unilaterales</li>
          <li>FMI: disposición a iniciar contactos si Venezuela lo solicita</li>
          <li>Qatar: visita PM Al-Thani, recibido por canciller Yván Gil</li>
        </ul>
      </div>
      <div class="actor-card">
        <div class="actor-name">Asamblea Nacional</div>
        <div class="actor-title">Legislativo</div>
        <ul class="bullet-list">
          <li>Aprobación definitiva Ley de Amnistía (19 feb.)</li>
          <li>Jorge Rodríguez: excarcelación de 17 personas en Zona 7</li>
          <li>Huelga de hambre (inicio 14 feb.) suspendida tras aprobación legislativa</li>
          <li>Mesas de trabajo del MP con familias de detenidos</li>
          <li>Señales de discusión sobre reforma "ley contra el odio"</li>
        </ul>
      </div>
      <div class="actor-card">
        <div class="actor-name">Sector Empresarial</div>
        <div class="actor-title">Confianza e Inversión</div>
        <ul class="bullet-list">
          <li>Índice confianza empresarial: 118,8 pts (enero 2026)</li>
          <li>Líderes: Finanzas/seguros (37%) y Comunicaciones (18,7%)</li>
          <li>Competencia Chevron, Repsol, ENI, Maurel&Prom, CNPC, SLB</li>
          <li>Bharat Petroleum e HPCL-Mittal: 1M barriles c/u (India)</li>
          <li>Phillips 66 y Citgo evalúan compras directas desde abril</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       06. OPINIÓN PÚBLICA
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">06</span>
      <h2>Opinión Pública y Clima Social</h2>
    </div>

    <div class="callout" style="margin-bottom:24px;">
      <div class="callout-bar" style="background:var(--text-dim)"></div>
      <div class="callout-body">
        <div class="callout-title" style="color:var(--text-muted)">Encuesta Atlantic Council — Gold Glove Consulting</div>
        <div class="callout-text">Muestra presencial nacional — 1.000 entrevistas · ±3,1% margen de error · Financiada por Fundación Zampa y Pragmatic Panic</div>
      </div>
    </div>

    <div class="grid-2">
      <div>
        <div class="poll-item">
          <div class="poll-header">
            <span>País va en dirección correcta</span>
            <span class="poll-pct c-green">75%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:75%; background:var(--green)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Prioridad: costo de vida / asequibilidad</span>
            <span class="poll-pct c-amber">62%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:62%; background:var(--amber)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Percibe deterioro de seguridad desde 3-ene</span>
            <span class="poll-pct c-red">58%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:58%; background:var(--red)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Exige elecciones presidenciales este año</span>
            <span class="poll-pct c-blue">66%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:66%; background:var(--blue)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Apoya supervisión EE.UU. sobre venta petróleo</span>
            <span class="poll-pct c-blue">66%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:66%; background:var(--blue)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Favorabilidad María Corina Machado</span>
            <span class="poll-pct c-green">52%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:52%; background:var(--green)"></div></div>
        </div>
        <div class="poll-item">
          <div class="poll-header">
            <span>Imagen favorable Delcy Rodríguez</span>
            <span class="poll-pct c-red">23%</span>
          </div>
          <div class="poll-track"><div class="poll-fill" style="--pct:23%; background:var(--red)"></div></div>
        </div>
      </div>
      <div>
        <div class="card" style="margin-bottom:12px;">
          <div class="card-tag tag-amber">Dato Crítico</div>
          <div style="font-family:'Cormorant Garamond',serif; font-size:48px; font-weight:600; color:var(--amber); line-height:1;">8 : 1</div>
          <p style="margin-top:8px;">Proporción en que la <strong>recuperación económica</strong> es priorizada frente a la <strong>agenda democrática</strong> en elección forzada entre ambas.</p>
        </div>
        <div class="card">
          <div class="card-tag tag-blue">Respalda demandas EE.UU.</div>
          <ul class="bullet-list" style="font-size:13px;">
            <li>+90% respalda demandas de EE.UU. para elecciones</li>
            <li>+90% respalda liberación de presos políticos</li>
            <li>75% apoya ataques contra grupos de narcotráfico</li>
            <li>43% apoyaría despliegue de tropas estadounidenses (mayoría relativa en contra)</li>
            <li>~⅔ se opone al chavismo en control militar futuro</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       07. MATRIZ DE ESCENARIOS
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">07</span>
      <h2>Matriz de Escenarios</h2>
    </div>

    <div class="scenario">
      <div>
        <div class="scenario-title">Continuidad Negociada</div>
        <div class="card-tag tag-green" style="margin-top:0;">Estabilidad política controlada</div>
      </div>
      <div>
        <ul class="driver-list">
          <li>Operativización plena GL49 y GL50/50A con supervisión financiera estadounidense</li>
          <li>Ventas petroleras >USD 1.000M y acuerdos corto plazo por USD 5.000M</li>
          <li>Ley de Amnistía aprobada; reorganización administrativa del Ejecutivo</li>
          <li>75% percibe país en dirección correcta; economía priorizada 8:1 sobre agenda democrática</li>
          <li><em>Señales de confirmación:</em> Incremento sostenido exportaciones hacia EE.UU.; flujo regular divisas en 30–45 días; continuidad cooperación SOUTHCOM</li>
        </ul>
      </div>
      <div class="scenario-prob">
        <div class="prob-pill prob-high">Alta<br><small style="font-size:8px;">Escenario dominante</small></div>
      </div>
    </div>

    <div class="scenario">
      <div>
        <div class="scenario-title">Transición Política Pacífica</div>
        <div class="card-tag tag-blue" style="margin-top:0;">Apertura electoral</div>
      </div>
      <div>
        <ul class="driver-list">
          <li>Dos tercios exige elecciones este año; 52% favorabilidad liderazgo opositor</li>
          <li>Propuesta MCM de elecciones en 9–10 meses; presión UE y canal FMI</li>
          <li>75% imagen desfavorable de Delcy Rodríguez; +90% respalda demandas electorales de EE.UU.</li>
          <li><em>Señales de confirmación:</em> Anuncio formal de calendario; reforma ley contra el odio; ajustes en arquitectura militar; reducción percepción de inseguridad</li>
        </ul>
      </div>
      <div class="scenario-prob">
        <div class="prob-pill prob-med">Media</div>
      </div>
    </div>

    <div class="scenario">
      <div>
        <div class="scenario-title">Resistencia y Recentralización Coercitiva</div>
        <div class="card-tag tag-amber" style="margin-top:0;">Retroceso institucional</div>
      </div>
      <div>
        <ul class="driver-list">
          <li>Tensiones FANB por continuidad de cúpula; concentración de poder en eje civil</li>
          <li>Aplicación discrecional de la Ley de Amnistía; dependencia crítica del entendimiento bilateral</li>
          <li>58% percibe deterioro de seguridad; aparato represivo estatal como preocupación principal</li>
          <li><em>Señales de confirmación:</em> Suspensión de excarcelaciones; discurso endurecido; fricciones en cooperación energética; aumento vigilancia interna</li>
        </ul>
      </div>
      <div class="scenario-prob">
        <div class="prob-pill prob-medlow">Media-Baja<br><small style="font-size:8px;">Latente, no dominante</small></div>
      </div>
    </div>

    <div class="scenario">
      <div>
        <div class="scenario-title">Fragmentación Institucional y Deterioro Acelerado</div>
        <div class="card-tag tag-red" style="margin-top:0;">Colapso económico</div>
      </div>
      <div>
        <ul class="driver-list">
          <li>Inflación ~166–174%; 69,5% con ingresos &lt;USD 300; canasta &gt;USD 550; crédito 2,8% PIB</li>
          <li>Sistema eléctrico deteriorado; alta dependencia del petróleo para sostener expectativas</li>
          <li>62% prioriza costo de vida; brecha entre optimismo político (75%) y baja capacidad adquisitiva</li>
          <li><em>Señales de confirmación:</em> Deterioro rápido percepción económica; movilizaciones gremiales; retraso en transferencia ingresos petroleros; ruptura equilibrio político-militar</li>
        </ul>
      </div>
      <div class="scenario-prob">
        <div class="prob-pill prob-med">Media<br><small style="font-size:8px;">Contenido mientras fluya el ingreso</small></div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       08. CONSIDERACIONES FINALES
  ═══════════════════════════════════════════ -->
  <section class="section">
    <div class="section-header">
      <span class="section-number">08</span>
      <h2>Consideraciones Finales</h2>
    </div>

    <div class="highlight-quote">
      "Venezuela avanza hacia un modelo híbrido: <em>reapertura energética condicionada, supervisión financiera externa, expectativas de crecimiento macroeconómico y reacomodo político interno.</em>"
    </div>

    <div class="grid-3">
      <div class="card">
        <div class="card-tag tag-green">Factor 1</div>
        <h3>Continuidad del flujo petrolero</h3>
        <p>La sostenibilidad del proceso depende directamente de la regularidad de las exportaciones bajo el régimen de licencias GL49/50/50A y la correcta canalización hacia el Foreign Government Deposit Funds.</p>
      </div>
      <div class="card">
        <div class="card-tag tag-amber">Factor 2</div>
        <h3>Equilibrio político-militar</h3>
        <p>Las tensiones en la FANB —especialmente en torno a Padrino López— representan una variable de alta sensibilidad. Cualquier modificación en la arquitectura de poder tendría implicaciones significativas para el entendimiento bilateral.</p>
      </div>
      <div class="card">
        <div class="card-tag tag-red">Factor 3</div>
        <h3>Traducción del crecimiento en bienestar</h3>
        <p>El crecimiento proyectado es realista en términos energéticos, pero su impacto en el poder adquisitivo sigue siendo incierto. Si no hay mejoras tangibles, la paciencia social podría erosionarse rápidamente.</p>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════════
       FOOTER
  ═══════════════════════════════════════════ -->
  <footer class="footer">
    <div class="footer-left">Análisis de Contexto Situacional — Venezuela</div>
    <div class="footer-right">
      13 — 20 Febrero 2026<br>
      Hora de corte: 11:00 AM<br>
      Fuentes: UCAB · Ecoanalítica · Atlantic Council<br>
      Reuters · Baker Institute · OFAC · Departamento del Tesoro
    </div>
  </footer>

</div>
`;

// JS de render del tab
function init_sitrep() {
  // Insertar HTML si el panel está vacío
  const panel = document.getElementById('panel-sitrep');
  if (panel && !panel.dataset.loaded) {
    panel.innerHTML = SITREP_HTML;
    panel.dataset.loaded = 'true';
    // Ejecutar lógica del tab
    (function() {

var LANG = 'es';
const T = {
  es: {
    title: 'Análisis de Contexto Situacional',
    subtitle: 'Venezuela · 13–20 de febrero, 2026',
    cutoff: 'Hora de corte: 11:00 AM',
    sec01: '01 Marco Bilateral EE.UU. — Venezuela',
    sec02: '02 Sector Energético',
    sec03: '03 Dimensión Política e Institucional',
    sec04: '04 Condiciones Económicas y Sociales',
    sec05: '05 Seguridad y Orden Público',
    sec06: '06 Perspectiva de Escenarios',
    critical: 'CRÍTICA', high: 'ALTA', medium: 'MEDIA', low: 'BAJA',
    internal: 'Uso interno · PNUD Venezuela',
    week_range: '13 de febrero — 20 de febrero de 2026',
    src_label: 'Fuentes:',
    kpi1: 'Considera país en dirección correcta',
    kpi2: 'Producción adicional proyectada 2026',
    kpi3: 'Ingresos petroleros proyectados',
    kpi4: 'Percibe deterioro de seguridad desde 3-ene',
  },
  en: {
    title: 'Situational Context Analysis',
    subtitle: 'Venezuela · February 13–20, 2026',
    cutoff: 'Cut-off time: 11:00 AM',
    sec01: '01 U.S.–Venezuela Bilateral Framework',
    sec02: '02 Energy Sector',
    sec03: '03 Political and Institutional Dimension',
    sec04: '04 Economic and Social Conditions',
    sec05: '05 Security and Public Order',
    sec06: '06 Scenario Outlook',
    critical: 'CRITICAL', high: 'HIGH', medium: 'MEDIUM', low: 'LOW',
    internal: 'Internal use · UNDP Venezuela',
    week_range: 'February 13 — February 20, 2026',
    src_label: 'Sources:',
    kpi1: 'Consider country heading in right direction',
    kpi2: 'Additional projected production 2026',
    kpi3: 'Projected oil revenues',
    kpi4: 'Perceive security deterioration since Jan 3',
  }
};
function t(key) { return (T[LANG]||T.es)[key]||key; }

    })();
  }
}
