document.addEventListener("DOMContentLoaded", function() {
    // Aqui você pode substituir pelo seu arquivo JSON ou pela API que retorna os dados
    const movieData = [
        {
            "id": 1,
            "nome": "Um Sonho de Liberdade", 
            "sinopse": "Em 1947, o jovem banqueiro Andy Dufresne é condenado à prisão perpétua pelo assassinato de sua esposa e do amante dela. No entanto, apenas Andy sabe que não cometeu os crimes. Encarcerado em Shawshank, a penitenciária mais rigorosa do estado do Maine, ele faz amizade com Ellis Boyd Redding, um homem desiludido que está preso há 20 anos.",
            "capaPrincipal": "https://cdn-cosmos.bluesoft.com.br/products/883311220363",
            "capaFundo": "https://img.englishcinemazurich.com/Nh0Jt5ORLp7ZKIE9L7GzG1scmjpmZtRuiyVp6D9oPVI/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy9jYTk0MDU5NS01MjIwLTQxNDgtOTlhYy0yMTExNWM0ZjkxMDcuanBn.jpg",
            "anoLancamento": 1994,
            "diretor": "Frank Darabont",
            "genero": "Drama",
            "nota": 4.62/5.00,
            "trailer": "https://youtu.be/PLl99DlL6b4?si=RMT0716rUs0a8UvP",
            "streaming": "HBO MAX"
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
