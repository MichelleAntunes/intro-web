let music = [
  {
    imgMusic: "../imgs/scorpions.jpg",
    audio: "../imgs/scorpions.mp3",
    nameMusic: `Scorpions`,
    descripion: `Scorpions é uma banda de rock originária de
        Hanôver, Alemanha fundada em 1965 pelos irmãos e guitarristas
        Michael Schenker e Rudolf Schenker, sendo a primeira banda de
        hard rock formada no país germânico.`,
    summary: `Com mais de 110 milhões de discos vendidos e 50 anos no
        palco, os Scorpions são uma das bandas mais bem-sucedidas e
        duradouras da história da música.`,
    duration: 290,
    germanSongs: false,
  },
  {
    imgMusic: "../imgs/rammstein.jpg",
    audio: "../imgs/rammstein.mp3",
    nameMusic: `Rammstein`,
    descripion: `Rammstein é uma banda de rock
        industrial alemã formada em Berlim, em Janeiro de 1994.Em 2009,
        eles já haviam vendido cerca de 20 milhões de álbuns no mundo.`,
    summary: `Seu nome foi inspirado por um acidente aéreo em uma apresentação
        na base militar americana Ramstein, em Kaiserlautern, em agosto
        de 1988.O segundo M do nome da banda havia sido um erro.`,
    duration: 241,
    germanSongs: true,
  },
  {
    imgMusic: "../imgs/tokiohotel.jpg",
    audio: "../imgs/tokio.mp3",
    nameMusic: `Tokio Hotel`,
    descripion: ` Tokio Hotel é uma das maiores bandas alemãs
        atuais, já vendeu mais de 9 milhões de CDs e DVDs. Foi criada em
        2001 pelos irmãos gêmeos idênticos Bill e Tom Kaullitz.`,
    summary: `O gênero musical do Tokio Hotel é algo entre Pop-Rock e
        Technopop. Foram lançados 7 álbuns gravados em estúdio. <br />A
        banda fez seu primeiro show no Brasil em São Paulo no dia 23 de
        Novembro de 2010 e reuniu mais de 5 mil fãs da banda.`,
    duration: 188,
    germanSongs: false,
  },
];

const curiosidades = document.getElementById("curiosidade3");
const armazenar = curiosidades.innerHTML;

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  let informacao = e.target.value;
  let filterMusic = music.filter((card) => {
    return card.nameMusic.toLowerCase().includes(informacao);
  });

  curiosidades.innerHTML = "";
  let info = "";
  for (card of filterMusic) {
    info += `
      
      <div class="card" id="cards-music"> 
      <img id="img-music"src="${card.imgMusic}"></img>
      <audio class="audios" src="${card.audio}"controls></audio>
       <p> <strong> Music Band: ${card.nameMusic} </strong> </p>
      <p>${card.descripion} </p>
      <p>${card.summary} </p>
      
         
      </div>`;
  }
  curiosidades.innerHTML += info;
  if (informacao === "") {
    curiosidades.innerHTML = armazenar;
    console.log(armazenar);
  }
});

//imprimindo meu objeto
for (musics of music) {
  console.log("IMPRIMINDO MEU OBJETO");
  for (propriedade in musics) {
    console.log(`${propriedade}: ${musics[propriedade]}`);
  }
}
console.log("----------------------");
//primeira função verificando um objeto

function verificarCapital(objetoMusica) {
  console.log("VERIFICANDO MEU OBJETO");
  for (let musica in objetoMusica) {
    console.log(` Abanda é: ${music[musica].nameMusic} `);
  }
}

verificarCapital(music);
console.log("----------------------");

// segunda funcao verificando um objeto e uma string
function verificarCidade(objetoMusica, nomeMusica) {
  console.log("VERIFICANDO MEU OBJETO E UMA STRING");
  let musicaEncontrada = "";

  for (let i in objetoMusica) {
    if (objetoMusica[i].nameMusic.includes(nomeMusica)) {
      musicaEncontrada = objetoMusica[i].nameMusic;
      console.log(`Música pesquisada: ${musicaEncontrada}`);
    }
  }
  if (musicaEncontrada == "") {
    console.log(`Música pesquisada: ${nomeMusica} No results found`);
  }
}

verificarCidade(music, "BANANINHA");
console.log("----------------------");
//terceira funcao verificando o booleano

function verificarBooleano(objetoMusica) {
  console.log("VERIFICANDO UM BOOLEANO");
  for (let i in objetoMusica) {
    if (objetoMusica[i].germanSongs === true) {
      console.log(`${objetoMusica[i].nameMusic} faz músicas em alemão`);
    } else {
      console.log(` ${objetoMusica[i].nameMusic} faz músicas em inglês`);
    }
  }
}
verificarBooleano(music);

let soma = 0;
console.log("IMPRIMINDO MÉDIA DE DURAÇAO ENTRE AS MÚSICAS (EM SEGUNDO)");
for (let i = 0; i < music.length; i++) {
  soma += music[i].duration;
}

console.log(
  `A média de duração (em segunddos) entre as músicas é de ${
    soma / music.length
  }`
);
