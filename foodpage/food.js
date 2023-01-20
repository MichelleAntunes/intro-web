let food = [
  {
    imgFood: "../imgs/bratwurst.jpg",
    nameFood: `Bratwurst`,
    descripion: `Bratwurst é a salsicha alemã mais comum, a assada, bem vermelhinha e grandes, embora haja outros tamanhos. É feita de carne moída e vai bem com vários pratos, porém, é mais famosa servida dentro do pão ou com batatas.`,
    vegetarian: false,
    kcal: 230,
  },
  {
    imgFood: "../imgs/chucrute.jpg",
    nameFood: `Sauerkraut`,
    descripion: `Sauerkraut é um prato com repolho temperado com diversos ingredientes, mais conhecido no Brasil como Chucrute, geralmente é um prato que não é servido sozinho, sendo acompanhado de outras comidas tradicionais.`,
    vegetarian: true,
    kcal: 20,
  },
  {
    imgFood: "../imgs/eisbein.jpg",
    nameFood: `Eisbein`,
    descripion: `Eisbein é o joelho de porco cozido com um sabor um pouco forte, portanto, talvez não seja de agrado para todos os gostos.Servido na maioria das vezes com batatas cozidas, o prato é até simples se não fosse o tamanho da carne: é servida a peça inteira do joelho por cima das batatas.`,
    vegetarian: false,
    kcal: 145,
  },
  {
    imgFood: "../imgs/schnitzel.jpg",
    nameFood: `Schnitzel`,
    descripion: `Schnitzel é muito parecido com o nosso popular bife à milanesa, só que o corte é bem mais fino, à base de carne de porco ou vitela. Além disso, de acompanhamentos, pode ir uma bela salada, como até mesmo o Sauerkraut, fora que fatias de limão e uma bela porção de fritas também são bem comuns.`,
    vegetarian: false,
    kcal: 188,
  },
  {
    imgFood: "../imgs/brezel.jpg",
    nameFood: `Brezel`,
    descripion: `Brezel é um tipo de pão muito popular entre as populações de língua alemã, sendo portanto bastante difundido na Alemanha, Áustria e Suíça. Em forma de nó, é seco e habitualmente assado, podendo ser doce ou salgado.`,
    vegetarian: true,
    kcal: 226,
  },
];

const curiosidades = document.getElementById("curiosidade2");
const armazenar = curiosidades.innerHTML;

const input = document.getElementById("input");

input.addEventListener("input", (e) => {
  let informacao = e.target.value;
  let filterMusic = food.filter((card) => {
    return card.nameFood.toLowerCase().includes(informacao);
  });

  curiosidades.innerHTML = "";
  let info = "";
  for (card of filterMusic) {
    info += `
      
      <div class="card" id="cards-food"> 
      <img id="img-food"src="${card.imgFood}"></img>
      <p><strong> Name city: </strong> ${card.nameFood}</p>
      <p><strong> Stade: </strong>${card.descripion} </p>
           
      </div>`;
  }
  curiosidades.innerHTML += info;
  if (informacao === "") {
    curiosidades.innerHTML = armazenar;
    console.log(armazenar);
  }
});

//imprimindo meu objeto
for (foods of food) {
  console.log("IMPRIMINDO MEU OBJETO");
  for (propriedade in foods) {
    console.log(`${propriedade}: ${foods[propriedade]}`);
  }
  console.log("----------------------");
}
//primiera função verificando um objeto

function verificarComida(objetoComida) {
  console.log("VERIFICANDO UM OBJETO");
  for (let foods in objetoComida) {
    console.log(` O nome do castelo é: ${objetoComida[foods].nameFood} `);
  }
}

verificarComida(food);

// segunda funcao verificando um objeto e uma string
function verificarComidas(objetoComida, nameComida) {
  console.log("VERIFICANDO UM OBJETO E UMA STRING");
  let comidaEncontrada = "";
  console.log();

  for (let i in objetoComida) {
    if (objetoComida[i].nameFood.includes(nameComida)) {
      comidaEncontrada = objetoComida[i].nameFood;

      console.log(`Castelo pesquisado: ${comidaEncontrada}`);
    }
  }
  if (comidaEncontrada == "") {
    console.log(`Castelo pesquisado: ${nameComida} No results found`);
  }
}

verificarComidas(food, "BANANINHA");

//terceira funcao verificando o booleano

function verificarBooleano(objetoComida) {
  for (let i in objetoComida) {
    console.log("VERIFICANDO UM BOOLEANO");
    if (objetoComida[i].visitation === true) {
      console.log(`${objetoComida[i].nameComida} pode ser visitado`);
    } else {
      console.log(` ${objetoComida[i].nameComida} não pode ser visitada `);
    }
  }
}
verificarBooleano(food);

//média de habitantes por for
let soma = 0;
for (let i = 0; i < food.length; i++) {
  soma += food[i].kcal;
}
console.log("IMPRIMINDO A MÉDIA DE KCAL DOS ALIMENTOS (POR 100G)  ");
console.log(`A média de kcl/100g entre as comidas é ${soma / food.length}`);
