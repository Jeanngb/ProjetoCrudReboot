// Dados iniciais de filmes
const filmes = [
  {
    id: 1,
    nome: "Um Sonho de Liberdade",
    sinopse:
      "Preso na década de 1940 pelo duplo homicídio de sua esposa e do amante dela, o íntegro banqueiro Andy Dufresne inicia uma nova vida na prisão de Shawshank...",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/7l/hn/46/uz/zGINvGjdlO6TJRu9wESQvWlOKVT-0-1000-0-1500-crop.jpg?v=8736d1c395",
    anoLancamento: 1994,
    diretor: "Frank Darabont",
    genero: "Drama",
    nota: 4.62,
    trailer: "https://www.youtube.com/embed/PLl99DlL6b4?si=zo_DCD_JyPhI6LbJ",
    streaming: ["MAX"],
  },
  {
    id: 2,
    nome: "O Poderoso Chefão",
    sinopse:
      "Don Vito Corleone comanda uma das maiores famílias mafiosas de Nova York...",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/8/51818-the-godfather-0-2000-0-3000-crop.jpg?v=bca8b67402",
    capaFundo:
      "https://t.ctcdn.com.br/54KHZqjSzhbYDeChIp9RlpWl8-o=/81x215:1263x880/1024x576/smart/i366371.jpeg",
    anoLancamento: 1972,
    diretor: "Francis Ford Coppola",
    genero: "Crime",
    nota: 4.58,
    trailer: "https://www.youtube.com/embed/88nc6NwAQG4?si=6baBARBkY2Pi16Mr",
    streaming: ["NETFLIX"],
  },
];

// Exibir os filmes cadastrados na lista
function mostrarFilmes() {
    const listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = ''; // Limpar a lista antes de preencher

    filmes.forEach(filme => {
        const li = document.createElement("li");

        li.innerHTML = `
            <h3>${filme.nome}</h3>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Ano:</strong> ${filme.anoLancamento}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <button onclick="removerFilme(${filme.id})">Remover</button>
        `;

        listaFilmes.appendChild(li);
    });
}

// Remover filme da lista
function removerFilme(id) {
    const index = filmes.findIndex(filme => filme.id === id);
    if (index !== -1) {
        filmes.splice(index, 1);
        mostrarFilmes();
    }
}

// Adicionar novo filme
document.getElementById("formFilme").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const diretor = document.getElementById("diretor").value;
    const ano = document.getElementById("ano").value;
    const capaPrincipal = document.getElementById("capaPrincipal").value;
    const sinopse = document.getElementById("sinopse").value;

    const novoFilme = {
        id: filmes.length + 1,
        nome,
        diretor,
        anoLancamento: ano,
        capaPrincipal,
        sinopse,
        genero: "Gênero Genérico",  // Placeholder
        nota: 0,  // Placeholder
        trailer: "",
        streaming: []
    };

    filmes.push(novoFilme);
    mostrarFilmes();

    // Limpar os campos após a adição
    document.getElementById("formFilme").reset();
});

// Carregar filmes ao iniciar a página
mostrarFilmes();