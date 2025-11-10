document.addEventListener("DOMContentLoaded", function() {
    // Aqui você pode substituir pelo seu arquivo JSON ou pela API que retorna os dados
    const movieData = [
        {
            "id": 1,
            "titulo": "Homem-Aranha: Através do Aranhaverso",
            "descricao": "Após se reencontrar com Gwen Stacy, o amigável Homem-Aranha da vizinhança, morador do Brooklyn, é catapultado através do Multiverso, onde encontra a Sociedade Aranha, uma equipe de Homens-Aranha encarregada de proteger a própria existência do Multiverso.",
            "ano": 2013,
            "avaliacao": "4.4/5",
            "ondeAssistir": ["Netflix", "Prime Video"],
            "diretor": "Justin K. Thompson e Kemp Powers",
            "imagem": "https://sm.ign.com/t/ign_br/screenshot/default/image1_2jjv.960.jpg",
            "trailer": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ];

    const movie = movieData[0]; // Aqui pegamos o primeiro filme do JSON (se tivesse mais filmes, poderia ser dinâmico)

    document.getElementById('movie-poster').src = movie.imagem;
    document.getElementById('movie-title').textContent = movie.titulo;
    document.getElementById('movie-description').textContent = movie.descricao;
    document.getElementById('movie-year').textContent = movie.ano;
    document.getElementById('movie-rating').textContent = movie.avaliacao;
    document.getElementById('movie-directors').textContent = movie.diretor;
    document.getElementById('trailer-link').href = movie.trailer;

    // Links para onde assistir
    if (movie.ondeAssistir.includes("Netflix")) {
        document.getElementById('watch-netflix').textContent = "Netflix";
    }
    if (movie.ondeAssistir.includes("Prime Video")) {
        document.getElementById('watch-prime').textContent = "Prime Video";
    }
});
