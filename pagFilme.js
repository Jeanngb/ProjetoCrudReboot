// Função para carregar os dados do filme no HTML
function carregarFilme(idFilme) {
  // Buscar o filme pelo ID
  const filme = filmes.find((f) => f.id === parseInt(idFilme));

  if (!filme) {
    console.error("Filme não encontrado!");
    return;
  }

  // Mapa de provedores para logo e link
  const streamingMap = {
    NETFLIX: {
      logo: "https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg",
      url: "https://www.netflix.com",
    },
    "DISNEY+": {
      logo: "https://t.ctcdn.com.br/DxNATHoRexdVV_g9cIca_86laOo=/1200x675/smart/i1037601.png",
      url: "https://www.disneyplus.com",
    },
    MAX: {
      logo: "https://s2-epocanegocios.glbimg.com/6NE1a387ATTLjKAue2GN5dMQkA8=/0x0:1190x655/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2024/k/Q/ThYD79RLifppObYIoCiA/screenshot-2024-02-28t091358.407.png",
      url: "https://www.hbomax.com",
    },
    AMAZON: {
      logo: "https://t.ctcdn.com.br/xnHfHafww85qzhYmlb6_EjpTMjs=/768x432/smart/i501822.png",
      url: "https://www.primevideo.com",
    },
    GLOBOPLAY: {
      logo: "https://assets.b9.com.br/wp-content/uploads/2020/10/Captura-de-Tela-2020-10-05-is-15.09.07.png",
      url: "https://globoplay.globo.com",
    },
    "PARAMOUNT+": {
      logo: "https://portalaltadefinicao.com/wp-content/uploads/2021/03/paramount-plus-brasil.jpg",
      url: "https://www.paramountplus.com/br/",
    },
    MUBI: {
      logo: "https://casaldougkelly.com.br/wp-content/uploads/2025/03/Logo-Mubi-Deitado.jpg",
      url: "https://mubi.com/pt/br",
    },
    LOOKE: {
      logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2018/03/5aaf6e921febe.png",
      url: "https://www.looke.com.br/landingpage",
    },
  };

  // Atualizar imagem de fundo
  const capaFundoEl = document.querySelector(".capaFundo img");
  if (capaFundoEl) capaFundoEl.src = filme.capaFundo || "";

  // Atualizar capa principal
  const capaEl = document.querySelector(".boxCapa img");
  if (capaEl) capaEl.src = filme.capaPrincipal || "";

  // Atualizar título
  const tituloEl = document.querySelector(".ttFilme");
  if (tituloEl) tituloEl.textContent = filme.nome || "";

  // Atualizar sinopse
  const sinopseEl = document.querySelector(".sinopse");
  if (sinopseEl) sinopseEl.textContent = filme.sinopse || "";

  // Atualizar gênero
  const generoEl = document.querySelector(".genero");
  if (generoEl)
    generoEl.innerHTML = `<strong>Gênero: </strong>${filme.genero || ""}`;

  // Atualizar diretor
  const diretorEl = document.querySelector(".diretor");
  if (diretorEl)
    diretorEl.innerHTML = `<strong>Diretor: </strong> ${filme.diretor || ""}`;

  // Atualizar elenco principal
  const atoresEl = document.querySelector(".atoresPrincipais");
  if (atoresEl)
    atoresEl.innerHTML = `<strong>Atores Principais: </strong> ${filme.atoresPrincipais || ""}`;
  
  // Atualizar ano de lançamento
  const anoEl = document.querySelector(".anoLancamento");
  if (anoEl)
    anoEl.innerHTML = `<strong>Ano de Lançamento: </strong>${
      filme.anoLancamento || ""
    }`;

  // Atualizar avaliação
  const notaEl = document.querySelector(".avaliacao");
  if (notaEl)
    notaEl.innerHTML = `<strong>Avaliação: </strong>${filme.nota || ""} / 5`;

  // Atualizar trailer
  const iframeEl = document.querySelector(".boxTrailer iframe");
  if (iframeEl) iframeEl.src = filme.trailer || "";

  // Atualizar logos de streaming dinamicamente
  const logoContainer = document.querySelector(".logoStreaming");
  const boxStreaming = document.querySelector(".boxStreaming");
  if (!logoContainer || !boxStreaming) return;

  // Normaliza para array
  let providers = filme.streaming || [];
  if (typeof providers === "string") {
    providers = providers
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // Limpa container
  logoContainer.innerHTML = "";

  if (!Array.isArray(providers) || providers.length === 0) {
    // Se não houver provedores, esconde a seção
    boxStreaming.style.display = "none";
    return;
  }

  boxStreaming.style.display = ""; // garante visível

  providers.forEach((p) => {
    const key = p.toUpperCase();
    const info = streamingMap[key] || null;

    const a = document.createElement("a");
    a.className = "linkStreaming";
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.alt = p;
    img.style.height = "50px";
    img.style.objectFit = "contain";

    if (info && info.logo) {
      img.src = info.logo;
      a.href = info.url || "#";
    } else {
      // se não houver logo conhecida, mostra texto simples
      img.src = "";
      const span = document.createElement("span");
      span.textContent = p;
      span.style.color = "#fff";
      span.style.padding = "6px 8px";
      logoContainer.appendChild(span);
      return;
    }

    a.appendChild(img);
    logoContainer.appendChild(a);
  });
}

// Função para carregar a lista de filmes no HTML
function carregarListaFilmes() {
  const listaFilmes = document.getElementById("listaFilmes");

  if (!listaFilmes) {
    console.error("Elemento #listaFilmes não encontrado!");
    return;
  }

  // Limpar a lista
  listaFilmes.innerHTML = "";

  // Criar um item para cada filme
  filmes.forEach((filme) => {
    const itemFilme = document.createElement("div");
    itemFilme.className = "itemFilme";
    itemFilme.innerHTML = `
      <img src="${filme.capaPrincipal}" alt="${filme.nome}" />
      <h3>${filme.nome}</h3>
      <p>${filme.anoLancamento}</p>
    `;

    // Ao clicar no filme, redirecionar para a página com o ID do filme
    itemFilme.addEventListener("click", function () {
      window.location.href = `index.html?id=${filme.id}`;
    });

    listaFilmes.appendChild(itemFilme);
  });
}

// Carregar o filme quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  // Pega o ID do filme da URL (parâmetro de query: ?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const filmeId = urlParams.get("id");

  // Se houver um ID na URL, carrega o filme específico
  if (filmeId) {
    carregarFilme(filmeId);
  } else {
    // Caso contrário, carrega a lista de filmes
    carregarListaFilmes();
  }
});
