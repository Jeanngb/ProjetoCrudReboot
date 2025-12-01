/*
 * login.js
 * Script de suporte para a página de login. Implementa toggle de visibilidade
 * de senha e limpeza de formulário ao carregar (previne autofill).
 */

// Mostra ou oculta a senha ao clicar no botão
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".toggle-password");
  if (!btn) return;
  const container = btn.parentElement;
  if (!container) return;
  const input = container.querySelector(
    'input[type="password"], input[type="text"]'
  );
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    btn.setAttribute("aria-pressed", "true");
    btn.setAttribute("aria-label", "Ocultar senha");
    // Troca para o ícone de olho com barra
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1l22 22" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.94 17.94C16.06 19.2 14.08 20 12 20 5 20 1 12 1 12c1.66-3.45 4.36-5.93 7.53-7.13" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else {
    input.type = "password";
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("aria-label", "Mostrar senha");
    // recoloca o ícone de olho normal
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
});

// Limpa os campos do formulário ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  // limpa o login form fields
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const inputs = loginForm.querySelectorAll("input");
    inputs.forEach((i) => {
      i.value = "";
    });
  }

  // Limpa o cadastro form fields
  const cadastroForm = document.getElementById("cadastroForm");
  if (cadastroForm) {
    const inputs = cadastroForm.querySelectorAll("input");
    inputs.forEach((i) => {
      i.value = "";
    });
  }

  // Inicializa os botões de toggle de senha com o ícone padrão, se estiverem vazios
  document.querySelectorAll(".toggle-password").forEach((btn) => {
    if (!btn.innerHTML.trim()) {
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      btn.setAttribute("aria-pressed", "false");
    }
  });
});
