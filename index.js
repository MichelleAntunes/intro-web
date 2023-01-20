let city = [
  {
    img: "/weimar.jpg",
    nameCity: `Weimar`,
    stade: "Turíngia",
    quantity: 65004,
    capital: "No",
    capitalBooleano: false,
    foundationYear: 1918,
    mainParty: "Zwiebelfest and Weimarer Weihnacht",
  },
  {
    img: "./hamburgo.jpg",
    nameCity: `München(Munique)`,
    stade: "Bayern",
    quantity: 1487708,
    capital: "Yes",
    capitalBooleano: true,
    foundationYear: 1158,
    mainParty: "Oktoberfest ",
  },
  {
    img: "./hamburgo.jpg",
    nameCity: `Hamburgo`,
    stade: "Sachsen",
    quantity: 1835882,
    capital: "No",
    capitalBooleano: false,
    foundationYear: 808,
    mainParty: "Internationales Musikfest Hamburg and Stadtpark Open Air ",
  },
  {
    img: "./dortmund.jpg",
    nameCity: `Dortmund`,
    stade: "Nordrhein-Westfalen",
    quantity: 587696,
    capital: "No",
    capitalBooleano: false,
    foundationYear: 885,
    mainParty: "Dortmund Christmas Market",
  },
  {
    img: "./dresden.jpg",
    nameCity: "Dresden",
    stade: "Saxônia",
    quantity: 554649,
    capital: "Yes",
    capitalBooleano: true,
    foundationYear: 1173,
    mainParty: " Striezelmarkt and Bunte Republik Neustadt",
  },
  {
    img: "./nürnberg.jpg",
    nameCity: " Nürnberg",
    stade: "Stade: Bavária",
    quantity: 518365,
    capital: "No",
    capitalBooleano: false,
    foundationYear: 1040,
    mainParty: "Nürnberg Christkindlesmarkt and Classic Open Air",
  },
];

const curiosidades = document.getElementById("curiosidade2");
const armazenar = curiosidades.innerHTML;

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  let informacao = e.target.value;
  let filterCity = city.filter((card) => {
    return card.nameCity.toLowerCase().includes(informacao);
  });

  curiosidades.innerHTML = "";
  let info = "";
  for (card of filterCity) {
    info += `
    
    <div class="card" id="cards-city"> 
    <img id="img-city"src="${card.img}"></img>
    <p><strong> Name city: </strong> ${card.nameCity}</p>
    <p><strong> Stade: </strong>${card.stade} </p>
    <p><strong> Quantity of people: </strong>${card.quantity} </p>
    <p><strong> Capital: </strong>${card.capital} </p>
    <p><strong>Year of fundation: </strong>${card.foundationYear} </p>
    <p><strong> Main party: </strong>${card.mainParty} </p>
    
    </div>`;
  }
  curiosidades.innerHTML += info;
  if (informacao === "") {
    curiosidades.innerHTML = armazenar;
    console.log(armazenar);
  }
});

//imprimindo meu objeto
for (cities of city) {
  console.log("IMPRIMINDO MEU OBJETO");
  for (propriedade in cities) {
    console.log(`${propriedade}: ${cities[propriedade]}`);
  }
}
console.log("----------------------");
//primeira função verificando um objeto

function verificarCapital(objetoCidade) {
  for (let cidade in city) {
    console.log(
      ` A cidade de ${city[cidade].nameCity}, pertence ao estado:  ${city[cidade].stade} `
    );
  }
}

verificarCapital(city);
console.log("----------------------");
// segunda funcao verificando um objeto e uma string
function verificarCidade(objetoCidade, nomeCidade) {
  console.log("VERIFICANDO UM OBJETO E UMA STRING");
  let cidadeEncontrada = "";

  for (let i in objetoCidade) {
    if (objetoCidade[i].nameCity.includes(nomeCidade)) {
      cidadeEncontrada = objetoCidade[i].nameCity;
      console.log(`Cidade pesquisada: ${cidadeEncontrada}`);
    }
  }
  if (cidadeEncontrada == "") {
    console.log(`Cidade pesquisadoa: ${nomeCidade}No results found`);
  }
}

verificarCidade(city, "Dresden");
console.log("----------------------");
//terceira funcao verificando o booleano

function verificarBooleano(objetoCidade) {
  console.log("VERIFICANDO UM BOOLEANO");
  for (let i in objetoCidade) {
    if (objetoCidade[i].capitalBooleano === true) {
      console.log(
        `${objetoCidade[i].nameCity} é a capital do estado ${objetoCidade[i].stade}`
      );
    } else {
      console.log(
        ` ${objetoCidade[i].nameCity} não é a capital ${objetoCidade[i].stade}`
      );
    }
  }
}
verificarBooleano(city);
console.log("----------------------");
let soma = 0;
console.log("IMPRIMINDO MÉDIA DE HABITANTES ENTRE AS CIDADES USANDO FOR");
for (let i = 0; i < city.length; i++) {
  soma += city[i].quantity;
}

console.log(`A média de habitantes entre as cidades  é ${soma / city.length}`);
