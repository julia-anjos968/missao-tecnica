let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  /*
  let itemAlphaRemovido = inventarioAlpha.pop();

  console.log("Depois do pop");
  console.table(inventarioAlpha);

  console.log("Item removido:" , itemAlphaRemovido);

  let artefatoBetaRemovido = inventarioBeta.pop();

  console.log("Depois do pop");
  console.table(inventarioBeta);

  console.log("Artefato Removido:" , artefatoBetaRemovido);

  inventarioAlpha.push(["Golden Troup", "Terra", "11200"]);
  inventarioAlpha.push(["Selo da insulação", "Terra", "5400"]);
  inventarioAlpha.push(["Além-vida Cinábrio" ,"Terra" , "40000"]);
 
   console.log("Depois do push");
   console.table(inventarioAlpha);
 
   inventarioBeta.push(["Visão do Olho Humano", "Kepler", "15781"]);
   inventarioBeta.push(["Contribuições para a Astronomia", "Kepler", "5416"]);
  
    console.log("Depois do push");
    console.table(inventarioBeta);
  
    let itemRemovidoAlpha = inventarioAlpha.splice(4);

    console.log("Depois do splice");
    console.table(inventarioAlpha);


    inventarioAlpha.unshift(["Flor de Andrômeda", "Andrômeda", "13000"]);

    console.log("Depois do unshift");
    console.table(inventarioAlpha);
    
    let itemBetaRemovido = inventarioBeta.splice(6);

    console.log("Depois do splice");
    console.table(inventarioBeta);
    
    inventarioBeta.unshift(["Chave de Portais", "Júpiter", 5900]);
    
        console.log("Depois do unshift");
        console.table(inventarioBeta); */
    
let artefatoIncorretoAlpha = inventarioAlpha.shift();

console.log("Depois do shift");
console.table(inventarioAlpha);

let primeiroItemBetaRemovido = inventarioBeta.shift();

console.log("Depois do shift");
console.table(inventarioBeta)

console.log(`nomes dos 10 primeiros itens da beta: ${inventarioBeta.slice(0,10)}`);

let novaListaBeta = inventarioBeta.slice(0,5);

console.log(`nova lista com os 5 primeiros itens da nave Beta: ${novaListaBeta}`);
console.table(novaListaBeta);

let novaListaAlpha = inventarioAlpha.slice (14,23);

console.log(`os 10 últimos itens do inventário Alpha: ${novaListaAlpha}`);
console.table(novaListaAlpha);

let quintoItemSubstituido = inventarioAlpha.splice(5,1);

console.log(`quinto item da Alpha foi substituído: ${quintoItemSubstituido}`);
console.table(quintoItemSubstituido);