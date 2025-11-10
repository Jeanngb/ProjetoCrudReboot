document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Pegando os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verificando se os campos estão preenchidos
    if (!email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Buscando o usuário no LocalStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

    // Verificando se o usuário existe e a senha está correta
    if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
        alert('Login bem-sucedido!');
        window.location.href = '../Interface Do Site/InterfaceDoSite.html'; // Redireciona para o site
    } else {
        alert('Email ou senha incorretos!');
    }
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Credenciais de login (email e senha do admin)
  const adminEmail = "admin@exemplo.com"; // Substitua pelo email desejado
  const adminPassword = "senha123"; // Substitua pela senha desejada

  // Verificando login
  if (email === adminEmail && password === adminPassword) {
    // Esconder login e mostrar painel admin
    document.getElementById("login-container").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
  } else {
    // Mostrar mensagem de erro
    errorMessage.style.display = "block";
  }
});