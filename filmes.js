/*RANKING:

The Shawshank Redemption (1994) - 4.62
The Godfather (1972) - 4.58
The Lord of the Rings: The Return of the King (2003) - 4.57
12 Angry Men (1957) - 4.57
The Godfather: Part II (1974) - 4.55
The Dark Knight (2008) - 4.53
Schindler’s List (1993) - 4.52
The Lord of the Rings: The Fellowship of the Ring (2001) - 4.50
The Good, the Bad and the Ugly (1966) - 4.50
The Lord of the Rings: The Two Towers (2002) - 4.47
City of God (2002) - 4.47
Seven Samurai (1954) - 4.46
The Empire Strikes Back (1980) - 4.45
Goodfellas (1990) - 4.45
Grave of the Fireflies (1989) - 4.41
Harakiri (1962) - 4.41
Come and See (1987) - 4.41
Parasite (2019) - 4.40
Interstellar (2014) - 4.38
Terminator 2: Judgment Day (1991) - 4.38
Fight Club (1999) - 4.38
Spirited Away (2001) - 4.38
One Flew Over the Cuckoo’s Nest (1975) - 4.38
Cinema Paradiso (1990) - 4.38
The Pianist (2002) - 4.37
It’s a Wonderful Life (1946) - 4.37
Pulp Fiction (1994) - 4.36
Ikiru (1956) - 4.36
Whiplash (2014) - 4.35
Forrest Gump (1994) - 4.35
*/
// Base de dados com todos os filmes
const filmes = [
  {
    id: 1,
    nome: "Um Sonho de Liberdade",
    sinopse:
      "Preso na década de 1940 pelo duplo homicídio de sua esposa e do amante dela, o íntegro banqueiro Andy Dufresne inicia uma nova vida na prisão de Shawshank, onde utiliza suas habilidades contábeis para trabalhar para um diretor amoral. Durante seu longo período na prisão, Dufresne passa a ser admirado pelos outros detentos – incluindo um prisioneiro mais velho chamado Red – por sua integridade e inabalável senso de esperança.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/7l/hn/46/uz/zGINvGjdlO6TJRu9wESQvWlOKVT-0-1000-0-1500-crop.jpg?v=8736d1c395",
    capaFundo: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/637b/live/54b8ecc0-9055-11ef-b11a-eda09aca0cf9.jpg.webp",
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
      "Don Vito Corleone comanda uma das maiores famílias mafiosas de Nova York. Quando uma tentativa de assassinato quase tira sua vida, seu filho Michael é forçado a assumir o império, mergulhando num mundo de poder, lealdade e traição.",
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
  {
    id: 3,
    nome: "O Senhor dos Anéis: O Retorno do Rei",
    sinopse:
      "Sauron prepara ataque a Minas Tirith. Gandalf e Pippin partem para ajudar na defesa da capital de Gondor. Enquanto isso, Frodo, Sam e Gollum continuam sua jornada para destruir o Anel na Montanha da Perdição.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/zs/nt/u4/uz/xieWkPAgQrrk5wOyncayPd65hrp-0-1000-0-1500-crop.jpg?v=4c89d05285",
    capaFundo:
      "https://wallpapercave.com/wp/wp4119586.jpg",
    anoLancamento: 2003,
    diretor: "Peter Jackson",
    genero: "Ficção Científica",
    nota: 4.57,
    trailer: "https://www.youtube.com/embed/r5X-hFf6Bwo?si=EOV6TTAut_5Zm6mS",
    streaming: ["MAX"],
  },
  {
    id: 4,
    nome: "12 Homens e uma Sentença",
    sinopse:
      "A defesa e a acusação encerraram seus argumentos e o júri está entrando na sala para decidir se um jovem hispano-americano é culpado ou inocente do assassinato de seu pai. O que começa como um caso simples logo se transforma em um pequeno drama, revelando os preconceitos e ideias preconcebidas de cada jurado sobre o julgamento, o acusado e uns sobre os outros.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/7/0/0/51700-12-angry-men-0-1000-0-1500-crop.jpg?v=b8aaf291a9",
    capaFundo: "https://m.media-amazon.com/images/M/MV5BNGRlZjVhNWMtOTUxYi00MTYxLWEzOWUtMTM1NDc3ZWRjMDZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
    anoLancamento: 1957,
    diretor: "Sidney Lumet",
    genero: "Drama",
    nota: 4.57,
    trailer: "https://www.youtube.com/embed/TEN-2uTi2c0?si=lapV9AjXCOvXJ5oH",
    streaming: ["AMAZON"],
  },
  {
    id: 5,
    nome: "O Poderoso Chefão: Parte 2",
    sinopse:
      "Na saga contínua da família criminosa Corleone, o jovem Vito Corleone cresce na Sicília e na Nova York da década de 1910. Na década de 1950, Michael Corleone tenta expandir os negócios da família para Las Vegas, Hollywood e Cuba.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/6/51816-the-godfather-part-ii-0-1000-0-1500-crop.jpg?v=6a49853f25",
    capaFundo:
      "https://substackcdn.com/image/fetch/$s_!6hd2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F67497347-267d-42f0-b886-24f8fb148e2d_1600x900.jpeg",
    anoLancamento: 1974,
    diretor: "Francis Ford Coppola",
    genero: "Crime",
    nota: 4.55,
    trailer: "https://www.youtube.com/embed/9O1Iy9od7-A?si=diLOgvyWjtIbMImJ",
    streaming: ["NETFLIX"],
  },
  {
    id: 6,
    nome: "O Cavaleiro das Trevas",
    sinopse:
      "Batman eleva a aposta em sua guerra contra o crime. Com a ajuda do Tenente Jim Gordon e do Promotor Público Harvey Dent, Batman parte para desmantelar as organizações criminosas remanescentes que assolam as ruas. A parceria se mostra eficaz, mas logo eles se veem vítimas de um reinado de caos desencadeado por um gênio do crime em ascensão, conhecido pelos cidadãos aterrorizados de Gotham como o Coringa.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/78/y5/zg/ej/oefdD26aey8GPdx7Rm45PNncJdU-0-1000-0-1500-crop.jpg?v=2d0ce4be25",
    capaFundo:
      "https://m.media-amazon.com/images/M/MV5BMjA5ODU3NTI0Ml5BMl5BanBnXkFtZTcwODczMTk2Mw@@._V1_QL75_UX513_.jpg",
    anoLancamento: 2008,
    diretor: "Christopher Nolan",
    genero: "Ação",
    nota: 4.53,
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=3d0KX35TMp6c9IB5",
    streaming: ["MAX"],
  },
  {
    id: 7,
    nome: "A Lista de Schindler",
    sinopse:
      "A história verídica de como o empresário Oskar Schindler salvou mais de mil vidas judaicas dos nazistas enquanto trabalhavam como escravos em sua fábrica durante a Segunda Guerra Mundial.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/bz/1x/em/jr/yPisjyLweCl1tbgwgtzBCNCBle-0-1000-0-1500-crop.jpg?v=ca5215c5a9",
    capaFundo: "https://bradleyfarless.com/wp-content/uploads/2021/09/a038a-steven-spielberg-moment-schindlers-list.jpg",
    anoLancamento: 1993,
    diretor: "Steven Spielberg",
    genero: "Drama",
    nota: 4.52,
    trailer: "https://www.youtube.com/embed/GAf0nGq_FXQ?si=kOEzDze0WG3zJwGe",
    streaming: ["AMAZON"],
  },
  {
    id: 8,
    nome: "O Senhor dos Anéis: A Sociedade do Anel",
    sinopse:
      "O jovem hobbit Frodo Bolseiro, após herdar um anel misterioso de seu tio Bilbo, precisa deixar sua casa para impedir que ele caia nas mãos de seu criador maligno. Ao longo do caminho, uma sociedade é formada para proteger o portador do anel e garantir que ele chegue ao seu destino final: a Montanha da Perdição, o único lugar onde pode ser destruído.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/3t/vq/0u/m6/1tX9ZlgVvWjAQhMs1vAfsYpi7VK-0-1000-0-1500-crop.jpg?v=30bbb824e1",
    capaFundo:
      "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/909/98/thumb_F217C17A-3384-4B24-82F8-4305A4224AB0.jpg",
    anoLancamento: 2001,
    diretor: "Peter Jackson",
    genero: "Ficção Científica",
    nota: 4.50,
    trailer: "https://www.youtube.com/embed/V75dMMIW2B4?si=rBBo6JZ8CqUke6uF",
    streaming: ["MAX"],
  },
  {
    id: 9,
    nome: "Três Homens em Conflito",
    sinopse:
      "Enquanto a Guerra Civil se intensifica entre a União e a Confederação, três homens – um solitário quieto, um assassino implacável e um bandido mexicano – percorrem o sudoeste americano em busca de um cofre contendo US$ 200.000 em ouro roubado.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/6/6/6/51666-the-good-the-bad-and-the-ugly-0-1000-0-1500-crop.jpg?v=9474a84e63",
    capaFundo:
      "https://www.cinematheque.qc.ca/cdn-cgi/image/format=auto/workspace/uploads/projections/_oct6_good_bad_ugly_ennio4banner-fr-1701976321.jpg",
    anoLancamento: 1966,
    diretor: "Sergio Leone",
    genero: "Faroeste",
    nota: 4.50,
    trailer: "https://www.youtube.com/embed/WCN5JJY_wiA?si=ZEhAhDcPubfAcDi3",
    streaming: ["AMAZON"],
  },
  {
    id: 10,
    nome: "O Senhor dos Anéis: As Duas Torres",
    sinopse:
      "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/9/2/9/51929-the-lord-of-the-rings-the-two-towers-0-1000-0-1500-crop.jpg?v=9ef6c09783",
    capaFundo:
      "https://www.cinematheque.qc.ca/workspace/uploads/projections/the-lord-of-the-rings-the-two-towers-2-fr-1748288473.jpg",
    anoLancamento: 2002,
    diretor: "Peter Jackson",
    genero: "Ficção Científica",
    nota: 4.47,
    trailer: "https://www.youtube.com/embed/LbfMDwc4azU?si=I62cMg9XsV-F2UIY",
    streaming: ["MAX"],
  },
  {
    id: 11,
    nome: "Cidade de Deus",
    sinopse:
      "Uma família pobre coreana se infiltra na vida de uma família rica, criando uma rede de mentiras e manipulações. Mas quando o segredo deles é revelado, a tensão explode em uma crítica poderosa sobre desigualdade social.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-1000-0-1500-crop.jpg?v=7517ea94ce",
    capaFundo:
      "https://cinemarcoblog.net/wp-content/uploads/2023/01/ac5c3-cidadededeus.jpeg",
    anoLancamento: 2002,
    diretor: "Fernando Meirelles",
    genero: "Crime",
    nota: 4.47,
    trailer: "https://www.youtube.com/embed/fZJUKixyeXM?si=ag9pX4IpYpDgYAoo",
    streaming: ["MAX", "NETFLIX"],
  },
  {
    id: 12,
    nome: "Os Sete Samurais",
    sinopse:
      "Um samurai atende ao pedido de proteção de uma aldeia após passar por dificuldades financeiras. A aldeia precisa de proteção contra bandidos, então o samurai reúne outros seis homens para ajudá-lo a ensinar as pessoas a se defenderem, e os aldeões fornecem comida aos soldados.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/ji/5q/0k/rv/v6xrz4fr92KY1oNC3HsEvrsvR1n-0-1000-0-1500-crop.jpg?v=973d70bb0c",
    capaFundo:
      "https://m.media-amazon.com/images/M/MV5BMTg5MTc4MTc4M15BMl5BanBnXkFtZTcwNjA5MTU4Mw@@._V1_.jpg",
    anoLancamento: 1954,
    diretor: "Akira Kurosawa",
    genero: "Ação",
    nota: 4.46,
    trailer: "https://www.youtube.com/embed/1XMJY0hYJEw?si=VmgQsxFv-QXRnPb8",
    streaming: ["AMAZON"],
  },
  {
    id: 13,
    nome: "Star Wars: O Império Contra-Ataca",
    sinopse:
      "A saga épica continua enquanto Luke Skywalker, na esperança de derrotar o maligno Império Galáctico, aprende os caminhos Jedi com o mestre Yoda. Mas Darth Vader está mais determinado do que nunca a capturar Luke. Enquanto isso, a líder rebelde Princesa Leia, o arrogante Han Solo, Chewbacca e os dróides C-3PO e R2-D2 enfrentam diversas fases de captura, traição e desespero.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/mp/pz/lf/2i/7BuH8itoSrLExs2YZSsM01Qk2no-0-1000-0-1500-crop.jpg?v=27c6c6fba7",
    capaFundo:
      "https://cdn.mos.cms.futurecdn.net/eq9MnZTEMoQ7LWjACSH3sS.jpg",
    anoLancamento: 1980,
    diretor: "Irvin Kershner",
    genero: "Ficção Científica",
    nota: 4.45,
    trailer: "https://www.youtube.com/embed/JNwNXF9Y6kY?si=pgxWChf52ya3bndL",
    streaming: ["DISNEY+"],
  },
  {
    id: 14,
    nome: "Os Bons Companheiros",
    sinopse:
      "A história verídica de Henry Hill, um garoto do Brooklyn, meio irlandês, meio siciliano, que é adotado por gângsteres do bairro ainda jovem e ascende na hierarquia de uma família da máfia sob a tutela de Jimmy Conway.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/3/8/3/51383-goodfellas-0-1000-0-1500-crop.jpg?v=c6c265f228",
    capaFundo: "https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2015/04/23/150423221239_goodfellas_624x351_alamy.jpg.webp",
    anoLancamento: 1990,
    diretor: "Martin Scorsese",
    genero: "Crime",
    nota: 4.45,
    trailer: "https://www.youtube.com/embed/2ilzidi_J8Q?si=SqtabS-O1KMxDFGi",
    streaming: ["MAX"],
  },
  {
    id: 15,
    nome: "Parasita",
    sinopse:
      "Uma família pobre coreana se infiltra na vida de uma família rica, criando uma rede de mentiras e manipulações. Mas quando o segredo deles é revelado, a tensão explode em uma crítica poderosa sobre desigualdade social.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-2000-0-3000-crop.jpg?v=8f5653f710",
    capaFundo:
      "https://isabelaboscov.com/wp-content/uploads/2019/11/blogib_parasita_feat.jpg",
    anoLancamento: 2019,
    diretor: "Bong Joon-ho",
    genero: "Drama, Suspense",
    nota: 4.40,
    trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
    streaming: ["AMAZON"],
  },
  {
    id: 16,
    nome: "Interestelar",
    sinopse:
      "Um grupo de astronautas viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade. Um épico de ficção científica sobre amor, sacrifício e sobrevivência.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/1/1/7/6/2/1/117621-interstellar-0-2000-0-3000-crop.jpg?v=7ad89e6666",
    capaFundo:
      "https://wallpapers.com/images/hd/interstellar-endurance-on-water-weyznih3sh194a7h.jpg",
    anoLancamento: 2014,
    diretor: "Christopher Nolan",
    genero: "Ficção Científica",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/UpGFBQOrZmQ?si=t0yWurRMRkPics65",
    streaming: ["NETFLIX"],
  },
  {
    id: 17,
    nome: "Clube da Luta",
    sinopse:
      "Um homem insone e sem propósito conhece Tyler Durden, um vendedor carismático que o introduz a um clube secreto de luta. À medida que o grupo cresce, a linha entre a sanidade e o caos se desfaz, revelando um final chocante sobre identidade e rebeldia moderna.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/5/6/8/51568-fight-club-0-2000-0-3000-crop.jpg?v=768b32dfa4",
    capaFundo:
      "https://images.bauerhosting.com/legacy/empire-legacy/uploaded/fight-club-brad-pitt-tyler-durden.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=992&q=80",
    anoLancamento: 1999,
    diretor: "David Fincher",
    genero: "Drama, Suspense",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
    streaming: ["NETFLIX", "MAX"],
  },
  {
    id: 18,
    nome: "Whiplash: Em Busca da Perfeição",
    sinopse:
      "Andrew, um jovem baterista, entra para uma das melhores escolas de música dos EUA. Lá, ele enfrenta o professor Fletcher, um instrutor implacável que acredita que a verdadeira grandeza nasce da pressão extrema.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-2000-0-3000-crop.jpg?v=d13ea36528",
    capaFundo:
      "https://s2-g1.glbimg.com/o_co-QWHDUQ_a4yqL-k1gopYPy4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/G/P/vAiMdmR3yfAknkdUSvvw/whiplash.jpg",
    anoLancamento: 2014,
    diretor: "Damien Chazelle",
    genero: "Drama, Música",
    nota: 4.35,
    trailer: "https://www.youtube.com/embed/7d_jQycdQGo",
    streaming: ["NETFLIX"],
  },
];
