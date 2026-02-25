// ─────────────────────────────────────────────────────────────────────────────
// APP.JS — Lógica central del shell · Venezuela Monitor 2026
// ─────────────────────────────────────────────────────────────────────────────

// ── Cambio de tab ─────────────────────────────────────────────────────────
function switchTab(tab) {
  // Actualizar botones
  document.querySelectorAll('.tab-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  // Actualizar panels
  document.querySelectorAll('.frame-panel').forEach(function(p) {
    p.classList.toggle('active', p.id === 'panel-' + tab);
  });

  // Sincronizar select móvil
  var sel = document.getElementById('tab-select');
  if (sel) sel.value = tab;

  // Inicializar el tab si es la primera vez
  var initFn = window['init_' + tab];
  if (typeof initFn === 'function') initFn();
}

// ── Init al cargar ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Listeners de tab buttons
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { switchTab(btn.dataset.tab); });
  });

  // Cargar dashboard por defecto
  switchTab('dashboard');
});
