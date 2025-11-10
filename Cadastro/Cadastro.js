document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    // Pegando os valores dos inputs
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação simples (poderia ser mais robusta)
    if (!usuario || !email || !senha) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Criando um objeto com as informações do usuário
    const novoUsuario = { usuario, email, senha };

    // Salvando no LocalStorage (como string JSON)
    localStorage.setItem('usuario', JSON.stringify(novoUsuario));

    // Redirecionando para a página de login após cadastro
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../Login/Login.html'; // Redireciona para a página de login
});