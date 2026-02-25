# Monitor de Contexto Situacional · Venezuela 2026
**PNUD Venezuela** · Análisis de escenarios semanales

## Estructura
```
venezuela-monitor/
├── index.html              ← Shell principal (nunca cambia)
├── css/styles.css          ← Estilos (nunca cambia)
├── js/app.js               ← Lógica de navegación (nunca cambia)
├── tabs/
│   ├── dashboard.js        ← Dashboard Ejecutivo
│   ├── matriz.js           ← Matriz de Escenarios
│   ├── sitrep.js           ← SITREP
│   ├── monitor.js          ← Monitor de Señales
│   └── conflictividad.js   ← Mapa de Conflictividad
└── data/
    └── semanas.js          ← ⭐ SOLO ESTE ARCHIVO SE ACTUALIZA CADA SEMANA
```

## Actualización semanal
1. Abrir `data/semanas.js` en GitHub
2. Añadir el nuevo bloque de semana al final del array `weeks`
3. Actualizar `META.semana_actual` y `META.label`
4. Commit → GitHub Pages publica automáticamente

## GitHub Pages
Activar en: Settings → Pages → Source: main branch → / (root)
URL: `https://[usuario].github.io/venezuela-monitor`

## Licencia
PNUD Venezuela · Uso interno
