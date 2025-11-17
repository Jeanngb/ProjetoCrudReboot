document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // 🔒 Login fixo do admin
    const adminEmail = "admin@locmovies.com";
    const adminSenha = "123admin";

    if (email === adminEmail && senha === adminSenha) {
        alert("Bem-vindo, Administrador!");
        // salva usuário logado (opcional)
        localStorage.setItem('usuarioLogado', JSON.stringify({ usuario: 'Administrador', tipoConta: 'admin' }));
        window.location.href = '../Admin/paineladmin.html';
        return;
    }

    // 🔹 Login normal (clientes cadastrados)
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuarioEncontrado) {
        alert('Email ou senha incorretos!');
        return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
    alert(`Bem-vindo, ${usuarioEncontrado.usuario}!`);
    window.location.href = '../Interface Do Site/InterfaceDoSite.html';
});
