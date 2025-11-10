

    // Função para carregar os filmes
function loadMoviesIntoCarousel(carouselSelector, movieList) {
    const carouselTrack = document.querySelector(`${carouselSelector} .filmes-track`);

    carouselTrack.innerHTML = '';

    // Adiciona os filmes
    movieList.forEach((movie) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('itemFilme');

        // Cria o conteúdo de cada item do carrossel
        movieItem.innerHTML = `
            <div class="imgFilme">
                <img src="${movie.image}" alt="Poster do filme">
            </div>
            <p class="nomeFilme">${movie.title}</p>
        `;

        // Adiciona o item ao carrossel
        carouselTrack.appendChild(movieItem);
    });
}

// Quando a página carregar, chama a função para preencher os carrosséis com filmes
window.onload = () => {
    loadMoviesIntoCarousel('.carPopulares', movies);
    // Adicione mais carrosséis conforme necessário
};