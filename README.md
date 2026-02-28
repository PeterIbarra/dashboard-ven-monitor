# Monitor de Contexto — Venezuela 2026 · PNUD

Dashboard semanal de análisis situacional para Venezuela.

## Estructura

```
venezuela-dashboard/
├── index.html     ← Diseño y lógica del dashboard (no se toca cada semana)
├── data.js        ← ÚNICO ARCHIVO A ACTUALIZAR CADA SEMANA
└── sitrep/
    ├── current.html   ← SITREP semana actual
    └── previous.html  ← SITREP semana anterior
```

## Cómo actualizar cada semana

Solo hay que actualizar `data.js`. El archivo tiene instrucciones
detalladas al inicio sobre qué campos modificar.

### Pasos

1. Subir los docx semanales (Análisis de Contexto + Matriz) al chat con Claude
2. Claude lee los documentos y genera el nuevo `data.js`
3. Revisar y aprobar el contenido
4. Subir `data.js` a este repositorio (arrastrar y soltar en GitHub)
5. GitHub Pages publica automáticamente

## Publicación

El dashboard se publica automáticamente en GitHub Pages cada vez
que se actualiza `data.js` o `index.html`.

Ver en: `https://[usuario].github.io/venezuela-dashboard/`
