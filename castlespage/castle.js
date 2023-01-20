let castle = [
  {
    imgCastle: "../imgs/castleeltz.png",
    nameCastle: `Castelo de Eltz (Burg Eltz)`,
    descripion: `Datado do ano de 850 e situado nas colinas acima do rio Mosel, este belo castelo foi um dos poucos da região que permaneceu intacto durante todas as guerras desde sua construção. Ele ainda pertence à mesma família (Família Eltz) desde o século XII, 33 gerações atrás. `,
    visitation: true,
    approximateAge: 850,
  },
  {
    imgCastle: "../imgs/castlehohenzollern.jpg",
    nameCastle: `Castelo Hohenzollern`,
    descripion: `O castelo Hohenzollern atual, na verdade é o terceiro construído neste local. O terceiro e atual castelo foi construído entre 1846 e 1867 como um memorial da família pelo rei Frederico Guilherme IV da Prússia, herdeiro da dinastia Hohenzollern.A casa real von Hohenzollern é uma das mais importantes famílias nobres européias que fundaram o Império Alemão, da qual era a casa real através da dinastia com o mesmo nome. `,
    visitation: true,
    approximateAge: 55,
  },
  {
    imgCastle: "../imgs/castlemarksburg.jpg",
    nameCastle: `Castelo Marksburg`,
    descripion: `O castelo Marksburg pode se orgulhar do título que nenhum outro na região possui: em mais de 800 anos, o castelo nunca foi destruído. O castelo foi construído aproximadamente em 1117 para proteger a cidade de Braubach e para reforçar as práticas aduaneiras. Os senhores de Eppstein construíram o complexo do castelo românico, e estavam entre as famílias mais poderosas da época. `,
    visitation: true,
    approximateAge: 800,
  },
  {
    imgCastle: "../imgs/wartburgcastle.jpg",
    nameCastle: `Castelo de Wartburg`,
    descripion: `Este castelo além de grande beleza, possui um importante significado para os cristãos, pois foi o lar de Santa Isabel da Hungria, e também o local onde Martinho Lutero traduziu o Novo Testamento da Bíblia para o alemão.  O Wartburg é um castelo originalmente construído na Idade Média, com sua fundação lançada por volta de 1067 pelo conde Ludwig de Schauenburg.`,
    visitation: true,
    approximateAge: 955,
  },
  {
    imgCastle: "../imgs/castlereichsburg.jpg",
    nameCastle: `Castelo de Cochem `,
    descripion: `Localizado a mais de 90 metros de altura em uma colina às margens do rio Mosel, o castelo de Cochem, datado de 1100, servia para cobrar pedágios dos navios que passavam naquela altura do rio Mosel. Porém, o castelo que vemos hoje é diferente do que havia no século XII. Em 1688, os franceses invadiram as regiões do rio Reno e do rio Mosel do Palatinado, que incluíam Cochem e seu castelo. As tropas francesas conquistaram o castelo e depois destruíram não apenas ele, mas também a cidade.`,
    visitation: true,
    approximateAge: 922,
  },
  {
    imgCastle: "../imgs/castlealbrechtsberg.jpg",
    nameCastle: `Castelo Albrechtsberg `,
    descripion: `É um magnífico castelo gótico, que fica em uma colina com vista para o rio Elba na cidade de Meissen. A fortaleza foi construída no século X e o atual castelo foi construído 500 anos depois, no mesmo local. Aliás, não deixe de visitar a Catedral que fica bem ao lado.`,
    visitation: true,
    approximateAge: 160,
  },
  {
    imgCastle: "../imgs/castleheidelberg.jpg",
    nameCastle: `Castelo Heidelberg `,
    descripion: `Sem dúvida, uma das ruínas mais famosas de castelo no mundo, são as ruínas do Schloss Heidelberg. Este castelo incrível fica na cidade de mesmo nome, Heidelberg e é sua maior atração. É impressionante caminhar e imaginar a batalha com os franceses, que culminou na destruição quase que total do castelo. Ao contrário do Schloss Reichsburg, ele nunca foi reconstruído à sua antiga glória. `,
    visitation: true,
    approximateAge: 809,
  },
  {
    imgCastle: "../imgs/castlehohenschwangau.jpg",
    nameCastle: `Castelo Hohenschwangau `,
    descripion: `Do castelo à beira do lago, um jovem príncipe Ludwig podia ver as outras ruínas até a colina e deixar sua imaginação correr solta. Ele iria mais tarde construir o Schloss Neuschwanstein e muitos outros projetos extravagantes que o levou a ser chamado de “Rei Louco”. Os quartos do Schloss Hohenschwangau são muito interessantes e bem decorados, intactos da época que a família real vivia no castelo. `,
    visitation: true,
    approximateAge: 186,
  },
  {
    imgCastle: "../imgs/castlelichtenstein.jpg",
    nameCastle: `Castelo Lichtenstein `,
    descripion: `Ele está empoleirado em um penhasco íngreme e é tão surreal que parece ter saído de um livro de conto de fadas. Lindo é pouco para descrevê-lo. Apesar de ser pequeno perto dos outros castelos, o seu charme é enorme. Inclusive ele atende pelo apelido de “irmão mais novo do Schloss Neuschwanstein”, `,
    visitation: true,
    approximateAge: 180,
  },
  {
    imgCastle: "../imgs/castlelöwenburg.jpg",
    nameCastle: `Castelo Löwenburg (Castelo do Leão) `,
    descripion: `É um romântico castelo medieval localizado na pitoresca Bergpark Willhelmshöhe, em Kassel. Embora seja um dos mais belos castelos do mundo, na verdade é uma imitação (cara) da arquitetura medieval, já que foi construído entre 1793 e 1801. No início, o castelo era uma verdadeira obra-prima, mas começou a cair em ruínas após a morte de Landgraf Wilhelm IX. Atualmente ele é parte Wilhelmshöhe Park, que é um ótimo lugar para se visitar, e é bem mantido. `,
    visitation: true,
    approximateAge: 300,
  },
];

