import prompt from  "prompt-sync";
let ler = prompt();

console.log("Insira 5 nomes: ");
let nomes = [];

for (let cont = 0; cont < 5; cont++){
    nomes[cont] = ler();
}

console.log("Você digitou os nomes: ");

for(let item of nomes){
    console.log(item);
}