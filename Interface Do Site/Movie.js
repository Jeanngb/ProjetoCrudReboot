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
    nome: "Homem-Aranha: Através do Aranhaverso",
    sinopse:
      "Após se reencontrar com Gwen Stacy, o amigável Homem-Aranha da vizinhança, morador do Brooklyn, é catapultado através do Multiverso, onde encontra a Sociedade Aranha, uma equipe de Homens-Aranha encarregada de proteger a própria existência do Multiverso. Mas quando os heróis entram em conflito sobre como lidar com uma nova ameaça, Miles se vê em conflito com os outros Homens-Aranha e precisa seguir sozinho para salvar aqueles que mais ama.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/4/9/7/6/3/1/497631-spider-man-across-the-spider-verse-0-1000-0-1500-crop.jpg?v=f2acbf1b8a",
    capaFundo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Folhardigital.com.br%2F2023%2F04%2F04%2Fcinema-e-streaming%2Fhomem-aranha-trailer-final-de-aranhaverso-2-traz-referencias-do-mcu%2F&psig=AOvVaw00BhV8uu2kLj2lD0JjO8hm&ust=1763073814411000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMDYu_TX7ZADFQAAAAAdAAAAABAL",
    anoLancamento: 2023,
    diretor: "Justin K. Thompson e Kemp Powers",
    genero: "Ação",
    nota: 4.4,
    trailer: "https://www.youtube.com/embed/_4is7I_ZxTg?si=GTWv2BmGFNCHRPnh",
    streaming: ["NETFLIX"],
  },
  {
    id: 2,
    nome: "Capitão América: Soldado Invernal",
    sinopse:
      "Quando um novo inimigo emerge no conflito entre os Vingadores, Capitão América é forçado a trabalhar com seu antigo aliado Bucky Barnes para descobrir a verdade por trás de uma conspiração que ameaça o mundo.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/he/p6/cc/lg/zt6b493XEL2OQ1bCSKccZ7V0iRY-0-2000-0-3000-crop.jpg?v=6296209106",
    capaFundo:
      "https://sm.ign.com/t/ign_br/screenshot/default/captain-america-the-winter-soldier-23_5yqx.1920.jpg",
    anoLancamento: 2014,
    diretor: "Anthony e Joe Russo",
    genero: "Ação",
    nota: 4.1,
    trailer: "https://www.youtube.com/embed/CTdvZwwShqM?si=sKbIdLmpcwCKdXLB",
    streaming: ["GLOBOPLAY"],
  },
  {
    id: 3,
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
    nota: 4.7,
    trailer: "https://www.youtube.com/embed/UpGFBQOrZmQ?si=t0yWurRMRkPics65",
    streaming: ["NETFLIX"],
  },
  {
    id: 4,
    nome: "A Origem",
    sinopse:
      "Dom Cobb é um ladrão habilidoso, o melhor na arte da extração: roubar segredos valiosos do inconsciente durante o sono. Mas sua habilidade o tornou um fugitivo internacional e lhe custou tudo o que amava. Agora, ele tem uma chance de redenção: implantar uma ideia na mente de alguém — algo considerado impossível.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/sv/95/s9/4j/inception-0-2000-0-3000-crop.jpg?v=30d7224316",
    capaFundo: "https://cinepop.com.br/wp-content/uploads/2020/01/a-origem.jpg",
    anoLancamento: 2010,
    diretor: "Christopher Nolan",
    genero: "Ação, Ficção Científica",
    nota: 4.8,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    streaming: ["MAX"],
  },
  {
    id: 5,
    nome: "O Lobo de Wall Street",
    sinopse:
      "Baseado em fatos reais, o filme acompanha a ascensão e queda de Jordan Belfort, um corretor de ações ambicioso que constrói um império financeiro com métodos ilegais. Repleto de excessos, manipulação e ambição desenfreada, é uma crítica feroz ao poder e à corrupção do sistema.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/8/6/1/1/4/86114-the-wolf-of-wall-street-0-2000-0-3000-crop.jpg?v=a2b958b6f1",
    capaFundo:
      "https://forbes.com.br/wp-content/uploads/2018/03/O-Lobo-de-Wall-Street_rep-768x498.jpg",
    anoLancamento: 2013,
    diretor: "Martin Scorsese",
    genero: "Drama, Biografia",
    nota: 4.6,
    trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
    streaming: ["AMAZON"],
  },
  {
    id: 6,
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
    nota: 4.9,
    trailer: "https://www.youtube.com/embed/SUXWAEX2jlg",
    streaming: ["NETFLIX", "MAX"],
  },
  {
    id: 7,
    nome: "Gladiador",
    sinopse:
      "Maximus, um general romano traído e escravizado, luta por sua liberdade e vingança contra o imperador corrupto que destruiu sua família. Uma história épica de honra, coragem e justiça ambientada na Roma antiga.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/9/5/2/51952-gladiator-2000-0-2000-0-3000-crop.jpg?v=0071a74571",
    capaFundo: "https://i.ytimg.com/vi/GTXeV2jB8Dk/maxresdefault.jpg",
    anoLancamento: 2000,
    diretor: "Ridley Scott",
    genero: "Ação, Drama Histórico",
    nota: 4.8,
    trailer: "https://www.youtube.com/embed/P5ieIbInFpg?si=bzAi56kdAmsHwCHD",
    streaming: ["AMAZON", "NETFLIX"],
  },
  {
    id: 8,
    nome: "O Resgate do Soldado Ryan",
    sinopse:
      "Durante a Segunda Guerra Mundial, um grupo de soldados recebe a missão de encontrar e trazer de volta o último irmão sobrevivente de uma família. O filme mostra o realismo brutal da guerra e o valor da humanidade em meio ao caos.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/hz/fu/r7/y7/35CMz4t7PuUiQqt5h4u5nbrXZlF-0-2000-0-3000-crop.jpg?v=3a667509e0",
    capaFundo:
      "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/ryan2.jpg",
    anoLancamento: 1998,
    diretor: "Steven Spielberg",
    genero: "Guerra, Drama",
    nota: 4.7,
    trailer: "https://www.youtube.com/embed/zwhP5b4tD6g",
    streaming: ["NETFLIX", "AMAZON"],
  },
  {
    id: 9,
    nome: "Avatar",
    sinopse:
      "Em Pandora, um ex-fuzileiro paraplégico é enviado para interagir com os Na'vi e acaba dividido entre seguir ordens militares ou proteger o novo mundo que aprendeu a amar. Uma revolução visual sobre natureza, humanidade e espiritualidade.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/1p/mh/li/l2/b7nR3eKeTOwHPKmDLUWunIGasKo-0-2000-0-3000-crop.jpg?v=0bb5ec98ec",
    capaFundo:
      "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg",
    anoLancamento: 2009,
    diretor: "James Cameron",
    genero: "Ficção Científica, Aventura",
    nota: 4.5,
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
    streaming: ["DISNEY+"],
  },
  {
    id: 10,
    nome: "O Poderoso Chefão",
    sinopse:
      "Don Vito Corleone comanda uma das maiores famílias mafiosas de Nova York. Quando uma tentativa de assassinato quase tira sua vida, seu filho Michael é forçado a assumir o império, mergulhando num mundo de poder, lealdade e traição.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/8/51818-the-godfather-0-2000-0-3000-crop.jpg?v=bca8b67402",
    capaFundo:
      "https://t.ctcdn.com.br/54KHZqjSzhbYDeChIp9RlpWl8-o=/81x215:1263x880/1024x576/smart/i366371.jpeg",
    anoLancamento: 1972,
    diretor: "Francis Ford Coppola",
    genero: "Drama, Crime",
    nota: 5.0,
    trailer: "https://www.youtube.com/embed/88nc6NwAQG4?si=6baBARBkY2Pi16Mr",
    streaming: ["NETFLIX"],
  },
  {
    id: 11,
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
    nota: 4.8,
    trailer: "https://www.youtube.com/embed/SEUXfv87Wpk",
    streaming: ["AMAZON"],
  },
  {
    id: 12,
    nome: "Duna",
    sinopse:
      "Paul Atreides, um jovem talentoso e destinado a um grande futuro, precisa viajar ao planeta desértico Arrakis, onde a especiaria mais valiosa do universo é disputada entre casas poderosas. Um épico de poder, destino e sobrevivência.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/sm/upload/nx/8b/vs/gc/cDbNAY0KM84cxXhmj8f0dLWza3t-0-2000-0-3000-crop.jpg?v=49eed12751",
    capaFundo:
      "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/duna.jpg?w=1000",
    anoLancamento: 2021,
    diretor: "Denis Villeneuve",
    genero: "Ficção Científica, Aventura",
    nota: 4.6,
    trailer: "https://www.youtube.com/embed/n9xhJrPXop4",
    streaming: ["MAX", "AMAZON"],
  },
  {
    id: 13,
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
    nota: 4.9,
    trailer: "https://www.youtube.com/embed/7d_jQycdQGo",
    streaming: ["NETFLIX"],
  },
  {
    id: 14,
    nome: "Homem-Aranha: Sem Volta para Casa",
    sinopse:
      "Após sua identidade ser revelada, Peter Parker busca ajuda do Doutor Estranho. Mas um feitiço que dá errado traz vilões de outros universos, colocando em risco o multiverso e testando o verdadeiro significado de ser um herói.",
    capaPrincipal:
      "https://a.ltrbxd.com/resized/film-poster/5/6/0/7/8/7/560787-spider-man-no-way-home-0-2000-0-3000-crop.jpg?v=a336d4f40c",
    capaFundo: "https://t2.tudocdn.net/603750?w=824&h=494",
    anoLancamento: 2021,
    diretor: "Jon Watts",
    genero: "Ação, Super-Herói",
    nota: 4.5,
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA",
    streaming: ["DISNEY+", "MAX"],
  },
];