const curiosidades = document.getElementById("curiosidade2");
const armazenar = curiosidades.innerHTML;

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  let informacao = e.target.value;
  let filterCastle = castle.filter((card) => {
    return card.nameCastle.toLowerCase().includes(informacao);
  });

  curiosidades.innerHTML = "";
  let info = "";
  for (card of filterCastle) {
    info += `
        
        <div class="card" id="cards-castle"> 
        <img id="img-food"src="${card.imgCastle}"></img>
        <p><strong>   ${card.nameCastle} </strong></p>
        <p>${card.descripion} </p>
             
        </div>`;
  }
  curiosidades.innerHTML += info;
  if (informacao === "") {
    curiosidades.innerHTML = armazenar;
    console.log(armazenar);
  }
});

//imprimindo meu objeto
for (castles of castle) {
  console.log("IMPRIMINDO MEU OBJETO");
  for (propriedade in castles) {
    console.log(`${propriedade}: ${castles[propriedade]}`);
  }
}
//primiera função verificando um objeto
console.log("----------------------");
function verificarCastelo(objetoCastle) {
  console.log("VERIFICANDO UM OBJETO");
  for (let castles in objetoCastle) {
    console.log(` O nome do castelo é: ${objetoCastle[castles].nameCastle} `);
  }
}

verificarCastelo(castle);
console.log("----------------------");
// segunda funcao verificando um objeto e uma string
function verificarCastle(objetoCastle, nameCastle) {
  console.log("VERIFICANDO UM OBJETO E UMA STRING");
  let casteloEncontrado = "";

  for (let i in objetoCastle) {
    if (objetoCastle[i].nameCastle.includes(nameCastle)) {
      casteloEncontrado = objetoCastle[i].nameCastle;
      console.log(`Castelo pesquisado: ${casteloEncontrado}`);
    }
  }
  if (casteloEncontrado == "") {
    console.log(`Castelo pesquisado: ${nameCastle} No results found`);
  }
}

verificarCastle(castle, "BANANINHA");

console.log("----------------------");
//terceira funcao verificando o booleano

function verificarBooleano(objetoCastle) {
  console.log("VERIFICANDO UM BOOLEANO");
  for (let i in objetoCastle) {
    console.log("VERIFICANDO UM BOOLEANO");
    if (objetoCastle[i].visitation === true) {
      console.log(`${objetoCastle[i].nameCastle} pode ser visitado`);
    } else {
      console.log(` ${objetoCastle[i].nameCastle} não pode ser visitada `);
    }
  }
}
verificarBooleano(castle);
console.log("----------------------");
//média de habitantes por for
let soma = 0;
for (let i = 0; i < castle.length; i++) {
  soma += castle[i].approximateAge;
}
console.log("IMPRIMINDO A MÉDIA DE IDADE DOS OS CASTELOS ");
console.log(`A média de habitantes entre as cidades é ${soma / castle.length}`);
