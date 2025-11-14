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
    streaming: ["MUBI", "LOOKE"],
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
    nome: "O Túmulo dos Vagalumes",
    sinopse:
      "Nos últimos meses da Segunda Guerra Mundial, Seita, de 14 anos, e sua irmã Setsuko ficam órfãos quando sua mãe é morta durante um ataque aéreo em Kobe, no Japão. Após uma briga com a tia, eles se mudam para um abrigo antiaéreo abandonado. Sem parentes vivos e com suas rações de emergência esgotadas, Seita e Setsuko lutam para sobreviver.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/4/5/5/8/44558-grave-of-the-fireflies-0-1000-0-1500-crop.jpg?v=0c61fd55f0",
    capaFundo: "https://static01.nyt.com/images/2019/01/04/arts/04grave1/merlin_148555677_8f4ad2ce-9e3a-4c44-bf1b-24c3c1c51192-superJumbo.jpg",
    anoLancamento: 1988,
    diretor: "Isao Takahata",
    genero: "Animação, Drama",
    nota: 4.41,
    trailer: "https://www.youtube.com/embed/lhlh7JVcTt8?si=_3pBGHL8RR_FTLwN",
    streaming: ["NETFLIX"],
  },
  {
    id: 16,
    nome: "Harakiri",
    sinopse:
      "O veterano Tsugumo Hanshirō, em má situação financeira, entra no pátio da próspera Casa Iyi. Desempregado e sem família, ele espera encontrar um lugar para cometer seppuku — e um segundo digno para dar o golpe de misericórdia em seu ritual de suicídio.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/3/0/1/5/43015-harakiri-0-1000-0-1500-crop.jpg?v=007080a0fb",
    capaFundo: "https://assets.mubicdn.net/images/film/743/image-w1280.jpg?1745490606",
    anoLancamento: 1962,
    diretor: "Masaki Kobayashi",
    genero: "Drama",
    nota: 4.41,
    trailer: "https://www.youtube.com/embed/gfABwM-Ppng?si=wyS4YvXEeWYYXzir",
    streaming: ["AMAZON"],
  },
  {
    id: 17,
    nome: "Vá e Veja",
    sinopse:
      "A invasão de uma aldeia na Bielorrússia pelas forças alemãs leva o jovem Florya para a floresta a juntar-se aos exaustos combatentes da Resistência, contra a vontade da sua família. Lá, ele conhece uma jovem, Glasha, que o acompanha de volta à sua aldeia. Ao retornar para casa, Florya encontra sua família e outros camponeses massacrados. Sua luta pela sobrevivência em meio aos destroços brutais da guerra torna-se cada vez mais angustiante, uma batalha entre o desespero e a esperança.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/3/6/1/9/2/36192-come-and-see-0-1000-0-1500-crop.jpg?v=741b0269bb",
    capaFundo: "https://modernmoviemeltdown.wordpress.com/wp-content/uploads/2016/07/come-and-see-1.jpg?w=584",
    anoLancamento: 1985,
    diretor: "Elem Klimov",
    genero: "Guerra",
    nota: 4.41,
    trailer: "https://www.youtube.com/embed/UHaSQU-4wss?si=R6kqMJNuZfmf8Lvd",
    streaming: ["AMAZON"],
  },
  {
    id: 18,
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
    streaming: ["MAX"],
  },
  {
    id: 19,
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
    id: 20,
    nome: "O Exterminador do Futuro 2: O Julgamento Final",
    sinopse:
      "Dez anos após os eventos do filme original, um T-800 reprogramado é enviado de volta no tempo para proteger o jovem John Connor do T-1000, um ser capaz de mudar de forma. Juntamente com sua mãe, Sarah, ele luta para impedir que a Skynet desencadeie um apocalipse nuclear.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/03/67/3s/tc/terminator-2-judgment-day-original-0-1000-0-1500-crop.jpg?v=12f5752b5c",
    capaFundo:
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2024/08/exterminador_29_de_agosto__2ls38ri0.jpg",
    anoLancamento: 1991,
    diretor: "James Cameron",
    genero: "Ação, Ficção Científica",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/CRRlbK5w8AE?si=QNS3rDYHxAoDvVeR",
    streaming: ["AMAZON"],
  },
  {
    id: 21,
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
    id: 22,
    nome: "A Viagem de Chihiro",
    sinopse:
      "Uma jovem garota, Chihiro, fica presa em um estranho mundo de espíritos. Quando seus pais sofrem uma misteriosa transformação, ela precisa encontrar uma coragem que nunca soube que possuía para libertar sua família.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/9/2/1/51921-spirited-away-0-1000-0-1500-crop.jpg?v=a3ad463c55",
    capaFundo:
      "https://i0.wp.com/studioghibli.com.br/wp-content/uploads/2020/04/A-Viagem-de-Chihiro-chihiro-e-haku.jpg?fit=1920%2C1082&ssl=1",
    anoLancamento: 2001,
    diretor: "Hayao Miyazaki",
    genero: "Animação, Aventura",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/ByXuk9QqQkk?si=9HdgS3ZofNKMWrdq",
    streaming: ["NETFLIX"],
  },
  {
    id: 23,
    nome: "Um Estranho no Ninho",
    sinopse:
      "Um criminoso de baixa patente finge insanidade para cumprir sua pena em um manicômio em vez de na prisão. Ele logo se torna um líder entre os outros pacientes — e um inimigo da enfermeira cruel e dominadora que administra o manicômio.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/lf/ry/hy/2e/RHteRHXqym9f0gI4cmChbFOxD-0-1000-0-1500-crop.jpg?v=1e6a37509a",
    capaFundo:
      "https://acervo.oglobo.globo.com/incoming/9207262-c3a-ff9/materia/Jack-Nicholson.jpg",
    anoLancamento: 1975,
    diretor: "Milos Forman",
    genero: "Drama",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/QtXOIfqfegY?si=EBGA9xoxx925c75e",
    streaming: ["AMAZON"],
  },
  {
    id: 24,
    nome: "Cinema Paradiso",
    sinopse:
      "Um cineasta relembra sua infância, quando se apaixonou pelo cinema no teatro de sua aldeia e formou uma profunda amizade com o projecionista do local.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/5/4/9/3/45493-cinema-paradiso-0-1000-0-1500-crop.jpg?v=8e66264ed4",
    capaFundo:
      "https://images.mubicdn.net/images/film/3174/cache-50595-1745491070/image-w1280.jpg?size=800x",
    anoLancamento: 1988,
    diretor: "Giuseppe Tornatore",
    genero: "Drama",
    nota: 4.38,
    trailer: "https://www.youtube.com/embed/JMyVSD6OvO8?si=qwMbQIF9yHSBMJO",
    streaming: ["AMAZON"],
  },
  {
    id: 25,
    nome: "O Pianista",
    sinopse:
      "A história verídica das experiências do pianista Władysław Szpilman em Varsóvia durante a ocupação nazista. Quando os judeus da cidade se viram confinados em um gueto, Szpilman encontrou trabalho tocando em um café; e quando sua família foi deportada em 1942, ele permaneceu na cidade, trabalhou por um tempo como operário e, por fim, se escondeu nas ruínas da cidade devastada pela guerra.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/6/7/2/51672-the-pianist-0-1000-0-1500-crop.jpg?v=3eee5ac018",
    capaFundo:
      "https://trecobox.com.br/wp-content/uploads/2024/12/trecobox.com.br-o-pianista-uma-historia-comovente-de-sobrevivencia-durante-a-segunda-guerra-mundial-o-pianista-1280x720.jpg",
    anoLancamento: 2002,
    diretor: "Roman Polanski",
    genero: "Guerra, Drama",
    nota: 4.37,
    trailer: "https://www.youtube.com/embed/BFwGqLa_oAo?si=URj1U1TKoy7T28Wj",
    streaming: ["AMAZON"],
  },
  {
    id: 26,
    nome: "A Felicidade Não Se Compra",
    sinopse:
      "Um clássico natalino de gerações... George Bailey dedicou sua vida inteira a ajudar os moradores de Bedford Falls. Tudo o que impede o rico e avarento Sr. Potter de tomar posse da cidade inteira é a modesta empresa de construção e empréstimos de George. Mas na véspera de Natal, os US$ 8.000 da empresa desaparecem e os problemas de George começam.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/0/9/4/9/50949-it-s-a-wonderful-life-0-1000-0-1500-crop.jpg?v=64b72dd083",
    capaFundo:
      "https://assets.mubicdn.net/images/film/3388/image-w1280.jpg?1745490366",
    anoLancamento: 1946,
    diretor: "Frank Capra",
    genero: "Natal, Drama",
    nota: 4.37,
    trailer: "https://www.youtube.com/embed/iLR3gZrU2Xo?si=hBNgIrpdF4LWfto8",
    streaming: ["LOOKE"],
  },
  {
    id: 27,
    nome: "Pulp Fiction",
    sinopse:
      "Um assassino de aluguel apaixonado por hambúrgueres, seu parceiro filósofo, a namorada de um gângster viciada em drogas e um boxeador decadente se encontram nesta aventura policial cômica e extensa. Suas peripécias se desenrolam em três histórias que alternam engenhosamente entre passado e presente.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/4/4/4/51444-pulp-fiction-0-1000-0-1500-crop.jpg?v=dee19a8077",
    capaFundo:
      "https://m.media-amazon.com/images/M/MV5BNTY1MzgzOTYxNV5BMl5BanBnXkFtZTgwMDI4OTEwMjE@._V1_.jpg",
    anoLancamento: 1994,
    diretor: "Quentin Tarantino",
    genero: "Crime, Ação",
    nota: 4.36,
    trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY?si=nfFGjY_QGzOeMC08",
    streaming: ["NETFLIX"],
  },
  {
    id: 28,
    nome: "Ikiru",
    sinopse:
      "Kanji Watanabe é um homem de meia-idade que trabalha há décadas no mesmo cargo burocrático monótono. Ao descobrir que tem câncer, ele começa a buscar o sentido da sua vida.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/9/5/9/5/49595-ikiru-0-1000-0-1500-crop.jpg?v=3b6666bd18",
    capaFundo:
      "https://static.wixstatic.com/media/8f43d3_571a259815f24b53a8cef56db6d5e410~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8f43d3_571a259815f24b53a8cef56db6d5e410~mv2.jpg",
    anoLancamento: 1952,
    diretor: "Akira Kurosawa",
    genero: "Drama",
    nota: 4.36,
    trailer: "https://www.youtube.com/embed/geKhyNerWM8?si=hRALhC-uHAXdWFLj",
    streaming: ["AMAZON"],
  },
  {
    id: 29,
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
  {
    id: 30,
    nome: "Forrest Gump",
    sinopse:
      "Um homem com baixo QI realizou grandes feitos em sua vida e esteve presente em importantes eventos históricos — em cada caso, superando em muito o que qualquer um imaginava que ele pudesse fazer. Mas, apesar de tudo o que conquistou, seu verdadeiro amor lhe escapa.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/2/7/0/4/2704-forrest-gump-0-1000-0-1500-crop.jpg?v=173bc04cf0",
    capaFundo:
      "https://www.elhombre.com.br/wp-content/uploads/2021/06/forrest-gump-1.jpg",
    anoLancamento: 1994,
    diretor: "Robert Zemeckis",
    genero: "Drama",
    nota: 4.35,
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg?si=5d6YEbZNjGmtI36d",
    streaming: ["NETFLIX"],
  },
  {
    id: 31,
    nome: "Homem-Aranha no Aranhaverso",
    sinopse:
      "Lutando para encontrar seu lugar no mundo enquanto concilia escola e família, o adolescente do Brooklyn, Miles Morales, é inesperadamente picado por uma aranha radioativa e desenvolve poderes inimagináveis, assim como o único e inigualável Homem-Aranha. Enquanto lida com as implicações de suas novas habilidades, Miles descobre um supercolisor criado pelo lunático Wilson Fisk, fazendo com que outros seres de todo o Aranhaverso sejam transportados inadvertidamente para sua dimensão.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/2/5/1/9/4/3/251943-spider-man-into-the-spider-verse-0-1000-0-1500-crop.jpg?v=538fe0ada6",
    capaFundo:
      "https://www.deusnogibi.com.br/site/wp-content/uploads/2019/01/KPAYADDARANHAVERSO.jpg",
    anoLancamento: 2018,
    diretor: "Bob Persichetti e Peter Ramsey",
    genero: "Animação, Aventura, Ficção Científica",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ?si=A6Ty28ZMHP-hbvol",
    streaming: ["NETFLIX", "AMAZON"],
  },
  {
    id: 32,
    nome: "Matrix",
    sinopse:
      "Ambientado no século XXII, Matrix conta a história de um hacker de computador que se junta a um grupo de insurgentes clandestinos que lutam contra os vastos e poderosos computadores que agora dominam a Terra.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/5/1/8/51518-the-matrix-0-1000-0-1500-crop.jpg?v=fc7c366afe",
    capaFundo:
      "https://preview.redd.it/pls221b8pyo31.png?width=640&crop=smart&auto=webp&s=d36c158eb31837251b8371823fc7ed78465c942f",
    anoLancamento: 1999,
    diretor: "Lana Wachowski e Lilly Wachowski",
    genero: "Ficção Científica, Ação",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?si=2vG_rHRWGPD1O48c",
    streaming: ["MAX"],
  },
  {
    id: 33,
    nome: "A Origem",
    sinopse:
      "Cobb, um ladrão habilidoso que pratica espionagem corporativa infiltrando-se no subconsciente de seus alvos, recebe a chance de recuperar sua antiga vida como pagamento por uma tarefa considerada impossível: a incepção, a implantação da ideia de outra pessoa no subconsciente de um alvo.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-1000-0-1500-crop.jpg?v=30d7224316",
    capaFundo:
      "https://m.media-amazon.com/images/S/pv-target-images/52165fc29179315305689ab0e8c136b466d2b9f594f47862dda383c0900a2f42._SX1080_FMjpg_.jpg",
    anoLancamento: 2010,
    diretor: "Christopher Nolan",
    genero: "Ficção Científica, Ação",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0?si=FdfZI8U91FyR-ut9",
    streaming: ["MAX"],
  },
  {
    id: 34,
    nome: "Se7en",
    sinopse:
      "Neste filme sombrio e perturbador, dois detetives de homicídios embarcam numa busca desesperada por um assassino em série cujos crimes são baseados nos sete pecados capitais, levando o espectador dos restos mortais torturados de uma vítima à seguinte. O experiente Detetive Somerset pesquisa cada pecado na tentativa de compreender a mente do assassino, enquanto seu parceiro novato, Mills, zomba de seus esforços para desvendar o caso.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/3/4/5/51345-se7en-0-1000-0-1500-crop.jpg?v=76a14ef6b4",
    capaFundo:
      "https://veja.abril.com.br/wp-content/uploads/2025/01/seven.webp?resize=1080,565&crop=1",
    anoLancamento: 1995,
    diretor: "David Fincher",
    genero: "Crime, Ação, Suspense",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/dGzGUQ2CDzQ?si=LRTdkQ0X7a18gPPT",
    streaming: ["MAX"],
  },
  {
    id: 35,
    nome: "O Silêncio dos Inocentes",
    sinopse:
      "Clarice Starling é uma aluna exemplar na academia de treinamento do FBI. Jack Crawford quer que Clarice entreviste o Dr. Hannibal Lecter, um psiquiatra brilhante e psicopata violento, que cumpre pena de prisão perpétua por diversos assassinatos e canibalismo. Crawford acredita que Lecter possa ter informações importantes sobre um caso e que Starling, por ser uma jovem atraente, pode ser a isca perfeita para atraí-lo.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/7/8/2/51782-the-silence-of-the-lambs-0-1000-0-1500-crop.jpg?v=18d88bdff4",
    capaFundo:
      "https://i0.wp.com/plotandtheme.com/wp-content/uploads/2017/02/silence11.jpg?fit=1020%2C576&ssl=1",
    anoLancamento: 1991,
    diretor: "Jonathan Demme",
    genero: "Ficção Científica, Ação",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/6iB21hsprAQ?si=aUrs39nLY2Ut9Lfx",
    streaming: ["AMAZON", "MUBI"],
  },
  {
    id: 36,
    nome: "Alien",
    sinopse:
      "Durante seu retorno à Terra, a nave comercial Nostromo intercepta um sinal de socorro vindo de um planeta distante. Quando uma equipe de três tripulantes descobre uma câmara contendo milhares de ovos no planeta, uma criatura dentro de um dos ovos ataca um dos exploradores. Toda a tripulação desconhece o pesadelo iminente que se abaterá sobre eles quando o parasita alienígena implantado em seu infeliz hospedeiro eclodir.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/8v/f1/qw/aa/bg7K6VtUG7Ew70gQj6SSroD5d4R-0-1000-0-1500-crop.jpg?v=a932f9e98e",
    capaFundo:
      "https://filmotomy.com/wp-content/uploads/2019/07/PhotoPictureResizer_190719_094837776_crop_1200x600.jpg",
    anoLancamento: 1979,
    diretor: "Ridley Scott",
    genero: "Ficção Científica, Suspense",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/jQ5lPt9edzQ?si=GVDOkLRbGDe0ch2r",
    streaming: ["DISNEY+"],
  },
  {
    id: 37,
    nome: "Sangue Negro",
    sinopse:
      "Daniel Plainview, um minerador de prata implacável que se tornou prospector de petróleo, muda-se para a Califórnia, rica em petróleo. Usando seu filho para projetar uma imagem de homem de família confiável, Plainview engana proprietários de terras locais para que lhe vendam suas valiosas propriedades por uma ninharia. No entanto, o pregador local Eli Sunday suspeita dos motivos e intenções de Plainview, dando início a uma rivalidade crescente que ameaça a vida de ambos.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/jg/cd/7y/f5/there%20will%20be%20blood-0-1000-0-1500-crop.jpg?v=8a533d5350",
    capaFundo:
      "https://benjweinberg.com/wp-content/uploads/2018/02/there-will-be-blood.jpg?w=1200",
    anoLancamento: 2007,
    diretor: "Paul Thomas Anderson",
    genero: "Drama",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/FeSLPELpMeM?si=3h7fg90h1nbyRDU4",
    streaming: ["AMAZON"],
  },
  {
    id: 38,
    nome: "Psicose",
    sinopse:
      "Quando a corretora de imóveis ladra Marion Crane foge com um maço de dinheiro e a esperança de começar uma nova vida, ela acaba no infame Bates Motel, onde o gerente Norman Bates cuida de sua mãe acamada.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/5/7/8/51578-psycho-0-1000-0-1500-crop.jpg?v=7250c49dcd",
    capaFundo:
      "https://images.mubicdn.net/images/film/148/cache-47486-1745490946/image-w1280.jpg",
    anoLancamento: 1960,
    diretor: "Alfred Hitchcock",
    genero: "Suspense, Terror",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/BwVKSGu8wEA?si=RBd-F1c7jf5_iXnD",
    streaming: ["GLOBOPLAY"],
  },
  {
    id: 39,
    nome: "Princesa Mononoke",
    sinopse:
      "Ashitaka, um príncipe do povo Emishi, que está desaparecendo, é amaldiçoado por um deus javali demonizado e precisa viajar para o oeste em busca de uma cura. Ao longo do caminho, ele encontra San, uma jovem humana que luta para proteger a floresta, e Lady Eboshi, que tenta destruí-la. Ashitaka precisa encontrar uma maneira de equilibrar esse conflito.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/fu/5h/fp/mj/mNqZOtJIQfFQPjo3hmYLIn8Qqhf-0-1000-0-1500-crop.jpg?v=aae03975f7",
    capaFundo:
      "https://spinningplatters.com/wp-content/uploads/2025/04/image0-4-1200x673.jpeg",
    anoLancamento: 1997,
    diretor: "Hayao Miyazaki",
    genero: "Animação, Fantasia, Aventura",
    nota: 4.33,
    trailer: "https://www.youtube.com/embed/4OiMOHRDs14?si=xCvVdwwoD4cpO0zb",
    streaming: ["NETFLIX"],
  },
  {
    id: 40,
    nome: "À Espera de um Milagre",
    sinopse:
      "Uma história sobrenatural ambientada no corredor da morte de uma prisão no sul dos Estados Unidos, onde o gigante gentil John Coffey possui o misterioso poder de curar as doenças das pessoas. Quando o chefe da guarda do bloco de celas, Paul Edgecomb, reconhece o dom milagroso de Coffey, ele tenta desesperadamente impedir a execução do condenado.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/6/1/3/51613-the-green-mile-0-1000-0-1500-crop.jpg?v=fff3d0bd1f",
    capaFundo:
      "https://www.srf.ch/static/cms/images/960w/e0f410.jpg",
    anoLancamento: 1999,
    diretor: "Frank Darabont",
    genero: "Drama",
    nota: 4.31,
    trailer: "https://www.youtube.com/embed/Bg7epsq0OIQ?si=J_FUUaGWBDNTgcdZ",
    streaming: ["MAX"],
  },
  {
    id: 41,
    nome: "O Resgate do Soldado Ryan",
    sinopse:
      "Enquanto as tropas americanas invadem as praias da Normandia, três irmãos jazem mortos no campo de batalha, e um quarto está preso atrás das linhas inimigas. O capitão dos Rangers, John Miller, e sete homens recebem a missão de penetrar em território ocupado pelos alemães e resgatar o menino.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/hz/fu/r7/y7/35CMz4t7PuUiQqt5h4u5nbrXZlF-0-1000-0-1500-crop.jpg?v=3a667509e0",
    capaFundo:
      "https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__2925-saving-private-ryan--hi_res-67979936.jpg/film__2925-saving-private-ryan--hi_res-67979936.jpg",
    anoLancamento: 1998,
    diretor: "Steven Spielberg",
    genero: "Guerra, Drama",
    nota: 4.31,
    trailer: "https://www.youtube.com/embed/9CiW_DgxCnQ?si=zGvUVUo1930kR4Ze",
    streaming: ["PARAMOUNT+"],
  },
  {
    id: 42,
    nome: "Homem-Aranha: Através do Aranhaverso",
    sinopse:
      "Após se reencontrar com Gwen Stacy, o amigável Homem-Aranha da vizinhança, morador do Brooklyn, é catapultado através do Multiverso, onde encontra a Sociedade Aranha, uma equipe de Homens-Aranha encarregada de proteger a própria existência do Multiverso. Mas quando os heróis entram em conflito sobre como lidar com uma nova ameaça, Miles se vê em conflito com os outros Homens-Aranha e precisa seguir sozinho para salvar aqueles que mais ama.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/9/7/6/3/1/497631-spider-man-across-the-spider-verse-0-1000-0-1500-crop.jpg?v=f2acbf1b8a",
    capaFundo:
      "https://m.media-amazon.com/images/S/pv-target-images/3c7c45988ed34fe4628aed9d51507061434432482279e1b69f8fd11ced6869bf._SX1080_FMjpg_.jpg",
    anoLancamento: 2023,
    diretor: "Justin K. Thompson e Kemp Powers",
    genero: "Animação, Aventura, Ficção Científica",
    nota: 4.30,
    trailer: "https://www.youtube.com/embed/cqGjhVJWtEg?si=rG7lbrUGhReEgADA",
    streaming: ["AMAZON"],
  },
];
