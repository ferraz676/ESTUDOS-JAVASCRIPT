import prompt from 'prompt-sync';
let ler = prompt();

console.log("Informe a quantidade de números desejada: ");
let qtd = ler();
let numeros = [];


for(let cont = qtd - 1 ; cont >= 0; cont--){
    numeros[cont] = Number(ler());
}

console.log("Você digitou os números: ");


for(let item of numeros){
    console.log(item);
}