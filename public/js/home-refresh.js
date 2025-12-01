(function () {
  // home-refresh.js
  // Verifica periodicamente se houve atualização na lista de filmes.
  // Quando detecta mudança, recarrega a página para mostrar dados atualizados.

  var checkIntervalMs = 5000; // 5 segundos
  var last = null;
  var endpoint = '/filmes/last-updated';

  async function fetchLast() {
    try {
      var res = await fetch(endpoint, { cache: 'no-store' });
      if (!res.ok) return null;
      var json = await res.json();
      return parseInt(json.lastUpdated || 0, 10) || 0;
    } catch (e) {
      return null;
    }
  }

  async function check() {
    var ts = await fetchLast();
    if (ts === null) return;
    if (last === null) {
      last = ts;
      return;
    }
    if (ts > last) {
      // nova atualização detectada -> recarregar página para obter lista atualizada
      window.location.reload();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    // primeira verificação imediata
    check();
    setInterval(check, checkIntervalMs);
  });
})();
